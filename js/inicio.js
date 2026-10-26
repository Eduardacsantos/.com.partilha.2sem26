// Página Início (index.html): números do que está disponível agora. Usa a lista do js/itens.js.

function fmtMoeda(v){return v.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0});}

(function atualizarImpacto(){
  const hoje=toISODate(new Date());
  const disponiveis=items.filter(it=> it.validade>=hoje && !it.solicitado);
  document.getElementById('statItens').textContent=disponiveis.length;
  document.getElementById('statUnidades').textContent=disponiveis.reduce((s,it)=>s+it.qtd,0);
  document.getElementById('statValor').textContent=fmtMoeda(disponiveis.reduce((s,it)=>s+(it.valor||0),0));
})();
