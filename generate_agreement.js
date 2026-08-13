const docx = require('docx');
const fs = require('fs');

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, LevelFormat,
  convertInchesToTwip,
} = docx;

const FONT = '宋体';
const SZ = 24; // 12pt

function tr(text, opts = {}) {
  return new TextRun({ text, font: { name: FONT, eastAsia: FONT }, size: opts.size || SZ, ...opts });
}

function para(parts, opts = {}) {
  const runs = (Array.isArray(parts) ? parts : [parts]).map(p => {
    if (p instanceof TextRun) return p;
    if (typeof p === 'string') return tr(p);
    return tr(p.text || '', p);
  });
  return new Paragraph({
    alignment: opts.align || AlignmentType.JUSTIFIED,
    spacing: { line: opts.line || 360, after: opts.after !== undefined ? opts.after : 100 },
    indent: opts.indent !== undefined ? opts.indent : { firstLine: 480 },
    numbering: opts.numbering,
    children: runs,
  });
}

function emptyLine(n = 1) {
  const lines = [];
  for (let i = 0; i < n; i++) {
    lines.push(new Paragraph({ spacing: { line: 360, after: 0 }, children: [] }));
  }
  return lines;
}

function heading(text, size = 32) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 200, line: 400 },
    children: [tr(text, { bold: true, size })],
  });
}

function sectionHeading(text) {
  return new Paragraph({
    alignment: AlignmentType.LEFT,
    spacing: { before: 240, after: 120, line: 360 },
    children: [tr(text, { bold: true })],
  });
}

const thinBorder = { style: BorderStyle.SINGLE, size: 1, color: '000000' };
const borders = { top: thinBorder, bottom: thinBorder, left: thinBorder, right: thinBorder };

function cell(text, opts = {}) {
  return new TableCell({
    width: opts.width ? { size: opts.width, type: WidthType.DXA } : undefined,
    borders,
    children: [new Paragraph({
      alignment: opts.align || AlignmentType.CENTER,
      spacing: { line: 300, before: 60, after: 60 },
      children: [tr(text, { bold: opts.bold, size: opts.size || SZ })],
    })],
  });
}

const c = []; // children

// ─────────────── Title ───────────────
c.push(heading('投资协议'));
c.push(...emptyLine(1));

// ─────────────── Preamble ───────────────
c.push(para('本投资协议（以下简称"本协议"）由以下各方于2026年    月    日签订：', { indent: 0 }));
c.push(...emptyLine(1));

// Parties
c.push(para([
  { text: '甲方：上海新进创业投资中心（有限合伙）', bold: true },
  '，一家依据中国法律有效设立并合法存续的有限合伙企业，统一社会信用代码：913101155947420867，注册地址为：上海市崇明区新海镇星村公路700号（上海新海经济开发区）（简称"国颂新进"、"甲方"或"投资方"）。',
], { indent: 0 }));
c.push(...emptyLine(1));

c.push(para([{ text: '乙方：创始人', bold: true }], { indent: 0 }));
c.push(...emptyLine(1));

c.push(para([
  { text: '乙方1：YAMANAKA TATSUYUKI（山中龙行）', bold: true },
  '，一名日本籍自然人，护照号码：TZ1188159，住所：              。',
], { indent: 0 }));
c.push(...emptyLine(1));

c.push(para([
  { text: '乙方2：秦天汭，', bold: true },
  '一名中国籍自然人，身份证号码：              ，住所：              。',
], { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('（以下乙方1和乙方2单独或合称"创始人"或"现有股东"）。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para([{ text: '目标公司', bold: true }], { indent: 0 }));
c.push(...emptyLine(1));
c.push(para([
  { text: '依智云筑建筑科技（上海）有限公司，', bold: true },
  '一家依据中国法律有效设立并合法存续的有限责任公司，统一社会信用代码：              ，注册地址为：上海市嘉定区新成路500号J（集中登记地）（简称"公司"或"目标公司"）。',
], { indent: 0 }));
c.push(...emptyLine(1));

// 鉴于
c.push(para([{ text: '鉴于：', bold: true }], { indent: 0 }));
c.push(para('目标公司系一家从事AI驱动的智能模块化装配式建筑研发与销售（"主营业务"）的有限责任公司。目标公司现有注册资本为人民币100万元，由YAMANAKA TATSUYUKI持有70%股权、秦天汭持有30%股权。投资方拟以增资方式投资目标公司，各方友好达成如下合意：', { indent: 0 }));

// ─────────────── 第一条 ───────────────
c.push(sectionHeading('第一条：本次增资'));

c.push(para('1.  投资方向目标公司支付的增资款为300万元人民币（简称"增资款"），投资款计入注册资本和资本公积的具体金额以工商变更登记时各方一致约定为准（简称"本次增资"）。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('2.  本次增资后，创始人YAMANAKA TATSUYUKI（乙方1）所持9%公司股权（占增资后总股本）继续作为公司员工持股激励计划代持。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('3.  增资款只能作为公司主营业务的研发、产品交付和日常运营；未经投资方的书面同意，不得挪作其他用途。', { indent: 0 }));

// ─────────────── 第二条 ───────────────
c.push(sectionHeading('第二条：投资款拨付和工商变更'));

c.push(para([
  '1.  第一期投资款：投资方于本协议签署后十（10）个工作日内向创始人指定账户支付人民币',
  { text: '【    】', bold: true, color: 'FF0000' },
  '万元的第一期投资款（含注册资本金实缴部分），创始人代公司收取该款项，账户信息如下：',
], { indent: 0 }));
c.push(para('账户名称：', { indent: { left: 480 } }));
c.push(para('收款行名称：', { indent: { left: 480 } }));
c.push(para('银行账号：', { indent: { left: 480 } }));
c.push(...emptyLine(1));

c.push(para('2.  第一期投资款支付完毕后，创始人应促使目标公司按照如下股权比例完成工商变更登记：', { indent: 0 }));
c.push(...emptyLine(1));

// Post-investment table
c.push(new Table({
  width: { size: 8500, type: WidthType.DXA },
  rows: [
    new TableRow({
      children: [
        cell('股东名称', { bold: true, width: 4500 }),
        cell('注册资本', { bold: true, width: 2000 }),
        cell('持股比例', { bold: true, width: 2000 }),
      ],
    }),
    new TableRow({
      children: [
        cell('YAMANAKA TATSUYUKI（含代持期权池9%）', { width: 4500 }),
        cell('/', { width: 2000 }),
        cell('63%', { width: 2000 }),
      ],
    }),
    new TableRow({
      children: [
        cell('秦天汭', { width: 4500 }),
        cell('/', { width: 2000 }),
        cell('27%', { width: 2000 }),
      ],
    }),
    new TableRow({
      children: [
        cell('国颂新进', { width: 4500 }),
        cell('/', { width: 2000 }),
        cell('10%', { width: 2000 }),
      ],
    }),
    new TableRow({
      children: [
        cell('合计', { bold: true, width: 4500 }),
        cell('/', { bold: true, width: 2000 }),
        cell('100%', { bold: true, width: 2000 }),
      ],
    }),
  ],
}));
c.push(...emptyLine(1));

c.push(para([
  '3.  第二期投资款：目标公司就本次增资完成工商变更登记并取得相关凭证，则提供书面材料后的十（10）个工作日内，投资方将支付第二期投资款人民币',
  { text: '【    】', bold: true, color: 'FF0000' },
  '万元；',
], { indent: 0 }));
c.push(...emptyLine(1));

c.push(para([
  '4.  第三期投资款：如果目标公司完成如下目标，则向投资方提交书面证明材料后的十（10）个工作日内，投资方将支付第三期投资款人民币',
  { text: '【    】', bold: true, color: 'FF0000' },
  '万元：',
], { indent: 0 }));
c.push(...emptyLine(1));
c.push(para([{ text: '【待各方协商确定具体里程碑条件】', bold: true, color: 'FF0000' }], { indent: { left: 480 } }));
c.push(...emptyLine(2));

// ─────────────── 第三条 ───────────────
c.push(sectionHeading('第三条：投资方权利'));

c.push(para('1.  知情权。创始人须向投资方通知公司重大变化并沟通公司工作，包括每季度及每会计年度结束后14天内按季度提供财务报表、银行流水，每月度结束的5个工作日内，提供如附件所示公司业务情况。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('2.  优先认购权。公司及创始人进行新的股权融资，投资方有权按其所持公司股权比例，以同等条件及价格优先认购新增股权。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('3.  优先购买和共同出售权。未经投资方事先书面同意，创始人不得转让、质押或以任何其他形式处置其公司股权。经投资方同意，如创始人中任一方（"出让股东"）有意向第三方转让其所持公司股权，则投资方有权以同等条件及对价优先受让拟转让公司股权。如投资方不行使优先购买权，则有权与出让股东一起按其各自在公司中的持股比例，以同等条件及对价向第三方转让其持有的公司股权。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('4.  清算优先权。若公司拟依法解散清算，或公司50%以上的股权归属于创始人和投资方以外的第三人的，则公司应确保清算款或收购款首先支付投资方的投资成本或等额资产，剩余部分根据各方股权比例进行资产分配。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('5.  平等权。投资方应享有为公司现有股东或未来新增股东所设置的特别股东权利。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('6.  持续合作。如公司因非投资方原因解散，创始人应在其下一个创业项目中，赠予投资方5%的股权，投资方在同等条件下对该项目或新公司有优先投资的权利。', { indent: 0 }));

// ─────────────── 第四条 ───────────────
c.push(sectionHeading('第四条：公司治理'));

c.push(para('1.  公司现设董事一（1）名，由创始人YAMANAKA TATSUYUKI担任。投资方有权委派一（1）名观察员列席公司经营管理会议，了解公司经营情况。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('2.  未经投资方书面同意，创始人、公司及其子公司或相关各方不得实施：(1) 公司增资、减资、合并、分立、重组、解散、股权变化；出售公司大部分或全部资产；支付股息；(2) 参股其他公司；(3) 制定新的员工股票期权计划、团队成员或现有股东的工资和福利；(4) 变更或影响投资方权利的其他事项。', { indent: 0 }));

// ─────────────── 第五条 ───────────────
c.push(sectionHeading('第五条：竞业限制、诚信经营'));

c.push(para('1.  创始人应将100%精力投入公司运营，遵守竞业禁止。公司应确保核心员工已经与公司签署为期（自本协议签署日起计算）三年以上的劳动合同，且包含竞业禁止条款。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('2.  创始人团队成员发生以下情况：(1) 从公司离职或不能履职；(2) 因故意或重大过失而被解职；(3) 违反对公司的忠实义务和勤勉义务。投资人有权要求创始人回购投资人所持全部或部分公司股权，价款为以下孰高者：(1) 投资方的投资成本的100%，加上6%单利计算的年回报额，加上所有已公布且未支付的红利；或(2) 投资方所持股权的公允市场价值。', { indent: 0 }));

// ─────────────── 第六条 ───────────────
c.push(sectionHeading('第六条：陈述与保证'));

c.push(para('1.  创始人及目标公司向投资方陈述与保证：公司依法合法设立并有效存续；股权结构与本协议所述一致，不存在其他未披露的股东、代持（除已披露的员工持股平台代持外）、股权质押、冻结或权利受限情形；公司不存在未向投资方披露的重大债务、诉讼、仲裁或行政处罚。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('2.  创始人特别保证：公司及核心团队成员与追觅科技及其关联方之间不存在任何股权关系、竞业限制约束或知识产权纠纷；公司前期作为追觅科技内部BU孵化期间产生的知识产权归属清晰，追觅科技对公司不享有任何优先投资权、回购权或其他权利主张。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('3.  创始人向投资方提供的全部文件、资料及信息真实、准确、完整，不存在重大遗漏或误导性陈述。', { indent: 0 }));

// ─────────────── 第七条 ───────────────
c.push(sectionHeading('第七条：其他'));

c.push(para('1.  本协议经各方签署/盖章之日起生效。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('2.  如任何一方违约，守约方有权要求违约方赔偿守约方因此所受的损失。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('3.  对于尚在支付进程中的全部或部分投资款，投资方有权决定是否支付，在不支付情况下不构成违约，投资方应按照已支付金额相应持有公司股份。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('4.  本协议的全部条款及本协议本身均为保密信息，各方不应向任何第三方披露。不论本协议是否变更、解除或终止，本条均有法律效力。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('5.  本协议适用中国法律。与本协议有关的争议，各方如协商不成，应提交至上海国际仲裁中心仲裁解决，或依法向上海市嘉定区人民法院发起诉讼。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('6.  本次增资产生的费用最多为投资人实际支付投资款的2%，即人民币6万元，由公司支付；若未能完成投资，由投资方支付。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('7.  公司章程未作规定，或者章程与本协议不一致，均适用本协议的约定。', { indent: 0 }));
c.push(...emptyLine(1));

c.push(para('8.  本协议一式四（4）份，各方各持一份，均具有相同效力。', { indent: 0 }));
c.push(...emptyLine(1));

// ─────────────── Signature Page ───────────────
c.push(para('（以下无正文，为协议签署页）', { indent: 0 }));
c.push(...emptyLine(2));

c.push(para('有鉴于此各方已使得经其授权的代表或其本人于文首所述日期签署了本增资协议并即生效，以昭信守。', { indent: 0 }));
c.push(...emptyLine(2));

// 甲方
c.push(para([{ text: '甲方：  上海新进创业投资中心（有限合伙）（盖章）', bold: true }], { indent: 0 }));
c.push(...emptyLine(1));
c.push(para('签署：______________________________________', { indent: { left: 480 } }));
c.push(para('执行事务合伙人/授权签字人', { indent: { left: 480 } }));
c.push(...emptyLine(3));

c.push(para('有鉴于此各方已使得经其授权的代表或其本人于文首所述日期签署了本增资协议并即生效，以昭信守。', { indent: 0 }));
c.push(...emptyLine(2));

// 乙方
c.push(para([{ text: '乙方1：', bold: true }], { indent: 0 }));
c.push(para([{ text: 'YAMANAKA TATSUYUKI（山中龙行）（签署）：', bold: true }, '______________________________________'], { indent: 0 }));
c.push(...emptyLine(2));

c.push(para([{ text: '乙方2：', bold: true }], { indent: 0 }));
c.push(para([{ text: '秦天汭（签署）：', bold: true }, '______________________________________'], { indent: 0 }));
c.push(...emptyLine(3));

// ─────────────── Appendix ───────────────
c.push(sectionHeading('附件：Monthly Business Report Template *'));
c.push(...emptyLine(1));

const reportItems = [
  ['Metrics:', ''],
  ['Revenue（营收）:', ''],
  ['Cost（成本，请单独列出人工成本）:', ''],
  ['Profit（利润）:', ''],
  ['Orders Signed / Pipeline（已签约订单/在谈项目）:', ''],
  ['Projects Delivered / In Progress（已交付/在建项目）:', ''],
  ['Cash & Runway（现金余额及可用月数）:', ''],
  ['', ''],
  ['Highlights:', ''],
  ['(eg.) Signed cooperation agreement with XXX for XXX units', ''],
  ['(eg.) Completed 1:1 prototype testing for NOAH product line', ''],
  ['XXX', ''],
  ['', ''],
  ['Lowlights:', ''],
  ['(eg.) XXX project delivery delayed by XXX weeks due to XXX', ''],
  ['(eg.) Supply chain costs increased by XXX% for XXX materials', ''],
  ['XXX', ''],
  ['', ''],
  ['Team:', ''],
  ['(eg.) Our new hire, XXX (Head of XXX), officially started in XXX', ''],
  ['XXX', ''],
];

reportItems.forEach(([label]) => {
  if (label === '') {
    c.push(...emptyLine(1));
  } else if (['Metrics:', 'Highlights:', 'Lowlights:', 'Team:'].includes(label)) {
    c.push(para([{ text: label, bold: true }], { indent: 0 }));
  } else if (label.startsWith('(eg.)')) {
    c.push(para([{ text: label, color: '808080', italics: true }], { indent: { left: 480 } }));
  } else if (label === 'XXX') {
    c.push(para('XXX', { indent: { left: 480 } }));
  } else {
    c.push(para(label, { indent: { left: 480 } }));
  }
});

c.push(...emptyLine(1));
c.push(para([{ text: '* 本附件为范例材料，请创始人基于公司业务和实际进展调整/加入合适内容', size: 20 }], { indent: 0 }));

// ─────────────── Build Document ───────────────
const doc = new Document({
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
      },
    },
    children: c,
  }],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync('ezBuild增资协议.docx', buf);
  console.log('Agreement generated successfully!');
});
