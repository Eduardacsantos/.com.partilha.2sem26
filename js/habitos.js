// Página Hábitos (habitos.html): escolher um hábito para priorizar

// Array contendo todas as opções de hábitos sustentáveis
const habits=["Fazer lista antes de ir ao mercado","Preferir produtos locais e da estação","Levar sacola reutilizável",
"Consertar antes de descartar","Doar o que não usa mais","Evitar compras por impulso","Planejar refeições da semana",
"Reduzir uso de descartáveis","Pesquisar antes de comprar","Compartilhar/emprestar itens de uso raro"];
// Captura no DOM o contêiner da lista de hábitos e a caixa de feedback motivacional
const habitList=document.getElementById('habitList');
const encourage=document.getElementById('habitEncourage');
// Percorre cada hábito do array para gerá-los dinamicamente na tela
habits.forEach(h=>{
  // Cria a estrutura visual da linha do hábito
  const row=document.createElement('div'); row.className='habit-item';
  // Cria o elemento de texto contendo a descrição do hábito de forma segura (textContent)
  const texto=document.createElement('span'); texto.textContent=h;
  // Cria o botão de ação "Priorizar"
  const btn=document.createElement('button'); btn.textContent='Priorizar'; btn.type='button';
  // Evento de clique no botão de priorização
  btn.onclick=()=>{
    // Remove a seleção de todos os outros hábitos (garante seleção única/exclusiva)
    [...habitList.children].forEach(r=>r.classList.remove('selected'));
    // Adiciona a classe de destaque ('selected') apenas na linha clicada
    row.classList.add('selected');
    // Atualiza o texto da caixa de encorajamento com o hábito escolhido e exibe a mensagem
    encourage.textContent=`💪 Ótima escolha! Comece pequeno: tente aplicar "${h.toLowerCase()}" nesta semana e observe a diferença.`;
    encourage.classList.add('show');
  };
  // Agrupa o texto e o botão dentro da linha e injeta o bloco completo na lista principal da página
  row.append(texto, btn);
  habitList.appendChild(row);
});
