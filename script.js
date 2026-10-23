const sections = ["inicio","doacao","consumo","alimentacao","casa","reutilizacao","compras","economia","habitos","historia"];
const labels = {
  inicio:"Início", doacao:"Doação", consumo:"Consumo", alimentacao:"Alimentação",
  casa:"Casa", reutilizacao:"Reutilização", compras:"Compras", economia:"Economia",
  habitos:"Hábitos", historia:"Nossa História"
};
const nav = document.getElementById('nav');
sections.forEach(id=>{
  const b=document.createElement('button');
  b.textContent=labels[id]; b.dataset.target=id;
  b.onclick=()=>go(id);
  nav.appendChild(b);
});
// cada aba tem seu endereço (#/doacao, #/consumo...): recarregar mantém a aba e voltar/avançar funcionam.
// a "/" evita que o navegador role até a seção de mesmo id, que ficaria sob o cabeçalho fixo
function go(id){
  if(tabFromHash()===id) show(id); else location.hash='/'+id;
}
function tabFromHash(){
  const id=decodeURIComponent(location.hash.replace(/^#\/?/,''));
  return sections.includes(id) ? id : null; // ignora #mainContent do "Pular para o conteúdo"
}
window.addEventListener('hashchange', ()=>{ const id=tabFromHash(); if(id) show(id); });
function show(id){
  sections.forEach(s=>document.getElementById(s).classList.toggle('active', s===id));
  [...nav.children].forEach(b=>{
    const active=b.dataset.target===id;
    b.classList.toggle('active', active);
    if(active) b.setAttribute('aria-current','page'); else b.removeAttribute('aria-current');
  });
  document.getElementById('mainContent').focus({preventScroll:true});
  window.scrollTo({top:0,behavior:'smooth'});
}
show(tabFromHash() || 'inicio');

// links internos estilo texto (ex: "Doe na aba Doação")
document.querySelectorAll('[data-goto]').forEach(el=>{
  el.addEventListener('click', ()=> go(el.dataset.goto));
});

// shortcuts on home
const shortcuts = document.getElementById('shortcuts');
sections.filter(s=>s!=='inicio').forEach(id=>{
  const b=document.createElement('button');
  b.textContent=labels[id];
  b.onclick=()=>go(id);
  shortcuts.appendChild(b);
});

// tema: respeita preferência salva ou do sistema operacional
const themeBtn=document.getElementById('themeToggle');
const THEME_KEY='compartilha-theme';
function applyTheme(mode){
  document.documentElement.setAttribute('data-theme', mode);
  themeBtn.textContent = mode==='dark' ? '☀️ Claro' : '🌙 Escuro';
}
(function initTheme(){
  const saved=localStorage.getItem(THEME_KEY);
  if(saved){ applyTheme(saved); return; }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
})();
themeBtn.onclick=()=>{
  const current=document.documentElement.getAttribute('data-theme');
  const next = current==='dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
};

// tamanho do texto: acessibilidade para todos os públicos
const FONT_KEY='compartilha-fontsize';
const MIN_FONT=14, MAX_FONT=22, DEFAULT_FONT=16;
function applyFontSize(px){
  document.documentElement.style.fontSize = px+'px';
  localStorage.setItem(FONT_KEY, px);
}
(function initFontSize(){
  const saved=parseInt(localStorage.getItem(FONT_KEY),10);
  applyFontSize(saved && saved>=MIN_FONT && saved<=MAX_FONT ? saved : DEFAULT_FONT);
})();
document.getElementById('fontUp').onclick=()=>{
  const cur=parseInt(document.documentElement.style.fontSize,10)||DEFAULT_FONT;
  applyFontSize(Math.min(MAX_FONT, cur+2));
};
document.getElementById('fontDown').onclick=()=>{
  const cur=parseInt(document.documentElement.style.fontSize,10)||DEFAULT_FONT;
  applyFontSize(Math.max(MIN_FONT, cur-2));
};
document.getElementById('fontReset').onclick=()=> applyFontSize(DEFAULT_FONT);

// quiz necessidade/desejo
const quizItems=[["Comida da semana","necessidade"],["Novo celular top de linha","desejo"],["Remédio prescrito","necessidade"],["Roupa de marca só por status","desejo"]];
const quizEl=document.getElementById('quizConsumo');
quizItems.forEach(([item,correct])=>{
  const wrap=document.createElement('div'); wrap.style.marginTop='12px';
  wrap.innerHTML=`<strong style="font-size:.9rem">${item}</strong>`;
  const opts=document.createElement('div'); opts.className='quiz-opt';
  const fb=document.createElement('div'); fb.className='feedback'; fb.setAttribute('role','status'); fb.setAttribute('aria-live','polite');
  ['necessidade','desejo'].forEach(opt=>{
    const btn=document.createElement('button');
    btn.textContent=opt;
    btn.onclick=()=>{
      [...opts.children].forEach(c=>c.classList.remove('picked'));
      btn.classList.add('picked');
      fb.textContent = opt===correct ? '✅ Boa! É isso mesmo.' : `Pense de novo — a maioria classificaria como "${correct}".`;
      fb.classList.add('show');
    };
    opts.appendChild(btn);
  });
  wrap.appendChild(opts); wrap.appendChild(fb);
  quizEl.appendChild(wrap);
});

// checklists com barra de progresso
function wireChecklist(cardSelector, fillId){
  const card=document.querySelector(cardSelector);
  const boxes=[...card.querySelectorAll('input[type=checkbox]')];
  const fill=document.getElementById(fillId);
  function update(){
    const done=boxes.filter(b=>b.checked).length;
    fill.style.width = Math.round(done/boxes.length*100)+'%';
  }
  boxes.forEach(b=>b.onchange=update);
}
wireChecklist('#alimentacao .checklist','fillAlimentacao');
wireChecklist('#economia .checklist','fillEconomia');

// desafio de 7 dias
const challenge7=document.getElementById('challenge7');
for(let i=1;i<=7;i++){
  const b=document.createElement('button');
  b.textContent='Dia '+i;
  b.type='button';
  b.setAttribute('aria-pressed','false');
  b.style.cssText='border:1px solid var(--border);background:var(--surface);border-radius:10px;padding:10px 8px;cursor:pointer;font-weight:600;color:var(--text)';
  b.onclick=()=>{
    const on = b.getAttribute('aria-pressed')==='false';
    b.setAttribute('aria-pressed', on ? 'true':'false');
    if(on){b.style.background='var(--green)';b.style.color='#fff';b.style.borderColor='var(--green)';}
    else{b.style.background='var(--surface)';b.style.color='var(--text)';b.style.borderColor='var(--border)';}
  };
  challenge7.appendChild(b);
}

// tabs doador/receptor
const foodTabs=document.getElementById('foodTabs');
const painelDoador=document.getElementById('painelDoador');
const painelReceptor=document.getElementById('painelReceptor');
foodTabs.querySelectorAll('.tabbtn').forEach(btn=>{
  btn.onclick=()=>{
    foodTabs.querySelectorAll('.tabbtn').forEach(b=>{ b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
    btn.classList.add('active'); btn.setAttribute('aria-pressed','true');
    const isDoador = btn.dataset.tab==='doador';
    painelDoador.style.display = isDoador ? '' : 'none';
    painelReceptor.style.display = isDoador ? 'none' : '';
    if(!isDoador) renderItems();
  };
});

// itens disponíveis (dados de exemplo + itens cadastrados na sessão)
let items=[
  {nome:"Arroz 5kg", categoria:"Grãos e cereais", qtd:2, validade:addDays(10), local:"Galeria Pagé — das 10h às 18h", solicitado:false},
  {nome:"Feijão 1kg", categoria:"Grãos e cereais", qtd:4, validade:addDays(20), local:"Rua Augusta, 500 — das 9h às 12h", solicitado:false},
  {nome:"Cesta de frutas", categoria:"Frutas e verduras", qtd:1, validade:addDays(3), local:"Mercado Central — das 8h às 11h", solicitado:false},
  {nome:"Leite integral 1L (x6)", categoria:"Laticínios", qtd:6, validade:addDays(7), local:"Padaria Bom Pão — das 7h às 20h", solicitado:false}
];
// data local em AAAA-MM-DD (toISOString usaria UTC e adiantaria um dia à noite no Brasil)
function toISODate(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function addDays(n){const d=new Date(); d.setDate(d.getDate()+n); return toISODate(d);}
function fmtDate(iso){const [y,m,d]=iso.split('-'); return `${d}/${m}/${y}`;}

const itemList=document.getElementById('itemList');
const itemListEmpty=document.getElementById('itemListEmpty');
const rBusca=document.getElementById('r_busca');
const rCat=document.getElementById('r_filtroCategoria');
rBusca.oninput=renderItems; rCat.onchange=renderItems;

function renderItems(){
  const termo=rBusca.value.trim().toLowerCase();
  const cat=rCat.value;
  const hoje=toISODate(new Date());
  // itens vencidos saem da lista
  const filtrados=items.filter(it=> it.validade>=hoje && it.nome.toLowerCase().includes(termo) && (cat==='' || it.categoria===cat));
  itemList.innerHTML='';
  itemListEmpty.style.display = filtrados.length ? 'none' : 'block';
  filtrados.forEach(it=>{
    // textContent em vez de innerHTML: o que o doador digita nunca vira HTML
    const card=document.createElement('div'); card.className='item-card';
    const info=document.createElement('div'); info.className='info';
    const titulo=document.createElement('h4'); titulo.textContent=it.nome;
    const local=document.createElement('p'); local.textContent=it.local;
    const meta=document.createElement('div'); meta.className='meta';
    [it.categoria, 'Qtd: '+it.qtd, 'Validade: '+fmtDate(it.validade)].forEach(txt=>{
      const s=document.createElement('span'); s.textContent=txt; meta.appendChild(s);
    });
    info.append(titulo, local, meta);
    const btn=document.createElement('button');
    btn.disabled=it.solicitado;
    btn.textContent=it.solicitado?'✅ Solicitado':'Solicitar';
    btn.onclick=()=>{ it.solicitado=true; renderItems(); };
    card.append(info, btn);
    itemList.appendChild(card);
  });
}

// validação do formulário de doação
const donateForm=document.getElementById('donateForm');
donateForm.addEventListener('submit', function(e){
  e.preventDefault();
  let ok=true, primeiroInvalido=null;
  function setErr(id, errId, cond){
    const field=document.getElementById(id), err=document.getElementById(errId);
    if(cond){
      field.classList.add('invalid'); field.setAttribute('aria-invalid','true'); err.classList.add('show'); ok=false;
      if(!primeiroInvalido) primeiroInvalido=field;
    }
    else{ field.classList.remove('invalid'); field.removeAttribute('aria-invalid'); err.classList.remove('show'); }
  }
  const nome=document.getElementById('d_nome').value.trim();
  const cat=document.getElementById('d_categoria').value;
  const qtd=document.getElementById('d_qtd').value;
  const val=document.getElementById('d_validade').value;
  const valor=document.getElementById('d_valor').value;
  const local=document.getElementById('d_local').value.trim();

  setErr('d_nome','err_nome', nome==='');
  setErr('d_categoria','err_categoria', cat==='');
  setErr('d_qtd','err_qtd', qtd==='' || !Number.isInteger(Number(qtd)) || Number(qtd)<=0);
  const today=new Date(); today.setHours(0,0,0,0);
  setErr('d_validade','err_validade', val==='' || new Date(val+'T00:00:00')<today);
  setErr('d_valor','err_valor', valor==='' || isNaN(valor) || Number(valor)<0);
  setErr('d_local','err_local', local==='');

  const banner=document.getElementById('donateSuccess');
  if(ok){
    items.unshift({nome, categoria:cat, qtd:Number(qtd), validade:val, local, solicitado:false});
    banner.classList.add('show');
    donateForm.reset();
    setTimeout(()=>banner.classList.remove('show'), 4000);
  } else {
    banner.classList.remove('show');
    primeiroInvalido.focus();
  }
});

// hábitos
const habits=["Fazer lista antes de ir ao mercado","Preferir produtos locais e da estação","Levar sacola reutilizável",
"Consertar antes de descartar","Doar o que não usa mais","Evitar compras por impulso","Planejar refeições da semana",
"Reduzir uso de descartáveis","Pesquisar antes de comprar","Compartilhar/emprestar itens de uso raro"];
const habitList=document.getElementById('habitList');
const encourage=document.getElementById('habitEncourage');
habits.forEach(h=>{
  const row=document.createElement('div'); row.className='habit-item';
  row.innerHTML=`<span>${h}</span>`;
  const btn=document.createElement('button'); btn.textContent='Priorizar'; btn.type='button';
  btn.onclick=()=>{
    [...habitList.children].forEach(r=>r.classList.remove('selected'));
    row.classList.add('selected');
    encourage.textContent=`💪 Ótima escolha! Comece pequeno: tente aplicar "${h.toLowerCase()}" nesta semana e observe a diferença.`;
    encourage.classList.add('show');
  };
  row.appendChild(btn);
  habitList.appendChild(row);
});
