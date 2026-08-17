const docx = require('docx');
const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, PageBreak,
} = docx;

const FONT = '宋体';
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
c.push(p('（第二部分：补充竞品团队、技术路径与客户案例分析）', { align: AlignmentType.CENTER, indent: 0 }));
c.push(...el(1));
c.push(p([{ text: '报告日期：', bold: true }, '2026年8月'], { align: AlignmentType.CENTER, indent: 0 }));
c.push(p([{ text: '研究范围：', bold: true }, '全球智能装配建筑行业补充竞品（第一部分已覆盖的11家不再重复）'], { align: AlignmentType.CENTER, indent: 0 }));
c.push(...el(2));

// ═══════════════ TOC ═══════════════
c.push(h2('目录'));
c.push(p('四、海外新增竞品', { indent: 0 }));
c.push(p('4.1  Skanska（瑞典·斯德哥尔摩） —— 全球建筑承包巨头的模块化先锋', { indent: { left: 480 } }));
c.push(p('4.2  Laing O\'Rourke（英国·伦敦） —— DfMA理念的全球开创者', { indent: { left: 480 } }));
c.push(p('4.3  ATCO Ltd.（加拿大·卡尔加里） —— 可迁移模块化建筑全球领导者', { indent: { left: 480 } }));
c.push(p('4.4  ICON（美国·奥斯汀） —— 3D打印建筑明星独角兽', { indent: { left: 480 } }));
c.push(p('4.5  Mighty Buildings（美国·奥克兰） —— 3D打印+复合材料先锋（已挂牌出售）', { indent: { left: 480 } }));
c.push(p('4.6  Gropyus（奥地利·维也纳） —— 科技跨界做建筑的欧洲标杆', { indent: { left: 480 } }));
c.push(p('4.7  Assembly OSM（美国·纽约） —— 模块化高层建筑探索者', { indent: { left: 480 } }));
c.push(...el(1));
c.push(p('五、国内新增竞品——初创与新兴企业', { indent: 0 }));
c.push(p('5.1  互集HUJI（中国·上海） —— 模块化文旅运营平台', { indent: { left: 480 } }));
c.push(p('5.2  大乐装（中国·深圳） —— 装配式产业互联网平台', { indent: { left: 480 } }));
c.push(p('5.3  盈创建筑科技 WinSun（中国·上海） —— 全球3D打印建筑先驱', { indent: { left: 480 } }));
c.push(p('5.4  山盾智护（中国·湖南） —— 大学生团队的模块化探索', { indent: { left: 480 } }));
c.push(...el(1));
c.push(p('六、国内装配式建筑龙头企业补充分析', { indent: 0 }));
c.push(p('6.1  远大住工（02163.HK） —— PC构件龙头（经营困难）', { indent: { left: 480 } }));
c.push(p('6.2  中建科工 —— 央企钢结构龙头', { indent: { left: 480 } }));
c.push(p('6.3  鸿路钢构（002541.SZ） —— 国内最大钢结构制造商', { indent: { left: 480 } }));
c.push(p('6.4  杭萧钢构（600477.SH） —— 钢结构住宅专家', { indent: { left: 480 } }));
c.push(p('6.5  精工钢构（600496.SH） —— 大型钢结构地标建造者', { indent: { left: 480 } }));
c.push(p('6.6  宝业集团（02355.HK） —— 住宅产业化百年品牌', { indent: { left: 480 } }));
c.push(p('6.7  筑友智造（00726.HK） —— EMPC全生态链（经营承压）', { indent: { left: 480 } }));
c.push(p('6.8  三一筑工 —— SPCS叠合剪力墙技术先行者', { indent: { left: 480 } }));
c.push(...el(1));
c.push(p('七、第二部分竞品综合对比矩阵', { indent: 0 }));

c.push(pb());

// ═══════════════ 四、海外新增竞品 ═══════════════
c.push(h2('四、海外新增竞品'));

// ──── 4.1 Skanska ────
c.push(h3('4.1 Skanska（瑞典·斯德哥尔摩）'));
c.push(p('全球最大建筑承包商之一，在模块化建筑领域深耕多年，尤其在北欧和北美的住宅、医院项目中大量采用预制模块技术。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['成立时间', '1887年（前身为Skånska Cementgjuteriet）'],
  ['总部', '瑞典斯德哥尔摩'],
  ['上市信息', 'OMX Stockholm: SKA B'],
  ['2024年营收', '约1,700亿瑞典克朗（~170亿美元）'],
  ['员工规模', '约28,000人'],
  ['业务覆盖', '北欧、美国、英国、中欧；建筑、基础设施、商业地产开发'],
  ['建筑板块利润率', '2024年营业利润率达4.1%，创历史新高'],
  ['订单储备', '约2,579亿瑞典克朗（历史高位）'],
]));

c.push(h4('（二）创始人与现任管理层'));
c.push(p([{ text: 'Anders Danielsson —— 总裁兼CEO', bold: true }], { indent: 0 }));
c.push(p('2017年9月起担任Skanska总裁兼CEO。此前在Skanska工作超过30年，历任多个高管职位，包括Skanska美国建筑业务总裁和Skanska瑞典建筑业务负责人。工程背景出身，以严格的项目选择纪律和风险管理著称，在其领导下Skanska建筑板块利润率持续提升至行业领先水平。'));

c.push(h4('（三）技术路径'));
c.push(p([{ text: '核心方向：预制模块化建筑（Prefabrication/Industrialization）', bold: true }], { indent: 0 }));
c.push(p('（1）卫浴模块化：在大型医院项目中（如New Karolinska Solna医院），卫浴间实现完全工厂预制，以密封箱体形式运至现场，吊装到位后"即插即用"。'));
c.push(p('（2）预制构件标准化：在北欧和英国市场大量使用预制混凝土构件、预制楼梯、预制外墙板等，提升施工效率并减少现场湿作业。'));
c.push(p('（3）数字化整合：利用BIM技术贯穿设计-制造-施工全流程，在预制构件的精确度和现场安装的协同性方面处于行业领先。'));
c.push(p('（4）可持续建筑认证：Skanska在绿色建筑和低碳施工方面具有行业标杆地位，其模块化项目普遍获得LEED金级以上认证。'));
c.push(p([{ text: '局限性：', bold: true }, 'Skanska本质上是综合建筑承包商，模块化仅是其众多施工方法之一，并非专注型模块化企业。不生产独立的模块化建筑产品，无面向C端的标准化产品。在亚太和中东市场布局薄弱。'], { indent: 0 }));

c.push(h4('（四）核心客户案例'));
c.push(p([{ text: '1. New Karolinska Solna医院（瑞典斯德哥尔摩） —— 15亿英镑', bold: true }], { indent: 0 }));
c.push(p('Skanska历史上最大的单体合同。该项目始于2010年，2017年竣工。建筑面积330,000㎡，包含8,000个房间、730张住院床位。大量采用预制卫浴模块，所有卫浴间在工厂完成后以密封箱体运至现场吊装，实现"即插即用"。项目获得LEED金级和瑞典环境建筑金级双认证。'));
c.push(p([{ text: '2. Blekinge医院（瑞典卡尔斯克鲁纳） —— 约3.3亿瑞典克朗', bold: true }], { indent: 0 }));
c.push(p('2018年开工的七层高层建筑，面积超12,000㎡，主要用于医疗和实验室功能。采用预制构件和模块化施工方法。'));
c.push(p([{ text: '3. Vestfold医院（挪威滕斯贝格）', bold: true }], { indent: 0 }));
c.push(p('扩建项目，由Skanska英国和Skanska挪威合资承建，结合英国的医院建设经验和挪威的本地知识。'));
c.push(p([{ text: '4. 哥德堡专科医院（瑞典） —— 约11亿瑞典克朗', bold: true }], { indent: 0 }));
c.push(p('Skanska承建的哥德堡新专科医院项目，合同金额约11亿瑞典克朗，采用大量预制构件和现代施工方法。'));

c.push(pb());

// ──── 4.2 Laing O'Rourke ────
c.push(h3('4.2 Laing O\'Rourke（英国·伦敦）'));
c.push(p('由Ray O\'Rourke创立的私营工程集团，以DfMA（面向制造和装配的设计）理念闻名，在英国运营欧洲最大最先进的预制构件工厂，被视为英国装配式建筑的领军者。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['创始人', 'Ray O\'Rourke（1978年创立）'],
  ['总部', '英国伦敦'],
  ['企业性质', '私营企业'],
  ['年营收', '约60亿英镑'],
  ['员工规模', '约12,000+人'],
  ['核心理念', 'DfMA（Design for Manufacture and Assembly）'],
  ['自有工厂', 'Explore Manufacturing / CEMC（诺丁汉郡Worksop）'],
  ['业务覆盖', '英国、澳大利亚、中东、加拿大'],
]));

c.push(h4('（二）创始团队与现任管理层'));
c.push(p([{ text: 'Ray O\'Rourke —— 创始人、执行主席', bold: true }], { indent: 0 }));
c.push(p('爱尔兰裔英国企业家，1978年创立Laing O\'Rourke。出身建筑工人家庭，从基层做起，逐步将公司发展为英国最大的私营建筑集团之一。他是DfMA理念在建筑行业的先驱推动者，主张将70%的建筑工作转移至工厂环境，被授予CBE勋章。'));
c.push(p([{ text: 'DfMA 70:60:30模型：', bold: true }, '将70%的施工转至工厂可控环境，实现60%的效率提升和30%的工期缩短。Ray O\'Rourke的战略目标是到2025年将项目90%的工作在工厂内完成。']));

c.push(h4('（三）技术路径'));
c.push(p([{ text: '核心技术：DfMA预制构件+Explore Manufacturing智能工厂', bold: true }], { indent: 0 }));
c.push(p('（1）CEMC（Centre of Excellence for Modern Construction）：位于诺丁汉郡Worksop的Explore Industrial Park，是欧洲最大、最先进的预制混凝土制造设施。年产超过16,000个预制构件，配备自动化高速转盘生产线，2026年进一步扩建增加3,200㎡生产面积。'));
c.push(p('（2）Megaplank技术：超大尺寸低碳混凝土楼板预制件，单块面积可达68,000㎡，在工厂自动化生产线上制造，运至现场整体吊装，大幅缩短现场施工周期。'));
c.push(p('（3）模块化医院和学校：在医院、学校和基础设施项目中拥有丰富的模块化交付经验，将MEP（机电管道）和建筑构件在工厂内预组装，减少现场复杂度。'));
c.push(p('（4）技术输出能力：推动全球装配式建筑标准提升，其DfMA方法论已成为行业标杆。'));
c.push(p([{ text: '局限性：', bold: true }, '2024年其欧洲DfMA项目曾出现5,750万英镑的亏损，说明DfMA在复杂项目中的执行风险仍然较高。业务以英国和澳大利亚为主，在亚太新兴市场布局有限。'], { indent: 0 }));

c.push(h4('（四）核心客户案例'));
c.push(p([{ text: '1. 伦敦50 Fenchurch Street —— 36层办公塔楼', bold: true }], { indent: 0 }));
c.push(p('Explore Manufacturing为该项目供应68,000㎡低碳混凝土Megaplank楼板，由Multiplex担任总承包商。Megaplank在CEMC自动化生产线上制造，是DfMA大规模商业应用的最新标杆。'));
c.push(p([{ text: '2. Calderdale皇家医院扩建（英国）', bold: true }], { indent: 0 }));
c.push(p('医疗设施模块化扩建项目，采用工厂预制MEP模块和建筑构件，在运营中的医院旁完成扩建，最大限度减少对医院运营的干扰。'));
c.push(p([{ text: '3. Sussex癌症中心（英国）', bold: true }], { indent: 0 }));
c.push(p('医疗建筑模块化施工项目，展示了DfMA在复杂医疗建筑中的应用能力。'));

c.push(pb());

// ──── 4.3 ATCO Ltd. ────
c.push(h3('4.3 ATCO Ltd.（加拿大·卡尔加里）'));
c.push(p('加拿大上市公司，专注于可迁移式模块化建筑，在澳大利亚、中东和北美能源、矿业项目中占据重要地位。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['成立时间', '1947年（前身Alberta Trailer Hire）'],
  ['总部', '加拿大阿尔伯塔省卡尔加里'],
  ['上市信息', 'TSX: ACO.X / ACO.Y'],
  ['年营收', '约50亿加元'],
  ['员工规模', '约6,000人'],
  ['工厂分布', '加拿大、美国、墨西哥、智利、澳大利亚'],
  ['核心产品', '可迁移工地营房、远程住宿设施、模块化数据中心'],
  ['控股家族', 'Southern家族（三代传承，1947年至今）'],
]));

c.push(h4('（二）创始人与现任管理层'));
c.push(p([{ text: 'S. Don Southern —— 创始人', bold: true }], { indent: 0 }));
c.push(p('1947年在卡尔加里创立Alberta Trailer Hire，与儿子Ron Southern各投资2,000加元，最初以15辆拖车为二战后阿尔伯塔省石油开发工人提供临时住房，后发展为ATCO集团。'));
c.push(p([{ text: 'Ron Southern —— 第二代掌门人', bold: true }], { indent: 0 }));
c.push(p('将ATCO从区域性拖车租赁公司发展为横跨北美、澳大利亚和中东的全球企业集团。同时创立了著名的Spruce Meadows马术中心。2016年去世，享年85岁。'));
c.push(p([{ text: 'Nancy Southern —— 现任董事长兼CEO（第三代）', bold: true }], { indent: 0 }));
c.push(p('Ron Southern之女，2000年1月起担任ATCO董事长兼CEO，任期已超25年。同时担任加拿大公用事业公司Canadian Utilities（ATCO子公司）执行主席。荣获阿尔伯塔卓越勋章。'));

c.push(h4('（三）技术路径'));
c.push(p([{ text: '核心技术：可迁移模块化建筑（Relocatable Modular Buildings）', bold: true }], { indent: 0 }));
c.push(p('（1）极端环境适应性：ATCO的模块化产品专为恶劣气候条件设计，可在极寒（北极矿区）、极热（中东沙漠）和偏远地区快速部署，包括完整的住宿、餐饮、医疗和娱乐设施。'));
c.push(p('（2）全球交钥匙能力：从设计、制造到现场安装和运营管理的全流程交付，在加拿大、美国、墨西哥、智利和澳大利亚均设有制造工厂。'));
c.push(p('（3）模块化数据中心：顺应全球算力需求增长，推出模块化数据中心解决方案，受益于AI和云计算驱动的全球数据中心建设浪潮。'));
c.push(p('（4）可重复使用：产品设计强调可拆卸、可迁移和可重复使用，符合循环经济理念。'));
c.push(p([{ text: '局限性：', bold: true }, '产品主要定位于工业/能源/矿业领域的临时住宿设施，在城市住宅和商业建筑市场几乎没有布局。与资源行业深度绑定，业务周期性强。'], { indent: 0 }));

c.push(h4('（四）核心客户案例'));
c.push(p([{ text: '1. Perpetua Resources Stibnite金矿项目 —— 1.79亿美元（2025年签约）', bold: true }], { indent: 0 }));
c.push(p('ATCO Structures最新签约的美国市场重大合同，为爱达荷州Stibnite Gold Project提供363个模块化单元的工人营地设施。2025年开始场地准备工作，2026年开始建设。这是ATCO加速拓展美国市场的标志性项目。'));
c.push(p([{ text: '2. 美国海军航空武器站 —— 1,300人营地（2020-2024年）', bold: true }], { indent: 0 }));
c.push(p('为美国海军航空武器站提供可容纳1,300人的模块化住宿设施，项目跨越2020-2024年。'));
c.push(p([{ text: '3. 加州Paradise野火紧急庇护所 —— 1,500人（2018年）', bold: true }], { indent: 0 }));
c.push(p('2018年加州Paradise野火后，ATCO紧急部署可容纳1,500人的模块化临时庇护设施，展示了其在灾害应急场景下的快速响应能力。'));
c.push(p([{ text: '4. 路易斯安那州LNG建设项目 —— 2,300人营地（2015-2016年）', bold: true }], { indent: 0 }));
c.push(p('为大型LNG建设项目提供可容纳2,300人的完整工人营地设施。'));

c.push(pb());

// ──── 4.4 ICON ────
c.push(h3('4.4 ICON（美国·奥斯汀）'));
c.push(p('3D打印建筑领域估值最高的公司，拥有NASA月球建造合同和全球最大3D打印住宅社区项目。2025年初裁员25%后完成C轮融资，从研发扩张转向商业化规模化。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['成立时间', '2017年'],
  ['总部', '美国德克萨斯州奥斯汀'],
  ['累计融资', '超5.07亿美元'],
  ['2022年估值', '约20亿美元'],
  ['员工规模', '约200人（2025年裁员后）'],
  ['核心产品', 'Vulcan 3D打印机、Phoenix多层打印机、Lavacrete打印材料'],
  ['已打印房屋', '约200栋'],
  ['最新动态', '2025年1月裁员114人（~25%），2月完成5,600万美元C轮（Norwest+Tiger Global）'],
]));

c.push(h4('（二）创始团队与现任管理层'));
c.push(p([{ text: 'Jason Ballard —— 联合创始人、CEO', bold: true }], { indent: 0 }));
c.push(p('毕业于德克萨斯A&M大学生物学学士，后于科罗拉多矿业学院获太空资源硕士学位。在创立ICON之前，与Evan Loomis共同创立了TreeHouse——一家可持续家居零售企业。Ballard被认为是将3D打印建筑从实验室推向商业化的关键推动者，其愿景是"为所有人提供有尊严的住房"。'));
c.push(p([{ text: 'Evan Loomis —— 联合创始人', bold: true }], { indent: 0 }));
c.push(p('德克萨斯A&M大学金融BBA学位，前华尔街银行家。与Ballard共同创立TreeHouse后联合创立ICON。目前同时在风险投资公司Overmatch任职。'));
c.push(p([{ text: 'Alex Le Roux —— 联合创始人、CTO', bold: true }], { indent: 0 }));
c.push(p('贝勒大学机械工程学士学位。此前创立了Vesta Printers（桌面3D打印机公司）。入选福布斯"30 Under 30"和MIT"35 Under 35"。负责ICON全部3D打印机和材料技术的研发。'));

c.push(h4('（三）技术路径'));
c.push(p([{ text: '核心技术：大幅面3D打印建筑（Large-Format 3D Printed Construction）', bold: true }], { indent: 0 }));
c.push(p('（1）Vulcan打印机（第一代）：龙门式结构（Cartesian Gantry），打印宽度46.5英尺（~14.2m），使用低碳水泥基材料Lavacrete。用于Wolf Ranch等地面住宅社区项目。'));
c.push(p('（2）Phoenix打印机（新一代）：70英尺机械臂（Robotic Arm），打印高度达27英尺（~8.2m），支持多层建筑打印。成本较Vulcan降低50%，是ICON走向多层建筑市场的关键设备。'));
c.push(p('（3）Lavacrete打印材料：ICON自研的专利水泥基打印材料，抗压强度6,000 psi，超过建筑规范要求350%以上。提供多种变体以适应不同气候和结构需求。'));
c.push(p('（4）NASA Olympus月球打印系统：使用激光烧结月球表土（Regolith）技术，为NASA的月球基地建造计划提供技术方案，合同金额5,720万美元，执行期至2028年。'));
c.push(p([{ text: '局限性：', bold: true }, '2025年初裁员25%暴露了商业化扩张的困难。3D打印住宅单价（含运输安装后约47-50万美元/栋）仍高于传统建造，尚未真正实现"让所有人买得起房"的初始愿景。打印速度和产能爬坡远慢于预期。'], { indent: 0 }));

c.push(h4('（四）核心客户案例'));
c.push(p([{ text: '1. Wolf Ranch 100栋3D打印住宅社区 —— 与Lennar/BIG合作', bold: true }], { indent: 0 }));
c.push(p('位于德州乔治城市，与美国最大房屋建筑商Lennar和丹麦建筑事务所BIG合作。截至2025年已打印95栋，其中80%以上已售出，售价从469,990美元起。这是全球最大的3D打印住宅社区项目。'));
c.push(p([{ text: '2. NASA Olympus月球建造合同 —— 5,720万美元', bold: true }], { indent: 0 }));
c.push(p('NASA资助的月球表面3D打印建造技术开发合同，金额5,720万美元，执行期至2028年。使用激光烧结月球表土技术，开发适用于月球极端环境的打印系统。'));
c.push(p([{ text: '3. Community First! Village —— 100+栋（公益项目）', bold: true }], { indent: 0 }));
c.push(p('为奥斯汀非营利组织Mobile Loaves & Fishes打印超过100栋住房，为无家可归者提供永久住所。这是ICON最早的规模化落地项目之一。'));
c.push(p([{ text: '4. Camp Swift军事营房 —— 3,800 sq ft', bold: true }], { indent: 0 }));
c.push(p('为美国军方在德克萨斯Camp Swift打印的军事营房项目，面积3,800平方英尺，展示了3D打印在军事设施领域的应用。'));

c.push(pb());

// ──── 4.5 Mighty Buildings ────
c.push(h3('4.5 Mighty Buildings（美国·奥克兰）'));
c.push(p('Y Combinator毕业的3D打印+复合材料住宅先锋，曾累计融资约1.5亿美元。2025年1月挂牌出售，成为行业警示案例。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['成立时间', '2017年'],
  ['总部', '美国加州奥克兰'],
  ['累计融资', '约1.5亿美元'],
  ['最新融资轮次', 'C轮'],
  ['核心投资方', 'Khosla Ventures、Y Combinator、Zeno Ventures'],
  ['当前状态', '2025年1月挂牌出售（Rock Creek Advisors代理）'],
]));

c.push(h4('（二）创始团队与管理层变动'));
c.push(p([{ text: 'Slava Solonitsyn —— 联合创始人、原CEO（2022年12月卸任）', bold: true }], { indent: 0 }));
c.push(p('俄罗斯下诺夫哥罗德理工硕士，英国帝国理工学院MBA。连续创业者，创立Mighty Buildings后主导了公司从零到C轮的发展。2022年12月卸任CEO。'));
c.push(p([{ text: 'Sam Ruben —— 联合创始人、首席可持续发展官（CSO）', bold: true }], { indent: 0 }));
c.push(p('Vassar College学士，Presidio Graduate School MBA/MPA双学位。负责公司的可持续发展战略和对外合作。'));
c.push(p([{ text: 'Alexey Dubov —— 联合创始人、首席创新官', bold: true }], { indent: 0 }));
c.push(p('连续创业者，在美国、德国、俄罗斯、新加坡等多国有创业经历。'));
c.push(p([{ text: 'Scott Gebicke —— 现任CEO（2022年12月接任）', bold: true }], { indent: 0 }));
c.push(p('曾任Jabil（全球最大电子代工企业之一）总裁，此前在麦肯锡工作，美国海军军官出身。被引入以推动公司从研发向商业化转型，但最终未能挽救公司命运。'));

c.push(h4('（三）技术路径'));
c.push(p([{ text: '核心技术：Light Stone Material（LSM）复合材料3D打印', bold: true }], { indent: 0 }));
c.push(p('（1）Light Stone Material：与ICON等公司使用水泥基材料不同，Mighty Buildings独创了一种热固性复合材料（Thermoset Composite），在打印过程中通过紫外线实时固化。这种材料比传统混凝土更轻更强，且可实现更快的固化速度。'));
c.push(p('（2）工厂化面板制造：不在现场打印，而是在工厂内将3D打印面板制造完成后运至现场组装，兼顾了3D打印的定制化优势和工厂化的品控优势。'));
c.push(p('（3）首个UL认证：全球首个获得UL（Underwriters Laboratories）认证的3D打印建筑系统。'));
c.push(p('（4）专利护城河：持有4项核心美国专利（US 10,817,155; US 10,969,765; US 11,267,913; US 11,230,615）。'));
c.push(p([{ text: '行业警示：', bold: true, color: 'CC0000' }, '尽管技术路线独特且获得顶级VC背书，Mighty Buildings在2025年1月被迫挂牌出售（Rock Creek Advisors代理），所有专利、设备和合作关系可整体或分拆出售。核心原因是商业化爬坡过慢，成本远高于传统建造，市场需求不足以支撑运营。'], { indent: 0 }));

c.push(h4('（四）核心客户案例'));
c.push(p([{ text: '1. Desert Hot Springs零净能耗社区 —— 20栋3D打印住宅', bold: true }], { indent: 0 }));
c.push(p('与Palari Group和EYRC建筑事务所合作，在加州Desert Hot Springs建设全球首个零净能耗（Zero Net Energy）3D打印住宅社区，每个地块1,866 sq ft。'));
c.push(p([{ text: '2. 加州能源委员会合作项目 —— 500万美元', bold: true }], { indent: 0 }));
c.push(p('获得加州能源委员会500万美元资助，与伯克利国家实验室和Habitat for Humanity合作开展可持续住房研究项目。'));

c.push(pb());

// ──── 4.6 Gropyus ────
c.push(h3('4.6 Gropyus（奥地利·维也纳）'));
c.push(p('"科技跨界做建筑"的欧洲标杆。由Delivery Hero联合创始人创立，累计融资4.72亿美元，以86%工厂自动化率和自研建筑操作系统（BOS）定义行业最高"装配+智能"结合度。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['成立时间', '2019年'],
  ['总部', '奥地利维也纳 / 德国柏林'],
  ['累计融资', '约4.72亿美元（超3亿欧元股权+4,000万欧元EIB贷款）'],
  ['工厂自动化率', '86%'],
  ['年满产能', '25万㎡（相当于约3,500套公寓）'],
  ['员工规模', '约393人'],
  ['核心投资方', 'Vonovia（德国最大住宅公司，Series B领投）、Semapa（葡萄牙）、Practical VC（美国）、EIB'],
]));

c.push(h4('（二）创始团队'));
c.push(p([{ text: 'Markus Fuhrmann —— 联合创始人、CEO', bold: true }], { indent: 0 }));
c.push(p('奥地利企业家，最知名身份是Delivery Hero（全球外卖巨头，2017年法兰克福上市）联合创始人。典型的"科技跨界做建筑"创业者，将互联网行业的产品思维、自动化和数据驱动理念引入传统建筑行业。在创立Gropyus时提出"像造汽车一样造房子"的理念。'));
c.push(p([{ text: 'Philipp Erler —— 联合创始人', bold: true }], { indent: 0 }));
c.push(p('前Zalando（欧洲最大时尚电商平台）首席信息官（CIO）。具有深厚的技术架构和数字化转型经验，负责Gropyus的建筑操作系统（BOS）和数字化平台建设。'));

c.push(h4('（三）技术路径'));
c.push(p([{ text: '核心技术：可持续木材混合结构+智能工厂+建筑操作系统', bold: true }], { indent: 0 }));
c.push(p('（1）Richen智能工厂（德国）：配备50台KUKA工业机器人，每16分钟生产一块墙体/天花板构件。工厂自动化率达86%，年满产能约25万㎡（相当于3,500套公寓）。是欧洲自动化程度最高的模块化建筑工厂之一。'));
c.push(p('（2）可持续木材混合结构：采用可持续木材和混合结构体系建造多层住宅（非独栋），集成能源管理和租户服务，实现"装配+智能"的最高结合度。'));
c.push(p('（3）Building Operating System（BOS）：自研建筑操作系统，贯穿建筑全生命周期——从设计、制造到运营和能源管理。是Gropyus区别于传统建筑公司的核心差异化，体现了"科技公司做建筑"的理念。'));
c.push(p('（4）EIB认可：获得欧洲投资银行（EIB）4,000万欧元贷款（InvestEU担保的权益型风险债务），证明其模式获得了欧洲最高级别金融机构的认可。'));
c.push(p([{ text: '局限性：', bold: true }, '目前仅在德国和奥地利市场运营，产品限于多层住宅，尚未进入亚太、中东等高增长市场。作为科技创业公司，建筑行业经验积累仍需时间。'], { indent: 0 }));

c.push(h4('（四）核心客户案例'));
c.push(p([{ text: '1. 柏林Charlottenburg-Wilmersdorf区 —— 27套公寓（与BUWOG/Vonovia合作）', bold: true }], { indent: 0 }));
c.push(p('为Vonovia子公司BUWOG建造27套公寓，2025年11月举行封顶仪式。这是Gropyus系统在柏林市场的首个落地项目，标志着其与德国最大住宅公司Vonovia的战略合作进入实质交付阶段。'));
c.push(p([{ text: '2. Immendingen住宅区（巴登-符腾堡州） —— 116套公寓', bold: true }], { indent: 0 }));
c.push(p('Gropyus的首个住宅社区项目，包含9栋建筑、116套公寓。第一阶段（4栋）原计划于2025年3月完工，整个项目计划2025年内全部交付。'));

c.push(pb());

// ──── 4.7 Assembly OSM ────
c.push(h3('4.7 Assembly OSM（美国·纽约）'));
c.push(p('专注用模块化预制组件装配高层建筑，目标是解决纽约等高密度城市的住宅供给问题。由SHoP Architects创始人创立，采用"后模块化"（Post-Modular）方法。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['成立时间', '约2020年'],
  ['总部', '美国纽约'],
  ['累计融资', '超6,000万美元'],
  ['最新融资', 'Series A 3,800万美元（Fifth Wall + Bessemer Venture Partners领投，2022年7月）'],
  ['工厂', '新泽西州Harrison制造基地'],
  ['定位', '模块化高层建筑——解决高密度城市住宅供给'],
]));

c.push(h4('（二）创始团队与现任管理层'));
c.push(p([{ text: 'Bill Sharples —— 联合创始人', bold: true }], { indent: 0 }));
c.push(p('宾夕法尼亚州立大学建筑工程学士，哥伦比亚大学建筑学硕士。SHoP Architects联合创始人（全球知名建筑事务所，代表作包括Barclays Center等）。'));
c.push(p([{ text: 'Chris Sharples —— 联合创始人', bold: true }], { indent: 0 }));
c.push(p('Bill Sharples的双胞胎兄弟，Dickinson College学士、哥伦比亚大学建筑学硕士。同为SHoP Architects联合创始人。'));
c.push(p([{ text: 'Andrew Staniforth —— CEO', bold: true }], { indent: 0 }));
c.push(p('沃顿商学院MBA，计算机科学背景。此前在Forest City负责461 Dean Street模块化高层项目（当时全球最高模块化建筑），后在Sidewalk Labs/Google工作。将航空航天和汽车行业的装配理念引入建筑领域。'));
c.push(p([{ text: '顾问团队：', bold: true }, '包括前波音CTO John Tracy和MAG Partners创始人MaryAnne Gilmartin（前Forest City Ratner CEO）。'], { indent: 0 }));

c.push(h4('（三）技术路径'));
c.push(p([{ text: '核心技术："后模块化"（Post-Modular）数字化装配', bold: true }], { indent: 0 }));
c.push(p('（1）数字孪生平台：不采用传统模块化的标准化箱体方案，而是通过数字孪生平台生成精确的制造指令，将建筑分解为可定制化的子组件（Subassemblies），实现比传统模块化更高的设计灵活性。'));
c.push(p('（2）钢框架体系：针对纽约市建筑法规（禁止木结构模块化），采用钢框架模块，满足高层建筑的结构和防火要求。'));
c.push(p('（3）跨界工程理念：团队吸收了波音、SpaceX、特斯拉等航空航天和汽车企业的装配经验，将精密制造和装配流程引入建筑领域。'));
c.push(p('（4）新泽西Harrison制造基地：用于预制钢框架模块和子组件的制造和预组装。'));
c.push(p([{ text: '局限性：', bold: true }, '高层模块化技术复杂度极高——结构安全、风荷载、连接节点等技术难度远超低层建筑。纽约等高密度城市对模块化建筑的审批流程和标准尚不完善。目前仅在纽约市场运营，规模极小。'], { indent: 0 }));

c.push(h4('（四）核心客户案例'));
c.push(p([{ text: '1. 147 Saint Felix Street, Brooklyn —— 3层试验项目（2024年2月完工）', bold: true }], { indent: 0 }));
c.push(p('Assembly OSM的首个完工项目，3层建筑，8个模块在一天内完成堆叠。2024年2月竣工，追求Passive House和WELL双认证。该项目是公司技术路线的重要验证节点。'));
c.push(p([{ text: '2. 247 East 117th Street, East Harlem —— 15层、51套公寓（约3,100万美元）', bold: true }], { indent: 0 }));
c.push(p('Assembly OSM的旗舰项目，位于曼哈顿东哈莱姆区，15层51套全电气化公寓。获得NYSERDA（纽约州能源研究与发展局）"Buildings of Excellence"奖项。目标2025年下半年完工。该项目若成功交付，将验证模块化技术在高密度城市高层建筑中的可行性。'));

c.push(pb());

// ═══════════════ 五、国内新增竞品 ═══════════════
c.push(h2('五、国内新增竞品——初创与新兴企业'));

// ──── 5.1 互集HUJI ────
c.push(h3('5.1 互集HUJI（中国·上海）'));
c.push(p('从"集装箱之家"网站起步，转型为模块化文旅运营平台。全程自筹资金，无VC融资，年产值2亿+，是国内少数实现"制造+运营"双壁垒的模块化企业。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['公司全称', '上海互集建筑科技有限公司'],
  ['成立时间', '2015年创立（互筑科技）→ 2018年转向实体制造'],
  ['总部', '中国上海松江'],
  ['企业资质', '国家高新技术企业'],
  ['年产值', '2亿+（元）'],
  ['产品品类', '60个品类（太空舱为主）'],
  ['工厂分布', '3家（滁州/岳西/青海）'],
  ['融资情况', '无机构融资（完全自筹资金/业务造血驱动）'],
  ['出海验证', '产品已出口日本、东南亚、墨西哥'],
]));

c.push(h4('（二）创始人与团队'));
c.push(p([{ text: '高盼 —— 创始人', bold: true }], { indent: 0 }));
c.push(p('90后，建筑设计专业毕业。2011年大二首次创业做建筑资讯网站"集装箱之家"（注册用户400万），后入职中建设计集团。2015年裸辞创业联合创始人方建，成立互筑科技。'));
c.push(p([{ text: '四阶段演进：', bold: true }], { indent: 0 }));
c.push(p('2015-2018年："集装箱之家"信息平台，日询单500+条；2018-2020年：成立"互集"品牌，安徽建厂，合作万科/绿城/龙湖；2020-2022年：文旅转型，云南景迈山首项目（50座太空舱，45天建成，入住率70%）；2022年至今：整村运营模式，上海青浦崧泽村"崧泽映巷"，孵化12个自营品牌。'));

c.push(h4('（三）技术路径'));
c.push(p([{ text: '核心产品：太空舱模块化建筑', bold: true }], { indent: 0 }));
c.push(p('（1）太空舱产品：标准尺寸3.3m×3.3m×12m+，碳钢框架（抗震抗风）+高端铝板（保温隔热）+中空定玻（隔音），集成智能家居，建材100%可回收，无地基安装。'));
c.push(p('（2）60品类产品矩阵：从单体太空舱到整村聚落方案，覆盖文旅民宿、度假酒店、移动商业、临时展厅等多场景。'));
c.push(p('（3）商业模式转型——从"制造商"到"运营平台"：核心逻辑是从"卖产品"切换为"空间+内容+运营"的平台模式。崧泽村孵化的12个自营品牌一旦跑通将复制到更多乡村项目。'));
c.push(p([{ text: '局限性：', bold: true }, '整村运营重资产重运营，文旅行业受宏观经济影响大。自筹资金模式虽然健康但限制了扩张速度。产品主要面向国内文旅市场，海外拓展处于起步阶段。'], { indent: 0 }));

c.push(h4('（四）核心客户案例'));
c.push(p([{ text: '1. 云南景迈山古茶林太空舱度假村 —— 50座，45天建成', bold: true }], { indent: 0 }));
c.push(p('位于UNESCO世界遗产景迈山古茶林区域，部署50座太空舱度假单元，仅用45天建成，入住率约70%。是互集从制造商向文旅运营转型的标志性项目。'));
c.push(p([{ text: '2. 上海青浦崧泽村"崧泽映巷" —— 整村运营', bold: true }], { indent: 0 }));
c.push(p('互集整村运营模式的旗舰项目，在上海青浦崧泽村部署模块化建筑并运营整个村落的文旅业态，孵化12个自营品牌。'));
c.push(p([{ text: '3. 松江余山"天马星空村" —— 2025年6月签约', bold: true }], { indent: 0 }));
c.push(p('互集最新签约的乡村文旅项目，延续整村运营模式。'));
c.push(p([{ text: '4. 新藏线海拔4500m"新藏益栈" —— 高海拔部署', bold: true }], { indent: 0 }));
c.push(p('在新藏线海拔4500米的极端环境中部署太空舱住宿设施，验证了产品的极端环境适应性。'));

c.push(pb());

// ──── 5.2 大乐装 ────
c.push(h3('5.2 大乐装（中国·深圳）'));
c.push(p('装配式建筑行业的"产业互联网平台"，以"成品电商"交易模式和AIGC设计引擎切入，获腾讯等顶级VC投资。但面临地产下行周期的严峻考验。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['成立时间', '2020年7月'],
  ['总部', '中国深圳'],
  ['累计融资', '约3-4亿元'],
  ['核心投资方', 'BAI资本、腾讯、神骥资本（58同城基金）、钟鼎资本等'],
  ['截至2022年', '签订近4亿元构件交付合同，服务60+地产项目'],
  ['商业模式', '"云设计→云工厂→云交付"全流程数字化'],
]));

c.push(h4('（二）创始团队'));
c.push(p([{ text: '刘慧 —— 创始人兼CEO', bold: true }], { indent: 0 }));
c.push(p('14岁少年班入学，宾夕法尼亚大学建筑学硕士，国家一级注册建筑师。曾在远大住工和筑友智造担任高管——是目前国内装配式建筑创业者中行业经验最深厚的创始人之一。其"装配式建筑资深产业专家+互联网科技人才"的团队构成体现了跨界组合的特点。'));

c.push(h4('（三）技术路径'));
c.push(p([{ text: '核心方向："成品电商"交易模式——装配式建筑的Figma', bold: true }], { indent: 0 }));
c.push(p('（1）设计端：自研云原生设计引擎+智能BOM算量，AIGC自动生成方案。设计周期从1个月缩至半天，成本降10-20%。'));
c.push(p('（2）供应链端：APS智能调度分单，跨项目合并标准构件，将线性供应链重构为网状协同。'));
c.push(p('（3）交付端：标准构件72小时出货（传统4-6个月），小程序实时追踪，一物一码。'));
c.push(p('（4）大乐装产业PaaS系统：设计→报价→生产→交付全流程数字化平台。'));
c.push(p([{ text: '核心挑战：', bold: true, color: 'CC0000' }, '下游客户主要是地产开发商和总承包方，2022年以来中国房地产市场的深度调整对其业务增长造成直接影响。"云设计+云工厂"平台模式在行业逻辑上成立，但能否在地产下行周期中跑出规模，是外界关注的焦点。值得注意的是，2022年后缺乏公开的业绩更新信息。'], { indent: 0 }));

c.push(pb());

// ──── 5.3 盈创 WinSun ────
c.push(h3('5.3 盈创建筑科技 WinSun（中国·上海）'));
c.push(p('全球3D打印建筑商业化最早的先驱，多项"世界首创"记录的保持者。但商业化进展远落后于ICON等后来者，目前通过美国子公司Gaudi Tech重新进入市场。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['成立时间', '约2003年'],
  ['总部', '中国上海青浦'],
  ['创始人', '马义和'],
  ['核心定位', '全球最早实现建筑3D打印商业化落地'],
  ['融资情况', '早年自有资金为主，曾三次面临破产；B轮引入战略投资人（金额未披露）'],
  ['资本关联', '曾与亚夏股份（A股）有资本关联；2013-2014年因研发投入过大联合亏损'],
  ['海外布局', '与美国财团成立"Winsun Global"（迪拜总部）；美国子公司Gaudi Tech（加州Irvine）'],
]));

c.push(h4('（二）创始人'));
c.push(p([{ text: '马义和 —— 创始人', bold: true }], { indent: 0 }));
c.push(p('湖北襄阳人，初中学历。从建材业务跨界进入3D打印建筑领域，用12年以上时间自学研发3D打印建造技术，期间靠销售GRG（玻璃纤维增强石膏）产品维持公司运营，三次濒临破产。极具魅力和争议的创业者——在技术示范和全球知名度上走在前面，但在商业化落地方面显著落后于资本充裕的后来者。'));

c.push(h4('（三）技术路径'));
c.push(p([{ text: '核心技术：大型连续式3D打印机+特种"油墨"', bold: true }], { indent: 0 }));
c.push(p('（1）自研大型连续式3D打印机：可进行大尺度建筑构件打印。'));
c.push(p('（2）独特打印"油墨"：使用石材矿尾矿、建筑拆解尾料等再生资源作为原材料，变废为宝。'));
c.push(p('（3）美国子公司Gaudi Tech（加州Irvine）：推出改进型移动式现场打印机，试图重新进入北美市场。'));
c.push(p([{ text: '与ICON对比：', bold: true }, '盈创在技术示范和全球知名度上走在前面，但在资本（ICON累计融资$5亿+ vs 盈创自筹为主）和商业化维度上存在明显差距。ICON有Lennar等头部建商背书和NASA合同，商业化路径更清晰。'], { indent: 0 }));

c.push(h4('（四）标志性项目'));
c.push(p([{ text: '1. 上海青浦3D打印10套房屋 —— 2014年（24小时内完成）', bold: true }], { indent: 0 }));
c.push(p('2014年在上海青浦用3D打印技术在24小时内打印10套房屋，轰动全球媒体，被认为是全球3D打印建筑商业化的开端。'));
c.push(p([{ text: '2. 全球最高6层3D打印住宅楼 —— 2015年', bold: true }], { indent: 0 }));
c.push(p('打印全球最高的6层住宅楼和1,100㎡精装别墅，当时创下3D打印建筑的高度纪录。'));
c.push(p([{ text: '3. 迪拜全球首批3D打印办公楼', bold: true }], { indent: 0 }));
c.push(p('为迪拜打印全球首批3D打印办公建筑，是盈创海外布局的标志性项目。'));
c.push(p([{ text: '4. 苏州工业园区3D打印建筑群', bold: true }], { indent: 0 }));
c.push(p('在苏州工业园区打印多栋建筑，展示3D打印技术在园区建设中的应用。'));
c.push(p([{ text: '现状评价：', bold: true, color: 'CC0000' }, '官方网站新闻更新主要集中在2016-2020年，近几年公开信息显著减少。3D打印建筑在中国面临"缺乏行业标准"的根本性障碍——建筑规范、验收标准、安全认证空白限制了大规模推广。与美国计划的20国建厂布局似未大规模落地。'], { indent: 0 }));

c.push(pb());

// ──── 5.4 山盾智护 ────
c.push(h3('5.4 山盾智护（中国·湖南）'));
c.push(p('00后大学生团队的模块化智能建造探索。中南大学孵化，100+专利，但目前无实际交付项目，处于极早期孵化阶段。', { indent: 0 }));
c.push(...el(1));

c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['公司全称', '湖南湘江新区山盾智护科技有限公司'],
  ['成立时间', '约2023年'],
  ['入驻', '中南大学科技园'],
  ['已获授权专利', '100+项'],
  ['团队平均年龄', '21岁'],
  ['主攻方向', '500㎡以下轻量型模块化建筑'],
  ['融资情况', '无'],
  ['实际交付项目', '无'],
]));

c.push(h4('（二）创始人与团队'));
c.push(p([{ text: '方浩然 —— 创始人', bold: true }], { indent: 0 }));
c.push(p('00后，中南大学大二学生。经历两次创业方向"pivot"：月面建造→装配式山体防护网→模块化智能建造（当前方向）。自我纠错能力强，执行力突出。团队从中南大学土木专业扩展到商学院、建筑与艺术学院、邓迪国际学院。背靠中南大学装配式结构和智能建造领域教授资源。'));
c.push(p([{ text: '差异化定位：', bold: true }, '有意识避开三一筑工等本地巨头，专攻"500㎡以下轻量型模块化建筑"——悬崖民宿、灾后临时住房、景区服务中心。'], { indent: 0 }));

c.push(h4('（三）技术路径'));
c.push(p('（1）钢结构解决方案体系：36种节点、18种组合柱、6种独立基础、4种结构体系，覆盖核心部件→构件→节点→结构体系全链条。'));
c.push(p('（2）智能预警平台：针对不同等级灾害实现实时至48小时提前预警，保留"山体防护"技术基因。'));
c.push(p('（3）机械臂协助组装：无人磨平、喷漆，可增材打印。宣称废料回收90%+，碳排放降30-50%，工期缩短30-50%。'));
c.push(p([{ text: '核心挑战：', bold: true, color: 'CC0000' }, '建筑行业有极高的资质和信任门槛。全员大学生团队即便专利再多，获取第一个真实商业订单面临"无案例→无信任→无订单→无案例"的冷启动困局。目前尚无实际交付项目。在创业大赛或天使轮融资场景中有说服力，但距离真正的商业化运营仍有很大距离。'], { indent: 0 }));

c.push(pb());

// ═══════════════ 六、龙头企业补充分析 ═══════════════
c.push(h2('六、国内装配式建筑龙头企业补充分析'));

// ──── 6.1 远大住工 ────
c.push(h3('6.1 远大住工（02163.HK）'));
c.push(p('国内PC构件龙头，曾经的装配式建筑标杆企业。但FY2024年陷入严重财务困境，审计师更换、独董全部辞职，经营前景堪忧。', { indent: 0 }));
c.push(...el(1));
c.push(h4('（一）公司概况'));
c.push(infoTable([
  ['上市信息', '02163.HK（港股）'],
  ['核心定位', 'PC构件龙头'],
  ['市场份额', '13-16.5%（国内PC构件市场）'],
  ['工厂规模', '近100家'],
  ['专利', '700+项'],
  ['核心技术', 'BIM正向设计PC Maker软件'],
  ['当前状态', '经营困难：FY2024年报延迟披露、审计师更换、全部独立董事辞职'],
]));
c.push(h4('（二）创始人'));
c.push(p([{ text: '张剑 —— 创始人', bold: true }], { indent: 0 }));
c.push(p('哈尔滨工业大学毕业，1996年进入建筑工业化领域。将远大住工发展为国内PC构件市场份额最高的企业，拥有近100家工厂和自主研发的PC Maker BIM正向设计软件。'));
c.push(h4('（三）财务警示'));
c.push(p([{ text: '经营困境：', bold: true, color: 'CC0000' }, 'FY2024上半年营收仅8.44亿元，净亏损高达29.6亿元。年报延迟披露，审计师被更换，全部独立董事辞职——这些信号高度预警公司治理和财务健康问题。对ezBuild的启示：PC构件行业高度依赖房地产开发商，地产下行周期对上游PC工厂的打击是毁灭性的。'], { indent: 0 }));

c.push(pb());

// ──── 6.2 中建科工 ────
c.push(h3('6.2 中建科工'));
c.push(p('中国建筑旗下钢结构龙头平台，品牌排名行业第一，年产能120万吨，拥有1,080项专利。', { indent: 0 }));
c.push(infoTable([
  ['母公司', '中国建筑集团（市值~2000亿）'],
  ['定位', '央企钢结构龙头'],
  ['年产能', '120万吨'],
  ['专利', '1,080项'],
  ['核心品牌', 'GS-Building（累计400+项目、4000万+㎡）、ME-House（模块化住宅）'],
]));
c.push(h4('（二）管理层'));
c.push(p([{ text: '王宏 —— 董事长', bold: true }], { indent: 0 }));
c.push(p('清华大学硕士，三次获得国家科技奖。中建科工品牌排名全国钢结构行业第一。'));
c.push(h4('（三）技术与案例'));
c.push(p('GS-Building体系累计完成400+项目、4,000万+㎡建筑面积。代表项目包括深圳模块化学校（快速建造解决学位紧缺）、重庆美的工业园等。ME-House模块化住宅系统面向保障性住房和临时建筑场景。'));

c.push(pb());

// ──── 6.3 鸿路钢构 ────
c.push(h3('6.3 鸿路钢构（002541.SZ）'));
c.push(p('国内最大钢结构制造商，年产能突破520万吨，10大生产基地。FY2024营收215亿元，但受钢价下行和行业调整影响利润下滑。', { indent: 0 }));
c.push(infoTable([
  ['上市信息', '002541.SZ'],
  ['实际控制人', '尚小波'],
  ['FY2024营收', '215亿元（同比-8.6%）'],
  ['FY2024净利润', '7.72亿元（同比-34.5%）'],
  ['年产能', '520万+吨（10大生产基地）'],
  ['定位', '国内最大钢结构制造商（纯制造，不做施工）'],
]));
c.push(p('鸿路钢构是国内钢结构行业的纯制造龙头，通过规模效应和智能制造降低单位成本。FY2024利润下滑主要受钢材价格下行和智能制造升级投入影响。对ezBuild而言，鸿路钢构是潜在的上游钢结构供应商而非直接竞争对手。'));

c.push(pb());

// ──── 6.4 杭萧钢构 ────
c.push(h3('6.4 杭萧钢构（600477.SH）'));
c.push(p('钢结构住宅领域的技术型企业，自主研发的"钢管混凝土束组合结构住宅体系"被鉴定为国际领先。海外拓展势头强劲。', { indent: 0 }));
c.push(infoTable([
  ['上市信息', '600477.SH'],
  ['创始人', '单银木（1960年生，40年从业经验）'],
  ['成立时间', '1994年'],
  ['FY2024营收', '79.5亿元（同比-26.6%）'],
  ['FY2024净利润', '1.69亿元（同比-42.5%）'],
  ['核心技术', '钢管混凝土束组合结构住宅体系（鉴定为国际领先）'],
  ['海外覆盖', '80+国家，FY2025海外收入同比+88%'],
]));
c.push(p('杭萧钢构的核心竞争力在于其独有的钢管混凝土束组合结构住宅体系技术专利，该技术被鉴定为国际领先水平。虽然FY2024受国内地产下行影响业绩下滑，但海外业务爆发式增长（FY2025海外收入同比增长88%），显示出强劲的出海能力。'));

c.push(pb());

// ──── 6.5 精工钢构 ────
c.push(h3('6.5 精工钢构（600496.SH）'));
c.push(p('以杭州奥体中心、北京大兴机场等地标建筑闻名的大型钢结构企业。FY2024海外订单爆发增长203%，签下沙特达曼体育场等重大项目。', { indent: 0 }));
c.push(infoTable([
  ['上市信息', '600496.SH'],
  ['董事长', '方朝阳（中欧国际工商学院EMBA）'],
  ['FY2024营收', '185亿元'],
  ['FY2024净利润', '5.12亿元（同比-6.7%）'],
  ['FY2024新签合同', '219.7亿元（同比+8.4%）'],
  ['海外订单', '约30亿元（同比+203%）'],
  ['代表项目', '杭州奥体中心、北京大兴机场、沙特达曼体育场（2027亚洲杯）'],
]));
c.push(p('精工钢构FY2024最亮眼的数据是海外订单爆发——从约10亿增至30亿元，同比增长203%。其中沙特达曼体育场（2027年AFC亚洲杯赛场）是最具标志性的海外大单。公司从"中国地标钢结构专家"向"全球化钢结构EPC"转型的趋势明显。'));

c.push(pb());

// ──── 6.6 宝业集团 ────
c.push(h3('6.6 宝业集团（02355.HK）'));
c.push(p('1974年创立的住宅产业化企业，拥有三种体系的低碳工业化住宅和34个制造基地。港股上市。', { indent: 0 }));
c.push(infoTable([
  ['上市信息', '02355.HK'],
  ['创始人', '庞宝根（1957年生，首位在港交所上市的内地私营建筑企业家）'],
  ['成立时间', '1974年'],
  ['FY2024营收', '约223亿元（较高峰期下滑）'],
  ['FY2025营收', '约199亿元（继续压缩）'],
  ['制造基地', '全国34个'],
  ['核心技术', '三种体系低碳工业化住宅（百年住宅理念）'],
]));
c.push(p('宝业集团是国内少数具有"百年住宅"理念和多体系技术储备的装配式建筑企业，三种自主研发的低碳工业化住宅体系覆盖不同结构和场景需求。但FY2024-2025营收持续下滑，反映了国内地产下行对装配式建筑全产业链的系统性冲击。'));

c.push(pb());

// ──── 6.7 筑友智造 ────
c.push(h3('6.7 筑友智造（00726.HK）'));
c.push(p('EMPC全生态链模式先行者，拥有1,800+专利和22省45城布局。但受房地产下行重创，FY2024上半年收入同比下降54.7%，亏损1.71亿港元。', { indent: 0 }));
c.push(infoTable([
  ['上市信息', '00726.HK'],
  ['前身', '源自中民投，2019年被建业集团/胡葆森以16.5亿元收购'],
  ['专利', '1,800+项'],
  ['业务布局', '22省45城'],
  ['FY2024H1营收', '2.35亿港元（同比-54.7%）'],
  ['FY2024H1净亏损', '1.71亿港元'],
  ['核心模式', 'EMPC全生态链（装配+智能一体化）'],
]));
c.push(p([{ text: '经营警示：', bold: true, color: 'CC0000' }, '筑友智造的困境是装配式建筑行业在地产下行周期中的缩影。尽管拥有1,800+专利和"装配+智能一体化"的先发优势，但过度依赖地产开发商的订单结构使其在行业下行中几乎无法自救。对ezBuild的启示：轻资产+出海是避免类似命运的关键。'], { indent: 0 }));

c.push(pb());

// ──── 6.8 三一筑工 ────
c.push(h3('6.8 三一筑工'));
c.push(p('三一集团旗下智能建造设备和装配式建筑板块，核心创新为SPCS叠合剪力墙技术——实现全预制全装配，较传统灌浆套筒方案节省100+元/㎡。', { indent: 0 }));
c.push(infoTable([
  ['母公司', '三一集团/三一重工（600031.SH，FY2024营收778亿元）'],
  ['核心技术', 'SPCS（预制组合叠合结构）'],
  ['技术优势', '全预制全装配，较灌浆套筒方案节省100+元/㎡'],
  ['代表项目', '保利三一云都（陕西）、三一科学城（长沙）'],
]));
c.push(p('三一筑工的SPCS技术实现了剪力墙结构的全预制全装配——所有结构构件均在工厂预制，现场仅需组装，不需要传统的灌浆套筒连接工艺。这种方式每平方米可节省100元以上的施工成本，同时大幅缩短工期。背靠三一重工（年营收778亿元）的品牌、资金和制造能力，三一筑工在设备和技术层面具有显著优势。'));

c.push(pb());

// ═══════════════ 七、对比矩阵 ═══════════════
c.push(h2('七、第二部分竞品综合对比矩阵'));

const matrixHeader = new TableRow({
  children: ['竞品', '材料/技术体系', '产品场景', '核心壁垒', '海外能力', '规模/营收', '与ezBuild重合度'].map(
    t => cell(t, { bold: true, size: 18, width: 1286 })
  ),
});

const matrixRows = [
  ['Skanska', '预制混凝土模块', '医院/公建/住宅', '130年品牌+全球交付', '北欧/北美/英国', '~170亿美元', '低（综合承包商）'],
  ['Laing O\'Rourke', 'DfMA预制混凝土', '医院/学校/基建', 'CEMC智能工厂', '英/澳/中东', '~60亿英镑', '低（B端EPC）'],
  ['ATCO', '可迁移模块化', '工地营房/应急', '极端环境+三代传承', '加/美/澳/中东', '~50亿加元', '中（应急场景重合）'],
  ['ICON', '3D打印水泥', '独栋住宅/军事', '打印机+材料专利', '仅美国', '融资$5亿+/营收极小', '低（技术路线不同）'],
  ['Mighty Buildings', '3D打印复合材料', '高端ADU', 'LSM材料专利', '无', '已挂牌出售', '极低（已退出）'],
  ['Gropyus', '木材混合+智能', '多层公寓', 'BOS+86%自动化', '仅德奥', '融资$4.72亿', '中（智能+装配理念相似）'],
  ['Assembly OSM', '钢框架模块', '高层公寓', '数字孪生+SHoP', '无（仅纽约）', '融资$6000万', '低（纯高层市场）'],
  ['互集HUJI', '碳钢+铝板太空舱', '文旅民宿/乡村', '制造+运营双壁垒', '日/东南亚/墨', '年产值2亿+', '中高（文旅场景重合）'],
  ['大乐装', 'PC构件平台', '房地产项目', 'AIGC设计+云工厂', '无', '签约4亿元（2022）', '中（平台模式参考）'],
  ['盈创WinSun', '3D打印再生材料', '独栋/办公/展示', '先发品牌+再生材料', '迪拜/美国', '不详/极小', '低（技术路线不同）'],
  ['山盾智护', '轻钢结构', '悬崖民宿/应急', '100+专利/大学资源', '无', '无营收（孵化期）', '低（无实际交付）'],
  ['远大住工', 'PC预制混凝土', '住宅（已萎缩）', '近100家工厂', '无', '8.44亿/巨亏29.6亿', '极低（经营困难）'],
  ['中建科工', '钢结构GS/ME', '保障房/公建', '央企+1080专利', '有限', '央企/未单独披露', '中低（央企定位）'],
  ['鸿路钢构', '纯钢结构制造', '商业/工业厂房', '520万吨产能', '无', '215亿元', '极低（纯上游制造）'],
  ['杭萧钢构', '钢管混凝土束', '钢结构住宅', '国际领先技术', '80+国家', '79.5亿元', '低（钢结构住宅）'],
  ['精工钢构', '大型钢结构', '地标/场馆/机场', '大跨度技术', '海外30亿订单', '185亿元', '极低（大型地标）'],
  ['宝业集团', '三体系工业化', '住宅产业化', '百年品牌+34基地', '有限', '199-223亿元', '低（传统PC住宅）'],
  ['筑友智造', 'EMPC全链', '装配式住宅', '1800+专利', '无', '2.35亿港元/亏损', '中（EMPC理念相似）'],
  ['三一筑工', 'SPCS叠合结构', '装配式住宅', '三一品牌+SPCS', '有限', '未单独披露', '中低（技术方案参考）'],
].map(row => new TableRow({
  children: row.map(t => cell(t, { size: 16, width: 1286, align: AlignmentType.LEFT, left: true })),
}));

c.push(new Table({
  width: { size: 9000, type: WidthType.DXA },
  rows: [matrixHeader, ...matrixRows],
}));

c.push(...el(2));

c.push(h4('报告结论'));
c.push(p('第二部分补充分析的19家竞品进一步完善了ezBuild的竞争格局全景。几个关键发现：'));
c.push(p('（1）3D打印赛道警示：Mighty Buildings挂牌出售、ICON裁员25%、盈创商业化停滞——3D打印建筑距离真正商业化仍有很长的路要走，标准缺失和成本过高是根本性障碍。'));
c.push(p('（2）国内装配式龙头困境：远大住工巨亏、筑友智造收入腰斩、美好置业退市——过度依赖国内房地产开发商的企业在地产下行周期中遭受毁灭性打击。ezBuild的"轻资产+出海"模式可有效规避这一风险。'));
c.push(p('（3）海外市场机遇：精工钢构海外订单+203%、杭萧钢构海外收入+88%——中国装配式建筑企业的出海浪潮正在加速，验证了ezBuild"国内生产+海外组装"的战略方向。'));
c.push(p('（4）最值得关注的对标对象：互集HUJI（文旅场景+自筹资金造血模式）、Gropyus（科技跨界+BOS系统+高度自动化）、大乐装（产业互联网平台思维），这三家与ezBuild在理念或场景上存在较高参考价值。'));

// ═══════════════ Build Document ═══════════════
const doc = new Document({
  sections: [{
    properties: {
      page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } },
    },
    children: c,
  }],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync('ezBuild竞品深度研究报告_第二部分.docx', buf);
  console.log('Part 2 competitor report generated successfully!');
});
