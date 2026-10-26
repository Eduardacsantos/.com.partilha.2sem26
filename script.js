// Este arquivo é carregado no <head>. A primeira parte roda na hora, antes de a página
// aparecer (tema e tamanho do texto, para não "piscar"); o resto espera o HTML carregar.

const THEME_KEY='compartilha-theme';
const FONT_KEY='compartilha-fontsize';
const MIN_FONT=14, MAX_FONT=22, DEFAULT_FONT=16;

// tema: respeita preferência salva ou do sistema operacional
(function initTheme(){
  let saved=null;
  try{ saved=localStorage.getItem(THEME_KEY); }catch(e){}
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
})();

// tamanho do texto: acessibilidade para todos os públicos
function applyFontSize(px){
  document.documentElement.style.fontSize = px+'px';
  try{ localStorage.setItem(FONT_KEY, px); }catch(e){}
}
(function initFontSize(){
  let saved=NaN;
  try{ saved=parseInt(localStorage.getItem(FONT_KEY),10); }catch(e){}
  applyFontSize(saved && saved>=MIN_FONT && saved<=MAX_FONT ? saved : DEFAULT_FONT);
})();

const sections=["inicio","doacao","aprenda","consumo","alimentacao","casa","reutilizacao","compras","economia","habitos","historia"];
// temas da área "Aprenda", na ordem do botão "Próximo"
const topics=["consumo","alimentacao","casa","reutilizacao","compras","economia","habitos"];
const navItems=["inicio","doacao","aprenda","historia"];
const labels={
  inicio:"Início", doacao:"Doar e receber", aprenda:"Aprenda", consumo:"Consumo", alimentacao:"Alimentação",
  casa:"Casa", reutilizacao:"Reutilização", compras:"Compras", economia:"Economia",
  habitos:"Hábitos", historia:"Sobre nós"
};

// data local em AAAA-MM-DD (toISOString usaria UTC e adiantaria um dia à noite no Brasil)
function toISODate(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function addDays(n){const d=new Date(); d.setDate(d.getDate()+n); return toISODate(d);}
function fmtDate(iso){const [y,m,d]=iso.split('-'); return `${d}/${m}/${y}`;}
function fmtMoeda(v){return v.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0});}

// itens disponíveis (dados de exemplo + itens cadastrados na sessão)
let items=[
  {nome:"Arroz 5kg", categoria:"Grãos e cereais", qtd:2, validade:addDays(10), valor:56, local:"Galeria Pagé — das 10h às 18h", solicitado:false},
  {nome:"Feijão 1kg", categoria:"Grãos e cereais", qtd:4, validade:addDays(20), valor:36, local:"Rua Augusta, 500 — das 9h às 12h", solicitado:false},
  {nome:"Cesta de frutas", categoria:"Frutas e verduras", qtd:1, validade:addDays(3), valor:25, local:"Mercado Central — das 8h às 11h", solicitado:false},
  {nome:"Leite integral 1L (x6)", categoria:"Laticínios", qtd:6, validade:addDays(7), valor:30, local:"Padaria Bom Pão — das 7h às 20h", solicitado:false}
];

// ícone do sprite SVG do index.html
function icon(nome){
  const NS='http://www.w3.org/2000/svg';
  const svg=document.createElementNS(NS,'svg'); svg.setAttribute('class','icon'); svg.setAttribute('aria-hidden','true');
  const use=document.createElementNS(NS,'use'); use.setAttribute('href','#'+nome);
  svg.appendChild(use);
  return svg;
}

if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();

function iniciar(){
  // navegação principal
  const nav=document.getElementById('nav');
  navItems.forEach(id=>{
    const a=document.createElement('a');
    a.href='#/'+id; a.textContent=labels[id]; a.dataset.target=id;
    nav.appendChild(a);
  });
  function show(id){
    sections.forEach(s=>document.getElementById(s).classList.toggle('active', s===id));
    const atual = topics.includes(id) ? 'aprenda' : id; // os temas ficam dentro de "Aprenda"
    [...nav.children].forEach(a=>{
      if(a.dataset.target===atual) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
    });
    document.getElementById('mainContent').focus({preventScroll:true});
    window.scrollTo({top:0,behavior:'smooth'});
  }
  // cada aba tem seu endereço (#/doacao, #/consumo...): recarregar mantém a aba e voltar/avançar funcionam.
  // a "/" evita que o navegador role até a seção de mesmo id, que ficaria sob o cabeçalho fixo
  function go(id){
    if(tabFromHash()===id) show(id); else location.hash='/'+id;
  }
  function tabFromHash(){
    const id=decodeURIComponent(location.hash.replace(/^#\/?/,''));
    return sections.includes(id) ? id : null; // ignora #mainContent do "Pular para o conteúdo"
  }
  // endereço sem "#" (ex: voltar até a primeira página aberta) é a Início
  window.addEventListener('hashchange', ()=>{ const id = location.hash==='' ? 'inicio' : tabFromHash(); if(id) show(id); });
  // cada aba abre no topo: o navegador não deve restaurar a rolagem de outra aba ao recarregar
  if('scrollRestoration' in history) history.scrollRestoration='manual';
  show(tabFromHash() || 'inicio');

  // botões que levam a uma aba (ex: "Quero doar", cartões do Aprenda); data-tab abre Doador ou Receba a doação
  document.querySelectorAll('[data-goto]').forEach(el=>{
    el.addEventListener('click', ()=>{
      go(el.dataset.goto);
      if(el.dataset.tab) abrirPainel(el.dataset.tab);
    });
  });

  // no fim de cada tema: voltar para "Aprenda" e ir para o próximo
  topics.forEach((id,i)=>{
    const barra=document.createElement('div'); barra.className='topic-nav';
    barra.appendChild(botaoTema('aprenda','Todos os temas','i-arrow-left',true));
    const prox=topics[i+1];
    if(prox) barra.appendChild(botaoTema(prox,'Próximo: '+labels[prox],'i-arrow-right',false));
    document.getElementById(id).appendChild(barra);
  });
  function botaoTema(destino, texto, nomeIcone, iconeAntes){
    const b=document.createElement('button'); b.type='button';
    const span=document.createElement('span'); span.textContent=texto;
    if(iconeAntes) b.append(icon(nomeIcone), span); else b.append(span, icon(nomeIcone));
    b.onclick=()=>go(destino);
    return b;
  }

  // botão de tema
  const themeBtn=document.getElementById('themeToggle');
  function applyTheme(mode){
    document.documentElement.setAttribute('data-theme', mode);
    const escuro = mode==='dark';
    const rotulo=document.createElement('span'); rotulo.className='theme-label'; rotulo.textContent = escuro ? 'Claro' : 'Escuro';
    themeBtn.replaceChildren(icon(escuro ? 'i-sun' : 'i-moon'), rotulo);
    themeBtn.setAttribute('aria-label', escuro ? 'Mudar para o tema claro' : 'Mudar para o tema escuro');
  }
  applyTheme(document.documentElement.getAttribute('data-theme'));
  themeBtn.onclick=()=>{
    const next = document.documentElement.getAttribute('data-theme')==='dark' ? 'light' : 'dark';
    applyTheme(next);
    try{ localStorage.setItem(THEME_KEY, next); }catch(e){}
  };

  // botões de tamanho do texto
  document.getElementById('fontUp').onclick=()=>{
    const cur=parseInt(document.documentElement.style.fontSize,10)||DEFAULT_FONT;
    applyFontSize(Math.min(MAX_FONT, cur+2));
  };
  document.getElementById('fontDown').onclick=()=>{
    const cur=parseInt(document.documentElement.style.fontSize,10)||DEFAULT_FONT;
    applyFontSize(Math.max(MIN_FONT, cur-2));
  };
  document.getElementById('fontReset').onclick=()=> applyFontSize(DEFAULT_FONT);

  // números da Início: o que está disponível agora
  function atualizarImpacto(){
    const hoje=toISODate(new Date());
    const disponiveis=items.filter(it=> it.validade>=hoje && !it.solicitado);
    document.getElementById('statItens').textContent=disponiveis.length;
    document.getElementById('statUnidades').textContent=disponiveis.reduce((s,it)=>s+it.qtd,0);
    document.getElementById('statValor').textContent=fmtMoeda(disponiveis.reduce((s,it)=>s+(it.valor||0),0));
  }
  atualizarImpacto();

  // quiz necessidade/desejo
  const quizItems=[["Comida da semana","necessidade"],["Novo celular top de linha","desejo"],["Remédio prescrito","necessidade"],["Roupa de marca só por status","desejo"]];
  const quizEl=document.getElementById('quizConsumo');
  quizItems.forEach(([item,correct])=>{
    const wrap=document.createElement('div'); wrap.className='quiz-item';
    const titulo=document.createElement('strong'); titulo.textContent=item;
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
    wrap.append(titulo, opts, fb);
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

  // desafio de 7 dias (o visual de "marcado" vem do aria-pressed no style.css)
  const challenge7=document.getElementById('challenge7');
  for(let i=1;i<=7;i++){
    const b=document.createElement('button');
    b.textContent='Dia '+i;
    b.type='button';
    b.className='day-btn';
    b.setAttribute('aria-pressed','false');
    b.onclick=()=> b.setAttribute('aria-pressed', b.getAttribute('aria-pressed')==='false' ? 'true' : 'false');
    challenge7.appendChild(b);
  }

  // tabs doador/receptor
  const foodTabs=document.getElementById('foodTabs');
  const painelDoador=document.getElementById('painelDoador');
  const painelReceptor=document.getElementById('painelReceptor');
  function abrirPainel(tab){
    foodTabs.querySelectorAll('.tabbtn').forEach(b=>{
      const on=b.dataset.tab===tab;
      b.classList.toggle('active', on); b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    painelDoador.hidden = tab!=='doador';
    painelReceptor.hidden = tab==='doador';
    if(tab!=='doador') renderItems();
  }
  foodTabs.querySelectorAll('.tabbtn').forEach(btn=>{ btn.onclick=()=>abrirPainel(btn.dataset.tab); });

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
    itemListEmpty.hidden = filtrados.length>0;
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
      btn.onclick=()=>{ it.solicitado=true; renderItems(); atualizarImpacto(); };
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
      items.unshift({nome, categoria:cat, qtd:Number(qtd), validade:val, valor:Number(valor), local, solicitado:false});
      atualizarImpacto();
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
    const texto=document.createElement('span'); texto.textContent=h;
    const btn=document.createElement('button'); btn.textContent='Priorizar'; btn.type='button';
    btn.onclick=()=>{
      [...habitList.children].forEach(r=>r.classList.remove('selected'));
      row.classList.add('selected');
      encourage.textContent=`💪 Ótima escolha! Comece pequeno: tente aplicar "${h.toLowerCase()}" nesta semana e observe a diferença.`;
      encourage.classList.add('show');
    };
    row.append(texto, btn);
    habitList.appendChild(row);
  });
}
