function irPara(secao) {
  document.getElementById(secao).scrollIntoView({
    behavior: "smooth"
  });
}

function mostrarMensagem() {
  document.getElementById("msg").style.display = "block";
}

function avaliar() {
  const frases = [
    "Perigosa 👀",
    "Engraçada demais",
    "Tem bom gosto",
    "Aprovada com sucesso"
  ];

  const aleatorio = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById("avaliacao").innerText = aleatorio;
}

