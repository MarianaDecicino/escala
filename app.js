
// ═══════════════════════════════════════════════════
// TIME INTERNO · Lookup global de KAM/RSL/RML por cooperativa
// Fonte: TIME_INTERNO.xlsx · Julho 2026
// ═══════════════════════════════════════════════════
const TIME_INTERNO=[
  {coop:'CVALE',seg:'ESCALA MINDCOOP',kam:'FABIO PAGNO',emailKam:'fabio.pagno@corteva.com',telKam:'45 99104-7751',rsl:'LINEU MELO',emailRsl:'lineu.melo@corteva.com',telRsl:'62 99645 7537',rml:'CESAR SILVEIRA',emailRml:'cesar.a.silveira@corteva.com',telRml:'11 99228-0489'},
  {coop:'CAMDA',seg:'ESCALA MINDCOOP',kam:'ADRIANA PASSOS MAGALHÃES',emailKam:'adriana.magalhaes@corteva.com',telKam:'18 99621-2797',rsl:'REDSON VIEIRA',emailRsl:'redson.cvieira@corteva.com',telRsl:'16 99738 5355',rml:'GUILHERME OGATA',emailRml:'guilherme.ogata@corteva.com',telRml:'11 99981-4178'},
  {coop:'CAPAL',seg:'ESCALA MINDCOOP',kam:'CRISIANO LEAL DE AVILA',emailKam:'crisiano.leal@corteva.com',telKam:'42 98812-1721',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'COAMO',seg:'ESCALA MINDCOOP',kam:'THALES QUEIROZ',emailKam:'thales.queiroz@corteva.com',telKam:'44 99115-9904',rsl:'LINEU MELO',emailRsl:'lineu.melo@corteva.com',telRsl:'62 99645 7537',rml:'CESAR SILVEIRA',emailRml:'cesar.a.silveira@corteva.com',telRml:'11 99228-0489'},
  {coop:'COCAMAR',seg:'ESCALA MINDCOOP',kam:'RODRIGO GATTO',emailKam:'rodrigo.gatto@corteva.com',telKam:'38 99909-4852',rsl:'LINEU MELO',emailRsl:'lineu.melo@corteva.com',telRsl:'62 99645 7537',rml:'CESAR SILVEIRA',emailRml:'cesar.a.silveira@corteva.com',telRml:'11 99228-0489'},
  {coop:'COMIGO',seg:'ESCALA MINDCOOP',kam:'WHEVERTON CASTRO CABARAL',emailKam:'wheverton.cabral@corteva.com',telKam:'64 98180-2072',rsl:'FRANCISCO GUTIERREZ',emailRsl:'francisco.gutierrez@corteva.com',telRsl:'11 97258 7058',rml:'JARBAS JESUINO',emailRml:'jarbas.jesuino@corteva.com',telRml:''},
  {coop:'COOPERALFA',seg:'ESCALA MINDCOOP',kam:'CASSIANO ALEXANDRE PAVELEGINI DE MEDEIROS',emailKam:'cassiano.medeiros@corteva.com',telKam:'49 99951-0024',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'COOPERCITRUS',seg:'ESCALA MINDCOOP',kam:'ADRIANA PASSOS MAGALHÃES',emailKam:'adriana.magalhaes@corteva.com',telKam:'18 99621-2797',rsl:'REDSON VIEIRA',emailRsl:'redson.cvieira@corteva.com',telRsl:'16 99738 5355',rml:'GUILHERME OGATA',emailRml:'guilherme.ogata@corteva.com',telRml:'11 99981-4178'},
  {coop:'COOPERMOTA',seg:'ESCALA MINDCOOP',kam:'ERASMO MACHADO NETO',emailKam:'erasmo.machado@corteva.com',telKam:'43 99108-2329',rsl:'LINEU MELO',emailRsl:'lineu.melo@corteva.com',telRsl:'62 99645 7537',rml:'CESAR SILVEIRA',emailRml:'cesar.a.silveira@corteva.com',telRml:'11 99228-0489'},
  {coop:'COPACOL',seg:'ESCALA MINDCOOP',kam:'FABIO PAGNO',emailKam:'fabio.pagno@corteva.com',telKam:'45 99104-7751',rsl:'LINEU MELO',emailRsl:'lineu.melo@corteva.com',telRsl:'62 99645 7537',rml:'CESAR SILVEIRA',emailRml:'cesar.a.silveira@corteva.com',telRml:'11 99228-0489'},
  {coop:'COPERCANA',seg:'ESCALA MINDCOOP',kam:'CAIO MARCELO BARBOSA LEITE NOGUEIRA',emailKam:'caio.nogueira@corteva.com',telKam:'18 99795-0834',rsl:'REDSON VIEIRA',emailRsl:'redson.cvieira@corteva.com',telRsl:'16 99738 5355',rml:'GUILHERME OGATA',emailRml:'guilherme.ogata@corteva.com',telRml:'11 99981-4178'},
  {coop:'COPLACANA',seg:'ESCALA MINDCOOP',kam:'JUSSIARA VENDEMIATTI',emailKam:'jussiara.vendemiatti@corteva.com',telKam:'19 99946-5982',rsl:'REDSON VIEIRA',emailRsl:'redson.cvieira@corteva.com',telRsl:'16 99738 5355',rml:'GUILHERME OGATA',emailRml:'guilherme.ogata@corteva.com',telRml:'11 99981-4178'},
  {coop:'COTRIJAL',seg:'ESCALA MINDCOOP',kam:'FABIANO ARGENTA',emailKam:'fabiano.argenta@corteva.com',telKam:'54 99990-3905',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'INTEGRADA',seg:'ESCALA MINDCOOP',kam:'ERASMO MACHADO NETO',emailKam:'erasmo.machado@corteva.com',telKam:'43 99108-2329',rsl:'LINEU MELO',emailRsl:'lineu.melo@corteva.com',telRsl:'62 99645 7537',rml:'CESAR SILVEIRA',emailRml:'cesar.a.silveira@corteva.com',telRml:'11 99228-0489'},
  {coop:'LAR',seg:'ESCALA MINDCOOP',kam:'RAFAEL BAIRROS BLANC',emailKam:'rafael.bairrosblanc@corteva.com',telKam:'67 99978-1187',rsl:'LINEU MELO',emailRsl:'lineu.melo@corteva.com',telRsl:'62 99645 7537',rml:'CESAR SILVEIRA',emailRml:'cesar.a.silveira@corteva.com',telRml:'11 99228-0489'},
  {coop:'A1',seg:'ESCALA',kam:'FABIANO ARGENTA',emailKam:'fabiano.argenta@corteva.com',telKam:'54 99990-3905',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'AGRARIA',seg:'ESCALA',kam:'CRISIANO LEAL DE AVILA',emailKam:'crisiano.leal@corteva.com',telKam:'42 98812-1721',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'BOM JESUS',seg:'ESCALA',kam:'CRISIANO LEAL DE AVILA',emailKam:'crisiano.leal@corteva.com',telKam:'42 98812-1721',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'CASTROLANDA',seg:'ESCALA',kam:'CRISIANO LEAL DE AVILA',emailKam:'crisiano.leal@corteva.com',telKam:'42 98812-1721',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'COAGRIL',seg:'ESCALA',kam:'',emailKam:'',telKam:'',rsl:'FRANCISCO GUTIERREZ',emailRsl:'francisco.gutierrez@corteva.com',telRsl:'11 97258 7058',rml:'JARBAS JESUINO',emailRml:'jarbas.jesuino@corteva.com',telRml:''},
  {coop:'COASUL',seg:'ESCALA',kam:'CRISIANO LEAL DE AVILA',emailKam:'crisiano.leal@corteva.com',telKam:'42 98812-1721',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'COCARI',seg:'ESCALA',kam:'RODRIGO GATTO',emailKam:'rodrigo.gatto@corteva.com',telKam:'38 99909-4852',rsl:'LINEU MELO',emailRsl:'lineu.melo@corteva.com',telRsl:'62 99645 7537',rml:'CESAR SILVEIRA',emailRml:'cesar.a.silveira@corteva.com',telRml:'11 99228-0489'},
  {coop:'COOPAGRÍCOLA',seg:'ESCALA',kam:'CRISIANO LEAL DE AVILA',emailKam:'crisiano.leal@corteva.com',telKam:'42 98812-1721',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'COOPATRIGO',seg:'ESCALA',kam:'FABIANO ARGENTA',emailKam:'fabiano.argenta@corteva.com',telKam:'54 99990-3905',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'COOPAVEL',seg:'ESCALA',kam:'FABIO SALBEGO',emailKam:'fabio.salbego@corteva.com',telKam:'45 99971-5805',rsl:'LINEU MELO',emailRsl:'lineu.melo@corteva.com',telRsl:'62 99645 7537',rml:'CESAR SILVEIRA',emailRml:'cesar.a.silveira@corteva.com',telRml:'11 99228-0489'},
  {coop:'COOPERTRADIÇÃO',seg:'ESCALA',kam:'CASSIANO ALEXANDRE PAVELEGINI DE MEDEIROS',emailKam:'cassiano.medeiros@corteva.com',telKam:'49 99951-0024',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'COOXUPÉ',seg:'ESCALA',kam:'FABIO LOZANO JOANNITTI',emailKam:'fabio.lozano@corteva.com',telKam:'31 99738-8287',rsl:'REDSON VIEIRA',emailRsl:'redson.cvieira@corteva.com',telRsl:'16 99738 5355',rml:'GUILHERME OGATA',emailRml:'guilherme.ogata@corteva.com',telRml:'11 99981-4178'},
  {coop:'COPAGRIL',seg:'ESCALA',kam:'FABIO SALBEGO',emailKam:'fabio.salbego@corteva.com',telKam:'45 99971-5805',rsl:'LINEU MELO',emailRsl:'lineu.melo@corteva.com',telRsl:'62 99645 7537',rml:'CESAR SILVEIRA',emailRml:'cesar.a.silveira@corteva.com',telRml:'11 99228-0489'},
  {coop:'COPASUL',seg:'ESCALA',kam:'ANTONIO MARCOS',emailKam:'antoniomarcos.ferreiradasilva@corteva.com',telKam:'67 99870-2819',rsl:'LINEU MELO',emailRsl:'lineu.melo@corteva.com',telRsl:'62 99645 7537',rml:'CESAR SILVEIRA',emailRml:'cesar.a.silveira@corteva.com',telRml:'11 99228-0489'},
  {coop:'COPERCAMPOS',seg:'ESCALA',kam:'CASSIANO ALEXANDRE PAVELEGINI DE MEDEIROS',emailKam:'cassiano.medeiros@corteva.com',telKam:'49 99951-0024',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'COPÉRDIA',seg:'ESCALA',kam:'CASSIANO ALEXANDRE PAVELEGINI DE MEDEIROS',emailKam:'cassiano.medeiros@corteva.com',telKam:'49 99951-0024',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'COPLANA',seg:'ESCALA',kam:'DIOGO PAVAN',emailKam:'diogo.pavan@corteva.com',telKam:'',rsl:'FRANCISCO GUTIERREZ',emailRsl:'francisco.gutierrez@corteva.com',telRsl:'11 97258 7058',rml:'JARBAS JESUINO',emailRml:'jarbas.jesuino@corteva.com',telRml:''},
  {coop:'COTRIBÁ',seg:'ESCALA',kam:'FABIANO ARGENTA',emailKam:'fabiano.argenta@corteva.com',telKam:'54 99990-3905',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'COTRICAMPO',seg:'ESCALA',kam:'TIAGO FERRETTI',emailKam:'tiago.ferretti@corteva.com',telKam:'',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'COTRIEL',seg:'ESCALA',kam:'FABIANO ARGENTA',emailKam:'fabiano.argenta@corteva.com',telKam:'54 99990-3905',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'COTRIJUC',seg:'ESCALA',kam:'FABIANO ARGENTA',emailKam:'fabiano.argenta@corteva.com',telKam:'54 99990-3905',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'COTRISAL',seg:'ESCALA',kam:'FABIANO ARGENTA',emailKam:'fabiano.argenta@corteva.com',telKam:'54 99990-3905',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'COTRISUL',seg:'ESCALA',kam:'RAFAEL PAZ MARQUES',emailKam:'rafael.pazmarques@corteva.com',telKam:'',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'FRÍSIA',seg:'ESCALA',kam:'CRISIANO LEAL DE AVILA',emailKam:'crisiano.leal@corteva.com',telKam:'42 98812-1721',rsl:'LUIZ GRINES',emailRsl:'luiz.grines@corteva.com',telRsl:'51 9945-0599',rml:'FABIANO ARGENTA',emailRml:'fabiano.argenta@corteva.com',telRml:'54 99990-3905'},
  {coop:'HOLAMBRA',seg:'ESCALA',kam:'GABRIEL DORNELAS',emailKam:'gabriel.dornelas@corteva.com',telKam:'19 99801-6617',rsl:'LINEU MELO',emailRsl:'lineu.melo@corteva.com',telRsl:'62 99645 7537',rml:'CESAR SILVEIRA',emailRml:'cesar.a.silveira@corteva.com',telRml:'11 99228-0489'},
];
// PROCV: busca KAM/RSL/RML pelo nome da coop (case-insensitive, parcial)
function lookupKam(nome){
  if(!nome) return null;
  const n=nome.toUpperCase().trim().replace(/[^A-ZÁÉÍÓÚÂÊÎÔÛÃÕÇ\s]/gi,'').trim();
  // variantes e aliases comuns
  const aliases={'CVALE':'CVALE','C.VALE':'CVALE','COOPERALFA':'COOPERALFA','COOPERTRADIÇÃO':'COOPERTRADIÇÃO','COOPERTRADIÇÃO':'COOPERTRADIÇÃO','COOPERTRADIÇÃO':'COOPERTRADIÇÃO','AGRÁRIA':'AGRARIA','AGRÁRIAS':'AGRARIA','FRÍSIA':'FRÍSIA','COPÉRDIA':'COPÉRDIA'};
  const key=aliases[n]||n;
  return TIME_INTERNO.find(r=>r.coop.toUpperCase()===key||r.coop.toUpperCase().startsWith(key)||key.startsWith(r.coop.toUpperCase()))||null;
}
function getKam(nome){ const r=lookupKam(nome); return r?r.kam:''; }
function getRsl(nome){ const r=lookupKam(nome); return r?r.rsl:''; }
function getRml(nome){ const r=lookupKam(nome); return r?r.rml:''; }

// ── renderTimeInterno ─────────────────────────────────────────────
function renderTimeInterno(){
  const tb=document.getElementById('ti-body');
  if(!tb) return;
  // Populate RSL filter once
  const rslSel=document.getElementById('ti-rsl');
  if(rslSel&&rslSel.options.length<=1){
    const rsls=[...new Set(TIME_INTERNO.map(r=>r.rsl).filter(Boolean))].sort();
    rsls.forEach(r=>{const o=document.createElement('option');o.value=r;o.textContent=r;rslSel.appendChild(o);});
  }
  const q=(document.getElementById('ti-search')?.value||'').toUpperCase();
  const seg=(document.getElementById('ti-seg')?.value||'').toUpperCase();
  const rslF=(document.getElementById('ti-rsl')?.value||'').toUpperCase();
  const rows=TIME_INTERNO.filter(r=>{
    if(seg&&!r.seg.toUpperCase().includes(seg)) return false;
    if(rslF&&r.rsl.toUpperCase()!==rslF) return false;
    if(q&&![r.coop,r.kam,r.rsl,r.rml,r.emailKam,r.emailRsl].some(v=>v&&v.toUpperCase().includes(q))) return false;
    return true;
  });
  const cnt=document.getElementById('ti-count');
  if(cnt) cnt.textContent=rows.length+' cooperativa'+(rows.length!==1?'s':'');
  const isMind=r=>r.seg.includes('MINDCOOP');
  tb.innerHTML=rows.map((r,i)=>{
    const bg=i%2===0?'background:rgba(255,255,255,.015)':'';
    const segTag=isMind(r)
      ?'<span class="tag tag-teal" style="font-size:.6rem;padding:2px 8px">MINDCOOP</span>'
      :'<span class="tag tag-blue" style="font-size:.6rem;padding:2px 8px">ESCALA</span>';
    const cell=(v,mono)=>`<td style="padding:9px 14px;font-size:.75rem;color:${mono?'var(--g200)':'var(--white)'};${bg};border-bottom:1px solid rgba(255,255,255,.04);white-space:nowrap">${v||'<span style="color:var(--g600)">—</span>'}</td>`;
    const email=v=>v?`<a href="mailto:${v}" style="color:var(--teal);text-decoration:none;font-size:.72rem">${v}</a>`:'<span style="color:var(--g600)">—</span>';
    return `<tr style="${bg}">`
      +`<td style="padding:9px 14px;font-weight:700;font-size:.8rem;color:var(--white);border-bottom:1px solid rgba(255,255,255,.04);white-space:nowrap">${r.coop}</td>`
      +`<td style="padding:9px 14px;border-bottom:1px solid rgba(255,255,255,.04)">${segTag}</td>`
      +cell(r.kam)
      +`<td style="padding:9px 14px;border-bottom:1px solid rgba(255,255,255,.04)">${email(r.emailKam)}</td>`
      +cell(r.telKam,true)
      +cell(r.rsl)
      +`<td style="padding:9px 14px;border-bottom:1px solid rgba(255,255,255,.04)">${email(r.emailRsl)}</td>`
      +cell(r.telRsl,true)
      +cell(r.rml)
      +`<td style="padding:9px 14px;border-bottom:1px solid rgba(255,255,255,.04)">${email(r.emailRml)}</td>`
      +cell(r.telRml,true)
      +'</tr>';
  }).join('');
}

// ═══════════ DATA DEFAULTS ═══════════
const D0 = {
  kpis:[
    {id:1,nome:'Sell-out',meta:'',atual:'',tend:'→'},
    {id:2,nome:'Sell-in',meta:'',atual:'',tend:'→'},
    {id:3,nome:'NPS Eventos',meta:'',atual:'',tend:'→'},
    {id:4,nome:'Prot. Técnicos',meta:'',atual:'',tend:'→'},
    {id:5,nome:'PINC',meta:'',atual:'',tend:'→'},
  ],
  projStatus:[
    {proj:'MindCoop',status:'green',marco:'Evento Novembro',prog:70},
    {proj:'InfoCoop',status:'amber',marco:'Kynetec',prog:40},
    {proj:'InteCoop',status:'green',marco:'Plano Técnico',prog:60},
    {proj:'GoCoop',status:'green',marco:'Turma 2',prog:55},
    {proj:'EliteCoop',status:'red',marco:'Definir agenda',prog:10},
    {proj:'PINC',status:'red',marco:'Definir agenda',prog:15},
  ],
  riscos:[
    {id:1,risco:'Dados BI atrasados',impacto:'Alto'},
    {id:2,risco:'Agenda MindCoop',impacto:'Médio'},
    {id:3,risco:'Aprovação orçamento',impacto:'Alto'},
  ],
  decisoes:[
    {id:1,decisao:'Aprovar agenda MindCoop',resp:'Líderes',prazo:'15/08'},
    {id:2,decisao:'Validar Kynetec',resp:'BI',prazo:'20/08'},
    {id:3,decisao:'Aprovar orçamento',resp:'Diretoria',prazo:'25/08'},
  ],
  // Sell-out por cooperativa
  coopsData: [
    {num:1,nome:"COTRIJAL",cat:"MindCoop",sellin:"R$ 41.571.000",sellout:"5.4",meta:"R$ 44.323.000",ating:"93.8"},
    {num:2,nome:"COAMO",cat:"MindCoop",sellin:"R$ 43.226.000",sellout:"27.5",meta:"R$ 50.230.000",ating:"86.1"},
    {num:3,nome:"CVALE",cat:"MindCoop",sellin:"R$ 89.778.000",sellout:"9.6",meta:"R$ 106.912.000",ating:"84.0"},
    {num:4,nome:"LAR",cat:"MindCoop",sellin:"R$ 18.955.000",sellout:"11.5",meta:"R$ 23.085.000",ating:"82.1"},
    {num:5,nome:"COCAMAR",cat:"MindCoop",sellin:"R$ 196.489.000",sellout:"6.2",meta:"R$ 235.382.000",ating:"83.5"},
    {num:6,nome:"INTEGRADA",cat:"MindCoop",sellin:"R$ 149.654.000",sellout:"3.2",meta:"R$ 182.570.000",ating:"82.0"},
    {num:7,nome:"COMIGO",cat:"MindCoop",sellin:"R$ 22.605.000",sellout:"9.0",meta:"R$ 25.821.000",ating:"87.5"},
    {num:8,nome:"COOPERMOTA",cat:"MindCoop",sellin:"R$ 19.549.000",sellout:"1.7",meta:"R$ 23.582.000",ating:"82.9"},
    {num:9,nome:"COOPERCITRUS",cat:"MindCoop",sellin:"R$ 109.443.000",sellout:"7.3",meta:"R$ 117.246.000",ating:"93.3"},
    {num:10,nome:"COPACOL",cat:"MindCoop",sellin:"R$ 91.173.000",sellout:"1.8",meta:"R$ 109.897.000",ating:"83.0"},
    {num:11,nome:"COOPERALFA",cat:"MindCoop",sellin:"R$ 112.203.000",sellout:"3.2",meta:"R$ 120.539.000",ating:"93.1"},
    {num:12,nome:"CAMDA",cat:"MindCoop",sellin:"R$ 187.623.000",sellout:"2.7",meta:"R$ 199.120.000",ating:"94.2"},
    {num:13,nome:"COPLACANA",cat:"MindCoop",sellin:"R$ 169.249.000",sellout:"14.3",meta:"R$ 210.682.000",ating:"80.3"},
    {num:14,nome:"COPERCANA",cat:"MindCoop",sellin:"R$ 151.207.000",sellout:"6.9",meta:"R$ 187.372.000",ating:"80.7"},
    {num:15,nome:"CAPAL",cat:"MindCoop",sellin:"R$ 108.070.000",sellout:"1.6",meta:"R$ 118.210.000",ating:"91.4"},
    {num:16,nome:"Cotrisul",cat:"ESCALA",sellin:"R$ 38.839.000",sellout:"2.2",meta:"R$ 46.515.000",ating:"83.5"},
    {num:17,nome:"Copercampos",cat:"ESCALA",sellin:"R$ 61.944.000",sellout:"1.0",meta:"R$ 69.803.000",ating:"88.7"},
    {num:18,nome:"Cotricampo",cat:"ESCALA",sellin:"R$ 75.885.000",sellout:"0.8",meta:"R$ 80.212.000",ating:"94.6"},
    {num:19,nome:"Coopatrigo",cat:"ESCALA",sellin:"R$ 40.673.000",sellout:"2.3",meta:"R$ 43.028.000",ating:"94.5"},
    {num:20,nome:"Cocari",cat:"ESCALA",sellin:"R$ 29.928.000",sellout:"0.5",meta:"R$ 37.346.000",ating:"80.1"},
    {num:21,nome:"Coagril",cat:"ESCALA",sellin:"R$ 11.196.000",sellout:"1.4",meta:"R$ 13.963.000",ating:"80.2"},
    {num:22,nome:"Coopavel",cat:"ESCALA",sellin:"R$ 72.599.000",sellout:"1.6",meta:"R$ 86.223.000",ating:"84.2"},
    {num:23,nome:"Coasul",cat:"ESCALA",sellin:"R$ 6.365.000",sellout:"1.8",meta:"R$ 7.283.000",ating:"87.4"},
    {num:24,nome:"Copasul",cat:"ESCALA",sellin:"R$ 55.973.000",sellout:"0.6",meta:"R$ 59.837.000",ating:"93.5"},
    {num:25,nome:"Cop\u00e9rdia",cat:"ESCALA",sellin:"R$ 25.262.000",sellout:"1.8",meta:"R$ 26.989.000",ating:"93.6"},
    {num:26,nome:"Copagril",cat:"ESCALA",sellin:"R$ 67.793.000",sellout:"1.5",meta:"R$ 83.592.000",ating:"81.1"},
    {num:27,nome:"Coopertradi\u00e7\u00e3o",cat:"ESCALA",sellin:"R$ 74.046.000",sellout:"2.4",meta:"R$ 88.866.000",ating:"83.3"},
    {num:28,nome:"Cotrijuc",cat:"ESCALA",sellin:"R$ 46.896.000",sellout:"0.3",meta:"R$ 49.824.000",ating:"94.1"},
    {num:29,nome:"Cotriel",cat:"ESCALA",sellin:"R$ 39.551.000",sellout:"2.6",meta:"R$ 47.545.000",ating:"83.2"},
    {num:30,nome:"Holambra",cat:"ESCALA",sellin:"R$ 60.966.000",sellout:"0.7",meta:"R$ 64.340.000",ating:"94.8"},
    {num:31,nome:"Cotrib\u00e1",cat:"ESCALA",sellin:"R$ 2.640.000",sellout:"2.3",meta:"R$ 2.819.000",ating:"93.7"},
    {num:32,nome:"Agr\u00e1ria",cat:"ESCALA",sellin:"R$ 74.099.000",sellout:"1.5",meta:"R$ 79.485.000",ating:"93.2"},
    {num:33,nome:"Castrolanda",cat:"ESCALA",sellin:"R$ 32.440.000",sellout:"2.3",meta:"R$ 37.150.000",ating:"87.3"},
    {num:34,nome:"Fr\u00edsia",cat:"ESCALA",sellin:"R$ 70.933.000",sellout:"0.7",meta:"R$ 76.404.000",ating:"92.8"},
    {num:35,nome:"Bom Jesus",cat:"ESCALA",sellin:"R$ 22.399.000",sellout:"1.0",meta:"R$ 26.977.000",ating:"83.0"},
    {num:36,nome:"Cotrisal",cat:"ESCALA",sellin:"R$ 8.705.000",sellout:"0.4",meta:"R$ 9.426.000",ating:"92.4"},
    {num:37,nome:"A1",cat:"ESCALA",sellin:"R$ 3.957.000",sellout:"2.2",meta:"R$ 4.913.000",ating:"80.5"},
    {num:38,nome:"Cooxup\u00e9",cat:"ESCALA",sellin:"R$ 20.201.000",sellout:"1.6",meta:"R$ 23.237.000",ating:"86.9"},
    {num:39,nome:"Coplana",cat:"ESCALA",sellin:"R$ 31.575.000",sellout:"0.7",meta:"R$ 39.352.000",ating:"80.2"}
  ],
  // KPI areas
  kpiAreas:[
    {
      id:'dev-tec',label:'Desenv. Técnico Agronômico',
      objetivo:'Acompanhar a evolução das iniciativas técnicas do Programa ESCALA, garantindo a implementação dos direcionadores agronômicos e sua aplicação no desenvolvimento das cooperativas.',
      entregaveis:[
        {ent:'Diagnóstico técnico por cultura/região (INTECOOP)',resp:'both',status:'gray'},
        {ent:'Guia Técnico de Posicionamento (revisão anual)',resp:'corteva',status:'gray'},
        {ent:'Plano de implantação das áreas demonstrativas',resp:'corteva',status:'gray'},
        {ent:'Plano de implantação dos protocolos técnicos',resp:'corteva',status:'gray'},
        {ent:'Plano de aplicação dos conteúdos técnicos no GOCOOP',resp:'zmp',status:'gray'},
        {ent:'Registro das capacitações técnicas realizadas',resp:'zmp',status:'gray'},
        {ent:'Painel de Áreas Demonstrativas por Cooperativa',resp:'zmp',status:'gray'},
        {ent:'Painel de acompanhamento das iniciativas técnicas',resp:'zmp',status:'gray'},
      ],
      checks:[
        {txt:'Diagnósticos técnicos atualizados',done:false,status:'gray'},
        {txt:'Guia Técnico vigente e alinhado',done:false,status:'gray'},
        {txt:'Protocolos técnicos acompanhados',done:false,status:'gray'},
        {txt:'Painel de Áreas Demonstrativas atualizado',done:false,status:'gray'},
        {txt:'Conteúdos técnicos incorporados ao GOCOOP',done:false,status:'gray'},
        {txt:'Capacitações técnicas registradas',done:false,status:'gray'},
        {txt:'Pendências, riscos e plano de ação atualizados',done:false,status:'gray'},
      ],
      healthMonth:'julho',
      coopRows:[{coop:'',detalhe:'',status:'gray',resp:'',updated:'',prox:''}],
    },
    {
      id:'plan-est',label:'Planejamento Estratégico',
      objetivo:'Acompanhar a construção e evolução dos Planos de Negócio das cooperativas, garantindo alinhamento estratégico e execução das principais iniciativas de crescimento.',
      entregaveis:[
        {ent:'Plano de Negócios/Plano Comercial Anual por Cooperativa',resp:'corteva',status:'gray'},
        {ent:'Objetivos estratégicos por cooperativa e filial',resp:'corteva',status:'gray'},
        {ent:'Mapa de potencial de mercado por região/cultura',resp:'corteva',status:'gray'},
        {ent:'Segmentação estratégica da carteira de clientes',resp:'both',status:'gray'},
        {ent:'Materiais de apoio para workshops de planejamento',resp:'zmp',status:'gray'},
        {ent:'Painel de Planos de Negócio por Cooperativa',resp:'zmp',status:'gray'},
        {ent:'Registro e acompanhamento dos planos de ação',resp:'zmp',status:'gray'},
      ],
      checks:[
        {txt:'Planos de Negócio atualizados',done:false,status:'gray'},
        {txt:'Objetivos estratégicos revisados',done:false,status:'gray'},
        {txt:'Campanhas locais acompanhadas',done:false,status:'gray'},
        {txt:'Segmentação da carteira atualizada',done:false,status:'gray'},
        {txt:'Plano de ação das cooperativas atualizado',done:false,status:'gray'},
        {txt:'Pendências, riscos e decisões registradas',done:false,status:'gray'},
      ],
      healthMonth:'julho',
      coopRows:[{coop:'',detalhe:'',status:'gray',resp:'',updated:'',prox:''}],
    },
    {
      id:'gest-gov',label:'Gestão e Governança',
      objetivo:'Garantir a execução disciplinada do Programa ESCALA por meio de uma governança estruturada, acompanhamento contínuo dos KPIs e integração entre as áreas envolvidas.',
      entregaveis:[
        {ent:'Painel de KPIs do Programa ESCALA',resp:'zmp',status:'gray'},
        {ent:'Dashboard Executivo do Programa',resp:'zmp',status:'gray'},
        {ent:'Calendário anual de governança',resp:'zmp',status:'gray'},
        {ent:'Rotina de reuniões e fóruns de acompanhamento',resp:'zmp',status:'gray'},
        {ent:'Plano de ação integrado do Programa',resp:'zmp',status:'gray'},
        {ent:'Registro das decisões estratégicas',resp:'zmp',status:'gray'},
        {ent:'Painel de acompanhamento das Cooperativas Prioritárias',resp:'zmp',status:'gray'},
      ],
      checks:[
        {txt:'Dashboard Executivo atualizado',done:false,status:'gray'},
        {txt:'KPIs do Programa atualizados',done:false,status:'gray'},
        {txt:'Plano de ação revisado',done:false,status:'gray'},
        {txt:'Reuniões de governança realizadas',done:false,status:'gray'},
        {txt:'Decisões estratégicas registradas',done:false,status:'gray'},
        {txt:'Riscos e pendências atualizados',done:false,status:'gray'},
      ],
      healthMonth:'julho',
      coopRows:[],
      radar:{saude:'gray',kpis:'gray',marcos:'',riscos:'',decisoes:''},
    },
    {
      id:'cap-ext',label:'Capacitação Externa',
      objetivo:'Acompanhar a execução do plano anual de desenvolvimento das cooperativas, garantindo a realização dos fóruns, capacitações e ações previstas para fortalecimento técnico, comercial e gerencial.',
      entregaveis:[
        {ent:'Plano Anual de Desenvolvimento das Cooperativas',resp:'both',status:'gray'},
        {ent:'Calendário anual dos fóruns do Programa ESCALA',resp:'both',status:'gray'},
        {ent:'Execução dos fóruns (Liderança, Gest. Comercial, Lid. Técnica, Consultores)',resp:'both',status:'gray'},
        {ent:'Metodologia e agenda',resp:'zmp',status:'gray'},
        {ent:'Relatórios executivos dos fóruns',resp:'both',status:'gray'},
        {ent:'Painel de acompanhamento dos encontros',resp:'zmp',status:'gray'},
      ],
      checks:[
        {txt:'Calendário anual atualizado',done:false,status:'gray'},
        {txt:'Fóruns executados conforme cronograma',done:false,status:'gray'},
        {txt:'Materiais e conteúdos desenvolvidos',done:false,status:'gray'},
        {txt:'Relatórios dos fóruns concluídos',done:false,status:'gray'},
        {txt:'Painel de capacitações atualizado',done:false,status:'gray'},
        {txt:'Pendências e próximos fóruns revisados',done:false,status:'gray'},
      ],
      healthMonth:'julho',
      coopRows:[],
      forumRows:[
        {proj:'MINDCOOP',evento:'Módulo 1',periodo:'',status:'gray',resp:'CTVA e ZMP',prox:''},
        {proj:'MINDCOOP',evento:'Módulo 2',periodo:'',status:'gray',resp:'CTVA e ZMP',prox:''},
        {proj:'INFOCOOP',evento:'Fórum Anual',periodo:'',status:'gray',resp:'CTVA e ZMP',prox:''},
        {proj:'INTECOOP',evento:'Fórum Técnico',periodo:'',status:'gray',resp:'CTVA e ZMP',prox:''},
        {proj:'ELITECOOP',evento:'Módulo 1',periodo:'',status:'gray',resp:'CTVA e ZMP',prox:''},
        {proj:'ELITECOOP',evento:'Módulo 2',periodo:'',status:'gray',resp:'CTVA e ZMP',prox:''},
        {proj:'GOCOOP',evento:'Turma/Módulo 1',periodo:'',status:'gray',resp:'ZMP',prox:''},
        {proj:'GOCOOP',evento:'Turma/Módulo 2',periodo:'',status:'gray',resp:'ZMP',prox:''},
        {proj:'GOCOOP',evento:'Turma/Módulo 3',periodo:'',status:'gray',resp:'ZMP',prox:''},
        {proj:'GOCOOP',evento:'Turma/Módulo 4',periodo:'',status:'gray',resp:'ZMP',prox:''},
        {proj:'GOCOOP',evento:'Turma/Módulo 5',periodo:'',status:'gray',resp:'ZMP',prox:''},
        {proj:'GOCOOP',evento:'Turma/Módulo 6',periodo:'',status:'gray',resp:'ZMP',prox:''},
        {proj:'GOCOOP',evento:'Turma/Módulo 7',periodo:'',status:'gray',resp:'ZMP',prox:''},
        {proj:'GOCOOP',evento:'Turma/Módulo 8',periodo:'',status:'gray',resp:'ZMP',prox:''},
        {proj:'GOCOOP',evento:'Turma/Módulo 9',periodo:'',status:'gray',resp:'ZMP',prox:''},
        {proj:'GOCOOP',evento:'Turma/Módulo 10',periodo:'',status:'gray',resp:'ZMP',prox:''},
      ],
      resumo:{previstos:'',realizados:'',participantes:'',publico:'',nps:'',relatorios:''},
    },
    {
      id:'oport',label:'Oportunidades de Negócio',
      objetivo:'Identificar, consolidar e acompanhar oportunidades estratégicas que contribuam para o crescimento conjunto entre Corteva e cooperativas.',
      entregaveis:[
        {ent:'Identificação de oportunidades por cultura e região',resp:'both',status:'gray'},
        {ent:'Plano de expansão de portfólio',resp:'corteva',status:'gray'},
        {ent:'Recomendações estratégicas para evolução das cooperativas',resp:'zmp',status:'gray'},
        {ent:'Painel de acompanhamento das oportunidades',resp:'zmp',status:'gray'},
      ],
      checks:[
        {txt:'Novas oportunidades identificadas',done:false,status:'gray'},
        {txt:'Oportunidades priorizadas com a Corteva',done:false,status:'gray'},
        {txt:'Recomendações estratégicas compartilhadas',done:false,status:'gray'},
        {txt:'Pipeline de oportunidades atualizado',done:false,status:'gray'},
        {txt:'Evolução das oportunidades acompanhada',done:false,status:'gray'},
        {txt:'Pendências e próximos passos revisados',done:false,status:'gray'},
      ],
      healthMonth:'julho',
      coopRows:[{coop:'',opp:'',cat:'',resp:'',status:'gray',prox:''}],
    },
  ],
  // Encontros
  encontros:{
    MINDCOOP:{infos:{projeto:'MindCoop',objetivo:'',publico:'Alta liderança das cooperativas',data:'',local:'',status:'gray'},fases:[
      {fase:'1. Planejamento',obj:'Definir objetivo, tema, público, agenda macro e direcionamento estratégico',status:'gray'},
      {fase:'2. Preparação',obj:'Consolidar conteúdos, apresentações, participantes e alinhamentos finais',status:'gray'},
      {fase:'3. Execução',obj:'Realizar o encontro, registrar presença, discussões e percepções',status:'gray'},
      {fase:'4. Pós-evento',obj:'Consolidar relatório, aprendizados, plano de ação e próximos passos',status:'gray'},
    ],entregaveis:[
      {ent:'Objetivo e conceito do encontro',resp:'ZMP + Corteva',status:'gray'},
      {ent:'Agenda executiva',resp:'ZMP + Corteva',status:'gray'},
      {ent:'Definição de público e participantes-chave',resp:'Corteva',status:'gray'},
      {ent:'Conteúdos e apresentações',resp:'ZMP + Corteva',status:'gray'},
      {ent:'Alinhamento com agência/parceiros',resp:'Corteva + ZMP',status:'gray'},
      {ent:'Relatório executivo pós-evento',resp:'Agência',status:'gray'},
      {ent:'Plano de ação pós-evento (com KAMs)',resp:'ZMP + Corteva',status:'gray'},
    ],healthChecks:[
      {txt:'Objetivo e tema definidos',done:false,status:'gray'},
      {txt:'Agenda executiva validada',done:false,status:'gray'},
      {txt:'Participantes-chave definidos',done:false,status:'gray'},
      {txt:'Conteúdos/apresentações em andamento',done:false,status:'gray'},
      {txt:'Pontos críticos com agência alinhados',done:false,status:'gray'},
      {txt:'Decisões pendentes registradas',done:false,status:'gray'},
      {txt:'Plano de ação atualizado',done:false,status:'gray'},
    ],decisoes:[{item:'',tipo:'Decisão',resp:'',prazo:'',status:'gray'}],
    acoes:[{acao:'',origem:'Análise NPS',resp:'',prazo:'',status:'gray'},{acao:'',origem:'Ritual KAMs pós evento',resp:'',prazo:'',status:'gray'}],
    aprendizados:[{func:'',melhora:'',aplica:''}],
    },
    INFOCOOP:{infos:{projeto:"INFOCOOP",objetivo:"",publico:"Gerentes Comerciais das cooperativas",data:"",local:"",status:"gray"},fases:[{fase:"1. Planejamento",obj:"",status:"gray"},{fase:"2. Preparação",obj:"",status:"gray"},{fase:"3. Execução",obj:"",status:"gray"},{fase:"4. Pós-evento",obj:"",status:"gray"}],entregaveis:[{ent:'Briefing com KAM',resp:'',status:'gray'},{ent:'Coleta de dados Kynetec',resp:'',status:'gray'},{ent:'Análise de mercado',resp:'',status:'gray'},{ent:'Apresentação preparada',resp:'',status:'gray'},{ent:'Relatório entregue',resp:'',status:'gray'},{ent:'Follow-up realizado',resp:'',status:'gray'}],healthChecks:[],planoAcao:[],atuacaoCoops:[{coop:'COTRIJAL',cat:'MindCoop',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'COAMO',cat:'MindCoop',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'CVALE',cat:'MindCoop',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'LAR',cat:'MindCoop',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'COCAMAR',cat:'MindCoop',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'INTEGRADA',cat:'MindCoop',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'COMIGO',cat:'MindCoop',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'COOPERMOTA',cat:'MindCoop',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'COOPERCITRUS',cat:'MindCoop',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'COPACOL',cat:'MindCoop',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'COOPERALFA',cat:'MindCoop',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'CAMDA',cat:'MindCoop',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'COPLACANA',cat:'MindCoop',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'COPERCANA',cat:'MindCoop',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'CAPAL',cat:'MindCoop',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Cotrisul',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Copercampos',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Cotricampo',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Coopatrigo',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Cocari',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Coagril',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Coopavel',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Coasul',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Copasul',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Copérdia',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Copagril',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Coopertradição',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Cotrijuc',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Cotriel',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Holambra',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Cotribá',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Agrária',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Castrolanda',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Frísia',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Bom Jesus',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Cotrisal',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'A1',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Cooxupé',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'},{coop:'Coplana',cat:'ESCALA',kam:'',formato:'',data:'',enviado:'gray',recebido:'gray',kynetec:'gray'}]},
    INTECOOP:{infos:{projeto:"INTECOOP",objetivo:"",publico:"Gerentes Técnicos das cooperativas",data:"",local:"",status:"gray"},fases:[{fase:"1. Planejamento",obj:"",status:"gray"},{fase:"2. Preparação",obj:"",status:"gray"},{fase:"3. Execução",obj:"",status:"gray"},{fase:"4. Pós-evento",obj:"",status:"gray"}],entregaveis:[{ent:'Diagnóstico técnico por cultura',resp:'',status:'gray'},{ent:'Guia Técnico de Posicionamento',resp:'',status:'gray'},{ent:'Plano de áreas demonstrativas',resp:'',status:'gray'},{ent:'Protocolos técnicos',resp:'',status:'gray'},{ent:'Conteúdos técnicos para GOCOOP',resp:'',status:'gray'},{ent:'Capacitações técnicas registradas',resp:'',status:'gray'}],healthChecks:[],planoAcao:[]},ELITECOOP:{infos:{projeto:"ELITECOOP",objetivo:"",publico:"Agrônomos influentes das cooperativas",data:"",local:"",status:"gray"},fases:[{fase:"1. Planejamento",obj:"",status:"gray"},{fase:"2. Preparação",obj:"",status:"gray"},{fase:"3. Execução",obj:"",status:"gray"},{fase:"4. Pós-evento",obj:"",status:"gray"}],entregaveis:[{coop:'LAR',ent:'Validação de tema',resp:'',status:'gray'},{coop:'LAR',ent:'Início RSVP',resp:'',status:'gray'},{coop:'LAR',ent:'Recebimento do tema de projeto aplicado',resp:'',status:'gray'},{coop:'LAR',ent:'Recebimento do projeto final',resp:'',status:'gray'},{coop:'C.VALE',ent:'Validação de tema',resp:'',status:'gray'},{coop:'C.VALE',ent:'Início RSVP',resp:'',status:'gray'},{coop:'C.VALE',ent:'Recebimento do tema de projeto aplicado',resp:'',status:'gray'},{coop:'C.VALE',ent:'Recebimento do projeto final',resp:'',status:'gray'},{coop:'CAMDA',ent:'Validação de tema',resp:'',status:'gray'},{coop:'CAMDA',ent:'Início RSVP',resp:'',status:'gray'},{coop:'CAMDA',ent:'Recebimento do tema de projeto aplicado',resp:'',status:'gray'},{coop:'CAMDA',ent:'Recebimento do projeto final',resp:'',status:'gray'},{coop:'COAMO',ent:'Validação de tema',resp:'',status:'gray'},{coop:'COAMO',ent:'Início RSVP',resp:'',status:'gray'},{coop:'COAMO',ent:'Recebimento do tema de projeto aplicado',resp:'',status:'gray'},{coop:'COAMO',ent:'Recebimento do projeto final',resp:'',status:'gray'},{coop:'COCAMAR',ent:'Validação de tema',resp:'',status:'gray'},{coop:'COCAMAR',ent:'Início RSVP',resp:'',status:'gray'},{coop:'COCAMAR',ent:'Recebimento do tema de projeto aplicado',resp:'',status:'gray'},{coop:'COCAMAR',ent:'Recebimento do projeto final',resp:'',status:'gray'},{coop:'COMIGO',ent:'Validação de tema',resp:'',status:'gray'},{coop:'COMIGO',ent:'Início RSVP',resp:'',status:'gray'},{coop:'COMIGO',ent:'Recebimento do tema de projeto aplicado',resp:'',status:'gray'},{coop:'COMIGO',ent:'Recebimento do projeto final',resp:'',status:'gray'},{coop:'COOPERCITRUS',ent:'Validação de tema',resp:'',status:'gray'},{coop:'COOPERCITRUS',ent:'Início RSVP',resp:'',status:'gray'},{coop:'COOPERCITRUS',ent:'Recebimento do tema de projeto aplicado',resp:'',status:'gray'},{coop:'COOPERCITRUS',ent:'Recebimento do projeto final',resp:'',status:'gray'},{coop:'COTRIJAL',ent:'Validação de tema',resp:'',status:'gray'},{coop:'COTRIJAL',ent:'Início RSVP',resp:'',status:'gray'},{coop:'COTRIJAL',ent:'Recebimento do tema de projeto aplicado',resp:'',status:'gray'},{coop:'COTRIJAL',ent:'Recebimento do projeto final',resp:'',status:'gray'},{coop:'COOPERALFA',ent:'Validação de tema',resp:'',status:'gray'},{coop:'COOPERALFA',ent:'Início RSVP',resp:'',status:'gray'},{coop:'COOPERALFA',ent:'Recebimento do tema de projeto aplicado',resp:'',status:'gray'},{coop:'COOPERALFA',ent:'Recebimento do projeto final',resp:'',status:'gray'},{coop:'COPACOL',ent:'Validação de tema',resp:'',status:'gray'},{coop:'COPACOL',ent:'Início RSVP',resp:'',status:'gray'},{coop:'COPACOL',ent:'Recebimento do tema de projeto aplicado',resp:'',status:'gray'},{coop:'COPACOL',ent:'Recebimento do projeto final',resp:'',status:'gray'},{coop:'COPLACANA',ent:'Validação de tema',resp:'',status:'gray'},{coop:'COPLACANA',ent:'Início RSVP',resp:'',status:'gray'},{coop:'COPLACANA',ent:'Recebimento do tema de projeto aplicado',resp:'',status:'gray'},{coop:'COPLACANA',ent:'Recebimento do projeto final',resp:'',status:'gray'},{coop:'INTEGRADA',ent:'Validação de tema',resp:'',status:'gray'},{coop:'INTEGRADA',ent:'Início RSVP',resp:'',status:'gray'},{coop:'INTEGRADA',ent:'Recebimento do tema de projeto aplicado',resp:'',status:'gray'},{coop:'INTEGRADA',ent:'Recebimento do projeto final',resp:'',status:'gray'}],healthChecks:[],planoAcao:[]},
    GOCOOP:{infos:{projeto:"GOCOOP",objetivo:"",publico:"Balconistas e equipes de execução",data:"",local:"",status:"gray"},fases:[{fase:"1. Planejamento",obj:"",status:"gray"},{fase:"2. Preparação",obj:"",status:"gray"},{fase:"3. Execução",obj:"",status:"gray"},{fase:"4. Pós-evento",obj:"",status:"gray"}],entregaveis:[{coop:'COCAMAR',ent:'Data definida',resp:'',status:'gray'},{coop:'COCAMAR',ent:'Reunião com KAM',resp:'',status:'gray'},{coop:'COCAMAR',ent:'Reunião com Coop',resp:'',status:'gray'},{coop:'COCAMAR',ent:'Lista de participantes validada',resp:'',status:'gray'},{coop:'COCAMAR',ent:'Treinamento executado',resp:'',status:'gray'},{coop:'COCAMAR',ent:'Captura de NPS',resp:'',status:'gray'},{coop:'COMIGO',ent:'Data definida',resp:'',status:'gray'},{coop:'COMIGO',ent:'Reunião com KAM',resp:'',status:'gray'},{coop:'COMIGO',ent:'Reunião com Coop',resp:'',status:'gray'},{coop:'COMIGO',ent:'Lista de participantes validada',resp:'',status:'gray'},{coop:'COMIGO',ent:'Treinamento executado',resp:'',status:'gray'},{coop:'COMIGO',ent:'Captura de NPS',resp:'',status:'gray'},{coop:'INTEGRADA',ent:'Data definida',resp:'',status:'gray'},{coop:'INTEGRADA',ent:'Reunião com KAM',resp:'',status:'gray'},{coop:'INTEGRADA',ent:'Reunião com Coop',resp:'',status:'gray'},{coop:'INTEGRADA',ent:'Lista de participantes validada',resp:'',status:'gray'},{coop:'INTEGRADA',ent:'Treinamento executado',resp:'',status:'gray'},{coop:'INTEGRADA',ent:'Captura de NPS',resp:'',status:'gray'},{coop:'LAR',ent:'Data definida',resp:'',status:'gray'},{coop:'LAR',ent:'Reunião com KAM',resp:'',status:'gray'},{coop:'LAR',ent:'Reunião com Coop',resp:'',status:'gray'},{coop:'LAR',ent:'Lista de participantes validada',resp:'',status:'gray'},{coop:'LAR',ent:'Treinamento executado',resp:'',status:'gray'},{coop:'LAR',ent:'Captura de NPS',resp:'',status:'gray'},{coop:'COPLACANA',ent:'Data definida',resp:'',status:'gray'},{coop:'COPLACANA',ent:'Reunião com KAM',resp:'',status:'gray'},{coop:'COPLACANA',ent:'Reunião com Coop',resp:'',status:'gray'},{coop:'COPLACANA',ent:'Lista de participantes validada',resp:'',status:'gray'},{coop:'COPLACANA',ent:'Treinamento executado',resp:'',status:'gray'},{coop:'COPLACANA',ent:'Captura de NPS',resp:'',status:'gray'},{coop:'COTRIJAL',ent:'Data definida',resp:'',status:'gray'},{coop:'COTRIJAL',ent:'Reunião com KAM',resp:'',status:'gray'},{coop:'COTRIJAL',ent:'Reunião com Coop',resp:'',status:'gray'},{coop:'COTRIJAL',ent:'Lista de participantes validada',resp:'',status:'gray'},{coop:'COTRIJAL',ent:'Treinamento executado',resp:'',status:'gray'},{coop:'COTRIJAL',ent:'Captura de NPS',resp:'',status:'gray'},{coop:'COOPERMOTA',ent:'Data definida',resp:'',status:'gray'},{coop:'COOPERMOTA',ent:'Reunião com KAM',resp:'',status:'gray'},{coop:'COOPERMOTA',ent:'Reunião com Coop',resp:'',status:'gray'},{coop:'COOPERMOTA',ent:'Lista de participantes validada',resp:'',status:'gray'},{coop:'COOPERMOTA',ent:'Treinamento executado',resp:'',status:'gray'},{coop:'COOPERMOTA',ent:'Captura de NPS',resp:'',status:'gray'},{coop:'COPACOL',ent:'Data definida',resp:'',status:'gray'},{coop:'COPACOL',ent:'Reunião com KAM',resp:'',status:'gray'},{coop:'COPACOL',ent:'Reunião com Coop',resp:'',status:'gray'},{coop:'COPACOL',ent:'Lista de participantes validada',resp:'',status:'gray'},{coop:'COPACOL',ent:'Treinamento executado',resp:'',status:'gray'},{coop:'COPACOL',ent:'Captura de NPS',resp:'',status:'gray'},{coop:'C.VALE',ent:'Data definida',resp:'',status:'gray'},{coop:'C.VALE',ent:'Reunião com KAM',resp:'',status:'gray'},{coop:'C.VALE',ent:'Reunião com Coop',resp:'',status:'gray'},{coop:'C.VALE',ent:'Lista de participantes validada',resp:'',status:'gray'},{coop:'C.VALE',ent:'Treinamento executado',resp:'',status:'gray'},{coop:'C.VALE',ent:'Captura de NPS',resp:'',status:'gray'},{coop:'TRADIÇÃO',ent:'Data definida',resp:'',status:'gray'},{coop:'TRADIÇÃO',ent:'Reunião com KAM',resp:'',status:'gray'},{coop:'TRADIÇÃO',ent:'Reunião com Coop',resp:'',status:'gray'},{coop:'TRADIÇÃO',ent:'Lista de participantes validada',resp:'',status:'gray'},{coop:'TRADIÇÃO',ent:'Treinamento executado',resp:'',status:'gray'},{coop:'TRADIÇÃO',ent:'Captura de NPS',resp:'',status:'gray'}],healthChecks:[],planoAcao:[]},
  },
  // Cooperativas equipe
  percepcao:{planejado:"",realizado:"",obs:""},
  ritual_matrix:{"COMITÊ EXECUTIVO": {"Agosto": ["—", "—", "—", "—"], "Setembro": ["—", "—", "—", "—"], "Outubro": ["—", "—", "—", "—"], "Novembro": ["—", "—", "—", "—"], "Dezembro": ["—", "—", "—", "—"]}, "FÓRUNS TÁTICOS": {"Agosto": ["—", "—", "—", "—"], "Setembro": ["—", "—", "—", "—"], "Outubro": ["—", "—", "—", "—"], "Novembro": ["—", "—", "—", "—"], "Dezembro": ["—", "—", "—", "—"]}, "FÓRUNS DE EXECUÇÃO PMOs": {"Agosto": ["—", "—", "—", "—"], "Setembro": ["—", "—", "—", "—"], "Outubro": ["—", "—", "—", "—"], "Novembro": ["—", "—", "—", "—"], "Dezembro": ["—", "—", "—", "—"]}, "REUNIÃO COM KAMS/DMMs": {"Agosto": ["—", "—", "—", "—"], "Setembro": ["—", "—", "—", "—"], "Outubro": ["—", "—", "—", "—"], "Novembro": ["—", "—", "—", "—"], "Dezembro": ["—", "—", "—", "—"]}, "REUNIÕES COM RMLs": {"Agosto": ["—", "—", "—", "—"], "Setembro": ["—", "—", "—", "—"], "Outubro": ["—", "—", "—", "—"], "Novembro": ["—", "—", "—", "—"], "Dezembro": ["—", "—", "—", "—"]}},
  rituais:[
    {id:1,desc:'COMITÊ EXECUTIVO',detail:'Alinha a direção estratégica do programa, acompanha indicadores críticos, delibera sobre decisões de alto impacto e remove barreiras para garantir os resultados do projeto.',resp:'',mes:'',status:'gray'},
    {id:2,desc:'FÓRUNS TÁTICOS',detail:'Desdobram a estratégia em planos de ação, priorizam iniciativas, acompanham a evolução dos projetos e direcionam decisões táticas entre as áreas envolvidas.',resp:'',mes:'',status:'gray'},
    {id:3,desc:'FÓRUNS DE EXECUÇÃO (PMOs)',detail:'Coordenam a execução das iniciativas, acompanham cronogramas, responsáveis, entregas, riscos e pendências, garantindo a implementação das ações planejadas.',resp:'',mes:'',status:'gray'},
    {id:4,desc:'REUNIÕES COM KAMs/RSLs',detail:'Acompanham a evolução das cooperativas, monitoram a execução do PINC, atualizam o status do Programa ESCALA e definem ações para acelerar oportunidades e resolver desvios. (MindCoop: mensal • Demais cooperativas: bimestral • Reuniões extraordinárias quando necessário.)',resp:'',mes:'',status:'gray'}
  ],
  govCoops:[],
  relac:[],
  pac:[],
  temas:[],
  pincGantt:{
    fin:[
      {n:'Meta financeira (PO)',s:0,e:1,st:'gray',dash:true},
      {n:'Cascateamento PO',s:1,e:2.5,st:'gray'},
      {n:'SICP',s:3.25,e:4.25,st:'gray'},
      {n:'SOMOS',s:3.25,e:4.25,st:'gray'},
      {n:'Campanha Comercial Verão',s:1.25,e:4.25,st:'gray'},
      {n:'Reunião de negócios',s:2,e:11,st:'gray'},
      {n:'Campanha devolução CP',s:3,e:6.5,st:'gray'},
      {n:'Crop Plan',s:3.25,e:4,st:'gray'},
      {n:'Campanha Comercial Safrinha',s:8.5,e:10.75,st:'gray'},
      {n:'Crop Plan',s:9.25,e:10,st:'gray'}
    ],
    est:[
      {n:'Plano Estratégico',s:1,e:2,st:'gray',dash:true},
      {n:'Plano Tático RSL e DSM',s:1.25,e:4.25,st:'gray'},
      {n:'PAM',s:0,e:0.75,st:'gray'},
      {n:'Sessões TP',s:0,e:0.75,st:'gray'},
      {n:'PINC Canal',s:1,e:2,st:'gray'},
      {n:'PINC Cliente',s:3.5,e:4.5,st:'gray'},
      {n:'Sessão FFE',s:6,e:7,st:'gray'},
      {n:'Sessão FFE',s:8.5,e:9.5,st:'gray'}
    ],
    cap:[
      {n:'Contratos ERC',s:2.75,e:3.75,st:'gray',dash:true},
      {n:'Jornada Treinamento ERC',s:3.5,e:5.25,st:'gray'},
      {n:'Forum Posic Verão',s:3.5,e:5.25,st:'gray'},
      {n:'Geração de demanda Verão',s:3.5,e:6.25,st:'gray'},
      {n:'Forum Posic Safrinha',s:8.5,e:10,st:'gray'},
      {n:'Geração de demanda Safrinha',s:9.5,e:12,st:'gray'},
      {n:'Tour Influenciadores',s:7.5,e:10,st:'gray'},
      {n:'Feiras e Eventos',s:0.75,e:9.5,st:'gray'}
    ]
  },
  pinc:[{coop:'COTRIJAL',status:'gray',detalhe:''},{coop:'COAMO',status:'gray',detalhe:''},{coop:'CVALE',status:'gray',detalhe:''},{coop:'LAR',status:'gray',detalhe:''},{coop:'COCAMAR',status:'gray',detalhe:''},{coop:'INTEGRADA',status:'gray',detalhe:''},{coop:'COMIGO',status:'gray',detalhe:''},{coop:'COOPERMOTA',status:'gray',detalhe:''},{coop:'COOPERCITRUS',status:'gray',detalhe:''},{coop:'COPACOL',status:'gray',detalhe:''},{coop:'COOPERALFA',status:'gray',detalhe:''},{coop:'CAMDA',status:'gray',detalhe:''},{coop:'COPLACANA',status:'gray',detalhe:''},{coop:'COPERCANA',status:'gray',detalhe:''},{coop:'CAPAL',status:'gray',detalhe:''},{coop:'Cotrisul',status:'gray',detalhe:''},{coop:'Copercampos',status:'gray',detalhe:''},{coop:'Cotricampo',status:'gray',detalhe:''},{coop:'Coopatrigo',status:'gray',detalhe:''},{coop:'Cocari',status:'gray',detalhe:''},{coop:'Coagril',status:'gray',detalhe:''},{coop:'Coopavel',status:'gray',detalhe:''},{coop:'Coasul',status:'gray',detalhe:''},{coop:'Copasul',status:'gray',detalhe:''},{coop:'Copérdia',status:'gray',detalhe:''},{coop:'Copagril',status:'gray',detalhe:''},{coop:'Coopertradição',status:'gray',detalhe:''},{coop:'Cotrijuc',status:'gray',detalhe:''},{coop:'Cotriel',status:'gray',detalhe:''},{coop:'Holambra',status:'gray',detalhe:''},{coop:'Cotribá',status:'gray',detalhe:''},{coop:'Agrária',status:'gray',detalhe:''},{coop:'Castrolanda',status:'gray',detalhe:''},{coop:'Frísia',status:'gray',detalhe:''},{coop:'Bom Jesus',status:'gray',detalhe:''},{coop:'Cotrisal',status:'gray',detalhe:''},{coop:'A1',status:'gray',detalhe:''},{coop:'Cooxupé',status:'gray',detalhe:''},{coop:'Coplana',status:'gray',detalhe:''}],
  marcos:[],
  coopsTeam:[
    {id:1,nome:'COTRIJAL',cat:'MindCoop',kam:'',rsl:'',rml:'',status:'green',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:2,nome:'COAMO',cat:'MindCoop',kam:'',rsl:'',rml:'',status:'green',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:3,nome:'CVALE',cat:'MindCoop',kam:'',rsl:'',rml:'',status:'green',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:4,nome:'LAR',cat:'MindCoop',kam:'',rsl:'',rml:'',status:'green',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:5,nome:'COCAMAR',cat:'MindCoop',kam:'',rsl:'',rml:'',status:'green',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:6,nome:'INTEGRADA',cat:'MindCoop',kam:'',rsl:'',rml:'',status:'green',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:7,nome:'COMIGO',cat:'MindCoop',kam:'',rsl:'',rml:'',status:'green',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:8,nome:'COOPERMOTA',cat:'MindCoop',kam:'',rsl:'',rml:'',status:'green',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:9,nome:'COOPERCITRUS',cat:'MindCoop',kam:'',rsl:'',rml:'',status:'green',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:10,nome:'COPACOL',cat:'MindCoop',kam:'',rsl:'',rml:'',status:'green',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:11,nome:'COOPERALFA',cat:'MindCoop',kam:'',rsl:'',rml:'',status:'green',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:12,nome:'CAMDA',cat:'MindCoop',kam:'',rsl:'',rml:'',status:'green',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:13,nome:'COPLACANA',cat:'MindCoop',kam:'',rsl:'',rml:'',status:'green',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:14,nome:'COPERCANA',cat:'MindCoop',kam:'',rsl:'',rml:'',status:'green',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:15,nome:'CAPAL',cat:'MindCoop',kam:'',rsl:'',rml:'',status:'green',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:16,nome:'Cotrisul',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:17,nome:'Copercampos',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:18,nome:'Cotricampo',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:19,nome:'Coopatrigo',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:20,nome:'Cocari',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:21,nome:'Coagril',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:22,nome:'Coopavel',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:23,nome:'Coasul',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:24,nome:'Copasul',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:25,nome:'Copérdia',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:26,nome:'Copagril',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:27,nome:'Coopertradição',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:28,nome:'Cotrijuc',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:29,nome:'Cotriel',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:30,nome:'Holambra',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:31,nome:'Cotribá',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:32,nome:'Agrária',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:33,nome:'Castrolanda',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:34,nome:'Frísia',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:35,nome:'Bom Jesus',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:36,nome:'Cotrisal',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:37,nome:'A1',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:38,nome:'Cooxupé',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}},
    {id:39,nome:'Coplana',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}}
  ],
  oportunidades:[
    {id:1,coop:'',opp:'',cat:'Comercial',prio:'Alta',status:'gray'},
  ],
  fotos:[],
  nxId:100,
};

let D={};
const SC=['gray','green','amber','red','blue'];
const SL={green:'Concluído',amber:'Em prep.',red:'Atrasado',blue:'Em progresso',gray:'—'};
const MONTHS=['julho','agosto','setembro','outubro','novembro','dezembro'];

// ═══════════ STATUS TAG ═══════════
function tagHTML(status,extra=''){
  const cls={'green':'tag-green','amber':'tag-amber','red':'tag-red','blue':'tag-blue','gray':'tag-gray','teal':'tag-teal','coral':'tag-coral'};
  return `<span class="tag ${cls[status]||'tag-gray'}" ${extra}>${SL[status]||status}</span>`;
}
function cycleTag(el){
  const cur=el.textContent.trim();
  const curKey=Object.entries(SL).find(([k,v])=>v===cur);
  const k=curKey?curKey[0]:'gray';
  const idx=SC.indexOf(k);
  const next=SC[(idx+1)%SC.length];
  el.className='tag '+{'green':'tag-green','amber':'tag-amber','red':'tag-red','blue':'tag-blue','gray':'tag-gray'}[next];
  el.textContent=SL[next];
  saveD(true);
}

// ═══════════ INIT ═══════════

// applyReadonly handled by _applyPerms

function init(){
  // Auth handled by Supabase
  // Version check - clear if old data doesn't have new fields
  const _ver = localStorage.getItem('escala_data_ver');
  if(_ver !== '9') {
    localStorage.removeItem('escala_v2');
    localStorage.setItem('escala_data_ver', '9');
  }
  const s=localStorage.getItem('escala_v2');
  if(s){
    try{
      D=JSON.parse(s);
      if(!D||typeof D!=='object') throw new Error('bad');
      if(!D.kpis||!Array.isArray(D.kpis)) D.kpis=JSON.parse(JSON.stringify(D0.kpis));
      if(!D.projStatus||!Array.isArray(D.projStatus)) D.projStatus=JSON.parse(JSON.stringify(D0.projStatus));
      if(!D.kpiAreas||!Array.isArray(D.kpiAreas)) D.kpiAreas=JSON.parse(JSON.stringify(D0.kpiAreas));
      if(!D.encontros||typeof D.encontros!=='object') D.encontros=JSON.parse(JSON.stringify(D0.encontros));
      if(!D.coopsTeam||!Array.isArray(D.coopsTeam)) D.coopsTeam=JSON.parse(JSON.stringify(D0.coopsTeam));
      if(!D.coopsData||!Array.isArray(D.coopsData)) D.coopsData=JSON.parse(JSON.stringify(D0.coopsData));
      if(!D.fotos||!Array.isArray(D.fotos)) D.fotos=[];
      if(!D.oportunidades||!Array.isArray(D.oportunidades)) D.oportunidades=JSON.parse(JSON.stringify(D0.oportunidades||[]));
      ['MINDCOOP','INFOCOOP','INTECOOP','ELITECOOP','GOCOOP'].forEach(k=>{
        if(!D.encontros[k]) D.encontros[k]=JSON.parse(JSON.stringify(D0.encontros[k]||D0.encontros.MINDCOOP));
      });
      D0.coopsData.forEach((d0c,i)=>{
        if(!D.coopsData[i]) return;
        const dc=D.coopsData[i];
        if(!dc.sellin||dc.sellin==='—'||dc.sellin==='') dc.sellin=d0c.sellin;
        if(!dc.sellout||dc.sellout==='—'||dc.sellout==='') dc.sellout=d0c.sellout;
        if(!dc.meta||dc.meta==='—'||dc.meta==='') dc.meta=d0c.meta;
        if(!dc.ating||dc.ating==='—'||dc.ating==='') dc.ating=d0c.ating;
      });
    }catch(e){
      console.warn('Reset localStorage:',e);
      D=JSON.parse(JSON.stringify(D0));
      localStorage.removeItem('escala_v2');
    }
  }
  else D=JSON.parse(JSON.stringify(D0));
  // ── Migrate new fields ──
  if(!D.rituais||!Array.isArray(D.rituais)||!D.rituais.length) D.rituais=JSON.parse(JSON.stringify(D0.rituais||[]));
  // Add participantes/periodicidade to existing rituais
  if(D.rituais) D.rituais.forEach(r=>{ if(!r.participantes) r.participantes=''; if(!r.periodicidade) r.periodicidade=''; });
  if(!D.ritual_matrix) D.ritual_matrix=JSON.parse(JSON.stringify(D0.ritual_matrix||{}));
  if(!D.govCoops||!Array.isArray(D.govCoops)) D.govCoops=[];
  if(!D.relac||!Array.isArray(D.relac)) D.relac=[];
  if(!D.pac||!Array.isArray(D.pac)) D.pac=[];
  if(!D.temas||!Array.isArray(D.temas)) D.temas=[];
  if(!D.pinc||!Array.isArray(D.pinc)||!D.pinc.length) D.pinc=JSON.parse(JSON.stringify(D0.pinc||[]));
  if(!D.pincGantt||typeof D.pincGantt!=='object'||!Array.isArray(D.pincGantt.fin)) D.pincGantt=JSON.parse(JSON.stringify(D0.pincGantt));
  if(!D.marcos||!Array.isArray(D.marcos)) D.marcos=[];
  if(!D.percepcao) D.percepcao={planejado:'',realizado:'',obs:''};
  if(!D.oportunidades||!Array.isArray(D.oportunidades)) D.oportunidades=[];
  // fill nulls or invalid encontros from D0
    // Garantir que cada encontro existe e usa seus próprios dados padrão
    ['MINDCOOP','INFOCOOP','INTECOOP','ELITECOOP','GOCOOP'].forEach(k=>{
      if(!D.encontros[k] || typeof D.encontros[k] !== 'object') {
        D.encontros[k] = JSON.parse(JSON.stringify(D0.encontros[k] || D0.encontros.MINDCOOP));
      }
      // Garantir subchaves obrigatórias existam sem apagar dados do usuário
      const d0k = D0.encontros[k] || D0.encontros.MINDCOOP;
      if(!D.encontros[k].infos) D.encontros[k].infos = JSON.parse(JSON.stringify(d0k.infos));
      if(!D.encontros[k].fases) D.encontros[k].fases = JSON.parse(JSON.stringify(d0k.fases||[]));
      if(!D.encontros[k].entregaveis) D.encontros[k].entregaveis = JSON.parse(JSON.stringify(d0k.entregaveis||[]));
      if(!D.encontros[k].decisoes) D.encontros[k].decisoes = JSON.parse(JSON.stringify(d0k.decisoes||[]));
      if(!D.encontros[k].acoes) D.encontros[k].acoes = JSON.parse(JSON.stringify(d0k.acoes||[]));
      if(!D.encontros[k].aprendizados) D.encontros[k].aprendizados = JSON.parse(JSON.stringify(d0k.aprendizados||[]));
      if(!D.encontros[k].healthChecks) D.encontros[k].healthChecks = JSON.parse(JSON.stringify(d0k.healthChecks||[]));
      // entregaveis com campo coop (ELITECOOP/GOCOOP)
      if(D0.encontros[k] && D0.encontros[k].entregaveis && D0.encontros[k].entregaveis.length > 0 && D0.encontros[k].entregaveis[0].coop) {
        if(!D.encontros[k].entregaveis || !D.encontros[k].entregaveis.length || !D.encontros[k].entregaveis[0].coop) {
          D.encontros[k].entregaveis = JSON.parse(JSON.stringify(D0.encontros[k].entregaveis));
        }
      }
      if(!D.encontros[k].planoAcao) D.encontros[k].planoAcao = [];
      if(k === 'INFOCOOP' && D0.encontros.INFOCOOP && D0.encontros.INFOCOOP.atuacaoCoops) {
        if(!D.encontros[k].atuacaoCoops || !D.encontros[k].atuacaoCoops.length) {
          D.encontros[k].atuacaoCoops = JSON.parse(JSON.stringify(D0.encontros.INFOCOOP.atuacaoCoops));
        }
      }
    });
  renderAll();
}
function cloneEncontro(nome){
  // Usa D0 (dados padrão) como base — nunca D (que tem dados do usuário)
  const base = D0.encontros[nome]
    ? JSON.parse(JSON.stringify(D0.encontros[nome]))
    : JSON.parse(JSON.stringify(D0.encontros.MINDCOOP));
  base.infos = base.infos || {};
  base.infos.projeto = nome;
  return base;
}

// ═══════════ RENDER ALL ═══════════
function renderAll(){
  try{_initLastSavedBadges();}catch(e){console.warn('badges',e);}
  try{renderTimeline();}catch(e){console.warn('renderTimeline',e);}
  try{renderProgCards();}catch(e){console.warn('renderProgCards',e);}
  try{renderDashboard();}catch(e){console.error('[renderAll] renderDashboard FAILED:',e.message,e.stack?.split('\n')[1]);}
  try{renderKpiAreas();}catch(e){console.warn('renderKpiAreas',e);}
  try{renderOnePage();}catch(e){console.warn('renderOnePage',e);}
  try{renderEncontros();}catch(e){console.warn('renderEncontros',e);}
  try{renderCoops();}catch(e){console.warn('renderCoops',e);}
  try{renderTimeInterno();}catch(e){console.warn('renderTimeInterno',e);}
  try{renderOpps();}catch(e){console.warn('renderOpps',e);}
  try{renderFotos();}catch(e){console.warn('renderFotos',e);}
  try{renderRituais();}catch(e){console.error('[renderAll] renderRituais FAILED:',e.message,e.stack?.split('\n')[1]);}
  try{renderGovCoops();}catch(e){console.warn('renderGovCoops',e);}
  try{renderTemas();}catch(e){console.warn('renderTemas',e);}
  try{renderRelac();}catch(e){console.warn('renderRelac',e);}
  try{renderPac();}catch(e){console.warn('renderPac',e);}
  try{renderPinc();}catch(e){console.error('[renderAll] renderPinc FAILED:',e.message,e.stack?.split('\n')[1]);}
  try{renderMarcos();}catch(e){console.warn('renderMarcos',e);}
  // Permissions handled by _applyPerms after auth
}

// ═══════════ TIMELINE ═══════════
const TL=[
  {y:'2020',txt:'Entrevistas com +22 cooperativas. Surge o Programa Personalizado. Foco em gerentes comerciais, técnicos e alta liderança. 83 RCs contratados.'},
  {y:'2021–2023',txt:'Implementação de MINDCOOP, INFOCOOP, INTECOOP, NEOCOOP (extinto) e ações internas. Em 2023: nova rodada de entrevistas → ESCALA 2.0'},
  {y:'2024',txt:'Nova onda. Foco em novos públicos ("ponta"), integração de negócios Corteva e reestruturação interna. Busca pelo parceiro número 1.'},
  {y:'2025–2026',txt:'Implementação dos programas, amadurecimento PINC.'},
  {y:'2027',txt:'Nova onda do ESCALA — priorização de iniciativas, foco "sniper". Continuação da busca pelo 1º lugar. (a desenvolver)'},
];
function renderTimeline(){
  const el=document.getElementById('timeline-items');
  if(!el) return;
  el.innerHTML=TL.map((t,i)=>`
    <div style="display:flex;gap:14px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.05)">
      <div style="min-width:90px;font-family:'Fenton',sans-serif;color:var(--teal);font-size:.85rem">${t.y}</div>
      <div style="font-size:.82rem;color:var(--g200);line-height:1.55">${t.txt}</div>
    </div>
  `).join('');
}

// ═══════════ PROG CARDS ═══════════
const PROGS=[
  {id:'pmind',icon:'🧠',nome:'MINDCOOP',b64:'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XUPIGV8vKirq/do8z08//fQqUY7Pkweh0TwPqNJTUFGOoKJcB+mp+QCQDwC3AOAQAAAolRTY2knBwVEJrVp7wKP76ZVUHdXh8SrPuXbt2tWTJ09+wvO8nmEYSRN5EHiappm7d+/GNeA9Hr/YhYWF6JNPPrn85ZdfvjRkyBDn8ePHjxowYMArnp6eQaYmFBL/v1arLbl48eKPO3bs+GbPnj23CwsLEVYWzW1NWbz0otfr4fvvv7/zww8/TBsyZMj8qVOnBg8cOHBWy5Ytexrrh6dZS+Xl5TmXL1/eceDAge0RERE30tLSeNznlXXLzB+ciT0jlpaWVidOnFiHEEI0TTOGxllGRsb9+Pj4cny+uQkYAMCXX375kVarrTD2XgmCwFMURVlZWVmbc7lDEAQ4fvz4BhcXl9a43U31XmdkZNyvr1sd94udnZ29MTljT1hhYWHWuXPnzLq8UF3WX3/99bcKhcLamJyxB0cmk1kQtdyMDKZn0vNQE3kgMKsVLVbeCoUCOnfurOzRo4e3v79/V29v7wAXF5d2KpXKRS6XW2OlqNVqS4uLizPS0tISb9++fenixYtXLly4kHr//n292LowpeBTc+iH6rEASqWS6tKli6pHjx5t/f39u3l7e3dxcnJqY2Vl5SyVSh9XrVSr1UUFBQXJycnJ127evHn58uXL1y9fvpwtjtKuTyltAgICAkIQak0eRDsuBKHeVRxxwE1zQWMqE6wga7IkaZoGCwsLkMvlFFXVSVqtFpWXl6Pqz4lJB16ffNYIk6F+YBgGFAoFJZPJqCqCgCoqKpBara6RfJkzzqAhxnFDP1ttc6dVLwrWFM/wLLzXzU3OdZk/CWEmBIHgGfQqiKsVGlNw4pLXja0MG6sfsPVvSHExDPP4WOItICAgIASB4F9DGgxZfP/2fiDbtQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAieWVCkC0zsKIoChmFAEAQQBKFO16BpGmiaBp7nASFUq3NZlq31vetzv7reE/fT04CfASH0+NOQ8qJpGiiKeqINuE8QQiAIgtmeobHvV5Osxfep6ZnMcZ+aIJZtQ8qXgICAoNmShcY453kHwzDAMIzZ+6YmglLfY5vL/UwlZLVV7uYGy7Jk3BMQEA/C800GEEJgb29PDRkypOX9+/fzr1y5Uo6/N3ViFgQBvL29Jd27d3c9fvx4amFhITL1GjKZDIKDgz2SkpJyr127pjZ2Hv7d39/fokOHDo6HDx9OLSsrQ2Ir3ti5FhYWMHbsWI/ExMTsmzdvak29Z6tWrdiePXu68Twv0NW0kVqt1hUWFqpTU1PLU1NTOZ7nn1Cc4v+vj7LG1+nfv7/N2LFj+/fs2XOEi4uLD03TbH5+/l9xcXHHIiIijh09ejS3PvemKOqxdU7TNAwdOtRh9OjRg7p16zbUycmpDUVRdE5Ozr24uLjfoqOjT8bExOTq9frHln59LWw8rgAAPDw82HHjxnUaOHDgyHbt2gVZWlraazSakgcPHlw8derUoYiIiPj79+/r69peLN+goCArDw8PW7F8EUKIoihKr9dzxcXFmkePHpU+fPhQX/1cAgICgufOygUAGDRokB1CCOXm5t5xcHCgTbXGsIXHsizExcX9ihBCffv2tTbFmsTWl6OjI40QQhs3bpyALTNjlhsAwIYNG8YhhNCuXbsWmHIeVjoAAC1btmQQQmjNmjWDa3PPV1991ReZgIKCgocHDhx4NyQkxA2fW1/rGj/70KFD7a9du7YX3ysxMTHi2LFj/z1y5MiHFy9e/EGj0RQjhNDt27cPjxgxwrEu9xZbxhMnTmxx//79UwghxPO8PiEhYc/Ro0dXHz16dHV8fPwujuO0CCGUnJx8Ydq0aV7m8Crh53VycqK/+eabUNzWzMzMa6dPn/4iOjp65cmTJz9JSUmJxb/t2LFjnpeXF1uX9uLjo6OjV5oi34cPH/6xePHiHjKZjHjQCAgInm+CMGLECEc80X/11VdTTJ1ksfJ78803/RFCiOM47dChQ+1rQxAcHBxojuO0H3300Uu1UdYff/zxCJ7n9Qgh9Nprr/mack+sZN3d3RmO47TLly9/oTb3nDFjhjfHcdpJkya1DAgIsOjatasiICDAIiAgwCIwMNBy+PDhDgsWLAjYu3fvO6WlpVkIIZSUlHR05MiRTnUlCWI3+6pVq/pjRTlnzpwOjo6O/2BxVlZW1JQpUzywUsdtNNX9jtf2WZaFLVu2TEcIoTt37hyfNm2al42NzT80obW1NTVp0qSWN2/ejEIIoZ9++ulVmUz22ANR1zHZp08fVVZWViJCCG3ZsmV6QECAxdOO79ChgwyTxbKysuy69DU+9sCBA+/m5eXd9ff3twgICLDo0qWLBZZvQECARZ8+fVRvvPGG34ULF7YghNDZs2c329raUjgWgoCAgOC5AVZ8U6ZM8RAEgb9x40Ykz/N6f39/C2OTLPYyODk50SUlJRnx8fG7BEHgJ0yY0MIUpSsmCAghtG7dupG1UdafffbZWK1WW5qSkhKr0WiKfX19ZaY8MyYICCH0wQcf9K3NPV9++eU2CCHk4+MjNda3SqWSmjlzZrv8/Pz74nvV1bpdu3btUOwxUalUVHUCwTDMEyRAKpXCDz/88ApCCC1evLiHqaQNx03s2bNnIUIIffTRRy+J+6em+9E0Df/3f/83ACGEoqKi3q9LDAa+XlBQkJVWqy1NT0+/2rt3b6vq/YE/Yvj5+clv3boVjRBCo0ePdq5NX+PjoqKi3s/Ozr5pyjkLFy7sihBCO3fufNMcHiICAgKCZkkQZs2a5SMIAj9o0CA7tVpdeObMmU3GJj3826+//vpGRUVFflBQkBVCCM2YMcO7MQjCxo0bJ1RUVOQPHDjQVq/Xq+Pi4n6VSCQGlZK5CELXrl0VNE0Dvh9N04+VFsuyT/Sbs7Mzffr06S8QQmjhwoVd66K4goODXRFCaM+ePQvFz/S0dlIU9UR7Dh06tOLXX399A3sGTLnf6tWrByGE0LJly4LE1zR0P/wbVpyffvrpmNq0VUw4MzMzr2VlZSV6enqyuK01WelYDgAAdnZ2VFJS0tGysrJsb29viSltrk4QcnJybovlKSZD1eV77Nix/yKEUNu2bSW18dIQEBAQPDMEYf78+f4IISSTyeC9997rjRBC2BPwtAkef9erVy8lQgjNnTu3o4WFBeB/NwZB+Pzzz4NRVXTY3LlzOyKE0Pr160cZuoa5CAJ2dxtSfhRFPVZcKpWKunXrVrRer1d37NhRZoriwi56S0tLSE9Pv5qenn7VysqKMlXp4fNNVVqYWPn5+ckRQig6OnqlISJiqL3Y+xAYGGhpKknAx/z888+vIYRQv379rAHg8TWNAR/XsWNHGc/z+piYmI9NVdrVCUL1Mfq08UDTNEybNs1LEATeVFJMQEBA8MwRhOXLl7+AEEI2NjaUTCaDtLS0K6mpqZcUCsVTLTesTBITEyPu3LlzHKAyoAwhhJYsWdKzMQmCnZ0dhS1lhBAaNmyYQ01KqTEJQnXF1a9fP2uEENq7d+87ppwr9u4ghNDs2bPb11UJmaLgxevwPM/rsQVeG9c5HistW7ZkdDpd+bFjx/5ripLGv/v4+EgRQmj37t1v1aWtuK9xTEJQUJCVKX1dW4IgjpMQx3kQgkBA8OyA+PtMhFKpVOIJUavVwsKFC4NbtGjR/d133x2At7mJJ0ee52Hu3LmdOnXqFDx79uxJAAA8zyMAACsrK2VjPz9FUfDKK6+syczMTNi+fftJR0dHuvpzNxX0ej0wDANnzpwp/vPPP78NDg5e4+zsTPM8b/D58Ba/2bNnv1teXp6zZ8+eOxRF1XkLnzEFzfM8uLq60mPHjl1z9OjRNQ8ePNDj700F7vPU1FQ+MjLy/WHDhi3z9PRkjckC//bKK68MBgD49NNPt9Rl+yDP80BRFGzcuDEaISTMnTs3tEEnGJqmEEKCYI4sTQQEBIQgNEdYWVlZa7XaErVajSiKgr1796adPn16w9KlS6PEEzze425vb0998sknf+zZs2fhmTNniimKgoqKCsRxnMbKykrVmM+OM+vl5uYK06dPH+Ti4tL5+++/fw8h1GzWhLG7f8eOHZtZlpX37t3b2ZBljXMAODo60oGBgeFnz579rri4GNVFaZpyPH6OAQMGeNA0ze7YsePHuu5CELV1F0JIGDJkiLcxLwImIcHBwQuysrKux8XFleOsibUdCwAADx8+1CcmJh4YOXLkEplM9pg4mJEYAEVR4OPj40pRFP3w4cN0MosQEBCC8LwSBButVluq1z/O/wJvvvnme1KpVPn555+/g1Pb4sQ5n3766UyWZeXz58/fiEmDTqcDrVZbolQqVU3RBolEAidOnChYu3bt0DFjxqyZN29eZ47jmoXbFycOio+P/wsAoFOnTt7GlCwAQLt27ZQ0TbOxsbEnahNPUFf06NGjCwDA1atXM+qioMWE7dq1a7kURdE9e/bsaYqHw97enmrbtu3g2NjYnTzPA8MwdUpAhN3/Z8+e3Wtra9vKw8NDIu5TU6/BsuxTPxKJBPR6PSCEYM6cOct4ntedO3cuXUxQCAgICEF4ngiCrUajKcZ1DViWhRs3bmg2b948edy4cR8NGDDAlud5EAQBevToYTljxowtS5Ys6ZOdnS1gpcXzPKjV6iIrKyvbpmgDVioffPBBzJ9//vnthg0bLvv5+ck5jmvyLWhY0WVlZWkAANzc3FqYQhCcnZ2VAACpqamZDZmtD1/by8urPUJIyM7O1pvqfajpWrm5ubxOpyvz8vLqaOhaooRZEoqi6AcPHtysrUJ/Gh4+fPgAISS4uroqTL0eRVE0QkjgeR44jgO9Xg8cxz3x0ev1IJfL4auvvpoSGBgYvmHDhgnp6ek8rmVCQEDwbIBEDJk4mSuVSlu1Wl0ktgJpmoYPPvhg79SpU9du2rTpRz8/vzGCIMCWLVu237lz59jGjRvjq6e11Wg0xUql0qauysUcbREEAcLCwuYlJiaO27Fjx87AwMBxHMc1i0Q2Wq1WAABQKBQmxWlIJBIWAKCiokLTGM8nk8kUHMdpxJ6kukKj0aCKiop8pVJpZ8p4kEqlNACAWq2uMEdbiouLSymKoi0sLCSmnsNxnE4ul1sHBwe7UpV4PLZomqYcHR2tAwICuowfP36Fg4NDu59++unV995775A4LTQBAQEhCM8VQbC0tLQpLy/Px5aWIAjAMAwUFhaipUuXjvruu+9uh4aGttbr9Vznzp0n9O3b1xofg5cfEELYg+DQVO3Bz/To0SNu1qxZ3Xfu3Jm8fv36CfPnz9+Hqzc2JaRSKVWl8MtMOV6v13NVhELeGM+n0+k0DMNITd1aaAhyuZyysLCwLS8vLzLFgtfr9ajqPAtztEWlUikRQoJGo+Fq036VSuUeERGRUdMxarW64MyZM99s3rx546FDh7Jx20g9BgICQhCeSyiVSvuKiooi8WSHo+y3bt2a9Prrr+/esGHDb1KpVLl79+63zp07VyL2HuBzKioqiiwtLW2bwoOAwfM8sCwLu3btShk0aNCMN998c29MTIzLoUOHsiUSSZOQBKwcXVxcLAAA0tPTU00hbtnZ2WUAAB4eHm4URd1t6OdLSUm5S9M06+TkJCksLNTVRfHhcxwcHBiZTKZKTk6+ZYgg4Ovn5eXpEUJC69atOwBAdH3GD0VR0KpVq9YURdFZWVkVpo5HuVxuWVhY+Khv374dsAdBfF5JSQmXk5PDaTSaJ/qNkAMCAkIQnmcPgn1xcfE/JnK8re7NN9+cc/bs2WKtVlvy1ltvfYkDE6ujoqKiyM7OriW25psKOB5h/vz5P/Xt23fq9u3bz/v6+rbLzc1tkofCAZ5dunTxBABITEx8YIpc7t+/X4YQEoKCgoYjhE43dJ9evnz5KgBAQECAy927d1Pq4jrHY6Nz584OCCHh8uXLF421laIoyMvLEx49enS2Z8+ekxmGWV/X6pc4jqZPnz4hJSUl6cnJyTpTlXhV1Ub1zZs3tcbaWJctpwQEBM0HJEjRRIKgUChsy8vLC5822VIUBefOnSt5++23u02bNq1DVlaWUJ0AYFJRXl5eqFAobKt/31TtUqvVMGXKlBA7Ozvv7du3/19T5UbAuximTJnyGsdxmtjY2BxDJEoQBKAoCrKzs4WrV6/u6NOnz2w7OzsKK9O6eAcMAT/H77///hcAwLRp08LrWrJZ1NYJFEXRMTEx94wRRrxUdfDgwc/d3d27BQQEKGqbpAkrbgAAT09P1t/ff+KxY8c+0Wg0tdoRQVHU42qmOMWy+IOX4Ag5ICAgBOG5BVYcDMOAQqGwLy8vLzZk4X3++edXDxw4kIEnyKehvLy8SKFQ2DWH9uGlhoSEBPWCBQsChg8f/v6iRYu6C4IAEomk0ZgLy7LA8zz06NHDsm/fvm8cOHDgvZycHMFY1DtWjtu2bVtnYWFhFxYW1hkhVGulaQqpwLEbqampfHR09MqRI0eu8PLyYmtLqLDHwd3dnRk/fvz/Tp069SlOuGSorfi3rVu3HgMAePvtt/9TFzKEvRfz588fQdM0+9VXX22vi8wEQajxQ5YTCAgI/jUEQS6Xg1arLf3xxx/nYIVWk6KrSTnhc3799dc3ysvLc3GQm6EJ3lyplnEJYkN58wEADh48uBwhhDp27ChTqVRUY9RiwOfJ5XKIj4/fpdfr1R06dKhVLQYbGxsqJyfndlZWVqKdnR1lqmWNr2+qksXX7NKliwVCCEVERCwFqMwvUdtaDDt27JiHEEK9evVSGuun6vffvXv3W+I0yaYGTOK+9vHxker1evUff/yxUdwPptzb1FTLBAQEBP8KgoCV5aZNmyaZoiwNTc7fffddOM/zeisrK6q5EATsGra3t6eys7Nv3rhxI7Jly5aMIAj8ypUrX6wLQRBXcxS7n8UJdjCsra2p6OjolQgh9NZbb3UxVWGKjwsLC2uFEEIHDx5cLn4mU6o5RkdHr/zpp59erU01x3Xr1o1ECKF33nknEPehofuJSz+/8cYbfgghtHnz5sm1aSvuQ1dXVzo3N/dOWlraFXd3dwaTBENZJzGJsLa2pq5fv75fo9EUt2/fXlrXao6EIBAQEPyrgSdOZ2fnWiloQwr0s88+G4sQQg4ODnRzIQhiBTB48GA7XKmQ4zjtqlWr+teFILRv315qrE8kEglMnDixRWpq6iWxt6K2SwT4eFyAaM+ePQtxm8UKWqykAQAUCsXjyohLly7tZcq9xco+MjLyPYQQwiRKPG6edj8AgKVLl/ZCCKHjx4+vNVZ621Bb+/fvb8NxnPbRo0dnu3btqqh+DP6I0a5dO2l8fPwuY5VICUEgICAgMJEgeHh4sDzP61esWNGvvgThww8/HMjzvN7NzY0R38MYQeB5Xv/xxx+PqI2y/uyzz8byPK83hSCIz1u7du1QhBDieV6/bNmyoNrcc8aMGd48z+vHjRvn5uvrK/Pz85N37NhR5uvrK+vcubO8X79+1jNnzmy3bdu2mdnZ2TcRQujhw4d/jB492rku5ECstAEAPvnkk9EIIZSdnX3z1Vdf9XV0dPxHByuVSiosLKxVcnLyBbGCNzWWAC9tSKVS+PHHH+cghFBiYmLE+PHj3bFnSAxLS0sYO3asS1xc3K8IIbRz5843FQoF1LWWA27rgAEDbPPy8u5i75avr6/sace3adNGgmWq0WiKx40b51bbvsbHRkZGvpeVlZVICAIBAQEhCADQoUMHmdjKrA9BeP/99/sghFC7du2kphIER0dHGiGENmzYMK42ynrz5s2TEULI1tbWJIIgtrRPnDixHiGETCVF+PfZs2e3RyagoKDgYWRk5HsTJ05sIZVKoa7kQPzsuC/HjBnjcuPGjUiEENLr9eq4uLhfIyMj39u3b9+iM2fObCopKclACKFbt25Fjxo1qk7ERNyXkydP9njw4MFphBAqKyvLjo2N3XrgwIF39+/fv/jChQtbSktLsxBCKDk5+UJYWFgrcyhX/LwuLi70li1bpuN+ffTo0dljx479d8+ePQsPHz686u7du7/h33bt2rWgdevWkvp4aY4fP762rKwsmxAEAoLnH+TtNqIEEEJgY2NDvfTSSx5XrlzJuHfvnr4+yXF8fHykXbt2dT1y5EiKqdUHZTIZhISEeN6+fTsnISFBbewc/HvXrl0VPj4+jvv370/W6XQmkyJBEMDZ2ZkeOHBgy2vXrmXdunVLa+o9W7duLenZs6cbQghR1bQHQgjl5+eXJycnlz569EgnTldcPSV1fRQnzvEwfPhwp4kTJ47p1avXeHd39y40TTO5ubl3L126tG/nzp27o6KiMvCxdbm3uDiXRCKBUaNGuU2YMGFcjx49xrm6uvoBAGRnZ9++dOnS/gMHDkRERUWlabXaxzsJ6hvtL37uNm3aSCZPntxj+PDh03x8fAZaWVm5VFRU5N+7d++PmJiYHbt27TqHcxfUpb1Yvv369bN2cHCwPHDgQAaZIQgInm/8PxotxzteQGw0AAAAAElFTkSuQmCC',hex:'#2ABFBF',col:'teal',desc:'Conselho para alta liderança. Análise de mercado, desafios e oportunidades. "MIND" = mente.'},
  {id:'pinfo',icon:'📡',nome:'INFOCOOP',b64:'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',hex:'#C850C0',col:'blue',desc:'Encontro comercial com inteligência de mercado via Kynetec. "INFO" = informação.'},
  {id:'pinte',icon:'🔬',nome:'INTECOOP',b64:'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kCQJQkND0aJFi26z2+2VH3300Tr2/bYIDlOwJ06csG/YsOFvM2bMeHjUqFER7Nk6e3+2fWUymWDZsmUP1NfXn9y6devurlr5CCGMMUatET5JkkCSpObMjRo50KBBIwgaegFM4a1fv77spZdeunXq1Km/u/nmm9NEUYSGhoZyQRD0l4IA7iiTYleyKqq3YM6ePSuvW7fupWHDhi2+6667Ful0uuao/vYKV6mt2ujoaBwUFIQ6e+/XX3/97wAAd9555++Cg4MRS/7U3vfVBAAhBHfdddcVEydOvOubb7758+7du+0tiUBLyLIMCCGorq4mr7/++vuNjY2ld9xxxx2JiYm8x+OBjhQ8a7Msy4Axhuuvv37guHHjbv/www8f3L59ezV7r6sktrtJrzRo0KARBA3d8CQghMDr9cKnn366f926dY8///zzO6+77rpESinzIlwS7ejsq7PXY3juuee++fHHH9++9dZb37zxxhsHduW5UlNTdd9+++07N954YyorpNRafzLF7s9TUfn222/fPmnSpHv/9re/Xd+SBLTnrUAIwdSpU0Pvv//+9/bv3//Ra6+9trqz7WXPtX//ftsHH3ywcv78+X9ZtWrVErY90lHfseebNm1a2Ouvv767sLBw4yeffLLFZrPR88kIqUGDBg0aWoG6muM999wztLGxsex3v/vdKIDOV3N8/fXXr62vry8aPHiw2J6SYUFtAACJiYl8VVVVbmFhYVZjY2PZ5s2bnwsJCemRao633HJLkizL3l//+tcDAXqmmmN+fv66Tz/99N7eKu/L2jt79uzwEydObLLb7VX33HPP0P9huq244adPnx564sSJTZRSumTJkj6snzvThyEhIejTTz+9l1JKP/zwwztiYmJwW+Osxu233z6wtra28PTp0zvnzJkT0ZUYArWHJTg4GK1evXoFpZR+/vnn90dHR3fq/r/5zW9SGhoaTtXX1xeNHDnSgDHu1BaJuprja6+9tsRqtZ5llRnPZ95p0KDh0od2zLETQttgMOjNZnOc0Wg0dEZYMktNFEWdTqcL5Hked9ZaPn36tHzfffdd9fbbb+8wm81xPp/PzXEcAgDa3Xbo9Xodx3Ei30PaHCEEZrM5Oj09fe4dd9yxzWKxOPR6vaAoCmnnO8jtdvuys7PLLRYL7SjwkFnW2dnZdb/73e9ufvLJJ1968803c+fOnfvE+vXrv9yxY0dxSUmJ1+12AwBAeHg4Hj16dOjVV189e9GiRY8CAFx//fX9tm7dWs725zuypDmOA4vFQh977LF3rFZr3Z133vl+enr6nLVr1/5fVlbW/mPHjtktFgslhIDBYICEhATdpEmT+i9atGjp5MmT7z527Nh3f/7znx/cvHlzLfNOdNVrYrVa6WOPPfa21Wqtu/32299JSUmZtG7durc2bdq0Py8vz8bur9frITExUZeRkZG4YMGC66ZOnfrb48ePb3zooYd+m5OT41Z7NzoD/0kUnSiKpo7mrQYNGjSC8IuHx+PxNjY2lno8Hm9LQd4eXC6Xw2q1lnYmC6D6eOPnn39+dvTo0StuueWWFxRFkXsiiyClFLxer89ut1d6vV5fV9rRliJzOBy+mpqak4MGDZr+0EMPveF2uxsFQdC38R3iD3zj6urqSvLy8lZYLBZfZ/InsIDF//znP9UWi+XuBx54IGfGjBn3jx8//saSkpK9FRUVhQ6Hw8pxHB8eHt4nMTFxTGhoaOLhw4e/feONN1746quvypji74yyVhQFeJ6HkpIS+bHHHvuitLT0zE033fTI3Xff/dY111xzory8PL+hoaGSEKIYjUZzdHR0Ut++fUdxHCeuW7fuqVdfffWDPXv2OJgH6nwyIYqiCKdPn5b/8Ic/fH7mzJmSG2+8cdXdd9/99pIlS06WlpYetVgsVYqiyCaTKSg2NnZQbGzsUACAtWvXPvnqq69+uHfvXgfzHnX1qKZ/3p69ENkrNWjQ8DM2kLUuaFspMet1+PDhhszMzIG7du0qOnDggLOj/Pjsu9OnTw9NSUmJ//TTT482NDTQjqw59T1jY2O5RYsWpVosFtuXX35Zcr5JiNg1OY6DlJQU/ezZs4dt2rQp9+jRo57zzfPPrP6YmBh85ZVX9k1ISIgNCQkJZel42yAIFPkZgt1ut7377rs7KyoqlM4qULaFwJ531qxZ4QsWLJg2fPjwzODg4Fh/MCexWq0VpaWlxzZu3Ljh66+/PtnY2EhZCuuutlUQBGDHE/v37y8sXrx4REZGxvSYmJgBgYGBkRhjzuv1Ourr60tzc3N/WLNmzbZt27ZZGDFQl14+H6jv37dvX/7aa68dkZGRMb1fv37DDQZDEEIIS5Lkqa6uLsrPz9+9du3abVu3brUANJXK9vl8nSaB6nk5bdq00NTU1PjVq1fnsoqS2lFGDRo0gqDhZ0RONLROFADOdduHhYUhk8nESZJEKisrz9HI3S2Axbw6La/Rp08fDgDA6XQSi8VC23u+7s6FlvcXRREiIiI4jDHY7XZitVp77f4aNGj45eL/AVGr8c3k75X+AAAAAElFTkSuQmCC',hex:'#F5A623',col:'green',desc:'Gerentes Técnicos. Foco em manejo agronômico e inovação. "INTE" = técnico.'},
  {id:'pelite',icon:'⭐',nome:'ELITECOOP',b64:'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wdfcml07Bm31f0ej/xFCUFVVpWRnZx8IDAwcOHHixDBmibZXQbJkTm0pQnaUsq6ujv788887VVWVrrnmmkkGgwFkWe5QAS12z6lTp6bo9Xqfo0eP7vNEIbN+y8/Pt2VlZW1NSUm5OTY2Vs++2x7i6/63/v7+aMKECbdlZmZ+v2PHjlOteYBagk6n07dUi4GRQlVVQZIk7UijBg0aQdCgoXMteYwx1NbW0vXr1++0WCxFTzzxxCsxMTEiK+ncXsLhCVlkli8AwL59+yrT09OX33XXXe9PnTo1pL1KmeWAoJTC0KFD9bfccstL2dnZG9atW3fQ3UPQEpjSLigoUL/66quVlFLy5z//+f+CgoJwe8kKU9h6vR4efvjhtODg4LhVq1YtO3z4sKMjJ3vcazE0f2nEXIMGjSBo0NCVnomm9xkZGbXvvffe3cOGDVs8a9aswQghIIR4TBLa621gwa5VVVX0sccee5oQoixZsuTeqKgonqUs9gSswqJOp4PHH3/8rsDAwAHLly9/6ciRIw5WyMlTspKenl76xRdfPHTddde9Pn78+DDWLk/axrwnAACxsbH6++6774Nt27b9a82aNRnsOTVlrkGDRhD+tzqyMQaBlfX15CUIQodiEjiO41gZW0/uwX7+jytxynEc39he5Gm/eGr5EkKA53moq6ujb7/99k9FRUUZTz755FezZ88OVlUVCCEtljpmrm+O44AQAtddd12fHTt2LL/qqquC2f1bUq7ue/wHDx60ffzxxw9MnDjxvvvvv38mq1zI2tFSuWe2JUEIgT/+8Y+jFi9evGzFihX3fv/997ktVT9syYvA8zxUVlaSp5566uO6urqCF1544YNRo0aZXS4XIIRAFMUWyz2z55RlGaKiovi///3vfzEYDH4vvvji0jNnzsiiKGrxARo0aAThfwuEENVms9UXFxerkiSB3W4HSZLafHlaAc9dWVBKqcViqZNlGZxOp0f3YD/b2ybayaZcY5yG0hXXxRhzdXV1NbIsg9VqpZ72i6fHUd0DEgsLC9Wnn376BgCADz744OdHHnkk2Wg0gizLwMiC+0tRFHC5XKCqKtx6660xb7311o9hYWGDz5w5U8PiDFrrEvffvfbaa2tXr179+B/+8IePVq1a9UhKSoqJteNi8RaKooDD4YABAwaI//nPf25/7rnnftqyZctrb7311tcWi4W2J6K/eR888sgjMwwGg++XX3654cEHH0zgOA4kSbpoH7AYAFmWYfHixX2+/fbbz0aPHn3zX//610m7du2yeLrt0h3zSYMGDQ3Qjjl2AoxGo29cXNzom266aXdVVVW9IAiceza3lmC326WjR4/WVlVVUU+OdvE8jwVB0CclJU2YMWPGflEU+baS3BBCiF6vF2pqahxbt26tAWg7eyDGGOn1ei9RFPWdeeqC4zhsMBh8RVE0dGb/C4LAEULUESNGTJk2bdphk8mka54o6WL9YjAYxLKysvp9+/ZZPCFQTJFijOGLL744I8vy9EcfffSVf/7zn/uGDRt2/5dffrnm2LFjVaWlpaqiKIAQAr1eD1FRUbr+/fv7T506dfytt966rKCg4OBDDz10y4kTJyRPxoP9DmMMBQUF6osvvvixoijy4sWLXxkwYMCYZcuWPZGZmVl08uRJW21tLWXxBt7e3qhfv37G4cOHR952220PJycn37Rq1ao/v/HGGytycnJc7O/aA9YHPM/DJ598csZuty967LHHXn755Zd/TkpKenLt2rXrjx8/XlFUVCQ7HA5ACAHHcRAUFMTFx8f7zZw5c9yiRYuesdvtNX/7298W/Pvf/z7G+qC9uUPYfBIEQdSkkAYNGkHoMWCC1el0qjU1NUXR0dEjH3/88WVOp9PC87yute8ihDCllBQWFmY9++yzS6uqqmyeEARJkpSSkpLsxMTEec8991ygwWDwaes5JUmyBwcHDzh69OiPW7dufa41hcQ+kySJVFZWnq+rq6vqzKhvl8ullJeXn6qpqSntzLFQVZWcPHlyU0pKyuLnnnuul9lsDqCUkrb6JSQkZFB6evqKo0ePLpdl2WNNySzizz///PyBAwduevrpp7dMnDjx//r165eclZW1Mzc397QkSTLGGJlMJlNMTMyg+Pj4SX5+fhE//fTTq6+88sq7+/btszLr3VMlTQgBURTh9OnT8h133PHx1q1btz344IN/e+SRR14/cuTIxiNHjhxwuVwuo9FoUBRFBQDo169f/7S0tNtVVZUfeeSRUcuWLTvKyMalHNNUFAV4nodVq1YV7Ny587Znn332hlmzZj0UExMzLCMj45fi4uJiRjZlWVZ8fHy8hw8fPj4pKWn+7t27P3vmmWeWZWVluVguiXbWX2iaTxUVFWfr6+stmhNBgwaNIPQ4gmCz2ZTs7Oxddru9DmPMqaoqN6/FcBGCgCiltKqqqliSJI8lY21trTMrK2unLMsum81WU19fX9XWd2RZdgIAVFVVlbSnTTk5Ofvy8vLOKYpC3X93Kairq3NmZmZuy8vLO938npeC+vp66dixY1sVRZEsFkuFzWar9aRfEEK4pqamoiPPoKoqCIIAp06dku655573ZsyYsXbRokXX3nDDDa/r9Xpf9789efLkxqysrC3vv//+3T///HNVo/Xbof12SZKaAvk+++yz3PT09Duvu+66pKSkpJE33njjo/3795+i0+m8AQCOHDmy8tChQz999tlnz69du3b/oUOH7DzPd/i458VIgiAIUFxcrD700EOffvvttxtHjx49ZOTIkVOuv/76q4OCguIax73g2LFja/fv3//TihUrPty+fXtxeXk5EQShaWukI2uPrYfCwsIi9plGFDRo6Dz8P+VL3Pssu9jeAAAAAElFTkSuQmCC',hex:'#7B5EA7',col:'amber',desc:'Academia técnica e comercial de 5 módulos para agrônomos influentes MindCoop.'},
  {id:'pgo',icon:'🚀',nome:'GOCOOP',b64:'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',hex:'#E8553E',col:'coral',desc:'Treinamento de alto impacto em vendas para balconistas e vendedores internos.'},
];
function renderProgCards(){
  const el=document.getElementById('prog-cards-overview');
  if(!el) return;
  const cards=[
    {id:'pmind',b64:'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XUPIGV8vKirq/do8z08//fQqUY7Pkweh0TwPqNJTUFGOoKJcB+mp+QCQDwC3AOAQAAAolRTY2knBwVEJrVp7wKP76ZVUHdXh8SrPuXbt2tWTJ09+wvO8nmEYSRN5EHiappm7d+/GNeA9Hr/YhYWF6JNPPrn85ZdfvjRkyBDn8ePHjxowYMArnp6eQaYmFBL/v1arLbl48eKPO3bs+GbPnj23CwsLEVYWzW1NWbz0otfr4fvvv7/zww8/TBsyZMj8qVOnBg8cOHBWy5Ytexrrh6dZS+Xl5TmXL1/eceDAge0RERE30tLSeNznlXXLzB+ciT0jlpaWVidOnFiHEEI0TTOGxllGRsb9+Pj4cny+uQkYAMCXX375kVarrTD2XgmCwFMURVlZWVmbc7lDEAQ4fvz4BhcXl9a43U31XmdkZNyvr1sd94udnZ29MTljT1hhYWHWuXPnzLq8UF3WX3/99bcKhcLamJyxB0cmk1kQtdyMDKZn0vNQE3kgMKsVLVbeCoUCOnfurOzRo4e3v79/V29v7wAXF5d2KpXKRS6XW2OlqNVqS4uLizPS0tISb9++fenixYtXLly4kHr//n292LowpeBTc+iH6rEASqWS6tKli6pHjx5t/f39u3l7e3dxcnJqY2Vl5SyVSh9XrVSr1UUFBQXJycnJ127evHn58uXL1y9fvpwtjtKuTyltAgICAkIQak0eRDsuBKHeVRxxwE1zQWMqE6wga7IkaZoGCwsLkMvlFFXVSVqtFpWXl6Pqz4lJB16ffNYIk6F+YBgGFAoFJZPJqCqCgCoqKpBara6RfJkzzqAhxnFDP1ttc6dVLwrWFM/wLLzXzU3OdZk/CWEmBIHgGfQqiKsVGlNw4pLXja0MG6sfsPVvSHExDPP4WOItICAgIASB4F9DGgxZfP/2fiDbtQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAieWVCkC0zsKIoChmFAEAQQBKFO16BpGmiaBp7nASFUq3NZlq31vetzv7reE/fT04CfASH0+NOQ8qJpGiiKeqINuE8QQiAIgtmeobHvV5Osxfep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',color:'#2ABFBF',desc:'Conselho para alta liderança das cooperativas — análise de mercado, desafios e oportunidades.'},
    {id:'pinfo',b64:'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',color:'#9B59B6',desc:'Encontro comercial com inteligência de mercado via Kynetec — dados que orientam decisões.'},
    {id:'pinte',b64:'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kCQJQkND0aJFi26z2+2VH3300Tr2/bYIDlOwJ06csG/YsOFvM2bMeHjUqFER7Nk6e3+2fWUymWDZsmUP1NfXn9y6devurlr5CCGMMUatET5JkkCSpObMjRo50KBBIwgaegFM4a1fv77spZdeunXq1Km/u/nmm9NEUYSGhoZyQRD0l4IA7iiTYleyKqq3YM6ePSuvW7fupWHDhi2+6667Ful0uuao/vYKV6mt2ujoaBwUFIQ6e+/XX3/97wAAd9555++Cg4MRS/7U3vfVBAAhBHfdddcVEydOvOubb7758+7du+0tiUBLyLIMCCGorq4mr7/++vuNjY2ld9xxxx2JiYm8x+OBjhQ8a7Msy4Axhuuvv37guHHjbv/www8f3L59ezV7r6sktrtJrzRo0KARBA3d8CQghMDr9cKnn366f926dY8///zzO6+77rpESinzIlwS7ejsq7PXY3juuee++fHHH9++9dZb37zxxhsHduW5UlNTdd9+++07N954YyorpNRafzLF7s9TUfn222/fPmnSpHv/9re/Xd+SBLTnrUAIwdSpU0Pvv//+9/bv3//Ra6+9trqz7WXPtX//ftsHH3ywcv78+X9ZtWrVErY90lHfseebNm1a2Ouvv767sLBw4yeffLLFZrPR88kIqUGDBg0aWoG6muM999wztLGxsex3v/vdKIDOV3N8/fXXr62vry8aPHiw2J6SYUFtAACJiYl8VVVVbmFhYVZjY2PZ5s2bnwsJCemRao633HJLkizL3l//+tcDAXqmmmN+fv66Tz/99N7eKu/L2jt79uzwEydObLLb7VX33HPP0P9huq244adPnx564sSJTZRSumTJkj6snzvThyEhIejTTz+9l1JKP/zwwztiYmJwW+Osxu233z6wtra28PTp0zvnzJkT0ZUYArWHJTg4GK1evXoFpZR+/vnn90dHR3fq/r/5zW9SGhoaTtXX1xeNHDnSgDHu1BaJuprja6+9tsRqtZ5llRnPZ95p0KDh0od2zLETQttgMOjNZnOc0Wg0dEZYMktNFEWdTqcL5Hked9ZaPn36tHzfffdd9fbbb+8wm81xPp/PzXEcAgDa3Xbo9Xodx3Ei30PaHCEEZrM5Oj09fe4dd9yxzWKxOPR6vaAoCmnnO8jtdvuys7PLLRYL7SjwkFnW2dnZdb/73e9ufvLJJ1968803c+fOnfvE+vXrv9yxY0dxSUmJ1+12AwBAeHg4Hj16dOjVV189e9GiRY8CAFx//fX9tm7dWs725zuypDmOA4vFQh977LF3rFZr3Z133vl+enr6nLVr1/5fVlbW/mPHjtktFgslhIDBYICEhATdpEmT+i9atGjp5MmT7z527Nh3f/7znx/cvHlzLfNOdNVrYrVa6WOPPfa21Wqtu/32299JSUmZtG7durc2bdq0Py8vz8bur9frITExUZeRkZG4YMGC66ZOnfrb48ePb3zooYd+m5OT41Z7NzoD/0kUnSiKpo7mrQYNGjSC8IuHx+PxNjY2lno8Hm9LQd4eXC6Xw2q1lnYmC6D6eOPnn39+dvTo0StuueWWFxRFkXsiiyClFLxer89ut1d6vV5fV9rRliJzOBy+mpqak4MGDZr+0EMPveF2uxsFQdC38R3iD3zj6urqSvLy8lZYLBZfZ/InsIDF//znP9UWi+XuBx54IGfGjBn3jx8//saSkpK9FRUVhQ6Hw8pxHB8eHt4nMTFxTGhoaOLhw4e/feONN1746quvypji74yyVhQFeJ6HkpIS+bHHHvuitLT0zE033fTI3Xff/dY111xzory8PL+hoaGSEKIYjUZzdHR0Ut++fUdxHCeuW7fuqVdfffWDPXv2OJgH6nwyIYqiCKdPn5b/8Ic/fH7mzJmSG2+8cdXdd9/99pIlS06WlpYetVgsVYqiyCaTKSg2NnZQbGzsUACAtWvXPvnqq69+uHfvXgfzHnX1qKZ/3p69ENkrNWjQ8DM2kLUuaFspMet1+PDhhszMzIG7du0qOnDggLOj/Pjsu9OnTw9NSUmJ//TTT482NDTQjqw59T1jY2O5RYsWpVosFtuXX35Zcr5JiNg1OY6DlJQU/ezZs4dt2rQp9+jRo57zzfPPrP6YmBh85ZVX9k1ISIgNCQkJZel42yAIFPkZgt1ut7377rs7KyoqlM4qULaFwJ531qxZ4QsWLJg2fPjwzODg4Fh/MCexWq0VpaWlxzZu3Ljh66+/PtnY2EhZCuuutlUQBGDHE/v37y8sXrx4REZGxvSYmJgBgYGBkRhjzuv1Ourr60tzc3N/WLNmzbZt27ZZGDFQl14+H6jv37dvX/7aa68dkZGRMb1fv37DDQZDEEIIS5Lkqa6uLsrPz9+9du3abVu3brUANJXK9vl8nSaB6nk5bdq00NTU1PjVq1fnsoqS2lFGDRo0gqDhZ0RONLROFADOdduHhYUhk8nESZJEKisrz9HI3S2Axbw6La/Rp08fDgDA6XQSi8VC23u+7s6FlvcXRREiIiI4jDHY7XZitVp77f4aNGj45eL/AVGr8c3k75X+AAAAAElFTkSuQmCC',color:'#E67E22',desc:'Gerentes Técnicos das principais cooperativas — manejo agronômico e inovação.'},
    {id:'pelite',b64:'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wdfcml07Bm31f0ej/xFCUFVVpWRnZx8IDAwcOHHixDBmibZXQbJkTm0pQnaUsq6ujv788887VVWVrrnmmkkGgwFkWe5QAS12z6lTp6bo9Xqfo0eP7vNEIbN+y8/Pt2VlZW1NSUm5OTY2Vs++2x7i6/63/v7+aMKECbdlZmZ+v2PHjlOteYBagk6n07dUi4GRQlVVQZIk7UijBg0aQdCgoXMteYwx1NbW0vXr1++0WCxFTzzxxCsxMTEiK+ncXsLhCVlkli8AwL59+yrT09OX33XXXe9PnTo1pL1KmeWAoJTC0KFD9bfccstL2dnZG9atW3fQ3UPQEpjSLigoUL/66quVlFLy5z//+f+CgoJwe8kKU9h6vR4efvjhtODg4LhVq1YtO3z4sKMjJ3vcazE0f2nEXIMGjSBo0NCVnomm9xkZGbXvvffe3cOGDVs8a9aswQghIIR4TBLa621gwa5VVVX0sccee5oQoixZsuTeqKgonqUs9gSswqJOp4PHH3/8rsDAwAHLly9/6ciRIw5WyMlTspKenl76xRdfPHTddde9Pn78+DDWLk/axrwnAACxsbH6++6774Nt27b9a82aNRnsOTVlrkGDRhD+tzqyMQaBlfX15CUIQodiEjiO41gZW0/uwX7+jytxynEc39he5Gm/eGr5EkKA53moq6ujb7/99k9FRUUZTz755FezZ88OVlUVCCEtljpmrm+O44AQAtddd12fHTt2LL/qqquC2f1bUq7ue/wHDx60ffzxxw9MnDjxvvvvv38mq1zI2tFSuWe2JUEIgT/+8Y+jFi9evGzFihX3fv/997ktVT9syYvA8zxUVlaSp5566uO6urqCF1544YNRo0aZXS4XIIRAFMUWyz2z55RlGaKiovi///3vfzEYDH4vvvji0jNnzsiiKGrxARo0aAThfwuEENVms9UXFxerkiSB3W4HSZLafHlaAc9dWVBKqcViqZNlGZxOp0f3YD/b2ybayaZcY5yG0hXXxRhzdXV1NbIsg9VqpZ72i6fHUd0DEgsLC9Wnn376BgCADz744OdHHnkk2Wg0gizLwMiC+0tRFHC5XKCqKtx6660xb7311o9hYWGDz5w5U8PiDFrrEvffvfbaa2tXr179+B/+8IePVq1a9UhKSoqJteNi8RaKooDD4YABAwaI//nPf25/7rnnftqyZctrb7311tcWi4W2J6K/eR888sgjMwwGg++XX3654cEHH0zgOA4kSbpoH7AYAFmWYfHixX2+/fbbz0aPHn3zX//610m7du2yeLrt0h3zSYMGDQ3Qjjl2AoxGo29cXNzom266aXdVVVW9IAiceza3lmC326WjR4/WVlVVUU+OdvE8jwVB0CclJU2YMWPGflEU+baS3BBCiF6vF2pqahxbt26tAWg7eyDGGOn1ei9RFPWdeeqC4zhsMBh8RVE0dGb/C4LAEULUESNGTJk2bdphk8mka54o6WL9YjAYxLKysvp9+/ZZPCFQTJFijOGLL744I8vy9EcfffSVf/7zn/uGDRt2/5dffrnm2LFjVaWlpaqiKIAQAr1eD1FRUbr+/fv7T506dfytt966rKCg4OBDDz10y4kTJyRPxoP9DmMMBQUF6osvvvixoijy4sWLXxkwYMCYZcuWPZGZmVl08uRJW21tLWXxBt7e3qhfv37G4cOHR952220PJycn37Rq1ao/v/HGGytycnJc7O/aA9YHPM/DJ598csZuty967LHHXn755Zd/TkpKenLt2rXrjx8/XlFUVCQ7HA5ACAHHcRAUFMTFx8f7zZw5c9yiRYuesdvtNX/7298W/Pvf/z7G+qC9uUPYfBIEQdSkkAYNGkHoMWCC1el0qjU1NUXR0dEjH3/88WVOp9PC87yute8ihDCllBQWFmY9++yzS6uqqmyeEARJkpSSkpLsxMTEec8991ygwWDwaes5JUmyBwcHDzh69OiPW7dufa41hcQ+kySJVFZWnq+rq6vqzKhvl8ullJeXn6qpqSntzLFQVZWcPHlyU0pKyuLnnnuul9lsDqCUkrb6JSQkZFB6evqKo0ePLpdl2WNNySzizz///PyBAwduevrpp7dMnDjx//r165eclZW1Mzc397QkSTLGGJlMJlNMTMyg+Pj4SX5+fhE//fTTq6+88sq7+/btszLr3VMlTQgBURTh9OnT8h133PHx1q1btz344IN/e+SRR14/cuTIxiNHjhxwuVwuo9FoUBRFBQDo169f/7S0tNtVVZUfeeSRUcuWLTvKyMalHNNUFAV4nodVq1YV7Ny587Znn332hlmzZj0UExMzLCMj45fi4uJiRjZlWVZ8fHy8hw8fPj4pKWn+7t27P3vmmWeWZWVluVguiXbWX2iaTxUVFWfr6+stmhNBgwaNIPQ4gmCz2ZTs7Oxddru9DmPMqaoqN6/FcBGCgCiltKqqqliSJI8lY21trTMrK2unLMsum81WU19fX9XWd2RZdgIAVFVVlbSnTTk5Ofvy8vLOKYpC3X93Kairq3NmZmZuy8vLO938npeC+vp66dixY1sVRZEsFkuFzWar9aRfEEK4pqamoiPPoKoqCIIAp06dku655573ZsyYsXbRokXX3nDDDa/r9Xpf9789efLkxqysrC3vv//+3T///HNVo/Xbof12SZKaAvk+++yz3PT09Duvu+66pKSkpJE33njjo/3795+i0+m8AQCOHDmy8tChQz999tlnz69du3b/oUOH7DzPd/i458VIgiAIUFxcrD700EOffvvttxtHjx49ZOTIkVOuv/76q4OCguIax73g2LFja/fv3//TihUrPty+fXtxeXk5EQShaWukI2uPrYfCwsIi9plGFDRo6Dz8P+VL3Pssu9jeAAAAAElFTkSuQmCC',color:'#5B4FD4',desc:'Academia de 5 módulos para agrônomos influentes das cooperativas MindCoop.'},
    {id:'pgo',b64:'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',color:'#E8553E',desc:'Treinamento de alto impacto em vendas e negociação para balconistas e vendedores internos.'},
  ];
  el.innerHTML=cards.map(p=>`
    <div class="pcard" onclick="navigate('${p.id}')" style="border-top:3px solid ${p.color}">
      <img src="data:image/png;base64,${p.b64}" style="height:36px;width:auto;display:block;margin-bottom:10px">
      <div class="pdesc" contenteditable="true" style="outline:none">${p.desc}</div>
    </div>
  `).join('');
}

// ═══════════ PROGRAMAS PAGES ═══════════
function renderProgramaPage(pid){
  try{
  const p=PROGS.find(x=>x.id===pid);
  if(!p) return;
  if(!D.encontros) D.encontros={};
  if(!D.encontros[p.nome]) D.encontros[p.nome]=cloneEncontro(p.nome);
  const enc=D.encontros[p.nome];
  if(!enc) return;
  const el=document.getElementById('content-'+pid);
  if(!el) return;

  // Coops por programa
  const _coopsProg = {
    MINDCOOP: ['COTRIJAL','COAMO','CVALE','LAR','COCAMAR','INTEGRADA','COMIGO','COOPERMOTA','COOPERCITRUS','COPACOL','COOPERALFA','CAMDA','COPLACANA','COPERCANA','CAPAL'],
    INFOCOOP: ['COTRIJAL','COAMO','CVALE','LAR','COCAMAR','INTEGRADA','COMIGO','COOPERMOTA','COOPERCITRUS','COPACOL','COOPERALFA','CAMDA','COPLACANA','COPERCANA','CAPAL','Cotrisul','Copercampos','Cotricampo','Coopatrigo','Cocari','Coagril','Coopavel','Coasul','Copasul','Copérdia','Copagril','Coopertradição','Cotrijuc','Cotriel','Holambra','Cotribá','Agrária','Castrolanda','Frísia','Bom Jesus','Cotrisal','A1','Cooxupé','Coplana'],
    INTECOOP: ['COTRIJAL','COAMO','CVALE','LAR','COCAMAR','INTEGRADA','COMIGO','COOPERMOTA','COOPERCITRUS','COPACOL','COOPERALFA','CAMDA','COPLACANA','COPERCANA','CAPAL','Cotrisul','Copercampos','Cotricampo','Coopatrigo','Cocari','Coagril','Coopavel','Coasul','Copasul','Copérdia','Copagril','Coopertradição','Cotrijuc','Cotriel','Holambra','Cotribá','Agrária','Castrolanda','Frísia','Bom Jesus','Cotrisal','A1','Cooxupé','Coplana'],
    ELITECOOP: ['LAR','C.VALE','CAMDA','COAMO','COCAMAR','COMIGO','COOPERCITRUS','COTRIJAL','COOPERALFA','COPACOL','COPLACANA','INTEGRADA'],
    GOCOOP: ['COCAMAR','COMIGO','INTEGRADA','LAR','COPLACANA','COTRIJAL','COOPERMOTA','COPACOL','C.VALE','TRADIÇÃO'],
  };
  const coopsList = _coopsProg[p.nome] || [];

  // Ensure planoAcao array exists
  if(!enc.planoAcao) enc.planoAcao = [];

  // Render plano de acao rows for current coop filter
  function _renderPlanoRows(filter){
    const rows = filter ? enc.planoAcao.filter(a=>a.coop===filter) : enc.planoAcao;
    const allIdx = filter ? enc.planoAcao.map((a,i)=>a.coop===filter?i:-1).filter(i=>i>=0) : enc.planoAcao.map((_,i)=>i);
    if(!rows.length) return '<tr><td colspan="5" style="text-align:center;color:var(--g600);padding:16px">Nenhuma ação. Clique em + Ação para adicionar.</td></tr>';
    return rows.map((a,ri)=>{
      const realIdx = allIdx[ri];
      return '<tr>'
       +'<td><span class="tag tag-blue" style="font-size:.72rem">'+a.coop+'</span></td>'
       +'<td contenteditable="true" onblur="D.encontros[\''+p.nome+'\'].planoAcao['+realIdx+'].acao=this.textContent;saveD(true)">'+( a.acao||'')+'</td>'
       +'<td contenteditable="true" onblur="D.encontros[\''+p.nome+'\'].planoAcao['+realIdx+'].resp=this.textContent;saveD(true)">'+( a.resp||'')+'</td>'
       +'<td contenteditable="true" onblur="D.encontros[\''+p.nome+'\'].planoAcao['+realIdx+'].prazo=this.textContent;saveD(true)">'+( a.prazo||'')+'</td>'
       +'<td>'+tagHTML(a.status,'onclick="D.encontros[\"'+p.nome+'\"].planoAcao['+realIdx+'].status=cycleTagVal(this);saveD(true)"')
       +'<button class="btn btn-g btn-sm" style="margin-left:4px" onclick="D.encontros[\''+p.nome+'\'].planoAcao.splice('+realIdx+',1);renderProgramaPage(\''+pid+'\')">✕</button></td>'
       +'</tr>';
    }).join('');
  }


  // ── Event delegation for status tags ──
  el.onclick = function(e){
    const tag = e.target.closest('[data-cy="tag"]');
    if(!tag) return;
    const field = tag.dataset.field;
    const pidx  = parseInt(tag.dataset.idx);
    const pname = tag.dataset.prog;
    if(!pname || !D.encontros || !D.encontros[pname]) return;
    const obj = D.encontros[pname];
    if(field === 'infos') {
      obj.infos.status = cycleTagVal(tag);
    } else if(field === 'fases' && !isNaN(pidx)) {
      obj.fases[pidx].status = cycleTagVal(tag);
    } else if(field === 'entregaveis' && !isNaN(pidx)) {
      obj.entregaveis[pidx].status = cycleTagVal(tag);
    } else if(field === 'planoAcao' && !isNaN(pidx)) {
      obj.planoAcao[pidx].status = cycleTagVal(tag);
    }
    saveD(true);
  };
  el.innerHTML=`
    <div style="margin-bottom:16px">${_progLogo(p.nome, p.hex||'#2ABFBF', p.b64, 56)}</div>
    <div class="psub" contenteditable="true" style="color:var(--g400);margin-bottom:20px">${p.desc}</div>

    <!-- Informações Gerais -->
    <div class="card mt16">
      <div class="ch"><div class="ctitle" contenteditable="true">Informações Gerais</div>${tagHTML(enc.infos.status,`onclick="D.encontros[\'${p.nome}\'].infos.status=cycleTagVal(this);saveD(true)"`)}</div>
      <div class="g2" style="gap:10px;font-size:.82rem">
        <div><div class="fl" contenteditable="true">Objetivo do Encontro</div><div class="fv" contenteditable="true" onblur="enc_set('${p.nome}','objetivo',this.textContent)">${enc.infos.objetivo}</div></div>
        <div><div class="fl" contenteditable="true">Público-alvo</div><div class="fv" contenteditable="true" onblur="enc_set('${p.nome}','publico',this.textContent)">${enc.infos.publico}</div></div>
        <div><div class="fl" contenteditable="true">Data Prevista</div><div class="fv" contenteditable="true" onblur="enc_set('${p.nome}','data',this.textContent)">${enc.infos.data||'—'}</div></div>
        <div><div class="fl" contenteditable="true">Local</div><div class="fv" contenteditable="true" onblur="enc_set('${p.nome}','local',this.textContent)">${enc.infos.local||'—'}</div></div>
      </div>
    </div>

    <!-- Fases -->
    <h2 class="mt22" contenteditable="true">Fases</h2>
    <div class="card">
      <div class="tw"><table>
        <thead><tr><th>Fase</th><th>Objetivo</th><th>Status</th></tr></thead>
        <tbody>${enc.fases.map((f,fi)=>`
          <tr>
            <td style="font-weight:600" contenteditable="true" onblur="enc.fases[${fi}].fase=this.textContent;saveD(true)">${f.fase}</td>
            <td contenteditable="true" onblur="enc.fases[${fi}].obj=this.textContent;saveD(true)">${f.obj}</td>
            <td>${tagHTML(f.status,`onclick="D.encontros[\'${p.nome}\'].fases[${fi}].status=cycleTagVal(this);saveD(true)"`)}</td>
          </tr>
        `).join('')}</tbody>
      </table></div>
    </div>

    <!-- Entregáveis -->
    <h2 class="mt22" contenteditable="true">Entregáveis</h2>
    ${(()=>{
      const hasCoop = enc.entregaveis.length > 0 && enc.entregaveis[0].coop;
      if(hasCoop){
        // Matrix table: rows = coops, cols = actions
        const coops = [...new Set(enc.entregaveis.map(e=>e.coop))];
        const acoes = [...new Set(enc.entregaveis.map(e=>e.ent))];
        return '<div class="card" style="padding:0"><div class="tw"><table style="min-width:100%">'
          +'<thead><tr>'
          +'<th style="min-width:130px;position:sticky;left:0;background:var(--navy-l);z-index:1">Cooperativa</th>'
          + acoes.map(a=>'<th style="min-width:110px;font-size:.72rem;text-align:center">'+a+'</th>').join('')
          +'</tr></thead>'
          +'<tbody>'
          + coops.map(coop=>{
            return '<tr>'
              +'<td style="font-weight:700;font-size:.8rem;position:sticky;left:0;background:var(--navy-m);z-index:1">'+coop+'</td>'
              + acoes.map(acao=>{
                const idx = enc.entregaveis.findIndex(e=>e.coop===coop && e.ent===acao);
                if(idx<0) return '<td></td>';
                const e = enc.entregaveis[idx];
                return '<td style="text-align:center;padding:6px 4px">'
                  + tagHTML(e.status,`onclick="D.encontros[\'${p.nome}\'].entregaveis[${idx}].status=cycleTagVal(this);saveD(true)"`)
                  +'</td>';
              }).join('')
              +'</tr>';
          }).join('')
          +'</tbody></table></div></div>';
      } else {
        return '<div class="card"><div class="tw"><table>'
          +'<thead><tr><th>Entregável</th><th>Responsável</th><th>Status</th></tr></thead>'
          +'<tbody>'+enc.entregaveis.map((e,ei)=>`
            <tr>
              <td contenteditable="true" onblur="enc.entregaveis[${ei}].ent=this.textContent;saveD(true)">${e.ent}</td>
              <td contenteditable="true" onblur="enc.entregaveis[${ei}].resp=this.textContent;saveD(true)">${e.resp}</td>
              <td>${tagHTML(e.status,`onclick="D.encontros[\'${p.nome}\'].entregaveis[${ei}].status=cycleTagVal(this);saveD(true)"`)}</td>
            </tr>
          `).join('')+'</tbody>'
          +'</table></div></div>';
      }
    })()}

    <!-- Plano de Ação por Cooperativa -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-top:28px;margin-bottom:12px">
      <h2 style="margin:0" contenteditable="true">Plano de Ação Pós-Evento</h2>
      <div style="display:flex;gap:8px;align-items:center">
        <span style="font-size:.78rem;color:var(--g400)">Filtrar por cooperativa:</span>
        <select id="pa-filter-${pid}" onchange="document.getElementById('pa-tbody-${pid}').innerHTML=_renderPARows_${pid}(this.value)"
          style="background:var(--navy-m);border:1px solid rgba(255,255,255,.12);color:var(--white);border-radius:7px;padding:5px 10px;font-size:.78rem">
          <option value="">Todas as cooperativas</option>
          ${coopsList.map(c=>'<option value="'+c+'">'+c+'</option>').join('')}
        </select>
        <button class="btn btn-p btn-sm" onclick="_addPA_${pid}()">+ Ação</button>
      </div>
    </div>
    <div class="card" style="padding:0">
      <div class="tw">
        <table style="min-width:700px">
          <thead><tr>
            <th style="min-width:140px">Cooperativa</th>
            <th style="min-width:220px">Ação</th>
            <th style="min-width:120px">Responsável</th>
            <th style="min-width:100px">Prazo</th>
            <th style="min-width:140px">Status</th>
          </tr></thead>
          <tbody id="pa-tbody-${pid}">${_renderPlanoRows('')}</tbody>
        </table>
      </div>
    </div>
  `;

  // Áreas de atuação Coops (only for INFOCOOP)
  if(p.nome === 'INFOCOOP') {
    if(!enc.atuacaoCoops) enc.atuacaoCoops = JSON.parse(JSON.stringify(D0.encontros.INFOCOOP?.atuacaoCoops||[]));
    const atuEl = document.getElementById('pa-tbody-'+pid);
    const tableDiv = document.createElement('div');
    tableDiv.style.marginTop = '32px';
    tableDiv.id = 'atu-coops-wrap';

    function _renderAtuTable(){
      const rows = enc.atuacaoCoops;
      tableDiv.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
          <h2 style="margin:0">Áreas de Atuação — Coops</h2>
          <button onclick="_addAtuCoop('${pid}')" class="btn btn-p btn-sm">+ Cooperativa</button>
        </div>
        <div class="card" style="padding:0">
          <div class="tw">
            <table>
              <thead><tr>
                <th style="min-width:140px;position:sticky;left:0;background:var(--navy-l)">Cooperativa</th>
                <th style="min-width:80px;text-align:center">Categoria</th>
                <th style="min-width:160px">KAM</th>
                <th style="min-width:140px">Formato</th>
                <th style="min-width:120px">Data</th>
                <th style="min-width:110px;text-align:center">Enviado para KAM</th>
                <th style="min-width:120px;text-align:center">Recebido pelo KAM</th>
                <th style="min-width:100px;text-align:center">Kynetec</th>
                <th style="width:36px"></th>
              </tr></thead>
              <tbody id="atu-tbody-${pid}">
                ${rows.map((r,ri)=>{
                  const catCls = r.cat==='MindCoop'?'tag-blue':'tag-purple';
                  return '<tr>'
                    +'<td style="font-weight:600;position:sticky;left:0;background:var(--navy-m)">'+r.coop+'</td>'
                    +'<td style="text-align:center"><span class="tag '+catCls+'" style="font-size:.68rem">'+r.cat+'</span></td>'
                    +'<td style="font-size:.76rem;color:var(--g200)">'+getKam(r.coop)+'</td>'
                    +'<td contenteditable="true" onblur="D.encontros[\'INFOCOOP\'].atuacaoCoops['+ri+'].formato=this.textContent;saveD(true)">'+( r.formato||'')+'</td>'
                    +'<td contenteditable="true" onblur="D.encontros[\'INFOCOOP\'].atuacaoCoops['+ri+'].data=this.textContent;saveD(true)">'+( r.data||'')+'</td>'
                    +'<td style="text-align:center" data-info-field="enviado" data-info-idx="'+ri+'">'+_atuTag(r.enviado,ri,'enviado')+'</td>'
                    +'<td style="text-align:center" data-info-field="recebido" data-info-idx="'+ri+'">'+_atuTag(r.recebido,ri,'recebido')+'</td>'
                    +'<td style="text-align:center" data-info-field="kynetec" data-info-idx="'+ri+'">'+_atuTag(r.kynetec,ri,'kynetec')+'</td>'
                    +'<td><button class="btn btn-g btn-sm" onclick="_delAtuCoop(\''+pid+'\','+ri+')">✕</button></td>'
                    +'</tr>';
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>`;

      // Event delegation for status tags
      tableDiv.onclick = function(e){
        const tag = e.target.closest('[data-info-field]');
        if(!tag || tag.tagName==='TD') return;
        const field = tag.closest('td').dataset.infoField;
        const idx2 = parseInt(tag.closest('td').dataset.infoIdx);
        if(isNaN(idx2)||!field) return;
        const cycle = {gray:'blue',blue:'teal',teal:'green',green:'red',red:'gray'};
        const labels = {gray:'Não iniciado',blue:'Em prep.',teal:'Em andamento',green:'Concluído',red:'Atrasado'};
        const cls = {gray:'tag-gray',blue:'tag-blue',teal:'tag-teal',green:'tag-green',red:'tag-red'};
        const cur = D.encontros['INFOCOOP'].atuacaoCoops[idx2][field]||'gray';
        const next = cycle[cur]||'gray';
        D.encontros['INFOCOOP'].atuacaoCoops[idx2][field] = next;
        tag.className = 'tag '+(cls[next]||'tag-gray');
        tag.textContent = labels[next]||'Não iniciado';
        saveD(true);
      };
    }

    function _atuTag(val,ri,field){
      const labels={gray:'Não iniciado',blue:'Em prep.',teal:'Em andamento',green:'Concluído',red:'Atrasado'};
      const cls={gray:'tag-gray',blue:'tag-blue',teal:'tag-teal',green:'tag-green',red:'tag-red'};
      const v=val||'gray';
      return '<span class="tag '+(cls[v]||'tag-gray')+'" style="cursor:pointer">'+(labels[v]||'Não iniciado')+'</span>';
    }

    window['_delAtuCoop'] = function(pid2, ri){
      D.encontros['INFOCOOP'].atuacaoCoops.splice(ri,1);
      _renderAtuTable();
      saveD(true);
    };

    window['_addAtuCoop'] = function(pid2){
      if(!D.encontros['INFOCOOP'].atuacaoCoops) D.encontros['INFOCOOP'].atuacaoCoops=[];
      const coop = prompt('Nome da cooperativa:');
      if(!coop) return;
      D.encontros['INFOCOOP'].atuacaoCoops.push({
        coop, cat:'ESCALA', kam:getKam(coop), formato:'', data:'',
        enviado:'gray', recebido:'gray', kynetec:'gray'
      });
      _renderAtuTable();
      saveD(true);
    };

    _renderAtuTable();
    el.appendChild(tableDiv);
  }

// Expose functions for this prog page
  window['_renderPARows_'+pid] = function(filter){
    const rows = filter ? enc.planoAcao.filter(a=>a.coop===filter) : enc.planoAcao;
    const allIdx = filter
      ? enc.planoAcao.map((a,i)=>a.coop===filter?i:-1).filter(i=>i>=0)
      : enc.planoAcao.map((_,i)=>i);
    if(!rows.length) return '<tr><td colspan="5" style="text-align:center;color:var(--g600);padding:16px">Nenhuma ação cadastrada.</td></tr>';
    return rows.map((a,ri)=>{
      const realIdx=allIdx[ri];
      const prog = p.nome;
      return '<tr>'
        +'<td><span class="tag tag-blue" style="font-size:.72rem">'+a.coop+'</span></td>'
        +'<td contenteditable="true" onblur="D.encontros[\''+prog+'\'].planoAcao['+realIdx+'].acao=this.textContent;saveD(true)">'+( a.acao||'')+'</td>'
        +'<td contenteditable="true" onblur="D.encontros[\''+prog+'\'].planoAcao['+realIdx+'].resp=this.textContent;saveD(true)">'+( a.resp||'')+'</td>'
        +'<td contenteditable="true" onblur="D.encontros[\''+prog+'\'].planoAcao['+realIdx+'].prazo=this.textContent;saveD(true)">'+( a.prazo||'')+'</td>'
        +'<td style="display:flex;align-items:center;gap:4px">'+tagHTML(a.status,'onclick="D.encontros[\"'+prog+'\"].planoAcao['+realIdx+'].status=cycleTagVal(this);saveD(true)"')
        +'<button class="btn btn-g btn-sm" onclick="D.encontros[\''+prog+'\'].planoAcao.splice('+realIdx+',1);renderProgramaPage(\''+pid+'\')">✕</button></td>'
        +'</tr>';
    }).join('');
  };

  window['_addPA_'+pid] = function(){
    const sel = document.getElementById('pa-filter-'+pid);
    const coop = sel ? sel.value || coopsList[0] || '—' : coopsList[0] || '—';
    enc.planoAcao.push({coop, acao:'Nova ação', resp:'—', prazo:'—', status:'gray'});
    const tbody = document.getElementById('pa-tbody-'+pid);
    if(tbody) tbody.innerHTML = window['_renderPARows_'+pid](sel ? sel.value : '');
    saveD(true);
  };

  }catch(err){
    const el=document.getElementById('content-'+pid);
    if(el) el.innerHTML='<div class="card mt16" style="color:var(--coral);padding:20px">❌ Erro: '+err.message+'</div>';
  }
}

function enc_set(nome,field,val){ D.encontros[nome].infos[field]=val; saveD(true); }
function cycleTagVal(el){
  cycleTag(el);
  return Object.entries(SL).find(([k,v])=>v===el.textContent.trim())?.[0]||'gray';
}

// ═══════════ DASHBOARD ═══════════
function renderDashboard(){
  renderKpiTable();
  renderProjStatus();
  renderDashDestaques();
  renderRiscos();
  renderDecisoes();
}
function renderKpiTable(){
  const tb=document.getElementById('kpi-table-body');
  if(!tb) return;

  // Format helpers
  const fmtOpts = [
    {v:'geral', l:'Geral',      prefix:'',   suffix:'',  placeholder:'—'},
    {v:'brl',   l:'R$ Contábil',prefix:'R$ ',suffix:'',  placeholder:'R$ 0,00'},
    {v:'usd',   l:'$ USD',      prefix:'$ ', suffix:'',  placeholder:'$ 0.00'},
    {v:'pct',   l:'%',          prefix:'',   suffix:'%', placeholder:'0%'},
    {v:'num',   l:'Número',     prefix:'',   suffix:'',  placeholder:'0'},
    {v:'k',     l:'K (mil)',    prefix:'',   suffix:'K', placeholder:'0K'},
  ];

  function fmtDisplay(val, fmt){
    if(!val||val==='—'||val==='') return '—';
    const f = fmtOpts.find(o=>o.v===fmt)||fmtOpts[0];
    // If value already has prefix/suffix, return as-is
    const clean = val.replace(f.prefix,'').replace(f.suffix,'').trim();
    if(!clean||clean==='—') return '—';
    return f.prefix + clean + f.suffix;
  }

  function fmtPlaceholder(fmt){
    return (fmtOpts.find(o=>o.v===fmt)||fmtOpts[0]).placeholder;
  }

  tb.innerHTML=D.kpis.map((k,i)=>{
    const fmt = k.fmt||'geral';
    const fmtSel = fmtOpts.map(o=>'<option value="'+o.v+'"'+(fmt===o.v?' selected':'')+'>'+o.l+'</option>').join('');
    const ph = fmtPlaceholder(fmt);
    const metaVal = k.meta||'';
    const atualVal = k.atual||'';
    return '<tr id="ktr-'+k.id+'">'
      +'<td contenteditable="true" onblur="D.kpis['+i+'].nome=this.textContent;saveD(true)">'+k.nome+'</td>'
      +'<td style="min-width:110px">'
        +'<select onchange="D.kpis['+i+'].fmt=this.value;renderKpiTable();saveD(true)" '
        +'style="background:var(--navy-m);border:1px solid rgba(255,255,255,.1);color:var(--g200);border-radius:4px;padding:3px 6px;font-size:.75rem;width:100%">'
        +fmtSel
        +'</select>'
      +'</td>'
      +'<td contenteditable="true" '
        +'data-kpi-idx="'+i+'" data-kpi-field="meta" '
        +'onblur="_kpiSave('+i+',\'meta\',this)" '
        +'style="color:var(--g200);min-width:90px" '
        +'title="'+ph+'">'
        +(metaVal ? fmtDisplay(metaVal,fmt) : '<span style="color:var(--g600)">'+ph+'</span>')
      +'</td>'
      +'<td contenteditable="true" '
        +'data-kpi-idx="'+i+'" data-kpi-field="atual" '
        +'onblur="_kpiSave('+i+',\'atual\',this)" '
        +'style="min-width:90px" '
        +'title="'+ph+'">'
        +(atualVal ? fmtDisplay(atualVal,fmt) : '<span style="color:var(--g600)">'+ph+'</span>')
      +'</td>'
      +'<td>'
        +'<select onchange="D.kpis['+i+'].tend=this.value;saveD(true)" style="background:var(--navy-m);border:1px solid rgba(255,255,255,.1);color:var(--white);border-radius:4px;padding:3px 7px;font-size:.8rem">'
        +'<option value="↑" '+(k.tend==='↑'?'selected':'')+'>↑ Alta</option>'
        +'<option value="→" '+(k.tend==='→'?'selected':'')+'>→ Estável</option>'
        +'<option value="↓" '+(k.tend==='↓'?'selected':'')+'>↓ Queda</option>'
        +'</select>'
      +'</td>'
      +'<td contenteditable="true" style="outline:none"></td>'
      +'<td><button class="btn btn-g btn-sm" onclick="D.kpis.splice('+i+',1);renderKpiTable();saveD(true)">✕</button></td>'
      +'</tr>';
  }).join('');
}

// Save KPI value stripping prefix/suffix before storing
function _kpiSave(i, field, el){
  const fmt = D.kpis[i].fmt||'geral';
  const fmtMap = {geral:{p:'',s:''},brl:{p:'R$ ',s:''},usd:{p:'$ ',s:''},pct:{p:'',s:'%'},num:{p:'',s:''},k:{p:'',s:'K'}};
  const f = fmtMap[fmt]||{p:'',s:''};
  let raw = el.textContent.trim();
  // Strip prefix/suffix to store raw number
  if(f.p && raw.startsWith(f.p)) raw = raw.slice(f.p.length);
  if(f.s && raw.endsWith(f.s)) raw = raw.slice(0,-f.s.length);
  D.kpis[i][field] = raw.trim()||'';
  saveD(true);
  // Re-render cell with formatted value
  renderKpiTable();
}
function renderProjStatus(){
  const tb=document.getElementById('proj-status-body');
  if(!tb) return;
  tb.innerHTML=D.projStatus.map((p,i)=>`
    <tr>
      <td contenteditable="true" style="font-weight:600;outline:none" onblur="D.projStatus[${i}].proj=this.textContent;saveD(true)">${p.proj}</td>
      <td>${tagHTML(p.status,'onclick=\'D.projStatus['+i+'].status=cycleTagVal(this);saveD(true)\'')} </td>
      <td contenteditable="true" onblur="D.projStatus[${i}].marco=this.textContent;saveD(true)">${p.marco}</td>
      <td style="min-width:140px">
        <div style="display:flex;align-items:center;gap:7px">
          <div class="pb" style="flex:1"><div class="pbf ${p.status==='green'?'gn':p.status==='amber'?'a':p.status==='red'?'c':'b'}" style="width:${p.prog}%"></div></div>
          <span style="font-size:.72rem;color:var(--g400);min-width:28px" contenteditable="true" onblur="D.projStatus[${i}].prog=parseInt(this.textContent)||0;renderProjStatus();saveD(true)">${p.prog}%</span>
          <button onclick="D.projStatus.splice(${i},1);renderProjStatus();saveD(true)" style="background:none;border:none;color:var(--g600);cursor:pointer;font-size:.8rem;padding:2px 4px" title="Remover">✕</button>
        </div>
      </td>
    </tr>
  `).join('');
  // Add "+ Projeto" button after tbody
  const addBtn=document.getElementById('add-proj-status-btn');
  if(addBtn) return;
  const container=tb.closest('.card')||tb.closest('div');
  if(container){
    const btn=document.createElement('button');
    btn.id='add-proj-status-btn';
    btn.className='btn btn-g btn-sm mt12';
    btn.textContent='+ Projeto';
    btn.addEventListener('click',addProjStatus);
    container.appendChild(btn);
  }
}
function addProjStatus(){
  D.projStatus.push({proj:'Novo Projeto',status:'gray',marco:'—',prog:0});
  renderProjStatus();
  saveD(true);
}
function renderRiscos(){
  const tb=document.getElementById('riscos-body');
  if(!tb) return;
  tb.innerHTML=D.riscos.map((r,i)=>`
    <tr>
      <td contenteditable="true" onblur="D.riscos[${i}].risco=this.textContent;saveD(true)">${r.risco}</td>
      <td contenteditable="true" onblur="D.riscos[${i}].impacto=this.textContent;saveD(true)">${r.impacto}</td>
      <td><button class="btn btn-g btn-sm" onclick="D.riscos.splice(${i},1);renderRiscos();saveD(true)">✕</button></td>
    </tr>
  `).join('');
  // Add "+" button after table
}
function renderDecisoes(){
  const tb=document.getElementById('dec-body');
  if(!tb) return;
  tb.innerHTML=D.decisoes.map((d,i)=>`
    <tr>
      <td contenteditable="true" onblur="D.decisoes[${i}].decisao=this.textContent;saveD(true)">${d.decisao}</td>
      <td contenteditable="true" onblur="D.decisoes[${i}].resp=this.textContent;saveD(true)">${d.resp}</td>
      <td contenteditable="true" onblur="D.decisoes[${i}].prazo=this.textContent;saveD(true)">${d.prazo}</td>
      <td><button class="btn btn-g btn-sm" onclick="D.decisoes.splice(${i},1);renderDecisoes();saveD(true)">✕</button></td>
    </tr>
  `).join('');
}

// ═══════════ KPI AREAS (P3) ═══════════
function renderKpiAreas(){
  const tabs=document.getElementById('kpi-area-tabs');
  const content=document.getElementById('kpi-area-content');
  if(!tabs||!content) return;
  tabs.innerHTML=D.kpiAreas.map((a,i)=>`
    <div class="ptab ${i===0?'active':''}" onclick="switchKpiArea(${i},this)">${a.label}</div>
  `).join('') + '<div class="ptab" onclick="switchKpiArea(\'sellinout\',this)">📦 Sell-in / Sell-out</div>';
  renderKpiAreaContent(0);
}
function switchKpiArea(idx,el){
  document.querySelectorAll('#kpi-area-tabs .ptab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  if(idx==='sellinout'){
    const content=document.getElementById('kpi-area-content');
    if(!content) return;
    content.innerHTML=`
      <div class="fca gap10 mb12" style="margin-top:4px">
        <h2 style="margin:0">Sell-in e Sell-out por Cooperativa</h2>
      </div>
      <div class="alert alert-w" style="flex-direction:column;align-items:flex-start;gap:10px">
        <div>📤 A cada 2 meses a Corteva envia a planilha. Faça o upload abaixo — o painel atualiza automaticamente.</div>
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
          <label style="display:inline-flex;align-items:center;gap:7px;background:var(--coral);color:#fff;border-radius:7px;padding:7px 14px;font-size:.78rem;font-weight:700;cursor:pointer;transition:opacity .15s" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
            📎 Upload Planilha (.xlsx / .csv)
            <input type="file" id="so-upload-file" accept=".xlsx,.xls,.csv" style="display:none" onchange="handleSoUpload(event)">
          </label>
          <span id="so-upload-status" style="font-size:.78rem;color:var(--g400)">Nenhum arquivo carregado</span>
          <button class="btn btn-g btn-sm" onclick="exportSoTemplate()" title="Baixar modelo de planilha">⬇ Baixar modelo</button>
        </div>
      </div>
      <div class="frow" style="margin-bottom:14px">
        <input class="fsearch" id="so-search" placeholder="🔍 Buscar cooperativa…">
        <select class="fsel" id="so-cat"><option value="">Todos</option><option value="MindCoop">MindCoop</option><option value="ESCALA">ESCALA</option></select>
        <select class="fsel" id="so-status"><option value="">Todos status</option><option value="green">🟢 ≥100%</option><option value="amber">🟡 80–99%</option><option value="red">🔴 &lt;80%</option></select>
      </div>
      <div class="g4 mb16" id="so-kpi-cards"></div>
      <div class="card">
        <div class="tw">
          <table class="sortable" id="so-table">
            <thead><tr>
              <th data-col="num">#</th>
              <th data-col="nome">Cooperativa</th>
              <th data-col="cat">Categoria</th>
              <th data-col="sellin">Sell-in (R$)</th>
              <th data-col="sellout">Sell-out (%)</th>
              <th data-col="meta">Meta Sell-in</th>
              <th data-col="ating">Atingimento</th>
              <th data-col="status">Status</th>
            </tr></thead>
            <tbody id="so-body"></tbody>
          </table>
        </div>
      </div>
    `;
    // bind filters
    ['so-search','so-cat','so-status'].forEach(id=>{
      const el2=document.getElementById(id);
      if(el2){ el2.addEventListener('input',renderSellOut); el2.addEventListener('change',renderSellOut); }
    });
    renderSellOut();
  } else {
    renderKpiAreaContent(idx);
  }
}
function renderKpiAreaContent(idx){
  const a=D.kpiAreas[idx];
  const content=document.getElementById('kpi-area-content');
  if(!content||!a) return;

  const hasForums=a.forumRows;
  const hasRadar=false;
  const isOpp=a.id==='oport';
  const isCapExt=a.id==='cap-ext';

  let coopTableHTML='';
  if(!hasForums && !hasRadar && a.coopRows){};
  if(a.coopRows && a.coopRows.length>0 && !isOpp && !isCapExt){
    coopTableHTML=`
      <h2 class="mt22" contenteditable="true">Acompanhamento por Cooperativa</h2>
      <div class="card">
        <div class="tw"><table>
          <thead><tr><th>Cooperativa</th><th>Detalhe</th><th>Status</th><th>Responsável</th><th>Última Atualização</th><th>Próxima Ação</th></tr></thead>
          <tbody id="kpi-coop-body-${idx}">
            ${a.coopRows.map((r,ri)=>`
              <tr>
                <td contenteditable="true" onblur="D.kpiAreas[${idx}].coopRows[${ri}].coop=this.textContent;saveD(true)">${r.coop}</td>
                <td contenteditable="true" onblur="D.kpiAreas[${idx}].coopRows[${ri}].detalhe=this.textContent;saveD(true)">${r.detalhe||''}</td>
                <td contenteditable="true" style="outline:none">${tagHTML(r.status,'onclick=\'D.kpiAreas['+idx+'].coopRows['+ri+'].status=cycleTagVal(this);saveD(true)\'')}</td>
                <td contenteditable="true" onblur="D.kpiAreas[${idx}].coopRows[${ri}].resp=this.textContent;saveD(true)">${r.resp||''}</td>
                <td contenteditable="true" onblur="D.kpiAreas[${idx}].coopRows[${ri}].updated=this.textContent;saveD(true)">${r.updated||''}</td>
                <td contenteditable="true" onblur="D.kpiAreas[${idx}].coopRows[${ri}].prox=this.textContent;saveD(true)">${r.prox||''}</td>
              </tr>
            `).join('')}
          </tbody>
        </table></div>
        <button class="btn btn-g btn-sm mt12" onclick="D.kpiAreas[${idx}].coopRows.push({coop:'',detalhe:'',status:'gray',resp:'',updated:'',prox:''});renderKpiAreaContent(${idx});saveD(true)">+ Linha</button>
      </div>
    `;
  }
  if(isOpp && a.coopRows){
    coopTableHTML=`
      <h2 class="mt22" contenteditable="true">Acompanhamento das Oportunidades</h2>
      <div class="card">
        <div class="tw"><table>
          <thead><tr><th>Cooperativa</th><th>Oportunidade</th><th>Categoria</th><th>Responsável</th><th>Status</th><th>Próxima Ação</th></tr></thead>
          <tbody>
            ${a.coopRows.map((r,ri)=>`
              <tr>
                <td contenteditable="true" onblur="D.kpiAreas[${idx}].coopRows[${ri}].coop=this.textContent;saveD(true)">${r.coop||''}</td>
                <td contenteditable="true" onblur="D.kpiAreas[${idx}].coopRows[${ri}].opp=this.textContent;saveD(true)">${r.opp||''}</td>
                <td contenteditable="true" onblur="D.kpiAreas[${idx}].coopRows[${ri}].cat=this.textContent;saveD(true)">${r.cat||''}</td>
                <td contenteditable="true" onblur="D.kpiAreas[${idx}].coopRows[${ri}].resp=this.textContent;saveD(true)">${r.resp||''}</td>
                <td contenteditable="true" style="outline:none">${tagHTML(r.status,'onclick=\'D.kpiAreas['+idx+'].coopRows['+ri+'].status=cycleTagVal(this);saveD(true)\'')}</td>
                <td contenteditable="true" onblur="D.kpiAreas[${idx}].coopRows[${ri}].prox=this.textContent;saveD(true)">${r.prox||''}</td>
              </tr>
            `).join('')}
          </tbody>
        </table></div>
        <button class="btn btn-g btn-sm mt12" onclick="D.kpiAreas[${idx}].coopRows.push({coop:'',opp:'',cat:'',resp:'',status:'gray',prox:''});renderKpiAreaContent(${idx});saveD(true)">+ Linha</button>
      </div>
    `;
  }

  let extraHTML='';
  if(hasRadar){
    const r=a.radar||{};
    extraHTML=`
      <h2 class="mt22" contenteditable="true">Radar Executivo do Programa ESCALA</h2>
      <div class="card" style="max-width:600px">
        <div class="radar-row"><div class="radar-ico">🟢</div><div class="radar-label" contenteditable="true">Saúde geral do Programa</div>${tagHTML(r.saude||'gray','onclick=\'D.kpiAreas['+idx+'].radar.saude=cycleTagVal(this);saveD(true)\'')}</div>
        <div class="radar-row"><div class="radar-ico">📊</div><div class="radar-label" contenteditable="true">Status dos KPIs</div>${tagHTML(r.kpis||'gray','onclick=\'D.kpiAreas['+idx+'].radar.kpis=cycleTagVal(this);saveD(true)\'')}</div>
        <div class="radar-row"><div class="radar-ico">📅</div><div class="radar-label" contenteditable="true">Próximos marcos (60 dias)</div><div class="fv" contenteditable="true" onblur="D.kpiAreas[${idx}].radar.marcos=this.textContent;saveD(true)" style="flex:1;border:none;font-size:.82rem">${r.marcos||'—'}</div></div>
        <div class="radar-row"><div class="radar-ico">⚠️</div><div class="radar-label" contenteditable="true">Principais riscos</div><div class="fv" contenteditable="true" onblur="D.kpiAreas[${idx}].radar.riscos=this.textContent;saveD(true)" style="flex:1;border:none;font-size:.82rem">${r.riscos||'—'}</div></div>
        <div class="radar-row"><div class="radar-ico">✅</div><div class="radar-label" contenteditable="true">Decisões pendentes</div><div class="fv" contenteditable="true" onblur="D.kpiAreas[${idx}].radar.decisoes=this.textContent;saveD(true)" style="flex:1;border:none;font-size:.82rem">${r.decisoes||'—'}</div></div>
      </div>
    `;
  }

  let forumHTML='';
  if(hasForums){
    const resum=a.resumo||{};
    forumHTML=`
      <h2 class="mt22" contenteditable="true">Painel de Capacitações — Resumo</h2>
      <div class="g3 mb16">
        ${[['Fóruns previstos','previstos'],['Fóruns realizados','realizados'],['Participantes','participantes'],['Público capacitado','publico'],['NPS médio','nps'],['Relatórios concluídos','relatorios']].map(([l,k])=>`
          <div class="kcard b"><div class="klbl" contenteditable="true">${l}</div><div class="kval" contenteditable="true" onblur="D.kpiAreas[${idx}].resumo.${k}=this.textContent;saveD(true)" contenteditable="true" style="outline:none">${resum[k]||'—'}</div></div>
        `).join('')}
      </div>
      <h2 contenteditable="true">Acompanhamento dos Fóruns</h2>
      <div class="card">
        <div class="tw"><table>
          <thead><tr><th>Projeto</th><th>Evento/Módulo</th><th>Período</th><th>Status</th><th>Responsável</th><th>Próximos Passos</th></tr></thead>
          <tbody>
            ${a.forumRows.map((f,fi)=>`
              <tr>
                <td><span class="tag tag-teal" style="font-size:.68rem">${f.proj}</span></td>
                <td contenteditable="true" onblur="D.kpiAreas[${idx}].forumRows[${fi}].evento=this.textContent;saveD(true)">${f.evento}</td>
                <td contenteditable="true" onblur="D.kpiAreas[${idx}].forumRows[${fi}].periodo=this.textContent;saveD(true)">${f.periodo||'—'}</td>
                <td contenteditable="true" style="outline:none">${tagHTML(f.status,'onclick=\'D.kpiAreas['+idx+'].forumRows['+fi+'].status=cycleTagVal(this);saveD(true)\'')}</td>
                <td contenteditable="true" onblur="D.kpiAreas[${idx}].forumRows[${fi}].resp=this.textContent;saveD(true)">${f.resp}</td>
                <td contenteditable="true" onblur="D.kpiAreas[${idx}].forumRows[${fi}].prox=this.textContent;saveD(true)">${f.prox||'—'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table></div>
      </div>
    `;
  }

  content.innerHTML=`
    <div class="stag" contenteditable="true">Objetivo</div>
    <p style="font-size:.83rem;color:var(--g200);margin-bottom:18px;line-height:1.6" contenteditable="true" style="outline:none">${a.objetivo}</p>
    <h2 contenteditable="true">Principais Entregáveis</h2>
    <div class="card mb16">
      <div class="tw"><table>
        <thead><tr><th>Entregável</th><th>Responsável</th><th>Status</th></tr></thead>
        <tbody>
          ${a.entregaveis.map((e,ei)=>`
            <tr>
              <td contenteditable="true" onblur="D.kpiAreas[${idx}].entregaveis[${ei}].ent=this.textContent;saveD(true)">${e.ent}</td>
              <td><span class="resp-${e.resp}">${e.resp==='zmp'?'ZMP':e.resp==='corteva'?'Corteva':'ZMP + Corteva'}</span></td>
              <td contenteditable="true" style="outline:none">${tagHTML(e.status,'onclick=\'D.kpiAreas['+idx+'].entregaveis['+ei+'].status=cycleTagVal(this);saveD(true)\'')}</td>
            </tr>
          `).join('')}
        </tbody>
      </table></div>
    </div>
    ${!isCapExt ? `<div class="fca gap10 mb12">
      <h2 style="margin:0">Health Check — <span style="color:var(--teal)">${a.healthMonth||'julho'}</span></h2>
      <select class="month-select" onchange="_hcChangeMonth(${idx},this.value)">
        ${MONTHS.map(m=>`<option ${m===a.healthMonth?'selected':''}>${m}</option>`).join('')}
      </select>
    </div>
    <div class="card mb16 hc-wrap-wrap" data-hcidx="${idx}" style="max-width:680px">
      ${a.checks.map((h,hi)=>`
        <div class="hc-row" style="display:grid;grid-template-columns:1fr auto 220px auto;gap:10px;align-items:center">
          <div class="hc-check">
            <input type="checkbox" ${h.done?'checked':''} onchange="_hcSetDone(${idx},${hi},this.checked)">
            <span contenteditable="true" style="outline:none" onblur="D.kpiAreas[${idx}].checks[${hi}].txt=this.textContent;saveD(true)">${h.txt}</span>
          </div>
          ${tagHTML(h.status,'onclick=\'D.kpiAreas['+idx+'].checks['+hi+'].status=cycleTagVal(this);saveD(true)\'' )}
          <div contenteditable="true" style="outline:none;font-size:.78rem;color:var(--g400);background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:6px;padding:4px 8px;min-height:26px" onblur="D.kpiAreas[${idx}].checks[${hi}].obs=this.textContent;saveD(true)" data-placeholder="Observação...">${h.obs||''}</div>
          <button onclick="D.kpiAreas[${idx}].checks.splice(${hi},1);renderKpiAreaContent(${idx});saveD(true)" style="background:none;border:none;color:var(--g600);cursor:pointer;font-size:.85rem;padding:2px 5px;flex-shrink:0" title="Remover">✕</button>
        </div>
      `).join('')}
      <button class="btn btn-g btn-sm mt12" onclick="D.kpiAreas[${idx}].checks.push({txt:'Nova verificação',done:false,status:'gray',obs:''});renderKpiAreaContent(${idx});saveD(true)">+ Adicionar verificação</button>
    </div>
    ${extraHTML}
    ${forumHTML}` : ""}

    ${coopTableHTML}

  ${isCapExt ? `
  <!-- Sumário Capacitação Externa -->
  <div class="divider mt22"></div>
  <h2 contenteditable="true">Sumário de Capacitações</h2>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:12px">
    <div class="card" style="text-align:center;padding:20px 16px">
      <div style="font-size:.72rem;color:var(--g400);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Fóruns Previstos</div>
      <div contenteditable="true" id="cap-previstos-${idx}" style="font-size:2rem;font-weight:900;color:var(--white);outline:none" onblur="D.kpiAreas[${idx}].resumo.previstos=this.textContent;saveD(true)">${a.resumo?.previstos||'—'}</div>
    </div>
    <div class="card" style="text-align:center;padding:20px 16px">
      <div style="font-size:.72rem;color:var(--g400);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Fóruns Realizados</div>
      <div contenteditable="true" id="cap-realizados-${idx}" style="font-size:2rem;font-weight:900;color:var(--green);outline:none" onblur="D.kpiAreas[${idx}].resumo.realizados=this.textContent;saveD(true)">${a.resumo?.realizados||'—'}</div>
    </div>
    <div class="card" style="text-align:center;padding:20px 16px">
      <div style="font-size:.72rem;color:var(--g400);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">NPS Médio</div>
      <div contenteditable="true" id="cap-nps-${idx}" style="font-size:2rem;font-weight:900;color:var(--teal);outline:none" onblur="D.kpiAreas[${idx}].resumo.nps=this.textContent;saveD(true)">${a.resumo?.nps||'—'}</div>
    </div>
    <div class="card" style="text-align:center;padding:20px 16px">
      <div style="font-size:.72rem;color:var(--g400);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Público Capacitado</div>
      <div contenteditable="true" id="cap-publico-${idx}" style="font-size:2rem;font-weight:900;color:var(--amber);outline:none" onblur="D.kpiAreas[${idx}].resumo.publico=this.textContent;saveD(true)">${a.resumo?.publico||'—'}</div>
    </div>
  </div>
  ` : ''}

  `;
}

// ═══════════ SELL-OUT TABLE ═══════════
function renderSellOut(){
  const tb=document.getElementById('so-body');
  if(!tb) return;
  const search=(document.getElementById('so-search')||{}).value?.toLowerCase()||'';
  const cat=(document.getElementById('so-cat')||{}).value||'';
  let rows=D.coopsData;
  if(search) rows=rows.filter(r=>r.nome.toLowerCase().includes(search));
  if(cat) rows=rows.filter(r=>r.cat===cat);
  renderSoKpis(rows);
  tb.innerHTML=rows.map((r,i)=>{
    const ating=parseFloat(r.ating)||0;
    const st=ating>=100?'green':ating>=80?'amber':ating>0?'red':'gray';
    const coopRef=D.coopsData[r.num-1]||{};
    const soSt=coopRef.soStatus||'blue';
    return `
      <tr>
        <td style="color:var(--g600)">${r.num}</td>
        <td style="font-weight:600">${r.nome}</td>
        <td><span class="tag ${r.cat==='MindCoop'?'tag-teal':'tag-blue'}" style="font-size:.68rem">${r.cat}</span></td>
        <td contenteditable="true" onblur="D.coopsData[${r.num-1}].sellin=this.textContent;calcSoRow(${r.num-1});saveD(true)">${r.sellin||'—'}</td>
        <td contenteditable="true" onblur="D.coopsData[${r.num-1}].sellout=this.textContent;saveD(true)">${r.sellout||'—'}</td>
        <td contenteditable="true" onblur="D.coopsData[${r.num-1}].meta=this.textContent;calcSoRow(${r.num-1});saveD(true)">${r.meta||'—'}</td>
        <td>
          ${ating>0?`<div style="display:flex;align-items:center;gap:6px">
            <div class="pb" style="width:70px;flex-shrink:0"><div class="pbf ${st==='green'?'gn':st==='amber'?'a':'c'}" style="width:${Math.min(ating,100)}%"></div></div>
            <span style="font-size:.72rem">${ating}%</span>
          </div>`:'—'}
        </td>
        <td>${soTagHTML(soSt)}</td>
      </tr>
    `;
  }).join('');
}
function calcSoRow(idx){
  const r=D.coopsData[idx];
  const si=parseFloat(r.sellin.replace(/[^0-9,.]/g,'').replace(/\./g,'').replace(',','.'))||0;
  const mt=parseFloat(r.meta.replace(/[^0-9,.]/g,'').replace(/\./g,'').replace(',','.'))||0;
  r.ating=mt>0?(si/mt*100).toFixed(1):'';
  renderSellOut();
}
function parseVal(v){
  var s=String(v||'').replace('R$ ','').replace('R$','').trim();
  var clean=s.split('.').join('').replace(',','.');
  return parseFloat(clean)||0;
}

function renderSoKpis(rows){
  const el=document.getElementById('so-kpi-cards');
  if(!el) return;
  const acima=rows.filter(r=>parseFloat(r.ating)>=100).length;
  const atenc=rows.filter(r=>{const a=parseFloat(r.ating);return a>=80&&a<100;}).length;
  const crit=rows.filter(r=>{const a=parseFloat(r.ating);return a>0&&a<80;}).length;
  const totalSI=rows.reduce((s,r)=>s+parseVal(r.sellin),0);
  el.innerHTML=`
    <div class="kcard gn"><div class="klbl" contenteditable="true">Acima da meta (≥100%)</div><div class="kval" contenteditable="true" style="outline:none">${acima}</div></div>
    <div class="kcard a"><div class="klbl" contenteditable="true">Em atenção (80–99%)</div><div class="kval" contenteditable="true" style="outline:none">${atenc}</div></div>
    <div class="kcard c"><div class="klbl" contenteditable="true">Críticas (&lt;80%)</div><div class="kval" contenteditable="true" style="outline:none">${crit}</div></div>
    <div class="kcard t"><div class="klbl" contenteditable="true">Sell-in Total (R$)</div><div class="kval" style="font-size:1.3rem" contenteditable="true" style="outline:none">${totalSI>=1e9?'R$ '+(totalSI/1e9).toFixed(1).replace('.',',')+'B':totalSI>=1e6?'R$ '+(totalSI/1e6).toFixed(0)+'M':totalSI>0?'R$ '+totalSI.toLocaleString('pt-BR'):'—'}</div></div>
  `;
}

// ═══════════ ENCONTROS P4 ═══════════
function renderEncontros(){
  const tabs=document.getElementById('enc-tabs');
  const content=document.getElementById('enc-content');
  if(!tabs||!content) return;
  const keys=['MINDCOOP','INFOCOOP','INTECOOP','ELITECOOP','GOCOOP'];
  tabs.innerHTML=keys.map((k,i)=>`
    <div class="ptab ${i===0?'active':''}" onclick="switchEnc('${k}',this)" style="border:1px solid rgba(255,255,255,.08);border-radius:6px;margin-bottom:0">${k}</div>
  `).join('');
  renderEncContent('MINDCOOP');
}
function switchEnc(nome,el){
  document.querySelectorAll('#enc-tabs .ptab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  renderEncContent(nome);
}
function renderEncContent(nome){
  const enc=D.encontros[nome];
  const content=document.getElementById('enc-content');
  if(!content||!enc) return;
  content.innerHTML=`
    <div class="card mt16 mb16">
      <div class="ch"><div class="ctitle" contenteditable="true">1. Informações Gerais</div>${tagHTML(enc.infos.status,'onclick=\'D.encontros["'+nome+'"].infos.status=cycleTagVal(this);saveD(true)\'')}</div>
      <div class="g2" style="gap:10px;font-size:.82rem">
        <div><div class="fl" contenteditable="true">Objetivo do Encontro</div><div class="fv" contenteditable="true" onblur="D.encontros['${nome}'].infos.objetivo=this.textContent;saveD(true)">${enc.infos.objetivo||'—'}</div></div>
        <div><div class="fl" contenteditable="true">Público-alvo</div><div class="fv" contenteditable="true" onblur="D.encontros['${nome}'].infos.publico=this.textContent;saveD(true)">${enc.infos.publico||'—'}</div></div>
        <div><div class="fl" contenteditable="true">Data Prevista</div><div class="fv" contenteditable="true" onblur="D.encontros['${nome}'].infos.data=this.textContent;saveD(true)">${enc.infos.data||'—'}</div></div>
        <div><div class="fl" contenteditable="true">Local</div><div class="fv" contenteditable="true" onblur="D.encontros['${nome}'].infos.local=this.textContent;saveD(true)">${enc.infos.local||'—'}</div></div>
      </div>
    </div>
    <div class="g2" style="gap:14px">
      <div>
        <h2 contenteditable="true">2. Fases</h2>
        <div class="card">
          <div class="tw"><table>
            <thead><tr><th>Fase</th><th>Objetivo</th><th>Status</th></tr></thead>
            <tbody>${enc.fases.map((f,fi)=>`
              <tr>
                <td style="font-weight:600;white-space:nowrap">${f.fase}</td>
                <td contenteditable="true" onblur="D.encontros['${nome}'].fases[${fi}].obj=this.textContent;saveD(true)">${f.obj}</td>
                <td contenteditable="true" style="outline:none">${tagHTML(f.status,'onclick=\'D.encontros[\"'+nome+'\"].fases['+fi+'].status=cycleTagVal(this);saveD(true)\'')}</td>
              </tr>
            `).join('')}</tbody>
          </table></div>
        </div>
        <h2 class="mt16" contenteditable="true">7. Aprendizados</h2>
        <div class="card">
          <div class="tw"><table>
            <thead><tr><th>O que funcionou</th><th>O que melhorar</th><th>Aplicação futura</th></tr></thead>
            <tbody>${enc.aprendizados.map((a,ai)=>`
              <tr>
                <td contenteditable="true" onblur="D.encontros['${nome}'].aprendizados[${ai}].func=this.textContent;saveD(true)">${a.func||''}</td>
                <td contenteditable="true" onblur="D.encontros['${nome}'].aprendizados[${ai}].melhora=this.textContent;saveD(true)">${a.melhora||''}</td>
                <td contenteditable="true" onblur="D.encontros['${nome}'].aprendizados[${ai}].aplica=this.textContent;saveD(true)">${a.aplica||''}</td>
              </tr>
            `).join('')}</tbody>
          </table></div>
          <button class="btn btn-g btn-sm mt12" onclick="D.encontros['${nome}'].aprendizados.push({func:'',melhora:'',aplica:''});renderEncContent('${nome}');saveD(true)">+ Linha</button>
        </div>
      </div>
      <div>
        <h2 contenteditable="true">3. Entregáveis Estratégicos</h2>
        <div class="card">
          <div class="tw"><table>
            <thead><tr><th>Entregável</th><th>Resp.</th><th>Status</th></tr></thead>
            <tbody>${enc.entregaveis.map((e,ei)=>`
              <tr>
                <td contenteditable="true" onblur="D.encontros['${nome}'].entregaveis[${ei}].ent=this.textContent;saveD(true)">${e.ent}</td>
                <td contenteditable="true" onblur="D.encontros['${nome}'].entregaveis[${ei}].resp=this.textContent;saveD(true)" style="font-size:.75rem">${e.resp}</td>
                <td contenteditable="true" style="outline:none">${tagHTML(e.status,'onclick=\'D.encontros[\"'+nome+'\"].entregaveis['+ei+'].status=cycleTagVal(this);saveD(true)\'')}</td>
              </tr>
            `).join('')}</tbody>
          </table></div>
        </div>
        <h2 class="mt16" contenteditable="true">5. Decisões e Pendências</h2>
        <div class="card">
          <div class="tw"><table>
            <thead><tr><th>Item</th><th>Tipo</th><th>Resp.</th><th>Prazo</th><th>Status</th></tr></thead>
            <tbody id="dec-enc-${nome}">
              ${enc.decisoes.map((d,di)=>`
                <tr>
                  <td contenteditable="true" onblur="D.encontros['${nome}'].decisoes[${di}].item=this.textContent;saveD(true)">${d.item||''}</td>
                  <td contenteditable="true" onblur="D.encontros['${nome}'].decisoes[${di}].tipo=this.textContent;saveD(true)">${d.tipo}</td>
                  <td contenteditable="true" onblur="D.encontros['${nome}'].decisoes[${di}].resp=this.textContent;saveD(true)">${d.resp||''}</td>
                  <td contenteditable="true" onblur="D.encontros['${nome}'].decisoes[${di}].prazo=this.textContent;saveD(true)">${d.prazo||''}</td>
                  <td contenteditable="true" style="outline:none">${tagHTML(d.status,'onclick=\'D.encontros[\"'+nome+'\"].decisoes['+di+'].status=cycleTagVal(this);saveD(true)\'')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table></div>
          <button class="btn btn-g btn-sm mt12" onclick="D.encontros['${nome}'].decisoes.push({item:'',tipo:'Decisão',resp:'',prazo:'',status:'gray'});renderEncContent('${nome}');saveD(true)">+ Linha</button>
        </div>
        <h2 class="mt16" contenteditable="true">6. Plano de Ação Pós-Evento</h2>
        <div class="card">
          <div class="tw"><table>
            <thead><tr><th>Ação</th><th>Resp.</th><th>Prazo</th><th>Status</th></tr></thead>
            <tbody>
              ${enc.acoes.map((a,ai)=>`
                <tr>
                  <td contenteditable="true" onblur="D.encontros['${nome}'].acoes[${ai}].acao=this.textContent;saveD(true)">${a.acao||''}</td>
                  <td contenteditable="true" onblur="D.encontros['${nome}'].acoes[${ai}].resp=this.textContent;saveD(true)">${a.resp||''}</td>
                  <td contenteditable="true" onblur="D.encontros['${nome}'].acoes[${ai}].prazo=this.textContent;saveD(true)">${a.prazo||''}</td>
                  <td contenteditable="true" style="outline:none">${tagHTML(a.status,'onclick=\'D.encontros[\"'+nome+'\"].acoes['+ai+'].status=cycleTagVal(this);saveD(true)\'')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table></div>
          <button class="btn btn-g btn-sm mt12" onclick="D.encontros['${nome}'].acoes.push({acao:'',resp:'',prazo:'',status:'gray'});renderEncContent('${nome}');saveD(true)">+ Linha</button>
        </div>
      </div>
    </div>
  `;
}

// ═══════════ COOPERATIVAS P5 ═══════════
function renderCoops(){
  // Preenche KAM/RSL/RML automaticamente via TIME_INTERNO (PROCV)
  D.coopsTeam.forEach(c=>{
    const r=lookupKam(c.nome);
    if(r){ c.kam=r.kam; c.rsl=r.rsl; c.rml=r.rml; }
  });
  renderTimeInterno();
}
function openCoop360(idx){
  const sel=document.getElementById('coop360-select');
  if(sel) sel.value=idx;
  renderCoop360(idx);
  document.getElementById('coop360-panel').scrollIntoView({behavior:'smooth'});
}
function renderCoop360(idx){
  const c=D.coopsTeam[idx];
  if(!c) return;
  const el=document.getElementById('coop360-panel');
  if(!el) return;
  const dims=[['Relacionamento','rel'],['Desenvolvimento Técnico','tec'],['PINC','pinc'],['Resultados Comerciais','com']];
  
  function dimTag(val, k){
    const cls={green:'tag-green',amber:'tag-amber',red:'tag-red',blue:'tag-blue',gray:'tag-gray'};
    const lbl={green:'Concluído',amber:'Em prep.',red:'Atrasado',blue:'Em progresso',gray:'Não iniciado'};
    const v = val||'gray';
    return '<span class="tag '+(cls[v]||'tag-gray')+'" onclick="D.coopsTeam['+idx+'].dim.'+k+'=cycleTagVal(this);saveD(true)" style="cursor:pointer">'+(lbl[v]||v)+'</span>';
  }

  el.innerHTML=
    '<div class="card" style="border-top:3px solid var(--teal)">'
    +'<div class="ch">'
    +'<div style="font-family:Fenton" contenteditable="true">'+c.nome+'</div>'
    +'<span class="tag '+(c.cat==='MindCoop'?'tag-teal':'tag-blue')+'" style="font-size:.68rem">'+c.cat+'</span>'
    +'</div>'
    +'<h3 contenteditable="true">Painel 360° da Cooperativa</h3>'
    +'<div class="g2" style="gap:10px;max-width:480px">'
    +dims.map(([l,k])=>
      '<div class="hc-row">'
      +'<div style="font-size:.82rem;color:var(--g200);min-width:180px">'+l+'</div>'
      +dimTag(c.dim[k], k)
      +'</div>'
    ).join('')
    +'</div>'
    +'</div>';
}
function renderOpps(){
  const tb=document.getElementById('opp-body');
  if(!tb) return;
  tb.innerHTML=D.oportunidades.map((o,oi)=>`
    <tr>
      <td contenteditable="true" onblur="D.oportunidades[${oi}].coop=this.textContent;saveD(true)">${o.coop||''}</td>
      <td contenteditable="true" onblur="D.oportunidades[${oi}].opp=this.textContent;saveD(true)">${o.opp||''}</td>
      <td contenteditable="true" onblur="D.oportunidades[${oi}].cat=this.textContent;saveD(true)">${o.cat||''}</td>
      <td contenteditable="true" onblur="D.oportunidades[${oi}].prio=this.textContent;saveD(true)">${o.prio||''}</td>
      <td contenteditable="true" style="outline:none">${tagHTML(o.status,'onclick=\'D.oportunidades['+oi+'].status=cycleTagVal(this);saveD(true)\'')}</td>
      <td><button class="btn btn-g btn-sm" onclick="D.oportunidades.splice(${oi},1);renderOpps();saveD(true)">✕</button></td>
    </tr>
  `).join('');
}

// ═══════════ FOTOS ═══════════
function renderFotos(){
  const g=document.getElementById('photo-gallery');
  if(!g) return;
  g.innerHTML=D.fotos.map((f,i)=>`
    <div style="border-radius:8px;overflow:hidden;border:1px solid rgba(255,255,255,.07);aspect-ratio:1;position:relative;background:var(--navy-m)">
      <img src="${f.url}" style="width:100%;height:100%;object-fit:cover">
      <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,.8));padding:6px 8px;font-size:.68rem;color:var(--white)">${f.caption||''} ${f.prog?'· '+f.prog:''}</div>
      <button onclick="D.fotos.splice(${i},1);renderFotos();saveD(true)" style="position:absolute;top:5px;right:5px;background:rgba(0,0,0,.5);border:none;color:var(--white);border-radius:4px;cursor:pointer;font-size:.7rem;padding:2px 5px">✕</button>
    </div>
  `).join('');
}

// ═══════════ NAVIGATION ═══════════
const BC={p1:'Visão Geral',p2:'Dashboard Executivo',p3:'Acompanhamento KPIs',ponepage:'One page Coops',prelac:'Relacionamento Coops',p4:'Gestão de Encontros',p5:'Cooperativas',pmind:'MINDCOOP',pinfo:'INFOCOOP',pinte:'INTECOOP',pelite:'ELITECOOP',pgo:'GOCOOP',pfotos:'Fotos e Evidências',padmin:'Administração de Acessos',pgov:'Governança',ppinc:'PINC',ptimeline:'Timeline',psellinout:'Sell-in / Sell-out'};
function navigate(pid){
  try{_initLastSavedBadges();}catch(e){}
  // Fechar menu mobile ao navegar
  try{document.querySelector('nav')?.classList.remove('mob-open');}catch(e){}
  // Set accent color per program for hover effects
  const _PC={pmind:'#2ABFBF',pinfo:'#C850C0',pinte:'#F5A623',pelite:'#7B5EA7',pgo:'#E8553E'};
  document.documentElement.style.setProperty('--accent',_PC[pid]||'#2D6BE4');
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.ni').forEach(n=>n.classList.remove('active'));
  const _pg=document.getElementById('page-'+pid); if(_pg) _pg.classList.add('active'); else{console.error('page not found:',pid);return;}
  document.getElementById('bc-text').textContent=BC[pid]||pid;
  document.querySelectorAll('.ni').forEach(n=>{if(n.dataset.page===pid) n.classList.add('active');});
  // render programa pages on demand
  if(['pmind','pinfo','pinte','pelite','pgo'].includes(pid)) renderProgramaPage(pid);
  if(pid==='psellinout') renderSellOut();
  if(pid==='padmin' && window._isAdmin) setTimeout(_loadUsers, 100);
  // Re-render pages on every navigation so data stays in sync
  if(pid==='p1') { renderTimeline(); renderProgCards(); }
  if(pid==='p2') renderDashboard();
  if(pid==='p3') renderKpiAreas();
  if(pid==='ponepage') renderOnePage();
  if(pid==='p4') renderEncontros();
  if(pid==='p5') { renderCoops(); renderTimeInterno(); }
  if(pid==='prelac') renderRelac();
  if(pid==='ppac') renderPac();
  if(pid==='pgov') { renderRituais(); renderRitualMatrix(); renderGovCoops(); renderTemas(); }
  if(pid==='ppinc') renderPinc();
  if(pid==='ptimeline') { renderMarcos(); renderTimelineVisual(); }
  if(pid==='pfotos') renderFotos();
}

// ═══════════ SAVE / EXPORT / IMPORT ═══════════
let st=null;
function saveD(silent=false){
  clearTimeout(st);
  // Registrar timestamp da página/subpágina ativa
  const _activePage = document.querySelector('.page.active');
  if(_activePage){
    const _pid = _activePage.id.replace('page-','');
    if(!D.lastSaved) D.lastSaved={};
    D.lastSaved[_pid] = new Date().toLocaleString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'});
    _renderLastSaved(_pid);
  }
  st=setTimeout(async ()=>{
    const json = JSON.stringify(D);
    // 1. Save locally (instant)
    localStorage.setItem('escala_v2', json);
    // 2. Save to Supabase (shared across all users)
    try {
      const who = _currentProfile?.nome || _currentUser?.email || 'unknown';
      const {error} = await _sb.from('cockpit_data')
        .update({data: D, updated_at: new Date().toISOString(), updated_by: who})
        .eq('id','escala_main');
      if(error) console.warn('Supabase save error:', error.message);
    } catch(e) {
      console.warn('Supabase save failed:', e.message);
    }
    if(!silent) showToast();
  },800);
}
function _renderLastSaved(pid){
  const el = document.getElementById('last-saved-'+pid);
  if(el && D.lastSaved && D.lastSaved[pid]){
    el.textContent = '🕐 Atualizado: '+D.lastSaved[pid];
    el.style.display='inline-flex';
  }
}
function _initLastSavedBadges(){
  document.querySelectorAll('.page').forEach(p=>{
    const pid=p.id.replace('page-','');
    let badge=document.getElementById('last-saved-'+pid);
    if(!badge){
      badge=document.createElement('div');
      badge.id='last-saved-'+pid;
      badge.className='last-saved-badge';
      badge.style.cssText='display:none;font-size:.68rem;color:var(--g400);background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:3px 10px;margin-bottom:10px;align-items:center;gap:5px;width:fit-content';
      // Inserir após o primeiro div filho (depois do ptitle/psub)
      const after=p.querySelector('.psub, .ptitle');
      if(after && after.nextSibling) p.insertBefore(badge, after.nextSibling);
      else p.insertBefore(badge, p.firstChild);
    }
    if(D.lastSaved && D.lastSaved[pid]) _renderLastSaved(pid);
  });
}
function showToast(){const t=document.getElementById('toast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800);}

// ═══════════ EVENTS ═══════════

// ═══════════════════════════════════════════════════════════════
// SUPABASE AUTH — ZMP Cockpits
// Autenticação corporativa real · não altere este bloco
// ═══════════════════════════════════════════════════════════════
const _SB_URL  = 'https://xfxpohvbqckusoblphok.supabase.co';
const _SB_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmeHBvaHZicWNrdXNvYmxwaG9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1OTYyNjUsImV4cCI6MjA5OTE3MjI2NX0.WMJvWI7LXr_feS0j4GudaHEA11XpsOT6-vc73bQXWVo';
const _sb = supabase.createClient(_SB_URL, _SB_ANON);

let _currentUser    = null;
let _currentProfile = null;

const _PERFIL_LABELS = {
  admin:'Admin ZMP ✏️', editor:'Editor', viewer:'Visualizador'
};

// ── BOOT: verifica sessão ao carregar ──
(async () => {
  // Listener de mudanças de sessão
  _sb.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN' && session && !_currentUser) {
      await _bootApp(session.user);
    }
    if (event === 'SIGNED_OUT') {
      _currentUser = null; _currentProfile = null;
      document.getElementById('login-screen').style.display = 'flex';
      document.getElementById('app').style.display = 'none';
    }
    if (event === 'PASSWORD_RECOVERY') {
      document.getElementById('login-screen').style.display = 'flex';
      document.getElementById('app').style.display = 'none';
      _showPasswordRecovery(session);
    }
  });

  // Verificar sessão existente (captura token da URL hash automaticamente)
  const { data: { session } } = await _sb.auth.getSession();
  if (session && session.user) {
    if (window.location.hash.includes('type=recovery')) {
      document.getElementById('login-screen').style.display = 'flex';
      _showPasswordRecovery(session);
    } else {
      await _bootApp(session.user);
    }
  } else {
    document.getElementById('login-screen').style.display = 'flex';
    _setupLoginUI();
  }
})();

// ── BOOT APP após autenticação ──
async function _bootApp(user) {
  _currentUser = user;

  // Buscar perfil (com retry pois trigger pode ter delay)
  let profile = null;
  let profileError = null;
  for (let attempt = 0; attempt < 3; attempt++) {
    const { data: p, error: e } = await _sb
      .from('profiles').select('*').eq('id', user.id).single();
    if (p) { profile = p; break; }
    profileError = e;
    if (attempt < 2) await new Promise(r => setTimeout(r, 1000));
  }

  if (!profile) {
    // Criar perfil automaticamente se não existir (novo usuário convidado)
    const { data: newProfile, error: insertError } = await _sb
      .from('profiles')
      .insert({ id: user.id, nome: user.email.split('@')[0], email: user.email, perfil: 'viewer', status: 'ativo', must_change_password: true })
      .select().single();
    if (insertError || !newProfile) {
      _showLoginErr('Erro ao carregar perfil. Tente novamente.');
      await _sb.auth.signOut(); return;
    }
    profile = newProfile;
  }
  if (profile.status === 'bloqueado') {
    _showLoginErr('Sua conta está bloqueada. Contate o administrador.');
    await _sb.auth.signOut(); return;
  }

  // ── Proteção por domínio de e-mail
  const _allowedDomains = ['zmpi.com.br','zmpe.com.br','zmp.com.br','corteva.com','corteva.com.br','gmail.com','outlook.com','hotmail.com'];
  // Note: allows common domains for external collaborators
  const _emailDomain = (user.email || '').split('@')[1] || '';
  if (!_allowedDomains.includes(_emailDomain)) {
    _showLoginErr('Acesso não autorizado. Domínio de e-mail não permitido.');
    await _sb.auth.signOut(); return;
  }

  _currentProfile = profile;
  window._isAdmin = profile.perfil === 'admin';

  // must_change_password is handled in login screen (Primeiro Acesso flow)

  // Atualizar UI header
  document.getElementById('uname').textContent = _PERFIL_LABELS[profile.perfil] || profile.perfil;
  document.getElementById('uav').textContent = (profile.nome || user.email)[0].toUpperCase();

  // Mostrar menu Admin só para admin
  if (window._isAdmin) {
    const navAdm = document.getElementById('nav-admin-item');
    const navSec = document.getElementById('nav-admin-section');
    if (navAdm) navAdm.style.display = '';
    if (navSec) navSec.style.display = '';
    _setupAdminPage();
  }

  // Adicionar botões no header
  const ha = document.querySelector('.ha');
  if (ha && !document.getElementById('_logout-btn')) {
    // Botão alterar senha
    const cpBtn = document.createElement('button');
    cpBtn.id = '_cp-btn';
    cpBtn.className = 'btn btn-g';
    cpBtn.innerHTML = '🔑 Alterar senha';
    cpBtn.title = 'Alterar minha senha';
    cpBtn.addEventListener('click', () => {
      document.getElementById('cp-old').value = '';
      document.getElementById('cp-new').value = '';
      document.getElementById('cp-confirm').value = '';
      document.getElementById('cp-err').style.display = 'none';
      document.getElementById('cp-ok').style.display = 'none';
      document.getElementById('change-pass-modal').classList.add('open');
    });
    ha.insertBefore(cpBtn, ha.querySelector('#save-btn'));

    // Botão logout
    const btn = document.createElement('button');
    btn.id = '_logout-btn';
    btn.className = 'btn btn-g';
    btn.innerHTML = '⎋ Sair';
    btn.addEventListener('click', async () => {
      await _sb.auth.signOut();
    });
    ha.insertBefore(btn, ha.querySelector('#save-btn'));

    // Setup change password handler
    document.getElementById('cp-save-btn').addEventListener('click', async () => {
      const oldPass = document.getElementById('cp-old').value;
      const newPass = document.getElementById('cp-new').value;
      const confirm = document.getElementById('cp-confirm').value;
      const errEl = document.getElementById('cp-err');
      const okEl  = document.getElementById('cp-ok');
      const saveBtn = document.getElementById('cp-save-btn');
      errEl.style.display='none'; okEl.style.display='none';

      if (!oldPass) { errEl.textContent='Informe a senha atual.'; errEl.style.display=''; return; }
      if (newPass.length < 8) { errEl.textContent='Nova senha deve ter no mínimo 8 caracteres.'; errEl.style.display=''; return; }
      if (newPass !== confirm) { errEl.textContent='As senhas não coincidem.'; errEl.style.display=''; return; }

      saveBtn.disabled=true; saveBtn.textContent='⏳ Salvando…';

      // Verificar senha atual re-autenticando
      const { error: signInErr } = await _sb.auth.signInWithPassword({
        email: _currentUser.email,
        password: oldPass
      });
      if (signInErr) {
        errEl.textContent='Senha atual incorreta.'; errEl.style.display='';
        saveBtn.disabled=false; saveBtn.textContent='✓ Salvar nova senha';
        return;
      }

      // Atualizar para nova senha
      const { error } = await _sb.auth.updateUser({ password: newPass });
      saveBtn.disabled=false; saveBtn.textContent='✓ Salvar nova senha';

      if (error) {
        errEl.textContent='Erro: '+error.message; errEl.style.display='';
      } else {
        okEl.textContent='✓ Senha alterada com sucesso!'; okEl.style.display='';
        setTimeout(() => document.getElementById('change-pass-modal').classList.remove('open'), 2000);
      }
    });
  }

  // Registrar último acesso e log
  const _now = new Date().toISOString();
  _sb.from('profiles').update({ ultimo_acesso: _now }).eq('id', user.id).then(() => {});
  _sb.from('access_log').insert({
    user_id: user.id,
    email: user.email,
    nome: profile.nome,
    perfil: profile.perfil,
    acessado_em: _now,
    user_agent: navigator.userAgent.substring(0, 200)
  }).then(() => {});

  // Mostrar app
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app').style.display = 'block';

  // Load shared data from Supabase, then init
  await _loadSharedData();
  init();
  setTimeout(_applyPerms, 400);
  // Setup real-time sync
  _setupRealtime();

  // Bind nav items após login
  document.querySelectorAll('.ni').forEach(n => {
    n.addEventListener('click', function(){ navigate(this.dataset.page); });
  });

  // ── BIND ALL ACTION BUTTONS ── (also called after renderAll)
  window._bindActionButtons = function(){
  const _bind = (id, fn) => { const el=document.getElementById(id); if(el) el.addEventListener('click', fn); };

  // Header buttons
  _bind('save-btn',  () => saveD(false));
  _bind('exp-btn',   exportD);
  _bind('sidebar-toggle', () => {
    document.getElementById('sidebar').classList.toggle('collapsed');
    document.getElementById('main').classList.toggle('collapsed');
  });

  // Dashboard: add buttons
  _bind('add-kpi-btn',   () => { D.kpis.push({id:Date.now(),nome:'Novo KPI',meta:'—',atual:'—',tend:'→',status:'gray'}); renderKpiTable(); saveD(true); });
  _bind('add-risco-btn', () => { D.riscos.push({id:Date.now(),risco:'Novo risco',impacto:'Médio'}); renderRiscos(); saveD(true); });
  _bind('add-dec-btn',   () => { D.decisoes.push({id:Date.now(),decisao:'Nova decisão',resp:'—',prazo:'—'}); renderDecisoes(); saveD(true); });

  // Cooperativas: add buttons
  _bind('add-coop-btn', () => {
    const id = Date.now();
    D.coopsTeam.push({id,nome:'Nova Cooperativa',cat:'ESCALA',kam:'',rsl:'',rml:'',status:'gray',dim:{rel:'gray',tec:'gray',pinc:'gray',com:'gray'}});
    renderCoops(); saveD(true);
  });
  _bind('add-opp-btn', () => {
    D.oportunidades = D.oportunidades || [];
    D.oportunidades.push({id:Date.now(),coop:'—',opp:'Nova oportunidade',cat:'—',prior:'Média',status:'gray'});
    renderOpps(); saveD(true);
  });

  // Fotos: add button
  _bind('add-photo-btn', () => {
    const url = document.getElementById('photo-url')?.value.trim();
    if(!url) return;
    D.fotos = D.fotos || [];
    D.fotos.push({url, caption: document.getElementById('photo-caption')?.value||'', prog: document.getElementById('photo-prog')?.value||'', date: document.getElementById('photo-date')?.value||''});
    document.getElementById('photo-url').value = '';
    document.getElementById('photo-caption').value = '';
    renderFotos(); saveD(true);
  });

  // Import button
  _bind('imp-lbl', () => document.getElementById('imp-file')?.click());
  // Governança
  _bind('add-ritual-btn', () => { if(!D.rituais) D.rituais=[]; D.rituais.push({id:Date.now(),desc:'Novo ritual',detail:'',resp:'',mes:'',status:'gray'}); renderRituais(); saveD(true); });
  _bind('add-gov-coop-btn', () => { _openGovCoopModal(); });
  _bind('add-dash-coop-btn', () => { _openGovCoopModal(); });
  // Timeline
  _bind('add-marco-btn', () => { if(!D.marcos) D.marcos=[]; D.marcos.push({acao:'Novo marco',mes:''}); renderMarcos(); saveD(true); });
  };
  window._bindActionButtons();
}

// ── PERMISSÕES por perfil ──
function _applyPerms() {
  if (!_currentProfile) return;
  const p = _currentProfile.perfil;

  // Admin: edita tudo — sem restrições
  if (!_currentProfile || _currentProfile.perfil === 'admin') return;

  const isEditor = _currentProfile.perfil === 'editor';

  if (isEditor) {
    // Editor: pode editar mas não tem painel admin
    // Esconder importar (só admin importa dados)
    document.getElementById('imp-lbl') && (document.getElementById('imp-lbl').style.display = 'none');
    // Manter save, contenteditable e botões de ação
    return;
  }

  // Visualizador: readonly completo
  document.body.classList.add('readonly-mode');
  document.querySelectorAll('[contenteditable]').forEach(el => {
    el.setAttribute('contenteditable','false');
  });
  document.getElementById('save-btn') && (document.getElementById('save-btn').style.display = 'none');
  document.getElementById('imp-lbl') && (document.getElementById('imp-lbl').style.display = 'none');
  document.getElementById('exp-btn') && (document.getElementById('exp-btn').style.display = 'none');
}

// ── SETUP LOGIN UI ──
function _setupLoginUI() {
  const loginBtn = document.getElementById('login-btn');
  if (!loginBtn) return;

  loginBtn.addEventListener('click', _doLogin);

  // ── Primeiro acesso handler ──
  document.getElementById('first-btn')?.addEventListener('click', async () => {
    const email    = document.getElementById('first-email')?.value.trim();
    const tempPass = document.getElementById('first-temp')?.value;
    const newPass  = document.getElementById('first-new')?.value;
    const confirm  = document.getElementById('first-confirm')?.value;
    const errEl    = document.getElementById('first-error');
    const okEl     = document.getElementById('first-ok');
    const btn      = document.getElementById('first-btn');

    errEl.style.display = 'none';
    okEl.style.display  = 'none';

    if (!email)    { errEl.textContent='Informe seu e-mail.'; errEl.style.display=''; return; }
    if (!tempPass) { errEl.textContent='Informe a senha temporária.'; errEl.style.display=''; return; }
    if (newPass.length < 8) { errEl.textContent='Nova senha: mínimo 8 caracteres.'; errEl.style.display=''; return; }
    if (newPass !== confirm) { errEl.textContent='As senhas não coincidem.'; errEl.style.display=''; return; }

    btn.disabled = true; btn.textContent = '⏳ Verificando...';

    // 1. Login com senha temporária
    const { data, error } = await _sb.auth.signInWithPassword({ email, password: tempPass });
    if (error) {
      errEl.textContent = 'E-mail ou senha temporária incorretos.';
      errEl.style.display = '';
      btn.disabled = false; btn.textContent = '✓ Confirmar e Entrar';
      return;
    }

    // 2. Atualizar para nova senha
    btn.textContent = '⏳ Definindo sua senha...';
    const { error: updateErr } = await _sb.auth.updateUser({ password: newPass });
    if (updateErr) {
      errEl.textContent = 'Erro ao definir senha: ' + updateErr.message;
      errEl.style.display = '';
      btn.disabled = false; btn.textContent = '✓ Confirmar e Entrar';
      return;
    }

    // 3. Marcar must_change_password = false
    await _sb.from('profiles').update({ must_change_password: false }).eq('id', data.user.id);

    okEl.textContent = '✓ Senha definida com sucesso! Entrando...';
    okEl.style.display = '';

    // 4. Entrar no cockpit
    setTimeout(async () => {
      await _bootApp(data.user);
    }, 1000);
  });
  document.getElementById('lin-pass')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') _doLogin();
  });

  document.getElementById('show-reset')?.addEventListener('click', () => {
    document.getElementById('view-login').style.display = 'none';
    document.getElementById('view-reset').style.display = '';
    document.getElementById('reset-email').focus();
  });
  document.getElementById('show-login')?.addEventListener('click', () => {
    document.getElementById('view-reset').style.display = 'none';
    document.getElementById('view-login').style.display = '';
  });

  document.getElementById('reset-btn')?.addEventListener('click', _doReset);
}

async function _doLogin() {
  const email = document.getElementById('lin-email')?.value.trim();
  const pass  = document.getElementById('lin-pass')?.value;
  const btn   = document.getElementById('login-btn');
  if (!email || !pass) { _showLoginErr('Preencha e-mail e senha.'); return; }

  btn.textContent = '⏳ Entrando…'; btn.disabled = true;
  const { data, error } = await _sb.auth.signInWithPassword({ email, password: pass });
  btn.textContent = '▶ Entrar no Cockpit'; btn.disabled = false;

  if (error) { _showLoginErr('E-mail ou senha incorretos.'); return; }
  await _bootApp(data.user);
}

async function _doReset() {
  const email = document.getElementById('reset-email')?.value.trim();
  const btn   = document.getElementById('reset-btn');
  if (!email) { _showResetMsg('Informe o e-mail.','err'); return; }

  btn.textContent = '⏳ Enviando…'; btn.disabled = true;
  const { error } = await _sb.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + window.location.pathname
  });
  btn.textContent = '📧 Enviar link de redefinição'; btn.disabled = false;

  if (error) _showResetMsg('Erro ao enviar. Tente novamente.','err');
  else _showResetMsg('✓ Link enviado! Verifique seu e-mail.','ok');
}

function _showPasswordRecovery(recoverySession) {
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('app').style.display = 'none';
  const vl = document.getElementById('view-login');
  if (!vl) return;
  vl.style.display = '';
  document.getElementById('view-reset').style.display = 'none';
  vl.innerHTML = `
    <div style="font-size:.85rem;color:var(--teal);margin-bottom:14px;font-weight:600">🔑 Definir nova senha</div>
    <div class="lf"><label>Nova Senha</label><input type="password" id="np1" placeholder="Mínimo 8 caracteres" class="inp" style="background:var(--navy-m);border:1px solid rgba(255,255,255,.1);color:var(--white);border-radius:8px;padding:10px 13px;width:100%;font-size:.88rem;outline:none"></div>
    <div class="lf"><label>Confirmar Senha</label><input type="password" id="np2" placeholder="Repita a senha" class="inp" style="background:var(--navy-m);border:1px solid rgba(255,255,255,.1);color:var(--white);border-radius:8px;padding:10px 13px;width:100%;font-size:.88rem;outline:none;margin-top:6px"></div>
    <div id="np-err" style="display:none;color:#E05050;font-size:.78rem;margin:8px 0"></div>
    <button class="lbtn" id="np-btn" style="margin-top:8px">✓ Definir nova senha</button>
  `;
  document.getElementById('np-btn').addEventListener('click', async () => {
    const p1 = document.getElementById('np1').value;
    const p2 = document.getElementById('np2').value;
    const err = document.getElementById('np-err');
    if (p1.length < 8) { err.textContent='Mínimo 8 caracteres.'; err.style.display=''; return; }
    if (p1 !== p2) { err.textContent='Senhas não coincidem.'; err.style.display=''; return; }
    const { error } = await _sb.auth.updateUser({ password: p1 });
    if (error) { err.textContent='Erro: '+error.message; err.style.display=''; return; }
    vl.innerHTML='<div style="color:#4CD07D;text-align:center;padding:20px">✓ Senha definida! Redirecionando...</div>';
    setTimeout(() => location.reload(), 1500);
  });
}

function _showLoginErr(msg) {
  const el = document.getElementById('login-error');
  if (el) { el.textContent = msg; el.style.display = ''; }
}
function _showResetMsg(msg, type) {
  const el = document.getElementById('reset-msg');
  if (!el) return;
  el.textContent = msg; el.style.display = '';
  el.style.color = type==='ok' ? '#4CD07D' : '#E05050';
  el.style.background = type==='ok' ? 'rgba(76,208,125,.1)' : 'rgba(224,80,80,.1)';
  el.style.borderColor = type==='ok' ? 'rgba(76,208,125,.25)' : 'rgba(224,80,80,.25)';
}

// ═══════════════════════════════════════════════════════════════
// PAINEL ADMIN DE USUÁRIOS
// ═══════════════════════════════════════════════════════════════
let _allUsers = [];
let _editingId = null;

function _setupAdminPage() {
  // Bind nav
  const navItem = document.getElementById('nav-admin-item');
  if (navItem) {
    navItem.addEventListener('click', async () => {
      navigate('padmin');
      await _loadUsers();
    });
  }

  // Botão convidar
  document.getElementById('adm-invite-btn')?.addEventListener('click', () => _openModal(null));
  document.getElementById('adm-modal-close')?.addEventListener('click', _closeModal);
  document.getElementById('adm-modal-cancel')?.addEventListener('click', _closeModal);
  document.getElementById('adm-modal-save')?.addEventListener('click', _saveUser);

  // Filtros
  ['adm-search','adm-fperfil','adm-fstatus'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', _filterUsers);
    document.getElementById(id)?.addEventListener('change', _filterUsers);
  });
}

async function _loadUsers() {
  const loading = document.getElementById('adm-loading');
  const empty   = document.getElementById('adm-empty');
  const tbody   = document.getElementById('adm-tbody');
  if (loading) loading.style.display = '';
  if (empty)   empty.style.display = 'none';

  const { data, error } = await _sb.from('profiles').select('*').order('criado_em', { ascending:false });
  if (loading) loading.style.display = 'none';

  if (error) {
    if (tbody) tbody.innerHTML = '<tr><td colspan="8" style="color:var(--coral);text-align:center">Erro ao carregar: '+error.message+'</td></tr>';
    return;
  }

  _allUsers = data || [];
  _renderUsers(_allUsers);
  _renderKpis(_allUsers);
}

function _renderKpis(users) {
  document.getElementById('adm-total').textContent  = users.length;
  document.getElementById('adm-ativos').textContent = users.filter(u=>u.status==='ativo').length;
  document.getElementById('adm-bloq').textContent   = users.filter(u=>u.status==='bloqueado').length;
  document.getElementById('adm-pend').textContent   = users.filter(u=>u.status==='pendente').length;
}

function _renderUsers(users) {
  const tbody = document.getElementById('adm-tbody');
  const empty = document.getElementById('adm-empty');
  if (!tbody) return;

  if (!users.length) {
    tbody.innerHTML = '';
    if (empty) empty.style.display = '';
    return;
  }
  if (empty) empty.style.display = 'none';

  const pl = {admin:'Admin ZMP', editor:'Editor', viewer:'Visualizador'};
  const st = {
    ativo:    '<span class="tag tag-green">Ativo</span>',
    bloqueado:'<span class="tag tag-red">Bloqueado</span>',
    pendente: '<span class="tag tag-amber">Pendente</span>',
  };

  tbody.innerHTML = users.map(u => `
    <tr>
      <td style="font-weight:600">${u.nome||'—'}</td>
      <td>${u.empresa||'—'}</td>
      <td style="color:var(--teal);font-size:.8rem">${u.email||'—'}</td>
      <td>${pl[u.perfil]||u.perfil}</td>
      <td>${st[u.status]||u.status}</td>
      <td class="mini gray">${u.criado_em?new Date(u.criado_em).toLocaleDateString('pt-BR'):'—'}</td>
      <td class="mini gray">${u.ultimo_acesso?new Date(u.ultimo_acesso).toLocaleString('pt-BR'):'—'}</td>
      <td>
        <div style="display:flex;gap:5px">
          <button class="btn btn-g btn-sm" onclick="_openModal('${u.id}')" title="Editar">✏️</button>
          ${u.status==='ativo'
            ? `<button class="btn btn-sm" style="background:rgba(192,57,43,.2);color:#E05050" onclick="_toggleBlock('${u.id}','bloqueado')" title="Bloquear">🔒</button>`
            : `<button class="btn btn-sm" style="background:rgba(39,174,96,.2);color:#4CD07D" onclick="_toggleBlock('${u.id}','ativo')" title="Desbloquear">🔓</button>`
          }
          <button class="btn btn-g btn-sm" onclick="_sendReset('${u.id}','${u.email}','${(u.nome||'').replace(/'/g,"\\'")}') " title="Redefinir senha">🔑</button>
          ${u.id !== _currentUser?.id
            ? `<button class="btn btn-sm" style="background:rgba(192,57,43,.15);color:#E05050" onclick="_deleteUser('${u.id}','${u.nome}')" title="Excluir">🗑</button>`
            : ''
          }
        </div>
      </td>
    </tr>
  `).join('');
}

function _filterUsers() {
  const s  = (document.getElementById('adm-search')?.value||'').toLowerCase();
  const fp = document.getElementById('adm-fperfil')?.value||'';
  const fs = document.getElementById('adm-fstatus')?.value||'';
  _renderUsers(_allUsers.filter(u =>
    (!s || (u.nome||'').toLowerCase().includes(s) || (u.email||'').toLowerCase().includes(s)) &&
    (!fp || u.perfil===fp) &&
    (!fs || u.status===fs)
  ));
}

function _openModal(userId) {
  _editingId = userId;
  const u = userId ? _allUsers.find(x=>x.id===userId) : null;
  const isEdit = !!u;

  document.getElementById('adm-modal-title').textContent = isEdit ? 'Editar Usuário' : 'Convidar Usuário';
  document.getElementById('adm-modal-save').textContent  = isEdit ? '💾 Salvar' : '📧 Enviar Convite';
  document.getElementById('adm-nome').value    = u?.nome    || '';
  document.getElementById('adm-empresa').value = u?.empresa || '';
  document.getElementById('adm-email').value   = u?.email   || '';
  document.getElementById('adm-email').disabled = isEdit;
  document.getElementById('adm-perfil').value  = u?.perfil  || 'viewer';
  document.getElementById('adm-status').value  = u?.status  || 'ativo';
  document.getElementById('adm-modal-err').style.display = 'none';
  document.getElementById('adm-modal-ok').style.display  = 'none';
  document.getElementById('adm-modal').classList.add('open');
}

function _closeModal() {
  document.getElementById('adm-modal').classList.remove('open');
  _editingId = null;
}

async function _saveUser() {
  const nome    = document.getElementById('adm-nome').value.trim();
  const empresa = document.getElementById('adm-empresa').value.trim();
  const email   = document.getElementById('adm-email').value.trim();
  const perfil  = document.getElementById('adm-perfil').value;
  const status  = document.getElementById('adm-status').value;
  const btn     = document.getElementById('adm-modal-save');
  const errEl   = document.getElementById('adm-modal-err');
  const okEl    = document.getElementById('adm-modal-ok');

  errEl.style.display='none'; okEl.style.display='none';
  if (!nome) { errEl.textContent='Nome obrigatório.'; errEl.style.display=''; return; }

  btn.disabled=true; btn.textContent='⏳…';

  try {
    if (_editingId) {
      // Editar perfil existente
      const { error } = await _sb.from('profiles')
        .update({ nome, empresa, perfil, status }).eq('id', _editingId);
      if (error) throw error;
      okEl.textContent='✓ Usuário atualizado com sucesso!'; okEl.style.display='';
    } else {
      // Convidar novo — usa signUp com senha temporária + magic link
      if (!email) { errEl.textContent='E-mail obrigatório.'; errEl.style.display=''; return; }
      // Criar usuário com metadata (trigger vai criar o profile automaticamente)
      const result = await _inviteUserFallback(email, nome, empresa, perfil);
      if (result.error) throw result.error;
      const { data, error } = result;
      const tp = result && result.tempPass ? result.tempPass : 'escala2026';
      const isExisting = result && result.alreadyExists;
      okEl.innerHTML = (isExisting ? '⚠️ Perfil atualizado para ' : '✓ Usuário criado: ') + '<b>'+email+'</b><br>'
        + '<div style="margin-top:10px;background:rgba(42,191,191,.1);border:1px solid rgba(42,191,191,.3);border-radius:8px;padding:12px 16px">'
        + '<div style="font-size:.72rem;color:var(--teal);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">🔑 Senha de acesso</div>'
        + '<div style="font-family:monospace;font-size:1.2rem;color:var(--white);font-weight:700;letter-spacing:2px">'+tp+'</div>'
        + '<div style="font-size:.72rem;color:var(--g400);margin-top:6px">Envie esta senha para o usuário por WhatsApp ou e-mail.<br>Ele poderá alterá-la após o primeiro acesso pelo botão 🔑 no topo.</div>'
        + '</div>';
      okEl.style.display='';
    }
    await _loadUsers();
    setTimeout(_closeModal, 1800);
  } catch(e) {
    errEl.textContent = 'Erro: ' + (e.message || e.toString() || 'Tente novamente');
    errEl.style.display='';
  }

  btn.disabled=false;
  btn.textContent = _editingId ? '💾 Salvar' : '📧 Enviar Convite';
}

// Fallback para convite: cria usuário via signUp com senha temporária padrão
async function _inviteUserFallback(email, nome, empresa, perfil) {
  const tempPass = 'escala2026';
  
  const { data, error } = await _sb.auth.signUp({
    email,
    password: tempPass,
    options: {
      data: { nome, empresa, perfil },
      emailRedirectTo: window.location.origin + window.location.pathname
    }
  });
  
  // Tratar erros comuns
  if (error) {
    const msg = (error.message || JSON.stringify(error) || 'Erro desconhecido');
    if (msg.includes('already registered') || msg.includes('already been registered') || msg.includes('User already registered')) {
      // Usuário já existe em auth.users mas pode não ter perfil
      // Tentar inserir/atualizar o perfil diretamente
      const { data: authUser } = await _sb.auth.signInWithPassword({
        email, password: tempPass
      }).catch(() => ({ data: null }));
      
      // Buscar perfil existente
      const { data: existingProfile } = await _sb.from('profiles')
        .select('id').eq('email', email).single().catch(() => ({ data: null }));
      
      if (existingProfile) {
        await _sb.from('profiles').update({ nome, empresa, perfil, status: 'ativo', must_change_password: true })
          .eq('email', email);
        return { data: { user: existingProfile }, error: null, tempPass, alreadyExists: true };
      }
      
      // Perfil não existe — instrução para admin
      return { data: null, error: new Error('Este e-mail já existe no sistema mas sem perfil. Primeiro exclua pelo SQL Editor do Supabase: DELETE FROM auth.users WHERE email = \'' + email + '\';') };
    }
    if (msg.includes('rate limit') || msg.includes('email rate')) {
      return { data: null, error: new Error('Limite de e-mails atingido. Aguarde alguns minutos e tente novamente.') };
    }
    return { data: null, error: new Error(msg) };
  }
  
  // Usuário criado — salvar perfil
  if (data && data.user) {
    await _sb.from('profiles').upsert({
      id: data.user.id,
      nome, empresa, email, perfil, status: 'ativo',
      must_change_password: true
    });
  }
  
  return { data, error: null, tempPass };
}

async function _toggleBlock(userId, novoStatus) {
  const { error } = await _sb.from('profiles').update({ status:novoStatus }).eq('id',userId);
  if (error) { alert('Erro: '+error.message); return; }
  await _loadUsers(); showToast();
}

function openDiag2020(){
  const m=document.getElementById('diag2020-modal');
  if(!m) return;
  m.classList.add('open');
  m.scrollTop=0;
  document.body.style.overflow='hidden';
}
function closeDiag2020(){
  const m=document.getElementById('diag2020-modal');
  if(!m) return;
  m.classList.remove('open');
  document.body.style.overflow='';
}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeDiag2020();});
document.addEventListener('DOMContentLoaded',function(){
  const m=document.getElementById('diag2020-modal');
  if(m) m.addEventListener('click',function(e){if(e.target===this)closeDiag2020();});
  // Fallback: bind nav items no DOMContentLoaded também
  document.querySelectorAll('.ni').forEach(n => {
    n.addEventListener('click', function(){ if(typeof navigate==='function') navigate(this.dataset.page); });
  });
});


// ═══════════ SELL-OUT UPLOAD ═══════════
function handleSoUpload(event){
  const file = event.target.files[0];
  if(!file) return;
  const statusEl = document.getElementById('so-upload-status');
  if(statusEl) statusEl.textContent = '⏳ Carregando...';

  const ext = file.name.split('.').pop().toLowerCase();

  if(ext === 'csv'){
    const reader = new FileReader();
    reader.onload = function(e){
      try {
        parseSoCSV(e.target.result, file.name);
      } catch(err){
        if(statusEl) statusEl.textContent = '❌ Erro ao ler CSV: ' + err.message;
      }
    };
    reader.readAsText(file, 'UTF-8');
  } else {
    // xlsx/xls — use SheetJS via CDN
    if(typeof XLSX === 'undefined'){
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
      script.onload = () => readXlsx(file);
      script.onerror = () => {
        if(statusEl) statusEl.textContent = '❌ Erro ao carregar leitor de Excel. Tente CSV.';
      };
      document.head.appendChild(script);
    } else {
      readXlsx(file);
    }
  }
}

function readXlsx(file){
  const statusEl = document.getElementById('so-upload-status');
  const reader = new FileReader();
  reader.onload = function(e){
    try {
      const data = new Uint8Array(e.target.result);
      const wb = XLSX.read(data, {type:'array'});
      const ws = wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(ws, {defval:''});
      applySoRows(rows, file.name);
    } catch(err){
      if(statusEl) statusEl.textContent = '❌ Erro ao ler Excel: ' + err.message;
    }
  };
  reader.readAsArrayBuffer(file);
}

function parseSoCSV(text, fname){
  const lines = text.trim().split('\n');
  const headers = lines[0].split(/[;,\t]/).map(h=>h.trim().replace(/"/g,''));
  const rows = lines.slice(1).map(line => {
    const vals = line.split(/[;,\t]/).map(v=>v.trim().replace(/"/g,''));
    const obj = {};
    headers.forEach((h,i) => obj[h] = vals[i]||'');
    return obj;
  });
  applySoRows(rows, fname);
}

function applySoRows(rows, fname){
  const statusEl = document.getElementById('so-upload-status');
  if(!rows || rows.length === 0){
    if(statusEl) statusEl.textContent = '❌ Planilha vazia ou formato não reconhecido.';
    return;
  }

  // Map columns flexibly — accept Portuguese or English headers
  const colMap = {
    nome:    ['cooperativa','coop','nome','name','Cooperativa','COOPERATIVA'],
    cat:     ['categoria','category','cat','Categoria','CATEGORIA'],
    sellin:  ['sell-in','sellin','sell_in','Sell-in','SELL-IN','sell in','Sell In','venda'],
    sellout: ['sell-out','sellout','sell_out','Sell-out','SELL-OUT','sell out','Sell Out'],
    meta:    ['meta','target','Meta','META','meta sell-in','Meta Sell-in'],
    ating:   ['atingimento','atingimento (%)','ating','Atingimento','ATINGIMENTO'],
  };

  function findCol(row, keys){
    for(const k of keys){ if(row[k] !== undefined) return row[k]; }
    return '';
  }

  let updated = 0;
  rows.forEach(row => {
    const nome = findCol(row, colMap.nome);
    if(!nome) return;
    // Find matching coop in D.coopsData (case-insensitive)
    const match = D.coopsData.find(c => c.nome.toLowerCase() === nome.toLowerCase());
    if(match){
      const si = findCol(row, colMap.sellin);
      const so = findCol(row, colMap.sellout);
      const mt = findCol(row, colMap.meta);
      const at = findCol(row, colMap.ating);
      if(si !== '') match.sellin = String(si);
      if(so !== '') match.sellout = String(so);
      if(mt !== '') match.meta = String(mt);
      if(at !== '') match.ating = String(at);
      // Auto-calc atingimento if not provided
      if(!at && si && mt){
        const siN = parseFloat(String(si).replace(/[^0-9.,]/g,'').replace(',','.'));
        const mtN = parseFloat(String(mt).replace(/[^0-9.,]/g,'').replace(',','.'));
        if(mtN > 0) match.ating = (siN/mtN*100).toFixed(1);
      }
      updated++;
    }
  });

  saveD(true);
  renderSellOut();
  const now = new Date().toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'});
  if(statusEl) statusEl.textContent = `✅ ${updated} cooperativas atualizadas · ${fname} · ${now}`;
}

function exportSoTemplate(){
  // Generate CSV template with current coop names
  const header = 'Cooperativa,Categoria,Sell-in,Sell-out (%),Meta Sell-in,Atingimento (%)';
  const rows = D.coopsData.map(c => `${c.nome},${c.cat},${c.sellin||''},${c.sellout||''},${c.meta||''},${c.ating||''}`);
  const csv = [header, ...rows].join('\n');
  const blob = new Blob(['\uFEFF'+csv], {type:'text/csv;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'modelo_sellinout_escala.csv';
  a.click();
}


// Sell-out specific status cycle: Em andamento → Atingida → Em atraso → loop
const SO_STATUS_CYCLE = [
  {key:'blue',  label:'Em progresso'},
  {key:'green', label:'Alcançada'},
  {key:'red',   label:'Abaixo do esperado'},
];
const SO_TAG_CLASS = {blue:'tag-blue', green:'tag-green', red:'tag-red'};
function soTagHTML(status){
  const s = SO_STATUS_CYCLE.find(x=>x.key===status) || SO_STATUS_CYCLE[0];
  return `<span class="tag ${SO_TAG_CLASS[s.key]}" onclick="cycleSoTag(this)">${s.label}</span>`;
}
function cycleSoTag(el){
  const cur = el.textContent.trim();
  const idx = SO_STATUS_CYCLE.findIndex(s=>s.label===cur);
  const next = SO_STATUS_CYCLE[(idx+1) % SO_STATUS_CYCLE.length];
  el.className = 'tag ' + SO_TAG_CLASS[next.key];
  el.textContent = next.label;
  // Find which coop row this belongs to and save
  const tr = el.closest('tr');
  if(tr){
    const rows = tr.parentElement.querySelectorAll('tr');
    const rowIdx = Array.from(rows).indexOf(tr);
    if(rowIdx>=0 && D.coopsData[rowIdx]) D.coopsData[rowIdx].soStatus = next.key;
  }
  saveD(true);
}


// ── MISSING FUNCTIONS (restored) ──

function _genTempPass() {
  return 'escala2026';
}

function _sendReset(userId, email, nome) {
  // Modal de redefinição de senha direta — sem e-mail
  const existing = document.getElementById('reset-pwd-modal');
  if(existing) existing.remove();
  const modal = document.createElement('div');
  modal.id = 'reset-pwd-modal';
  modal.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:9999;display:flex;align-items:center;justify-content:center';
  modal.innerHTML=`
    <div style="background:var(--navy-d);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:28px 28px 22px;width:380px;max-width:95vw">
      <div style="font-size:1rem;font-weight:800;color:var(--white);margin-bottom:4px">🔑 Redefinir Senha</div>
      <div style="font-size:.78rem;color:var(--g400);margin-bottom:18px">${nome||email}</div>
      <div class="lf" style="margin-bottom:14px">
        <div class="fl">Nova senha provisória</div>
        <input id="rp-pwd" type="text" class="inp" placeholder="Ex: Escala2026" value="Escala2026"
          style="background:var(--navy-m);border:1px solid rgba(255,255,255,.12);color:var(--white);border-radius:8px;padding:10px 13px;width:100%;font-size:.9rem;outline:none;margin-top:4px">
      </div>
      <div id="rp-info" style="font-size:.72rem;color:var(--g400);margin-bottom:16px;background:rgba(42,191,191,.07);border:1px solid rgba(42,191,191,.15);border-radius:7px;padding:9px 12px">
        ℹ️ A pessoa entra com essa senha e o cockpit vai pedir para ela criar uma nova senha pessoal automaticamente.
      </div>
      <div id="rp-err" style="display:none;color:#E05050;font-size:.78rem;margin-bottom:10px;padding:8px 12px;background:rgba(224,80,80,.1);border-radius:7px;border:1px solid rgba(224,80,80,.2)"></div>
      <div style="display:flex;gap:10px;justify-content:flex-end">
        <button class="btn btn-g" onclick="document.getElementById('reset-pwd-modal').remove()">Cancelar</button>
        <button class="btn btn-p" id="rp-btn" onclick="_confirmReset('${userId}')">✓ Redefinir senha</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  document.getElementById('rp-pwd').focus();
  document.getElementById('rp-pwd').select();
}

async function _confirmReset(userId) {
  const pwd = document.getElementById('rp-pwd')?.value?.trim();
  const err = document.getElementById('rp-err');
  const btn = document.getElementById('rp-btn');
  if(!pwd || pwd.length < 6) {
    err.textContent='A senha deve ter pelo menos 6 caracteres.';
    err.style.display=''; return;
  }
  btn.disabled=true; btn.textContent='⏳ Salvando...';
  // Atualizar senha via Supabase Admin (service role) — usa a função do backend
  const { error } = await _sb.auth.admin.updateUserById(userId, { password: pwd });
  if(error) {
    // Fallback: marcar must_change_password e avisar admin para usar Supabase
    await _sb.from('profiles').update({ must_change_password: true }).eq('id', userId);
    err.textContent='⚠️ Senha atualizada no perfil. Oriente o usuário a usar "Primeiro Acesso" com a senha: '+pwd;
    err.style.display=''; btn.disabled=false; btn.textContent='✓ Redefinir senha'; return;
  }
  // Forçar troca de senha no próximo login
  await _sb.from('profiles').update({ must_change_password: true }).eq('id', userId);
  document.getElementById('reset-pwd-modal').remove();
  showToast();
}

async function _deleteUser(userId, nome) {
  if (!confirm('Excluir "' + nome + '"?\n\nO usuário perderá acesso imediatamente.')) return;
  // Delete from profiles (FK cascade should remove from auth.users too)
  const { error } = await _sb.from('profiles').delete().eq('id', userId);
  if (error) { 
    alert('Erro ao excluir: ' + error.message);
    return; 
  }
  // Also try to sign out the user to invalidate their session
  await _loadUsers();
  showToast();
}

async function _loadAccessLog() {
  const tbody = document.getElementById('adm-log-tbody');
  if (!tbody) return;
  tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--g400);padding:16px">⏳ Carregando...</td></tr>';
  const { data, error } = await _sb
    .from('access_log')
    .select('*')
    .order('acessado_em', { ascending: false })
    .limit(100);
  if (error) {
    tbody.innerHTML = '<tr><td colspan="5" style="color:var(--coral);text-align:center;padding:16px">Erro: ' + error.message + '</td></tr>';
    return;
  }
  if (!data || !data.length) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--g400);padding:16px">Nenhum acesso registrado ainda.</td></tr>';
    return;
  }
  const pl = {admin:'Admin ZMP', editor:'Editor', viewer:'Visualizador'};
  tbody.innerHTML = data.map(log => {
    const dt = log.acessado_em ? new Date(log.acessado_em).toLocaleString('pt-BR') : '—';
    const ua = log.user_agent || '';
    let device = '💻 Desktop';
    if (/Mobile|Android|iPhone/i.test(ua)) device = '📱 Mobile';
    else if (/Tablet|iPad/i.test(ua)) device = '📟 Tablet';
    let browser = /Chrome/i.test(ua) && !/Edge/i.test(ua) ? ' · Chrome'
                : /Firefox/i.test(ua) ? ' · Firefox'
                : /Safari/i.test(ua) && !/Chrome/i.test(ua) ? ' · Safari'
                : /Edge/i.test(ua) ? ' · Edge' : '';
    return '<tr>'
      + '<td style="font-weight:600">' + (log.nome||'—') + '</td>'
      + '<td style="color:var(--teal);font-size:.8rem">' + (log.email||'—') + '</td>'
      + '<td>' + (pl[log.perfil]||log.perfil||'—') + '</td>'
      + '<td class="mini gray">' + dt + '</td>'
      + '<td class="mini gray">' + device + browser + '</td>'
      + '</tr>';
  }).join('');
}



function switchAdminTab(tab, el) {
  document.querySelectorAll('#admin-tabs .ptab').forEach(function(t){ t.classList.remove('active'); });
  if (el) el.classList.add('active');
  var usersTab = document.getElementById('admin-tab-users');
  var logTab   = document.getElementById('admin-tab-log');
  if (usersTab) usersTab.style.display = tab === 'users' ? '' : 'none';
  if (logTab)   logTab.style.display   = tab === 'log'   ? '' : 'none';
  if (tab === 'log') _loadAccessLog();
}

// ── FORÇAR TROCA DE SENHA NO PRIMEIRO ACESSO ──
function _showForceChangePassword() {
  const vl = document.getElementById('view-login');
  const vr = document.getElementById('view-reset');
  if (vr) vr.style.display = 'none';
  if (vl) {
    vl.style.display = '';
    vl.innerHTML = `
      <div style="background:rgba(212,160,23,.1);border:1px solid rgba(212,160,23,.25);border-radius:8px;padding:12px 14px;font-size:.82rem;color:#D4A017;margin-bottom:16px">
        🔒 Este é seu primeiro acesso. Por segurança, defina uma nova senha pessoal.
      </div>
      <div class="lf"><label>Nova senha</label>
        <input class="inp" type="password" id="fcp-new" placeholder="Mínimo 8 caracteres"
          style="background:var(--navy-m);border:1px solid rgba(255,255,255,.1);color:var(--white);border-radius:8px;padding:10px 13px;width:100%;font-size:.88rem;outline:none;margin-top:4px">
      </div>
      <div class="lf" style="margin-top:10px"><label>Confirmar senha</label>
        <input class="inp" type="password" id="fcp-confirm" placeholder="Repita a nova senha"
          style="background:var(--navy-m);border:1px solid rgba(255,255,255,.1);color:var(--white);border-radius:8px;padding:10px 13px;width:100%;font-size:.88rem;outline:none;margin-top:4px">
      </div>
      <div id="fcp-err" style="display:none;color:#E05050;font-size:.78rem;margin:8px 0;padding:9px 12px;background:rgba(224,80,80,.1);border-radius:7px;border:1px solid rgba(224,80,80,.25)"></div>
      <button class="lbtn" id="fcp-btn" style="margin-top:12px">✓ Definir minha senha</button>
    `;
    document.getElementById('fcp-btn').addEventListener('click', async () => {
      const p1 = document.getElementById('fcp-new').value;
      const p2 = document.getElementById('fcp-confirm').value;
      const err = document.getElementById('fcp-err');
      const btn = document.getElementById('fcp-btn');
      err.style.display = 'none';
      if (p1.length < 8) { err.textContent='Mínimo 8 caracteres.'; err.style.display=''; return; }
      if (p1 !== p2) { err.textContent='Senhas não coincidem.'; err.style.display=''; return; }
      btn.disabled=true; btn.textContent='⏳ Salvando…';
      const { error } = await _sb.auth.updateUser({ password: p1 });
      if (error) {
        err.textContent='Erro: '+error.message; err.style.display='';
        btn.disabled=false; btn.textContent='✓ Definir minha senha'; return;
      }
      // Marcar que já trocou a senha
      await _sb.from('profiles').update({ must_change_password: false })
        .eq('id', _currentUser.id);
      _currentProfile.must_change_password = false;
      // Continuar para o app
      vl.innerHTML='<div style="color:#4CD07D;text-align:center;padding:20px;font-size:.9rem">✓ Senha definida! Entrando...</div>';
      setTimeout(async () => {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        init();
        setTimeout(_applyPerms, 400);
        if (window._isAdmin) _setupAdminPage();
      }, 1000);
    });
  }
}












function switchAdminTab(tab, el) {
  document.querySelectorAll('#admin-tabs .ptab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  const usersTab = document.getElementById('admin-tab-users');
  const logTab   = document.getElementById('admin-tab-log');
  if (usersTab) usersTab.style.display = tab === 'users' ? '' : 'none';
  if (logTab)   logTab.style.display   = tab === 'log'   ? '' : 'none';
  if (tab === 'log') _loadAccessLog();
}

// ── MODO DE LOGIN ──
function setLoginMode(mode) {
  // Update button styles
  const btnLogin = document.getElementById('btn-mode-login');
  const btnFirst = document.getElementById('btn-mode-first');

  if (mode === 'login') {
    btnLogin.style.border = '2px solid var(--teal)';
    btnLogin.style.background = 'rgba(42,191,191,.1)';
    btnFirst.style.border = '2px solid rgba(255,255,255,.1)';
    btnFirst.style.background = 'rgba(255,255,255,.03)';
    document.getElementById('view-login').style.display = '';
    document.getElementById('view-first').style.display = 'none';
    document.getElementById('view-reset').style.display = 'none';
  } else {
    btnFirst.style.border = '2px solid var(--teal)';
    btnFirst.style.background = 'rgba(42,191,191,.1)';
    btnLogin.style.border = '2px solid rgba(255,255,255,.1)';
    btnLogin.style.background = 'rgba(255,255,255,.03)';
    document.getElementById('view-first').style.display = '';
    document.getElementById('view-login').style.display = 'none';
    document.getElementById('view-reset').style.display = 'none';
  }
}

// ══════════════════════════════════════
// GOVERNANÇA — Rituais
// ══════════════════════════════════════
const _MESES = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

function renderRituais(){
  const tb = document.getElementById('rituais-body');
  if(!tb) return;
  if(!D.rituais || !D.rituais.length) D.rituais = JSON.parse(JSON.stringify(D0.rituais||[]));
  tb.innerHTML = D.rituais.map((r,i) => {
    return '<tr>'
      +'<td style="vertical-align:top;min-width:180px">'
        +'<div contenteditable="true" style="font-weight:700;outline:none" onblur="D.rituais['+i+'].desc=this.textContent;saveD(true)">'+( r.desc||'')+'</div>'
        +'<div contenteditable="true" style="font-size:.75rem;color:var(--g400);margin-top:4px;outline:none;line-height:1.5" onblur="D.rituais['+i+'].detail=this.textContent;saveD(true)">'+( r.detail||'')+'</div>'
      +'</td>'
      +'<td contenteditable="true" style="min-width:140px" onblur="D.rituais['+i+'].resp=this.textContent;saveD(true)">'+( r.resp||'')+'</td>'
      +'<td contenteditable="true" style="min-width:140px" onblur="D.rituais['+i+'].participantes=this.textContent;saveD(true)">'+( r.participantes||'')+'</td>'
      +'<td contenteditable="true" style="min-width:120px" onblur="D.rituais['+i+'].periodicidade=this.textContent;saveD(true)">'+( r.periodicidade||'')+'</td>'
      +'<td><button class="btn btn-g btn-sm" onclick="D.rituais.splice('+i+',1);renderRituais();saveD(true)">✕</button></td>'
      +'</tr>';
  }).join('');
}
function renderGovCoops(){
  const tb = document.getElementById('gov-coops-body');
  if(!tb) return;
  if(!D.govCoops) D.govCoops = [];
  const filter = document.getElementById('gov-radar-filter')?.value||'';
  const rows = filter ? D.govCoops.filter(r=>r.radar===filter) : D.govCoops;
  const allIdx = filter
    ? D.govCoops.map((r,i)=>r.radar===filter?i:-1).filter(i=>i>=0)
    : D.govCoops.map((_,i)=>i);

  if(!rows.length){
    tb.innerHTML='<tr><td colspan="6" style="text-align:center;color:var(--g600);padding:16px">Nenhuma cooperativa. Clique em + Cooperativa.</td></tr>';
    return;
  }

  tb.innerHTML = rows.map((r,ri)=>{
    const realIdx = allIdx[ri];
    const radarOpts = [
      '<option value="gray"'+((!r.radar||r.radar==='gray')?' selected':'')+'>— Selecionar —</option>',
      '<option value="atencao"'+(r.radar==='atencao'?' selected':'')+'>⚠️ Em atenção</option>',
      '<option value="plano"'+(r.radar==='plano'?' selected':'')+'>✅ No plano</option>',
      '<option value="acima"'+(r.radar==='acima'?' selected':'')+'>🌟 Acima</option>',
    ].join('');
    const relDots = ['red','yellow','green'].map(c=>{
      const bg = c==='yellow'?'#D4A017':c==='red'?'#C0392B':'#27AE60';
      const active = r.rel===c;
      return '<span onclick="D.govCoops['+realIdx+'].rel=\''+c+'\';renderGovCoops();saveD(true)" style="width:22px;height:22px;border-radius:50%;background:'+bg+';cursor:pointer;opacity:'+(active?'1':'0.3')+';border:'+(active?'2px solid white':'2px solid transparent')+';display:inline-block;margin:0 2px"></span>';
    }).join('');
    return '<tr>'
      +'<td style="font-weight:600">'+r.coop+'</td>'
      +'<td style="font-size:.76rem;color:var(--g200)">'+getKam(r.coop||r.nome||'')+'</td>'
      +'<td><select onchange="D.govCoops['+realIdx+'].radar=this.value;renderGovCoops();saveD(true)" style="background:var(--navy-m);border:1px solid rgba(255,255,255,.12);color:var(--white);border-radius:6px;padding:4px 8px;font-size:.78rem;width:100%">'+radarOpts+'</select></td>'
      +'<td contenteditable="true" style="font-size:.8rem;line-height:1.5;min-width:180px" onblur="D.govCoops['+realIdx+'].detalhe=this.textContent;saveD(true)">'+( r.detalhe||'')+'</td>'
      +'<td style="text-align:center"><div style="display:flex;gap:4px;justify-content:center">'+relDots+'</div></td>'
      +'<td><button class="btn btn-g btn-sm" onclick="D.govCoops.splice('+realIdx+',1);renderGovCoops();saveD(true)">✕</button></td>'
      +'</tr>';
  }).join('');
}

function _openGovCoopModal(){
  document.getElementById('gov-coop-modal').classList.add('open');
  _govCoopPreview(); // mostrar KAM da primeira coop logo ao abrir
}
function _govCoopPreview(){
  const sel=document.getElementById('gov-coop-select');
  const preview=document.getElementById('gov-coop-kam-preview');
  const kamEl=document.getElementById('gov-coop-kam-name');
  const rslEl=document.getElementById('gov-coop-rsl-name');
  if(!sel||!preview||!kamEl) return;
  const coop=sel.value;
  const r=lookupKam(coop);
  if(r&&r.kam){
    kamEl.textContent='KAM: '+r.kam;
    rslEl.textContent=(r.rsl?'RSL: '+r.rsl:'')+( r.rml?' · RML: '+r.rml:'');
    preview.style.display='block';
  } else {
    kamEl.textContent='KAM não encontrado para esta cooperativa';
    rslEl.textContent='';
    preview.style.display='block';
    preview.style.borderColor='rgba(212,160,23,.35)';
  }
}
function _addGovCoop(){
  const coop = document.getElementById('gov-coop-select')?.value;
  if(!coop) return;
  if(!D.govCoops) D.govCoops=[];
  D.govCoops.push({coop,kam:getKam(coop),radar:'gray',detalhe:'',rel:''});
  renderGovCoops();
  renderDashDestaques();
  saveD(true);
  document.getElementById('gov-coop-modal').classList.remove('open');
}

// ══════════════════════════════════════
// PINC
// ══════════════════════════════════════
// ══════════════════════════════════════
// ONE PAGE COOPS
// ══════════════════════════════════════
const ONEPAGE_DATA={
  'INTEGRADA':{
    channel:'CHANNEL 11 OF 12 · COOPERATIVE · MINDCOOP',
    title:'Integrada',
    logo:'INTEGRADA', logoSub:'COOPERATIVA AGROINDUSTRIAL',
    sellin:{label:'Sell-in trend & 2026 target (YTD realized)',years:['2023','2024','2025'],vals:[7.4,7.3,10.4],target:13,ytd:6,ytdPct:'47%',max:15,ticks:[0,5,10,15]},
    sellinMix:{label:'Sell-in mix by category (2025)',center:'$10M',centerSub:'2025',items:[
      {n:'Herbicides (4.8)',v:4.8,c:'#1F4E5F'},
      {n:'Fungicides (3.2)',v:3.2,c:'#4A8FA0'},
      {n:'Insecticides (1.2)',v:1.2,c:'#6B8E4E'},
      {n:'ST (0.9)',v:0.9,c:'#A8B84B'},
      {n:'F&V, Coffee & Citrus (0.2)',v:0.2,c:'#C9B27C'},
      {n:'Other (0.0)',v:0.02,c:'#1a1a1a'}
    ]},
    sellout:{label:'Sell-out — history, targets & 26/27 YTD',cats:['23/24','24/25','25/26','26/27 T','27/28 T','28/29 T'],vals:[13,7,9,17,19,23],histCount:3,ytdIdx:3,ytdVal:0.6,max:30,ticks:[0,10,20,30]},
    inventory:{pct:89,status:'ABOVE HEALTHY LINE',healthy:30,note:'Inventory july/26  8MUSD   |   Sellout 25/26  9MUSD'},
    actionPlan:[
      '<b>Selection of priority branches</b>, segmentation of <b>cooperative members</b>, definition of products, targets, and action plan by branch.',
      '<b>Train teams &amp; manage portfolio:</b> deliver ERC and consultative-selling training to Crop to become #1 in service and margin',
      '<b>Alignment</b> and close engagement with the cooperative’s <b>technical team.</b>'
    ],
    soc:{label:'SOC - Crop Protection',items:[
      {n:'Outros',v:39.9,c:'#6B8E3F'},
      {n:'Syngenta',v:18.1,c:'#1F3B57'},
      {n:'UPL',v:14.0,c:'#C9A227'},
      {n:'Corteva',v:11.4,c:'#2A9D8F',hl:true},
      {n:'Bayer',v:8.7,c:'#B85C4A'},
      {n:'IHARA',v:7.8,c:'#3E7C6E'}
    ],max:50},
    takeaway:'Sell-in +43% in 2025 (+19% CAGR from 2023); sell-out targeted +218% to $23M by 28/29; inventory high (112% of sell-out, >30% healthy line).<br>Challenge: 2026 sell-in target $13M is +25% vs 2025 — stock must sell down first while stock is high.'
  }
};
// ── helpers de gráfico (inline, cores do cockpit) ──
function opLineChartHTML(d){
  const W=300,H=160,px=28,py=14,iW=W-px-10,iH=H-py-28;
  const xp=(i,total)=>px+i*(iW/(total-1));
  const yp=v=>py+iH-(v/d.max)*iH;
  const pts=d.vals.map((v,i)=>xp(i,d.vals.length)+','+yp(v)).join(' ');
  const apts='M'+xp(0,d.vals.length)+','+(py+iH)+' '+d.vals.map((v,i)=>xp(i,d.vals.length)+','+yp(v)).join(' ')+' '+xp(d.vals.length-1,d.vals.length)+','+(py+iH)+' Z';
  let s='<svg viewBox="0 0 '+W+' '+H+'" style="width:100%;height:auto">';
  d.ticks.forEach(t=>{
    const yy=yp(t);
    s+='<line x1="'+px+'" y1="'+yy+'" x2="'+(W-10)+'" y2="'+yy+'" stroke="rgba(255,255,255,.08)"/>'
      +'<text x="'+(px-5)+'" y="'+(yy+4)+'" font-size="9" fill="rgba(255,255,255,.4)" text-anchor="end">'+t+'</text>';
  });
  const bx=xp(d.vals.length-1,d.vals.length)+28,bw=26,yTarget=yp(d.target),yYtd=yp(d.ytd);
  s+='<rect x="'+bx+'" y="'+yTarget+'" width="'+bw+'" height="'+(py+iH-yTarget)+'" fill="rgba(42,191,191,.18)" rx="2"/>'
    +'<rect x="'+bx+'" y="'+yYtd+'" width="'+bw+'" height="'+(py+iH-yYtd)+'" fill="rgba(42,191,191,.6)" rx="2"/>'
    +'<text x="'+(bx+bw/2)+'" y="'+(yTarget-5)+'" font-size="8.5" font-weight="700" fill="#2ABFBF" text-anchor="middle">Target '+d.target+'</text>'
    +'<text x="'+(bx+bw/2)+'" y="'+(yYtd+14)+'" font-size="7.5" fill="#fff" text-anchor="middle">YTD '+d.ytd+' ('+d.ytdPct+')</text>'
    +'<text x="'+(bx+bw/2)+'" y="'+(H-8)+'" font-size="9" fill="rgba(255,255,255,.5)" text-anchor="middle">2026 T</text>';
  s+='<path d="'+apts+'" fill="rgba(42,191,191,.08)"/>';
  s+='<polyline points="'+pts+'" fill="none" stroke="#2ABFBF" stroke-width="2.5" stroke-linejoin="round"/>';
  d.vals.forEach((v,i)=>{
    const xx=xp(i,d.vals.length),yy=yp(v);
    s+='<circle cx="'+xx+'" cy="'+yy+'" r="4.5" fill="#162236" stroke="#2ABFBF" stroke-width="2"/>'
      +'<text x="'+xx+'" y="'+(yy-10)+'" font-size="11" font-weight="800" fill="#fff" text-anchor="middle">'+v+'</text>'
      +'<text x="'+xx+'" y="'+(H-8)+'" font-size="9" fill="rgba(255,255,255,.5)" text-anchor="middle">'+d.years[i]+'</text>';
  });
  s+='<line x1="'+px+'" y1="'+(py+iH)+'" x2="'+(W-10)+'" y2="'+(py+iH)+'" stroke="rgba(255,255,255,.15)"/></svg>';
  return s;
}
function opDonutHTML(d){
  const cx=60,cy=60,R=52,r=32,tot=d.items.reduce((a,b)=>a+b.v,0);
  let ang=-90,paths='';
  d.items.forEach(it=>{
    const a0=ang*Math.PI/180,sw=(it.v/tot)*360;ang+=sw;
    const a1=ang*Math.PI/180,lg=sw>180?1:0;
    const x0=cx+R*Math.cos(a0),y0=cy+R*Math.sin(a0),x1=cx+R*Math.cos(a1),y1=cy+R*Math.sin(a1);
    const xi=cx+r*Math.cos(a1),yi=cy+r*Math.sin(a1),xj=cx+r*Math.cos(a0),yj=cy+r*Math.sin(a0);
    paths+='<path d="M'+x0+' '+y0+' A'+R+' '+R+' 0 '+lg+' 1 '+x1+' '+y1+' L'+xi+' '+yi+' A'+r+' '+r+' 0 '+lg+' 0 '+xj+' '+yj+' Z" fill="'+it.c+'" stroke="rgba(13,27,42,.8)" stroke-width="1.5"/>';
  });
  const svg='<svg viewBox="0 0 120 120" style="width:110px;height:110px;flex-shrink:0">'
    +paths
    +'<text x="'+cx+'" y="'+(cy+1)+'" font-size="13" font-weight="800" fill="#fff" text-anchor="middle">'+d.center+'</text>'
    +'<text x="'+cx+'" y="'+(cy+13)+'" font-size="8" fill="#CBD5E1" text-anchor="middle">'+d.centerSub+'</text></svg>';
  const legend=d.items.map(it=>'<div style="display:flex;align-items:center;gap:7px;padding:2px 0">'
    +'<span style="width:12px;height:4px;background:'+it.c+';border-radius:2px;flex-shrink:0"></span>'
    +'<span style="font-size:.65rem;color:#CBD5E1">'+it.n+'</span></div>').join('');
  return '<div style="display:flex;align-items:center;gap:14px">'+svg+'<div>'+legend+'</div></div>';
}
function opBarChartHTML(d){
  const cols={hist:'#2D6BE4',target:'rgba(42,191,191,.3)',ytd:'#2ABFBF'};
  const bars=d.vals.map((v,i)=>{
    const isHist=i<d.histCount,isYtdBar=i===d.ytdIdx;
    const col=isHist?cols.hist:cols.target;
    const pct=(v/d.max*100).toFixed(1);
    let inner='<div style="position:absolute;bottom:0;left:0;right:0;height:'+pct+'%;background:'+col+';border-radius:4px 4px 0 0"></div>';
    if(isYtdBar&&d.ytdVal){
      const yp=(d.ytdVal/d.max*100).toFixed(1);
      inner+='<div style="position:absolute;bottom:0;left:0;right:0;height:'+yp+'%;background:'+cols.ytd+';border-radius:4px 4px 0 0"></div>'
        +'<div style="position:absolute;bottom:'+yp+'%;left:0;right:0;font-size:.5rem;font-weight:800;color:#2ABFBF;text-align:center;padding-bottom:2px">YTD</div>';
    }
    const valCol=isHist?'#fff':isYtdBar?'rgba(255,255,255,.6)':'rgba(42,191,191,.9)';
    return '<div style="display:flex;flex-direction:column;align-items:center;flex:1;gap:4px">'
      +'<div style="font-size:.78rem;font-weight:800;color:'+valCol+'">'+v+'</div>'
      +'<div style="position:relative;width:100%;height:110px">'+inner+'</div>'
      +'<div style="font-size:.58rem;color:#7A93AC;text-align:center;line-height:1.3">'+d.cats[i]+'</div></div>';
  }).join('');
  const leg='<div style="display:flex;gap:14px;margin-bottom:8px;font-size:.62rem;color:#CBD5E1">'
    +'<span><span style="display:inline-block;width:10px;height:3px;background:'+cols.hist+';vertical-align:middle;margin-right:4px"></span>History</span>'
    +'<span><span style="display:inline-block;width:10px;height:3px;background:'+cols.target+';vertical-align:middle;margin-right:4px"></span>Target</span>'
    +'<span><span style="display:inline-block;width:10px;height:3px;background:'+cols.ytd+';vertical-align:middle;margin-right:4px"></span>26/27 YTD</span></div>';
  return leg+'<div style="display:flex;gap:5px;align-items:flex-end;padding:0 2px">'+bars+'</div>';
}
function opGaugeHTML(d){
  const cx=100,cy=95,R=70,r=44;
  const seg=(p0,p1,col)=>{
    const a0=(180+p0*1.8)*Math.PI/180,a1=(180+p1*1.8)*Math.PI/180,lg=(p1-p0)>50?1:0;
    const x0=cx+R*Math.cos(a0),y0=cy+R*Math.sin(a0),x1=cx+R*Math.cos(a1),y1=cy+R*Math.sin(a1);
    const xi=cx+r*Math.cos(a1),yi=cy+r*Math.sin(a1),xj=cx+r*Math.cos(a0),yj=cy+r*Math.sin(a0);
    return '<path d="M'+x0+' '+y0+' A'+R+' '+R+' 0 '+lg+' 1 '+x1+' '+y1+' L'+xi+' '+yi+' A'+r+' '+r+' 0 '+lg+' 0 '+xj+' '+yj+' Z" fill="'+col+'"/>';
  };
  let s='<svg viewBox="0 0 200 110" style="width:100%;max-width:220px;height:auto">';
  s+=seg(0,35,'#27AE60')+seg(35,50,'#D4A017')+seg(50,100,'#C0392B');
  const ha=(180+d.healthy*1.8)*Math.PI/180;
  s+='<line x1="'+(cx+(r-3)*Math.cos(ha))+'" y1="'+(cy+(r-3)*Math.sin(ha))+'" x2="'+(cx+(R+8)*Math.cos(ha))+'" y2="'+(cy+(R+8)*Math.sin(ha))+'" stroke="#fff" stroke-width="2" stroke-dasharray="3,2"/>'
    +'<text x="'+(cx+(R+20)*Math.cos(ha))+'" y="'+(cy+(R+20)*Math.sin(ha)+4)+'" font-size="10" font-weight="700" fill="rgba(255,255,255,.7)" text-anchor="middle">'+d.healthy+'%</text>';
  const na=(180+d.pct*1.8)*Math.PI/180;
  s+='<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+(R-8)*Math.cos(na))+'" y2="'+(cy+(R-8)*Math.sin(na))+'" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'
    +'<circle cx="'+cx+'" cy="'+cy+'" r="5" fill="#fff"/>'
    +'<text x="'+cx+'" y="'+(cy+6)+'" font-size="24" font-weight="800" fill="#fff" text-anchor="middle">'+d.pct+'%</text></svg>';
  return s;
}
function opSocHTML(d){
  let h='<div style="font-size:.72rem;font-weight:800;color:#CBD5E1;letter-spacing:.5px;margin-bottom:10px">'+d.label+'</div>';
  d.items.forEach(it=>{
    const w=(it.v/d.max*100).toFixed(1);
    h+='<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">'
      +'<div style="width:62px;font-size:.68rem;text-align:right;flex-shrink:0;color:'+(it.hl?'#2ABFBF':'#CBD5E1')+';font-weight:'+(it.hl?'800':'600')+'">'+(it.hl?'<b>':'')+it.n+(it.hl?'</b>':'')+'</div>'
      +'<div style="flex:1;position:relative;height:14px;background:rgba(255,255,255,.07);border-radius:3px;overflow:hidden">'
      +'<div style="position:absolute;left:0;top:0;bottom:0;width:'+w+'%;background:'+it.c+';border-radius:3px"></div>'
      +'</div>'
      +'<div style="font-size:.68rem;font-weight:700;color:'+(it.hl?'#2ABFBF':'#CBD5E1')+';width:36px">'+it.v.toFixed(1)+'%</div>'
      +'</div>';
  });
  return h;
}
function renderOnePage(){
  const sel=document.getElementById('onepage-filter');
  const el=document.getElementById('onepage-content');
  if(!sel||!el) return;
  if(!sel.options.length){
    const names=new Set(Object.keys(ONEPAGE_DATA));
    (D.coopsTeam||[]).forEach(c=>names.add(c.nome.toUpperCase()));
    [...names].sort((a,b)=>{const ha=ONEPAGE_DATA[a]?0:1,hb=ONEPAGE_DATA[b]?0:1;return ha-hb||a.localeCompare(b);}).forEach(n=>{
      const o=document.createElement('option');o.value=n;o.textContent=n+(ONEPAGE_DATA[n]?'':' (sem one-pager)');sel.appendChild(o);
    });
  }
  const d=ONEPAGE_DATA[sel.value];
  if(!d){
    el.innerHTML='<div class="card" style="text-align:center;padding:40px;color:var(--g400);font-size:.85rem">📄 Ainda não há One Page cadastrado para <b>'+sel.value+'</b>.</div>';
    return;
  }
  let h='<div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:18px">'
    +'<div><div class="tag tag-teal" style="margin-bottom:8px;font-size:.65rem">'+d.channel+'</div>'
    +'<div style="font-size:1.7rem;font-weight:800;color:var(--white)">'+d.title+'</div>'
    +'<div style="width:54px;height:3px;background:var(--teal);border-radius:2px;margin-top:8px"></div></div>'
    +'<div style="text-align:right"><div style="font-size:.95rem;font-weight:800;color:var(--green)">🌿 '+d.logo+'</div>'
    +'<div style="font-size:.6rem;color:var(--g400);letter-spacing:.8px;margin-top:3px">'+d.logoSub+'</div></div>'
    +'</div>'
    // linha 1: sell-in | sell-in mix | sell-out
    +'<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-bottom:16px">'
      +'<div class="card" style="padding:18px">'
        +'<div style="font-size:.65rem;font-weight:800;color:var(--teal);letter-spacing:1px;margin-bottom:10px;padding-bottom:7px;border-bottom:1px solid rgba(42,191,191,.2)">SELL-IN</div>'
        +'<div style="font-size:.73rem;color:var(--g400);margin-bottom:8px">'+d.sellin.label+'</div>'
        +opLineChartHTML(d.sellin)
      +'</div>'
      +'<div class="card" style="padding:18px">'
        +'<div style="font-size:.65rem;font-weight:800;color:var(--teal);letter-spacing:1px;margin-bottom:10px;padding-bottom:7px;border-bottom:1px solid rgba(42,191,191,.2)">SELL-IN MIX</div>'
        +'<div style="font-size:.73rem;color:var(--g400);margin-bottom:8px">'+d.sellinMix.label+'</div>'
        +opDonutHTML(d.sellinMix)
      +'</div>'
      +'<div class="card" style="padding:18px">'
        +'<div style="font-size:.65rem;font-weight:800;color:var(--teal);letter-spacing:1px;margin-bottom:10px;padding-bottom:7px;border-bottom:1px solid rgba(42,191,191,.2)">SELL-OUT</div>'
        +'<div style="font-size:.73rem;color:var(--g400);margin-bottom:8px">'+d.sellout.label+'</div>'
        +opBarChartHTML(d.sellout)
      +'</div>'
    +'</div>'
    // linha 2: inventory | action plan | soc
    +'<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-bottom:16px">'
      +'<div class="card" style="padding:18px;text-align:center">'
        +'<div style="font-size:.65rem;font-weight:800;color:var(--teal);letter-spacing:1px;margin-bottom:10px;padding-bottom:7px;border-bottom:1px solid rgba(42,191,191,.2);text-align:left">INVENTORY</div>'
        +'<div style="display:flex;justify-content:center;margin-bottom:6px">'+opGaugeHTML(d.inventory)+'</div>'
        +'<div class="tag tag-red" style="display:inline-flex;margin-bottom:8px">'+d.inventory.status+'</div>'
        +'<div style="font-size:.65rem;color:var(--g400);line-height:1.6">'+d.inventory.note+'</div>'
      +'</div>'
      +'<div class="card" style="padding:18px">'
        +'<div style="font-size:.65rem;font-weight:800;color:var(--teal);letter-spacing:1px;margin-bottom:10px;padding-bottom:7px;border-bottom:1px solid rgba(42,191,191,.2)">ACTION PLAN</div>'
        +d.actionPlan.map((a,i)=>'<div style="display:flex;gap:10px;'+(i?'margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,.06)':'')+'">'
          +'<span style="width:8px;height:8px;background:var(--teal);border-radius:2px;flex-shrink:0;margin-top:4px"></span>'
          +'<div style="font-size:.76rem;color:var(--g200);line-height:1.6">'+a+'</div></div>').join('')
      +'</div>'
      +'<div class="card" style="padding:18px">'+opSocHTML(d.soc)+'</div>'
    +'</div>'
    // key takeaway
    +'<div class="card" style="border-left:4px solid var(--teal);padding:16px 20px">'
      +'<div style="font-size:.63rem;font-weight:800;color:var(--amber);letter-spacing:1px;margin-bottom:7px">KEY TAKEAWAY</div>'
      +'<div style="font-size:.8rem;color:var(--g200);line-height:1.75">'+d.takeaway+'</div>'
    +'</div>';
  el.innerHTML=h;
}

// ══════════════════════════════════════
// PINC · CALENDÁRIO DE PROCESSOS 2026 (GANTT)
// ══════════════════════════════════════
const _PG_MESES=['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
const _PG_GROUPS=[
  {id:'fin', label:'Plano<br>Financeiro<br>CU',      accent:'#5B9BD5', bar:'#2E75B6', bg:'rgba(91,155,213,.08)',  lbg:'rgba(91,155,213,.16)'},
  {id:'est', label:'Plano<br>Estratégico<br>e Tático',accent:'#4CD07D', bar:'#1FA968', bg:'rgba(39,174,96,.08)',  lbg:'rgba(39,174,96,.16)'},
  {id:'cap', label:'Plano de<br>Capacitação',         accent:'#F0A050', bar:'#E67E22', bg:'rgba(230,126,34,.08)', lbg:'rgba(230,126,34,.16)'}
];
const _PG_DOT={gray:'#7A93AC',green:'#4CD07D',amber:'#D4A017',red:'#E05050'};
function pgPct(v){return (v/12*100).toFixed(3)+'%';}
function renderPinc(){
  const el=document.getElementById('pinc-gantt');
  if(!el) return;
  if(!D.pincGantt||!Array.isArray(D.pincGantt.fin)) D.pincGantt=JSON.parse(JSON.stringify(D0.pincGantt));
  const grid='background-image:linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px);background-size:calc(100%/12) 100%';
  let h='<div style="overflow-x:auto"><div style="min-width:1000px">';
  // ── Header meses ──
  h+='<div style="display:flex"><div style="width:140px;flex-shrink:0"></div>'
    +'<div style="flex:1;display:grid;grid-template-columns:repeat(12,1fr);border-bottom:2px solid rgba(255,255,255,.18)">'
    +_PG_MESES.map(m=>'<div style="text-align:center;font-size:.74rem;font-weight:800;color:var(--g200);padding:6px 0;letter-spacing:.4px">'+m+'</div>').join('')
    +'</div><div style="width:34px;flex-shrink:0"></div></div>';
  // ── Grupos ──
  _PG_GROUPS.forEach(g=>{
    const items=D.pincGantt[g.id]||[];
    h+='<div style="display:flex;border-bottom:2px solid rgba(255,255,255,.12)">'
      // label lateral
      +'<div style="width:140px;flex-shrink:0;background:'+g.lbg+';display:flex;align-items:center;justify-content:center;text-align:center;padding:10px 8px">'
      +'<div><div style="font-size:.78rem;font-weight:800;color:'+g.accent+';line-height:1.35">'+g.label+'</div>'
      +'<button class="btn btn-g btn-sm" style="margin-top:10px;font-size:.66rem;padding:3px 8px" onclick="pgAdd(\''+g.id+'\')">+ Atividade</button></div></div>'
      // faixa das barras
      +'<div style="flex:1;background:'+g.bg+';'+grid+';padding:8px 0">';
    items.forEach((it,i)=>{
      const barStyle = it.dash
        ? 'background:rgba(13,27,42,.5);border:2px dashed '+g.accent+';color:'+g.accent
        : 'background:'+g.bar+';color:#fff;box-shadow:0 2px 6px rgba(0,0,0,.35)';
      h+='<div class="pg-row" style="position:relative;height:34px">'
        +'<div class="pg-track" data-g="'+g.id+'" style="position:absolute;inset:0">'
        +'<div id="pgbar-'+g.id+'-'+i+'" onpointerdown="pgStart(event,\''+g.id+'\','+i+',\'move\')" ondblclick="pgRename(\''+g.id+'\','+i+')" '
        +'style="position:absolute;top:4px;height:26px;left:'+pgPct(it.s)+';width:'+pgPct(it.e-it.s)+';'+barStyle+';border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:700;white-space:nowrap;overflow:hidden;padding:0 10px;cursor:grab;user-select:none;touch-action:none">'
        +'<span style="pointer-events:none;overflow:hidden;text-overflow:ellipsis">'+it.n+'</span>'
        +'<div onpointerdown="event.stopPropagation();pgStart(event,\''+g.id+'\','+i+',\'l\')" style="position:absolute;left:0;top:0;bottom:0;width:9px;cursor:ew-resize"></div>'
        +'<div onpointerdown="event.stopPropagation();pgStart(event,\''+g.id+'\','+i+',\'r\')" style="position:absolute;right:0;top:0;bottom:0;width:9px;cursor:ew-resize"></div>'
        +'</div>'
        // bolinha de status
        +'<div id="pgdot-'+g.id+'-'+i+'" onclick="pgDot(\''+g.id+'\','+i+')" title="Clique para alterar o status" '
        +'style="position:absolute;top:9px;left:calc('+pgPct(it.e)+' + 7px);width:16px;height:16px;border-radius:50%;background:'+_PG_DOT[it.st||'gray']+';border:2px solid rgba(255,255,255,.25);box-shadow:0 0 8px '+_PG_DOT[it.st||'gray']+'55;cursor:pointer;z-index:2"></div>'
        // excluir (aparece no hover)
        +'<div class="pg-del" onclick="pgDel(\''+g.id+'\','+i+')" title="Excluir atividade" '
        +'style="position:absolute;top:8px;left:calc('+pgPct(it.e)+' + 30px);width:18px;height:18px;border-radius:50%;background:rgba(224,80,80,.2);border:1px solid #E05050;color:#E05050;font-size:.6rem;font-weight:800;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;transition:opacity .15s;z-index:2">✕</div>'
        +'</div></div>';
    });
    h+='</div><div style="width:34px;flex-shrink:0;background:'+g.bg+'"></div></div>';
  });
  h+='</div></div>';
  el.innerHTML=h;
}
// ── Drag / Resize ──
let _pgDrag=null;
function pgStart(ev,gid,i,mode){
  ev.preventDefault();
  const track=document.getElementById('pgbar-'+gid+'-'+i).parentElement;
  const it=D.pincGantt[gid][i];
  _pgDrag={gid,i,mode,x0:ev.clientX,w:track.offsetWidth,s0:it.s,e0:it.e};
  document.addEventListener('pointermove',pgMove);
  document.addEventListener('pointerup',pgEnd);
}
function pgMove(ev){
  if(!_pgDrag) return;
  const d=_pgDrag, it=D.pincGantt[d.gid][d.i];
  const dm=Math.round((ev.clientX-d.x0)/d.w*12*4)/4; // snap de 0,25 mês (~1 semana)
  if(d.mode==='move'){
    const len=d.e0-d.s0;
    let s=d.s0+dm, e=d.e0+dm;
    if(s<0){s=0;e=len;} if(e>12){e=12;s=12-len;}
    it.s=s; it.e=e;
  }else if(d.mode==='l'){
    it.s=Math.min(Math.max(0,d.s0+dm),it.e-0.5);
  }else{
    it.e=Math.max(Math.min(12,d.e0+dm),it.s+0.5);
  }
  const bar=document.getElementById('pgbar-'+d.gid+'-'+d.i);
  const dot=document.getElementById('pgdot-'+d.gid+'-'+d.i);
  if(bar){bar.style.left=pgPct(it.s);bar.style.width=pgPct(it.e-it.s);}
  if(dot){dot.style.left='calc('+pgPct(it.e)+' + 7px)';}
}
function pgEnd(){
  document.removeEventListener('pointermove',pgMove);
  document.removeEventListener('pointerup',pgEnd);
  if(_pgDrag){_pgDrag=null;saveD(true);renderPinc();}
}
// ── Bolinha de status: verde → amarelo → vermelho ──
function pgDot(gid,i){
  const it=D.pincGantt[gid][i];
  const cycle={gray:'green',green:'amber',amber:'red',red:'green'};
  it.st=cycle[it.st||'gray'];
  const dot=document.getElementById('pgdot-'+gid+'-'+i);
  if(dot){dot.style.background=_PG_DOT[it.st];dot.style.boxShadow='0 0 8px '+_PG_DOT[it.st]+'55';}
  saveD(true);
}
function pgRename(gid,i){
  const it=D.pincGantt[gid][i];
  const n=prompt('Nome da atividade:',it.n);
  if(n!==null&&n.trim()){it.n=n.trim();renderPinc();saveD(true);}
}
function pgAdd(gid){
  const n=prompt('Nome da nova atividade:');
  if(n&&n.trim()){D.pincGantt[gid].push({n:n.trim(),s:0,e:2,st:'gray'});renderPinc();saveD(true);}
}
function pgDel(gid,i){
  if(confirm('Excluir a atividade "'+D.pincGantt[gid][i].n+'"?')){D.pincGantt[gid].splice(i,1);renderPinc();saveD(true);}
}

// ══════════════════════════════════════
// TIMELINE
// ══════════════════════════════════════
function renderMarcos(){
  const tb = document.getElementById('marcos-body');
  if(!tb) return;
  if(!D.marcos) D.marcos=[];
  const mesOpts = function(cur){ return _MESES.map(m=>'<option value="'+m+'"'+(cur===m?' selected':'')+'>'+m+'</option>').join(''); };
  tb.innerHTML = D.marcos.map((m,mi)=>{
    return '<tr>'
      +'<td contenteditable="true" onblur="D.marcos['+mi+'].acao=this.textContent;renderTimelineVisual();saveD(true)">'+( m.acao||'')+'</td>'
      +'<td><select onchange="D.marcos['+mi+'].mes=this.value;renderTimelineVisual();saveD(true)" style="background:var(--navy-m);border:1px solid rgba(255,255,255,.12);color:var(--white);border-radius:6px;padding:4px 8px;font-size:.78rem;width:100%"><option value="">— Mês —</option>'+mesOpts(m.mes)+'</select></td>'
      +'<td><button class="btn btn-g btn-sm" onclick="D.marcos.splice('+mi+',1);renderMarcos();renderTimelineVisual();saveD(true)">✕</button></td>'
      +'</tr>';
  }).join('');
  renderTimelineVisual();
}

function renderTimelineVisual(){
  const el = document.getElementById('timeline-visual');
  if(!el) return;
  if(!D.marcos||!D.marcos.length){
    el.innerHTML='<div style="text-align:center;color:var(--g600);padding:20px;font-size:.82rem">Adicione marcos na tabela abaixo para visualizar a timeline.</div>';
    return;
  }
  const mesOrder={'Janeiro':0,'Fevereiro':1,'Março':2,'Abril':3,'Maio':4,'Junho':5,'Julho':6,'Agosto':7,'Setembro':8,'Outubro':9,'Novembro':10,'Dezembro':11};
  const sorted=[...D.marcos].filter(m=>m.mes&&m.acao).sort((a,b)=>(mesOrder[a.mes]||0)-(mesOrder[b.mes]||0));
  if(!sorted.length){el.innerHTML='';return;}
  const cols=['#2ABFBF','#9B59B6','#E8553E','#D4A017','#27AE60','#5B9BD5','#E67E22','#1ABC9C','#8E44AD','#F39C12'];
  el.innerHTML='<div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:28px 24px;overflow-x:auto;margin-bottom:8px">'
    +'<div style="position:relative;min-width:'+(Math.max(sorted.length,3)*150)+'px">'
    +'<div style="position:absolute;top:20px;left:3%;right:3%;height:3px;background:linear-gradient(90deg,var(--teal),#9B59B6);border-radius:2px"></div>'
    +'<div style="display:flex;justify-content:space-around;position:relative;z-index:1">'
    +sorted.map((m,i)=>{
      const col=cols[i%cols.length];
      return '<div style="display:flex;flex-direction:column;align-items:center;flex:1;max-width:180px">'
        +'<div style="width:18px;height:18px;border-radius:50%;background:'+col+';border:3px solid var(--navy-l);box-shadow:0 0 0 4px '+col+'30;margin-bottom:10px;flex-shrink:0"></div>'
        +'<div style="font-size:.7rem;font-weight:800;color:'+col+';text-align:center;margin-bottom:5px;letter-spacing:.3px">'+m.mes+'</div>'
        +'<div style="font-size:.75rem;color:var(--white);text-align:center;line-height:1.45;padding:0 4px">'+m.acao+'</div>'
        +'</div>';
    }).join('')
    +'</div></div></div>';
}


function exportD(){
  const blob = new Blob([JSON.stringify(D, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'escala_backup_'+new Date().toISOString().slice(0,10)+'.json';
  a.click();
}


function renderDashDestaques(){
  const tb=document.getElementById('dash-destaques-body');
  if(!tb) return;
  if(!D.govCoops||!D.govCoops.length){
    tb.innerHTML='<tr><td colspan="8" style="text-align:center;color:var(--g600);padding:16px">Adicione cooperativas em Governança para ver aqui.</td></tr>';
    return;
  }
  const filter=document.getElementById('dash-radar-filter')?.value||'';
  const rows=filter?D.govCoops.filter(r=>r.radar===filter):D.govCoops;
  if(!rows.length){
    tb.innerHTML='<tr><td colspan="8" style="text-align:center;color:var(--g600);padding:16px">Nenhuma cooperativa com esse filtro.</td></tr>';
    return;
  }
  const radarL={atencao:'⚠️ Em atenção',plano:'✅ No plano',acima:'🌟 Acima',gray:'—'};
  const radarC={atencao:'tag-red',plano:'tag-green',acima:'tag-blue',gray:'tag-gray'};

  function semaforo(idx2, field, val){
    return ['red','yellow','green'].map(c=>{
      const bg=c==='yellow'?'#D4A017':c==='red'?'#C0392B':'#27AE60';
      const active=val===c;
      return '<span onclick="D.govCoops['+idx2+'].'+field+'=\''+c+'\';renderDashDestaques();renderGovCoops();saveD(true)"'
        +' style="width:18px;height:18px;border-radius:50%;background:'+bg+';display:inline-block;margin:0 2px;cursor:pointer;'
        +'opacity:'+(active?'1':'0.25')+';border:'+(active?'2px solid white':'none')+'"></span>';
    }).join('');
  }

  const radarOpts=(r)=>[
    '<option value="gray"'+(!r.radar||r.radar==='gray'?' selected':'')+'>— Sel. —</option>',
    '<option value="atencao"'+(r.radar==='atencao'?' selected':'')+'>⚠️ Em atenção</option>',
    '<option value="plano"'+(r.radar==='plano'?' selected':'')+'>✅ No plano</option>',
    '<option value="acima"'+(r.radar==='acima'?' selected':'')+'>🌟 Acima</option>',
  ].join('');

  tb.innerHTML=rows.map((r,ri)=>{
    const realIdx=filter?D.govCoops.findIndex(x=>x.coop===r.coop&&x.kam===r.kam):ri;
    return '<tr>'
      +'<td style="font-weight:700">'+r.coop+'</td>'
      +'<td style="font-size:.76rem;color:var(--g200)">'+getKam(r.coop||r.nome||'')+'</td>'
      +'<td><select onchange="D.govCoops['+realIdx+'].radar=this.value;renderDashDestaques();renderGovCoops();saveD(true)" style="background:var(--navy-m);border:1px solid rgba(255,255,255,.12);color:var(--white);border-radius:6px;padding:4px 6px;font-size:.75rem">'+radarOpts(r)+'</select></td>'
      +'<td contenteditable="true" style="font-size:.8rem" onblur="D.govCoops['+realIdx+'].detalhe=this.textContent;saveD(true)">'+( r.detalhe||'')+'</td>'
      +'<td style="text-align:center"><div style="display:flex;gap:2px;justify-content:center">'+semaforo(realIdx,'relZmp',r.relZmp||'')+'</div></td>'
      +'<td style="text-align:center"><div style="display:flex;gap:2px;justify-content:center">'+semaforo(realIdx,'soc',r.soc||'')+'</div></td>'
      +'<td style="text-align:center"><div style="display:flex;gap:2px;justify-content:center">'+semaforo(realIdx,'rel',r.rel||'')+'</div></td>'
      +'<td><button class="btn btn-g btn-sm" onclick="D.govCoops.splice('+realIdx+',1);renderDashDestaques();renderGovCoops();saveD(true)">✕</button></td>'
      +'</tr>';
  }).join('');
}
function _hcGetMonth(idx){
  return D.kpiAreas[idx].healthMonth || 'julho';
}

function _hcSaveCurrent(idx){
  const m = _hcGetMonth(idx);
  if(!D.kpiAreas[idx].byMonth) D.kpiAreas[idx].byMonth = {};
  D.kpiAreas[idx].byMonth[m] = D.kpiAreas[idx].checks.map(c=>({
    txt: c.txt, done: c.done, status: c.status, obs: c.obs||''
  }));
}

function _hcLoadMonth(idx, month){
  const area = D.kpiAreas[idx];
  if(area.byMonth && area.byMonth[month]){
    // Restore saved state for this month
    area.checks = area.checks.map((c, hi) => {
      const saved = area.byMonth[month][hi];
      if(saved) return {...c, done: saved.done, status: saved.status, obs: saved.obs||''};
      return {...c, done: false, status: 'gray', obs: ''};
    });
  } else {
    // Fresh month — reset all
    area.checks = area.checks.map(c => ({...c, done: false, status: 'gray', obs: ''}));
  }
}

function _hcChangeMonth(idx, newMonth){
  // Save current month state BEFORE switching
  _hcSaveCurrent(idx);
  // Switch month
  D.kpiAreas[idx].healthMonth = newMonth;
  // Load new month state
  _hcLoadMonth(idx, newMonth);
  saveD(true);
  renderKpiAreaContent(idx);
}

function _hcSetStatus(idx, hi, el){
  D.kpiAreas[idx].checks[hi].status = cycleTagVal(el);
  _hcSaveCurrent(idx);
  saveD(true);
}

function _hcSetDone(idx, hi, val){
  D.kpiAreas[idx].checks[hi].done = val;
  _hcSaveCurrent(idx);
  saveD(true);
}

function _progLogo(nome, hex, b64, size){
  size = size || 56;
  if(b64){
    return '<img src="data:image/png;base64,'+b64+'" style="height:'+size+'px;width:auto;display:block">';
  }
  // Fallback SVG if no b64
  return '<span style="font-size:1.5rem;font-weight:900;color:'+hex+'">'+nome+'</span>';
}


// ── LOAD SHARED DATA FROM SUPABASE ──
async function _loadSharedData(){
  try {
    const {data, error} = await _sb.from('cockpit_data')
      .select('data,updated_at,updated_by')
      .eq('id','escala_main')
      .single();
    if(error || !data || !data.data) return false;
    // Compare with local - use whichever is more recent
    const localStr = localStorage.getItem('escala_v2');
    const supaData = data.data;
    // If Supabase has data, use it (shared source of truth)
    if(supaData && Object.keys(supaData).length > 0){
      // Merge: use Supabase as base but keep local if it's the same user's session
      localStorage.setItem('escala_v2', JSON.stringify(supaData));
      console.log('Dados carregados do servidor. Última edição por:', data.updated_by);
      return true;
    }
  } catch(e) {
    console.warn('Could not load shared data:', e.message);
  }
  return false;
}

// ── REAL-TIME SYNC ──
function _setupRealtime(){
  _sb.channel('cockpit-sync')
    .on('postgres_changes', {
      event: 'UPDATE',
      schema: 'public',
      table: 'cockpit_data',
      filter: 'id=eq.escala_main'
    }, (payload) => {
      // Someone else saved - reload if we're not in the middle of saving
      if(!st && payload.new && payload.new.data){
        const who = payload.new.updated_by || 'outro usuário';
        // Only reload if updated by someone else
        if(who !== (_currentProfile?.nome || _currentUser?.email || '')){
          D = payload.new.data;
          // Apply migrations for new fields
          if(!D.rituais||!Array.isArray(D.rituais)||!D.rituais.length) D.rituais=[];
          if(!D.govCoops) D.govCoops=[];
          if(!D.pinc||!Array.isArray(D.pinc)) D.pinc=[];
          if(!D.marcos) D.marcos=[];
          if(!D.percepcao) D.percepcao={planejado:'',realizado:'',obs:''};
          localStorage.setItem('escala_v2', JSON.stringify(D));
          renderAll();
          showToastMsg('🔄 Dados atualizados por ' + who);
        }
      }
    })
    .subscribe();
}

function showToastMsg(msg){
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 3000);
}

// ── RITUAL MATRIX ──
// ══════════════════════════════════════
// PAC · PLANO DE ACELERAÇÃO DAS COOPERATIVAS
// ══════════════════════════════════════
function openPacModal(){
  const sel=document.getElementById('pac-coop-sel');
  if(sel && sel.options.length<=1){
    TIME_INTERNO.forEach(r=>{
      const o=document.createElement('option');
      o.value=r.coop; o.textContent=r.coop; sel.appendChild(o);
    });
  }
  document.getElementById('pac-preview').style.display='none';
  if(sel) sel.value='';
  document.getElementById('pac-modal').style.display='flex';
}
function closePacModal(){
  document.getElementById('pac-modal').style.display='none';
}
function pacCoopPreview(){
  const coop=document.getElementById('pac-coop-sel').value;
  const r=lookupKam(coop);
  const prev=document.getElementById('pac-preview');
  if(r&&coop){
    document.getElementById('pac-prev-kam').textContent='KAM: '+(r.kam||'—')+'  ·  RSL: '+(r.rsl||'—');
    document.getElementById('pac-prev-rsl').textContent='RML: '+(r.rml||'—');
    prev.style.display='block';
  } else { prev.style.display='none'; }
}
function addPacCoop(){
  const coop=document.getElementById('pac-coop-sel').value;
  if(!coop) return;
  if(!D.pac) D.pac=[];
  if(D.pac.find(p=>p.coop===coop)){ closePacModal(); return; }
  const r=lookupKam(coop)||{};
  D.pac.push({
    coop, kam:r.kam||'', rsl:r.rsl||'', rml:r.rml||'',
    soc:'', sellin:'', sellout:'', estoque:'',
    plano:[], acoes:[]
  });
  renderPac(); saveD(true); closePacModal();
}
function renderPac(){
  const el=document.getElementById('pac-cards');
  if(!el) return;
  if(!D.pac) D.pac=[];
  const cnt=document.getElementById('pac-count');
  if(cnt) cnt.textContent=D.pac.length+' cooperativa'+(D.pac.length!==1?'s':'');
  if(!D.pac.length){
    el.innerHTML='<div class="card" style="text-align:center;padding:32px;color:var(--g400);font-size:.85rem">Nenhuma cooperativa no PAC. Clique em <b>+ Coop</b> para adicionar.</div>';
    return;
  }
  el.innerHTML=D.pac.map((p,pi)=>{
    const planoRows=p.plano.map((ln,li)=>`
      <tr>
        <td contenteditable="true" onblur="D.pac[${pi}].plano[${li}].item=this.textContent;saveD(true)" style="padding:7px 10px;font-size:.76rem;color:var(--white);border-bottom:1px solid rgba(255,255,255,.05)">${ln.item||''}</td>
        <td contenteditable="true" onblur="D.pac[${pi}].plano[${li}].resp=this.textContent;saveD(true)" style="padding:7px 10px;font-size:.76rem;color:var(--g200);border-bottom:1px solid rgba(255,255,255,.05)">${ln.resp||''}</td>
        <td contenteditable="true" onblur="D.pac[${pi}].plano[${li}].prazo=this.textContent;saveD(true)" style="padding:7px 10px;font-size:.76rem;color:var(--g400);border-bottom:1px solid rgba(255,255,255,.05)">${ln.prazo||''}</td>
        <td style="padding:4px 8px;border-bottom:1px solid rgba(255,255,255,.05)">${tagHTML(ln.status||'gray','onclick=\'D.pac['+pi+'].plano['+li+'].status=cycleTagVal(this);saveD(true)\'')}</td>
        <td style="padding:4px 8px;border-bottom:1px solid rgba(255,255,255,.05)"><button class="btn btn-g btn-sm" onclick="D.pac[${pi}].plano.splice(${li},1);renderPac();saveD(true)">✕</button></td>
      </tr>`).join('');
    const acoesRows=p.acoes.map((a,ai)=>`
      <tr>
        <td contenteditable="true" onblur="D.pac[${pi}].acoes[${ai}].acao=this.textContent;saveD(true)" style="padding:7px 10px;font-size:.76rem;color:var(--white);border-bottom:1px solid rgba(255,255,255,.05)">${a.acao||''}</td>
        <td contenteditable="true" onblur="D.pac[${pi}].acoes[${ai}].resp=this.textContent;saveD(true)" style="padding:7px 10px;font-size:.76rem;color:var(--g200);border-bottom:1px solid rgba(255,255,255,.05)">${a.resp||''}</td>
        <td contenteditable="true" onblur="D.pac[${pi}].acoes[${ai}].prazo=this.textContent;saveD(true)" style="padding:7px 10px;font-size:.76rem;color:var(--g400);border-bottom:1px solid rgba(255,255,255,.05)">${a.prazo||''}</td>
        <td style="padding:4px 8px;border-bottom:1px solid rgba(255,255,255,.05)">${tagHTML(a.status||'gray','onclick=\'D.pac['+pi+'].acoes['+ai+'].status=cycleTagVal(this);saveD(true)\'')}</td>
        <td style="padding:4px 8px;border-bottom:1px solid rgba(255,255,255,.05)"><button class="btn btn-g btn-sm" onclick="D.pac[${pi}].acoes.splice(${ai},1);renderPac();saveD(true)">✕</button></td>
      </tr>`).join('');
    return `
    <div class="card" style="margin-bottom:20px;padding:0;overflow:hidden">
      <!-- Cabeçalho -->
      <div style="background:var(--navy-m);padding:14px 18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px">
        <div>
          <div style="font-size:1.1rem;font-weight:800;color:var(--white)">${p.coop}</div>
          <div style="font-size:.72rem;color:var(--teal);margin-top:3px">
            KAM: <b>${p.kam||'—'}</b>
            ${p.rsl?' · RSL: <b>'+p.rsl+'</b>':''}
            ${p.rml?' · RML: <b>'+p.rml+'</b>':''}
          </div>
        </div>
        <button class="btn btn-g btn-sm" onclick="if(confirm('Remover ${p.coop} do PAC?')){D.pac.splice(${pi},1);renderPac();saveD(true)}">✕ Remover</button>
      </div>
      <div style="padding:18px;display:grid;grid-template-columns:1fr 1fr;gap:16px">
        <!-- PARTE 1: Dados -->
        <div>
          <div style="font-size:.72rem;font-weight:800;color:var(--teal);letter-spacing:.8px;text-transform:uppercase;margin-bottom:12px;padding-bottom:6px;border-bottom:1px solid rgba(42,191,191,.2)">📊 Parte 1 — Dados da Coop</div>
          <div style="display:flex;flex-direction:column;gap:10px">
            ${['soc:SOC (%)','sellin:Evolução Sell-in (últimos 3 anos)','sellout:Evolução Sell-out (últimos 3 anos)','estoque:Estoque'].map(f=>{
              const [key,lbl]=f.split(':');
              return '<div><div style="font-size:.65rem;color:var(--g400);font-weight:700;margin-bottom:3px">'+lbl+'</div>'
                +'<div contenteditable="true" onblur="D.pac['+pi+'].'+key+'=this.textContent;saveD(true)" style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:8px 10px;font-size:.8rem;color:var(--white);min-height:36px;outline:none">'+( p[key]||'')+'</div></div>';
            }).join('')}
          </div>
        </div>
        <!-- PARTE 2 & 3 -->
        <div style="display:flex;flex-direction:column;gap:16px">
          <!-- Plano -->
          <div>
            <div style="font-size:.72rem;font-weight:800;color:var(--teal);letter-spacing:.8px;text-transform:uppercase;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid rgba(42,191,191,.2)">📋 Parte 2 — Plano</div>
            <div style="overflow-x:auto">
            <table style="width:100%;border-collapse:collapse">
              <thead><tr style="background:rgba(255,255,255,.05)">
                <th style="padding:6px 10px;font-size:.65rem;color:var(--g400);text-align:left;min-width:160px">Item</th>
                <th style="padding:6px 10px;font-size:.65rem;color:var(--g400);text-align:left;min-width:100px">Resp.</th>
                <th style="padding:6px 10px;font-size:.65rem;color:var(--g400);text-align:left;min-width:80px">Prazo</th>
                <th style="padding:6px 10px;font-size:.65rem;color:var(--g400);text-align:left;min-width:80px">Status</th>
                <th style="width:32px"></th>
              </tr></thead>
              <tbody>${planoRows}</tbody>
            </table></div>
            <button class="btn btn-g btn-sm" style="margin-top:8px" onclick="D.pac[${pi}].plano.push({item:'',resp:'',prazo:'',status:'gray'});renderPac();saveD(true)">+ Linha</button>
          </div>
          <!-- Ações -->
          <div>
            <div style="font-size:.72rem;font-weight:800;color:var(--teal);letter-spacing:.8px;text-transform:uppercase;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid rgba(42,191,191,.2)">⚡ Parte 3 — Ações</div>
            <div style="overflow-x:auto">
            <table style="width:100%;border-collapse:collapse">
              <thead><tr style="background:rgba(255,255,255,.05)">
                <th style="padding:6px 10px;font-size:.65rem;color:var(--g400);text-align:left;min-width:160px">Ação</th>
                <th style="padding:6px 10px;font-size:.65rem;color:var(--g400);text-align:left;min-width:100px">Resp.</th>
                <th style="padding:6px 10px;font-size:.65rem;color:var(--g400);text-align:left;min-width:80px">Prazo</th>
                <th style="padding:6px 10px;font-size:.65rem;color:var(--g400);text-align:left;min-width:80px">Status</th>
                <th style="width:32px"></th>
              </tr></thead>
              <tbody>${acoesRows}</tbody>
            </table></div>
            <button class="btn btn-g btn-sm" style="margin-top:8px" onclick="D.pac[${pi}].acoes.push({acao:'',resp:'',prazo:'',status:'gray'});renderPac();saveD(true)">+ Linha</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════
// RELACIONAMENTO COOPS
// ══════════════════════════════════════
const _TERMO_OPTS=[
  {v:'otimo',   l:'🟢 Ótimo',    color:'#27AE60'},
  {v:'bom',     l:'🟡 Bom',      color:'#D4A017'},
  {v:'neutro',  l:'🟠 Neutro',   color:'#E67E22'},
  {v:'ruim',    l:'🔴 Ruim',     color:'#E74C3C'},
  {v:'critico', l:'⚫ Crítico',  color:'#7F8C8D'},
];
function _termoTag(val,ri){
  const cur=_TERMO_OPTS.find(o=>o.v===val)||_TERMO_OPTS[0];
  const opts=_TERMO_OPTS.map(o=>`<option value="${o.v}"${o.v===val?' selected':''}>${o.l}</option>`).join('');
  return `<select onchange="D.relac[${ri}].termo=this.value;renderRelac();saveD(true)"
    style="background:rgba(${cur.color==='#27AE60'?'39,174,96':cur.color==='#D4A017'?'212,160,23':cur.color==='#E67E22'?'230,126,34':cur.color==='#E74C3C'?'231,76,60':'127,140,141'},.2);
    border:1px solid ${cur.color};color:${cur.color};border-radius:6px;padding:4px 8px;font-size:.72rem;font-weight:700;cursor:pointer;width:100%">${opts}</select>`;
}
function renderRelac(){
  const tb=document.getElementById('relac-body');
  if(!tb) return;
  if(!D.relac) D.relac=[];
  const cnt=document.getElementById('relac-count');
  if(cnt) cnt.textContent=D.relac.length+' registro'+(D.relac.length!==1?'s':'');
  if(!D.relac.length){
    tb.innerHTML='<tr><td colspan="8" style="padding:24px;text-align:center;color:var(--g600);font-size:.8rem">Nenhum registro. Clique em <b>+ Linha</b> para adicionar.</td></tr>';
    return;
  }
  const coopOptions=TIME_INTERNO.map(r=>`<option value="${r.coop}">${r.coop}</option>`).join('');
  tb.innerHTML=D.relac.map((r,ri)=>{
    const bg=ri%2===0?'background:rgba(255,255,255,.015)':'';
    return `<tr style="${bg}">
      <td style="padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.05)">
        <select onchange="D.relac[${ri}].coop=this.value;D.relac[${ri}].kam=getKam(this.value);renderRelac();saveD(true)"
          style="background:var(--navy-m);border:1px solid rgba(255,255,255,.12);color:var(--white);border-radius:6px;padding:5px 8px;font-size:.75rem;width:100%">
          <option value="">Selecione...</option>${coopOptions.replace(`value="${r.coop}"`,`value="${r.coop}" selected`)}
        </select>
      </td>
      <td style="padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.05);font-size:.75rem;color:var(--teal);font-weight:600;white-space:nowrap">${r.kam||'—'}</td>
      <td style="padding:0;border-bottom:1px solid rgba(255,255,255,.05)"><div contenteditable="true" onblur="D.relac[${ri}].diretoria=this.textContent;saveD(true)" style="padding:8px 10px;font-size:.75rem;color:var(--white);min-height:34px;outline:none">${r.diretoria||''}</div></td>
      <td style="padding:0;border-bottom:1px solid rgba(255,255,255,.05)"><div contenteditable="true" onblur="D.relac[${ri}].acao=this.textContent;saveD(true)" style="padding:8px 10px;font-size:.75rem;color:var(--white);min-height:34px;outline:none">${r.acao||''}</div></td>
      <td style="padding:0;border-bottom:1px solid rgba(255,255,255,.05)"><div contenteditable="true" onblur="D.relac[${ri}].data=this.textContent;saveD(true)" style="padding:8px 10px;font-size:.75rem;color:var(--g300);min-height:34px;outline:none">${r.data||''}</div></td>
      <td style="padding:0;border-bottom:1px solid rgba(255,255,255,.05)"><div contenteditable="true" onblur="D.relac[${ri}].resp=this.textContent;saveD(true)" style="padding:8px 10px;font-size:.75rem;color:var(--white);min-height:34px;outline:none">${r.resp||''}</div></td>
      <td style="padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.05)">${_termoTag(r.termo,ri)}</td>
      <td style="padding:6px 8px;border-bottom:1px solid rgba(255,255,255,.05)"><button class="btn btn-g btn-sm" onclick="D.relac.splice(${ri},1);renderRelac();saveD(true)">✕</button></td>
    </tr>`;
  }).join('');
}
function addRelac(){
  if(!D.relac) D.relac=[];
  D.relac.push({coop:'',kam:'',diretoria:'',acao:'',data:'',resp:'',termo:'otimo'});
  renderRelac();
  saveD(true);
}

// ══════════════════════════════════════
// MAPEAMENTO DE TEMAS
// ══════════════════════════════════════
function renderTemas(){
  const tb=document.getElementById('temas-body');
  if(!tb) return;
  if(!D.temas) D.temas=[];
  if(!D.temas.length){
    tb.innerHTML='<tr><td colspan="5" style="padding:24px;text-align:center;color:var(--g600);font-size:.8rem">Nenhum tema cadastrado. Clique em <b>+ Linha</b> para adicionar.</td></tr>';
    return;
  }
  const cell=(field,ti,placeholder,mono)=>`<td style="padding:0;border-bottom:1px solid rgba(255,255,255,.05)"><div contenteditable="true" onblur="D.temas[${ti}].${field}=this.textContent;saveD(true)" style="padding:10px 14px;font-size:.78rem;color:${mono?'var(--g300)':'var(--white)'};min-height:38px;outline:none;line-height:1.55">${D.temas[ti][field]||''}</div></td>`;
  tb.innerHTML=D.temas.map((t,ti)=>`
    <tr style="${ti%2===0?'background:rgba(255,255,255,.015)':''}">
      ${cell('ritual',ti,'Ex: Comitê Executivo')}
      ${cell('data',ti,'Ex: 10/07/2026',true)}
      ${cell('detalhe',ti,'Descreva o tema abordado')}
      ${cell('proximos',ti,'Próximos passos e responsáveis')}
      <td style="padding:6px 8px;border-bottom:1px solid rgba(255,255,255,.05);vertical-align:middle">
        <button class="btn btn-g btn-sm" onclick="D.temas.splice(${ti},1);renderTemas();saveD(true)" title="Remover linha">✕</button>
      </td>
    </tr>`).join('');
}
function addTema(){
  if(!D.temas) D.temas=[];
  D.temas.push({ritual:'',data:'',detalhe:'',proximos:''});
  renderTemas();
  saveD(true);
  // Focar na primeira célula da nova linha
  setTimeout(()=>{
    const tb=document.getElementById('temas-body');
    if(tb){const last=tb.querySelector('tr:last-child [contenteditable]');if(last)last.focus();}
  },60);
}
function renderRitualMatrix(){
  const el = document.getElementById('ritual-matrix-wrap');
  if(!el) return;
  if(!D.ritual_matrix) D.ritual_matrix = JSON.parse(JSON.stringify(D0.ritual_matrix||{}));
  
  const meses = ['Agosto','Setembro','Outubro','Novembro','Dezembro'];
  const rituais = D.rituais && D.rituais.length
    ? D.rituais.map(r=>r.desc||'')
    : ['COMITÊ EXECUTIVO','FÓRUNS TÁTICOS','FÓRUNS DE EXECUÇÃO PMOs','REUNIÃO COM KAMS/DMMs','REUNIÕES COM RMLs'];
  
  const statusCycle = ['—','Agendado','À agendar','Aguardando','Realizada'];
  const statusCls = {'—':'tag-gray','Agendado':'tag-blue','À agendar':'tag-amber','Aguardando':'tag-coral','Realizada':'tag-green'};

  function cellTag(ritual, mes, semIdx){
    if(!D.ritual_matrix[ritual]) D.ritual_matrix[ritual]={};
    if(!D.ritual_matrix[ritual][mes]) D.ritual_matrix[ritual][mes]=['—','—','—','—'];
    const val = D.ritual_matrix[ritual][mes][semIdx]||'—';
    const cls = statusCls[val]||'tag-gray';
    return '<span class="tag '+cls+'" style="cursor:pointer;font-size:.65rem;display:block;text-align:center;margin:1px" '
      +'data-rm-r="'+encodeURIComponent(ritual)+'" data-rm-m="'+mes+'" data-rm-s="'+semIdx+'">'+val+'</span>';
  }

  let html2 = '<div class="tw" style="overflow-x:auto"><table style="min-width:900px;border-collapse:collapse">'
    +'<thead><tr>'
    +'<th style="min-width:160px;text-align:left;padding:8px 12px;position:sticky;left:0;background:var(--navy-l);z-index:2"></th>';
  
  meses.forEach(m=>{
    html2 += '<th colspan="4" style="text-align:center;padding:6px 4px;border-left:1px solid rgba(255,255,255,.06)">'+m.toUpperCase()+'</th>';
  });
  html2 += '</tr>'
    +'<tr><th style="position:sticky;left:0;background:var(--navy-l);z-index:2"></th>';
  meses.forEach(()=>{
    ['S1','S2','S3','S4'].forEach(s=>{
      html2 += '<th style="font-size:.65rem;color:var(--g400);font-weight:400;padding:3px 4px;text-align:center;min-width:62px">'+s+'</th>';
    });
  });
  html2 += '</tr></thead><tbody>';

  rituais.forEach(ritual=>{
    html2 += '<tr><td style="font-weight:700;font-size:.78rem;padding:8px 12px;position:sticky;left:0;background:var(--navy-m);z-index:1;white-space:nowrap">'+ritual+'</td>';
    meses.forEach(mes=>{
      [0,1,2,3].forEach(si=>{
        html2 += '<td style="padding:3px 4px;text-align:center;border-left:'+(si===0?'1px solid rgba(255,255,255,.06)':'none')+'">'+cellTag(ritual,mes,si)+'</td>';
      });
    });
    html2 += '</tr>';
  });
  html2 += '</tbody></table></div>';
  el.innerHTML = html2;

  // Event delegation for cells
  el.onclick = function(e){
    const tag = e.target.closest('[data-rm-r]');
    if(!tag) return;
    const ritual = decodeURIComponent(tag.dataset.rmR);
    const mes = tag.dataset.rmM;
    const si = parseInt(tag.dataset.rmS);
    if(!D.ritual_matrix[ritual]) D.ritual_matrix[ritual]={};
    if(!D.ritual_matrix[ritual][mes]) D.ritual_matrix[ritual][mes]=['—','—','—','—'];
    const cur = D.ritual_matrix[ritual][mes][si]||'—';
    const next = statusCycle[(statusCycle.indexOf(cur)+1)%statusCycle.length];
    D.ritual_matrix[ritual][mes][si] = next;
    const cls = statusCls[next]||'tag-gray';
    tag.className = 'tag '+cls+' '+'';
    tag.className = 'tag '+cls;
    tag.style.cssText = 'cursor:pointer;font-size:.65rem;display:block;text-align:center;margin:1px';
    tag.textContent = next;
    saveD(true);
  };
}


// ── EN/PT TRANSLATION ──
let _isEnglish = false;
let _origContent = null;

async function _toggleTranslate(){
  const btn = document.getElementById('btn-translate');
  if(!_isEnglish){
    // Translate to English
    btn.textContent = '⏳';
    btn.disabled = true;
    try {
      // Collect all visible text content
      const activePage = document.querySelector('.page.active');
      if(!activePage){ btn.textContent='EN'; btn.disabled=false; return; }
      
      // Save original
      _origContent = activePage.innerHTML;
      
      // Get text nodes to translate
      const textEls = activePage.querySelectorAll('[contenteditable], .ptitle, .psub, h2, th, td:not(:has(select)):not(:has(button)):not(:has(span.tag))');
      const texts = Array.from(textEls).map(el => el.textContent.trim()).filter(t => t.length > 2 && t.length < 300 && !/^[0-9%$R—→↑↓✕+]/i.test(t));
      const unique = [...new Set(texts)].slice(0, 60);
      
      if(!unique.length){ btn.textContent='EN'; btn.disabled=false; return; }

      // Tradução usando dicionário local (evita erro de CORS com API direta)
      const translations = {};
      const ptToEn = {
        'Visão Geral':'Overview','Dashboard Executivo':'Executive Dashboard',
        'Acompanhamento KPIs':'KPI Tracking','One page Coops':'One Page Coops',
        'Governança':'Governance','Gestão de Encontros':'Meeting Management',
        'Cooperativas':'Cooperatives','Time Interno':'Internal Team',
        'Mapeamento de Temas':'Theme Mapping','Ritual':'Ritual','Data':'Date',
        'Detalhe':'Detail','Próximos Passos e Responsáveis':'Next Steps & Owners',
        'Relacionamento Coops':'Coops Relationship','Cooperativa':'Cooperative',
        'Diretoria':'Board','Ação':'Action','Responsáveis':'Owners',
        'Relacionamento Atual':'Current Relationship','Plano de Ação':'Action Plan',
        'Status':'Status','Prazo':'Deadline','Fase':'Phase','Objetivo':'Objective',
        'Entregáveis Estratégicos':'Strategic Deliverables','Decisões':'Decisions',
        'Aprendizados':'Learnings','Informações Gerais':'General Information',
        'Público-Alvo':'Target Audience','Local':'Location','Data Prevista':'Expected Date',
        'Objetivo do Encontro':'Meeting Objective','Fases':'Phases','Segm.':'Segm.',
        'KAM / DSM':'KAM / DSM','RSL':'RSL','RML':'RML','Coop':'Coop',
        'Atualizado em':'Updated on','Salvo':'Saved','Exportar':'Export',
        'Importar':'Import','Adicionar':'Add','Excluir':'Delete','Editar':'Edit',
        'Confirmar':'Confirm','Cancelar':'Cancel','Nome':'Name','E-mail':'Email',
        'Telefone':'Phone','Categoria':'Category','Observações':'Notes',
      };
      unique.forEach(t => { if(ptToEn[t]) translations[t] = ptToEn[t]; });

      // Apply translations
      textEls.forEach(el => {
        const orig = el.textContent.trim();
        if(translations[orig]) el.textContent = translations[orig];
      });

      _isEnglish = true;
      btn.textContent = 'PT';
      btn.disabled = false;
      btn.style.color = '#F5A623';
    } catch(e) {
      console.error('Translation error:', e);
      btn.textContent = 'EN';
      btn.disabled = false;
      showToastMsg('❌ Erro na tradução. Tente novamente.');
    }
  } else {
    // Restore Portuguese
    const activePage = document.querySelector('.page.active');
    if(_origContent && activePage){
      activePage.innerHTML = _origContent;
    }
    _isEnglish = false;
    btn.textContent = 'EN';
    btn.style.color = '';
    // Re-bind nav items
    document.querySelectorAll('.ni').forEach(n => {
      n.addEventListener('click', function(){ navigate(this.dataset.page); });
    });
  }
}

