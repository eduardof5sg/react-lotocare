import { useEffect } from "react";

const Modal = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = './components/pages/formulario/actions.js'; 
      script.async = true;
      alert("PP");
  
      // Adjuntar el script al final del cuerpo del documento
      document.body.appendChild(script);
      alert("P2");
  
      // Limpiar el script cuando el componente se desmonte
      return () => {
        document.body.removeChild(script);
        alert("P3");
      };
    }, []); // El array vacío asegura que este efecto solo se ejecute una vez
  }

  export default Modal