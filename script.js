const input = document.querySelector('#text-input');
const container = document.querySelector('#meme-image-container');
const texto = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const imagem = document.querySelector('#meme-image');
const botaof = document.querySelector('#fire');
const botaoW = document.querySelector('#water');
const botaoT = document.querySelector('#earth');
const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');

function gerarTexto() {
  texto.innerHTML = input.value;
}
input.addEventListener('input', gerarTexto);

// Referencia https://www.youtube.com/watch?v=xqIVrjKhfaU&ab_channel=CodingShiksha
function carregaImagem() {
  imagem.src = URL.createObjectURL(memeInsert.files[0]);
}
memeInsert.addEventListener('change', carregaImagem);

function fogo() {
  container.style.border = '3px dashed rgb(255, 0, 0)';
}

function agua() {
  container.style.border = '5px double rgb(0, 0, 255)';
}

function terra() {
  container.style.border = '6px groove rgb(0, 128, 0)';
}

botaof.addEventListener('click', fogo);
botaoW.addEventListener('click', agua);
botaoT.addEventListener('click', terra);

function primeiroMeme() {
  imagem.src = './imgs/meme1.png';
}

function segundoMeme() {
  imagem.src = './imgs/meme2.png';
}

function terceiroMeme() {
  imagem.src = './imgs/meme3.png';
}

function quartoMeme() {
  imagem.src = './imgs/meme4.png';
}

meme1.addEventListener('click', primeiroMeme);
meme2.addEventListener('click', segundoMeme);
meme3.addEventListener('click', terceiroMeme);
meme4.addEventListener('click', quartoMeme);
