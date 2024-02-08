import React, {useEffect} from "react";

import CoverNotify from "../images/cover-notifypug.webp";
import Notify1 from "../images/notify-1.webp";
import Notify2 from "../images/notify-2.webp";
import Notify3 from "../images/notify-3.webp";

import IconGoogle from "../images/icon-google.svg";
import IconArrow from "../images/icon-arrow.svg";

import AOS from 'aos';
import 'aos/dist/aos.css';

import "../styles/Notifylog.css";

const NotifyPug = () => {
    useEffect(() => {
      AOS.init({
        offset: 400,
        duration: 1000,
      });
    }, [])
    return (
        <section className="section-md">
          <article>
            
            <div className="header">

              <div className="section-canvas">
                {/* <canvas></canvas> */}
              </div>

              <div className="section-header">

                <div className="title">
                  <h1 className="font-bold tracking-tight">NotifyPug</h1>
                </div>
                
                <div className="content-presentation">
                  <div className="content-text full-50">
                    <h2>Bienvenido a tu nueva herramienta imprescindible para estar al tanto de las notificaciones recibidas de tus cuentas favoritas en Instagram.</h2>
                    <p>Descarga directamente a tu celular.</p>
                    <div className="action">
                      <a className="button" href="https://play.google.com/store/apps/details?id=com.hardev.instalog">
                        <img className="img" src={IconGoogle} alt="icon-google"/>
                          Google Play
                        <img className="img" src={IconArrow} alt="icon-arrow"/>
                      </a>
                    </div>
                  </div>
                  <div className="content-image full-50" data-aos="fade-up">
                    <img className="img" src={CoverNotify} alt="cover-NotifyPug"/>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="conten-step1">
              <div className="content-image full-50" data-aos="fade-up">
                <img className="img" src={Notify1} alt="step-1"/>
              </div>
              <div className="content-text step1-text full-50">
                <h3>Lista Personalizada</h3>
                <p>Las notificaciones se organizan por fecha en una lista fácil de navegar.</p>
              </div>
            </div>
            <div className="conten-step2">
              <div className="content-text step2-text full-50">
                <h3>Detalle Completo</h3>
                <p>Explora el contenido detallado de cada notificación con un solo toque.</p>
              </div>
              <div className="content-image full-50" data-aos="fade-up">
                <img className="img" src={Notify2} alt="step-2"/>
              </div>
            </div>
            <div className="conten-step3">
              <div className="content-image full-50" data-aos="fade-up">
                <img className="img" src={Notify3} alt="step-3"/>
              </div>
              <div className="content-text step3-text full-50">
                <h3>Acceso Rápido al Perfil</h3>
                <p>Dirígete directamente al perfil del usuario desde la aplicación.</p>
              </div>
            </div>
            <div className="subtitle" data-aos="zoom-in-up">
              <h3 className="ask">¿Cómo Funciona?</h3>
              <ul>
                  <li className="list-item">Elige tus cuentas favoritas en Instagram.</li>
                  <li className="list-item">Recibe las notificaciones y se registran en la aplicación.</li>
                  <li className="list-item">Explora el detalle y dirígete al perfil con facilidad.</li>
                  <li className="list-item">Las Notificaciones se registran localmente y se pueden borrar en cualquier momento.</li>
              </ul>
              <h4>Descarga ahora y mantente conectado con tus influencers, amigos y contenidos favoritos.</h4>
              <div className="action">
                <a className="button" href="https://play.google.com/store/apps/details?id=com.hardev.instalog">
                  <img className="img" src={IconGoogle} alt="icon-google"/>
                  Google Play
                  <img className="img" src={IconArrow} alt="icon-arrow"/>
                </a>
              </div>
            </div>
          </article>
        </section>
    )
};
  
export default NotifyPug;