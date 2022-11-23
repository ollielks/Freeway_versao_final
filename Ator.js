//variáveis do Ator
let xAtor = 40
let yAtor = 550
let larguraAtor = 60
let alturaAtor = 45
let colisao = false
let meusPontos = 0

function mostraAtor(){
    image(imagemAtor, xAtor,yAtor,larguraAtor,alturaAtor)
  
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 5
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeMover())
    yAtor += 5 }
  
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 5
    
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 5
  }
  
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle (xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 25)
    if (colisao){
      voltaInicio();
      somColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -=1
      }
    }
  }
}
function voltaInicio(){
  yAtor = 550;
}

function incluiPontos(){
  fill(color(255,240,60))
  textAlign(CENTER)
  textSize(25)
  text(meusPontos, width/5, 35)
}
function marcaPonto(){
  if (yAtor <= 15){
    meusPontos += 1
      voltaInicio();
    somPontos.play();
  }
}
function pontosMaiorQueZero(){
  return meusPontos > 0
}
  
function podeMover(){
  return yAtor < 550
}