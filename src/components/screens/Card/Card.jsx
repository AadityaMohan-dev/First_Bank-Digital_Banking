import React from 'react'
import bank_logo from '../../../assets/bank_logo.png'
function Card() {
  return (
    <>
    <div id="main-card-container" >
        <div id="card" className='h-52 w-80 rounded-3xl bg-blue-800 text-white'>
            <div id="card-content" className='py-5'>
                <div id="row-1" className=' flex justify-around'>
                <div id="blance">
                    <div className='font-semibold'>Balance</div>
                    <div className='text-3xl'>$ 5756</div>
                </div>
                <div id="icon-sim">
                <img width="48" height="48" src="https://img.icons8.com/color/48/sim-card-chip.png" alt="sim-card-chip"/>
                </div>

                </div>
                <div id="row-2" className='py-3 flex justify-around'>
                    <div id="holder-name">
                        <div id='card-head-name' className='text-xs text-gray-300 uppercase'>card holder</div>
                        <div id="holder-name" className='text-md font-semibold capitalize'>Eddy Cussama</div>
                    </div>
                    <div id="validity">
                        <div id="val-head-name" className='text-xs text-gray-300 uppercase'>valid thru</div>
                        <div id="val" className='text-md font-semibold capitalize'>12/22</div>
                    </div>
                </div>
                <div id="row-3" className='flex justify-evenly items-center'>
                    <div id="card-number" className='text-lg font-bold'>3778 **** **** 1234</div>
                    <div id="bank-icon" className='flex justify-center w-12'><img src={bank_logo} alt="bank icon" loading='lazy'/></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card