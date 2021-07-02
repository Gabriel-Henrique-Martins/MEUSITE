function mostrarBoasvindas(){
    let nome = document.querySelector("#nome");
    let idade = document.querySelector("#idade");

    let h1 = document.querySelector("#BoasVindas");
    h1.innerHTML = `Bem vindo ${nome.value} ao site Guia do Free Fire! Sua idade é ${idade.value}!`

}
