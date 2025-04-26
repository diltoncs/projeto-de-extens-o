// script.js
function buscarMapa() {
  const bairro = document.getElementById("bairro").value.trim(); // Pega o valor do input

  if (bairro === "") {
    alert("Por favor, insira o nome de um bairro!");
  } else {
    const url = `https://www.google.com/maps/search/${encodeURIComponent(bairro)}`; // URL do Google Maps
    window.open(url, "_blank"); // Abre o link em uma nova aba
  }
}
