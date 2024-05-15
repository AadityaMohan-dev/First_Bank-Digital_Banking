import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
function Edit_profile() {
  return (
    <>
    <div id="user-details-update" className=' flex gap-12 py-14'>
            <div id="edit-profile-pic" className='flex items-baseline justify-center gap-0'>
              <div id="profile-pic" className='border border-black rounded-full h-40 w-40 object-contain overflow-hidden '>
                <img src="https://wallpapers.com/images/high/baji-tokyo-revengers-crossing-street-gjc2warke51n3guw.webp" alt="" className='object-cover h-40 w-40' />
              </div>
              <div id="edit-btn" className='border border-black cursor-pointer rounded-full h-10 w-10 bg-blue-900 flex px-2 items-center text-white'><EditIcon/></div>
            </div>
            <div id="edit-details" className='w-full'>
                <form action="" className='flex justify-around'>
                    <div id="left-side" className=''>
                      <div id="name" className='grid gap-2'>
                        <label htmlFor="name" className=' text-slate-500 capitalize font-normal text-xl'>Your Name</label>
                      <input type="text" className='h-10 border rounded-lg w-80  px-3 font-normal' placeholder='Aaditya Mohan'/>
                      </div>
                      <div id="email" className='grid gap-2 mt-3'>
                        <label htmlFor="email" className=' text-slate-500 capitalize font-normal text-xl'>Email</label>
                      <input type="email" className='h-10 border rounded-lg w-80  px-3 font-normal' placeholder='user@gmail.com'/>
                      </div>
                      <div id="dob" className='grid gap-2 mt-3'>
                        <label htmlFor="dob" className=' text-slate-500 capitalize font-normal text-xl'>Date of Birth</label>
                      <input type="text" className='h-10 border rounded-lg w-80  px-3 font-normal' placeholder='19 April 2000'/>
                      </div>
                      <div id="pa" className='grid gap-2 mt-3'>
                        <label htmlFor="pa" className=' text-slate-500 capitalize font-normal text-xl'>Parment Address</label>
                      <input type="text" className='h-10 border rounded-lg w-80  px-3 font-normal' placeholder='San Joes, Califonia, USA'/>
                      </div>
                      <div id="postal-code" className='grid gap-2 mt-3'>
                        <label htmlFor="postal-code" className=' text-slate-500 capitalize font-normal text-xl'>Postal Code</label>
                      <input type="number" className='h-10 border rounded-lg w-80  px-3 font-normal' placeholder='45962'/>
                      </div>
                    </div>
                    <div id="right-side">
                    <div id="user-name" className='grid gap-2 '>
                        <label htmlFor="user-name" className=' text-slate-500 capitalize font-normal text-xl'>User Name</label>
                      <input type="text" className='h-10 border rounded-lg w-80  px-3 font-normal' placeholder='aadi@1234'/>
                      </div>
                      <div id="password" className='grid gap-2 mt-3'>
                        <label htmlFor="password" className=' text-slate-500 capitalize font-normal text-xl'>Password</label>
                      <input type="password" className='h-10 border rounded-lg w-80  px-3 font-normal' placeholder='********'/>
                      </div>
                      <div id="present-address" className='grid gap-2 mt-3'>
                        <label htmlFor="present-address" className=' text-slate-500 capitalize font-normal text-xl'>present address</label>
                      <input type="text" className='h-10 border rounded-lg w-80  px-3 font-normal' placeholder='San Joes, Calafonia, USA'/>
                      </div>
                      <div id="city" className='grid gap-2 mt-3'>
                        <label htmlFor="city" className=' text-slate-500 capitalize font-normal text-xl'>city</label>
                      <input type="text" className='h-10 border rounded-lg w-80  px-3 font-normal' placeholder='Califonia'/>
                      </div>
                      <div id="country" className='grid gap-2 mt-3'>
                        <label htmlFor="country" className=' text-slate-500 capitalize font-normal text-xl'>country</label>
                      <input type="text" className='h-10 border rounded-lg w-80  px-3 font-normal' placeholder='USA'/>
                      </div>

                      <div id="btn" className='flex justify-end mt-10'>
                      <button className='w-48 bg-blue-800 text-white flex justify-center text-xl  p-3 rounded-xl'>Save</button>
                      </div>

                    </div>
                </form>
            </div>
          </div>
    </>
  )
}

export default Edit_profile