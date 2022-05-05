import React from 'react';


const Footer = () => {
    const year=new Date().getFullYear()
    return (
        <div className='py-5 text-white ' style={{background:'rgb(33, 37, 41)'}}>
           
            <div className='flex gap-2 justify-center items-center py-3'>
                
                <a href='https://www.facebook.com/mak00143/' target={"blank"} ><i class="fa-brands fa-facebook"></i></a>
                <a href='https://www.facebook.com/mak00143/' target={"blank"} > <i class="fa-brands fa-twitter"></i></a>
                <a href='https://www.facebook.com/mak00143/' target={"blank"} ><i class="fa-brands fa-instagram"></i></a>
                <a href='https://www.facebook.com/mak00143/' target={"blank"} > <i class="fa-brands fa-youtube"></i></a>
                <a href='https://www.facebook.com/mak00143/' target={"blank"} > <i class="fa-solid fa-envelope"></i></a>


               
                
               
               
            </div>
            <div><small>Copyright &copy; {year}  </small></div>
        </div>
    );
};

export default Footer;