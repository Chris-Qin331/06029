const docx = require('docx');
const fs = require('fs');

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, HeadingLevel,
  PageBreak, TableOfContents
} = docx;

const FONT = '微软雅黑';
const FONT_EN = 'Calibri';

function title(text) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 400 },
    children: [
      new TextRun({ text, bold: true, size: 36, font: FONT }),
    ],
  });
}

function sectionHeader(text) {
  return new Paragraph({
    spacing: { before: 360, after: 200 },
    children: [
      new TextRun({ text, bold: true, size: 24, font: FONT }),
    ],
  });
}

function bodyPara(text, opts = {}) {
  const { indent = 480, bold = false, highlight = false, spacing = {} } = opts;
  const runs = [];
  if (typeof text === 'string') {
    runs.push(new TextRun({
      text,
      size: 21,
      font: FONT,
      bold,
      highlight: highlight ? 'yellow' : undefined,
    }));
  } else {
    text.forEach(seg => {
      runs.push(new TextRun({
        text: seg.text,
        size: 21,
        font: FONT,
        bold: seg.bold || false,
        highlight: seg.highlight ? 'yellow' : undefined,
      }));
    });
  }
  return new Paragraph({
    indent: { left: indent },
    spacing: { after: 120, ...spacing },
    children: runs,
  });
}

function bullet(text, opts = {}) {
  const { indent = 480 } = opts;
  if (typeof text === 'string') {
    return bodyPara('- ' + text, { indent });
  }
  const segs = [{ text: '- ' }, ...text];
  return bodyPara(segs, { indent });
}

function emptyLine() {
  return new Paragraph({ spacing: { after: 100 }, children: [] });
}

function tableCell(text, opts = {}) {
  const { bold = false, shading, width, alignment = AlignmentType.LEFT } = opts;
  const cellOpts = {
    children: [
      new Paragraph({
        alignment,
        children: [
          new TextRun({ text: String(text), size: 18, font: FONT, bold }),
        ],
      }),
    ],
    verticalAlign: 'center',
  };
  if (width) cellOpts.width = { size: width, type: WidthType.DXA };
  if (shading) cellOpts.shading = { type: ShadingType.CLEAR, color: 'auto', fill: shading };
  return new TableCell(cellOpts);
}

const headerShading = '1F4E79';
const altShading = 'F2F2F2';

function headerCell(text, width) {
  return new TableCell({
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({ text, size: 18, font: FONT, bold: true, color: 'FFFFFF' }),
        ],
      }),
    ],
    shading: { type: ShadingType.CLEAR, color: 'auto', fill: headerShading },
    verticalAlign: 'center',
    width: width ? { size: width, type: WidthType.DXA } : undefined,
  });
}

// ===== BUILD DOCUMENT =====

const sections = [];
const children = [];

// Title
children.push(title('ezBuild（依智云筑）投资建议书'));
children.push(emptyLine());

// Summary block
children.push(bodyPara([
  { text: '目标投资公司：', bold: true },
  { text: '依智云筑建筑科技（上海）有限公司' },
]));
children.push(bodyPara([
  { text: '一句话总结：', bold: true },
  { text: '以AI设计平台+标准化模块产品体系+中国柔性供应链，面向全球市场提供低成本、高品质的智能模块化装配式建筑解决方案。' },
]));
children.push(bodyPara([
  { text: '主营地点：', bold: true },
  { text: '中国上海（注册地址：上海市嘉定区新成路500号J）' },
]));

// ===== 项目概述 =====
children.push(sectionHeader('项目概述：'));
children.push(bullet([
  { text: '产品：', bold: true },
  { text: 'ezBuild定位为AI驱动的智能模块化装配式建筑综合方案提供商。公司通过自研AI空间大模型将传统3个月设计流程压缩至1周，搭配NOAH（模块化公寓/应急建筑）、河姆渡（模块化独栋住宅）、潘多拉（模块化商业/共享空间）三大标准化模块产品线，覆盖公寓、住宅、民宿、文旅、商业、应急建筑等多元场景。公司依托国内成熟供应链，以"国内生产+海外组装"的轻资产模式实现全球化交付。创始团队已在中国及日本交付超2000所装配式建筑，目前处于独立公司化运营后的产品验证与首批商业订单交付阶段。' },
]));
children.push(bullet([
  { text: '融资：', bold: true },
  { text: '公司正在进行种子轮融资，', highlight: false },
  { text: '计划融资1500万元人民币，出让10%股权，投前估值1.5亿元人民币。', highlight: true },
]));

// ===== 初心 =====
children.push(sectionHeader('初心：'));
children.push(bullet('全球建筑行业长期面临"非标定制、效率低下、成本高企"三大痛点。传统建筑高度依赖现场人工、项目制交付，产品化程度极低。创始人山中龙行希望将建筑从"工程品"转变为"工业品"，借助AI设计和模块化产品体系，让高品质建筑像消费品一样可标准化、可复制、可全球交付，实现"全球生活品质平权"。'));

// ===== 创始团队 =====
children.push(sectionHeader('创始团队：'));
children.push(bullet('团队目前约16人（含已发Offer待入职），核心成员中8人具有清华大学背景，专业覆盖产品、AI、建筑设计、结构工程、供应链、项目管理、市场销售及投融资等关键领域。'));

children.push(bullet([
  { text: '山中龙行（YAMANAKA TATSUYUKI）：', bold: true },
  { text: '创始人兼CEO，1997年生，日本国籍，清华大学美术学院工业设计硕士（导师：蒋红斌教授）。曾在AR领域头部公司VITURE担任日本市场经理，在日本众筹平台MAKUAKE达成1.86亿日元众筹额；先后任华硕日本市场专家、追觅科技市场专家。深耕AR行业及科技消费品市场，具备复合市场、产品、供应链全链路经验。2024年获全国通用人工智能创新应用大赛优秀奖。负责市场及融资。' },
]));

children.push(bullet([
  { text: '秦天汭：', bold: true },
  { text: '联合创始人兼VP，1997年生，清华大学车辆学院本科（导师：赵福全教授）。曾联合创立萘思尔教育品牌，创业后半年估值超1000万元。多年互联网及AI产品经验，先后在携程、文远知行、蔚来汽车、岚图汽车等任AI产品经理。负责产品及项目管理。' },
]));

children.push(bullet([
  { text: '高木竜男：', bold: true },
  { text: '联合创始人兼建筑设计师，清华大学建筑学院硕士（导师：朱宁）。多年小体量独立建筑、装配式建筑、住宅改造设计经验，具有丰富的装配式建筑设备优化、物理性能测算、建筑材料选型经验。目前专攻乡村建筑研究，具有丰富的"乡村振兴"建筑相关工程建设经验。' },
]));

children.push(bullet([
  { text: '李烨君（Offer已发，8月入职）：', bold: true },
  { text: '融资总监，清华大学建设管理专业本科，哥伦比亚大学硕士。多年地产行业投融资经验，历任华发、阳光城、旭辉等地产商投融资负责人。负责融资及中国区销售。' },
]));

children.push(bullet([
  { text: '彭进华（Offer已发，8月入职）：', bold: true },
  { text: '全栈工程师，ACM全国金奖获得者，小马智行及文远知行数据平台核心负责人。负责AI及云平台开发。' },
]));

children.push(bullet([
  { text: '其他核心成员：', bold: true },
  { text: '刘宇川（项目经理，碧桂园多年装配式建筑项目管理经验）、张世杰（采购经理，中铁多年采购管理经验）、孟琪（法务BP，清华本科，精通知识产权及劳动法）、周振浩（澳洲销售经理，深耕澳洲市场）、蔡英东（北美销售经理，清华本科/港大硕）等。' },
]));

// ===== 股权架构 =====
children.push(sectionHeader('股权架构：'));
children.push(bullet([
  { text: '工商登记股权结构：', bold: true },
  { text: '山中龙行（YAMANAKA TATSUYUKI）持股70%，秦天汭持股30%。注册资本100万元人民币。' },
]));
children.push(bullet([
  { text: '实际权益口径：', bold: true },
  { text: '山中龙行持有60%（其名下10%系代员工持股平台持有），员工持股平台10%，秦天汭30%。除上述代持安排外，不存在其他股东、其他代持或股权变动情况。' },
]));
children.push(bullet('公司设立至今，注册资本及股权结构未发生变更。公司章程规定设董事1名，不设经理，不设监事，法定代表人由股东会选举的董事担任。营业期限为不约定期限。'));

// ===== 业务特点与市场展望 =====
children.push(sectionHeader('业务特点与市场展望：'));

children.push(bullet([
  { text: '产品形态：', bold: true },
  { text: '不是单一的建筑承包商，而是"AI设计+标准模块+柔性供应链+全球交付"的一体化平台。核心能力是将非标建筑需求转化为标准化、可报价、可生产、可交付的建筑产品，形成"需求—设计—报价—生产—交付"的闭环。' },
]));

children.push(bullet([
  { text: '产品体系：', bold: true },
  { text: '分为两大类——（1）传统装配式建筑产品（木结构、发泡混凝土、轻钢结构、混合材料），面向B端客户按需定制设计和生产；（2）模块化建筑产品（NOAH公寓/应急、河姆渡独栋住宅、潘多拉轻量化商业），以标准化模块为核心实现规模化复制。另配有丰富的选装系列（支撑结构选装、墙体及内外墙面选装、附加功能及服务选装），兼容木、轻钢、钢木混合等多种主体结构和陶粒发泡混凝土、铝镁合金板、石晶板等多种新型建材。' },
]));

children.push(bullet([
  { text: '客户对象：', bold: true },
  { text: '初创阶段以海外B端为主（地产商、建筑事务所、工程企业），以合伙人模式拓展海外市场机会（美国、澳洲、巴西等）；同步推进国内文旅、乡村振兴等场景。成长阶段利用AI设计平台推广海外小业主市场（美国ADU等），逐步实现B+C双轮驱动。' },
]));

children.push(bullet([
  { text: '商业模式：', bold: true },
  { text: '（1）建筑产品销售（主营）；（2）智能硬件前装收入（光储一体系统、全屋智能系统、端侧AI空间大模型）；（3）文旅项目代运营增值服务（品牌引流、客源托管、运维管理）；（4）建筑健康度监测服务（24小时结构/设备/环境数据采集分析）。形成"一次建造、长期复购"的全生命周期收益模式，区别于行业一次性交付。' },
]));

children.push(bullet([
  { text: '市场空间：', bold: true },
  { text: '全球智能建筑科技市场2023年达1.85万亿元（CAGR约7%，2027年预计达2.5万亿元）；中国装配式建筑2025年目标占新建比例30%，2030年目标≥40%。海外新兴市场（东南亚2028年预计250亿美元、东欧200亿美元、非洲150亿美元）需求爆发。模块化建筑相比混凝土现浇工期缩短60%+、成本降低40%+、净利润率从5-7%提升至20-25%，具备断崖式效率优势。' },
]));

children.push(bullet([
  { text: '竞争位置：', bold: true },
  { text: '国内对标企业——中集模块化（央企背景，主打重型钢结构集装箱模块，海外大客户资源充足但产品单一）、中建海龙/中建科工（国企龙头，聚焦国内保障房/大型公建，海外布局薄弱）、美好置业（仅做传统PC预制构件，无整屋模块化）、江苏零界（专精木结构独栋民宿，赛道局限于单一木构体系）。海外对标企业——积水住宅/大和房屋（日系百年住宅龙头，本土全自动工厂但建厂与人工成本极高）、Z Modular（北美钢结构模块化头部，仅深耕北美区域）、Blu Homes（轻量化折叠独栋，仅北美C端）、Boxabl（2026年7月通过SPAC上市，估值35亿美元，仅做小型ADU/C端市场）。ezBuild以"全场景多材料产品矩阵+AI设计双闭环+轻资产出海模式"形成差异化。潘多拉（轻量化可重组商业模块）为行业空白蓝海赛道，无直接竞品。' },
]));

children.push(bullet([
  { text: '项目进展：', bold: true },
  { text: '2026年6月签署首份商业订单——海南东方木结构自建屋项目（合同总标的额100万元人民币），已正式签署合作协议，计划7月内完成首笔款项支付，8月落地完整方案设计，10月实现现场搭建交付。海外项目方面，美国加州木结构模块化公寓（约3300m²/约2000万元）、巴西保障性住房（单套40m²，首批500套/约5000万元）、新西兰南岛度假民宿（约160m²/约200万元）、马来西亚吉隆坡经济性住宅社区（138m²/套，首批200套）、巴西伊瓜苏度假社区（53栋度假屋+25套船坞）等项目均处于方案沟通及报价阶段，尚未签署正式合同文件。预计7-9月陆续完成合同签约，全部项目将于2027年6月前依次完成搭建交付。' },
]));

children.push(bullet([
  { text: '与追觅科技的关系：', bold: true },
  { text: '前期项目曾作为追觅科技内部BU进行孵化和业务验证，但双方不存在股权投资关系。现阶段ezBuild已完全脱离追觅体系，由独立公司主体独立运营。追觅不持有ezBuild任何股权，也不享有任何投资权益，后续经营决策、团队、融资、订单及业务发展均由独立主体自主推进，与追觅不存在任何隶属或控制关系。' },
]));

// ===== 财务数据 =====
children.push(sectionHeader('财务数据：'));
children.push(bullet('公司2026年6月正式注册成立，尚处极早期阶段，暂无经审计的历史财务数据。以下为公司提供的财务预测（未经审计）。'));
children.push(emptyLine());
children.push(bodyPara('公司中长期财务预测（2026-2031年）：', { bold: true }));

// Financial projection table
const finRows = [
  ['年份', '阶段', '营收', '毛利润', '净利润', '毛利率', '净利率', '核心驱动'],
  ['2026', '验证期', '2,000万', '500万', '200万', '25%', '10%', '样板房交付、首条柔性产线落地'],
  ['2027', '验证期', '6,000万', '1,800万', '1,000万', '30%', '16%', '模块标准化体系形成'],
  ['2028', '扩张期', '2亿', '6,000万', '3,500万', '30%', '17.5%', '增设产线2条、成本下降10%'],
  ['2029', '扩张期', '8亿', '2.6亿', '1.8亿', '32.5%', '22.5%', '全国复制，AI设计平台上线'],
  ['2030', '扩张期', '25亿', '8.5亿', '6.5亿', '34%', '26%', '模块集采体系成熟，品牌化运营'],
  ['2031', '平台期', '50亿', '17亿', '13亿', '34%', '26%', '平台交易系统与设计SaaS并行'],
];

const finTable = new Table({
  width: { size: 9500, type: WidthType.DXA },
  rows: finRows.map((row, idx) => {
    return new TableRow({
      children: row.map((cell, ci) => {
        if (idx === 0) return headerCell(cell);
        const shade = idx % 2 === 0 ? altShading : undefined;
        return tableCell(cell, { shading: shade, alignment: ci >= 3 ? AlignmentType.CENTER : AlignmentType.LEFT });
      }),
    });
  }),
});
children.push(finTable);
children.push(emptyLine());

// Unit economics
children.push(bodyPara('单栋成本模型（河姆渡产品线，收入按60万元/栋测算）：', { bold: true }));

const unitRows = [
  ['项目', '200栋项目\n（元/栋）', '1,000栋项目\n（元/栋）', '10,000栋项目\n（元/栋）', '说明'],
  ['模块制造材料', '215,000', '190,000', '168,000', '龙骨、结构板、防潮板等'],
  ['模块工厂人工与装配', '47,000', '34,000', '24,000', '焊接、装配、质检等'],
  ['内装材料（简装级）', '73,000', '68,000', '56,000', '乳胶漆、地砖、卫浴、门窗'],
  ['运输与吊装', '18,000', '14,000', '7,500', '平板车运输+25吨吊机吊装'],
  ['现场拼装与调试', '15,000', '10,000', '6,000', '模块拼接、管线连接、调试'],
  ['设计与项目管理', '11,000', '6,000', '2,800', 'BIM绘制、项目管理人员'],
  ['总成本', '408,000', '343,500', '277,300', '—'],
  ['毛利润', '192,000', '256,500', '322,700', '收入-总成本'],
  ['净利润（税前）', '142,000', '224,500', '300,300', '毛利-管理费，反映实际收益'],
  ['净利率（税前）', '23.67%', '37.42%', '50.05%', '规模效应显著'],
];

const unitTable = new Table({
  width: { size: 9500, type: WidthType.DXA },
  rows: unitRows.map((row, idx) => {
    return new TableRow({
      children: row.map((cell, ci) => {
        if (idx === 0) return headerCell(cell);
        const isSummary = idx >= 7;
        const shade = isSummary ? 'E8F0FE' : (idx % 2 === 0 ? altShading : undefined);
        return tableCell(cell, { bold: isSummary, shading: shade, alignment: ci >= 1 && ci <= 3 ? AlignmentType.CENTER : AlignmentType.LEFT });
      }),
    });
  }),
});
children.push(unitTable);
children.push(emptyLine());
children.push(bodyPara('注：以上财务预测均为公司管理层提供，未经独立第三方审计或验证。公司目前已签约收入仅100万元（海南东方项目），中长期预测存在较大不确定性。', { indent: 480 }));

// ===== 投资亮点 =====
children.push(sectionHeader('投资亮点：'));

children.push(bullet('创始团队清华背景深厚，16人团队中8人清华背景。CEO山中龙行兼具日本国际化视野与科技消费品市场全链路经验，联合创始人秦天汭拥有携程/文远知行/蔚来/岚图等多行业跨界AI产品能力，联合创始人高木竜男具备清华建筑学院专业背景及丰富的装配式建筑设计经验。团队结构覆盖建筑全链条关键岗位。'));

children.push(bullet('孵化自拥有20年经验的传统装配式建筑公司，创始团队已在中国及日本交付超2000所装配式建筑（涵盖度假村、森林公园、公寓、酒店等多种业态），项目落地能力和建筑行业资源已得到充分验证，非从零起步的纯技术团队。'));

children.push(bullet('三大模块化产品线（NOAH/河姆渡/潘多拉）覆盖公寓、住宅、文旅、商业、应急多场景，兼容木、轻钢、发泡混凝土等多材料体系。相比竞品锁定单一结构、单一业态的短板（中集仅钢结构、Boxabl仅小型ADU、江苏零界仅木构），场景覆盖面和市场适配性显著更广。其中潘多拉（轻量化可拆装可重组商业模块）为行业空白蓝海，国内外均无直接竞品。'));

children.push(bullet('AI设计平台将传统3个月设计周期压缩至1周，同时具备B端专业工程设计与C端自助设计双向闭环能力。同行AI仅用于内部绘图生产，ezBuild自研AI空间大模型可对外输出SaaS设计服务，构建"AI前置获客、精准分流、高效转化"的数字化获客壁垒，形成行业独有的低成本线上获客链路。'));

children.push(bullet('轻资产出海模式，成本优势显著。区别于中集、积水等自建重工厂模式，ezBuild依托国内成熟供应链整合，固定资产投入极低，同等产品造价远低于海外本土厂商。模块化建筑造价约2,000-2,500元/m²，vs 混凝土现浇6,000元/m²，vs 传统装配式3,500元/m²。工期从传统6个月压缩至2个月，净利润率从5-7%提升至20-25%。同时吸取Katerra重资产破产教训，规划通过与核心供应商交叉持股、共建产线补齐产能。'));

children.push(bullet('建造+智能硬件+长效运营的一体化商业模式，区别行业普遍的一次性交付。未来叠加前装光储一体、端侧空间AI、建筑健康监测硬件，配套文旅项目代运营增值服务，形成"一次建造、长期复购"的持续性收入，拉长项目生命周期收益。整套低碳智能配套契合全球零碳政策，海外项目适配性强。'));

children.push(bullet('海外项目储备丰富，已同步推进美国、新西兰、巴西、马来西亚等多国多类型项目，标的额合计超7000万元人民币。全球模块化建筑市场正处于需求爆发初期，特别是东南亚、非洲、拉美等新兴市场对低成本快速建造的刚性需求巨大，ezBuild的AI设计+柔性产线+标准模块体系与该需求高度匹配。'));

// ===== 投资风险 =====
children.push(sectionHeader('投资风险：'));

children.push(bullet('公司成立时间极短（2026年6月正式注册），产品仍处于研发验证阶段。NOAH、河姆渡、潘多拉三大模块化产品均未完成1:1实物试制验证（河姆渡计划9月完成1:1试制，NOAH计划12月完成），标准化产品的结构安全性、装配可靠性、综合落地性能尚需实际项目检验。'));

children.push(bullet([
  { text: '海外核心项目（美国约2,000万元、巴西约5,000万元）均处于方案沟通及报价阶段，' },
  { text: '尚未签署正式合同文件', bold: true },
  { text: '，订单转化存在不确定性。目前已签约且确认收入的订单仅海南东方项目（100万元），收入规模极小，尚不足以验证商业模式的可持续性。' },
]));

children.push(bullet('无自有规模化智造工厂，全部生产依托外部供应商，大批量集中订单的交付周期、统一质检标准难以完全自主把控。与核心供应商无排他绑定协议，若上游厂商终止合作、同步供给竞品，将直接影响产品交付与差异化优势。外协配套技术无专属使用权保护，存在核心配套方案外泄风险。'));

children.push(bullet('创始人山中龙行为日本国籍，需关注跨境经营、外汇管理、税务合规等方面的潜在法律风险。此外需确认创始人证件类型（护照TZ1188159）及在华长期居留、工作许可等资质的合规性。'));

children.push(bullet('海外各国建筑规范、防灾标准、环保认证体系差异巨大且政策存在变动风险。本地化认证、施工资质和合作网络仍需逐国建立，合规门槛高、周期长，出海扩张进度可能不及预期。'));

children.push(bullet('前期曾作为追觅科技内部BU孵化，虽公司声明已完全脱离追觅体系且追觅不持有任何股权，但需通过法律尽调确认：（1）孵化期间产生的知识产权归属是否清晰；（2）核心团队成员与追觅之间是否存在竞业限制或保密义务约束；（3）是否存在追觅享有的优先投资权、回购权或其他潜在权利主张。'));

children.push(bullet([
  { text: '公司财务预测极为激进', bold: true },
  { text: '（2026年营收2,000万→2031年50亿，净利率从10%提升至26%；长期目标2034年营收200亿，IPO估值300-400亿），缺乏充分的历史数据和已签约订单支撑。单栋成本模型显示10,000栋项目净利率可达50.05%，但规模效应实现前提是标准化程度高、订单量充足、供应链稳定，均需逐步验证。' },
]));

children.push(bullet('核心团队中多名关键岗位（融资总监、全栈工程师、中东/北美/澳洲销售经理等）尚处于Offer待入职或兼职状态，8-11月才陆续全职化。团队稳定性和全职化进度存在不确定性，需关注关键人员流失风险。'));

children.push(bullet('增值服务（光储一体化、建筑健康监测、文旅代运营）均为迭代规划业务，暂无成熟落地标杆案例，增值业务盈利模式有待市场检验。'));

// ===== 融资历史与计划 =====
children.push(sectionHeader('融资历史与计划：'));

children.push(bullet('公司此前未进行过外部股权融资。目前正在进行种子轮融资，计划融资1,500万元人民币，出让10%股权，投前估值1.5亿元。'));

children.push(bullet([
  { text: '种子轮资金用途规划：', bold: true },
  { text: '团队运营成本（30%/450万元，覆盖约30人团队）、产品研发及模块验证（23%/350万元，含10个核心模块验证）、销售体系搭建及市场拓展（20%/300万元，重点澳洲/日本/美国/中东等）、供应链及交付体系建设（10%/150万元）、设计AI软件开发（10%/150万元）、法务知识产权及行政支出（7%/100万元）。' },
]));

children.push(bullet([
  { text: '后续融资规划：', bold: true },
  { text: '公司计划2026年内完成种子轮+天使轮共计4,000万元融资；2027年完成Pre-A轮（8,000万）及A轮（1亿），估值目标10-12亿元；远期规划2034年实现IPO。' },
]));

children.push(emptyLine());

// ===== 顾问团队与合作公司 =====
children.push(sectionHeader('附：顾问团队与合作公司'));

children.push(bullet([
  { text: '顾问团队：', bold: true },
  { text: '蒋红斌（清华大学美术学院副教授、中国工业设计协会理事、国家知识产权创意产业试点园区专家委员会委员）；何忠华（瀚华金控监事会主席，曾担任清华大学清创+顾问）。' },
]));

children.push(bullet([
  { text: '合作公司：', bold: true },
  { text: '大连风云建筑设计有限公司（2023年中国建筑业协会优秀工程勘察设计企业）、辽宁金柏胜木结构科技有限公司（生产区建筑面积20,000m²，年生产能力可达20万m²以上，与日本积水住宅等知名企业有多方面紧密合作）、大连龙阳木业有限公司（木结构住宅产业化、木材进出口业务）、大连东南工业有限公司、海王九岛月儿湾度假村（四星级酒店标准，51间客房，装配式木结构建筑）。' },
]));

children.push(emptyLine());
children.push(bodyPara([
  { text: '报告日期：', bold: true },
  { text: '2026年7月' },
], { indent: 0 }));

// ===== Create document =====
const doc = new Document({
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
      },
    },
    children,
  }],
  styles: {
    default: {
      document: {
        run: { font: FONT, size: 21 },
      },
    },
  },
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('/home/user/06029/ezBuild投资建议书.docx', buffer);
  console.log('Document created successfully!');
}).catch(err => {
  console.error('Error:', err);
});
