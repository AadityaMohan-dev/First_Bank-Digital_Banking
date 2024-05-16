import React from 'react'
import Menu from '../menu/Menu'
import Navbar from '../navbar/Navbar'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import GppGoodIcon from '@mui/icons-material/GppGood';

import PaidIcon from '@mui/icons-material/Paid';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

function Services() {
  const card_row_data = [{icon : <HealthAndSafetyIcon/>, title : 'life insurance', des : "unlimited protection" },
  {icon : <LocalMallIcon/>, title : 'shopping', des : "buy think grow" },
  {icon : <GppGoodIcon/>, title : 'safety', des : "we are your allied" }]

  const card_list_data =[{icon :<PaidIcon/> , title : 'business loan', des :'lorem ispum'},
  {icon :<HomeRepairServiceIcon/> , title : 'checking account', des :'lorem ispum'},
  {icon :<BarChartIcon/> , title : 'saving account', des :'lorem ispum'},
  {icon :<PersonIcon/> , title : 'debit and credit card', des :'lorem ispum'},
  {icon :<GppGoodIcon/> , title : 'life insurance', des :'lorem ispum'}]
  return (
    <>
      <div id="main-dashboard" className="w-screen  h-full bg-blue-100 ">
       <div id="nav-container" className="flex">
        <div id="sidebar" className='p-5 w-64  h-screen drop-shadow  bg-white'><Menu select = 'serv'/></div>
        <div id="right-side" className="w-full">
        <div id="navbar" className='w-full  border  grid items-center h-20  bg-white drop-shadow '><Navbar title='Services'/></div>
        
        <div id="row-1" className='px-10 py-5 flex justify-between'>
          {card_row_data.map(items => {
            return <div id="card-row" className='w-56 h-20 bg-white rounded-xl'>
            <div id="content" className='flex justify-around items-center py-3 gap-2'>
              <div id="icon" className='rounded-full align-middle bg-slate-100 text-blue-900 p-2'>{items.icon}</div>
              <div id="title-d" className='grid'>
                <div id="title" className='text-blue-900 font-semibold capitalize text-lg'>{items.title}</div>
                <div id="des" className='text-slate-400 text-sm capitalize font-semibold'>{items.des}</div>
              </div>
            </div>
          </div>
          })}
        
       </div>

       <div id="row-2" className='px-10 '>
        <h1 className='text-xl font-semibold capitalize'>bank service list</h1>

        <div id="content-list" className='py-4'>
          {card_list_data.map(items =>{
            return <div id="content-list-card" className='w-full h-16 bg-white rounded-xl flex justify-between gap-5 p-3 mb-3 items-center'>
            <div id="icon" className='rounded-xl align-middle bg-slate-100 text-blue-900 p-2'>{items.icon}</div>
            <div id="title-subtitle" className='w-48'>
              <div id="title" className='text-lg text-blue-900 capitalize font-semibold '>{items.title}</div>
              <div id="sub-title" className='text-slate-400 text-sm capitalize font-semibold'>{items.des}</div>
            </div>
            <div id="title-subtitle" className='w-48'>
              <div id="title" className='text-lg text-blue-900 capitalize font-semibold '>{items.des}</div>
              <div id="sub-title" className='text-slate-400 text-sm capitalize font-semibold'>{items.des}</div>
            </div>
            <div id="title-subtitle" className='w-48'>
              <div id="title" className='text-lg text-blue-900 capitalize font-semibold '>{items.des}</div>
              <div id="sub-title" className='text-slate-400 text-sm capitalize font-semibold'>{items.des}</div>
            </div>
            <div id="title-subtitle" className='w-48'>
              <div id="title" className='text-lg text-blue-900 capitalize font-semibold '>{items.des}</div>
              <div id="sub-title" className='text-slate-400 text-sm capitalize font-semibold'>{items.des}</div>
            </div>
           
            <div id="btn" className='px-5 h-fit py-1 hover:border-white hover:text-white hover:bg-blue-800 cursor-pointer capitalize font-semibold border border-blue-800 text-blue-800 bg-white rounded-xl'>view details</div>
            </div>
          })}
          
        </div>
       </div>
       </div>
       
       </div>
       </div>
    </>
  )
}

export default Services