// Página Contato (contato.html): a validação em si é do HTML5 (required, type=email, pattern...).
// Aqui só: data mínima = hoje, contador de caracteres e a mensagem de confirmação (sem backend, nada é enviado).
const form=document.getElementById('contactForm');
const okMsg=document.getElementById('contactSuccess');
const dataRetorno=document.getElementById('c_data');
const msg=document.getElementById('c_msg');
const contador=document.getElementById('c_contador');

// data local em AAAA-MM-DD
function hojeISO(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
dataRetorno.min=hojeISO();

function atualizaContador(){ contador.textContent=msg.value.length+' / '+msg.maxLength+' caracteres'; }
msg.addEventListener('input',atualizaContador); atualizaContador();

form.addEventListener('submit',e=>{
  e.preventDefault();                 // o navegador já barrou o envio se algo estiver inválido
  okMsg.textContent='✅ Mensagem recebida! Como este é um protótipo, nada foi enviado de verdade — mas o formulário está validado.';
  okMsg.classList.add('show');
  form.reset(); atualizaContador();
  okMsg.focus();
});
