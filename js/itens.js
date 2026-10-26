// Lista de doações, usada pela Início (números) e pela Doar e receber (cadastro e lista).
// Fica guardada no sessionStorage para as duas páginas verem a mesma lista enquanto a aba do navegador estiver aberta.

const ITENS_KEY='compartilha-itens';

// data local em AAAA-MM-DD (toISOString usaria UTC e adiantaria um dia à noite no Brasil)
function toISODate(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function addDays(n){const d=new Date(); d.setDate(d.getDate()+n); return toISODate(d);}
function fmtDate(iso){const [y,m,d]=iso.split('-'); return `${d}/${m}/${y}`;}

// itens disponíveis (dados de exemplo + itens cadastrados na sessão)
let items=carregarItens();

function carregarItens(){
  try{
    const salvos=JSON.parse(sessionStorage.getItem(ITENS_KEY));
    if(Array.isArray(salvos)) return salvos;
  }catch(e){}
  return [
    {nome:"Arroz 5kg", categoria:"Grãos e cereais", qtd:2, validade:addDays(10), valor:56, local:"Galeria Pagé — das 10h às 18h", solicitado:false},
    {nome:"Feijão 1kg", categoria:"Grãos e cereais", qtd:4, validade:addDays(20), valor:36, local:"Rua Augusta, 500 — das 9h às 12h", solicitado:false},
    {nome:"Cesta de frutas", categoria:"Frutas e verduras", qtd:1, validade:addDays(3), valor:25, local:"Mercado Central — das 8h às 11h", solicitado:false},
    {nome:"Leite integral 1L (x6)", categoria:"Laticínios", qtd:6, validade:addDays(7), valor:30, local:"Padaria Bom Pão — das 7h às 20h", solicitado:false}
  ];
}
function salvarItens(){
  try{ sessionStorage.setItem(ITENS_KEY, JSON.stringify(items)); }catch(e){}
}
