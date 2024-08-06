const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center m-auto max-w-5xl'>
      <div className='w-lvw h-lvh bg-gradient-to-r from-color1 to-color3'>
        <canvas id='canvas'></canvas>
      </div>
      <div className='absolute top-1/3 z-[2]'>
        <h1 className='text-color5 text-4xl font-bold text-center'>HARDEV APP</h1>
      </div>
    </div>
  )
};

export default Home;