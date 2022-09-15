var brasil = {
    bandeira: "https://static.todamateria.com.br/upload/ba/nd/bandeira-do-brasil-og.jpg",
    nome: "Brasil",
    vitorias: 2,
    empates: 3,
    derrotas: 0,
    pontos: 0
}
var argentina = {
    bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png",
    nome: "Paulo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

brasil.pontos = calculaPontos(brasil);
argentina.pontos = calculaPontos(argentina);

var jogadores = [brasil, argentina];


function AdicionarTime(){
    let novoTime = document.getElementById("time").value;
    let bandeira = document.getElementById("bandeira").value;
    console.log(novoTime);

       novoTime = {
        bandeira: bandeira,
        nome: novoTime,
        vitorias: 1,
        empates: 1,
        derrotas: 0,
        pontos: 0
    }

    jogadores.push(novoTime);
    exibirJogadoresNaTela(jogadores);
    console.log(novoTime);
}

function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) * jogador.empates;
    return pontos
}


function exibirJogadoresNaTela(jogadores){

    var elementos = ""
    for(var i = 0; i < jogadores.length; i++){
        
        elementos += "<tr><td><img src='" + jogadores[i].bandeira + "'></td>"
        elementos += "<td>" + jogadores[i].nome  + "</td>"
        elementos += "<td>" + jogadores[i].vitorias  + "</td>"
        elementos += "<td>" +  jogadores[i].empates + "</td>"
        elementos += "<td>" + jogadores[i].derrotas + "</td>"
        elementos += "<td>" + jogadores[i].pontos + "</td>"
        elementos +=
        "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elementos +=
        "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elementos +=
        "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elementos += "</tr>";
    }

    var tabelasjogadores = document.getElementById('tabelaJogadores');
    tabelasjogadores.innerHTML = elementos
}

exibirJogadoresNaTela(jogadores);

function adicionarVitoria(i){
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadoresNaTela(jogadores);

}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadoresNaTela(jogadores);
  }
  
function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibirJogadoresNaTela(jogadores);
  }
   