var carta1 = {
    nome: "Hulk",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/08/O-Incrivel-Hulk-Divulgacao-1200x900-1.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var carta2 = {
    nome: "Capitão América",
    imagem:
      "https://popseries.com.br/wp-content/uploads/2019/11/capitao-america-.jpg",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 2
    }
  };
  
  var carta3 = {
    nome: "Homem de Ferro",
    imagem:
      "https://lumiere-a.akamaihd.net/v1/images/iron-man_dft_m_db79b94b.jpeg",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 10
    }
  };
var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;
// console.log(cartas)

function sortearCarta(){

    do{
        var numeroCartaMaquina = parseInt(Math.random() * 3);
        cartaMaquina = cartas[numeroCartaMaquina];
      
        var numeroCartaJogador = parseInt(Math.random() * 3);
        cartaJogador = cartas[numeroCartaJogador];


    }while(cartaJogador == cartaMaquina);
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador();
        console.log(cartaJogador.nome + " VS " + cartaMaquina.nome);
 }

// function exibirOpcoes(){

//     var opcoes = document.getElementById("caixa1");
//     var opcoesText =  "";
//    for (let atributo in cartaJogador.atributos){
//        opcoesText += "<input type='radio' name='atributo' value='" + atributo + "'> " + atributo;
//     }
//     opcoes.innerHTML = opcoesText;
// }

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
function jogar(){
   var atributoSelecionado = obtemAtributoSelecionado();
   var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
   var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
   var textoNaTela = document.getElementById("resultado");
    var resultado;
   if(valorCartaJogador > valorCartaMaquina){
      resultado = "Você Venceu! Parabéns.";
   }else if(valorCartaJogador == valorCartaMaquina){
    resultado = "Você empatou! Tente novamente."
   }else if(valorCartaJogador < valorCartaMaquina){
    resultado = "Infelizmente você perdeu! Tente novamente."
   }
   console.log("Player : " + valorCartaJogador + " VS " + valorCartaMaquina  +  " : Maquina" );
   exibirCartaMaquina();
   textoNaTela.innerHTML = resultado;
}


function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("caixa1");
    // divCartaJogador.style.backgroundImage= "url(" + cartaJogador.imagem + ")"
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id= 'opcoes' class= 'carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  

  
function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("caixa3");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaMaquina.style.backgroundImage = "url(" + cartaMaquina.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  