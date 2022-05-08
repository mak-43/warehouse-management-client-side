import React from 'react';

const Combo = () => {
    return (
        <div >
            <h2 className='py-2 text-4xl'>Services</h2>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 py-5 items-center'>
                <div>
                    <p><i class="fa-solid fa-truck-fast text-5xl"></i></p>
                    <h4>FAST,FREE SHIPPING</h4>
                    <p>Orders over Tk.2000 ship for free</p>
                </div>
                <div>
                    <p><i class="fa-solid fa-arrow-right-arrow-left text-5xl"></i></p>
                    <h4>EXCHANGE FROM ANY STORE</h4>
                    <p>You can exchange from any apex owned retail stores across Bangladesh within 15 days from the date of purchase</p>
                </div>
                <div>
                    <p><i class="fa-solid fa-headset text-5xl"></i></p>
                    <h4>CUSTOMER CARE</h4>
                    <p>Call +8801613900027</p>
                    <p>10.00am-6pm(Everyday)</p>
                </div>
            </div>
        </div>
    );
};

export default Combo;