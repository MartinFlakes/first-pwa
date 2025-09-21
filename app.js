function guardarNota()  {
  const texto = document.getElementById("nota").value;
  localStorage.setItem("nota", texto);
  alert("¡Nota guardada con éxito!");
}

document.addEventListener("DOMContentLoaded", () => {
  const texto = localStorage.getItem("nota");
  if (texto) {
    document.getElementById('nota').value = texto;
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registrado con éxito'))
    .catch(error => console.error('Fallo en el registro del Service Worker:', error))
}