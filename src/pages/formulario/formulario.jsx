import React, { useState } from "react";
import "../formulario/formulario.css";
import Modal from "./modal.jsx";
import ReCaptcha from "./ReCAPTCHA.jsx";
import { useNavigate } from 'react-router-dom';

function Formulario() {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const navigate = useNavigate();

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const correo = document.getElementById('correo').value;
    const pass1 = document.getElementById('pass1').value;

    
    if (!correo || !correo.match(/^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\.[a-zA-Z]{2,})$/)) {
      alert('Por favor, ingresa un correo válido.');
      return;
    }
    if (!pass1 || pass1.length < 8 || pass1.length > 30) {
      alert('Por favor, ingresa una contraseña válida. Mínimo 8 caracteres.');
      return;
    }
    navigate('/profilePage');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar otros campos antes del reCAPTCHA
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const telefono = document.getElementById('telefono').value;
    const correo1 = document.getElementById('correo1').value;
    const correo2 = document.getElementById('correo2').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    const formRegistroCheckbox = document.getElementById('formRegistroCheckbox');
    
    if (!nombre || !nombre.match(/^[A-Za-z]+$/) || nombre.length < 2 || nombre.length > 30) {
      alert('Por favor, ingresa un nombre válido.');
      return;
    }
    if (!apellidos || !apellidos.match(/^[A-Za-z]+$/) || apellidos.length < 2 || apellidos.length > 30) {
      alert('Por favor, ingresa apellidos válidos.');
      return;
    }
    if (!telefono || telefono.length !== 9) {
      alert('Por favor, ingresa un teléfono válido.');
      return;
    }
    if (!correo1 || !correo1.match(/^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\.[a-zA-Z]{2,})$/)) {
      alert('Por favor, ingresa un correo válido.');
      return;
    }
    if (!correo2 || !correo2.match(/^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\.[a-zA-Z]{2,})$/)) {
      alert('Por favor, ingresa un correo válido.');
      return;
    }
    if (correo1 !== correo2) {
      alert('Los dos campos de correo tienen que ser iguales.');
      return;
    }
    console.log(password.required);
    if (!password || password.length < 8 || password.length > 30) {
      alert('Por favor, ingresa una contraseña válida. Mínimo 8 caracteres.');
      return;
    }
    console.log(password2.required);
    if (!password2 || password2.length < 8 || password2.length > 30) {
      alert('Por favor, ingresa una contraseña igual a la primera.');
      return;
    }
    if (password !== password2) {
      alert('Los dos campos de contraseña tienen que ser iguales.');
      return;
    }
    console.log(formRegistroCheckbox);
    if (!formRegistroCheckbox.checked) {
      alert('Por favor, confirma que estás de acuerdo con nuestras condiciones.');
      return;
    }
    

    // Validar si reCAPTCHA se ha completado
    if (!recaptchaValue) {
      alert('Por favor, completa el reCAPTCHA.');
      return;
    }

    // Enviar el formulario
    alert('Formulario enviado correctamente!');
    navigate('/');
  };

  return (
      <div class="contenedorForms">
        <div id="formLoading">
          <h1>INGRESAR</h1>
          <div class="formControl">
            <form id="formulario1" action="">
              <div>
                <label for="correo">Correo electronico</label>
                <input id="correo" class="claseInput" type="email" placeholder="Introduce tu correo" minLength={8} maxLength={50} required />
              </div>
              <div>
                <label for="pass1">Contraseña</label>
                <input id="pass1" type="password" placeholder="Tu contraseña" minLength={8} maxLength={30} required />
              </div>
              <div id="formCheck" class="formCheck">
                <input type="checkbox" id="check1" required />
                <label for="check1" id="labelCheck">Recuérdame.</label>
              </div>
              <div class="formBot">
                <button id="formBotIni" onClick={handleSubmit2}>Iniciar Sesión</button>
              </div>
              <div  class="formBot" id="cambiaForm">¿No tienes cuenta?. Créala <span id="btF1">aquí</span>.</div>
            </form>
          </div>
        </div>

        <div id="formRegistro">
          <h1>REGÍSTRATE</h1>
          <div class="formControl">
          <form class="form2" id="formulario2" action="">
            <div class="formNombre">
              <div>
                <label for="nombre" class="label-nombre">
                  Nombre
                </label>
                <input type="text" id="nombre" minLength={2} maxLength={30} placeholder="Introduce tu nombre." pattern="[A-Za-z]+" title="Solo se permiten letras" required />
              </div>
              <div>
                <label for="apellidos">Apellidos</label>
                <input type="text" name="" id="apellidos" minLength={2} maxLength={40} placeholder="Introduce tus apellidos." pattern="[A-Za-z]+" title="Solo se permiten letras" required />
              </div>
            </div>
            <div>
              <div>
                <label class="labelSeletor" for="genero">Genero</label>
                <select
                  class="selector"
                  id="genero"
                >
                  <option value="">Elije tu genero</option>
                  <option value="male">Hombre</option>
                  <option value="female">Mujer</option>
                  <option value="other">Otro / Prefiero no decirlo</option>
                </select>
                </div>
                <div>
                <label class="labelSeletor" for="edad">Fecha de nacimiento</label>
                <input
                  class="selector"
                  id="edad"
                  type="date"
                />
              </div>
            </div>
            <div class="formTel">
              <div>
                <label for="telefono">Teléfono</label>
                <input type="tel" id="telefono" minLength={9} maxLength={9} pattern="\d{9,9}" placeholder="Introduce tu telefono." required />
              </div>
            </div>
            <div class="formCorreo">
              <div>
                <label for="correo1">Email</label>
                <input type="email" id="correo1" minLength={8} maxLength={30} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" title="Ingresa una dirección de correo electrónico válida" placeholder="Introduce tu correo." required />
              </div>
              <div>
                <label for="correo2">Confirmar Email</label>
                <input type="email" id="correo2" minLength={8} maxLength={30} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" title="Ingresa una dirección de correo electrónico válida" placeholder="Repite tu correo." required />
              </div>
            </div>
            <div class="formPass">
              <div>
                <label for="password">Contraseña</label>
                <input type="password" id="password" minLength={8} maxLength={30} placeholder="Introduce contraseña. Mínimo 8 caracteres." required />
              </div>
              <div>
                <label for="password2">Confirmar contraseña</label>
                <input type="password" id="password2" minLength={8} maxLength={30} placeholder="Repite contraseña" required />
              </div>
            </div>
            <div class="labelCheckbox">
              <input id="formRegistroCheckbox" class="verificacion" type="checkbox" required />
              <label for="formRegistroCheckbox"> He leido y estoy de acuerdo con los <a href="#" id="abrirModal">terminos y condiciones</a>.
              </label>
            </div>
            <div class="capt">
            <ReCaptcha onChange={handleRecaptchaChange} required />
            </div>
            <div class="formBot">
              <button id="formBotReg" onClick={handleSubmit}>Registrarse</button>
            </div>
              <div class="formBot">¿Tienes cuenta?. Identifícate <span id="btF2">aquí</span>.</div>
          </form>
          </div>
        </div>

        <div id="myModal" class="modal">
            <div class="modalContent">
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
        <Modal />
      </div>
    );
  }


  export default Formulario;