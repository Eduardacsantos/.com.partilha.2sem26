// Página Casa (casa.html): desafio de 7 dias (o visual de "marcado" vem do aria-pressed no css/casa.css)

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
