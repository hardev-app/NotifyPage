import React from 'react';
import imgLogo from "../images/logo.png"
import '../index.css'; 

const PrivacyPolicy = () => {
  return (
    <div className='container'>
      <h2>POLÍTICA DE PRIVACIDAD</h2>

      <p>En estas Política de Privacidad se detallan aspectos relevantes sobre la recopilación y el manejo de la información del Usuario a través del funcionamiento <b>Notify Log</b> de <b>Hardev App</b>.
        Esta política está vinculada y sujeta a las Condiciones de Servicio de Hardev App. Al utilizar los servicios usted acepta los términos establecidos en esta Política de Privacidad y en los Términos de Uso.</p>

      <h3>Almacenamiento de Información</h3>
      <p>Los datos que se recopilan en la aplicación se guardarán de manera segura e interna en tu dispositivo móvil y no existe algún respaldo o publicación de la misma en alguna base de datos en línea. Así mismo esta información no se le da acceso a otras aplicaciones de terceros.
        Al desinstalar la aplicación, todos los datos almacenados se eliminarán de manera permanente. También se cuenta con la opción dentro de la aplicación de eliminar los registros en cualquier momento.</p>

      <h3>Modificaciones y Actualizaciones de la Política de Privacidad</h3>
      <p>Esta Política de Privacidad está sujeta a revisiones y cambios sin previo aviso. Le recomendamos que las consulte regularmente para mantenerse informado sobre cualquier cambio que pueda haberse realizado.</p>

      <p>Actualización: 5 de Diciembre 2023</p>

      <img className='img' src={imgLogo} alt="Logo Notify Log" />
    </div>
  )
};

export default PrivacyPolicy;