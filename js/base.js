// Usado por todas as páginas. É carregado no <head> sem defer: a primeira parte roda na hora,
// antes de a página aparecer (tema e tamanho do texto, para não "piscar"); o resto espera o HTML carregar.

const THEME_KEY='compartilha-theme';
const FONT_KEY='compartilha-fontsize';
const MIN_FONT=14, MAX_FONT=22, DEFAULT_FONT=16;

// tema: respeita preferência salva ou do sistema operacional
(function initTheme(){
  let saved=null;
  try{ saved=localStorage.getItem(THEME_KEY); }catch(e){}
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
})();

// tamanho do texto: acessibilidade para todos os públicos
function applyFontSize(px){
  document.documentElement.style.fontSize = px+'px';
  try{ localStorage.setItem(FONT_KEY, px); }catch(e){}
}
(function initFontSize(){
  let saved=NaN;
  try{ saved=parseInt(localStorage.getItem(FONT_KEY),10); }catch(e){}
  applyFontSize(saved && saved>=MIN_FONT && saved<=MAX_FONT ? saved : DEFAULT_FONT);
})();

// ícone do sprite SVG da página (o <svg class="sprite"> no começo do <body>)
function icon(nome){
  const NS='http://www.w3.org/2000/svg';
  const svg=document.createElementNS(NS,'svg'); svg.setAttribute('class','icon'); svg.setAttribute('aria-hidden','true');
  const use=document.createElementNS(NS,'use'); use.setAttribute('href','#'+nome);
  svg.appendChild(use);
  return svg;
}

if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();

function iniciar(){
  // botão de tema
  const themeBtn=document.getElementById('themeToggle');
  function applyTheme(mode){
    document.documentElement.setAttribute('data-theme', mode);
    const escuro = mode==='dark';
    const rotulo=document.createElement('span'); rotulo.className='theme-label'; rotulo.textContent = escuro ? 'Claro' : 'Escuro';
    themeBtn.replaceChildren(icon(escuro ? 'i-sun' : 'i-moon'), rotulo);
    themeBtn.setAttribute('aria-label', escuro ? 'Mudar para o tema claro' : 'Mudar para o tema escuro');
  }
  applyTheme(document.documentElement.getAttribute('data-theme'));
  themeBtn.onclick=()=>{
    const next = document.documentElement.getAttribute('data-theme')==='dark' ? 'light' : 'dark';
    applyTheme(next);
    try{ localStorage.setItem(THEME_KEY, next); }catch(e){}
  };

  // botões de tamanho do texto
  document.getElementById('fontUp').onclick=()=>{
    const cur=parseInt(document.documentElement.style.fontSize,10)||DEFAULT_FONT;
    applyFontSize(Math.min(MAX_FONT, cur+2));
  };
  document.getElementById('fontDown').onclick=()=>{
    const cur=parseInt(document.documentElement.style.fontSize,10)||DEFAULT_FONT;
    applyFontSize(Math.max(MIN_FONT, cur-2));
  };
  document.getElementById('fontReset').onclick=()=> applyFontSize(DEFAULT_FONT);
}
