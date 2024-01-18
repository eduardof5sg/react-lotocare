import React, { PureComponent, useEffect } from "react";
import "../formulario/formulario.css";
import Modal from "./modal.jsx";
/*
const MiComponente = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = './components/pages/formulario/actions.js'; 
    script.async = true;
    alert("PP");

    // Adjuntar el script al final del cuerpo del documento
    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez
}*/


export class Formulario extends PureComponent {
  render() {
    return (
      <div>
        <div class="formLoading">
          <h1>INGRESAR</h1>
          <div class="form-control">
            <form id="formulario1" action="">
              <div>
                <label for="correo">Correo electronico</label>
                <input id="correo" class="claseInput" type="email" />
                <p></p>
              </div>
              <div>
                <label for="pass1">Contraseña</label>
                <input id="pass1" type="password" />
                <p></p>
              </div>
              <div class="formCheck">
                <input type="checkbox" id="check" />
                <label for="check">Recuerdame</label>
              </div>
              <button>Iniciar Sesión</button>
            </form>
          </div>
        </div>

        <div class="formRegistro">
          <h1>REGÍSTRATE</h1>
          <form class="form2" id="formulario2" action="">
            <div class="formNombre">
              <div>
                <label for="nombre" class="label-nombre">
                  Nombre
                </label>
                <input type="text" id="nombre" />
                <p></p>
              </div>
              <div>
                <label for="apellidos">Apellidos</label>
                <input type="text" name="" id="apellidos" />
                <p></p>
              </div>
            </div>
            <div>
              <label for="telefono">Telefono</label>
              <input type="text" id="telefono" />
              <p></p>
            </div>
            <div class="formCorreo">
              <div>
                <label for="correo2">Email</label>
                <input type="email" id="correo2" />
                <p></p>
              </div>
              <div>
                <label for="confirmarCorreo">Confirmar Email</label>
                <input type="email" id="confirmarCorreo" />
                <p></p>
              </div>
            </div>
            <div class="formPass">
              <div>
                <label for="pass2">Contraseña</label>
                <input type="password" id="pass2" />
                <p></p>
              </div>
              <div>
                <label for="confirmPass">Confirmar contraseña</label>
                <input type="password" id="confirmPass" />
                <p></p>
              </div>
            </div>
          </form>
          <div class="labelCheckbox">
            <input id="formRegistroCheckbox" type="checkbox" />
            <label for="formRegistroCheckbox">
              He leido y estoy de acuerdo con los <a href="#" id="abriModal2">terminos y condiciones</a>
            </label>
            <p></p>
          </div>
          <button>Registrarse</button>

          <div id="myModal" class="modal">
            <div class="modal-content">
              <span class="close">&times;</span>
              {/* Contenido del modal (puedes agregar aquí tus términos y condiciones) */}
              <p>
                <div>
                  <h1>Términos y Condiciones</h1>
                  <p>
                    <strong>1. Introducción</strong>
                    <br />
                    Bienvenido/a a lotoCare.es Estos términos y condiciones
                    regulan el uso de nuestro sitio web y la compra de
                    productos. Al acceder a este sitio, aceptas cumplir con
                    estos términos y condiciones.
                  </p>
                  <strong>2. Uso del sitio</strong>
                  <ul>
                    <li>
                      El sitio web está destinado para el uso personal de los
                      usuarios.
                    </li>
                    <li>
                      se permite el uso del sitio para fines ilegales o no
                      autorizados.
                    </li>
                    <li>
                      reservamos el derecho de modificar o descontinuar
                      cualquier aspecto del sitio sin previo aviso.
                    </li>
                  </ul>
                  <strong>3. Compras y Pagos </strong>
                  <ul>
                    <li>Al realizar una compra, aceptas proporcionar información
                      precisa y actualizada.
                    </li>
                    <li>Los precios de los productos están sujetos a cambios sin
                      notificación previa.
                    </li>
                    <li>Nos reservamos el derecho de rechazar o cancelar pedidos en cualquier momento.
                    </li>
                  </ul>
                  <strong>4. Propiedad intelectual</strong>
                  <ul>
                    <li>
                      Todo el contenido del sitio web, incluyendo imágenes,
                      textos, logos, etc., está protegido por derechos de autor
                      y otras leyes de propiedad intelectual.
                    </li>
                  </ul>
                  <strong>5. Limitación de Responsabilidad</strong>
                  <ul>
                    <li>
                      No nos hacemos responsables por daños directos,
                      indirectos, incidentales, especiales o consecuentes que
                      surjan del uso de este sitio.
                    </li>
                  </ul>

                  <h1>Política de Privacidad</h1>

                  <strong>1. Información Recopilada</strong>
                  <br />
                  <ul>
                    <li>Recopilamos información personal como nombre, dirección,
                      dirección de correo electrónico, etc., solo con el
                      consentimiento del usuario al realizar una compra o
                      suscripción.
                    </li>
                  </ul>
                  <strong>2. Uso de la información</strong>
                  <ul>
                    <li>
                      La información recopilada se utiliza para procesar
                      pedidos, mejorar nuestros servicios, enviar promociones y
                      mantener contacto con los clientes.
                    </li>
                  </ul>
                  <strong>3. Seguridad de la información</strong>
                  <ul>
                    <li>
                      Implementamos medidas de seguridad para proteger la
                      información personal de nuestros usuarios y clientes.
                    </li>
                  </ul>
                  <strong>4. Divulgacion de Terceros</strong>
                  <ul>
                    <li>
                      No vendemos, intercambiamos ni transferimos información
                      personal a terceros sin consentimiento, excepto cuando sea
                      necesario para cumplir con requisitos legales
                    </li>
                  </ul>
                </div>
              </p>
            </div>
          </div>
        </div>{<Modal />}
      </div>
    );
  }
}

export default Formulario;
