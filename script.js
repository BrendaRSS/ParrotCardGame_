
let nomedoJogador= prompt("Olá! Qual seu nome?");
let quantidadeDeCartas = Number(prompt("Escolha a quantidade de cartas de 4 a 14:"));
  while (quantidadeDeCartas % 2 != 0 || quantidadeDeCartas > 14 || quantidadeDeCartas < 4) {
    quantidadeDeCartas = Number(prompt("Escolha a quantidade de cartas de 4 a 14:")); 
  }

const gifsparrot=[
    "bobrossparrot.gif", 
    "explodyparrot.gif", 
    "fiestaparrot.gif", 
    "metalparrot.gif", 
    "revertitparrot.gif", 
    "tripletsparrot.gif", 
    "unicornparrot.gif"];
    //console.log(gifsparrot);

function addCards(){
  let listaDeCartas=[];
  for(i=0; i<2;i++){
    for(j=0; j<quantidadeDeCartas/2;j++){
      listaDeCartas.push(
      `<li>
          <div class="card face" onclick="virarCartas(this)">
              <div class="backInativa none"><img src=${gifsparrot[j]}></div>
              <img src="front.png" class="front parrot">   
          </div>
      </li>`)
    }
  }

  listaDeCartas.sort(comparador); 
  function comparador() { 
	   return Math.random() - 0.5; 
  }
   
    let ulCartas= document.querySelector("ul");
    for(i=0;i<quantidadeDeCartas;i++){
    ulCartas.innerHTML=ulCartas.innerHTML+listaDeCartas[i];
    }
   
}

let contadorDeJogadas=0; //Conta quantas vezes o jogador clicou em uma carta
let primeiraCarta=[];
let segundaCarta=[];
let ParDeCartasEscolhidas=[];
function virarCartas(cardEscolhido){
  if(ParDeCartasEscolhidas==0){
    if(cardEscolhido.classList.contains('back')==false){
    cardEscolhido.classList.add("back");
    let gifAparece= cardEscolhido.querySelector('.backInativa');
    gifAparece.classList.remove('none');
    let parrotSome= cardEscolhido.querySelector('.front');
    parrotSome.classList.add('none');
    primeiraCarta=cardEscolhido;
    ParDeCartasEscolhidas.push(cardEscolhido.innerHTML);
    contadorDeJogadas=contadorDeJogadas+1;
    }
  } else if(ParDeCartasEscolhidas.length==1){
    if(cardEscolhido.classList.contains('back')==false){
    cardEscolhido.classList.add("back");
    let gifAparece= cardEscolhido.querySelector('.backInativa');
    gifAparece.classList.remove('none');
    let parrotSome= cardEscolhido.querySelector('.front');
    parrotSome.classList.add('none');
    segundaCarta=cardEscolhido;
    ParDeCartasEscolhidas.push(cardEscolhido.innerHTML);
    contadorDeJogadas=contadorDeJogadas+1;
    setTimeout(comprarCartasViradas, 1000);
    setTimeout(totaldeJogadas, 1000);
    }
  }


  
  console.log(contadorDeJogadas);
}

function comprarCartasViradas(){
  if(ParDeCartasEscolhidas[0] != ParDeCartasEscolhidas[1]){
    primeiraCarta.classList.remove('back');
    let gifSome1= primeiraCarta.querySelector('.backInativa');
    gifSome1.classList.add('none');
    let parrotAparece1= primeiraCarta.querySelector('.front');
    parrotAparece1.classList.remove('none');
    segundaCarta.classList.remove('back');
    let gifSome2= segundaCarta.querySelector('.backInativa');
    gifSome2.classList.add('none');
    let parrotAparece2= segundaCarta.querySelector('.front');
    parrotAparece2.classList.remove('none');
  } 
  ParDeCartasEscolhidas=[];
}

//função que executa o prompt final após todas os pares de cartas estarem virados
function totaldeJogadas(){
  let totalDeCartasClicadas= document.querySelectorAll(".back") //pega todos os elemento virados e verifica se é igual a qtd de cartas 
  if (totalDeCartasClicadas.length==quantidadeDeCartas){
    alert(`Parabéns, ${nomedoJogador}! Você ganhou o jogo em ${contadorDeJogadas} jogadas`);
  }
}

addCards();
