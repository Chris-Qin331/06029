const docx = require('docx');
const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, PageBreak,
} = docx;

const FONT = '宋体';
const FONT_EN = 'Times New Roman';
const SZ = 24;
const SZ_SM = 21;
const SZ_H1 = 36;
const SZ_H2 = 30;
const SZ_H3 = 26;

function tr(text, o = {}) {
  return new TextRun({ text, font: { name: FONT, eastAsia: FONT }, size: o.size || SZ, ...o });
}

function p(parts, o = {}) {
  const runs = (Array.isArray(parts) ? parts : [parts]).map(x => {
    if (x instanceof TextRun) return x;
    if (typeof x === 'string') return tr(x);
    return tr(x.text || '', x);
  });
  return new Paragraph({
    alignment: o.align || AlignmentType.JUSTIFIED,
    spacing: { line: o.line || 360, after: o.after !== undefined ? o.after : 80 },
    indent: o.indent !== undefined ? o.indent : { firstLine: 480 },
    children: runs,
  });
}

function el(n = 1) {
  return Array.from({ length: n }, () => new Paragraph({ spacing: { line: 280, after: 0 }, children: [] }));
}

function h1(text) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 200, line: 480 },
    children: [tr(text, { bold: true, size: SZ_H1 })],
  });
}

function h2(text) {
  return new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { before: 360, after: 160, line: 400 },
    indent: 0,
    children: [tr(text, { bold: true, size: SZ_H2 })],
  });
}

function h3(text) {
  return new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { before: 240, after: 120, line: 380 },
    indent: 0,
    children: [tr(text, { bold: true, size: SZ_H3 })],
  });
}

function h4(text) {
  return new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { before: 200, after: 100, line: 360 },
    indent: 0,
    children: [tr(text, { bold: true, size: SZ })],
  });
}

const tb = { style: BorderStyle.SINGLE, size: 1, color: '000000' };
const borders = { top: tb, bottom: tb, left: tb, right: tb };

function cell(text, o = {}) {
  return new TableCell({
    width: o.width ? { size: o.width, type: WidthType.DXA } : undefined,
    borders,
    children: [new Paragraph({
      alignment: o.align || (o.left ? AlignmentType.LEFT : AlignmentType.CENTER),
      spacing: { line: 300, before: 40, after: 40 },
      indent: o.left ? { left: 80 } : undefined,
      children: [tr(text, { bold: o.bold, size: o.size || SZ_SM })],
    })],
  });
}

function infoTable(rows) {
  return new Table({
    width: { size: 9000, type: WidthType.DXA },
    rows: rows.map(([label, value]) => new TableRow({
      children: [
        cell(label, { bold: true, width: 2200, align: AlignmentType.LEFT, left: true }),
        cell(value, { width: 6800, align: AlignmentType.LEFT, left: true }),
      ],
    })),
  });
}

function pb() {
  return new Paragraph({ children: [new PageBreak()] });
}

const c = [];

// ═══════════════ Title ═══════════════
c.push(h1('ezBuild竞品深度研究报告'));
c.push(p('（第一部分：核心竞品团队、技术路径与客户案例分析）', { align: AlignmentType.CENTER, indent: 0 }));
c.push(...el(1));
c.push(p([{ text: '报告日期：', bold: true }, '2026年8月'], { align: AlignmentType.CENTER, indent: 0 }));
c.push(p([{ text: '研究范围：', bold: true }, '全球模块化建筑行业直接竞品'], { align: AlignmentType.CENTER, indent: 0 }));
c.push(...el(2));

// ═══════════════ TOC ═══════════════
c.push(h2('目录'));
c.push(p('一、国际竞品', { indent: 0 }));
c.push(p('1.1  Boxabl（美国·拉斯维加斯） —— 折叠式小型模块化住宅', { indent: { left: 480 } }));
c.push(p('1.2  Z Modular / Zekelman Industries（美国·芝加哥） —— 钢结构模块化开发', { indent: { left: 480 } }));
c.push(p('1.3  积水房屋 Sekisui House（日本·大阪） —— 工业化住宅全球化先驱', { indent: { left: 480 } }));
c.push(p('1.4  大和房屋 Daiwa House（日本·大阪） —— 日本最大住宅建筑商', { indent: { left: 480 } }));
c.push(p('1.5  Clayton Homes / Berkshire Hathaway（美国·田纳西） —— 美国最大预制房屋商', { indent: { left: 480 } }));
c.push(p('1.6  三星C&T Samsung C&T（韩国·首尔） —— 全球化EPC+模块化', { indent: { left: 480 } }));
c.push(p('1.7  Blu Homes → Dvele（美国·加州） —— 轻量化折叠独栋', { indent: { left: 480 } }));
c.push(p('二、国内竞品', { indent: 0 }));
c.push(p('2.1  中集模块化建筑 CIMC MBS（中国·江门） —— 模块化数据中心+公建龙头', { indent: { left: 480 } }));
c.push(p('2.2  中建海龙 / 中建科工（中国·深圳） —— 央企MiC模块化', { indent: { left: 480 } }));
c.push(p('2.3  美好置业（中国·武汉） —— PC装配式建筑', { indent: { left: 480 } }));
c.push(p('2.4  江苏零界科技（中国·江苏） —— 木结构装配式', { indent: { left: 480 } }));
c.push(p('三、竞品综合对比矩阵', { indent: 0 }));

c.push(pb());

// ═══════════════ Section 1: International ═══════════════
c.push(h2('一、国际竞品'));

// ── 1.1 Boxabl ──
c.push(h3('1.1  Boxabl（美国·拉斯维加斯）'));
c.push(p('折叠式小型模块化住宅，2026年7月通过SPAC在纳斯达克上市，估值35亿美元。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['成立时间', '2017年12月'],
  ['总部', '美国内华达州北拉斯维加斯'],
  ['上市信息', 'NASDAQ: BXBL（2026年7月20日通过SPAC上市，估值约35亿美元）'],
  ['融资历史', '累计众筹融资超2.35亿美元'],
  ['员工规模', '约200-300人'],
  ['工厂', '北拉斯维加斯3座工厂，总面积约42,200㎡（422,000 sq ft）'],
  ['累计产量', '截至2025年6月已生产731套Casita，交付270套'],
  ['核心产品', 'Casita（33.5㎡/361 sq ft折叠式全功能住宅单元）'],
]));

c.push(h4('（二）创始团队与现任管理层'));

c.push(p([{ text: 'Paolo Tiramani —— 联合创始人、联合CEO、首席工程与战略官、执行主席', bold: true }], { indent: 0 }));
c.push(p('美国企业家，工业设计及机械工程背景。拥有超过150项专利申请，涵盖工业设计、机械工程和建筑技术领域。2017年12月创立Boxabl，2025年4月起担任联合CEO兼首席工程与战略官。在创立Boxabl之前，曾在多个行业从事产品设计和发明工作，具有丰富的跨领域工程化商业化经验。'));

c.push(p([{ text: 'Galiano Tiramani —— 联合创始人、联合CEO、董事', bold: true }], { indent: 0 }));
c.push(p('Paolo Tiramani之子。连续创业者，曾涉足加密货币套利、比特币ATM运营和农业项目等多个领域。2017年与父亲Paolo和联合创始人Kyle Denman一起构思了改造传统住宅建造行业的方案，共同创立Boxabl。现任联合CEO，主要负责公司战略和运营管理。'));

c.push(p([{ text: 'Kyle Denman —— 联合创始人、首席产品官、工程总监、董事', bold: true }], { indent: 0 }));
c.push(p('机械工程学士学位，在土木和汽车机械领域拥有多项专利申请经验。Boxabl三位联合创始人之一，负责公司核心产品研发和模块化工程平台的技术开发工作。'));

c.push(p([{ text: 'Martin Noe Costas —— 首席财务官（CFO）', bold: true }], { indent: 0 }));
c.push(p('曾在霍尼韦尔（Honeywell）、斯伦贝谢（Schlumberger）、耐克森（Nexans）、Sysco及普华永道（PwC）等国际企业担任高级财务职务。'));

c.push(p([{ text: 'Shanmugam Palaniappan —— 首席技术官（CTO）', bold: true }], { indent: 0 }));
c.push(p('曾任Sagent公司高级副总裁（SVP of Engineering），此前在DataRobot担任领导职务，并在Salesforce工作近十年。负责Boxabl的技术架构和软件平台建设。'));

c.push(h4('（三）技术路径'));
c.push(p([{ text: '核心技术：折叠式模块化建筑（Foldable Modular）', bold: true }], { indent: 0 }));
c.push(p('Boxabl的核心技术创新在于其专利折叠技术——将一个完整的房间模块（含厨房、浴室、电气和管道系统）折叠至标准公路运输、铁路和集装箱尺寸。具体技术特点：'));
c.push(p('（1）折叠结构：Casita在工厂内完成全部制造，包括所有内装、水电和家具，然后折叠为约2.4m×6m×2.7m的运输尺寸，到达现场后不到1小时即可展开为33.5㎡的全功能住宅。'));
c.push(p('（2）流水线生产：采用类似汽车流水线的生产方式，目前每4小时可生产一套Casita，目标缩短至每3-4分钟一套。'));
c.push(p('（3）材料体系：使用钢框架结构+专利复合面板系统，兼顾结构强度和轻量化。'));
c.push(p('（4）下一代工厂"Boxzilla"：高度自动化的下一代工厂概念，目标将人工成本大幅降低，实现接近汽车行业的制造效率。'));
c.push(p([{ text: '局限性：', bold: true }, '目前仅有Casita一款33.5㎡的产品，覆盖场景极为有限（ADU/小型独立住宅），无法满足公寓、商业、酒店等多层多业态需求。产品定位为C端小业主市场，无B端整体解决方案能力。']));

c.push(h4('（四）核心客户案例'));
c.push(p([{ text: '1. 美国政府/军方订单', bold: true }], { indent: 0 }));
c.push(p('Boxabl曾公开披露收到来自美国政府和军方的Casita订单需求，用于快速部署的临时住房。据报道，埃隆·马斯克（Elon Musk）的SpaceX德克萨斯基地Starbase曾购买Casita用作员工住房（该信息曾引发大量社交媒体讨论，但Boxabl和马斯克均未正式确认具体合同细节）。'));
c.push(p([{ text: '2. 众筹预订积压', bold: true }], { indent: 0 }));
c.push(p('截至SPAC上市前，Boxabl声称已收到约190,000套Casita的预订意向，但实际生产仅731套（截至2025年6月），交付仅270套。预订量与实际交付量之间存在巨大缺口，执行风险极高。'));
c.push(p([{ text: '3. 具体项目交付情况', bold: true }], { indent: 0 }));
c.push(p('已交付项目主要集中在美国本土个人客户和小型开发商。公开报道的大规模标杆项目案例极为有限，与其35亿美元估值和190,000套预订量形成鲜明反差。单台Casita售价约49,500美元（起步价），实际含运输和安装费用后约60,000-80,000美元。'));

c.push(pb());

// ── 1.2 Z Modular ──
c.push(h3('1.2  Z Modular / Zekelman Industries（美国·芝加哥）'));
c.push(p('北美钢管领域最大独立制造商Zekelman Industries旗下模块化建筑事业部。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['母公司', 'Zekelman Industries（北美最大独立钢管制造商，近150年历史）'],
  ['成立时间', '2016年12月（作为Zekelman事业部成立）'],
  ['总部', '美国伊利诺伊州芝加哥'],
  ['业务构成', 'VectorBloc Corp.（连接系统）+ Z Modular Fabrication（制造）+ Connexio Building Systems（施工安装）'],
  ['已完成项目', '8个开发项目'],
  ['在建/规划项目', '10个项目（预计未来两年内完成）'],
  ['年产能目标', '未来数年内达到5,000套/年以上'],
  ['垂直整合', '可自主供应模块化单元中90%的钢材相关材料'],
]));

c.push(h4('（二）创始团队与现任管理层'));

c.push(p([{ text: 'Barry Zekelman —— Zekelman Industries执行主席兼CEO（集团层面）', bold: true }], { indent: 0 }));
c.push(p('加拿大籍企业家，Zekelman家族第三代掌门人。将家族钢管企业从区域性制造商发展为北美最大独立钢管企业。2016年决定进入模块化建筑领域，创立Z Modular事业部，将钢管制造的工业化基因引入建筑行业。同时也是美国钢铁关税政策的积极倡导者。'));

c.push(p([{ text: 'Nate Arnold —— Z Modular总裁（2025年4月就任）', bold: true }], { indent: 0 }));
c.push(p('拥有超过20年房地产、资产管理和建筑管理领域的领导经验。此前担任Brookfield Properties高级副总裁（SVP of Construction and Development），负责大型商业和住宅综合体的建设开发。拥有建筑管理和房地产开发双硕士学位。'));

c.push(p([{ text: 'Mickey McNamara —— Zekelman Industries总裁（前Z Modular负责人）', bold: true }], { indent: 0 }));
c.push(p('Z Modular的前任负责人，因业绩出色被提升为Zekelman Industries集团总裁。在Z Modular期间主导了事业部早期项目交付和业务体系搭建。'));

c.push(h4('（三）技术路径'));
c.push(p([{ text: '核心技术：钢结构模块化建筑（Steel Modular Construction）', bold: true }], { indent: 0 }));
c.push(p('Z Modular的差异化优势在于母公司Zekelman Industries的钢材垂直整合能力：'));
c.push(p('（1）VectorBloc连接系统：专利模块化连接技术，实现模块之间的快速、精确拼接，支持4-10层中高层建筑。'));
c.push(p('（2）垂直整合供应链：可自主供应模块化单元中90%的钢材相关材料，从钢管到结构件一体化，降低成本并缩短供应周期。'));
c.push(p('（3）开源可扩展的建筑生态系统（Building Ecosystem）：标准化的模块设计体系，支持公寓、酒店、学生宿舍、办公楼等多种业态的快速设计转换。据报道可在10天内完成酒店项目的模块化设计方案转换，包含参数化Revit模型、机电设计、预算报价和项目排期。'));
c.push(p('（4）适用建筑类型：4-10层，60,000-200,000 sq ft（约5,600-18,600㎡），主要面向中高层多户住宅和酒店。'));
c.push(p([{ text: '局限性：', bold: true }, '仅限于北美市场运营，海外布局薄弱。以钢结构为单一材料体系，无法兼容木结构、混凝土等其他材料。面向B端开发商，无C端直接获客能力。']));

c.push(h4('（四）核心客户案例'));
c.push(p([{ text: '1. 华盛顿特区模块化公寓项目', bold: true }], { indent: 0 }));
c.push(p('华盛顿特区首个模块化公寓项目，采用Z Modular的开源可扩展建筑生态系统。该项目面向年轻租客市场（Gen Z群体），包含多户住宅单元，是Z Modular在美国东海岸的标志性项目。'));
c.push(p([{ text: '2. 纳什维尔酒店项目', bold: true }], { indent: 0 }));
c.push(p('与万豪（Marriott）品牌合作的纳什维尔AC酒店项目，采用模块化建造方式，是Z Modular在酒店领域的代表案例。Z Modular为该项目提供了包含参数化Revit模型、机电设计和完整预算的模块化转换方案。'));
c.push(p([{ text: '3. 其他已完成/在建项目', bold: true }], { indent: 0 }));
c.push(p('包括加利福尼亚州办公建筑、德克萨斯州多户公寓、安大略省（加拿大）学生宿舍等。目前共有9个在运营物业，合计约2,000套单元，另有3个项目在开发中。'));

c.push(pb());

// ── 1.3 Sekisui House ──
c.push(h3('1.3  积水房屋 Sekisui House（日本·大阪）'));
c.push(p('日本最大住宅建筑商之一，全球工业化住宅领域的技术标杆。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['成立时间', '1960年8月1日'],
  ['总部', '日本大阪市北区'],
  ['上市信息', '东京证券交易所（TYO: 1928）'],
  ['2024财年营收', '约56.7亿美元（合并）；美国业务含MDC后达81.4亿美元'],
  ['全球员工', '约30,000人（含美国MDC Holdings）'],
  ['业务范围', '住宅建筑、房地产开发、都市开发、国际业务'],
  ['海外业务', '美国（16个州）、澳大利亚、英国、新加坡、中国'],
  ['累计交付', '全球累计交付超250万套住宅'],
]));

c.push(h4('（二）创始团队与现任管理层'));

c.push(p([{ text: '田鍋健（Ueda Takeshi）—— 创始人（历史）', bold: true }], { indent: 0 }));
c.push(p('积水房屋于1960年从积水化学工业株式会社（Sekisui Chemical）独立出来，最初以预制住宅为核心业务。创始时期主要依托积水化学的塑料及化学材料技术基础，开发出最早的预制住宅产品。'));

c.push(p([{ text: '仲井嘉浩（Nakai Yoshihiro）—— 现任代表取締役社長兼CEO', bold: true }], { indent: 0 }));
c.push(p('1988年毕业于京都大学工学部，同年加入积水房屋。在公司内部历经多个核心业务部门，逐步晋升至社长兼CEO。提出"让积水房屋的技术成为世界标准"的战略愿景，主导推进美国市场扩张（MDC Holdings收购）和海外10,000套独栋住宅供应目标。同时推动ESG经营，提出以创新实现"幸福生活"的企业理念。'));

c.push(h4('（三）技术路径'));
c.push(p([{ text: '核心技术：工厂预制钢结构住宅体系', bold: true }], { indent: 0 }));
c.push(p('积水房屋的技术体系经过60余年发展，形成了极为成熟的工业化住宅制造体系：'));
c.push(p('（1）SHAWOOD（シャーウッド）：积水房屋的高端木结构住宅品牌，采用工厂预切割+现场组装的方式，实现毫米级制造精度。2024年开始在美国市场销售SHAWOOD和NEW 2×4产品线，将日本住宅技术导入美国市场。'));
c.push(p('（2）钢结构模块化体系：以工厂预制的钢框架住宅为核心，具备极高的抗震抗风性能（日本建筑标准全球最严），工厂预制精度达毫米级。'));
c.push(p('（3）节能与可持续：模块化建造相比传统建造可节约12%-20%电能消耗，大幅减少建筑垃圾，符合全球"双碳"趋势。'));
c.push(p('（4）智能住宅平台"PLATFORM HOUSE"：集成IoT、健康管理、能源管理等功能的智能住宅平台，代表了住宅产品向"服务+硬件"转型的方向。'));

c.push(h4('（四）核心客户案例'));
c.push(p([{ text: '1. 收购美国MDC Holdings（49亿美元）—— 2024年4月完成', bold: true }], { indent: 0 }));
c.push(p('积水房屋以每股63美元现金收购美国第六大住宅建筑商MDC Holdings，交易总额约49亿美元。收购完成后，2024年合并交付14,680套住宅，创造81.4亿美元总收入，在美国16个州开展业务。MDC Holdings旗下品牌Richmond American Homes继续运营，积水房屋于2026年1月完成品牌整合。这是日本住宅企业在美国最大的一笔收购。'));
c.push(p([{ text: '2. 海外独栋住宅10,000套目标 —— 提前达成', bold: true }], { indent: 0 }));
c.push(p('积水房屋原定于2025财年实现海外年供应10,000套独栋住宅的战略目标，因MDC Holdings收购的整合效应，该目标已提前达成。目前海外年交付量约15,000套，覆盖美国、澳大利亚和英国市场。'));
c.push(p([{ text: '3. 澳大利亚住宅开发业务', bold: true }], { indent: 0 }));
c.push(p('积水房屋在澳大利亚已建立成熟的住宅开发和销售网络，是澳洲住宅市场的重要参与者。'));

c.push(pb());

// ── 1.4 Daiwa House ──
c.push(h3('1.4  大和房屋 Daiwa House（日本·大阪）'));
c.push(p('日本最大的住宅建筑商和综合建筑集团，全球工程品牌价值第15位。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['成立时间', '1955年4月5日'],
  ['创始人', '石橋信夫（Nobuo Ishibashi）'],
  ['总部', '日本大阪市北区梅田'],
  ['上市信息', '东京证券交易所（TYO: 1925）'],
  ['FY2026营收', '5兆5,768亿日元（约合370亿美元），同比增长2.6%'],
  ['FY2026营业利润', '6,148亿日元，同比增长12.6%'],
  ['FY2026净利润', '3,505亿日元，同比增长7.8%'],
  ['全球员工', '约73,000人'],
  ['业务范围', '住宅、商业设施、物流设施、事业设施、海外住宅与商业'],
  ['海外业务', '美国、澳大利亚、马来西亚、越南、印尼、欧洲'],
]));

c.push(h4('（二）创始团队与现任管理层'));

c.push(p([{ text: '石橋信夫（Nobuo Ishibashi）—— 创始人（1921-2003）', bold: true }], { indent: 0 }));
c.push(p('1955年创立大和房屋工业，开创日本预制住宅产业。最初以"3小时即可建成的管状钢管住宅"起家，将工业化生产理念引入住宅建造领域。在其领导下，大和房屋从一家小型预制住宅企业成长为日本最大的综合性建筑集团。被誉为"日本预制住宅之父"。'));

c.push(p([{ text: '芳井敬一（Yoshii Keiichi）—— 代表取締役社長（2017年就任至今）', bold: true }], { indent: 0 }));
c.push(p('主导了大和房屋的第七次中期经营计划，推进海外业务扩张（特别是美国和东南亚市场），以及物流设施和数据中心等新业态的布局。FY2026（截至2026年3月）在其领导下，大和房屋实现了创纪录的营收和利润表现。'));

c.push(h4('（三）技术路径'));
c.push(p([{ text: '核心技术：钢结构+混凝土混合预制住宅与商业建筑体系', bold: true }], { indent: 0 }));
c.push(p('（1）工厂预制体系：在日本国内运营多座大型预制工厂，覆盖钢结构和混凝土两大材料体系。住宅产品从设计到交付全流程工业化，工厂预制率极高。'));
c.push(p('（2）欧洲模块化扩张：2022年8月在德国设立Daiwa House Modular Europe B.V.，2023年在德国Fürstenwalde开设新工厂，专注于模块化住宅和学生公寓的生产制造，目标满足欧洲日益增长的高效、可负担住房需求。'));
c.push(p('（3）多业态覆盖：不同于积水房屋主要聚焦住宅，大和房屋的技术体系同时覆盖住宅、商业设施、物流仓储、工业厂房和数据中心等多种业态。'));
c.push(p('（4）美国业务：以Stanley-Martin、Frontdoor Communities、Essex Homes和Trumark Companies等品牌在美国运营，但美国业务主要为传统建造模式，非模块化。'));

c.push(h4('（四）核心客户案例'));
c.push(p([{ text: '1. 荷兰Lelystad 152户住宅项目', bold: true }], { indent: 0 }));
c.push(p('Daiwa House Modular Europe在荷兰Lelystad交付的152户模块化住宅项目，采用工厂预制模块化方式建造，是大和房屋在欧洲的标志性住宅项目。'));
c.push(p([{ text: '2. 德国Essen 106套学生公寓', bold: true }], { indent: 0 }));
c.push(p('在德国埃森交付的106套学生公寓项目，采用模块化建造方式，从设计到交付周期大幅缩短。'));
c.push(p([{ text: '3. 德国Fürstenwalde工厂', bold: true }], { indent: 0 }));
c.push(p('2023年在德国Fürstenwalde新建的模块化建筑生产工厂，标志着大和房屋正式以自有工厂模式进入欧洲模块化住宅市场。'));

c.push(pb());

// ── 1.5 Clayton Homes ──
c.push(h3('1.5  Clayton Homes / Berkshire Hathaway（美国·田纳西）'));
c.push(p('美国最大的预制房屋（Manufactured Homes）制造商和销售商，伯克希尔·哈撒韦子公司。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['成立时间', '1956年'],
  ['创始人', 'Jim Clayton'],
  ['总部', '美国田纳西州Maryville'],
  ['母公司', 'Berkshire Hathaway Inc.（2003年以17亿美元收购）'],
  ['2024年营收', '约13.44亿美元'],
  ['2024年税前利润', '约19亿美元'],
  ['工厂数量', '79个生产/销售网点（全美）'],
  ['员工规模', '超过10,000人'],
  ['市场份额', '占美国预制房屋行业总收入约67.6%'],
]));

c.push(h4('（二）创始团队与现任管理层'));

c.push(p([{ text: 'Jim Clayton —— 创始人', bold: true }], { indent: 0 }));
c.push(p('1956年创立Clayton Homes。田纳西大学法学院毕业，从一个二手房车的销售起步，逐步将公司发展为全美最大的预制房屋企业。2003年将公司以17亿美元出售给伯克希尔·哈撒韦。沃伦·巴菲特读了Jim Clayton的自传后主动联系其子Kevin Clayton提出收购。'));

c.push(p([{ text: 'Kevin Clayton —— 现任总裁兼CEO', bold: true }], { indent: 0 }));
c.push(p('创始人Jim Clayton之子。1980年代加入Clayton Homes，历任多个管理岗位，1999年接任CEO至今。在其领导下，Clayton Homes完成了与伯克希尔·哈撒韦的整合，并将市场份额扩大至行业的三分之二。2025年伯克希尔·哈撒韦股东大会上展示了CrossMod等创新产品。'));

c.push(h4('（三）技术路径'));
c.push(p([{ text: '核心技术：大规模流水线预制住宅（Manufactured Housing）', bold: true }], { indent: 0 }));
c.push(p('（1）HUD标准预制住宅：Clayton Homes主要生产符合美国HUD（住房与城市发展部）标准的预制住宅，在工厂内完成全部建造，整体运输至现场安装。'));
c.push(p('（2）CrossMod产品线：2024年推出的创新产品，结合了预制住宅的成本优势和传统住宅的外观品质（含门廊、永久基础等），FHFA研究显示其升值率与传统住宅相当。'));
c.push(p('（3）规模化生产：79个工厂覆盖全美，具备行业最大的生产网络和分销能力。'));
c.push(p('（4）产品定位：定位于可负担性住房（Affordable Housing），单价远低于传统住宅，主要面向中低收入家庭。'));
c.push(p([{ text: '局限性：', bold: true }, '产品以单层平房和双拼为主，无多层模块化建筑能力。技术含量相对较低，主要依赖规模效应而非技术创新。品牌形象偏向"移动房屋"，在高端市场缺乏吸引力。无海外业务布局。']));

c.push(h4('（四）核心客户案例'));
c.push(p('Clayton Homes的商业模式以B2C零售为主（通过79个自有销售网点直接面向终端消费者），不依赖大型项目订单。2024年公开数据显示全年交付量在行业中占主导地位。2025年宣布在阿肯色州Conway新增产能，扩建新工厂以应对需求增长。'));

c.push(pb());

// ── 1.6 Samsung C&T ──
c.push(h3('1.6  三星C&T Samsung C&T（韩国·首尔）'));
c.push(p('三星集团旗下建筑工程与贸易子公司，全球EPC龙头，近年重点布局模块化核能（SMR）和沙特NEOM城市。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['母公司', '三星集团（Samsung Group）'],
  ['上市信息', '韩国交易所（KRX: 028260）'],
  ['主营业务', '工程建设（E&C）、贸易与投资、度假村、时尚'],
  ['全球项目', '中东（沙特、阿联酋）、韩国本土、罗马尼亚、北欧'],
  ['核心赛道', 'EPC工程承包 + SMR小型模块化反应堆 + 智能建造'],
  ['模块化建筑定位', '非住宅模块化，聚焦核能模块化和工业/城市级大型项目'],
]));

c.push(h4('（二）创始团队与现任管理层'));
c.push(p([{ text: 'Oh Se-chul —— 现任CEO', bold: true }], { indent: 0 }));
c.push(p('三星C&T工程建设部门CEO，主导公司在SMR核能领域和中东市场的战略扩张。'));
c.push(p('注：三星C&T作为三星集团子公司，管理层主要由集团内部培养和任命，创始人为三星集团创始人李秉喆家族。'));

c.push(h4('（三）技术路径'));
c.push(p([{ text: '核心技术：DfMA + BIM + MR + 核能SMR模块化', bold: true }], { indent: 0 }));
c.push(p('（1）SC Module技术：2025年6月成功演示的钢-混凝土复合（Steel-Composite）模块墙体技术，用于核电站建设。该技术将预制钢板在工厂离场制造，运至现场组装，提升安全性、缩短工期、提高质量并降低成本。'));
c.push(p('（2）NEOM建筑机器人：与沙特NEOM签署超过13亿沙特里亚尔（约3.5亿美元）的合资协议，共同开发和部署建筑自动化机器人技术，用于加速NEOM未来城市的建设。'));
c.push(p('（3）SMR全球布局：与GE Vernova Hitachi Nuclear Energy结成战略联盟推进BWRX-300小型模块化反应堆；与罗马尼亚合作SMR前端工程设计；与波兰Synthos Green Energy合作推进欧洲SMR项目；与北欧Kärnfull Next合作推进北欧SMR项目。'));
c.push(p('（4）住宅创新："Raemian THE NEXT HOME"——可适应未来生活方式的模块化可持续住宅概念，整合环保技术与模块化内装。'));
c.push(p([{ text: '局限性：', bold: true }, '模块化业务在三星C&T整体营收中占比不透明，核心优势在核能和大型EPC而非轻量化住宅模块化。与ezBuild的赛道重合度较低。']));

c.push(h4('（四）核心客户案例'));
c.push(p([{ text: '1. NEOM建筑机器人合资 —— SAR 13亿+（约3.5亿美元）', bold: true }], { indent: 0 }));
c.push(p('2025年与沙特NEOM签约建立合资公司，初始投资超过13亿沙特里亚尔，开发和部署前沿建筑自动化技术。'));
c.push(p([{ text: '2. 阿联酋ENEC核电合作 —— 2025年7月', bold: true }], { indent: 0 }));
c.push(p('与阿联酋核能公司（ENEC）签署合作备忘录，围绕大型核电、小型模块化反应堆和利用核能的氢能生产展开合作。'));
c.push(p([{ text: '3. GE Vernova联盟 —— BWRX-300 SMR全球部署', bold: true }], { indent: 0 }));
c.push(p('2025年10月与GE Vernova Hitachi Nuclear Energy签署战略联盟协议，在北美以外的全球市场推进BWRX-300小型模块化反应堆部署。'));

c.push(pb());

// ── 1.7 Blu Homes → Dvele ──
c.push(h3('1.7  Blu Homes → Dvele（美国·加州）'));
c.push(p('曾经的明星折叠式模块化住宅公司，2020年被Dvele收购，品牌合并运营。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['成立时间', 'Blu Homes：2007年；Dvele收购Blu Homes：2020年6月'],
  ['原始创始人', 'Bill Haney（CEO）、Maura McCarthy（联合创始人）'],
  ['现运营主体', 'Dvele（总部：美国加州圣迭戈）'],
  ['产品定位', '高端豪华预制模块化住宅'],
  ['核心产品', 'Breezehouse（现已更名为Dvele Whytecliff，约232㎡/2,500 sq ft）'],
  ['当前状态', '作为Dvele旗下品牌继续运营，但规模和影响力已大幅缩小'],
]));

c.push(h4('（二）创始团队与现任状态'));
c.push(p([{ text: 'Bill Haney —— Blu Homes原始创始人兼CEO', bold: true }], { indent: 0 }));
c.push(p('工业设计和机械工程背景，2007年创立Blu Homes，目标用折叠式钢框架技术颠覆住宅建造行业。Blu Homes累计融资约1.58亿美元（含Ares Capital领投的多轮融资）。但公司长期未能实现规模化盈利，2020年被Dvele收购。'));

c.push(p([{ text: 'Dvele收购后', bold: true }], { indent: 0 }));
c.push(p('Dvele是一家专注于自供能（Self-Powered）豪华预制住宅的公司，收购Blu Homes后将其Breezehouse产品线升级为Dvele的制造标准，更名为Whytecliff。Dvele目前在亚利桑那州扩展业务。'));

c.push(h4('（三）技术路径'));
c.push(p('原Blu Homes的折叠式钢框架技术与Boxabl理念相似但尺度更大（全尺寸独栋住宅而非微型ADU）。Dvele收购后整合了自身的自供能技术（太阳能+储能+智能家居一体化），目标打造"零能耗豪华住宅"。'));

c.push(h4('（四）客户案例'));
c.push(p('Blu Homes在被收购前累计交付项目有限（具体数量未公开披露），主要集中在美国加州高端住宅市场。作为行业曾经的明星案例，Blu Homes的"高融资、低交付、最终被收购"的命运对模块化住宅行业具有重要警示意义——轻量化折叠技术的商业化路径比想象中更难。'));

c.push(pb());

// ═══════════════ Section 2: Domestic ═══════════════
c.push(h2('二、国内竞品'));

// ── 2.1 CIMC MBS ──
c.push(h3('2.1  中集模块化建筑 CIMC MBS（中国·江门）'));
c.push(p('中集集团旗下模块化建筑业务平台，国内模块化建筑和模块化数据中心领域的绝对龙头。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['母公司', '中集集团（000039.SZ / 02039.HK）'],
  ['生产基地', '广东江门新会'],
  ['业务板块', '模块化建筑（酒店/公寓/办公/学校/医院）+ 模块化数据中心'],
  ['全球交付', '累计落地超200个项目，覆盖20+国家和地区'],
  ['累计交付房间数', '超过30,000套'],
  ['合作品牌', '希尔顿、万豪、洲际等全球连锁酒店集团'],
  ['数据中心在手订单', '300MW / 约40亿元（截至2025年末）'],
  ['2025年数据中心收入', '约5亿元'],
  ['集团利润预测', '2026年约40亿元（含海工+模块化+储能）'],
]));

c.push(h4('（二）核心管理层'));
c.push(p([{ text: '朱伟东 —— 中集模块化建筑投资有限公司总经理', bold: true }], { indent: 0 }));
c.push(p('负责中集模块化建筑的整体运营和业务拓展。在其带领下，公司在光伏幕墙等技术研发方面取得进展，近三年累计享受出口退税约8,600万元，反映出海外业务的规模。'));
c.push(p('注：中集模块化建筑作为中集集团旗下业务板块，核心管理层主要由集团培养和任命，更多高管信息未在公开渠道披露。'));

c.push(h4('（三）技术路径'));
c.push(p([{ text: '核心技术：重型钢结构集装箱模块化建筑（MiC）', bold: true }], { indent: 0 }));
c.push(p('（1）集装箱模块化基因：脱胎于中集集团全球第一的集装箱制造能力，将集装箱的标准化生产逻辑应用于建筑模块。采用重型钢结构框架，每个模块为一个完整的房间或功能单元，在工厂内完成结构、水电、装修全部工序。'));
c.push(p('（2）模块化数据中心：将数据中心的IT机柜、制冷系统、电力系统等整合在标准化模块中，工厂预制后运输至现场组装。交付周期从传统18-24个月压缩至9-12个月。'));
c.push(p('（3）BIM+Autodesk深度应用：与Autodesk合作，使用Revit等工具实现设计-生产-施工的数字化全流程管理。'));
c.push(p('（4）多场景覆盖：酒店、公寓、办公楼、学校、医院、数据中心等全场景。'));
c.push(p([{ text: '局限性：', bold: true }, '以重型钢结构为主，产品形态偏重、运输成本高，适合高密度城市建筑但不适合轻量化独栋住宅和文旅民宿场景。央企背景决策链较长，在灵活定制和快速响应方面可能不及创业公司。']));

c.push(h4('（四）核心客户案例'));
c.push(p([{ text: '1. 马来西亚2312超大型模块化数据中心 —— 2024年11月交付', bold: true }], { indent: 0 }));
c.push(p('全球首个超大型模块化数据中心。由中集旗下深圳中集建造承建，占地24万㎡，由三栋数据大厅组成，总建筑面积约2.93万㎡，包含833个模块，IT负荷约60MW，机柜3,168个。采用直膨式制冷系统，全年PUE仅1.4。从设计到交付不到10个月（传统需18-24个月）。2024年11月完成整体移交并正式投运。'));

c.push(p([{ text: '2. 香港立法会综合大楼扩建工程 —— 在建', bold: true }], { indent: 0 }));
c.push(p('香港首个在原有公共建筑物上采用MiC组装合成法进行扩建的项目。在原大楼三角形区域加建10层，于高座顶部新增4层空间，总计使用近300个MiC模块。由中集模块化建筑承建。香港立法会主席梁君彦曾亲赴江门考察中集模块化建筑的制造基地。'));

c.push(p([{ text: '3. 日本大阪2MW模块化数据中心 —— 2025年交付', bold: true }], { indent: 0 }));
c.push(p('中集模块化数据中心解决方案首次进入日本市场的标志性项目。'));

c.push(p([{ text: '4. 沙特利雅得地球精品酒店 —— 即将交付', bold: true }], { indent: 0 }));
c.push(p('中集在中东地区的首个模块化建筑酒店项目，2026年初已签约并即将发运。'));

c.push(p([{ text: '5. 喀麦隆雅温得办公楼 —— 2026年Q1发运', bold: true }], { indent: 0 }));
c.push(p('中非地区首个模块化建筑项目，位于喀麦隆首都雅温得Bastos区，2026年一季度已正式发运。'));

c.push(pb());

// ── 2.2 中建海龙 ──
c.push(h3('2.2  中建海龙 / 中建科工（中国·深圳）'));
c.push(p('中国建筑国际集团旗下模块化集成建筑（MiC）科技公司，国家装配式建筑产业基地。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['母公司', '中国建筑国际集团有限公司（3311.HK）→ 中国建筑集团（央企）'],
  ['企业资质', '国家装配式建筑产业基地、国家高新技术企业、专精特新企业、博士后创新实践基地'],
  ['核心技术品牌', 'C-MiC（高层混凝土模块化集成建筑）'],
  ['业务聚焦', '国内保障性住房、城市更新、公共建筑（医院/学校/宿舍）'],
  ['海外布局', '相对薄弱，以香港市场为主'],
]));

c.push(h4('（二）团队与背景'));
c.push(p('中建海龙作为央企中国建筑旗下的科技子公司，管理层由集团体系内培养和任命。公开信息未详细披露核心管理层个人简历。公司拥有博士后创新实践基地，技术团队以建筑结构工程专业为主。'));

c.push(h4('（三）技术路径'));
c.push(p([{ text: '核心技术：C-MiC高层混凝土模块化集成建筑', bold: true }], { indent: 0 }));
c.push(p('（1）C-MiC体系：中建海龙自主研发的原创技术，将高层建筑分解为若干个独立的混凝土模块，在工厂内完成结构、水电、装修等全部工序，运至现场整体吊装组装。关键技术突破在于混凝土模块的高层承重和连接节点设计。'));
c.push(p('（2）毫米级制造精度：工厂化生产保证每个模块的尺寸精度达到毫米级，现场组装误差极小。'));
c.push(p('（3）全工序工厂化：结构施工、机电安装、室内装修等传统现场工序全部在工厂内完成，现场仅需吊装和连接。'));
c.push(p('（4）适用场景：中高层住宅（特别是保障性住房）和公共建筑，是国内少数掌握高层模块化技术的企业。'));
c.push(p([{ text: '局限性：', bold: true }, '技术聚焦国内保障房和公建市场，海外市场布局薄弱（仅香港）。央企体制决定了其在海外拓展、灵活定价和快速响应创业项目方面的限制。产品以混凝土模块为主，在轻量化和低成本独栋住宅领域不具备优势。']));

c.push(h4('（四）核心客户案例'));
c.push(p([{ text: '1. 深圳梅林路6号保障性住房 ——"十四五"国家重点研发计划示范项目', bold: true }], { indent: 0 }));
c.push(p('采用C-MiC混凝土模块化集成建筑体系，整个建筑被拆分为800个模块，每个模块在工厂内完成全部结构、水电和装修工序，确保毫米级制造精度。该项目是中建海龙牵头的国家重点研发计划示范项目。'));

c.push(p([{ text: '2. 北京桦皮厂胡同8号楼原拆原建项目', bold: true }], { indent: 0 }));
c.push(p('城市更新和旧城改造领域的标杆案例，展示了MiC技术在老旧小区改建中的独特优势——在空间有限的胡同环境中实现模块化吊装和组装。'));

c.push(p([{ text: '3. 深圳龙华区华章新筑项目', bold: true }], { indent: 0 }));
c.push(p('保障性住房建设项目，采用MiC技术大幅缩短建设周期，是中建海龙在深圳地区的重要案例。'));

c.push(pb());

// ── 2.3 美好置业 ──
c.push(h3('2.3  美好置业（中国·武汉）'));
c.push(p('A股上市房企转型装配式建筑，以PC预制构件为核心，但近年经营困难。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['上市信息', '原000667.SZ（现证券简称"美置3"，代码400186，已退至新三板）'],
  ['总部', '中国湖北省武汉市'],
  ['核心技术', '叠合剪力墙技术体系'],
  ['2025年营收', '6.16亿元（同比+58%），其中装配式建筑仅0.33亿元（同比-70%）'],
  ['历史业绩', '2017-2021年装配式业务累计收入36.1亿元，累计亏损27.8亿元'],
  ['当前状态', '经营困难，已退市至新三板，装配式业务大幅萎缩'],
]));

c.push(h4('（二）团队与技术'));
c.push(p('美好置业的装配式建筑业务通过控股子公司"美好装配"运营，主要技术路线为PC（预制混凝土）构件的工厂化生产和现场装配，核心是叠合剪力墙技术体系。该技术以智能工厂为主体，通过工业化、数字化的方式实现拎包入住的大型智能化建设目标。'));
c.push(p([{ text: '关键教训：', bold: true }, '美好置业是模块化/装配式建筑行业的重要反面案例。公司战略摇摆——装配式产能大多用于内部房地产项目，对外拓展不力，产能利用率极低，错失市场机遇。同时从房地产向装配式建筑的战略转型执行不彻底，最终导致两头落空，退市至新三板。对ezBuild的启示是：轻资产模式下需确保外部订单获取能力，避免产能闲置和战略摇摆。']));

c.push(pb());

// ── 2.4 江苏零界 ──
c.push(h3('2.4  江苏零界科技（中国·江苏）'));
c.push(p('专精木结构装配式建筑，聚焦文旅民宿和独栋住宅细分市场。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['公司全称', '江苏零界科技集团有限公司'],
  ['总部', '中国江苏省'],
  ['核心赛道', '木结构装配式建筑（胶合木、CLT曲面模块化木屋、轻钢木混合）'],
  ['认证资质', 'FSC认证、CABR胶合木产品质量认证等多项国内外认证'],
  ['产品形态', '重型胶合木聚落（江南水乡风格）+ CLT曲面模块化木屋（文旅度假）'],
  ['业务范围', '绿色建材供应 + 创意定制建筑 + 特色景观装置'],
]));

c.push(h4('（二）团队'));
c.push(p('公开渠道未查询到江苏零界科技创始人及核心管理层的详细个人信息。'));

c.push(h4('（三）技术路径'));
c.push(p('（1）重型胶合木集群建筑：以标准化预制体系实现规模化低碳营建，适用于江南水乡风格的住宅和民宿聚落。'));
c.push(p('（2）CLT曲面模块化木屋：突破传统木结构造型限制，采用交叉层压木材（CLT）技术实现曲面造型，适配文旅度假场景。'));
c.push(p('（3）创意定制：提供曲面艺术建筑、可移动模块化木屋、特色景观装置等个性化方案，适配不同场地、气候和业态需求。'));
c.push(p([{ text: '局限性：', bold: true }, '仅限于单一木构体系，无法兼容钢结构、混凝土等其他材料。业务场景锁定在文旅民宿和独栋住宅，无法覆盖公寓、商业、应急建筑等更广阔市场。规模体量较小，品牌影响力有限。']));

c.push(pb());

// ═══════════════ Section 3: Comparison Matrix ═══════════════
c.push(h2('三、竞品综合对比矩阵'));
c.push(...el(1));

const matrixHeader = ['竞品', '材料体系', '产品场景', '技术壁垒', '海外能力', '规模/营收', '与ezBuild重合度'];
const matrixRows = [
  ['Boxabl', '钢框架+复合面板', '仅ADU/微型住宅', '折叠专利', '无（仅美国）', '35亿美元估值/实际收入极小', '低（场景不重合）'],
  ['Z Modular', '钢结构', '中高层公寓/酒店', 'VectorBloc连接系统+钢材垂直整合', '仅北美', '非上市/未披露', '中（公寓酒店重合）'],
  ['积水房屋', '钢结构+木结构', '独栋住宅', '60年工业化住宅积累', '美/澳/英', '81.4亿美元（含MDC）', '中（独栋住宅重合）'],
  ['大和房屋', '钢+混凝土混合', '住宅/商业/物流/工业', '全品类预制+欧洲工厂', '美/澳/欧/东南亚', '370亿美元（FY2026）', '中（多业态重合）'],
  ['Clayton', '木框架预制', '低价单层住宅', '79家工厂规模效应', '无（仅美国）', '13.4亿美元', '低（定位差异大）'],
  ['三星C&T', '钢-混凝土SC模块', '核能/大型EPC/城市', '三星品牌+核能先发', '全球（中东为主）', '集团级别', '极低（赛道不同）'],
  ['Blu Homes→Dvele', '钢框架折叠', '高端独栋', '折叠技术（已过时）', '无', '已被收购/极小', '低'],
  ['中集MBS', '重型钢结构', '酒店/公建/数据中心', '集装箱基因+全球交付', '20+国家', '数据中心5亿+', '高（海外模块化直接竞争）'],
  ['中建海龙', '混凝土C-MiC', '保障房/公建/城市更新', '高层混凝土模块化', '仅香港', '央企/未单独披露', '中低（国内保障房为主）'],
  ['美好置业', 'PC预制混凝土', '住宅（已萎缩）', '叠合剪力墙', '无', '装配式仅0.33亿', '极低（已衰落）'],
  ['江苏零界', '木结构（胶合木/CLT）', '文旅民宿/独栋', 'CLT曲面木屋', '无', '小型/未披露', '中（文旅民宿重合）'],
];

const colWidths = [1200, 1400, 1400, 1600, 1200, 1800, 1600];
const totalWidth = colWidths.reduce((a, b) => a + b, 0);

c.push(new Table({
  width: { size: totalWidth, type: WidthType.DXA },
  rows: [
    new TableRow({
      children: matrixHeader.map((h, i) => cell(h, { bold: true, width: colWidths[i], size: 18 })),
    }),
    ...matrixRows.map(row => new TableRow({
      children: row.map((val, i) => cell(val, { width: colWidths[i], size: 18, align: AlignmentType.LEFT, left: true })),
    })),
  ],
}));

c.push(...el(2));
c.push(p([{ text: '报告结论：', bold: true }, 'ezBuild最直接的竞争对手是中集模块化建筑（CIMC MBS），两者在海外模块化建筑交付领域存在较高重合度。但中集以重型钢结构集装箱模块为主，产品偏重、建厂成本高；ezBuild以"AI设计+轻资产+多材料+轻量化模块"切入，差异化明确。其次需关注积水房屋和大和房屋在海外市场（特别是美国和澳洲）的扩张动态。Boxabl虽估值最高（35亿美元），但产品单一（仅33.5㎡ ADU），与ezBuild的多场景定位不构成直接竞争。'], { indent: 0 }));

// ═══════════════ Build ═══════════════
const doc = new Document({
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1200, right: 1200, bottom: 1200, left: 1200 },
      },
    },
    children: c,
  }],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync('ezBuild竞品深度研究报告.docx', buf);
  console.log('Competitor report generated successfully!');
});
