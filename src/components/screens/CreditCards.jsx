import React from 'react'
import Menu from '../menu/Menu'
import Navbar from '../navbar/Navbar'

function CreditCards() {
  return (
    <>
      <div id="main-dashboard" className="w-screen  h-full bg-blue-100 ">
    <div id="nav-container" className="flex ">
        <div id="sidebar" className='p-5 w-64  h-screen drop-shadow  bg-white'><Menu select = "cc"/></div>
        <div id="right-side" className="w-full  ">
        <div id="navbar" className='w-full border  grid items-center h-20  bg-white drop-shadow '><Navbar title='Credit Cards'/></div>
       </div>
       </div>
       </div>
    </>
  )
}

export default CreditCards