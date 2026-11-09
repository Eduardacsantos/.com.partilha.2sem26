// Página Consumo (consumo.html): quiz necessidade ou desejo

// Array estruturado contendo as perguntas do quiz e a resposta correta de cada item
const quizItems=[["Comida da semana","necessidade"],["Novo celular top de linha","desejo"],["Remédio prescrito","necessidade"],["Roupa de marca só por status","desejo"]];
// Captura no DOM o contêiner principal onde o quiz será montado dinamicamente
const quizEl=document.getElementById('quizConsumo');
// Percorre cada item (pergunta e resposta correta) do array usando desestruturação ([item, correct])
quizItems.forEach(([item,correct])=>{
  // Cria o bloco estrutural (card) para cada pergunta do quiz
  const wrap=document.createElement('div'); wrap.className='quiz-item';
  // Cria o elemento de título com o nome do item inserido de forma segura via textContent (proteção contra XSS)
  const titulo=document.createElement('strong'); titulo.textContent=item;
  // Cria o contêiner dos botões de opção de resposta
  const opts=document.createElement('div'); opts.className='quiz-opt';
  // Cria a caixa de feedback acessível (equipada com role="status" e aria-live="polite" para leitores de tela)
  const fb=document.createElement('div'); fb.className='feedback'; fb.setAttribute('role','status'); fb.setAttribute('aria-live','polite');
  // Percorre as duas opções de resposta possíveis ("necessidade" e "desejo") para criar os botões interativos
  ['necessidade','desejo'].forEach(opt=>{
    const btn=document.createElement('button');
    btn.textContent=opt;
    // Evento de clique para validar a resposta do usuário
    btn.onclick=()=>{
      // Remove a classe 'picked' de todos os botões do grupo (garantindo que apenas uma opção fique marcada por vez)
      [...opts.children].forEach(c=>c.classList.remove('picked'));
      // Adiciona a classe de destaque 'picked' apenas no botão que o usuário acabou de clicar
      btn.classList.add('picked');
      // Valida logicamente: se a opção escolhida for igual ao gabarito (correct), exibe mensagem de acerto; senão, dá uma dica pedagógica
      fb.textContent = opt===correct ? '✅ Boa! É isso mesmo.' : `Pense de novo — a maioria classificaria como "${correct}".`;
      // Adiciona a classe 'show' para revelar a caixa de feedback visualmente
      fb.classList.add('show');
    };
    // Anexa o botão criado dentro do contêiner de opções
    opts.appendChild(btn);
  });
  wrap.append(titulo, opts, fb);
  quizEl.appendChild(wrap);
});
