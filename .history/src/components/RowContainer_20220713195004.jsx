import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import {motion} from 'm'
const RowContainer = ({flag}) => {
    return (
        <div className={`w-full my-12 ${flag ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
            <div className='w-300 md:w-225 h-auto my-12 backdrop-blur-lg'>
                <div className='w-full flex items-center justify-between'>
                    <img className='w-40 -mt-8' alt="addtocart" src='http://localhost:3000/static/media/bacxiu.4e050beccc5ca9bcfce2.png'/>
                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md">
                        <MdShoppingBasket className='text-white'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RowContainer;