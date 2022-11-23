//Listas dos Carros
let yCarros = [60,150,225,315,390,475]
let xCarros = [900,900,900,900,900,900]
let velocidadeCarros = [7,15,10,9,12,8]
let comprimentoCarros = 80
let alturaCarros = 60

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++)
  image(imagemCarros[i],xCarros[i],yCarros[i], comprimentoCarros, alturaCarros);
}

function movimentaCarro(){ 
  for (let i = 0; i < imagemCarros.length; i++)
  xCarros[i] -= velocidadeCarros[i];
}

function repeticaoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 900;
    }
  }
}
function passouTodaATela(xCarros){
  return xCarros <-50;
}

