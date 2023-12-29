import React from 'react';
import imgLogo from "../images/logo.png"
import '../App.css'; 

const PrivacyPolicy = () => {
  return (
    <div className='container'>
      <h2>POLÍTICA DE PRIVACIDAD</h2>

      <p>En estas Política de Privacidad se detallan aspectos relevantes sobre la recopilación y el manejo de la información del Usuario a través del funcionamiento <b>Notify Log</b> de <b>Hardev App</b>.
        Esta política está vinculada y sujeta a las Condiciones de Servicio de Hardev App. Al utilizar los servicios usted acepta los términos establecidos en esta Política de Privacidad así como en los Términos y Condiciones.</p>

      <p><a href="https://hardev-app.github.io/NotifyPage/terms">Términos y Condiciones.</a></p>

      <h3>Almacenamiento de Información</h3>
      <p>Los datos que se recopilan en la aplicación se almacenan de manera segura e interna en tu dispositivo móvil y no existe algún respaldo o publicación de la misma en alguna base de datos en línea. Así mismo esta información no se le da acceso a otras aplicaciones de terceros.
        Al desinstalar la aplicación, todos los datos almacenados se eliminarán de manera permanente. También se cuenta con la opción dentro de la aplicación de eliminar los registros en cualquier momento.</p>

      <h3>Colección de Datos</h3>
      <p>La aplicación utiliza servicios de terceros que pueden recopilar información para identificarle.
        A continuación se presentan los enlaces a la política de privacidad de los proveedores de servicios de terceros utilizados por la aplicación:</p>

      <p>Google Play Services</p>
      <p><a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a></p>
      <p>AdMob</p>
      <p><a href="https://support.google.com/admob/answer/6128543">https://support.google.com/admob</a></p>

      <h3>Publicidad</h3>
      <p>Dentro de la aplicación encontraras anuncios proporcionados por AdMob. Es un servicio de publicidad proporcionado por Google que puede recopilar y utilizar datos anónimos para personalizar los anuncios para el usuario.
        Por defecto, el procesamiento de datos en AdMob no está restringido y se mostrarán anuncios personalizados.</p>

      <h3>Modificaciones y Actualizaciones de la Política de Privacidad</h3>
      <p>Esta Política de Privacidad está sujeta a revisiones y cambios sin previo aviso. Le recomendamos que las consulte regularmente para mantenerse informado sobre cualquier cambio que pueda haberse realizado.</p>

      <h3>Contacto</h3>
      <p>Si tiene alguna pregunta o comentario, póngase en contacto con nosotros en hardev.app@gmail.com</p>

      <p>Actualización: 28 de Diciembre 2023</p>

      <img className='img' src={imgLogo} alt="Logo Notify Log" />
    </div>
  )
};

export default PrivacyPolicy;