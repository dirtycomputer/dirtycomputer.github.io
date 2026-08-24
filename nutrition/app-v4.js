const ID='1ZLj2A9Nyd2PN_caHuMhPJk1oG0OdT_LXVbPU8K4wKks';
const DEFAULT_TARGETS={kcal:1800,protein:90,carbs:230,fat:60,fiber:25};
const FALLBACK=[
  {date:'2026-08-24',time:'12:25',type:'午餐',food:'寿司与刺身',detail:'按实际食用份量记录',kcal:610,protein:73.5,carbs:19.5,fat:24,fiber:.5},
  {date:'2026-08-24',time:'12:50',type:'加餐',food:'瑞幸标准美式（大杯冰，单份鲜奶）',detail:'不另外加糖',kcal:31,protein:1,carbs:1.5,fat:1,fiber:0}
];

const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
let meals=[], agg={}, selected='', year=2026, month=7, rangeMode='week', targets={...DEFAULT_TARGETS};

function num(v){const x=Number(String(v??'').replace(/,/g,''));return Number.isFinite(x)?x:0}
function iso(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function dateObj(s){return new Date(`${s}T00:00:00`)}
function pretty(s){const d=dateObj(s);return `${d.getMonth()+1}月${d.getDate()}日`}
function weekday(s){return ['周日','周一','周二','周三','周四','周五','周六'][dateObj(s).getDay()]}
function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function parseDate(v){const s=String(v||'');let m=s.match(/Date\((\d+),(\d+),(\d+)\)/);if(m)return `${m[1]}-${String(+m[2]+1).padStart(2,'0')}-${String(m[3]).padStart(2,'0')}`;m=s.match(/(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})/);return m?`${m[1]}-${String(m[2]).padStart(2,'0')}-${String(m[3]).padStart(2,'0')}`:''}
function parseGviz(text){return JSON.parse(text.slice(text.indexOf('{'),text.lastIndexOf('}')+1))}

async function fetchSheet(name){
  const url=`https://docs.google.com/spreadsheets/d/${ID}/gviz/tq?sheet=${encodeURIComponent(name)}&tqx=out:json&headers=1&_=${Date.now()}`;
  const r=await fetch(url,{cache:'no-store'}); if(!r.ok)throw new Error(`Sheet ${r.status}`);
  const j=parseGviz(await r.text()), headers=j.table.cols.map(c=>c.label||'');
  return (j.table.rows||[]).map(row=>Object.fromEntries(headers.map((h,i)=>{const c=row.c?.[i];return [h,c?(c.f??c.v??''): '']})));
}

function normalize(rows){return rows.map(r=>({
  date:parseDate(r['日期']), time:String(r['时间']||''), type:String(r['餐次']||'未分类'),
  food:String(r['食物 / 菜品']||''), detail:String(r['份量与主要成分']||''),
  kcal:num(r['热量 (kcal)']), protein:num(r['蛋白质 (g)']), carbs:num(r['碳水 (g)']), fat:num(r['脂肪 (g)']), fiber:num(r['膳食纤维 (g)']),
  photo:String(r['图片URL']||''), note:String(r['备注']||'')
})).filter(x=>x.date)}

function parseTargets(rows){
  const map={}; rows.forEach(r=>{map[String(r['指标']||'').trim()]=num(r['目标值'])});
  return {
    kcal:map['每日热量目标']||DEFAULT_TARGETS.kcal,
    protein:map['每日蛋白质目标']||DEFAULT_TARGETS.protein,
    carbs:map['每日碳水目标']||DEFAULT_TARGETS.carbs,
    fat:map['每日脂肪目标']||DEFAULT_TARGETS.fat,
    fiber:map['每日膳食纤维目标']||DEFAULT_TARGETS.fiber
  };
}

function buildAgg(){
  agg={};
  for(const x of meals){
    const a=agg[x.date]??={date:x.date,kcal:0,protein:0,carbs:0,fat:0,fiber:0,meals:[]};
    for(const k of ['kcal','protein','carbs','fat','fiber'])a[k]+=x[k];
    a.meals.push(x);
  }
  Object.values(agg).forEach(a=>a.meals.sort((p,q)=>(p.time||'99:99').localeCompare(q.time||'99:99')));
}
function latest(){return Object.keys(agg).sort().at(-1)||''}
function pct(v,t){return t>0?Math.round(v/t*100):0}
function clampPct(v,t){return Math.max(0,Math.min(100,t>0?v/t*100:0))}
function status(k,v,t){
  const p=pct(v,t);
  if(k==='fiber') return p<70?['low','不足']:p>150?['high','偏高']:['good','合适'];
  if(k==='kcal') return p<70?['low','偏低']:p>115?['high','超出']:['good','目标区间'];
  return p<60?['low','偏低']:p>120?['high','偏高']:['good','目标区间'];
}
function cssColor(st){return st==='good'?'var(--g)':st==='high'?'var(--r)':'var(--y)'}
function fmt(v,d=1){return (Math.round(v*10**d)/10**d).toString()}

function nutrientDefs(a){return [
  {label:'热量',key:'kcal',value:a?.kcal||0,target:targets.kcal,unit:'kcal',hint:'每日总能量'},
  {label:'蛋白质',key:'protein',value:a?.protein||0,target:targets.protein,unit:'g',hint:'维持肌肉与饱腹感'},
  {label:'碳水化合物',key:'carbs',value:a?.carbs||0,target:targets.carbs,unit:'g',hint:'主要供能营养素'},
  {label:'脂肪',key:'fat',value:a?.fat||0,target:targets.fat,unit:'g',hint:'必需脂肪酸与脂溶性维生素'},
  {label:'膳食纤维',key:'fiber',value:a?.fiber||0,target:targets.fiber,unit:'g',hint:'蔬果、全谷物与豆类来源'}
]}

function setSelected(s,scroll=false){selected=s;const d=dateObj(s);year=d.getFullYear();month=d.getMonth();renderAll();if(scroll)setTimeout(()=>$('#dayPanel')?.scrollIntoView({behavior:'smooth',block:'start'}),50)}

function renderCalendar(){
  $('#year').textContent=year; $('#month').textContent=`${month+1}月`; $('#grid').innerHTML='';
  const first=new Date(year,month,1), start=(first.getDay()+6)%7, days=new Date(year,month+1,0).getDate(), prevDays=new Date(year,month,0).getDate(), cells=[];
  for(let i=0;i<start;i++)cells.push(new Date(year,month-1,prevDays-start+i+1));
  for(let d=1;d<=days;d++)cells.push(new Date(year,month,d));
  while(cells.length%7||cells.length<35)cells.push(new Date(year,month+1,cells.length-start-days+1));
  const today=iso(new Date());
  for(const d of cells){
    const s=iso(d), a=agg[s], inside=d.getMonth()===month, types=new Set((a?.meals||[]).map(x=>x.type));
    const e=document.createElement('button');e.type='button';e.className='day'+(inside?'':' out')+(s===selected?' sel':'')+(s===today?' today':'');
    const marks=['早餐','午餐','晚餐','加餐'].map(t=>`<span class="mk ${types.has(t)?'on':''}">${t[0]}</span>`).join('');
    e.innerHTML=`<div class="dn">${d.getDate()}</div>${a?`<div class="kc">${Math.round(a.kcal)} kcal</div>`:'<div class="kc ghost">—</div>'}<div class="marks">${marks}</div>`;
    e.addEventListener('click',()=>setSelected(s,true)); $('#grid').appendChild(e);
  }
  const list=Object.values(agg).filter(a=>{const d=dateObj(a.date);return d.getFullYear()===year&&d.getMonth()===month});
  const total=list.reduce((z,a)=>z+a.kcal,0), count=list.reduce((z,a)=>z+a.meals.length,0);
  $('#monthStats').innerHTML=[['记录日',list.length],['总摄入',Math.round(total)],['日均',list.length?Math.round(total/list.length):0],['餐次',count]].map(x=>`<div class="chip"><small>${x[0]}</small><b>${x[1]}</b></div>`).join('');
}

function progressRows(a){
  return nutrientDefs(a).map(n=>{
    const st=status(n.key,n.value,n.target), p=pct(n.value,n.target), width=clampPct(n.value,n.target);
    return `<div class="nrow ${st[0]}">
      <div class="nhead"><div><b>${n.label}</b><small>${n.hint}</small></div><span class="nstatus">${st[1]}</span></div>
      <div class="nnums"><strong>${fmt(n.value,n.key==='kcal'?0:1)} ${n.unit}</strong><span>建议 ${fmt(n.target,n.key==='kcal'?0:0)} ${n.unit}</span><em>${p}%</em></div>
      <div class="track" role="progressbar" aria-label="${n.label}" aria-valuemin="0" aria-valuemax="${n.target}" aria-valuenow="${fmt(n.value,1)}"><span style="width:${width}%;background:${cssColor(st[0])}"></span></div>
    </div>`;
  }).join('');
}

function mealCard(x){
  return `<article class="meal"><div class="row"><div><h3>${esc(x.food||'未命名餐食')}</h3>${x.time?`<div class="detail">${esc(x.time)}</div>`:''}</div><b>${Math.round(x.kcal)} kcal</b></div>
    <div class="detail">${esc(x.detail||'未填写份量')}</div>
    <div class="mac"><span>蛋白质 ${fmt(x.protein)}g</span><span>碳水 ${fmt(x.carbs)}g</span><span>脂肪 ${fmt(x.fat)}g</span><span>纤维 ${fmt(x.fiber)}g</span></div>
    ${x.photo?`<div class="photo"><img loading="lazy" src="${esc(x.photo)}" alt="${esc(x.food)}"><div class="pf">图片暂时无法显示</div></div>`:''}
  </article>`;
}

function renderDay(){
  const a=agg[selected], v=a?.kcal||0, p=pct(v,targets.kcal), st=status('kcal',v,targets.kcal);
  $('#dateTitle').textContent=pretty(selected); $('#dateSub').textContent=`${weekday(selected)} · ${a?a.meals.length:0} 条记录`; $('#kcal').innerHTML=`${Math.round(v)} <small>kcal</small>`;
  $('#ring').style.setProperty('--deg',`${Math.min(100,p)*3.6}deg`); $('#ring').style.setProperty('--rc',cssColor(st[0])); $('#ringPct').textContent=`${p}%`;
  $('#goalHead').textContent=`每日参考目标 ${targets.kcal} kcal`; $('#goalText').textContent=a?(v<=targets.kcal?`已摄入 ${Math.round(v)} kcal，距离参考目标约 ${Math.round(targets.kcal-v)} kcal。`:`已摄入 ${Math.round(v)} kcal，超过参考目标约 ${Math.round(v-targets.kcal)} kcal。`):'这一天还没有饮食记录。';
  $('#goalBadge').className=`badge ${a?st[0]:''}`; $('#goalBadge').textContent=a?st[1]:'尚未记录';
  $('#dayMacros').innerHTML=''; $('#nutrientProgress').innerHTML=progressRows(a);
  $('#targetNote').textContent=`当前参考：${targets.kcal} kcal · 蛋白质 ${targets.protein}g · 碳水 ${targets.carbs}g · 脂肪 ${targets.fat}g · 膳食纤维 ${targets.fiber}g。可在 Google Sheet「设置」中修改。`;

  const fixed=['早餐','午餐','晚餐','加餐'], other=a?[...new Set(a.meals.map(x=>x.type).filter(t=>!fixed.includes(t)))]:[], types=[...fixed,...other];
  $('#mealSlots').innerHTML=types.map(t=>{const xs=a?a.meals.filter(x=>x.type===t):[], sub=xs.reduce((z,x)=>z+x.kcal,0);return `<section class="slot ${xs.length?'':'empty'}"><div class="row slothead"><div class="slotleft"><span class="tag">${esc(t)}</span><div><div class="slottitle">${esc(t)}</div><div class="slotsub">${xs.length} 条记录</div></div></div><div class="subtotal">${Math.round(sub)} kcal</div></div>${xs.length?xs.map(mealCard).join(''):`<div class="emptycopy">这一天的${esc(t)}尚未记录。</div>`}</section>`}).join('');
  document.querySelectorAll('.photo img').forEach(img=>img.addEventListener('error',()=>img.parentElement.classList.add('bad'),{once:true}));
}

function streakCalc(){const ds=Object.keys(agg).sort();if(!ds.length)return[0,0];let longest=1,run=1;for(let i=1;i<ds.length;i++){const diff=Math.round((dateObj(ds[i])-dateObj(ds[i-1]))/86400000);run=diff===1?run+1:1;longest=Math.max(longest,run)}const set=new Set(ds),d=dateObj(ds.at(-1));let cur=1;while(true){d.setDate(d.getDate()-1);if(set.has(iso(d)))cur++;else break}return[cur,longest]}
function rangeBounds(){const b=dateObj(selected||latest()||iso(new Date()));if(rangeMode==='month')return [new Date(b.getFullYear(),b.getMonth(),1),new Date(b.getFullYear(),b.getMonth()+1,0)];const dow=(b.getDay()+6)%7,s=new Date(b);s.setDate(b.getDate()-dow);const e=new Date(s);e.setDate(s.getDate()+6);return [s,e]}
function rangeData(){const [s,e]=rangeBounds(),out=[];for(let d=new Date(s);d<=e;d.setDate(d.getDate()+1)){const x=iso(d);out.push({date:x,info:agg[x]||null})}return out}
function classify(m){const t=(m.food+' '+m.detail).toLowerCase();if(/桃|苹果|香蕉|橙|柑|梨|葡萄|莓|水果/.test(t))return '水果';if(/生菜|白菜|青菜|菠菜|蔬菜|花菜|菜花|豆芽|番茄|西红柿|菌|蘑菇|海带|黄瓜/.test(t))return '蔬菜';if(/水饺|饺|米|饭|面|面包|汉堡|玉米|谷|麦|燕麦|土豆|薯|馒头|粥/.test(t))return '谷薯主食';if(/牛|鱼|鸡|肉|虾|蛋|豆腐|豆|奶|酸奶|芝士|羊|猪|刺身|寿司/.test(t))return '蛋白质来源';if(/油|芝麻|花生|酱|沙拉酱|黄油/.test(t))return '油脂及调味';return '其他'}

function renderStats(){
  const a=agg[selected]||agg[latest()], arr=rangeData(), [s,e]=rangeBounds(); let sum={kcal:0,days:0,meals:0};arr.forEach(x=>{if(x.info){sum.days++;sum.meals+=x.info.meals.length;sum.kcal+=x.info.kcal}});
  const [cur,long]=streakCalc(); $('#streak').textContent=`连续 ${cur} 天 · 最长 ${long} 天`;
  $('#rangeStats').innerHTML=[['区间',rangeMode==='week'?`${s.getMonth()+1}/${s.getDate()}–${e.getMonth()+1}/${e.getDate()}`:`${s.getFullYear()}年${s.getMonth()+1}月`,''],['记录天数',sum.days,'天'],['日均热量',sum.days?Math.round(sum.kcal/sum.days):0,'kcal'],['记录餐次',sum.meals,'餐']].map(x=>`<div class="card rstat"><small>${x[0]}</small><b>${x[1]}</b><span>${x[2]}</span></div>`).join('');
  if(!a){$('#kpis').innerHTML='';return}
  const defs=nutrientDefs(a); $('#kpis').innerHTML=defs.slice(0,4).map(n=>{const st=status(n.key,n.value,n.target);return `<div class="card kpi ${st[0]}"><small>${n.label}</small><b>${fmt(n.value)} <span>${n.unit}</span></b><em>${pct(n.value,n.target)}% · ${st[1]}</em></div>`}).join('');
  $('#warns').innerHTML=defs.map(n=>{const st=status(n.key,n.value,n.target);return `<div class="warn ${st[0]}"><b>${n.label}</b><span>${fmt(n.value)} / ${fmt(n.target,0)} ${n.unit}</span><i>${st[1]}</i></div>`}).join('');

  const levels=[['总能量','kcal',a.kcal,targets.kcal,'kcal'],['碳水化合物','carbs',a.carbs,targets.carbs,'g'],['蛋白质','protein',a.protein,targets.protein,'g'],['脂肪','fat',a.fat,targets.fat,'g'],['膳食纤维','fiber',a.fiber,targets.fiber,'g']];
  $('#pyramid').innerHTML=levels.map((x,i)=>{const st=status(x[1],x[2],x[3]),p=Math.min(100,pct(x[2],x[3]));return `<div class="tier t${i+1} ${st[0]}" style="--p:${p}%"><div><b>${x[0]}</b><small>建议 ${x[3]} ${x[4]}</small></div><strong>${fmt(x[2])}<small>${x[4]} · ${pct(x[2],x[3])}%</small></strong></div>`}).join('');

  const cats={};a.meals.forEach(m=>{const c=classify(m);cats[c]=(cats[c]||0)+m.kcal});const catTotal=Object.values(cats).reduce((z,v)=>z+v,0)||1;$('#catlist').innerHTML=Object.entries(cats).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`<div class="cat"><div class="row"><b>${k}</b><span>${Math.round(v)} kcal · ${Math.round(v/catTotal*100)}%</span></div><div class="catbar"><span style="width:${Math.min(100,v/catTotal*100)}%"></span></div></div>`).join('')||'<div class="emptycopy">暂无分类数据</div>';

  const max=Math.max(1,...arr.map(x=>x.info?.kcal||0)); $('#bars').innerHTML=arr.map(x=>{const v=x.info?.kcal||0,d=dateObj(x.date);return `<div class="bcol"><div class="btrack"><span style="height:${Math.max(v?5:0,v/max*100)}%"></span></div><b>${Math.round(v)}</b><small>${d.getMonth()+1}/${d.getDate()}</small></div>`}).join(''); $('#trendSub').textContent=rangeMode==='week'?'所选日期所在周':'所选日期所在月';
}

function renderAll(){renderCalendar();renderDay();renderStats()}

async function load(){
  $('#sync').textContent='同步中…'; $('#sync').className='sync';
  try{
    const [foodRows,settingRows]=await Promise.all([fetchSheet('饮食记录'),fetchSheet('设置').catch(()=>[])]);
    meals=normalize(foodRows); targets=settingRows.length?parseTargets(settingRows):{...DEFAULT_TARGETS}; buildAgg();
    const l=latest(); if(!selected&&l){selected=l;const d=dateObj(l);year=d.getFullYear();month=d.getMonth()}
    $('#sync').textContent='已同步'; $('#sync').className='sync ok'; $('#hint').textContent=`Google Sheet 实时数据 · ${new Date().toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'})}`;
  }catch(e){
    meals=FALLBACK;targets={...DEFAULT_TARGETS};buildAgg();const l=latest();if(!selected&&l){selected=l;const d=dateObj(l);year=d.getFullYear();month=d.getMonth()}
    $('#sync').textContent='离线数据';$('#sync').className='sync warn';$('#hint').textContent='Google Sheet 暂时无法读取，已显示最近缓存数据';console.error(e);
  }
  renderAll();
}

$$('.seg button').forEach(b=>b.addEventListener('click',()=>{$$('.seg button').forEach(x=>x.classList.remove('on'));b.classList.add('on');$$('.view').forEach(v=>v.classList.remove('on'));$('#'+b.dataset.v).classList.add('on')}));
$$('.ranges button').forEach(b=>b.addEventListener('click',()=>{$$('.ranges button').forEach(x=>x.classList.remove('on'));b.classList.add('on');rangeMode=b.dataset.r;renderStats()}));
$('#prev').addEventListener('click',()=>{month--;if(month<0){month=11;year--}renderCalendar()});
$('#next').addEventListener('click',()=>{month++;if(month>11){month=0;year++}renderCalendar()});
$('#refresh').addEventListener('click',load);
load(); setInterval(load,5*60*1000);