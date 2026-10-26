// Checklists com barra de progresso, usados nas páginas Alimentação e Economia.
// Liga sozinho todo <div class="checklist"> da página à sua .progress-fill.

document.querySelectorAll('.checklist').forEach(card=>{
  const boxes=[...card.querySelectorAll('input[type=checkbox]')];
  const fill=card.querySelector('.progress-fill');
  function update(){
    const done=boxes.filter(b=>b.checked).length;
    fill.style.width = Math.round(done/boxes.length*100)+'%';
  }
  boxes.forEach(b=>b.onchange=update);
});
