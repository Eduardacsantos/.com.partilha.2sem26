// Lista de doações, usada pela Início (números) e pela Doar e receber (cadastro e lista).
// Fica guardada no sessionStorage para as duas páginas verem a mesma lista enquanto a aba do navegador estiver aberta.

// Constante que define a chave única utilizada para armazenar os dados no sessionStorage do navegador
const ITENS_KEY='compartilha-itens';

// Função utilitária que gera a data local no formato AAAA-MM-DD
// (Usar toISOString() padrão usaria UTC e adiantaria um dia à noite no Brasil, por isso usamos métodos locais)
function toISODate(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
// Função auxiliar que calcula uma data futura somando 'n' dias a partir de hoje
function addDays(n){const d=new Date(); d.setDate(d.getDate()+n); return toISODate(d);}
// Função auxiliar que converte uma string de data ISO (AAAA-MM-DD) para o formato brasileiro legível (DD/MM/AAAA)
function fmtDate(iso){const [y,m,d]=iso.split('-'); return `${d}/${m}/${y}`;}

// Inicializa a variável global 'items' chamando a função de carregamento
let items=carregarItens();

// Função responsável por carregar os itens salvos na sessão ou fornecer dados de exemplo iniciais
function carregarItens(){
  try{
    // Tenta resgatar os dados do sessionStorage e convertê-los de volta para um array JavaScript com JSON.parse
    const salvos=JSON.parse(sessionStorage.getItem(ITENS_KEY));
    // Se o resultado for um array válido, retorna os dados salvos
    if(Array.isArray(salvos)) return salvos;
  }catch(e){} // Captura e ignora silenciosamente qualquer erro de leitura ou restrição de privacidade do navegador

  // Se não houver nada salvo (ou se der erro), retorna uma lista padrão com dados de exemplo (mock data)
  return [
    {nome:"Arroz 5kg", categoria:"Grãos e cereais", qtd:2, validade:addDays(10), valor:56, local:"Galeria Pagé — das 10h às 18h", solicitado:false},
    {nome:"Feijão 1kg", categoria:"Grãos e cereais", qtd:4, validade:addDays(20), valor:36, local:"Rua Augusta, 500 — das 9h às 12h", solicitado:false},
    {nome:"Cesta de frutas", categoria:"Frutas e verduras", qtd:1, validade:addDays(3), valor:25, local:"Mercado Central — das 8h às 11h", solicitado:false},
    {nome:"Leite integral 1L (x6)", categoria:"Laticínios", qtd:6, validade:addDays(7), valor:30, local:"Padaria Bom Pão — das 7h às 20h", solicitado:false}
  ];
}
// Função responsável por salvar o estado atual do array 'items' no sessionStorage do navegador
function salvarItens(){
  // Converte o array de itens em uma string JSON usando JSON.stringify e armazena na chave definida
  try{ sessionStorage.setItem(ITENS_KEY, JSON.stringify(items)); }catch(e){} // Protege a operação com try/catch caso o armazenamento esteja bloqueado
}
}
