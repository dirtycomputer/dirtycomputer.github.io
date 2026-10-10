import json
import os
from datetime import datetime, timezone

import requests


SERPAPI_ENDPOINT = "https://serpapi.com/search.json"


def require_env(name: str) -> str:
    value = os.environ.get(name)
    if not value:
        raise RuntimeError(f"Missing required environment variable: {name}")
    return value


def get_metric(table: list[dict], metric_name: str) -> dict:
    for row in table:
        metric = row.get(metric_name)
        if isinstance(metric, dict):
            return metric
    return {}


def recent_value(metric: dict):
    for key, value in metric.items():
        if key != "all" and key.startswith("since_"):
            return value
    return None


def main() -> None:
    scholar_id = require_env("GOOGLE_SCHOLAR_ID")
    api_key = require_env("SERPAPI_KEY")

    response = requests.get(
        SERPAPI_ENDPOINT,
        params={
            "engine": "google_scholar_author",
            "author_id": scholar_id,
            "hl": "en",
            "api_key": api_key,
        },
        timeout=(10, 30),
    )

    if response.status_code != 200:
        raise RuntimeError(f"SerpApi returned HTTP {response.status_code}")

    data = response.json()
    if data.get("error"):
        raise RuntimeError(f"SerpApi error: {data['error']}")

    table = data.get("cited_by", {}).get("table", [])
    citations = get_metric(table, "citations")
    h_index = get_metric(table, "h_index")
    i10_index = get_metric(table, "i10_index")

    citedby = citations.get("all")
    if citedby is None:
        raise RuntimeError("SerpApi response did not contain cited_by.table citations.all")

    graph = data.get("cited_by", {}).get("graph", [])
    cites_per_year = {
        str(item["year"]): int(item["citations"])
        for item in graph
        if item.get("year") is not None and item.get("citations") is not None
    }

    articles = data.get("articles", [])
    publications = {
        article.get("citation_id") or f"article_{index}": article
        for index, article in enumerate(articles)
    }

    author_info = data.get("author", {})
    author = {
        "container_type": "Author",
        "filled": ["basics", "publications", "indices", "counts"],
        "scholar_id": scholar_id,
        "source": "SERPAPI_GOOGLE_SCHOLAR_AUTHOR",
        "name": author_info.get("name"),
        "affiliation": author_info.get("affiliations"),
        "interests": author_info.get("interests", []),
        "citedby": citedby,
        "citedby5y": recent_value(citations),
        "hindex": h_index.get("all"),
        "hindex5y": recent_value(h_index),
        "i10index": i10_index.get("all"),
        "i10index5y": recent_value(i10_index),
        "cites_per_year": cites_per_year,
        "publications": publications,
        "updated": datetime.now(timezone.utc).isoformat(),
        "serpapi_search_id": data.get("search_metadata", {}).get("id"),
    }

    print(
        json.dumps(
            {
                "name": author["name"],
                "scholar_id": scholar_id,
                "citedby": citedby,
                "hindex": author["hindex"],
                "updated": author["updated"],
            },
            indent=2,
            ensure_ascii=False,
        )
    )

    os.makedirs("results", exist_ok=True)
    with open("results/gs_data.json", "w", encoding="utf-8") as outfile:
        json.dump(author, outfile, ensure_ascii=False, indent=2)

    shieldsio_data = {
        "schemaVersion": 1,
        "label": "citations",
        "message": str(citedby),
    }
    with open("results/gs_data_shieldsio.json", "w", encoding="utf-8") as outfile:
        json.dump(shieldsio_data, outfile, ensure_ascii=False)


if __name__ == "__main__":
    main()
