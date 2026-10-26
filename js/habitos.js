// Página Hábitos (habitos.html): escolher um hábito para priorizar

const habits=["Fazer lista antes de ir ao mercado","Preferir produtos locais e da estação","Levar sacola reutilizável",
"Consertar antes de descartar","Doar o que não usa mais","Evitar compras por impulso","Planejar refeições da semana",
"Reduzir uso de descartáveis","Pesquisar antes de comprar","Compartilhar/emprestar itens de uso raro"];
const habitList=document.getElementById('habitList');
const encourage=document.getElementById('habitEncourage');
habits.forEach(h=>{
  const row=document.createElement('div'); row.className='habit-item';
  const texto=document.createElement('span'); texto.textContent=h;
  const btn=document.createElement('button'); btn.textContent='Priorizar'; btn.type='button';
  btn.onclick=()=>{
    [...habitList.children].forEach(r=>r.classList.remove('selected'));
    row.classList.add('selected');
    encourage.textContent=`💪 Ótima escolha! Comece pequeno: tente aplicar "${h.toLowerCase()}" nesta semana e observe a diferença.`;
    encourage.classList.add('show');
  };
  row.append(texto, btn);
  habitList.appendChild(row);
});
