import React from 'react'
import CoverNotify from '../images/cover-notifypug.webp'
import Notify1 from '../images/notify-1.webp'
import Notify2 from '../images/notify-2.webp'
import Notify3 from '../images/notify-3.webp'
import IconGoogle from '../images/icon-google.svg'
import IconArrow from '../images/icon-arrow.svg'

const NotifyPug = () => {
  return (
    <section className='max-w-[992px] mx-auto px-1'>
      <article className='overflow-hidden my-0'>   

        <div className='flex flex-col justify-center items-center m-auto text-center relative'>
          <div className='w-screen h-screen sm-max:hidden sm-max:invisible'></div>
          <div className='absolute top-[%15] text-start z-[2] sm-max:static sm-max:mt-20'>
            <div className='flex flex-col justify-center py-3 px-8 mt-2 sm-max:py-0 sm-max:px-4 sm-max:flex-row'>
              <h1 className='font-bold tracking-tight text-center'>Administrador de Notificaciones</h1>
            </div>
            <div className='flex flex-row mt-12 sm-max:flex-col'>
              <div className='w-full md:w-1/2 p-4 my-auto mx-0'>
                <h2 className='font-bold pt-14 text-color-text sm-max:text-lg'>Bienvenido a NotifyPug, tu nueva herramienta imprescindible para estar al tanto de las notificaciones recibidas de tus cuentas favoritas en Instagram.</h2>
                <p className='pt-2'>Descarga directamente a tu celular.</p>
                <div className='text-center pt-7'>
                  <a className='button' href='https://play.google.com/store/apps/details?id=com.hardev.instalog'>
                    <img className='w-4 h-4 my-0 mx-3' src={IconGoogle} alt='icon-google'/>
                      Google Play
                    <img className='w-4 h-4 my-0 mx-3' src={IconArrow} alt='icon-arrow'/>
                  </a>
                </div>
              </div>
              <div className='w-full md:w-1/2 m-auto p-12 h-auto md:p-8'> 
                <img className='w-full h-auto bg-color-block rounded-xl border-2 border-color-block' src={CoverNotify} alt='cover-NotifyPug'/>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-row mt-12 sm-max:flex-col-reverse'>
          <div className='w-full p-4 md:w-1/2'>
            <img className='w-[%90] h-full m-auto bg-color-block rounded-xl border-2 border-color-block' src={Notify1} alt='step-1'/>
          </div>
          <div className='w-full p-4 my-auto mx-0 md:w-1/2'>
            <h3 className='font-semibold pt-3'>Lista Personalizada</h3>
            <p className='pt-2'>Las notificaciones se organizan por fecha en una lista fácil de navegar.</p>
          </div>
        </div>
            
        <div className='flex flex-row mt-12 sm-max:flex-col'>
          <div className='w-full p-4 my-auto mx-0 md:w-1/2'>
            <h3 className='font-semibold pt-3'>Detalle Completo</h3>
            <p className='pt-2'>Explora el contenido detallado de cada notificación con un solo toque.</p>
          </div>
          <div className='w-full p-4 md:w-1/2'>
            <img className='w-[%90] h-full m-auto bg-color-block rounded-xl border-2 border-color-block' src={Notify2} alt='step-2'/>
          </div>
        </div>

        <div className='flex flex-row mt-12 sm-max:flex-col-reverse'>
          <div className='w-full p-4 md:w-1/2'>
            <img className='w-[%90] h-full m-auto bg-color-block rounded-xl border-2 border-color-block' src={Notify3} alt='step-3'/>
          </div>
          <div className='w-full p-4 my-auto mx-0 md:w-1/2'>
            <h3 className='font-semibold pt-3'>Acceso Rápido al Perfil</h3>
            <p className='pt-2'>Dirígete directamente al perfil del usuario desde la aplicación.</p>
          </div>
        </div>

        <div className='flex flex-col justify-center py-3 px-8 mt-14'>
          <h3 className='text-center text-3xl'>¿Cómo Funciona?</h3>
          <ul className='list-disc'>
            <li className='text-base'>Elige tus cuentas favoritas en Instagram.</li>
            <li className='text-base'>Recibe las notificaciones y se registran en la aplicación.</li>
            <li className='text-base'>Explora el detalle y dirígete al perfil con facilidad.</li>
            <li className='text-base'>Las Notificaciones se registran localmente y se pueden borrar en cualquier momento.</li>
          </ul>
          <h4 className='text-center mt-9'>Descarga ahora y mantente conectado con tus influencers, amigos y contenidos favoritos.</h4>
          <div className='text-center'>
            <a className='button' href='https://play.google.com/store/apps/details?id=com.hardev.instalog'>
              <img className='w-4 h-4 my-0 mx-3' src={IconGoogle} alt='icon-google'/>
                Google Play
              <img className='w-4 h-4 my-0 mx-3' src={IconArrow} alt='icon-arrow'/>
            </a>
          </div>
        </div>

      </article>
    </section>
  )
};
  
export default NotifyPug;