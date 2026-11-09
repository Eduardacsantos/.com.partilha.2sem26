// Página Contato (contato.html): a validação em si é do HTML5 (required, type=email, pattern...).
// Aqui só: data mínima = hoje, contador de caracteres e a mensagem de confirmação (sem backend, nada é enviado).

// Captura os principais elementos do formulário e de feedback no DOM
const form=document.getElementById('contactForm');
const okMsg=document.getElementById('contactSuccess');
const dataRetorno=document.getElementById('c_data');
const msg=document.getElementById('c_msg');
const contador=document.getElementById('c_contador');

// Função auxiliar para capturar a data atual formatada em AAAA-MM-DD usando o fuso local (evita bug de UTC)
function hojeISO(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
// Define a data mínima permitida no input de calendário como sendo a data de hoje (impede datas retroativas)
dataRetorno.min=hojeISO();

// Função que calcula o número de caracteres digitados na mensagem e atualiza o texto do contador na tela
function atualizaContador(){ contador.textContent=msg.value.length+' / '+msg.maxLength+' caracteres'; }
// Adiciona um ouvinte para atualizar o contador a cada tecla digitada (evento 'input') e executa uma vez ao carregar
msg.addEventListener('input',atualizaContador); atualizaContador();

// Intercepta o evento de envio (submit) do formulário
form.addEventListener('submit',e=>{
  e.preventDefault();                 // o navegador já barrou o envio se algo estiver inválido
  // Insere a mensagem de sucesso amigável simulando o envio
  okMsg.textContent='✅ Mensagem recebida! Como este é um protótipo, nada foi enviado de verdade — mas o formulário está validado.';
  // Adiciona a classe 'show' para revelar visualmente o banner de sucesso
  okMsg.classList.add('show');
  // Limpa os campos do formulário e reseta o contador de caracteres
  form.reset(); atualizaContador();
  // Move o foco do teclado diretamente para a mensagem de sucesso para garantir acessibilidade (leitores de tela)
  okMsg.focus();
});
