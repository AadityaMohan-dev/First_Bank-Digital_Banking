import { Switch } from '@mui/material'
import React from 'react'

function Prefrence() {
  return (
    <>
    <div id="prefence-container" className='py-5'>
        <div id="input-container" className='flex justify-around'>
        <div id="currency" className='grid gap-2'>
            <label htmlFor="currency" className=' text-slate-500 capitalize font-normal text-xl'>Currency</label>
            <select name="currency" id="currency" className='h-10 border rounded-lg w-80  px-3 font-normal'>
            <option value="volvo">USD</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
        </div>
        <div id="name" className='grid gap-2'>
            <label htmlFor="name" className=' text-slate-500 capitalize font-normal text-xl'>Time Zone</label>
            <select name="time-zone" id="time-zone" className='h-10 border rounded-lg w-80  px-3 font-normal'>
            <option value="volvo">USD</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
        </div>
        </div>
        <div id="notification-settings" className='px-20 pt-8'>
            <span className=' text-black capitalize font-normal text-xl  '>Notification</span>
            <div id="options" className='py-5'>
                <div id="optn"className='flex items-center gap-4'>
                    <Switch sx={{ m: 1 }} defaultChecked />
                    <span className='text-xl text-slate-400'>I send or recive digital currency</span>
                </div>
                <div id="optn"className='flex items-center gap-4'>
                    <Switch sx={{ m: 1 }} />
                    <span className='text-xl text-slate-400'>I recive merchant order</span>
                </div>
                <div id="optn"className='flex items-center gap-4'>
                    <Switch sx={{ m: 1 }} defaultChecked />
                    <span className='text-xl text-slate-400'>There are recommendation of my account</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Prefrence