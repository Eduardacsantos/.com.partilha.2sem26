// Página Início (index.html): números do que está disponível agora. Usa a lista do js/itens.js.

// Função utilitária que recebe um valor numérico e o formata para o padrão monetário brasileiro (Real), sem casas decimais
function fmtMoeda(v){return v.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0});}

// Função auto-executável (IIFE): roda assim que o script é carregado para atualizar as estatísticas de impacto imediatamente
(function atualizarImpacto(){
  // Obtém a data de hoje formatada em AAAA-MM-DD usando o fuso local
  const hoje=toISODate(new Date());
  // Filtra o array global 'items': mantém apenas os itens cuja validade é maior ou igual a hoje E que ainda não foram solicitados
  const disponiveis=items.filter(it=> it.validade>=hoje && !it.solicitado);
  // Atualiza o elemento HTML #statItens com a contagem total de itens disponíveis
  document.getElementById('statItens').textContent=disponiveis.length;
  // Utiliza o método .reduce() para somar a quantidade total de unidades de todos os itens disponíveis e injeta no elemento #statUnidades
  document.getElementById('statUnidades').textContent=disponiveis.reduce((s,it)=>s+it.qtd,0);
  // Utiliza o .reduce() para somar o valor financeiro estimado de todos os itens disponíveis (protegido com || 0), formata como moeda e injeta no elemento #statValor
  document.getElementById('statValor').textContent=fmtMoeda(disponiveis.reduce((s,it)=>s+(it.valor||0),0));
})();
