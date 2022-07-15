import React from 'react';
import delivery from '../assets/imgs/delivery.png';
import HeroBg from '../assets/imgs/heroBg.png';

const HomeContainer = () => {
    return (
        <section id="home" className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
            <div className='py-2 flex flex-1 flex-col items-start  justify-center gap-8'>
                <div className='flex items-center gap-2 justify-center'>
                    <p className='text-base text-orange-500 font-semibold bg-orange-100 px-4 py-1 rounded-full'>Bike Delivery</p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img src={delivery} className="w-full h-full object-contain" alt="deli"/>
                    </div>
                </div>
                <p className='text-[2.5rem] font-bold tracking-wide text-headingColor lg:text-[4.5rem]'>The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span></p>
                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam, magni tempore distinctio accusantium alias similique suscipit numquam est, quidem iusto molestiae omnis qui repellendus nam. Numquam ab voluptatem qui.</p>
                <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out md:w-auto'>Order Now</button>
            </div>
            <div className='py-2 flex-1 flex items-center'>
                <img src={HeroBg} className="ml-auto h-420 w-full lg:w-auto lg:h-650" alt="hero-bg"/>
                <div className='w-full h-full absolute flex items-center justify-center'></div>
                <div className='w-fu'></div>
            </div>
        </section>
    );
};

export default HomeContainer;