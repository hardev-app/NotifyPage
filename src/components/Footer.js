const Footer = () => {
    return (
        <footer className='bg-[#f8f8f8] h-20 border-t border-gray-200'>
            <div className='flex justify-center w-4/5 mx-auto'>
                <p className='m-4'>© {new Date().getFullYear()} Hardev App. All rights reserved.</p>
            </div>
        </footer>
    )
};
  
export default Footer;