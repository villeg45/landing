function saludo() {
  alert("Hola mundo");
  var nombre = prompt("Ingrese su nombre: ");
  alert("hola " + nombre);
}

var inicio = document.getElementsByClassName("link")[0];

inicio.addEventListener("click", function() {
  saludo();
});

function despedida() {
  alert("Gracias");
}

var acercade = document.getElementsByClassName("link")[1];

acercade.addEventListener("click", function() {
  despedida();
});





