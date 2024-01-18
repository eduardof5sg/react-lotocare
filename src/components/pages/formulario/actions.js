// Obtener elementos del DOM
    var modal = document.getElementById("myModal");
    var openModal = document.getElementById("abriModal2");
    var closeModal = document.getElementsByClassName("close")[0];
      alert("KK");
    console.log(modal);
    console.log(openModal);
    console.log(closeModal);
 
 // Abrir modal al hacer clic en el enlace
    openModal.onclick = function() {
    modal.style.display = "block";
 };
 
 // Cerrar modal al hacer clic en la 'x'
    closeModal.onclick = function() {
    modal.style.display = "none";
 };
 
 // Cerrar modal al hacer clic fuera del contenido del modal
    window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
   }
 };