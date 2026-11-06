// Página Consumo (consumo.html): quiz necessidade ou desejo

const quizItems=[["Comida da semana","necessidade"],["Novo celular top de linha","desejo"],["Remédio prescrito","necessidade"],["Roupa de marca só por status","desejo"]];
const quizEl=document.getElementById('quizConsumo');
quizItems.forEach(([item,correct])=>{
  const wrap=document.createElement('div'); wrap.className='quiz-item';
  const titulo=document.createElement('strong'); titulo.textContent=item;
  const opts=document.createElement('div'); opts.className='quiz-opt';
  const fb=document.createElement('div'); fb.className='feedback'; fb.setAttribute('role','status'); fb.setAttribute('aria-live','polite');
  ['necessidade','desejo'].forEach(opt=>{
    const btn=document.createElement('button');
    btn.textContent=opt;
    btn.onclick=()=>{
      [...opts.children].forEach(c=>c.classList.remove('picked'));
      btn.classList.add('picked');
      fb.textContent = opt===correct ? '✅ Boa! É isso mesmo.' : `Pense de novo — a maioria classificaria como "${correct}".`;
      fb.classList.add('show');
    };
    opts.appendChild(btn);
  });
  wrap.append(titulo, opts, fb);
  quizEl.appendChild(wrap);
});
