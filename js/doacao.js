// Página Doar e receber (doacao.html): abas Doador / Receba a doação, lista e cadastro. Usa a lista do js/itens.js.

// tabs doador/receptor; o endereço doacao.html#receber já abre "Receba a doação"
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
function painelDoEndereco(){ return location.hash==='#receber' ? 'receber' : 'doador'; }
foodTabs.querySelectorAll('.tabbtn').forEach(btn=>{
  btn.onclick=()=>{
    history.replaceState(null,'','#'+btn.dataset.tab); // recarregar mantém a aba aberta
    abrirPainel(btn.dataset.tab);
  };
});
// ignora o #mainContent do "Pular para o conteúdo"
window.addEventListener('hashchange', ()=>{ if(location.hash==='#receber' || location.hash==='#doador') abrirPainel(painelDoEndereco()); });

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
    const titulo=document.createElement('h2'); titulo.textContent=it.nome;
    const local=document.createElement('p'); local.textContent=it.local;
    const meta=document.createElement('div'); meta.className='meta';
    [it.categoria, 'Qtd: '+it.qtd, 'Validade: '+fmtDate(it.validade)].forEach(txt=>{
      const s=document.createElement('span'); s.textContent=txt; meta.appendChild(s);
    });
    info.append(titulo, local, meta);
    const btn=document.createElement('button');
    btn.disabled=it.solicitado;
    btn.textContent=it.solicitado?'✅ Solicitado':'Solicitar';
    btn.onclick=()=>{ it.solicitado=true; salvarItens(); renderItems(); };
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
    salvarItens();
    banner.classList.add('show');
    donateForm.reset();
    setTimeout(()=>banner.classList.remove('show'), 4000);
  } else {
    banner.classList.remove('show');
    primeiroInvalido.focus();
  }
});

abrirPainel(painelDoEndereco());
