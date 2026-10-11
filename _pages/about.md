---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a PhD student in Computer Science at Fudan University, advised by Prof. [Xipeng Qiu](https://scholar.google.com/citations?user=Pq4Yp_kAAAAJ&hl=en). My research focuses on multimodal large language models, with particular interests in post-training and AI safety.

I also work on large language models and computer vision. My research has been published at venues including ACL, ICML, ICLR, EMNLP, AAAI, and MICCAI.

<a href='https://scholar.google.com/citations?user=jQSagnIAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>

I have collaborated with researchers from Tsinghua University, EPFL, Peking University, NUS, NTU, HKU, and other institutions. I am open to research collaborations and working with highly motivated students interested in related topics. If you would like to work with me, please send your CV or homepage to buaa42wxy@gmail.com.



<span class='anchor' id='news'></span>
# 🔥 News

- *2026.07*: &nbsp;🎉🎉 [TIKE was accepted to ACL 2026 Main (Long Paper)](https://aclanthology.org/2026.acl-long.405/).
- *2026.05*: &nbsp;🎉🎉 [BandPO was accepted to ICML 2026](https://arxiv.org/abs/2603.04918).
- *2026.03*: &nbsp;🎉🎉 [BandPO](https://arxiv.org/abs/2603.04918) code released <a href='https://github.com/OpenMOSS/BandPO.git'><img src="https://img.shields.io/github/stars/OpenMOSS/BandPO"></a>.
- *2025.08*: &nbsp;🎉🎉 [DiffusionAttacker was accepted to EMNLP 2025](https://arxiv.org/abs/2412.17522).
- *2025.08*: &nbsp;🎉🎉 [DiffAtlas was accepted to MICCAI 2025 (Spotlight)](https://arxiv.org/abs/2503.06748).
- *2025.06*: &nbsp;🎉🎉 DiffAtlas code released <a href='https://github.com/HINTLab/DiffAtlas'><img src="https://img.shields.io/github/stars/HINTLab/DiffAtlas"></a>.
- *2025.01*: &nbsp;🎉🎉 [LeFusion was accepted to ICLR 2025 (Spotlight)](https://arxiv.org/abs/2403.14066).
- *2025.01*: &nbsp;🎉🎉 LeFusion code released <a href='https://github.com/HINTLab/LeFusion'><img src="https://img.shields.io/github/stars/HINTLab/LeFusion"></a>. Thanks for the collaboration with the EPFL [CVLab](https://www.epfl.ch/labs/cvlab/) team.
- *2024.12*: &nbsp;🎉🎉 AISafetyLab code released <a href='https://github.com/thu-coai/AISafetyLab'><img src="https://img.shields.io/github/stars/thu-coai/AISafetyLab"></a>. Thanks for the collaboration with the Tsinghua [CoAI](https://github.com/thu-coai) team.
- *2024.12*: &nbsp;🎉🎉 [O2M_attack was accepted to AAAI 2025](https://arxiv.org/abs/2405.20775).
- *2024.06*: &nbsp;🎉🎉 [O2M_attack](https://arxiv.org/abs/2405.20775) datasets released: 3MAD-Tiny-1K [![3MAD-Tiny-1K](../images/dataset-on-hf-sm.svg)](https://huggingface.co/datasets/MedMLLM-attack/3MAD-Tiny-1K) and 3MAD-66K [![3MAD-66K](../images/dataset-on-hf-sm.svg)](https://huggingface.co/datasets/MedMLLM-attack/3MAD-66K).
- *2024.06*: &nbsp;🎉🎉 [O2M_attack](https://arxiv.org/abs/2405.20775) code released <a href='https://github.com/dirtycomputer/O2M_attack'><img src="https://img.shields.io/github/stars/dirtycomputer/O2M_attack"></a>.
- *2024.03*: &nbsp;🎉🎉 [LightM-UNet](https://arxiv.org/abs/2403.05246.pdf) code released <a href='https://github.com/mrblankness/lightm-unet'><img src="https://img.shields.io/github/stars/MrBlankness/LightM-UNet"></a>.
- *2024.01*: &nbsp;🎉🎉 [BiPFT (accepted to AAAI 2024) was reported by BAAI](https://mp.weixin.qq.com/s/ibBaWCdDcF2pA-Ug9XH1gQ).
- *2023.12*: &nbsp;🎉🎉 [BiPFT was accepted to AAAI 2024](https://arxiv.org/abs/2312.08937.pdf); code released <a href='https://github.com/Xingrun-Xing/BiPFT'><img src="https://img.shields.io/github/stars/Xingrun-Xing/BiPFT"></a>.
- *2023.10*: &nbsp;🎉🎉 [Fseg was accepted to BIBM 2023](https://ieeexplore.ieee.org/abstract/document/10386064).
- *2023.10*: &nbsp;🎉🎉 Fseg was supported by the [National Key R&D Program of China](https://en.most.gov.cn/programmes1/200610/t20061009_36224.htm).

<span class='anchor' id='publications'></span>
# 📝 Publications

<div class='paper-box'><div class='paper-box-image'>
<div><div class="badge">ACL 2026 Main (Long Paper)</div><img src='../images/projects/TIKE.png' alt="TIKE method overview" width="80%"></div>
</div>
<div class='paper-box-text' markdown="1">

[TIKE: Efficient KL Divergence Estimation via Truncated Top-K Integration for Large Language Models](https://aclanthology.org/2026.acl-long.405/)

[**Xinyuan Wang**](https://scholar.google.com/citations?user=jQSagnIAAAAJ), [Luozhijie Jin](https://scholar.google.com/citations?user=0Au6-0IAAAAJ&hl=zh-CN), [Bo Wang](https://scholar.google.com/citations?user=Q8xj86EAAAAJ&hl=zh-CN), [Yuan Li](https://scholar.google.com/citations?user=UmKOAF0AAAAJ), [Zhangyue Yin](https://scholar.google.com/citations?user=9gRQqSkAAAAJ), [Xipeng Qiu](https://scholar.google.com/citations?user=Pq4Yp_kAAAAJ&hl=en)

[Paper](https://aclanthology.org/2026.acl-long.405/) · arXiv · [Code](https://github.com/jinluo12345/TIKE) · Dataset
</div>
</div>

<div class='paper-box'><div class='paper-box-image'>
<div><div class="badge">ICML 2026</div><img src='../images/projects/BandPO.png' alt="BandPO method overview" width="80%"></div>
</div>
<div class='paper-box-text' markdown="1">

[BandPO: Bridging Trust Regions and Ratio Clipping via Probability-Aware Bounds for LLM Reinforcement Learning](https://proceedings.mlr.press/v306/li26gm.html)

[Yuan Li](https://scholar.google.com/citations?user=UmKOAF0AAAAJ), [Bo Wang](https://scholar.google.com/citations?user=Q8xj86EAAAAJ&hl=zh-CN), [Yufei Gao](https://scholar.google.com/citations?user=yUzpCD4AAAAJ&hl=zh-CN), Yuqian Yao, [**Xinyuan Wang**](https://scholar.google.com/citations?user=jQSagnIAAAAJ), [Zhangyue Yin](https://scholar.google.com/citations?user=9gRQqSkAAAAJ), [Xipeng Qiu](https://scholar.google.com/citations?user=Pq4Yp_kAAAAJ&hl=en)

[Paper](https://proceedings.mlr.press/v306/li26gm.html) · [arXiv](https://arxiv.org/abs/2603.04918) · [Code](https://github.com/OpenMOSS/BandPO) · Dataset
</div>
</div>

<div class='paper-box'><div class='paper-box-image'>
<div><div class="badge">EMNLP 2025</div><img src='../images/projects/DiffusionAttacker.png' alt="DiffusionAttacker method overview" width="80%"></div>
</div>
<div class='paper-box-text' markdown="1">

[DiffusionAttacker: Diffusion-Driven Prompt Manipulation for LLM Jailbreak](https://aclanthology.org/2025.emnlp-main.1128/)

[Hao Wang](https://scholar.google.com/citations?hl=en&user=LfbCou8AAAAJ), [Hao Li](https://scholar.google.com/citations?user=iZcvrH8AAAAJ&hl=en), [Junda Zhu](https://scholar.google.com/citations?user=NrsJYwkAAAAJ&hl=zh-CN), [**Xinyuan Wang**](https://scholar.google.com/citations?user=jQSagnIAAAAJ), [Chengwei Pan](https://scholar.google.com/citations?user=7i1dqbEAAAAJ&hl=en), [Minlie Huang](https://scholar.google.com/citations?user=P1jPSzMAAAAJ&hl=zh-CN), [Lei Sha](https://scholar.google.com/citations?user=EbZ_P6gAAAAJ&hl=zh-CN)

[Paper](https://aclanthology.org/2025.emnlp-main.1128/) · [arXiv](https://arxiv.org/abs/2412.17522) · Code · Dataset
</div>
</div>

<div class='paper-box'><div class='paper-box-image'>
<div><div class="badge">MICCAI 2025 Spotlight</div><img src='../images/projects/DiffAtlas.png' alt="DiffAtlas method overview" width="80%"></div>
</div>
<div class='paper-box-text' markdown="1">

[DiffAtlas: GenAI-fying Atlas Segmentation via Image-Mask Diffusion](https://papers.miccai.org/miccai-2025/0231-Paper0228.html)

[Hantao Zhang](https://scholar.google.com/citations?hl=en&user=7RJH908AAAAJ), Yuhe Liu, [Jiancheng Yang](https://jiancheng-yang.com/), Weidong Guo, [**Xinyuan Wang**](https://scholar.google.com/citations?user=jQSagnIAAAAJ), [Wei Peng](https://scholar.google.com/citations?user=TDFM0QYAAAAJ&hl=zh-CN), [Pascal Fua](https://scholar.google.com/citations?user=kzFmAkYAAAAJ&hl=en)

[Paper](https://papers.miccai.org/miccai-2025/0231-Paper0228.html) · [arXiv](https://arxiv.org/abs/2503.06748) · [Code](https://github.com/HINTLab/DiffAtlas) · [Dataset](https://huggingface.co/datasets/YuheLiuu/DiffAtlas_Preprocessed_Data)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'>
<div><div class="badge">Technical Report</div><img src='../images/projects/AISafetyLab.png' alt="AISafetyLab framework overview" width="80%"></div>
</div>
<div class='paper-box-text' markdown="1">

[AISafetyLab: A Comprehensive Framework for AI Safety Evaluation and Improvement](https://arxiv.org/abs/2502.16776)

[Zhexin Zhang](https://scholar.google.com/citations?user=I-Cn8gkAAAAJ&hl=zh-CN), [Leqi Lei](https://scholar.google.com/citations?user=j65DJIEAAAAJ&hl=zh-CN), [Junxiao Yang](https://scholar.google.com/citations?user=8Zu6HocAAAAJ&hl=zh-CN), [Xijie Huang](https://scholar.google.com/citations?user=pL5W9z4AAAAJ&hl=en), [Yida Lu](https://openreview.net/profile?id=~Yida_Lu1), [Shiyao Cui](https://scholar.google.com/citations?user=sVXAK-kAAAAJ&hl=zh-CN), [Renmiao Chen](https://openreview.net/profile?id=~Renmiao_Chen1), Qinglin Zhang, [**Xinyuan Wang**](https://scholar.google.com/citations?user=jQSagnIAAAAJ), [Hao Wang](https://scholar.google.com/citations?hl=en&user=LfbCou8AAAAJ), [Hao Li](https://scholar.google.com/citations?user=iZcvrH8AAAAJ&hl=en), Xianqi Lei, [Chengwei Pan](https://scholar.google.com/citations?user=7i1dqbEAAAAJ&hl=en), [Lei Sha](https://scholar.google.com/citations?user=EbZ_P6gAAAAJ&hl=zh-CN), [Hongning Wang](https://scholar.google.com/citations?hl=en&user=qkdvKNoAAAAJ&view_op=list_works&sortby=pubdate), [Minlie Huang](https://scholar.google.com/citations?user=P1jPSzMAAAAJ&hl=zh-CN)

Paper · [arXiv](https://arxiv.org/abs/2502.16776) · [Code](https://github.com/thu-coai/AISafetyLab) · Dataset
</div>
</div>

<div class='paper-box'><div class='paper-box-image'>
<div><div class="badge">arXiv</div><img src='../images/projects/BlackDAN.png' alt="BlackDAN method overview" width="80%"></div>
</div>
<div class='paper-box-text' markdown="1">

[BlackDAN: A Black-Box Multi-Objective Approach for Effective and Contextual Jailbreaking of Large Language Models](https://arxiv.org/abs/2410.09804)

[**Xinyuan Wang**](https://scholar.google.com/citations?user=jQSagnIAAAAJ), [Victor Shea-Jay Huang](https://scholar.google.com/citations?user=pL5W9z4AAAAJ&hl=en), Renmiao Chen, [Hao Wang](https://scholar.google.com/citations?hl=en&user=LfbCou8AAAAJ), [Chengwei Pan](https://scholar.google.com/citations?user=7i1dqbEAAAAJ&hl=en), [Lei Sha](https://scholar.google.com/citations?user=EbZ_P6gAAAAJ&hl=zh-CN), [Minlie Huang](https://scholar.google.com/citations?user=P1jPSzMAAAAJ&hl=zh-CN)

Paper · [arXiv](https://arxiv.org/abs/2410.09804) · Code · Dataset
</div>
</div>

<div class='paper-box'><div class='paper-box-image'>
<div><div class="badge">ICLR 2025 Spotlight</div><img src='../images/projects/LeFusion.png' alt="LeFusion method overview" width="80%"></div>
</div>
<div class='paper-box-text' markdown="1">

[LeFusion: Controllable Pathology Synthesis via Lesion-Focused Diffusion Models](https://proceedings.iclr.cc/paper_files/paper/2025/hash/233d16f17f809981763db2f01b7f9603-Abstract-Conference.html)

[Hantao Zhang](https://scholar.google.com/citations?hl=en&user=7RJH908AAAAJ), Yuhe Liu, [Jiancheng Yang](https://jiancheng-yang.com/), [Shouhong Wan](https://cs.ustc.edu.cn/2020/0906/c23239a460133/page.htm), [**Xinyuan Wang**](https://scholar.google.com/citations?user=jQSagnIAAAAJ), [Wei Peng](https://scholar.google.com/citations?user=TDFM0QYAAAAJ&hl=zh-CN), [Pascal Fua](https://scholar.google.com/citations?user=kzFmAkYAAAAJ&hl=en)

[Paper](https://proceedings.iclr.cc/paper_files/paper/2025/hash/233d16f17f809981763db2f01b7f9603-Abstract-Conference.html) · [arXiv](https://arxiv.org/abs/2403.14066) · [Code](https://github.com/HINTLab/LeFusion) · Dataset
</div>
</div>

<div class='paper-box'><div class='paper-box-image'>
<div><div class="badge">AAAI 2025</div><img src='../images/projects/3MAD.png' alt="Medical MLLM jailbreak attack overview" width="80%"></div>
</div>
<div class='paper-box-text' markdown="1">

[Medical MLLM is Vulnerable: Cross-Modality Jailbreak and Mismatched Attacks on Medical Multimodal Large Language Models](https://ojs.aaai.org/index.php/AAAI/article/view/32396)

[Xijie Huang](https://github.com/JeixHuang), [**Xinyuan Wang**](https://scholar.google.com/citations?user=jQSagnIAAAAJ), [Hantao Zhang](https://scholar.google.com/citations?hl=en&user=7RJH908AAAAJ), [Yinghao Zhu](https://yhzhu99.github.io), Jiawen Xi, [Jingkun An](https://scholar.google.com/citations?hl=zh-CN&user=gtoavQoAAAAJ), [Hao Wang](https://scholar.google.com/citations?hl=en&user=LfbCou8AAAAJ), [Hao Liang](https://scholar.google.com/citations?hl=zh-CN&user=HgapY3sAAAAJ&view_op=list_works&sortby=pubdate), [Chengwei Pan](https://scholar.google.com/citations?user=7i1dqbEAAAAJ&hl=en)

[Paper](https://ojs.aaai.org/index.php/AAAI/article/view/32396) · [arXiv](https://arxiv.org/abs/2405.20775) · [Code](https://github.com/dirtycomputer/O2M_attack) · [Dataset-1K](https://huggingface.co/datasets/MedMLLM-attack/3MAD-Tiny-1K) · [Dataset-66K](https://huggingface.co/datasets/MedMLLM-attack/3MAD-66K)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'>
<div><div class="badge">arXiv</div><img src='../images/projects/LightM-UNet.png' alt="LightM-UNet architecture overview" width="80%"></div>
</div>
<div class='paper-box-text' markdown="1">

[LightM-UNet: Mamba Assists in Lightweight UNet for Medical Image Segmentation](https://arxiv.org/abs/2403.05246)

[Weibin Liao](https://scholar.google.com/citations?hl=zh-CN&user=4yUXvDsAAAAJ), [Yinghao Zhu](https://yhzhu99.github.io), [**Xinyuan Wang**](https://scholar.google.com/citations?user=jQSagnIAAAAJ), [Chengwei Pan](https://scholar.google.com/citations?user=7i1dqbEAAAAJ&hl=en), [Yasha Wang](https://www.aminer.cn/profile/yasha-wang/542cc019dabfae4b91c24265), [Liantao Ma](http://scholar.pku.edu.cn/malt)

Paper · [arXiv](https://arxiv.org/abs/2403.05246) · [Code](https://github.com/MrBlankness/LightM-UNet) · Dataset
</div>
</div>

<div class='paper-box'><div class='paper-box-image'>
<div><div class="badge">AAAI 2024</div><img src='../images/projects/BiPFT.png' alt="BiPFT method overview" width="80%"></div>
</div>
<div class='paper-box-text' markdown="1">

[BiPFT: Binary Pre-trained Foundation Transformer with Low-rank Estimation of Binarization Residual Polynomials](https://ojs.aaai.org/index.php/AAAI/article/view/29542)

[Xingrun Xing](https://scholar.google.com.hk/citations?hl=zh-CN&user=sEdxu1UAAAAJ&view_op=list_works&sortby=pubdate), [Li Du](https://scholar.google.com.hk/citations?user=ag1JoOEAAAAJ&hl=zh-CN), [**Xinyuan Wang**](https://scholar.google.com/citations?user=jQSagnIAAAAJ), Xianlin Zeng, [Yequan Wang](https://www.wangyequan.com), [Zheng Zhang](https://scholar.google.com/citations?hl=zh-CN&user=S2bil1cAAAAJ&view_op=list_works&sortby=pubdate), [Jiajun Zhang](https://nlpr.ia.ac.cn/cip/jjzhang.htm)

[Paper](https://ojs.aaai.org/index.php/AAAI/article/view/29542) · [arXiv](https://arxiv.org/abs/2312.08937) · [Code](https://github.com/Xingrun-Xing/BiPFT) · Dataset
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">BIBM 2023</div><img src='../images/projects/Fseg.png' alt="Frequency-domain 3D vessel segmentation overview" width="80%"></div></div>
<div class='paper-box-text' markdown="1">

[Leveraging Frequency Domain Learning in 3D Vessel Segmentation](https://ieeexplore.ieee.org/abstract/document/10386064)

[**Xinyuan Wang**](https://scholar.google.com/citations?user=jQSagnIAAAAJ), [Chengwei Pan](https://scholar.google.com/citations?user=7i1dqbEAAAAJ&hl=en), [Hongming Dai](https://www.linkedin.com/in/hongming-dai-76b936176/), [Gangming Zhao](https://scholar.google.com/citations?user=bRKA7fUAAAAJ&hl=en), [Jinpeng Li](https://scholar.google.com/citations?user=hzEaITAAAAAJ&hl=zh-CN), Xiao Zhang, [Yizhou Yu](https://i.cs.hku.hk/~yzyu/)

[Paper](https://ieeexplore.ieee.org/abstract/document/10386064) · [arXiv](https://arxiv.org/abs/2401.06224) · Code · Dataset
</div>
</div>

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div>

- [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** -->

<span class='anchor' id='honors-awards'></span>
# 🎖 Honors & Awards

- *2025.06* Outstanding Graduate, Beihang University
- *2024.12* [AAAI 2025](https://aaai.org/conference/aaai/aaai-25/) student scholarship
- *2024.10* Outstanding League Member, Beihang University
- *2024.10* First-Class Scholarship, Beihang University
- *2024.04* Outstanding Postgraduate Student, Beihang University
- *2023.11* [Student Union President](https://iai.buaa.edu.cn/info/1011/2924.htm), Institute of Artificial Intelligence, Beihang University
- *2023.10* Outstanding Student Cadre, Beihang University
- *2023.10* First-Class Scholarship, Beihang University
- *2023.07* [Silver Diploma](https://mp.weixin.qq.com/s/EgRv-WxUEUq_sCSDsjBKgA), World Choir Games 2023🎵
- *2023* Rank 2/42 in Beihang University
- *2022* Rank 14/277 in Northeastern University

<span class='anchor' id='academic-service'></span>
# 🧑‍⚖️ Academic Service

- *2026.08* [AAAI 2027](https://aaai.org/conference/aaai/aaai-27/) reviewer
- *2026.08* [ICLR 2027](https://iclr.cc/Conferences/2027) reviewer
- *2026.02* [ACL ARR 2026](https://2026.aclweb.org/) reviewer
- *2025.09* [ICLR 2026](https://iclr.cc/Conferences/2026) reviewer
- *2025.07* [AAAI 2026](https://aaai.org/Conferences/AAAI-26/) Program Committee member
- *2025.03* [ICME 2025](https://2025.ieeeicme.org/) reviewer
- *2025.03* [NeurIPS 2025](https://neurips.cc/Conferences/2025) reviewer
- *2024.12* [ICML 2025](https://icml.cc/Conferences/2025) reviewer
- *2024.08* [ICLR 2025](https://iclr.cc/Conferences/2025) reviewer
- *2024.05* [NeurIPS 2024](https://neurips.cc/Conferences/2024) reviewer
- *2024.05* [ACM MM 2024](https://2024.acmmm.org/) reviewer

<span class='anchor' id='education'></span>
# 📖 Education
- *2025.09 - present*, PhD. (supervised by [Xipeng Qiu](https://scholar.google.com/citations?user=Pq4Yp_kAAAAJ&hl=en)) in [College of Computer Science and Artificial Intelligence](https://cs.fudan.edu.cn/), Fudan University, Shanghai, China
- *2022.09 - 2025.06*, M.Eng. (supervised by [Chengwei Pan](https://scholar.google.com/citations?user=7i1dqbEAAAAJ&hl=en)) in [Institute of Artificial Intelligence](https://iai.buaa.edu.cn/), Beihang University, Beijing, China
- *2018.09 - 2022.06*, B.Eng. (supervised by [Peng Cao](https://scholar.google.com/citations?user=0OfgZSsAAAAJ&hl=zh-CN)) in School of Computer Science and Engineering, Northeastern University, Shenyang, China

<span class='anchor' id='teaching'></span>
# 👨🏻‍🏫 Teaching
- *2026.07* Teaching assistant at the [SII Summer School on Reinforcement Learning 2026](https://www.sii.edu.cn/2026/0530/c60a1078/page.htm), instructed by [Richard S. Sutton](https://incompleteideas.net/) (2024 ACM A.M. Turing Award laureate), jointly organized by [Shanghai Innovation Institute](https://www.sii.edu.cn/), [Openmind Research Institute](https://www.openmindresearch.org/), and [Shanghai Jiao Tong University (SJTU)](https://en.sjtu.edu.cn/). [[Certificate]](/assets/files/summer_school_TA.pdf)
- *Fall 2025*, Introduction to Artificial Intelligence, Teaching Assistant, Fudan University ([Xuanjing Huang](https://scholar.google.com/citations?user=RGsMgZA4H78C&hl=en))
- *Fall 2023*, Design and Analysis of Algorithms, Teaching Assistant, Beihang University ([Chengwei Pan](https://scholar.google.com/citations?user=7i1dqbEAAAAJ&hl=en))

<span class='anchor' id='invited-talks'></span>
# 💬 Invited Talks
- *2026.03*, Shanghai, China. Guest speaker at iLearn Techtube, [HSBC Shanghai](https://www.hsbc.com.cn/), on the topic of "AI Agent: Practical and Deployable Intelligent Agent Design", together with [Shoujing (Sherwin) Zhu](https://www.linkedin.com/in/shoujing-z-114a4b212/) and [Torres (Haorong) Yao](https://www.linkedin.com/in/torresyao/).
- *2023.12*, Istanbul, Turkey. Keynote speaker at [IEEE BIBM 2023](https://bidma.cpsc.ucalgary.ca/IEEE-BIBM-2023/documents/BIBM2023-Program-1208.pdf) on "Leveraging Frequency Domain Learning in 3D Coronary Segmentation."
<!-- - *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) 
-->

<span class='anchor' id='internships'></span>
# 💻 Internships
- *2025.01 - present*, [Shanghai Artificial Intelligence Laboratory](https://www.shlab.org.cn/), Shanghai, China. Research intern at the Center for Safe & Trustworthy AI, supervised by [Xun Zhao](https://emmaxunzhao.github.io/) and [Chaochao Lu](https://causallu.com/bio/).
- *2024.04 - present*, [Tsinghua University](https://www.tsinghua.edu.cn/), China. Research intern in Prof. [Minlie Huang](https://coai.cs.tsinghua.edu.cn/hml)'s group, focusing on the safety of multimodal large language models.
- *2023.02 - 2023.08*, [Beijing Academy of Artificial Intelligence (BAAI)](https://www.baai.ac.cn/), China. Research intern in the Cognitive Large-Scale Model Group, mentored by [Xin Jiang](https://scholar.google.com/citations?user=3mqJwa8AAAAJ&hl=zh-CN) and [Yequan Wang](https://www.wangyequan.com/).
- *2022.09 - 2023.02*, Key Laboratory of Mathematics, Informatics and Behavioral Semantics, Ministry of Education, Beijing, China.
- *2022.01 - 2022.02*, NC State University, USA. Participant in the GEARS program, supervised by [Hien Tran](https://math.sciences.ncsu.edu/people/tran/). Project focused on airplane detection and classification.
- *2021.06 - 2022.06*, Key Laboratory of Intelligent Computing in Medical Image of Ministry of Education, Northeastern University, Shenyang, China. Research intern, mentored by [Peng Cao](https://scholar.google.com/citations?user=0OfgZSsAAAAJ&hl=zh-CN), working on medical image segmentation.
- *2019.03 - 2021.06*, Northeastern University, China. Research intern, mentored by [Qidong Zhao](https://scholar.google.com/citations?hl=zh-CN&user=cFAcguwAAAAJ&view_op=list_works&sortby=pubdate), [Zhuoran Liu](https://scholar.google.com/citations?user=tEyLvJQAAAAJ&hl=zh-CN), [Changsheng Zhang](https://dblp.org/pid/70/1079-1.html), and [Bin Zhang](https://dblp.org/pid/13/5236-1.html). Research focused on multi-objective optimization and path planning.
# 👨🏻‍🎓 Collaborators

- Hongming Dai (National University of Singapore)
- Xingrun Xing (Beijing Academy of Artificial Intelligence, Chinese Academy of Sciences)
- Yinghao Zhu (Beihang University -> The University of Hong Kong)
- Gangming Zhao (The University of Hong Kong)
- Hantao Zhang (University of Science and Technology of China -> EPFL)
- Hao Wang (Beihang University)
- Jingkun An (Beihang University)
- Renmiao Chen (Tsinghua University)
- Zekun Wang (Beihang University)
- Jiancheng Yang (EPFL)
- Leqi Lei (Tsinghua University) 
- Zhexin Zhang (Tsinghua University)
- Zhangyue Yin (Fudan University)
- Bo Wang (Fudan University)
- Yuan Li (Fudan University)
- Luozhijie Jin (Fudan University)

<!-- 
- Wenhui Tan (Renmin University of China)
- Mengqun Jin (Tsinghua University)
- Zhiru Wang (Beihang University)
- Shiyun Xie (Beihang University)
- Pei Ke (Tsinghua University)
- Shiyao Cui (Tsinghua University)
- Minlie Huang (Tsinghua University)
- Lei Sha (Beihang University)
-->

# 👨🏻‍💻 Undergraduate Research Assistants

- Zihao Fu (Beihang University -> Tsinghua University)
- Haoyu Hu (Beihang University -> Institute of Automation, Chinese Academy of Sciences)
- Jiaze Song (Beihang University -> Peking University)
- Yuhan Duan (Beihang University -> Beihang University) 
- Jiawen Xi (Beihang University -> Beihang University) 
- Xijie Huang (Beihang University -> The Chinese University of Hong Kong) 
- Yuhe Liu (Beihang University -> Tsinghua University) 
- Chenxiao Yue (Beihang University -> Tsinghua University) 
<!-- - Xinhui Huang (Beihang University -> present)  -->
<!-- - Rong Fan (Beihang University -> present)  -->
<!-- - Wenjie Pan (Beihang University -> present)  -->
<!-- - Yizhe Wang (Beihang University -> present)  -->

# Contact

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfUuNo92pBpF_s7coJ-AbKw4CJ_RHCX1CmstSHePxksip0yew/viewform?embedded=true" width="840" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

# 🌍 Website Visiting Map

<script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=ItepywghaB7DpioDsZd9QS7Q8t6BfxyDtA3DlM0OKgM&cl=ffffff&w=a"></script>