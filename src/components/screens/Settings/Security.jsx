import { Switch } from '@mui/material'
import React from 'react'

function Security() {
  return (
    <>
    <div id="security-container" className='p-5'>
    <div id="row-1">
        <h1 className="text-black capitalize  text-xl">Two-factor Authentication</h1>
        <div id="optn"className='flex items-center gap-4'>
        <Switch sx={{ m: 1 }} defaultChecked />
        <span className='text-md capitalize text-slate-400'>enable or disable two factor authentication</span>
        </div>
    </div>
    <div id="row-2" className=''>
        <h1 className="text-black capitalize   text-xl">Change Password</h1>
        <div id="c-p" className=' grid'>
        <label htmlFor="current-password" className=' text-slate-400 py-3 capitalize font-normal text-lg'>Current password</label>
        <input type="password" className='h-10 border rounded-lg w-72  px-3 font-normal' placeholder='*******'/>
        </div>

        <div id="u-p" className='py-3 grid'>
        <label htmlFor="updated-password" className=' text-slate-400 pb-3 capitalize font-normal text-lg'>updated password</label>
        <input type="password" className='h-10 border rounded-lg w-72  px-3 font-normal' placeholder='*******'/>
        </div>
    </div>
    <div id="btn" className='flex justify-end '>
        <button className='w-36 bg-blue-800 text-white flex justify-center text-xl  p-2 rounded-xl'>Save</button>
    </div>
    </div>
    </>
  )
}

export default Security