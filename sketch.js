
function setup() {
  createCanvas(800, 600);
  trilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  repeticaoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  
}
