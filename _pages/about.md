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

I’m an incoming PhD student in the Department of Computer Science at Fudan University, advised by Professor [Xipeng Qiu](https://scholar.google.com/citations?user=Pq4Yp_kAAAAJ&hl=en), with a research focus on multimodal large language models.

My research interests also include computer vision, large language models, and AI safety. I have published several papers at international AI conferences, with total <a href='https://scholar.google.com/citations?user=jQSagnIAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>.

I am actively engaged in academic collaborations with institutions including Tsinghua University (CoAI Lab, Professor [Minlie Huang](https://scholar.google.com/citations?user=P1jPSzMAAAAJ&hl=zh-CN)), EPFL (Professor [Pascal Fua](https://scholar.google.com/citations?user=kzFmAkYAAAAJ&hl=en) and [Jiancheng Yang](https://scholar.google.com/citations?user=EHkDyiUAAAAJ)), Peking University, NUS, NTU, HKU, among others. I am looking for highly self-motivated students with a strong background and interest in my research areas. If you are interested in working with me, please send your CV or homepage via buaa42wxy@gmail.com.



# 🔥 News

- *2025.06*: &nbsp;🎉🎉 [DiffAtlas was accepted by MICCAI 2025](https://arxiv.org/pdf/2503.06748).
- *2025.01*: &nbsp;🎉🎉 [Lefusion was accepted by ICLR 2025 (Spotlight) Top 0.1%](https://arxiv.org/abs/2403.14066).
- *2024.12*: &nbsp;🎉🎉 AISafetyLab github repo released <a href='https://github.com/thu-coai/AISafetyLab'><img src="https://img.shields.io/github/stars/thu-coai/AISafetyLab"></a>. Thanks for the collaboration with the Tsinghua [CoAI](https://github.com/thu-coai) team.
- *2024.12*: &nbsp;🎉🎉 [O2M_attack was accepted by AAAI 2025](https://arxiv.org/abs/2405.20775).
- *2024.06*: &nbsp;🎉🎉 [O2M_attack](https://arxiv.org/abs/2405.20775) dataset 3MAD-Tiny-1K released [![3MAD-Tiny-1K](../images/dataset-on-hf-sm.svg)](https://huggingface.co/datasets/MedMLLM-attack/3MAD-Tiny-1K) 3MAD-66K released [![3MAD-66K](../images/dataset-on-hf-sm.svg)](https://huggingface.co/datasets/MedMLLM-attack/3MAD-66K)

- *2024.06*: &nbsp;🎉🎉 [O2M_attack](https://arxiv.org/abs/2405.20775) github repo released <a href='https://github.com/dirtycomputer/O2M_attack'><img src="https://img.shields.io/github/stars/dirtycomputer/O2M_attack"></a>.

- *2024.03*: &nbsp;🎉🎉 [LightM-UNet](https://arxiv.org/pdf/2403.05246.pdf) github repo released <a href='https://github.com/mrblankness/lightm-unet'><img src="https://img.shields.io/github/stars/MrBlankness/LightM-UNet"></a>.

- *2024.01*: &nbsp;🎉🎉 [BiPFT(accepted by AAAI 2024) was reported by BAAI](https://mp.weixin.qq.com/s/ibBaWCdDcF2pA-Ug9XH1gQ). 
- *2023.12*: &nbsp;🎉🎉 [BiPFT was accepted by AAAI 2024](https://arxiv.org/pdf/2312.08937.pdf) github repo released <a href='https://github.com/Xingrun-Xing/BiPFT'><img src="https://img.shields.io/github/stars/Xingrun-Xing/BiPFT"></a>.
- *2023.10*: &nbsp;🎉🎉 [Fseg was accepted by BIBM 2023](https://ieeexplore.ieee.org/abstract/document/10386064). 
- *2023.10*: &nbsp;🎉🎉 Fseg was supported by the [National Key R&D Program of China](https://en.most.gov.cn/programmes1/200610/t20061009_36224.htm).

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'>
<div><div class="badge">arxiv release</div><img src='../images/projects/DiffusionAttacker.png' alt="sym" width="80%"></div>
</div>
<div class='paper-box-text' markdown="1">

[DiffusionAttacker: Diffusion-Driven Prompt Manipulation for LLM Jailbreak](https://arxiv.org/abs/2412.17522)

Hao Wang, Hao Li, Junda Zhu, **Xinyuan Wang**, [Chengwei Pan](https://scholar.google.com/citations?user=7i1dqbEAAAAJ&hl=en), [Minlie Huang](https://scholar.google.com/citations?user=P1jPSzMAAAAJ&hl=zh-CN), [Lei Sha](https://scholar.google.com/citations?user=EbZ_P6gAAAAJ&hl=zh-CN)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'>
<div><div class="badge">MICCAI 2025</div><img src='../images/projects/DiffAtlas.png' alt="sym" width="80%"></div>
</div>
<div class='paper-box-text' markdown="1">

[DiffAtlas: GenAI-fying Atlas Segmentation via Image-Mask Diffusion](https://arxiv.org/pdf/2503.06748)

Hantao Zhang, Yuhe Liu, [Jiancheng Yang](https://jiancheng-yang.com/), Weidong Guo, **Xinyuan Wang**, Wei Peng, [Pascal Fua](https://scholar.google.com/citations?user=kzFmAkYAAAAJ&hl=en)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'>
<div><div class="badge">technical report</div><img src='../images/projects/AISafetyLab.png' alt="sym" width="80%"></div>
</div>
<div class='paper-box-text' markdown="1">

[AISafetyLab: A Comprehensive Framework for AI Safety Evaluation and Improvement](https://arxiv.org/pdf/2502.16776)

[Zhexin Zhang](https://scholar.google.com/citations?user=I-Cn8gkAAAAJ&hl=zh-CN), [Leqi Lei](https://scholar.google.com/citations?user=j65DJIEAAAAJ&hl=zh-CN), [Junxiao Yang](https://scholar.google.com/citations?user=8Zu6HocAAAAJ&hl=zh-CN), [Xijie Huang](https://scholar.google.com/citations?user=pL5W9z4AAAAJ&hl=en), [Yida Lu](https://openreview.net/profile?id=~Yida_Lu1), [Shiyao Cui](https://scholar.google.com/citations?user=sVXAK-kAAAAJ&hl=zh-CN), [Renmiao Chen](https://openreview.net/profile?id=~Renmiao_Chen1), Qinglin Zhang, **Xinyuan Wang**, Hao Wang, [Hao Li](https://scholar.google.com/citations?user=iZcvrH8AAAAJ), Xianqi Lei, [Chengwei Pan](https://scholar.google.com/citations?user=7i1dqbEAAAAJ&hl=en), [Lei Sha](https://scholar.google.com/citations?user=EbZ_P6gAAAAJ&hl=zh-CN), [Hongning Wang](https://scholar.google.com/citations?hl=en&user=qkdvKNoAAAAJ&view_op=list_works&sortby=pubdate), [Minlie Huang](https://scholar.google.com/citations?user=P1jPSzMAAAAJ&hl=zh-CN)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'>
<div><div class="badge">arxiv release</div><img src='../images/projects/BlackDAN.png' alt="sym" width="80%"></div>
</div>
<div class='paper-box-text' markdown="1">

[BlackDAN: A Black-Box Multi-Objective Approach for Effective and Contextual Jailbreaking of Large Language Models](https://arxiv.org/abs/2410.09804)

**Xinyuan Wang**, [Victor Shea-Jay Huang](https://scholar.google.com/citations?user=pL5W9z4AAAAJ&hl=en), Renmiao Chen, Hao Wang, [Chengwei Pan](https://scholar.google.com/citations?user=7i1dqbEAAAAJ&hl=en), [Lei Sha](https://scholar.google.com/citations?user=EbZ_P6gAAAAJ&hl=zh-CN), [Minlie Huang](https://scholar.google.com/citations?user=P1jPSzMAAAAJ&hl=zh-CN)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'>
<div><div class="badge">ICLR 2025 Spotlight</div><img src='../images/projects/LeFusion.png' alt="sym" width="80%"></div>
</div>
<div class='paper-box-text' markdown="1">

[LeFusion: Controllable Pathology Synthesis via Lesion-Focused Diffusion Models](https://arxiv.org/abs/2403.14066)

Hantao Zhang, Yuhe Liu, [Jiancheng Yang](https://jiancheng-yang.com/), [Shouhong Wan](https://cs.ustc.edu.cn/2020/0906/c23239a460133/page.htm), **Xinyuan Wang**, Wei Peng, [Pascal Fua](https://scholar.google.com/citations?user=kzFmAkYAAAAJ&hl=en)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'>
<div><div class="badge">AAAI 2025</div><img src='../images/projects/3MAD.png' alt="sym" width="80%"></div>
</div>
<div class='paper-box-text' markdown="1">

[Medical MLLM is Vulnerable: Cross-Modality Jailbreak and Mismatched Attacks on Medical Multimodal Large Language Models](https://arxiv.org/abs/2405.20775)

[Xijie Huang](https://github.com/JeixHuang), **Xinyuan Wang**, [Hantao Zhang](https://openreview.net/profile?id=~Hantao_Zhang2), [Yinghao Zhu](https://yhzhu99.github.io), Jiawen Xi, [Jingkun An](https://scholar.google.com/citations?hl=zh-CN&user=gtoavQoAAAAJ), Hao Wang, [Hao Liang](https://scholar.google.com/citations?hl=zh-CN&user=HgapY3sAAAAJ&view_op=list_works&sortby=pubdate), [Chengwei Pan](https://scholar.google.com/citations?user=7i1dqbEAAAAJ&hl=en)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'>
<div><div class="badge">arxiv release</div><img src='../images/projects/LightM-UNet.png' alt="sym" width="80%"></div>
</div>
<div class='paper-box-text' markdown="1">

[LightM-UNet: Mamba Assists in Lightweight
UNet for Medical Image Segmentation](https://arxiv.org/pdf/2403.05246.pdf)


[Weibin Liao](https://scholar.google.com/citations?hl=zh-CN&user=4yUXvDsAAAAJ), [Yinghao Zhu](https://yhzhu99.github.io), **Xinyuan Wang**, [Chengwei Pan](https://scholar.google.com/citations?user=7i1dqbEAAAAJ&hl=en), [Yasha Wang](https://www.aminer.cn/profile/yasha-wang/542cc019dabfae4b91c24265), [Liantao Ma](http://scholar.pku.edu.cn/malt)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'>
<div><div class="badge">AAAI 2024</div><img src='../images/projects/BiPFT.png' alt="sym" width="80%"></div>
</div>
<div class='paper-box-text' markdown="1">

[BiPFT: Binary Pre-trained Foundation Transformer with Low-rank Estimation of
Binarization Residual Polynomials](https://arxiv.org/pdf/2312.08937.pdf)

[Xingrun Xing](https://scholar.google.com.hk/citations?hl=zh-CN&user=sEdxu1UAAAAJ&view_op=list_works&sortby=pubdate),[Li Du](https://scholar.google.com.hk/citations?user=ag1JoOEAAAAJ&hl=zh-CN), **Xinyuan Wang**, Xianlin Zeng, [Yequan Wang](https://www.wangyequan.com), [Zheng Zhang](https://scholar.google.com/citations?hl=zh-CN&user=S2bil1cAAAAJ&view_op=list_works&sortby=pubdate), [Jiajun Zhang](https://nlpr.ia.ac.cn/cip/jjzhang.htm)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">BIBM 2023</div><img src='../images/projects/Fseg.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">

[Leveraging Frequency Domain Learning in 3D
Vessel Segmentation](https://arxiv.org/pdf/2401.06224.pdf)

**Xinyuan Wang**, [Chengwei Pan](https://scholar.google.com/citations?user=7i1dqbEAAAAJ&hl=en), [Hongming Dai](https://www.linkedin.com/in/hongming-dai-76b936176/), [Gangming Zhao](https://scholar.google.com/citations?user=bRKA7fUAAAAJ&hl=en), [Jinpeng Li](https://scholar.google.com/citations?user=hzEaITAAAAAJ&hl=zh-CN), Xiao Zhang, [Yizhou Yu](https://i.cs.hku.hk/~yzyu/)
</div>
</div>

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div>

- [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** -->

# 🎖 Honors and Awards
- *2025.03* [ICME 2025](https://2025.ieeeicme.org/) reviewer
- *2025.03* [NeurIPS 2025](https://neurips.cc/Conferences/2025) reviewer
- *2024.12* [AAAI 2025](https://aaai.org/conference/aaai/aaai-25/) student scholarship
- *2024.12* [ICML 2025](https://icml.cc/Conferences/2025) reviewer
- *2024.10* Outstanding League Member, Beihang University
- *2024.10* 1st-Class Scholarship, Beihang University
- *2024.08* [ICLR 2025](https://iclr.cc/Conferences/2025) reviewer
- *2024.05* [Neurips 2024](https://neurips.cc/Conferences/2024) reviewer
- *2024.05* [ACM MM 2024](https://2024.acmmm.org/) reviewer
- *2024.04* Outstanding graduate student, Beihang University
- *2023.11* [Student Union President](https://iai.buaa.edu.cn/info/1011/2924.htm), Institute of Artificial Intelligence, Beihang University
- *2023.10* Outstanding Student Cadre, Beihang University
- *2023.10* 1st-Class Scholarship, Beihang University
- *2023.07* [Silver Diploma](https://mp.weixin.qq.com/s/EgRv-WxUEUq_sCSDsjBKgA), World Choir Games 2023🎵
- *2023* Rank 2/42 in Beihang University
- *2022* Rank 14/277 in Northeastern University

# 📖 Educations
- *2025.09 - *, PhD. (supervised by [Xipeng Qiu](https://scholar.google.com/citations?user=Pq4Yp_kAAAAJ&hl=en)) in [College of Computer Science and Artificial Intelligence](https://cs.fudan.edu.cn/), Fudan University, Shanghai, China
- *2022.09 - 2025.06*, M.Eng. (supervised by [Chengwei Pan](https://scholar.google.com/citations?user=7i1dqbEAAAAJ&hl=en)) in [Institute of Artificial Intelligence](https://iai.buaa.edu.cn/), Beihang University, Beijing, China
- *Fall 2023*, Design and Analysis of Algorithms, Teaching Assistant, Beihang University
- *2018.09 - 2022.06*, B.Eng. (supervised by [Peng Cao](https://scholar.google.com/citations?user=0OfgZSsAAAAJ&hl=zh-CN)) in School of Computer Science and Engineering, Northeastern University, Shenyang, China

# 💬 Invited Talks
- *2023.12*, Istanbul, Turkey. He delivered a [keynote speech](https://bidma.cpsc.ucalgary.ca/IEEE-BIBM-2023/documents/BIBM2023-Program-1208.pdf) on the topic of "Leveraging Frequency Domain Learning in 3D Coronary Segmentation" at the BIBM 2023 conference. 
<!-- - *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) 
-->

# 💻 Internships
- *2025.01 - present*, [Shanghai Artificial Intelligence Laboratory](https://www.shlab.org.cn/), Shanghai, China. He was a research intern in Center for Safe & Trustworthy AI under the supervision of [Xun Zhao](https://emmaxunzhao.github.io/) and [Chaochao Lu](https://causallu.com/bio/).
- *2024.04 - present*, [Tsinghua University](https://www.tsinghua.edu.cn/), China. He was a research intern in Professor [Minlie Huang](https://coai.cs.tsinghua.edu.cn/hml)'s group at Tsinghua University, focusing on the safety issues of Multimodal Large Language Models (LLMs).
- *2023.02 - 2023.08*, [Beijing Academy of Artificial Intelligence(BAAI)](https://www.baai.ac.cn/), China. He was a research intern in the Cognitive Large-Scale Model Group mentored by [Xin Jiang](https://scholar.google.com/citations?user=3mqJwa8AAAAJ&hl=zh-CN) and [Yequan Wang](https://www.wangyequan.com/).
- *2022.09 - 2023.02*, Key Laboratory of Mathematics, Informatics and Behavioral Semantics, Ministry of Education, Beijing, China.
- *2022.01 - 2022.02*, NC State University, USA. He participated in the GEARS program at North Carolina State University in 2022, under the supervision of [Hien Tran](https://math.sciences.ncsu.edu/people/tran/). The project focused on Airplane Detection and Classification.
- *2021.06 - 2022.06*, Key Laboratory of Intelligent Computing in Medical Image of Ministry of Education, Northeastern University, Shenyang, China. He was a research intern mentored by [Peng Cao](https://scholar.google.com/citations?user=0OfgZSsAAAAJ&hl=zh-CN) aiming at medical segmentation tasks.
- *2019.03 - 2021.06*, Northeastern University, China. He was a research intern mentored by [Qidong Zhao](https://scholar.google.com/citations?hl=zh-CN&user=cFAcguwAAAAJ&view_op=list_works&sortby=pubdate), [Zhuoran Liu](https://scholar.google.com/citations?user=tEyLvJQAAAAJ&hl=zh-CN), [Changsheng Zhang](https://dblp.org/pid/70/1079-1.html) and [Bin Zhang](https://dblp.org/pid/13/5236-1.html). His research focuses on multi-objective optimization and path planning problems. This work was supported by the [Key Project of National Natural Science Foundation of China](https://www.nsfc.gov.cn/english/site_1/) (U1908212) and the Fundamental Research Funds for the Central Universities (N2017013, N2017014).

# 👨🏻‍🎓 Collaborators

- Hongming Dai (National University of Singapore)
- Xingrun Xing (Beijing Academy of Artificial Intelligence, Chinese Academy of Sciences)
- Yinghao Zhu (Beihang Univeristy)
- Gangming Zhao (The University of Hong Kong)
- Hantao Zhang (University of Science and Technology of China -> EPFL)
- Hao Wang (Beihang Univeristy)
- Jingkun An (Beihang Univeristy)
- Renmiao Chen (Tsinghua University)
- Zekun Wang (Beihang University)
- Jiancheng Yang (EPFL)
- Leqi Lei (Tsinghua University) 
- Zhexin Zhang (Tsinghua University)

<!-- 
- Wenhui Tan (Renmin Univeristy of China)
- Mengqun Jin (Tsinghua University)
- Zhiru Wang (Beihang University)
- Shiyun Xie (Beihang University)
- Pei Ke (Tsinghua University)
- Shiyao Cui (Tsinghua University)
- Minlie Huang (Tsinghua University)
- Lei Sha (Beihang University)
-->

# 👨🏻‍💻 Undergraduate Research Assistant

- Zihao Fu (Beihang University -> Tsinghua University)
- Haoyu Hu (Beihang University -> Institute of Automation, Chinese Academy of Sciences)
- Jiaze Song (Beihang University -> Peking University)
- Yuhan Duan (Beihang University -> Beihang University) 
- Jiawen Xi (Beihang University -> Beihang University) 
- Xijie Huang (Beihang University -> present) 
- Xinhui Huang (Beihang University -> present) 
- Chenxiao Yue (Beihang University -> present) 
- Rong Fan (Beihang University -> present) 
- Wenjie Pan (Beihang University -> present) 
- Yuhe Liu (Beihang University -> present) 
- Yizhe Wang (Beihang University -> present) 

# Contact

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfUuNo92pBpF_s7coJ-AbKw4CJ_RHCX1CmstSHePxksip0yew/viewform?embedded=true" width="840" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

# 🌍 Website Visiting Map

<script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=ItepywghaB7DpioDsZd9QS7Q8t6BfxyDtA3DlM0OKgM&cl=ffffff&w=a"></script>