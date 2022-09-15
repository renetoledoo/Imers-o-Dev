/* variavel global */ 

var numeroSortido = parseInt(Math.random() * 10);

function Chutar(){

    let meuNumero = document.getElementById("valor").value;
    let resultado = document.getElementById("resultado");
    if(meuNumero == numeroSortido){
        resultado.innerHTML = "Você Acertou"
    }else if(meuNumero > 10 || meuNumero < 0){
        resultado.innerHTML = "O Numero precisa ser menor que 10 e maior que 0"
    }else{
        resultado.innerHTML = "Você errou. Tente novamente"
    }
}