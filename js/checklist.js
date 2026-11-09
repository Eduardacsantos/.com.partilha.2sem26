// Checklists com barra de progresso, usados nas páginas Alimentação e Economia.
// Liga sozinho todo <div class="checklist"> da página à sua .progress-fill.

// Seleciona todos os elementos da página que possuem a classe 'checklist' e percorre um por um
document.querySelectorAll('.checklist').forEach(card=>{
  // Pega todos os checkboxes de dentro do card, convertendo a lista (NodeList) em um Array real com o operador spread [...]
  const boxes=[...card.querySelectorAll('input[type=checkbox]')];
  // Encontra a barra de progresso visual (.progress-fill) dentro daquele card específico
  const fill=card.querySelector('.progress-fill');
  // Função interna responsável por calcular a porcentagem e atualizar a largura da barra
  function update(){
    // Conta quantos checkboxes estão marcados (b.checked === true)
    const done=boxes.filter(b=>b.checked).length;
    // Calcula a porcentagem dos concluídos em relação ao total, arredonda com Math.round e aplica na largura (width) da barra
    fill.style.width = Math.round(done/boxes.length*100)+'%';
  }
  // Adiciona o evento 'onchange' em cada checkbox para que a barra atualize instantaneamente sempre que o usuário marcar ou desmarcar um item
  boxes.forEach(b=>b.onchange=update);
});
