
let quantidadeDeCartas = Number(prompt("Escolha a quantidade de cartas de 4 a 14:"))
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
    "unicornparrot.gif",
    "bobrossparrot.gif", 
    "explodyparrot.gif", 
    "fiestaparrot.gif", 
    "metalparrot.gif", 
    "revertitparrot.gif", 
    "tripletsparrot.gif", 
    "unicornparrot.gif" ];
    console.log(gifsparrot);

function addCards(){
    let listaDeCartas=[];
    for(i=0; i<quantidadeDeCartas;i++){
     listaDeCartas.push(
    `<li>
        <div class="card face card${i}">
            <img src="front.png" class="front parrot">
            <div class="backInativa"><img src=${gifsparrot[i]}> </div>   
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

//function virarCartas(cardEscolhido){}
   addCards();
      