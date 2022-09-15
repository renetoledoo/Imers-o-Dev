function Converter(){
    const dolar = 5.5;
    let valorElemento = parseFloat(document.getElementById("valor").value);
    let valorEmReal = valorElemento * 5;
    let elementoValorConvertido = document.getElementById("mostrarValor");
    let textoValor = "O valor convertido em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = textoValor;

}