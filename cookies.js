var cookieModal = document.getElementById("cookie-modal");
var acceptCookiesButton = document.getElementById("accept-cookies");

// Mostrar el modal de cookies al cargar la página si las cookies no han sido aceptadas
window.onload = function() {
  if (!cookiesAccepted()) {
    cookieModal.style.display = "block";
  }
}

// Obtener el botón para cerrar el modal (la 'x')
var closeBtn = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en la 'x' o fuera del modal, ocultar el modal
closeBtn.onclick = function() {
  cookieModal.style.display = "none";
  setCookiesAccepted();
}

window.onclick = function(event) {
  if (event.target == cookieModal) {
    cookieModal.style.display = "none";
    setCookiesAccepted();
  }
}

// Función para verificar si las cookies han sido aceptadas
function cookiesAccepted() {
  return localStorage.getItem("cookiesAccepted") === "true";
}

// Función para marcar las cookies como aceptadas
function setCookiesAccepted() {
  localStorage.setItem("cookiesAccepted", "true");
}

// Agregar evento al botón de aceptar cookies para cerrar el modal y marcar las cookies como aceptadas
acceptCookiesButton.onclick = function() {
  cookieModal.style.display = "none";
  setCookiesAccepted();
}
