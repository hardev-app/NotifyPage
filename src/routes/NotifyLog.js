import React, {useEffect} from "react";

import Cover from "../images/cover.webp";
import Notify1 from "../images/notify-1.webp";
import Notify2 from "../images/notify-2.webp";
import Notify3 from "../images/notify-3.webp";

import IconGoogle from "../images/icon-google.svg";
import IconArrow from "../images/icon-arrow.svg";

import AOS from 'aos';
import 'aos/dist/aos.css';

import "../styles/Notifylog.css";

const NotifyLog = () => {
    useEffect(() => {
      AOS.init({
        offset: 260,
        duration: 900,
      });
    }, [])
    return (
        <section className="section-md">
          <article>
            <div className="title">
              <h1 class="font-bold tracking-tight" data-aos="fade-up">Notify Log</h1>
            </div>
            <div className="content-presentation">
              <div className="content-text full-50" data-aos="flip-up">
                <h3>Bienvenido a tu nueva herramienta imprescindible para estar al tanto de las notificaciones recibidas de tus cuentas favoritas en Instagram.</h3>
                <p>Descarga directamente desde tu celular.</p>
                <div class="action">
                  <a class="button" href="https://play.google.com/store/apps/details?id=com.hardev.instalog">
                    <img className="img" src={IconGoogle} alt="Notify Log"/>
                    Google Play
                    <img className="img" src={IconArrow} alt="Notify Log"/>
                  </a>
                </div>
              </div>
              <div className="content-image full-50" data-aos="fade-up">
                <img className="img" src={Cover} alt="Notify Log"/>
              </div>
            </div>
            <div className="conten-step1">
              <div className="content-image full-50" data-aos="fade-up">
                <img className="img" src={Notify1} alt="Notify Log"/>
              </div>
              <div className="content-text step1-text full-50" data-aos="flip-up">
                <h4>Lista Personalizada</h4>
                <p>Las notificaciones se organización por fecha en una lista fácil de navegar.</p>
              </div>
            </div>
            <div className="conten-step2">
              <div className="content-text step2-text full-50" data-aos="flip-up">
                <h4>Detalle Completo</h4>
                <p>Explora el contenido detallado de cada notificación con un solo toque.</p>
              </div>
              <div className="content-image full-50" data-aos="fade-up">
                <img className="img" src={Notify2} alt="Notify Log"/>
              </div>
            </div>
            <div className="conten-step3">
              <div className="content-image full-50" data-aos="fade-up">
                <img className="img" src={Notify3} alt="Notify Log"/>
              </div>
              <div className="content-text step3-text full-50" data-aos="flip-up">
                <h4>Acceso Rápido al Perfil</h4>
                <p>Dirígete directamente al perfil del usuario desde la aplicación.</p>
              </div>
            </div>
            <div className="subtitle" data-aos="zoom-in-up">
              <h4 className="ask">¿Cómo Funciona?</h4>
              <ul>
                  <li class="list-item">Elige tus cuentas favoritas en Instagram.</li>
                  <li class="list-item">Recibe las notificaciones y se registran en la aplicación.</li>
                  <li class="list-item">Explora el detalle y dirígete al perfil con facilidad.</li>
                  <li class="list-item">Las Notificaciones se registran localmente y se pueden borrar en cualquier momento.</li>
              </ul>
              <h5>Descarga ahora y mantente conectado con tus influencers, amigos y contenidos favoritos.</h5>
              <div class="action">
                <a class="button" href="https://play.google.com/store/apps/details?id=com.hardev.instalog">
                  <img className="img" src={IconGoogle} alt="Notify Log"/>
                  Google Play
                  <img className="img" src={IconArrow} alt="Notify Log"/>
                </a>
              </div>
            </div>
          </article>
        </section>
    )
};
  
export default NotifyLog;