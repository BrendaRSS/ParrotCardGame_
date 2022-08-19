
let quantidadeDeCartas = Number(prompt("Escolha a quantidade de cartas de 4 a 14:"))
  while (quantidadeDeCartas % 2 != 0 || quantidadeDeCartas > 14 || quantidadeDeCartas < 4) {
    quantidadeDeCartas = Number(prompt("Escolha a quantidade de cartas de 4 a 14:")); 
  }
function addCards(){
    let listaDeCartas=[];
    for(i=0; i<quantidadeDeCartas;i++){
     listaDeCartas.push(
    `<li>
         <div class="card card${i}" onclick="virarCartas(this)">
            <div class="face front"><img src="front.png" class="parrot Pfront"></div>
            <div class="face back"><img src="./fiestaparrot.gif" class="parrot Pback"></div>
         </div>
    </li>`)
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

function virarCartas(cartaEscolhida){

}
   addCards();
      