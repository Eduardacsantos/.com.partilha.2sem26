// Página Casa (casa.html): desafio de 7 dias (o visual de "marcado" vem do aria-pressed no css/casa.css)

// Captura no DOM o contêiner onde os botões dos dias do desafio serão injetados
const challenge7=document.getElementById('challenge7');
// Laço de repetição que roda de 1 até 7 para criar os 7 dias do desafio
for(let i=1;i<=7;i++){
  // Cria um elemento de botão do zero para cada dia
  const b=document.createElement('button');
  // Define o texto do botão como "Dia 1", "Dia 2", etc., usando interpolação de string
  b.textContent='Dia '+i;
  // Define explicitamente o tipo do botão como 'button' para evitar comportamentos indesejados de submit
  b.type='button';
  // Aplica a classe CSS padrão de estilo para os botões do desafio
  b.className='day-btn';
  // Configura o atributo de acessibilidade ARIA como 'false' (começa desmarcado)
  b.setAttribute('aria-pressed','false');
  // Adiciona o evento de clique: alterna o estado do aria-pressed entre 'true' (marcado) e 'false' (desmarcado)
  b.onclick=()=> b.setAttribute('aria-pressed', b.getAttribute('aria-pressed')==='false' ? 'true' : 'false');
  // Insere o botão criado dentro do contêiner principal do desafio na página
  challenge7.appendChild(b);
}
