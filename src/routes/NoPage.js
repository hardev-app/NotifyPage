import PathConstants from '../routes/pathConstants'

const Page404 = () => {
    return (
        <> 
        <main className='grid min-h-full h-lvh m-0 p-0 place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
            <div className='text-center'>
                <p className='text-lg font-semibold text-color1'>404</p>
                <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>Pagina no encontrada</h1>
                <p className='mt-6 text-base leading-7 text-gray-600'>Lo sentimos, no hemos podido encontrar la página que busca.</p>
                <div className='mt-10 flex items-center justify-center gap-x-6'>
                    <a href={PathConstants.HOME} className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:scale-[1.02] hover:text-gray-300 hover:bg-[#333] button'>
                        Regresar a casa
                    </a>
                </div>
            </div>
        </main>
        </>
    )
};
  
export default Page404;