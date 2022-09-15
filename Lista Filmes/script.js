console.log('Status - JavaScript starting')
function inserir() {
  let resultado = document.getElementById("resultado");
  let variavel_inserir = document.getElementById("selecao").value;
    if(variavel_inserir.endsWith("jpg") || variavel_inserir.endsWith("png") || variavel_inserir.endsWith("jpeg")){
      let img = document.createElement("IMG");
      img.src = variavel_inserir;
      let obterDiv = document.getElementById("image");
      obterDiv.appendChild(img);
      resultado.innerHTML = null;
    }else{
      resultado.innerHTML = "Endereço inválido."
    }
  }
  