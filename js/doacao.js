// Página Doar e receber (doacao.html): abas Doador / Receba a doação, lista e cadastro. Usa a lista do js/itens.js.

// Captura os elementos das abas e dos painéis principais no DOM
const foodTabs=document.getElementById('foodTabs');
const painelDoador=document.getElementById('painelDoador');
const painelReceptor=document.getElementById('painelReceptor');

// Função responsável por alternar a exibição entre o painel do doador e o do receptor
function abrirPainel(tab){
  // Percorre os botões das abas atualizando classes e estados de acessibilidade (aria-pressed)
  foodTabs.querySelectorAll('.tabbtn').forEach(b=>{
    const on=b.dataset.tab===tab;
    b.classList.toggle('active', on); b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  // Oculta um painel e exibe o outro com base na aba ativa
  painelDoador.hidden = tab!=='doador';
  painelReceptor.hidden = tab==='doador';
  // Se abrir a aba de receber, atualiza a listagem de itens na tela
  if(tab!=='doador') renderItems();
}
// Função auxiliar que verifica a URL (hash) para abrir automaticamente a aba correta (ex: doacao.html#receber)
function painelDoEndereco(){ return location.hash==='#receber' ? 'receber' : 'doador'; }
// Configura o evento de clique em cada botão de aba para atualizar o histórico de navegação sem recarregar a página
foodTabs.querySelectorAll('.tabbtn').forEach(btn=>{
  btn.onclick=()=>{
    history.replaceState(null,'','#'+btn.dataset.tab); // recarregar mantém a aba aberta
    abrirPainel(btn.dataset.tab);
  };
});
// Escuta mudanças manuais na URL (hashchange) para alternar abas se o usuário navegar pelo histórico
window.addEventListener('hashchange', ()=>{ if(location.hash==='#receber' || location.hash==='#doador') abrirPainel(painelDoEndereco()); });

// Captura os elementos de listagem, filtros de busca e categoria
const itemList=document.getElementById('itemList');
const itemListEmpty=document.getElementById('itemListEmpty');
const rBusca=document.getElementById('r_busca');
const rCat=document.getElementById('r_filtroCategoria');
// Dispara a atualização da lista sempre que o usuário digitar na busca ou mudar o filtro de categoria
rBusca.oninput=renderItems; rCat.onchange=renderItems;

// Função principal de renderização e filtro dos cards de doação
function renderItems(){
  const termo=rBusca.value.trim().toLowerCase();
  const cat=rCat.value;
  const hoje=toISODate(new Date());
  // Filtra o array global 'items': remove itens vencidos, aplica o termo de busca no nome e o filtro de categoria
  const filtrados=items.filter(it=> it.validade>=hoje && it.nome.toLowerCase().includes(termo) && (cat==='' || it.categoria===cat));
  // Limpa a lista atual na tela e gerencia a mensagem de "lista vazia"
  itemList.innerHTML='';
  itemListEmpty.hidden = filtrados.length>0;
  // Para cada item filtrado, cria dinamicamente o card visual
  filtrados.forEach(it=>{
    // SEGURANÇA: Uso estrito de textContent em vez de innerHTML para blindar contra ataques de XSS
    const card=document.createElement('div'); card.className='item-card';
    const info=document.createElement('div'); info.className='info';
    const titulo=document.createElement('h2'); titulo.textContent=it.nome;
    const local=document.createElement('p'); local.textContent=it.local;
    const meta=document.createElement('div'); meta.className='meta';
    // Cria os metadados (categoria, quantidade e validade formatada)
    [it.categoria, 'Qtd: '+it.qtd, 'Validade: '+fmtDate(it.validade)].forEach(txt=>{
      const s=document.createElement('span'); s.textContent=txt; meta.appendChild(s);
    });
    info.append(titulo, local, meta);
    // Cria o botão de solicitação da doação
    const btn=document.createElement('button');
    btn.disabled=it.solicitado;
    btn.textContent=it.solicitado?'✅ Solicitado':'Solicitar';
    // Ação ao clicar em solicitar: altera o estado para solicitado, salva no sessionStorage e re-renderiza a lista
    btn.onclick=()=>{ it.solicitado=true; salvarItens(); renderItems(); };
    card.append(info, btn);
    itemList.appendChild(card);
  });
}

// VALIDAÇÃO DO FORMULÁRIO DE DOAÇÃO
const donateForm=document.getElementById('donateForm');
donateForm.addEventListener('submit', function(e){
  e.preventDefault(); // Impede o envio padrão e recarregamento da página
  let ok=true, primeiroInvalido=null;
  // Função auxiliar centralizada para gerenciar erros de validação nos campos
  function setErr(id, errId, cond){
    const field=document.getElementById(id), err=document.getElementById(errId);
    if(cond){
      field.classList.add('invalid'); field.setAttribute('aria-invalid','true'); err.classList.add('show'); ok=false;
      if(!primeiroInvalido) primeiroInvalido=field;
    }
    else{ field.classList.remove('invalid'); field.removeAttribute('aria-invalid'); err.classList.remove('show'); }
  }
  // Coleta os valores preenchidos no formulário
  const nome=document.getElementById('d_nome').value.trim();
  const cat=document.getElementById('d_categoria').value;
  const qtd=document.getElementById('d_qtd').value;
  const val=document.getElementById('d_validade').value;
  const valor=document.getElementById('d_valor').value;
  const local=document.getElementById('d_local').value.trim();

  // Aplica as regras de validação para cada campo
  setErr('d_nome','err_nome', nome==='');
  setErr('d_categoria','err_categoria', cat==='');
  setErr('d_qtd','err_qtd', qtd==='' || !Number.isInteger(Number(qtd)) || Number(qtd)<=0);
  const today=new Date(); today.setHours(0,0,0,0);
  setErr('d_validade','err_validade', val==='' || new Date(val+'T00:00:00')<today);
  setErr('d_valor','err_valor', valor==='' || isNaN(valor) || Number(valor)<0);
  setErr('d_local','err_local', local==='');

  const banner=document.getElementById('donateSuccess');
  // Se tudo estiver correto (ok === true)
  if(ok){
    // Insere o novo item no início do array global (unshift) e salva na sessão
    items.unshift({nome, categoria:cat, qtd:Number(qtd), validade:val, valor:Number(valor), local, solicitado:false});
    salvarItens();
    // Se houver erros, oculta o banner de sucesso e foca automaticamente no primeiro campo incorreto (Acessibilidade)
    banner.classList.add('show');
    donateForm.reset();
    setTimeout(()=>banner.classList.remove('show'), 4000);
  } else {
    banner.classList.remove('show');
    primeiroInvalido.focus();
  }
});

// Inicializa a página abrindo a aba correta com base no endereço (hash da URL)
abrirPainel(painelDoEndereco());
