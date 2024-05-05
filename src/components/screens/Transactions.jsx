import React from 'react'
import Card from "./Card/Card";
import Navbar from '../navbar/Navbar';
import Menu from '../menu/Menu';
function Transactions() {
  return (
    <>
    
    <div id="main-dashboarde" className="w-screen  h-full bg-blue-100 ">
    <div id="nav-container" className="flex ">
        <div id="sidebar" className='p-5 w-64  h-screen drop-shadow  bg-white'><Menu/></div>
        <div id="right-side" className="w-full  ">
        <div id="navbar" className='w-full border  grid items-center h-20  bg-white drop-shadow '><Navbar title='Transactions'/></div>
        <div id="row-1-dash" className="flex justify-around py-10">
          <div id="my-card" className="w-full">
            <div id="card-container" className="flex flex-wrap justify-around">
              <div id="heads-card" className="">
                <div id="heads" className="w-full flex justify-between">
                  <div
                    id="head"
                    className="text-xl text-blue-950 font-semibold capitalize"
                  >
                    My Cards
                  </div>
                  <div
                    id="btn-show"
                    className="text-xl text-blue-950 font-semibold capitalize "
                  >
                    <a href="">+ Add Card</a>
                  </div>
                </div>
                <div id="cards" className="flex flex-wrap justify-around gap-4">
                  <div id="display-card" className="py-5">
                    <Card />
                  </div>
                  <div id="display-card" className="py-5">
                    <Card />
                  </div>
                </div>
              </div>
              <div id="col-1">
                <div id="my-expense">
                  <div
                    id="head-r-t"
                    className="text-xl text-blue-950 font-semibold capitalize"
                  >
                    My Expense
                  </div>
                  <div
                    id="exp-card-container"
                    className="h-52 w-80 mt-5 pt-10 bg-white rounded-2xl "
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="row-2-dash" className='w-full px-10 grid gap-4'>
          <span className='text-xl text-blue-950 font-semibold capitalize'>Recent Transaction</span>
          <div id="radio-btns"></div>
          <table className='w-full rounded-xl bg-white py-3'>
            <tr className=' rounded-xl h-14'>
              <th className='font-medium text-slate-400'>Description</th>
              <th className='font-medium text-slate-400'>Transaction id</th>
              <th className='font-medium text-slate-400'>Type</th>
              <th className='font-medium text-slate-400'>Card</th>
              <th className='font-medium text-slate-400'>Date</th>
              <th className='font-medium text-slate-400'>Amount</th>
              <th className='font-medium text-slate-400'>Recipet</th>
            </tr>
            <tr className='rounded-xl border h-14 w-full items-center'>
              <td className='pl-10 py-5'>spotify subscription</td>
              <td className='pl-10 py-5'>#12456798</td>
              <td className='pl-10 py-5'>shoping</td>
              <td className='pl-10 py-5'>123*****</td>
              <td className='pl-10 py-5'>05-05-2024</td>
              <td className='pl-10 py-5'>-$2500</td>
              <td className='pl-10 py-5'><div id="btn" className='rounded-3xl border hover:text-white hover:bg-blue-700 cursor-pointer border-blue-700 text-blue-700 px-3 py-1 w-fit flex justify-center'>download</div></td>
            </tr>
            
            
          </table>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Transactions