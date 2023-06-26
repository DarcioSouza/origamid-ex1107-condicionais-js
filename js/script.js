const botao = document.querySelector(".botao");

function somar() {
  const numero = document.querySelector(".numero");
  const soma = Number(numero.innerText) + 1;

  if (soma < 10) {
    numero.innerText = soma;
  } else {
    console.log("Não é possível adicionar mais!");
  }
}

if (botao) {
  botao.addEventListener("click", somar);
}
