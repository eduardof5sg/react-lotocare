import { useEffect } from "react";

const Modal = () => {
    useEffect(() => {
      const loadScript = async () => {
        try {
          const scriptModule = await import ('./actions.js');
        } catch (error) {
          console.log(error);
        };
      }
      loadScript();
      
    }, []); // El array vacío asegura que este efecto solo se ejecute una vez
  }

  export default Modal