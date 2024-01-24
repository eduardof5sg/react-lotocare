

// Obtener elementos del DOM
    const modal = document.getElementById("myModal");
    const openModal = document.getElementById("abrirModal");
    const closeModal = document.getElementsByClassName("close")[0];
 
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


   const formContainer = document.getElementById("contenedorForms");
   const form1 = document.getElementById("formulario1");
   const form2 = document.getElementById("formulario2");
   const divF1 = document.getElementById("formLoading");
   const divF2 = document.getElementById("formRegistro");
   const b1 = document.getElementById("btF1");
   const b2 = document.getElementById("btF2");

b1.addEventListener("click", () => {
      mostrarFormulario(form1);
    });
    
b2.addEventListener("click", () => {
      mostrarFormulario(form2);
    });

    function animateForms(formToShow, formToHide) {
      formToHide.style.transition = 'transform 1s ease-in-out';
      formToHide.style.transform = 'rotateY(90deg)';
    
      function transitionEndHandler() {
        formToHide.style.display = 'none';
        formToHide.style.transition = '';
    
        formToShow.style.display = 'block';
        formToShow.style.transition = 'transform 1s ease-in-out';
        formToShow.style.transform = 'rotateY(0deg)';
      }
    
      // Agrega el oyente de eventos
      formToHide.addEventListener('transitionend', transitionEndHandler);
    }
    
    function mostrarFormulario(formulario) {
      if (formulario !== form1) {
        // Animación para mostrar el formulario 1 y ocultar el formulario 2
        divF2.style.transition = 'transform 1s ease-in-out';
        divF2.style.transform = 'rotateY(90deg)';
        setTimeout(() => {
          animateForms(divF1, divF2);
        }, 500);
      } else {
        // Animación para mostrar el formulario 2 y ocultar el formulario 1
        divF1.style.transition = 'transform 1s ease-in-out';
        divF1.style.transform = 'rotateY(90deg)';
        setTimeout(() => {
          animateForms(divF2, divF1);
        }, 500);
      }
    }
    
    document.formLoading.addEventListener('click', () => {
      mostrarFormulario(form1);
    });
    
    document.formRegistro.addEventListener('click', () => {
      mostrarFormulario(form2);
    });
    