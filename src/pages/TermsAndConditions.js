import React from 'react';
import '../index.css'; 
import imgLogo from "../images/logo.png"

const TermsAndConditions = () => {
  return (
    <div className='container'>
      <h2>TÉRMINOS Y CONDICIONES</h2>
      
      <h3>Condiciones Generales</h3>
      <p>Al hacer uso de está aplicación, usted ratifica su aceptación de los términos de uso aquí presentados y se compromete a respetarlos.
      En caso de descargar la aplicación, se requerirá su aceptación de los términos establecidos de forma inmediata antes de su uso como usuario final de la aplicación.
      En el caso de no aceptar estas condiciones de uso, se le recomienda abstenerse de utilizar la aplicación.</p>

      <h3>Limitaciones sobre la Responsabilidad</h3>
      <p>Declinamos cualquier responsabilidad por daños resultantes de un uso indebido del sistema. 
        No asumimos responsabilidad alguna por costos, inconvenientes, pérdidas o daños ocasionados por interrupciones o fallas en la prestación de servicios o instalaciones, o en el acceso a nuestra aplicación, cuando dichas fallas sean resultado de circunstancias que se denominan fuera de nuestro control. 
        En caso de que un evento fuera de nuestro control afecte el cumplimiento de de las funciones dentro de la aplicación, dichas obligaciones se ajustarán durante el plazo y/o al final del tiempo que dure el evento fuera de nuestro control. 
        En tal caso, no asumimos responsabilidad alguna frente a usted por las consecuencias de cualquier incumplimiento.</p>

      <h3>Modificaciones</h3>
      <p>Nos reservamos el derecho de revisar y ajustar los términos y condiciones de uso en cualquier momento, realizando modificaciones de forma pertinente. 
        Consulte constantemente los posibles cambios, ya que son obligatorios para el uso de esta aplicación.</p>

      <h3>Limitaciones de Uso</h3>
      <p>Solo está autorizado el uso de la aplicación con fines legítimos, y se le prohíbe el uso en caso de:
        <ol>
          <li><b>Contra la ley</b>: No está permitido utilizar la aplicación de manera que infrinja cualquier ley o regulación local, nacional o internacional aplicable, así como los términos de cualquier acuerdo entre usted y la aplicación.</li>
          <li><b>Actividades ilegales o fraudulentas</b>: No se permite el uso de la aplicación con propósitos o fines ilegales o fraudulentos.</li>
          <li><b>Perjudicar a menores</b>: Queda estrictamente prohibido utilizar la aplicación con la intención de perjudicar o intentar perjudicar a menores de cualquier manera.</li>
        </ol>
        Cualquier uso no autorizado de la aplicación con fines contrarios a estos términos será objeto de medidas apropiadas y puede dar lugar a la terminación del uso de la aplicación.</p>

      <p>Actualización: 5 de Diciembre 2023</p>

      <img className='img' src={imgLogo} alt="Logo Notify Log" />
    </div>
  );
}

export default TermsAndConditions;