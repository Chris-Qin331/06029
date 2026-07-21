# 一二级市场 AI 泡沫破裂：谁是最大赢家

**一份关于结构性出清、资本再分配与本轮 AI 周期概率推演的研究报告**

截稿日期：2026年7月21日 | 数据窗口：2025Q4–2026Q3(预测)

---

## 摘要（TL;DR）

1. **这不是一个会被"戳破归零"的泡沫，而是一个正在发生"非对称出清"的资本周期。** 二级市场对基础模型公司的定价已经出现明显分化——Anthropic 在二级市场估值冲高至 **1.2万亿美元**（一年涨550%，且几乎无人愿意卖出），OpenAI 则在经历高管出走、增长放缓的负面叙事后靠 GPT-5.6 系列和 Codex 重新获得买盘，五个买家争两个 OpenAI 卖家的名额（对比 Anthropic 的"有价无市"）[[1]](https://finance.yahoo.com/markets/stocks/articles/anthropic-beats-openai-secondary-markets-213828157.html)[[2]](https://dnyuz.com/2026/07/20/openai-has-seen-a-resurgence-of-interest-in-secondary-markets/)。这种分化本身就是泡沫论的最强反证之一：真泡沫是"雨露均沾"，而 2026 年年中的一二级市场已经在用脚投票排队站队了。
2. **杠杆和会计问题才是真正的风险传导层，而不是"AI没用"。** 循环融资（Nvidia→OpenAI→Oracle→Nvidia→CoreWeave→OpenAI）、超万亿规模的私募信贷/SPV 表外融资（已超 2000 亿美元存量，未来两年或再增 8000 亿美元）[[3]](https://www.tradingkey.com/analysis/stocks/us-stocks/261437703-Petar-Petrov)，以及 Michael Burry 提出的 GPU 折旧年限问题（他估算 2026-2028 年间行业或低估约 1760 亿美元折旧）[[4]](https://cryptobriefing.com/michael-burry-bear-case-ai-chips-gpu/)，是本轮周期最脆弱的三个节点。
3. **AI 资本开支已经是美国经济的"压舱石"**——Bridgewater 测算 2026 年 AI capex 贡献了美国 GDP 增速的约 50%（1.4个百分点/2.8%的整体增速），部分季度甚至贡献了 GDP 增长的 75%[[5]](https://www.edwardconard.com/macro-roundup/bridgewater-forecasts-real-us-gdp-growth-of-2-8-in-2026-with-ai-capex-contributing-1-4pp-50-this-year-and-growing-to-1-5pp-in-2027/)。这意味着"AI 减速"本身就足以制造一场技术性衰退——但这与"AI 是骗局"是两回事。
4. **概率判断：本轮 AI 相关的资产价格调整/局部去泡沫化，未来12个月发生概率约 55-65%（已经在发生，7月已现雏形）；但演变为拖累整体经济陷入 NBER 定义衰退的"系统性 AI 衰退"，概率约 20-30%**（与主流预测机构 RSM 30%、纽约联储 DSGE 模型 35.8%、Polymarket 隐含 16.8% 的区间基本吻合，详见第三部分）[[6]](https://www.the-world-now.com/recession-risk)[[7]](https://libertystreeteconomics.newyorkfed.org/2026/03/the-new-york-fed-dsge-model-forecast-march-2026/)。
5. **赢家不是一个笼统的"AI 行业"，而是产业链上极具体的层级和公司**：晶圆代工与先进封装（台积电）、HBM 存储寡头（SK 海力士）、电力与核能资产所有者（Constellation、Vistra、GE Vernova）、已经把 AI 变成真实现金流的应用层企业（Palantir、Microsoft、Anthropic、Cursor/Anysphere、Harvey、Glean）、以及手握主权资本、在泡沫出清阶段可以逢低扫货的海湾国家基金（MGX、G42、HUMAIN）。**输家同样具体**：靠债务堆砌算力、缺乏差异化收入的"影子云厂商"（Oracle、CoreWeave）、被大厂"许可+挖人"式收编的模型/Agent公司（Character.AI、Inflection AI、Adept）、95%注定失败的应用层长尾创业公司、以及为这些债务兜底的私募信贷/保险资金。
6. **一级市场是本轮周期分化最剧烈的战场，中美皆然**：美国的推理服务层（Together AI、Fireworks AI、Baseten）在几个月内估值翻数倍，本身即是新的局部泡沫信号；中国"六小虎"（智谱、MiniMax、月之暗面、阶跃星辰、百川智能、零一万物）已经出现清晰分层——智谱、MiniMax率先港股上市兑现，月之暗面靠Kimi K3的技术突破逆袭至200-300亿美元估值区间，百川智能、零一万物则明显掉队。具身智能/物理AI（Figure AI、Skild AI vs 宇树、智元）是资本正在迁移的下一站叙事，也是下一轮最值得警惕的局部泡沫候选区（详见第四部分4.4/4.5、第五部分实体经济分析）。

对于你提出的"河豚"比喻——我认为方向是对的，但需要一个更精确的修正：**这不是一整只河豚均匀地鼓起再均匀地瘪下去，而是一条鱼身上不同部位以完全不同的速度充气和放气**。鳃部（基础设施：电力、先进制程、HBM）几乎不会瘪，因为它对应真实、不可逆的物理稀缺性；而鱼鳍末梢（估值 100 倍以上、无差异化收入的长尾应用层创业公司、以及部分二级市场投机性持仓）会几乎瘪到消失。这不是全鱼收缩游向新方向，而是**局部器官永久增生、局部组织坏死脱落**——这个区分，恰恰决定了谁是赢家。

---

## 第一部分：泡沫体检——给一二级市场量体温

### 1.1 二级市场：估值分化即是"非泡沫"的证据

截至 2026 年 7 月，几家头部 AI 实验室在二级市场（员工老股、SPV 份额转让）的定价出现罕见分化：

| 公司 | 二级市场估值/趋势 | 关键动态 |
|---|---|---|
| Anthropic | 突破 **1.2万亿美元**，一年涨约550% | 卖家极度稀缺，成交量小、买卖价差大，反映的是"惜售溢价"而非流动性充裕[[1]](https://finance.yahoo.com/markets/stocks/articles/anthropic-beats-openai-secondary-markets-213828157.html) |
| OpenAI | 约 **9330亿美元**，近三个月涨 20% | GPT-5.6 Sol/Terra/Luna 系列 + Codex 带动买盘回暖，5:2 的买卖比[[2]](https://dnyuz.com/2026/07/20/openai-has-seen-a-resurgence-of-interest-in-secondary-markets/) |
| 一级市场融资集中度 | OpenAI+Anthropic 占 2026H1 全球风险投资 **43%**（$217B / $510B），前五大 AI 公司占全部 VC 的 **75%** | 记录性的 5100亿美元 H1 全球风投规模，但极度头部化[[8]](https://news.crunchbase.com/venture/global-startup-exits-ipo-ma-soar-ai-q2-h1-2026/) |

**解读**：真正的资产泡沫（2000年互联网、2021年SPAC）的特征是"阿猫阿狗都在涨"，流动性和估值倍数是普涨的。而 2026 年年中的一二级市场已经呈现清晰的"赢家通吃 + 尾部枯竭"结构——这是**结构性重估**的信号，而非**无差别狂热**的信号。这恰恰支持"局部出清、核心资产留存"的河豚修正模型，而不是均匀充气再均匀放气的简单比喻。

### 1.2 一级市场：VC 行业本身正在被"AI 巨头化"

- 2026 全年预计新增 800 亿美元私募信贷流入 AI 数据中心融资，叠加已有的 2000 亿美元存量，两年内管道规模可能突破万亿美元[[3]](https://www.tradingkey.com/analysis/stocks/us-stocks/261437703-Petar-Petrov)。
- 传统 VC 的角色正在被边缘化：90% 的软件类 VC 现在"只看 AI 项目"，但仅仅贴上 AI 标签已经不足以拿到支票，机构更看重留存率、真实客户转化和资本效率[[9]](https://qubit.capital/blog/ai-startup-fundraising-trends)。
- 编程自动化、销售自动化、营销 AI 这几个曾经最拥挤的赛道已经开始资本整合——没有明显差异化的新进入者，命运是"卖身"或"关停"[[9]](https://qubit.capital/blog/ai-startup-fundraising-trends)。

这意味着一级市场的"泡沫破裂"其实**已经在悄悄发生**，只是发生在聚光灯之外的长尾创业公司层面，而不是头部两三家公司。

### 1.3 循环融资网络：泡沫论最有力的技术性论据

英伟达投资 OpenAI → OpenAI 向 Oracle 采购云算力 → Oracle 向英伟达采购芯片 → 英伟达持有 CoreWeave 股权 → CoreWeave 向 OpenAI 提供算力基础设施[[10]](https://www.outlookbusiness.com/explainers/inside-the-ai-bubble-how-openai-nvidia-are-weaving-a-web-of-circular-deals)。

关键数字：
- OpenAI-Nvidia 协议规模约相当于英伟达 **2026 年预期营收的 13%**（基于 2720 亿美元营收共识）[[10]](https://www.outlookbusiness.com/explainers/inside-the-ai-bubble-how-openai-nvidia-are-weaving-a-web-of-circular-deals)。
- 若 2026 下半年落地 1GW 部署，将触发约 500-600 亿美元的总资本投入，其中英伟达拿走约 350 亿美元[[10]](https://www.outlookbusiness.com/explainers/inside-the-ai-bubble-how-openai-nvidia-are-weaving-a-web-of-circular-deals)。
- 四大云厂商的自由现金流正在被资本开支侵蚀：亚马逊已被推入负值区间，Alphabet、微软、Meta 的自由现金流同步被压缩[[10]](https://www.outlookbusiness.com/explainers/inside-the-ai-bubble-how-openai-nvidia-are-weaving-a-web-of-circular-deals)。

但需要强调的是，主流机构（包括 UBS、多数卖方分析师）的共识是：这类循环交易"规模显著但尚未失控"，与历史科网泡沫的关联方虚增收入（如世通、环球电讯）在**性质**上不同——目前的循环交易背后有真实的算力交付和真实的终端付费需求，只是在**放大**周期的波动性，而非**凭空创造**需求[[10]](https://www.outlookbusiness.com/explainers/inside-the-ai-bubble-how-openai-nvidia-are-weaving-a-web-of-circular-deals)。

### 1.4 影子杠杆：私募信贷与表外 SPV——最值得警惕的一环

这是本报告认为**风险不对称性最高**的一层：

- AI 相关私募信贷存量已超 **2000亿美元**，预计未来两年再流入 **8000亿美元**，形成万亿级管道[[3]](https://www.tradingkey.com/analysis/stocks/us-stocks/261437703-Petar-Petrov)。
- 云厂商通过设立独立法律实体的 SPV，把数据中心债务移出资产负债表，使公司报表显得比实际杠杆更低[[3]](https://www.tradingkey.com/analysis/stocks/us-stocks/261437703-Petar-Petrov)。
- 根本性风险：这些数据中心未来产生的 AI 服务收入，能否覆盖为建设它们而背负的巨额债务，目前完全没有历史验证[[3]](https://www.tradingkey.com/analysis/stocks/us-stocks/261437703-Petar-Petrov)。
- 保险公司通过一般账户资金参与这些 SPV，正在制造资产负债久期错配——保险监管的前提假设是"长久期负债匹配流动性好、分散化的资产"，而不是非流动、高度集中的算力赌注[[3]](https://www.tradingkey.com/analysis/stocks/us-stocks/261437703-Petar-Petrov)。
- 2026年2月穆迪报告：五大云厂商合计有 **6620亿美元**已签约但尚未启动的数据中心租赁承诺（不出现在当前资产负债表上），相当于这些公司合并调整后债务的约 **113%**[[4]](https://cryptobriefing.com/michael-burry-bear-case-ai-chips-gpu/)。

这一层如果出问题，传导路径不是"AI股票跌了"，而是"信用市场出问题"——这正是把"局部估值调整"升级为"系统性衰退"的关键传导带，也是第三部分概率推演的核心变量。

### 1.5 会计争议：GPU 折旧年限之争（Michael Burry 论点）

Burry 2026年的论点分三层[[4]](https://cryptobriefing.com/michael-burry-bear-case-ai-chips-gpu/)：

1. Meta、亚马逊、微软、谷歌、Oracle 把英伟达 GPU 的折旧年限设定为 5-6 年，而 Burry 认为实际经济寿命更接近 2-3 年（技术迭代速度决定）。
2. 这一会计选择在 2026-2028 年间可能导致行业**低估约 1760 亿美元的折旧、高估等额利润**。
3. 微软、谷歌、亚马逊、Meta 四家合计贡献英伟达数据中心营收的约一半，客户集中度意味着任何一家削减开支都会对英伟达营收产生放大冲击。

值得注意的反证：英伟达 2027 财年Q1（对应2026年5月披露）营收816亿美元，同比增85%，数据中心收入752亿美元、同比增92%，业绩超预期且上调指引，但股价当晚仍跌1.5%，随后一周再跌4.3%[[4]](https://cryptobriefing.com/michael-burry-bear-case-ai-chips-gpu/)——**"利好不涨"本身就是价格已经计入过度乐观预期、估值敏感度极高的信号**，这是判断"局部泡沫正在被定价"的重要证据。

### 1.6 已经开始的裂缝：2026年7月的芯片股抛售

不是预测，而是正在发生的事实：

- 7月16日当周，纳指跌 2.9%，标普500跌1.6%；费城半导体 ETF（SMH）当季度第三次单周下跌，累计跌近9%；费城半导体指数（SOX）从52周高点回撤超20%；美光股价从1213美元高点已跌17%[[11]](https://www.cnbc.com/2026/07/16/stock-market-today-live-updates.html)[[12]](https://truthsandnews.com/investing/chip-stocks-selloff-july-2026-ai-semiconductors-crashing)。
- 台湾加权指数、日经指数双双跌入技术性回调区间[[12]](https://truthsandnews.com/investing/chip-stocks-selloff-july-2026-ai-semiconductors-crashing)。
- 触发因素之一：中国大模型公司 Moonshot 发布 Kimi K3，被认为可对标 OpenAI/Anthropic 最强模型，市场将其与去年"DeepSeek 时刻"类比，担忧美国模型层的技术护城河和资本开支回报率[[12]](https://truthsandnews.com/investing/chip-stocks-selloff-july-2026-ai-semiconductors-crashing)。
- 背景是半导体板块在2026上半年已暴涨近65%——这更接近"拥挤交易的技术性回调"，而非基本面证伪[[12]](https://truthsandnews.com/investing/chip-stocks-selloff-july-2026-ai-semiconductors-crashing)。

**这次抛售的性质很重要**：它由中国开源模型的效率突破触发，而不是由需求证伪或财务暴雷触发。这再次印证本报告的核心判断——本轮出清更可能是"估值倍数的重定价"，而不是"产业根基的坍塌"。

---

## 第二部分：多空交锋

### 2.1 空方的核心论据

| 论据 | 关键数据 |
|---|---|
| 折旧被低估 | 2026-28年或低估1760亿美元（Burry）[[4]](https://cryptobriefing.com/michael-burry-bear-case-ai-chips-gpu/) |
| 表外债务/租赁承诺 | 6620亿美元未启动租赁承诺=五大厂商调整后债务的113%[[4]](https://cryptobriefing.com/michael-burry-bear-case-ai-chips-gpu/) |
| 循环融资 | OpenAI-Nvidia协议占英伟达2026营收13%[[10]](https://www.outlookbusiness.com/explainers/inside-the-ai-bubble-how-openai-nvidia-are-weaving-a-web-of-circular-deals) |
| 企业ROI乏力 | 95%的生成式AI试点未产生可衡量P&L影响（MIT，2025）；BCG 2026调查显示仅26%企业从AI投资中获得实质性财务价值；Gartner预测30%的2024年立项GenAI项目将在2026年底前被放弃[[13]](https://www.legal.io/blog/5719519/MIT-Report-Finds-95-of-AI-Pilots-Fail-to-Deliver-ROI-Exposing-GenAI-Divide)[[14]](https://www.terminal-x.ai/research/ai-roi-in-2026-why-most-enterprise-ai-fails-and-what-actually-works) |
| 指数集中度 | 前十大股票占标普500近40%，"七巨头"占约32%，历史均值仅24%[[15]](https://www.forbes.com/sites/investor-hub/article/sp-500-weight-mag-7-stocks-diversification-risk/) |
| 资本开支/营收剪刀差 | AI资本开支增速持续跑赢营收增速，市场开始重新定价这一缺口[[16]](https://www.forbes.com/sites/jasonkirsch/2026/06/02/the-ai-capex-to-revenue-gap-is-widening---and-markets-are-starting-to-notice/) |

### 2.2 多方的核心论据

- **利润和现金储备与2000年质的不同**：本轮基础设施建设者是人类历史上最赚钱、资产负债表最健康的公司（微软、Alphabet、Meta、亚马逊）+ 英伟达，它们拥有科网泡沫时代公司完全不具备的护城河和自融资能力[[17]](https://intuitionlabs.ai/articles/ai-bubble-vs-dot-com-comparison)。
- **真实收入已经出现**：基础模型公司估值倍数已从60-100倍压缩至15-50倍，虽仍偏高但对高增长科技公司而言并非史无前例[[1]](https://finance.yahoo.com/markets/stocks/articles/anthropic-beats-openai-secondary-markets-213828157.html)；Anthropic年化营收从2025年底约90亿美元跃升至2026年5月约450亿美元[[18]](https://www.mediapost.com/publications/article/415163/anthropic-openai-hold-majority-of-startup-ai-reve.html)。
- **微软AI业务年化收入已达370亿美元**，同比增123%；AWS年化约1500亿美元，增速28%[[19]](https://www.cnbc.com/2026/02/06/google-microsoft-meta-amazon-ai-cash.html)——大厂的AI变现已不是叙事，是报表科目。
- **算力基础设施具备可复用性**：不同于埋在地下的光纤（沉没成本高、专用性强），AI算力硬件在代际升级和跨工作负载调度上更灵活，历史类比支持"基础设施survives、炒作die"的判断[[17]](https://intuitionlabs.ai/articles/ai-bubble-vs-dot-com-comparison)。
- **预测市场定价"温和"**：Polymarket 对"2026年AI泡沫破裂"给出约16.8%的概率，交易员的基准情形不是崩盘[[20]](https://cryptoslate.com/predictions/market/ai-bubble-burst-in-2026/)。
- **产业领袖分歧本身有信息量**：Sam Altman 承认"我们处于泡沫中"，但强调泡沫中往往包裹着"一个真实的核心"，即使泡沫破裂，AI 对经济的持久价值仍将兑现[[21]](https://medium.com/@ilanpoonjolai/sam-altman-says-its-insane-is-the-ai-bubble-about-to-burst-ac8c208b3f2d)；黄仁勋则坚决否认泡沫论，称"通用计算的时代已经结束"，OpenAI"很可能成为下一个万亿美元级别的超大规模公司"[[22]](https://eu.36kr.com/en/p/3504217691479177)。CEO 表态天然带立场，但两人的共同点是：**都不否认基础设施需求的长期真实性，分歧只在于价格和节奏**。

### 2.3 与2000年互联网泡沫的定量差异

| 维度 | 2000年互联网泡沫 | 2026年AI周期 |
|---|---|---|
| 建设者的资产负债表 | 大量依赖垃圾债/股权融资的新兴电信公司（Global Crossing等），现金流薄弱 | 微软/谷歌/Meta/亚马逊经营现金流充沛，自融资比例高，但SPV/私募信贷比重上升是新变量[[17]](https://intuitionlabs.ai/articles/ai-bubble-vs-dot-com-comparison) |
| 资产专用性 | 光纤埋入地下，难以重新配置，需求不及预期后大量闲置("暗光纤") | GPU/数据中心可跨工作负载调度，但专用ASIC的专用性问题依然存在 |
| 指数集中度 | 前十大约25% | 前十大约40%，历史更极端[[15]](https://www.forbes.com/sites/investor-hub/article/sp-500-weight-mag-7-stocks-diversification-risk/) |
| 收入验证 | 大量.com公司几乎零收入 | 头部AI公司有真实、快速增长的收入，但长尾创业公司收入验证不足 |
| 结局的历史参照 | 泡沫破裂未阻止基础设施长期利用（光纤后来支撑了Web 2.0）[[17]](https://intuitionlabs.ai/articles/ai-bubble-vs-dot-com-comparison) | 大概率复现"基础设施幸存、估值和长尾玩家出清"的模式 |

### 2.4 本报告的判断：结构性泡沫，而非全局泡沫

综合以上，本报告认为最贴切的框架不是"泡沫/无泡沫"的二元判断，而是**分层定价（Layered Repricing）**模型：

- **第一层（物理稀缺层：先进制程、HBM、电力）**：几乎没有泡沫成分，需求受物理产能约束，价格易涨难跌。
- **第二层（头部模型层：OpenAI、Anthropic、少数几家云厂商自研芯片）**：估值中包含相当比例的期权溢价，但已经开始被真实收入和二级市场的分化定价"消化"。
- **第三层（长尾应用层、部分私募信贷/SPV结构、部分二级市场投机盘）**：这里是真正意义上的"经典泡沫"，大概率出现类似2000-2002年的大规模出清，很多公司会消失或被低价并购。

这正是对你提出的"河豚"比喻的量化回应：**河豚不是整体均匀鼓起再均匀瘪下去，而是不同器官充气速度差异极大**。用一句话概括——**这不是一场即将吞噬整个AI产业的海啸，而是一场精准清洗长尾和杠杆结构、同时让核心资产估值继续抬升的"选择性地震"**。

---

## 第三部分：AI 相关经济衰退的概率测算

### 3.1 各权威机构/市场预测汇总（截至2026年7月）

| 来源 | 预测对象 | 概率/数值 |
|---|---|---|
| Polymarket（预测市场，隐含概率） | 2026年内"AI泡沫破裂"事件 | 约16.8% Yes / 83.3% No[[20]](https://cryptoslate.com/predictions/market/ai-bubble-burst-in-2026/) |
| RSM US | 未来12个月美国经济衰退 | 30%（此前为40%，已下调）[[6]](https://www.the-world-now.com/recession-risk) |
| 纽约联储 DSGE 模型（2026年3月） | 未来四个季度美国经济衰退 | 35.8%（此前预测为37.5%）[[7]](https://libertystreeteconomics.newyorkfed.org/2026/03/the-new-york-fed-dsge-model-forecast-march-2026/) |
| Bloomberg 经济衰退监测 | 美国衰退风险 | 约20%[[6]](https://www.the-world-now.com/recession-risk) |
| Bridgewater | 2026年美国实际GDP增速 | 2.8%，其中AI资本开支贡献约1.4个百分点（约占总增速一半）[[5]](https://www.edwardconard.com/macro-roundup/bridgewater-forecasts-real-us-gdp-growth-of-2-8-in-2026-with-ai-capex-contributing-1-4pp-50-this-year-and-growing-to-1-5pp-in-2027/) |
| 多方综合GDP预测区间 | 2026年美国GDP增速 | 1.9%-2.4%（Deloitte低值1.9%，Bloomberg 2.1%）[[6]](https://www.the-world-now.com/recession-risk) |

### 3.2 关键传导链条：AI减速为何能单独引爆衰退

多份研究明确指出一个此前罕见的宏观现象——**AI相关投资已经"大到不能倒"，正在承担经济增长的绝大部分权重**：
- AI相关投资占美国名义GDP比重已达约8%，对GDP总增速的贡献超过25%[[23]](https://fourweekmba.com/ai-ai-gdp-load-bearing-us-economy-bloomberg-morgan-stanley-brid/)。
- 2026年第一季度，AI相关资本开支贡献了当季美国经济增长的约75%[[24]](https://www.techi.com/ai-capex-carries-us-economy-token-factories/)。
- RSM等机构明确警告：**只要AI相关支出增速出现明显下滑，经济其他部分的疲软将无力对冲，足以单独触发一场技术性衰退**[[6]](https://www.the-world-now.com/recession-risk)。

这是本轮周期与以往任何一次"行业泡沫"最大的不同：以往行业性泡沫破裂（如2015年页岩油、2018年加密货币）对GDP的直接拖累有限；而AI资本开支目前的宏观权重，已经让"AI减速"和"美国经济减速"在统计意义上高度同构。

### 3.3 三种情景推演

**情景A：软着陆式结构性出清（本报告认为的基准情形，概率约50-55%）**
头部两三家模型公司+核心基础设施资本开支保持增长或温和放缓，长尾应用层公司大规模出清，二级市场估值分化持续扩大，半导体/电力板块阶段性回调后企稳。宏观层面表现为**局部资产价格调整**而非全面衰退，类似2026年7月已经出现的芯片股回调模式的延续和扩散。

**情景B：信用事件引爆的系统性冲击（概率约20-30%）**
私募信贷/SPV层出现实质性违约（例如某家二线云厂商或数据中心运营商因营收不及预期无法覆盖债务），触发保险公司/私募信贷基金的连锁减值，信用利差扩大并外溢至实体经济融资成本，AI资本开支被迫大幅削减，与GDP增长的强依赖关系导致技术性衰退甚至更深度衰退。这是Burry论点、私募信贷风险论点指向的情景，也是概率测算中"20-30%系统性AI衰退"的主要来源。

**情景C：叙事无损的持续繁荣（概率约15-20%）**
企业AI变现能力持续超预期兑现（类比微软、Anthropic当前的增长曲线），资本开支与收入增长的剪刀差收敛，估值倍数消化后市场重新加速，2026-2027年不出现明显回调。

**综合判断**：
- **未来12个月出现"局部/板块性"资产价格调整（本质是情景A已经开始）：概率约80-85%**（考虑到7月已经在发生）。
- **演变为拖累整体美国经济陷入NBER定义衰退的"系统性AI衰退"：概率约20-30%**，与RSM的30%、纽约联储DSGE的35.8%区间基本一致，略低于纯宏观模型是因为AI核心资产的现金流质量和头部公司的自融资能力，构成了比纯宏观模型能捕捉到的更强的"缓冲垫"。
- 决定情景A还是滑向情景B的**关键先行指标**：（1）私募信贷/SPV层是否出现首个实质性违约案例；（2）云厂商资本开支指引是否连续两个季度下修；（3）企业AI ROI数据（如BCG、Gartner系列调查）是否持续恶化。

---

## 第四部分：赢家全景图（核心部分）

### 4.0 分析框架

本报告拒绝"AI行业整体是赢家/输家"这种空泛表述，而是按照**产业链位置的稀缺性和现金流可验证性**两个维度对赢家分层：

```
稀缺性/现金流质量 →
低 ┌─────────────────────────────────────────┐ 高
   │ 长尾应用层创业公司  │ 已验证应用层龙头（Palantir/Microsoft）│
   │ （大概率出局）      │ 核心模型双雄（Anthropic/OpenAI，估值仍有泡沫成分但有真实增长）│
   │ 债务驱动的影子云厂商 │ 定制芯片/ASIC（Broadcom）           │
   │ （Oracle/CoreWeave）│ 电力资产所有者（Constellation等）    │
   │                    │ 晶圆代工+先进封装+HBM寡头（TSMC/SK海力士）── 最强赢家 │
   └─────────────────────────────────────────┘
```

### 4.1 公司层面赢家（按确定性从高到低排序）

#### 第一梯队：物理稀缺性垄断者——几乎不受泡沫破裂影响

**1. 台积电（TSMC）**
先进制程+CoWoS先进封装产能持续供不应求，2026下半年AI供给瓶颈预计延续；3nm/2nm产能预计到2028年将是三星、英特尔总和的7-9倍[[25]](https://www.digitimes.com/news/a20260713VL204/tsmc-cowos-capacity-hbm-weekly-news-roundup.html)。无论最终赢家是英伟达GPU还是各家自研ASIC，台积电都是"雨露均沾"的中立卖铲人——这是产业链里确定性最高的赢家，没有之一。

**2. SK 海力士**
HBM市场份额约50-55%，是首家量产HBM3E的公司，拿下英伟达大部分供应合同；面向英伟达下一代Rubin平台的HBM4，预计将拿到约70%份额[[26]](https://news.skhynix.com/2026-market-outlook-focus-on-the-hbm-led-memory-supercycle/)。2026年第二季度，全球存储芯片厂商正冲向创纪录营收和利润，AI基础设施需求持续推高存储价格；三星单季度营业利润超584亿美元，但股价因"AI情绪降温"反而下跌[[26]](https://news.skhynix.com/2026-market-outlook-focus-on-the-hbm-led-memory-supercycle/)——这恰恰说明**基本面赢家和股价短期表现可以脱钩，真正的产业赢家要看现金流而非股价波动**。

**3. ASML**
EUV光刻机是先进制程和HBM扩产的唯一供给瓶颈，存储相关强劲需求进一步印证AI内存短缺是真实且在加深的[[27]](https://stocksdownunder.com/asml-ai-boom-nvidia-micron-tsmc/)。SK海力士的融资也在反哺其对ASML设备的采购[[27]](https://stocksdownunder.com/asml-ai-boom-nvidia-micron-tsmc/)。

**4. 电力/核能资产所有者**：Constellation Energy、Vistra、Talen Energy、GE Vernova、BWX Technologies
- Constellation与微软签署20年协议，斥资16亿美元重启三里岛核电站为其数据中心供电[[28]](https://finance.yahoo.com/sectors/energy/articles/buy-3-nuclear-energy-stocks-163900924.html)。
- Talen向亚马逊数据中心提供1920兆瓦核电，合同延至2042年[[28]](https://finance.yahoo.com/sectors/energy/articles/buy-3-nuclear-energy-stocks-163900924.html)。
- Meta与Vistra签署20年购电协议，锁定2600兆瓦以上零碳电力[[28]](https://finance.yahoo.com/sectors/energy/articles/buy-3-nuclear-energy-stocks-163900924.html)。
- 数据中心用电需求：2025年31GW → 2026年预计41GW → 2027年预计66GW，接近翻倍增长[[28]](https://finance.yahoo.com/sectors/energy/articles/buy-3-nuclear-energy-stocks-163900924.html)。
- **这一层是本报告认为"泡沫破裂几乎不影响其命运"的最典型代表**：即使一半的数据中心项目因资金链问题延期，剩下一半对电力的需求依然是史无前例的增量，且电力资产的合同期限（20年起）本身就是对抗周期波动的天然对冲。

#### 第二梯队：已验证现金流的应用层/芯片层——泡沫破裂后仍将强化领先地位

**5. Broadcom**
凭借定制AI芯片（ASIC）业务成为"英伟达之外的第二个确定性赢家"：与谷歌TPU协议延长至2031年；客户名单包括谷歌（TPU）、Meta（MTIA）、OpenAI（自研芯片，2027年首发）、Anthropic（2026年1GW TPU算力，2027年扩至3GW）[[29]](https://www.tomshardware.com/tech-industry/semiconductors/custom-ai-asics-examined-from-broadcom-to-mtia)。CEO预计2026财年AI半导体营收将逼近560亿美元，接近翻三倍；Counterpoint预测2027年Broadcom将占据定制AI加速器市场约60%份额[[30]](https://www.techtimes.com/articles/317846/20260605/nvidia-not-only-ai-chip-winner-broadcom-forecasts-56-billion-custom-silicon-demand-surges.htm)。**这是"去英伟达依赖"叙事下最大的受益者**——即便未来云厂商大规模转向自研芯片压低英伟达毛利率，Broadcom依然是那笔钱的最终去向之一。

**6. Palantir**
资产负债表极其干净：总资产89亿美元 vs 总负债14亿美元，**零债务**[[31]](https://www.techi.com/palantir-vs-oracle-stock/)。"金穹"导弹防御项目仅2026年预算就达250亿美元，超过Palantir 2025财年全年营收（44.75亿美元）[[31]](https://www.techi.com/palantir-vs-oracle-stock/)。估值高企（154倍市盈率）意味着股价对增长兑现极其敏感，但商业模式（政府订单+零债务）在信用收紧情景下具备罕见的抗周期属性——**是少数"高估值但低杠杆"的稀有物种**。

**7. 微软**
AI业务年化收入370亿美元，同比增123%[[19]](https://www.cnbc.com/2026/02/06/google-microsoft-meta-amazon-ai-cash.html)；作为OpenAI约27%股权的持有者+Azure云基础设施提供商+Copilot分发渠道三重身份，微软是"泡沫破裂无论谁死谁活，微软都能收租"的结构性赢家。

**8. Anthropic（相对OpenAI的动态优势方，但仍属"高溢价但增长兑现"资产）**
年化营收从2025年底约90亿美元跃升至2026年5月约450亿美元，增速在头部模型公司中最快[[18]](https://www.mediapost.com/publications/article/415163/anthropic-openai-hold-majority-of-startup-ai-reve.html)；二级市场"惜售"本身就是市场给出的信号——聪明钱认为其当前估值仍然低估了未来现金流。

**9. Cursor / Anysphere**
成为史上最快达到20亿美元ARR的B2B软件公司（用时约3年）[[32]](https://tech-insider.org/cursor-60-billion-valuation-anysphere-ai-coding-2026/)；2026年6月SpaceX同意以600亿美元收购Anysphere[[32]](https://tech-insider.org/cursor-60-billion-valuation-anysphere-ai-coding-2026/)——是应用层"有真实付费意愿+高留存"的稀有样本，证明应用层不是注定全军覆没，差异化+企业级付费能力仍能穿越周期。

#### 第三梯队：机会型资本——泡沫破裂阶段的"逆周期买家"，本质上是赢家而非受害者

**10. 海湾主权基金：MGX（阿联酋）、G42、HUMAIN（沙特PIF）**
- 全球主权投资者2025年向AI和数字基础设施投入660亿美元，海湾基金是最大出资方——阿联酋Mubadala 129亿美元、科威特投资局60亿美元、卡塔尔投资局40亿美元[[33]](https://www.tacticalreport.com/topics/gulf-sovereign-ai-defense)。
- G42联合OpenAI、Oracle、英伟达、思科、软银建设阿联酋"星际之门"（Stargate UAE），首个200兆瓦集群预计2026年交付，最终规模1GW[[34]](https://mei.edu/report/ai-the-gulf-and-the-us-a-primer/)。
- 沙特PIF背景的HUMAIN，依托近万亿美元的PIF资金池，投入数百亿美元建设阿拉伯语大模型和AI基础设施，作为"愿景2030"的一部分[[35]](https://www.forbes.com/sites/guneyyildiz/2026/07/03/abu-dhabis-49-billion-ai-fund-and-its-sovereign-rivals/)。
- **战略逻辑是本报告认为最值得强调的一点**：这些主权基金买的是"全栈"——既买前沿实验室股权，也买数据中心资产，还买与训练无关但决定"平台准入权"的周边资产[[34]](https://mei.edu/report/ai-the-gulf-and-the-us-a-primer/)。这意味着一旦西方风险资本因流动性紧张被迫折价出售AI资产，**手握主权资本、不受LP赎回压力约束的海湾基金将是最大的逢低吸筹方**——这是一种典型的"别人恐惧我贪婪"结构性优势，历史上2008年金融危机后主权基金抄底华尔街股权的剧本，很可能在这一轮AI资产重估中再度上演。

**11. SoftBank（有条件的赢家，高风险高回报的典型）**
2025年11月清仓英伟达全部持仓（约58亿美元）all-in押注OpenAI，随后2026年一季度又重新增持英伟达至约30亿美元[[36]](https://fortune.com/2025/11/11/softbank-nvidia-openai-masayoshi-son-sam-altman-investment/)；OpenAI投资单季度带来42亿美元浮盈，帮助软银扭亏为盈[[37]](https://www.cnbc.com/2026/02/12/softbank-vision-fund-openai.html)。孙正义的仓位是本轮周期押注最激进、波动性最大的样本——若OpenAI最终跑出，软银是最大赢家之一；若信用事件（情景B）发生，软银也是杠杆敞口最大的潜在受害者之一。**这是一个高方差赢家，不是稳健赢家**。

### 4.2 行业层面赢家

| 行业 | 赢家逻辑 | 关键证据 |
|---|---|---|
| **电力与核能** | 数据中心用电需求刚性增长（2025-2027年近乎翻倍），长期购电协议锁定现金流 | 31GW→41GW→66GW的需求曲线[[28]](https://finance.yahoo.com/sectors/energy/articles/buy-3-nuclear-energy-stocks-163900924.html) |
| **半导体设备与先进封装** | 无论最终赢家是GPU还是ASIC路线，都要依赖同一批设备/封装供应商 | ASML EUV设备、台积电CoWoS产能瓶颈延续至2026下半年[[25]](https://www.digitimes.com/news/a20260713VL204/tsmc-cowos-capacity-hbm-weekly-news-roundup.html) |
| **存储（HBM）** | 结构性供不应求，价格维持在历史高位，利润率罕见 | SK海力士、三星2026Q2创纪录利润[[26]](https://news.skhynix.com/2026-market-outlook-focus-on-the-hbm-led-memory-supercycle/) |
| **具身智能/机器人（下一波资本叙事）** | 资本正在从纯软件LLM向物理AI迁移，形成第二增长曲线，分散对"纯语言模型泡沫"的单一叙事依赖 | 2026Q1机器人VC融资163亿美元创纪录；孙正义公开表示物理AI/机器人将诞生下一个万亿美元公司[[38]](https://kraneshares.com/humanoid-robotics-in-2026-the-race-from-pilot-to-platform/) |
| **国防与政府AI** | 政府预算周期长、抗经济周期，与商业AI ROI证伪风险脱钩 | Palantir"金穹"项目单年预算250亿美元[[31]](https://www.techi.com/palantir-vs-oracle-stock/) |
| **专业服务/咨询（隐性赢家）** | 企业AI ROI普遍不达预期（95%试点失败、仅26%产生实质financial value），催生对外部实施伙伴的持续需求——"卖水人"角色从硬件延伸到软件实施服务 | MIT/BCG/Gartner系列调查[[13]](https://www.legal.io/blog/5719519/MIT-Report-Finds-95-of-AI-Pilots-Fail-to-Deliver-ROI-Exposing-GenAI-Divide)[[14]](https://www.terminal-x.ai/research/ai-roi-in-2026-why-most-enterprise-ai-fails-and-what-actually-works) |

### 4.3 国家层面赢家

**美国**：仍然是本轮周期资本、技术、人才三重优势的最大受益者。AI资本开支贡献了2026年GDP增速的近一半，虽然这构成宏观脆弱性（第三部分），但从全球竞争视角看，美国是唯一能够同时提供顶级模型、顶级资本市场（二级市场超万亿美元AI资产定价能力）、顶级基础设施（电力+芯片供应链掌控力）的国家。即便发生局部去泡沫化，美国在下一代模型和应用层的领先地位大概率不会被削弱，反而会通过并购整合（如SpaceX收购Anysphere）进一步强化头部集中。

**中国**：本轮周期最被低估的相对赢家。在算力被出口管制限制的约束下，走出了一条"被迫创新"路径：
- DeepSeek以约600万美元训练成本对标GPT-4级别的约1亿美元成本，效率优势显著[[39]](https://digitalinasia.com/china-ai-models-chips-strategy/)；DeepSeek同时在自研AI芯片[[40]](https://www.taipeitimes.com/News/biz/archives/2026/07/08/2003860388)。
- 中国开源权重模型下载量份额已达17.1%，首次超过美国的15.86%[[39]](https://digitalinasia.com/china-ai-models-chips-strategy/)；阿里巴巴Qwen系列下载量已超越Meta Llama，成为Hugging Face上最广泛使用的微调基座模型[[39]](https://digitalinasia.com/china-ai-models-chips-strategy/)。
- 芯片自主可控加速：华为占据国内500亿美元AI芯片市场约一半份额，但阿里巴巴、百度也在加速自研，形成多元化的国产替代格局[[39]](https://digitalinasia.com/china-ai-models-chips-strategy/)。
- 2026年7月Moonshot发布Kimi K3引发全球AI股抛售，成为触发本轮"效率证伪美国资本开支叙事"担忧的直接导火索[[12]](https://truthsandnews.com/investing/chip-stocks-selloff-july-2026-ai-semiconductors-crashing)——**这本身就是中国AI产业相对实力上升最直观的市场证据**：一家中国公司的产品发布，足以让美国万亿美元级别的资产重新定价。
- 逻辑推演：如果美国这一轮AI资本开支被证明存在效率泡沫（重资产、高资本开支路线），而中国走的是"低成本、开源扩散、应用层快速落地"路线，那么泡沫破裂对中国模式的冲击相对更小，甚至可能在全球南方、性价比敏感市场的AI渗透率竞赛中占据更有利位置。

**海湾产油国（阿联酋、沙特、卡塔尔）**：见4.1节分析，凭借主权资本的"耐心属性"和不受LP赎回约束的结构优势，是泡沫出清阶段天然的逆周期买家，同时也在借此完成"石油美元→AI资产"的国家资产结构转型。

**台湾、韩国**：作为"卖铲人"供应链核心节点（台积电+SK海力士+三星），无论最终AI叙事的赢家是谁、无论哪种芯片架构胜出，这两个经济体在硬件层的收入都具备高确定性——**是本轮周期里"技术路线中立"属性最强的国家赢家**。当然也需要注意：2026年7月的抛售中，台湾加权指数、日经指数同步跌入技术性回调，说明这些经济体的股票市场对AI叙事的短期波动同样高度敏感，"产业赢家"与"股价短期表现"需要分开评估。

### 4.4 AI 产业六层地图：什么会真的破裂，什么不会

"AI 会不会破裂"这个问题本身问错了颗粒度。把 AI 产业拆成六层，会发现每一层的泡沫成色完全不同——这也是本报告反复强调"不要笼统谈论 AI 行业"的根本原因：

| 层级 | 内容 | 破裂概率 | 判断依据 |
|---|---|---|---|
| **L1 算力基建** | 电力、核能、数据中心土地/散热 | **极低** | 物理稀缺、20年期合同锁定，见4.1/4.2 |
| **L2 芯片/硬件** | 通用GPU、定制ASIC、HBM、先进封装 | **低**（但内部座次会重新洗牌） | 需求真实存在供给瓶颈，但英伟达一家独大的格局可能被Broadcom/自研ASIC分流[[29]](https://www.tomshardware.com/tech-industry/semiconductors/custom-ai-asics-examined-from-broadcom-to-mtia) |
| **L3 前沿模型层** | OpenAI/Anthropic/xAI/Mistral/中国大模型六小虎等 | **中高，且高度分化** | 头部两三家资金和数据飞轮已形成正循环；腰部及以下面临被并购、估值腰斩甚至清零，是本轮"一级市场检验最残酷"的层级（详见4.5） |
| **L4 推理/模型服务层** | Together AI、Fireworks AI、Baseten、Groq 等"卖算力时间"的中间商 | **中**，短期估值涨幅本身已现泡沫特征 | Fireworks AI 七个月内估值从40亿冲到谈判中的150亿美元，接近4倍[[55]](https://www.cnbc.com/2026/07/16/fireworks-nvidia-cloud-ai-startup-value.html)，涨速本身就是风险信号；但商业逻辑（开源模型扩散依赖独立推理层）比闭源模型更接近基础设施属性 |
| **L5a 应用层-通用工具** | 邮件助手、写作工具、图片生成器、生产力小插件 | **极高，已经在破裂** | "淘金热已经结束"，大平台把薄封装功能原生集成进自己产品，同质化应用大批消亡[[63]](https://venturebeat.com/infrastructure/stop-calling-it-the-ai-bubble-its-actually-multiple-bubbles-each-with-a) |
| **L5b 应用层-垂直深度集成** | Harvey（法律）、Glean（企业搜索）、Sierra（客服）、Cursor（编程）、ElevenLabs（语音） | **低**（有真实ARR和企业级留存的公司） | 护城河来自专有数据+深度工作流嵌入，而非模型本身，详见4.5 |
| **L6 具身智能/物理AI** | 人形机器人、机器人基础模型 | **中高，"叙事驱动型估值"特征明显** | 资本正从纯软件LLM叙事迁移至此，估值飙升速度极快（Figure AI $39B、Skild AI $14B+），但多数公司尚无规模化出货验证，是"下一站叙事泡沫"的头号候选[[68]](https://kraneshares.com/humanoid-robotics-in-2026-the-race-from-pilot-to-platform/) |

**结论**：泡沫概率沿着"L1→L6"并非单调上升，而是呈"哑铃形"——L1/L2（物理基建）和 L5b（已验证的垂直应用）两端最稳，L3 腰部模型公司、L4 推理层短期估值、L5a 通用工具、L6 具身智能叙事型公司，是中间最容易被戳破的部分。

### 4.5 一级市场公司总览：谁在被验证，谁在被淘汰（中美对照，重点更新）

这是本报告对你要求的"公司层面赢家"最直接的回应——不谈笼统的"AI行业"，只谈点名到公司的一级市场现状。

#### 美国 · 前沿模型层

| 公司 | 最新估值/状态 | 一级市场判断 |
|---|---|---|
| OpenAI | 一级市场约8500亿美元（2026年3月轮），二级市场约9330亿美元 | **确定性赢家**，但增长叙事反复，需持续用新模型（GPT-5.6系列）维持买盘[[2]](https://dnyuz.com/2026/07/20/openai-has-seen-a-resurgence-of-interest-in-secondary-markets/) |
| Anthropic | 一级市场约3800亿美元，二级市场冲高至1.2万亿美元 | **本轮势头最强的赢家**，年化营收4个月内从90亿冲到450亿美元[[18]](https://www.mediapost.com/publications/article/415163/anthropic-openai-hold-majority-of-startup-ai-reve.html) |
| xAI（Grok） | 约500亿美元+ | **观察名单**：依赖马斯克个人信用和X平台导流的实时数据优势，独立造血能力尚未被充分验证[[53]](https://www.tldl.io/resources/ai-companies-landscape-2026) |
| Mistral AI | 约200-230亿美元（2026年6月35亿美元轮），ASML为最大股东 | **欧洲主权AI旗手**，是赢家，但商业化规模较头部两家仍有数量级差距[[52]](https://techfundingnews.com/mistral-ai-3b-euro-20b-valuation-data-centres/) |
| Cohere | 累计融资超10亿美元 | **相对掉队者**：近期未见重大估值跃升报道，企业市场被OpenAI/Anthropic/微软企业版持续挤压 |

#### 美国 · 推理层/模型服务层（本轮融资速度最快的细分赛道，需警惕估值涨速本身即是风险信号）

| 公司 | 最新估值 | 关键信号 |
|---|---|---|
| Together AI | 83亿美元（2026年7月8亿美元C轮） | 年化预订超11.5亿美元[[54]](https://techfundingnews.com/together-ai-raises-800m-at-8-3b-valuation-as-enterprises-ditch-closed-models-for-open-source/) |
| Fireworks AI | 谈判中150亿美元（英伟达投资） | 7个月内从40亿美元涨近4倍[[55]](https://www.cnbc.com/2026/07/16/fireworks-nvidia-cloud-ai-startup-value.html) |
| Baseten | 130亿美元 | 单季度年化收入增长近3倍[[56]](https://www.digitalapplied.com/blog/baseten-1-5b-funding-ai-inference-infrastructure-2026) |
| Groq | 重新融资6.5亿美元转型"推理云" | 2025年底把LPU专利技术以约200亿美元license给英伟达后转型——**"卖掉核心资产换生存空间"的样本**[[57]](https://newmarketpitch.com/blogs/news/ai-infrastructure-top-startups) |

#### 美国 · 应用层：垂直深度集成赢家 vs 通用工具输家

**赢家（有真实ARR、企业级留存、专有数据护城河）**：
- **Cursor / Anysphere**（编程）：SpaceX 600亿美元收购[[32]](https://tech-insider.org/cursor-60-billion-valuation-anysphere-ai-coding-2026/)
- **Harvey**（法律）：估值110亿美元，ARR 1.9亿美元（5个月近乎翻倍），10万+律师、1300+机构使用[[61]](https://www.cnbc.com/2026/05/19/harvey-cnbc-disruptor-50-ranking.html)
- **Glean**（企业知识搜索）：估值72亿美元，ARR超1亿美元[[62]](https://unicornscreener.vc/blog/7-ai-agent-startups-funded-by-top-vcs-in-2026)
- **Sierra**（客服Agent，前Salesforce CEO Bret Taylor创办）：按结果付费而非订阅坐席收费，估值倍数处于行业最高区间之一[[62]](https://unicornscreener.vc/blog/7-ai-agent-startups-funded-by-top-vcs-in-2026)
- **ElevenLabs**（语音）：估值110亿美元（12个月内涨3倍）[[62]](https://unicornscreener.vc/blog/7-ai-agent-startups-funded-by-top-vcs-in-2026)
- **Perplexity**（AI搜索）：ARR突破4.5亿美元（6个月翻倍以上），但估值从226亿美元的高点小幅降至约200亿美元的"下调轮"——**收入真实增长但估值倍数在被压缩，是"赢家阵营里估值最先被修正"的样本**[[58]](https://www.stanventures.com/news/state-of-perplexity-ai-july-2026-7441/)

**已被验证失败/被收编的标志性案例（一级市场投资人已用脚投票的判例）**：
- **Character.AI**：2024年被谷歌"部分收购"（许可技术+挖走创始人 Noam Shazeer 和 Daniel De Freitas 回谷歌），留下的实体继续运营但技术愿景真空；2026年因激进变现损害产品体验，用户加速流失至竞品[[59]](https://autoppt.com/blog/character-ai-evolution-complete-guide/)。
- **Inflection AI**：2024年被微软用同样的"许可+挖人"模式收编，创始人 Mustafa Suleyman 带队加入微软[[60]](https://presenc.ai/research/ai-acquisition-tracker-2026)。
- **Adept**：2024年被亚马逊用同样模式收编[[60]](https://presenc.ai/research/ai-acquisition-tracker-2026)。
- **模式总结**：这种"许可技术+挖走核心团队+留壳返还LP资本"已成为反垄断审查趋紧背景下，大厂"收购"未跑出来的模型/Agent创业公司的标准范式[[60]](https://presenc.ai/research/ai-acquisition-tracker-2026)。对创始人和头部员工是体面退出，但对大多数普通员工和晚期轮次的财务投资者而言，本质上等同于清零——**这是本轮周期一级市场最典型、也最容易被忽视的"隐形出清"渠道，比公开的破产清算更普遍**。
- **Stability AI**：早期开源图像生成明星（Stable Diffusion），历经高管动荡、资金链紧张，已从"叙事中心"边缘化，是"技术出名早但商业化能力跟不上融资节奏"的反面教材。

#### 美国 · 数据/平台层（隐藏的高质地赢家）

- **Databricks**：2026年2月融资超70亿美元（约50亿股权+20亿债务），估值1340亿美元；年化营收54亿美元、增速超65%，且过去12个月**自由现金流已转正**，AI产品线年化14亿美元[[72]](https://tech-insider.org/databricks-valuation-175-billion-2026/)——罕见的"高增长+已盈利+高估值"三者兼备的独角兽，财务质地是本轮周期私营AI公司里最健康的样本之一。
- **Snowflake**（已上市）：市值约830亿美元，2026财年Q4产品营收12.3亿美元、同比增30%，剩余履约义务同比增42%至97.7亿美元[[73]](https://mlq.ai/news/snowflakes-ai-data-cloud-strategy-is-working-but-valuation-and-competition-raise-the-bar/)——传统数据云厂商成功转型为"AI时代的数据基座"，是"老树发新芽"型赢家。

#### 中国 · 大厂系模型（不缺钱，商业化验证扎实度差异巨大）

| 公司/产品 | 状态 | 判断 |
|---|---|---|
| 阿里巴巴 · 通义千问 Qwen | 开源下载量全球第一（超越Meta Llama），千问APP一度全球增长最快，Qwen3.7全球排名前15[[39]](https://digitalinasia.com/china-ai-models-chips-strategy/)[[70]](https://www.cls.cn/detail/2243297) | **确定性赢家**：大厂现金流托底+开源生态锁定份额 |
| 字节跳动 · 豆包 Doubao | MAU 3.45亿（国内第一），日均tokens 50万亿（同比增10倍+），68元起订阅制已验证商业可行性[[70]](https://www.cls.cn/detail/2243297) | **应用层最健康的赢家**：用户规模+付费转化双验证 |
| 百度 · 文心 Ernie | 2026Q1 AI核心业务收入136亿元，同比增49%，占总营收首次突破50%[[70]](https://www.cls.cn/detail/2243297) | **商业化验证最扎实的大厂之一**：AI已是报表主力而非叙事 |
| 腾讯 · 混元/元宝 Yuanbao | 2025年投流约150亿元，2026春节再砸10亿现金红包获客，引入前OpenAI研究员姚顺雨重组团队筹备混元3.0[[71]](https://www.tmtpost.com/7977487.html) | **大厂阵营里的追赶者**："烧钱换用户"特征明显，商业化验证滞后于豆包/文心，是"字节收网、阿里腾讯百度还在站岗"这一行业判断里被点名的一方[[71]](https://www.tmtpost.com/7977487.html) |

#### 中国 · "六小虎"等独立大模型公司（本轮一级市场检验最残酷的赛道，分化剧烈）

| 公司 | 一级市场最新状态 | 判断 |
|---|---|---|
| 智谱AI（Zhipu/GLM） | 2026年1月已在港股上市，"大模型第一股"之一[[44]](https://www.cls.cn/detail/2227664) | **阶段性变现成功**，但从此直接接受二级市场每日定价，不再有一级市场"讲故事"缓冲空间 |
| MiniMax | 港股上市，募资6-7亿美元，估值约40亿美元[[46]](https://www.21jingji.com/article/20250715/herald/0c78cb8e4aefa9d2e44accb8d41e9f15.html) | **上市即验证但估值克制**：约40亿美元的上市估值相较OpenAI/Anthropic有数量级差距，反映二级市场对中国模型公司定价远比一级市场审慎 |
| 月之暗面 Moonshot（Kimi） | 最新一轮融资约20亿美元，估值区间20-300亿美元（数据来源不一，本身即反映定价极不稳定），美团、阿里为最新轮投资方[[50]](https://www.tradingview.com/news/gurufocus:676c514e6094b:0-moonshot-nears-30-billion-valuation-after-kimi-k3-release/)[[51]](https://www.coindesk.com/tech/2026/07/20/moonshot-ai-ipo-push-follows-kimi-alibaba-ai-releases-that-shook-bitcoin) | **本轮最戏剧性的样本**：Kimi K3（2.8万亿参数、号称全球最大开源模型）发布后ARR冲到3亿美元并一度暂停新订阅，同时引发全球芯片股抛售[[49]](https://www.forbes.com/sites/tylerroush/2026/07/17/chinese-ai-startup-moonshot-unveils-kimi-k3-model-will-it-challenge-openai-and-anthropic/)——一家私营公司的一次模型发布，撬动全球万亿美元级资产重定价，计划2026下半年赴港IPO |
| 阶跃星辰 StepFun | 接近完成25亿美元融资（年内第二次），但5个月烧掉171亿元人民币，计划港股IPO募资约5亿美元[[47]](https://finance.sina.cn/stock/ggyj/2026-05-10/detail-inhxmeaf2582837.d.html) | **高风险高投入型**：融资速度与烧钱速度均创纪录，商业化验证尚未跟上资本输血节奏 |
| 百川智能 Baichuan | 账上现金约30亿元人民币，创始人王小川表态IPO或推迟至2027年 | **相对掉队者**："六小虎"中最可能被稀释、被并购或被迫收缩的候选者之一 |
| 零一万物 01.AI（李开复） | 仍为私有公司，战略转向开源与产业落地，未见港股IPO计划 | **声量减弱**：从"对标GPT"转向更务实的产品化路线 |
| DeepSeek | 训练成本效率标杆（约600万美元 vs GPT-4级别约1亿美元），同时自研AI芯片[[40]](https://www.taipeitimes.com/News/biz/archives/2026/07/08/2003860388) | **战略定位不同于其他"六小虎"**：更像"技术地缘政治资产"而非"财务资本运作资产"，暂无迹象寻求短期IPO变现，是一种"反资本市场周期"的稳健打法 |

#### 中美 · 具身智能/物理AI层（下一站叙事型估值，需警惕"泡沫2.0"）

| 公司 | 估值/状态 | 判断 |
|---|---|---|
| Figure AI（美） | 390亿美元（2025年9月C轮） | 已与宝马汽车产线达成1250小时实际运营验证——**少数已有真实工业客户验证的样本**[[68]](https://kraneshares.com/humanoid-robotics-in-2026-the-race-from-pilot-to-platform/) |
| Physical Intelligence（美） | 约56亿美元，新一轮谈判中或超110亿美元 | 尚无规模化出货验证，估值锚定更多是技术叙事 |
| Skild AI（美） | 140亿美元+（单笔13亿美元融资） | 同上，叙事驱动特征明显 |
| 宇树科技 Unitree（中） | 拟科创板IPO，估值约70亿美元，毛利率60% | G1机型约1.6万美元起售，2025年出货5500+台，2026年目标1-2万台[[69]](https://valueaddvc.com/blog/humanoid-robots-in-2026-figure-apptronik-1x-and-tesla-optimus-compared) |
| 智元机器人 AgiBot（中） | 未披露最新估值 | 与宇树合计预计占2026年全球人形机器人出货量近80%[[69]](https://valueaddvc.com/blog/humanoid-robots-in-2026-figure-apptronik-1x-and-tesla-optimus-compared) |

**关键区分**：美国路线是"高估值、少量高端工业验证客户"（Figure×BMW）；中国路线是"相对克制的估值、大规模出货、成本领先"（Unitree G1约1.6万美元/台）。若泡沫破裂冲击资本市场，美国的高估值叙事型公司（Physical Intelligence、Skild AI 等尚无规模化出货验证）风险更高；中国的规模化出货型公司相对更抗跌，因为其估值锚定的是真实收入和出货量而非叙事——**这是本报告认为下一轮最值得持续跟踪的"泡沫2.0候选区"**。

---

## 第五部分：实体经济与消费行业——AI渗透的双刃剑

这是与科技股"叙事性泡沫"完全不同性质的一层：这里的公司（零售商、制造商、外包服务商）不是靠 AI 叙事融资估值的，它们只是 AI 的**使用者/受益者/受害者**，资产价格与 AI 一二级市场情绪基本脱钩。这一层几乎不存在"泡沫破裂"的概念，只存在"结构性再配置"——而这恰恰是最容易被"AI股票要不要跌"的讨论所忽略、但对实体经济冲击最真实的部分。

### 5.1 零售与消费：渐进式真实收益，而非投机性叙事

需求预测、库存管理、个性化推荐、自动化客服已从试点走向规模化部署，这一层的AI投资回报相对更容易衡量（可直接对应库存周转率、转化率、客服成本等KPI），不太可能出现"证伪式破裂"[[64]](https://www.bcg.com/publications/2026/how-ai-is-reshaping-the-retail-business-model)。但值得警惕的新变量是：Agentic AI（智能体自动购物）正在重塑消费路径，可能把零售商和品牌方直接排除在消费决策链条之外——**传统零售商和品牌方（而非AI公司本身）可能是这一层新的潜在输家，赢家是掌握"入口"和智能体分发权的平台**（OpenAI/谷歌/亚马逊的购物Agent能力）[[64]](https://www.bcg.com/publications/2026/how-ai-is-reshaping-the-retail-business-model)。与此同时，消费者对线下"可触摸体验"的需求并未消失，呈现"线上AI决策+线下体验"并行的分层格局。

### 5.2 制造业：结构性再配置，而非净崩溃

数据录入类岗位预计到2027年消失750万个，制造业岗位到2030年面临200万个的风险敞口；但同时预计新增35万个AI相关新岗位，45%的管理岗位是"被增强"而非"被替代"[[65]](https://www.stord.com/reports/state-of-ai-2026)。关税与近岸外包（nearshoring）趋势与AI自动化叠加：约66%的零售业高管已将供应链近岸/回岸纳入运营规划[[64]](https://www.bcg.com/publications/2026/how-ai-is-reshaping-the-retail-business-model)——这意味着"AI+近岸制造"组合可能是墨西哥、东南亚部分国家承接产业转移的新窗口，而非纯粹的岗位消失。

### 5.3 全球外包服务业（BPO）：本轮 AI 对实体经济冲击最真实、最剧烈的领域——且与 AI 股价泡沫完全脱钩

如果说"AI股票要不要跌"是一场资本市场辩论，BPO行业的收缩就是已经发生的现实：

- 印度BPO行业雇佣600万人，贡献7%的GDP；菲律宾BPO行业雇佣200万人，年产值400亿美元[[66]](https://news.outsourceaccelerator.com/ai-threatens-bpo-india-philippines/)。
- Oracle 2026年4月在印度裁员1.2万人；塔塔咨询（TCS）裁员1.2万人，为其历史最大规模裁员；印度头部IT公司2026财年前三季度净新增员工仅17人（去年同期是数千人级别）——**入门级岗位需求近乎归零**[[67]](https://www.storyantra.in/2026/05/will-ai-replace-bpo-jobs-how-8-million.html)。
- 菲律宾行业协会已将2028年就业预测从250万下调至185万，营收目标从590亿美元下调至433-505亿美元区间[[67]](https://www.storyantra.in/2026/05/will-ai-replace-bpo-jobs-how-8-million.html)。
- 最先出局的是语音客服、数据录入、基础质检、流程化编程等"脚本化"工作；能转向判断密集型、专业化、"AI辅助型"工作的员工收入仍在上升[[66]](https://news.outsourceaccelerator.com/ai-threatens-bpo-india-philippines/)。

**这一冲击的性质与"AI股票估值泡沫"完全不同——它不会随美股AI板块回调而反弹，是一次不可逆的产业结构转移**。受损方是发展中国家的中低技能服务业出口部门（印度、菲律宾）；受益方是雇佣这些外包服务、如今得以用AI替代人力成本的欧美企业客户，以及提供"AI化流程重塑"咨询服务的头部公司（呼应4.2节"专业服务/咨询隐性赢家"的判断）。**这是本报告认为"AI 对实体经济最确定的负面冲击"——概率不是 20-30%，而是已经在发生，且与本轮资产泡沫是否破裂无关**。

---

## 第六部分：输家榜（点名版，一级市场检验的残酷现实）

### 6.1 公司层面输家

- **靠债务堆算力、缺乏差异化收入来源的"影子云厂商"**：CoreWeave（净负债股本比高达4.46，一季度调整后净亏损从1.5亿美元扩大至5.89亿美元，营业利润率仅1%）[[41]](https://www.tradingview.com/news/zacks:af28a5387094b:0-coreweave-vs-oracle-which-ai-infrastructure-stock-is-the-better-pick/)；Oracle（是主要云厂商中唯一主要靠债务融资AI建设的公司，账面负债超1000亿美元，自由现金流已转负，2月宣布拟通过债务+股权融资再筹集最多500亿美元）[[41]](https://www.tradingview.com/news/zacks:af28a5387094b:0-coreweave-vs-oracle-which-ai-infrastructure-stock-is-the-better-pick/)。
- **美国已被验证失败/被收编的模型与Agent公司**：Character.AI（谷歌"许可+挖人"式收编，用户因激进变现流失）[[59]](https://autoppt.com/blog/character-ai-evolution-complete-guide/)、Inflection AI（微软收编）、Adept（亚马逊收编）[[60]](https://presenc.ai/research/ai-acquisition-tracker-2026)、Stability AI（技术出名早但商业化跟不上融资节奏）。
- **中国"六小虎"中相对掉队者**：百川智能（现金储备相对紧张，IPO推迟至2027年）、零一万物（战略声量减弱）；阶跃星辰虽然融资顺利但5个月烧掉171亿元人民币，是"烧钱速度创纪录"的高风险样本[[47]](https://finance.sina.cn/stock/ggyj/2026-05-10/detail-inhxmeaf2582837.d.html)。
- **大厂阵营里的追赶者**：腾讯混元/元宝——2025年投流约150亿元、2026春节再砸10亿现金红包获客，"烧钱换用户"特征明显，商业化验证滞后于字节豆包和百度文心[[71]](https://www.tmtpost.com/7977487.html)。
- **估值倍数已被压缩的应用层公司**：Perplexity——ARR真实翻倍增长，但估值从226亿美元高点降至约200亿美元的"下调轮"，说明即便是应用层里的相对赢家，估值倍数也在被系统性重定价[[58]](https://www.stanventures.com/news/state-of-perplexity-ai-july-2026-7441/)。
- **95%的长尾AI应用创业公司**：邮件助手、写作工具、图片生成器等同质化"套壳"应用，缺乏差异化、依赖单一大模型API转售，大概率在接下来12-24个月内消失或被极低估值收购[[63]](https://venturebeat.com/infrastructure/stop-calling-it-the-ai-bubble-its-actually-multiple-bubbles-each-with-a)。
- **私募信贷/保险资金的LP**：一旦数据中心收入不及预期，久期错配和资产集中度风险将首先体现为这类资金的净值回撤。
- **晚期入场的二级市场散户/跟风资金**：在Anthropic、OpenAI等公司估值高点通过SPV份额转让、场外基金等渠道接盘的非专业投资者，流动性最差、信息最不对称，是结构性出清中最没有议价能力的一环。

### 6.2 行业/群体层面输家

- **应届毕业生/初级白领**：22-27岁应届生失业率已达5.6%，显著高于整体4.2%的失业率[[42]](https://cbsnews.com/news/ai-layoffs-job-cuts-challenger-report-april-2026/)；2026年4月，AI被列为当月裁员最主要原因之一，占当月裁员总数26%[[42]](https://cbsnews.com/news/ai-layoffs-job-cuts-challenger-report-april-2026/)（但需要注意"AI洗白式裁员"现象普遍存在，即企业把常规成本削减包装成AI替代叙事，实际归因存在争议[[43]](https://builtin.com/articles/ai-washing-layoffs)）。
- **全球外包服务业（印度、菲律宾）**：详见5.3节，是本报告认为"确定性最高、且与AI资产泡沫是否破裂无关"的实体经济输家。
- **未能完成"AI+近岸"转型的中低技能制造业出口国**：若无法承接近岸外包/自动化升级的窗口期，可能同时被"低成本国家竞争"和"AI自动化替代"两头挤压。

---

## 第七部分：结语——回应"河豚"比喻

你的判断大方向是对的：**这不是一个会被戳破归零的骗局式泡沫，AI 产业不会像 2000 年的宠物食品电商那样集体消失**。但基于以上数据，本报告想提出一个更精确的修正模型：

与其说是"一整只河豚鼓起来又瘪下去，缩小后依然是完整的鱼"，不如说是**"一株正在快速生长的珊瑚礁"**——礁体的核心骨架（先进制程、HBM存储、电力基础设施、头部两三家模型公司、少数几家已验证现金流的应用层公司）是钙化的、永久性的沉积，不会因为周期波动而消失，只会越长越硬；而附着在礁体表面的浮游生物层（长尾创业公司、部分二级市场投机盘、依赖表外杠杆的影子云厂商）会随着水温（流动性/信用环境）变化被大规模冲刷掉，这个过程可能相当惨烈，但冲刷掉的从来不是礁体本身。

**最终判断汇总**：
1. 局部资产价格调整/结构性出清：**已经开始，未来12个月概率约80-85%**。
2. 演变为拖累美国整体经济陷入统计意义衰退的系统性AI衰退：**概率约20-30%**，关键先行指标是私募信贷/SPV层是否出现首个实质性违约。
3. 最确定的公司赢家排序：**台积电、SK海力士 > Broadcom、电力资产所有者（Constellation/Vistra/GE Vernova） > 微软、Palantir、Anthropic、Databricks > 海湾主权基金（作为逆周期买家）**；应用层内部进一步分化为 Cursor/Harvey/Glean 式的"深度集成赢家"和 Character.AI/Inflection/Stability 式的"被收编或边缘化输家"。
4. 最确定的国家赢家：**美国（资本+技术+人才三重集中）与台湾/韩国（供应链中立地位）确定性最高；中国凭借效率路线和开源扩散，是本轮最被低估的相对赢家（阿里、字节、百度商业化验证扎实，"六小虎"内部则分化剧烈）；海湾产油国凭借主权资本的耐心属性，是出清阶段的最大机会型买家**。
5. **AI 六层地图（算力基建→芯片→前沿模型→推理层→应用层→具身智能）的泡沫成色呈"哑铃形"**：两端（物理基建、已验证的垂直应用）最稳，中段（腰部模型公司、推理层短期估值、通用工具应用、具身智能叙事型公司）最脆弱，具身智能是下一轮最值得警惕的"泡沫2.0候选区"。
6. **实体经济层面最确定的输家是全球外包服务业（BPO）**——印度、菲律宾合计逾800万从业者的结构性收缩已经在发生，且与AI资产泡沫是否破裂无关，是本报告认为"确定性最高"的一项判断。

这条鱼确实会瘪下去，也确实会继续游——但游向的不是一个方向，而是**核心资产继续膨胀、长尾资产加速出清**的两极分化格局。这也是为什么"谁是最大赢家"这个问题的答案，从来不是"AI行业"，而是产业链上那几个具体到公司名字的节点。

---

## 参考来源

1. [Anthropic Beats OpenAI on Secondary Markets With $1 Trillion Implied Valuation - Yahoo Finance](https://finance.yahoo.com/markets/stocks/articles/anthropic-beats-openai-secondary-markets-213828157.html)
2. [OpenAI has seen a 'resurgence' of interest in secondary markets](https://dnyuz.com/2026/07/20/openai-has-seen-a-resurgence-of-interest-in-secondary-markets/)
3. [Private Credit Funding for AI Data Centers - TradingKey](https://www.tradingkey.com/analysis/stocks/us-stocks/261437703-Petar-Petrov)
4. [Michael Burry revives bear case for AI chips amid GPU depreciation concerns - CryptoBriefing](https://cryptobriefing.com/michael-burry-bear-case-ai-chips-gpu/)
5. [Bridgewater Forecasts Real US GDP Growth of 2.8% in 2026 with AI Capex Contributing 1.4pp](https://www.edwardconard.com/macro-roundup/bridgewater-forecasts-real-us-gdp-growth-of-2-8-in-2026-with-ai-capex-contributing-1-4pp-50-this-year-and-growing-to-1-5pp-in-2027/)
6. [Recession Risk 2026 — Economic Outlook & Forecast](https://www.the-world-now.com/recession-risk)
7. [The New York Fed DSGE Model Forecast—March 2026](https://libertystreeteconomics.newyorkfed.org/2026/03/the-new-york-fed-dsge-model-forecast-march-2026/)
8. [Crunchbase Data: Global Startup Investment Hit Record $510B In H1 2026](https://news.crunchbase.com/venture/global-startup-exits-ipo-ma-soar-ai-q2-h1-2026/)
9. [AI Startup Funding Trends 2026 - Qubit Capital](https://qubit.capital/blog/ai-startup-fundraising-trends)
10. [Inside the AI Bubble: How OpenAI & Nvidia are Weaving a Web of Circular Deals - Outlook Business](https://www.outlookbusiness.com/explainers/inside-the-ai-bubble-how-openai-nvidia-are-weaving-a-web-of-circular-deals)
11. [S&P 500 closes lower, Nasdaq falls more than 1% as chip stocks suffer - CNBC](https://www.cnbc.com/2026/07/16/stock-market-today-live-updates.html)
12. [Chip Stocks Selloff July 2026 | AI Semiconductors Crashing - TNN](https://truthsandnews.com/investing/chip-stocks-selloff-july-2026-ai-semiconductors-crashing)
13. [MIT Report Finds 95% of AI Pilots Fail to Deliver ROI](https://www.legal.io/blog/5719519/MIT-Report-Finds-95-of-AI-Pilots-Fail-to-Deliver-ROI-Exposing-GenAI-Divide)
14. [AI ROI in 2026: Why Enterprise AI Fails & Works - Terminal X](https://www.terminal-x.ai/research/ai-roi-in-2026-why-most-enterprise-ai-fails-and-what-actually-works)
15. [S&P 500's Weight In Mag 7 Stocks Passes 30% - Forbes](https://www.forbes.com/sites/investor-hub/article/sp-500-weight-mag-7-stocks-diversification-risk/)
16. [AI Spending Is Surging Faster Than Revenue And Markets Are Repricing - Forbes](https://www.forbes.com/sites/jasonkirsch/2026/06/02/the-ai-capex-to-revenue-gap-is-widening---and-markets-are-starting-to-notice/)
17. [AI Bubble vs. Dot-com Bubble: A Data-Driven Comparison - IntuitionLabs](https://intuitionlabs.ai/articles/ai-bubble-vs-dot-com-comparison)
18. [Anthropic, OpenAI Hold Majority Of Startup AI Revenue - MediaPost](https://www.mediapost.com/publications/article/415163/anthropic-openai-hold-majority-of-startup-ai-reve.html)
19. [Tech AI spending approaches $700 billion in 2026 - CNBC](https://www.cnbc.com/2026/02/06/google-microsoft-meta-amazon-ai-cash.html)
20. [AI bubble burst in 2026 Odds & Prediction Market Analysis - CryptoSlate](https://cryptoslate.com/predictions/market/ai-bubble-burst-in-2026/)
21. ["Sam Altman Says It's 'Insane': Is the AI Bubble About to Burst?" - Medium](https://medium.com/@ilanpoonjolai/sam-altman-says-its-insane-is-the-ai-bubble-about-to-burst-ac8c208b3f2d)
22. [Jensen Huang Dismisses Bubble Concerns as OpenAI Craves a "Money Printer" - 36Kr](https://eu.36kr.com/en/p/3504217691479177)
23. [AI Is Now Load-Bearing for the US Economy — Bloomberg, Morgan Stanley, and Bridgewater Agree - FourWeekMBA](https://fourweekmba.com/ai-ai-gdp-load-bearing-us-economy-bloomberg-morgan-stanley-brid/)
24. [AI Capex Carries U.S. Economy: 75% of Q1 GDP Growth - TECHi](https://www.techi.com/ai-capex-carries-us-economy-token-factories/)
25. [TSMC widens AI chip lead as HBM and CoWoS bottlenecks reshape supply chains - DIGITIMES](https://www.digitimes.com/news/a20260713VL204/tsmc-cowos-capacity-hbm-weekly-news-roundup.html)
26. [2026 Market Outlook: SK hynix's HBM to Fuel AI Memory Boom](https://news.skhynix.com/2026-market-outlook-focus-on-the-hbm-led-memory-supercycle/)
27. [What ASML's Blowout Means for the AI Boom - Stocks Down Under](https://stocksdownunder.com/asml-ai-boom-nvidia-micron-tsmc/)
28. [Buy 3 Nuclear Energy Stocks for 2026 Amid AI-Powered Data Center Boom - Yahoo Finance](https://finance.yahoo.com/sectors/energy/articles/buy-3-nuclear-energy-stocks-163900924.html)
29. [The custom AI ASIC state of play (May 2026) - Tom's Hardware](https://www.tomshardware.com/tech-industry/semiconductors/custom-ai-asics-examined-from-broadcom-to-mtia)
30. [NVIDIA Is Not the Only AI Chip Winner: Broadcom Forecasts $56 Billion - Tech Times](https://www.techtimes.com/articles/317846/20260605/nvidia-not-only-ai-chip-winner-broadcom-forecasts-56-billion-custom-silicon-demand-surges.htm)
31. [Palantir vs Oracle Stock: Two Different AI Bets, One Defining Question - TECHi](https://www.techi.com/palantir-vs-oracle-stock/)
32. [Cursor AI Valuation Hits $60B: Anysphere's $2B Revenue Surge - Tech Insider](https://tech-insider.org/cursor-60-billion-valuation-anysphere-ai-coding-2026/)
33. [G42, HUMAIN, MGX, RTS: Sovereign AI in the Gulf - Tactical Report](https://www.tacticalreport.com/topics/gulf-sovereign-ai-defense)
34. [AI, the Gulf, and the US: A Primer - Middle East Institute](https://mei.edu/report/ai-the-gulf-and-the-us-a-primer/)
35. [MGX's $49B AI Fund vs HUMAIN, Qai, GIC: Four Sovereign Bets - Forbes](https://www.forbes.com/sites/guneyyildiz/2026/07/03/abu-dhabis-49-billion-ai-fund-and-its-sovereign-rivals/)
36. [Softbank dumps its entire Nvidia portfolio worth $5.8 billion - Fortune](https://fortune.com/2025/11/11/softbank-nvidia-openai-masayoshi-son-sam-altman-investment/)
37. [SoftBank books $4.2 billion gain on OpenAI bet - CNBC](https://www.cnbc.com/2026/02/12/softbank-vision-fund-openai.html)
38. [Humanoid Robotics In 2026: The Race From Pilot To Platform - KraneShares](https://kraneshares.com/humanoid-robotics-in-2026-the-race-from-pilot-to-platform/)
39. [What is China's AI Strategy in 2026? - Digital in Asia](https://digitalinasia.com/china-ai-models-chips-strategy/)
40. [Exclusive-China's DeepSeek Developing Its Own AI Chip - Taipei Times](https://www.taipeitimes.com/News/biz/archives/2026/07/08/2003860388)
41. [CoreWeave vs. Oracle: Which AI Infrastructure Stock is the Better Pick? - TradingView](https://www.tradingview.com/news/zacks:af28a5387094b:0-coreweave-vs-oracle-which-ai-infrastructure-stock-is-the-better-pick/)
42. [AI emerges as a top cause of layoffs, accounting for 26% of April's job cuts - CBS News](https://cbsnews.com/news/ai-layoffs-job-cuts-challenger-report-april-2026/)
43. [Did AI Take Your Job? The Truth About AI Washing - Built In](https://builtin.com/articles/ai-washing-layoffs)
44. [智谱、MiniMax、月之暗面角逐"大模型第一股" - 财联社](https://www.cls.cn/detail/2227664)
45. [VC的钱"烧不起"了，智谱、MiniMax等大模型独角兽IPO进程加速 - 澎湃新闻](https://m.thepaper.cn/newsDetail_forward_32246739)
46. [消息称MiniMax将完成近3亿美元新融资，继智谱后考虑上市 - 21经济网](https://www.21jingji.com/article/20250715/herald/0c78cb8e4aefa9d2e44accb8d41e9f15.html)
47. [5个月烧掉171亿！阶跃星辰能否撑起下一个万亿？ - 新浪财经](https://finance.sina.cn/stock/ggyj/2026-05-10/detail-inhxmeaf2582837.d.html)
48. [智谱和MiniMax上市表现亮眼，压力给到其他"小虎"？ - 21经济网](https://www.21jingji.com/article/20260114/herald/e4dd26bc84b9bedb8be24d7c28e819ed.html)
49. [Chinese AI Startup Moonshot Unveils Kimi K3 Model—Will It Challenge OpenAI And Anthropic? - Forbes](https://www.forbes.com/sites/tylerroush/2026/07/17/chinese-ai-startup-moonshot-unveils-kimi-k3-model-will-it-challenge-openai-and-anthropic/)
50. [Moonshot Nears $30 Billion Valuation After Kimi K3 Release - TradingView](https://www.tradingview.com/news/gurufocus:676c514e6094b:0-moonshot-nears-30-billion-valuation-after-kimi-k3-release/)
51. [Moonshot AI IPO push follows Kimi, Alibaba AI releases that shook bitcoin - CoinDesk](https://www.coindesk.com/tech/2026/07/20/moonshot-ai-ipo-push-follows-kimi-alibaba-ai-releases-that-shook-bitcoin)
52. [Mistral nearly doubles its valuation to €20B. Now it has to justify it - TFN](https://techfundingnews.com/mistral-ai-3b-euro-20b-valuation-data-centres/)
53. [AI Company Rankings 2026: Dataset for 2,000+ AI Companies - TLDL](https://www.tldl.io/resources/ai-companies-landscape-2026)
54. [Together AI raises $800M at $8.3B valuation as enterprises ditch closed models for open-source - TFN](https://techfundingnews.com/together-ai-raises-800m-at-8-3b-valuation-as-enterprises-ditch-closed-models-for-open-source/)
55. [Nvidia-backed Fireworks hits $17.5 billion valuation as companies pursue cheaper AI models - CNBC](https://www.cnbc.com/2026/07/16/fireworks-nvidia-cloud-ai-startup-value.html)
56. [Baseten $1.5B Raise and the AI Inference Gold Rush - Digital Applied](https://www.digitalapplied.com/blog/baseten-1-5b-funding-ai-inference-infrastructure-2026)
57. [AI Infrastructure: what are the top startups now? - New Market Pitch](https://newmarketpitch.com/blogs/news/ai-infrastructure-top-startups)
58. [State Of Perplexity AI July 2026 - Stan Ventures](https://www.stanventures.com/news/state-of-perplexity-ai-july-2026-7441/)
59. [Character.AI in 2026: Features, Usage Guide, and What's Coming Next - Autoppt](https://autoppt.com/blog/character-ai-evolution-complete-guide/)
60. [AI Acquisition Tracker 2026 - Presenc AI](https://presenc.ai/research/ai-acquisition-tracker-2026)
61. [24. Harvey - CNBC Disruptor 50](https://www.cnbc.com/2026/05/19/harvey-cnbc-disruptor-50-ranking.html)
62. [7 AI Agent Startups Funded by Top VCs in 2026 - Unicorn Screener](https://unicornscreener.vc/blog/7-ai-agent-startups-funded-by-top-vcs-in-2026)
63. [Stop calling it 'The AI bubble': It's actually multiple bubbles, each with a different expiration date - VentureBeat](https://venturebeat.com/infrastructure/stop-calling-it-the-ai-bubble-its-actually-multiple-bubbles-each-with-a)
64. [Retail Rewired: How AI Is Reshaping the Retail Business Model - BCG](https://www.bcg.com/publications/2026/how-ai-is-reshaping-the-retail-business-model)
65. [State of AI in E-Commerce 2026 - Stord Report](https://www.stord.com/reports/state-of-ai-2026)
66. [AI threatens millions of BPO jobs in India and Philippines - Outsource Accelerator](https://news.outsourceaccelerator.com/ai-threatens-bpo-india-philippines/)
67. [Will AI Replace BPO Jobs? How 8 Million Workers in India and the Philippines Face a 2030 Reckoning - Storyantra](https://www.storyantra.in/2026/05/will-ai-replace-bpo-jobs-how-8-million.html)
68. [Humanoid Robotics In 2026: The Race From Pilot To Platform - KraneShares](https://kraneshares.com/humanoid-robotics-in-2026-the-race-from-pilot-to-platform/)
69. [Humanoid Robots 2026: Figure vs Apptronik vs 1X vs Tesla Optimus vs Unitree - ValueAddVC](https://valueaddvc.com/blog/humanoid-robots-in-2026-figure-apptronik-1x-and-tesla-optimus-compared)
70. [AI应用2026前瞻：豆包千问元宝加速"跑马圈地" - 财联社](https://www.cls.cn/detail/2243297)
71. [算不平的AI账：字节收网，阿里腾讯百度还在站岗 - 钛媒体](https://www.tmtpost.com/7977487.html)
72. [Databricks IPO 2026: Valuation, Snowflake Rivalry & How To Invest - Tech Insider](https://tech-insider.org/databricks-valuation-175-billion-2026/)
73. [Snowflake's AI Data Cloud Strategy Is Working — But Valuation and Competition Raise the Bar - MLQ.ai](https://mlq.ai/news/snowflakes-ai-data-cloud-strategy-is-working-but-valuation-and-competition-raise-the-bar/)

---

*本报告基于截至2026年7月21日可获取的公开信息撰写，涉及大量前瞻性判断和概率估计，不构成投资建议。市场数据、估值和公司战略随时可能变化，请以最新公开披露信息为准。*
