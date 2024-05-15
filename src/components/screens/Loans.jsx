import React from "react";
import Menu from "../menu/Menu";
import Navbar from "../navbar/Navbar";
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DesignServicesIcon from '@mui/icons-material/DesignServices';


function Loans() {
  return (
    <div id="main-dashboarde" className="w-screen  h-full bg-blue-100 ">
      <div id="nav-container" className="flex  ">
        <div id="sidebar" className="p-5 w-64  h-screen drop-shadow  bg-white">
          <Menu select = 'loan'/>
        </div>
        <div id="right-side" className="w-full  ">
          <div
            id="navbar"
            className="w-full border  grid items-center h-20  bg-white drop-shadow "
          >
            <Navbar title="Loans" />
          </div>
          <div id="row-1-dash" className="flex justify-around py-10">
            <div id="cards" className="w-52 h-20 bg-white rounded-xl flex justify-around items-center">
              <div id="icon" className="text-blue-700 "><PersonIcon/></div>
              <div id="title-price" className="grid">
                  <span className="text-slate-500 font-semibold capitalize">Personal loan</span>
                  <span className="text-blue-950 font-bold ">$50,000</span>
              </div>
            </div>
            <div id="cards" className="w-52 h-20 bg-white rounded-xl flex justify-around items-center">
              <div id="icon" className="text-blue-700 "><WorkIcon/></div>
              <div id="title-price" className="grid">
                  <span className="text-slate-500 font-semibold capitalize">corporate loans</span>
                  <span className="text-blue-950 font-bold ">$100,000</span>
              </div>
            </div>
            <div id="cards" className="w-52 h-20 bg-white rounded-xl flex justify-around items-center">
              <div id="icon" className="text-blue-700 "><TrendingUpIcon/></div>
              <div id="title-price" className="grid">
                  <span className="text-slate-500 font-semibold capitalize">bussiness loan</span>
                  <span className="text-blue-950 font-bold ">$500,000</span>
              </div>
            </div>
            <div id="cards" className="w-52 h-20 bg-white rounded-xl flex justify-around items-center">
              <div id="icon" className="text-blue-700 "><DesignServicesIcon/></div>
              <div id="title-price" className="grid">
                  <span className="text-slate-500 font-semibold capitalize">custom loans</span>
                  <span className="text-blue-950 font-bold ">Choose Money</span>
              </div>
            </div>
          </div>
          <div id="row-1-loan" className='w-full px-10 grid gap-4'>
          <span className=' text-blue-950 font-semibold text-xl capitalize'>active loan overwiew</span>
          <div id="radio-btns"></div>
          <table className='w-full rounded-xl bg-white p-10'>
            <tr className=' rounded-xl h-14'>
              <th className='font-medium text-slate-400 capitalize'>SL No.</th>
              <th className='font-medium text-slate-400 capitalize'>Loan Money</th>
              <th className='font-medium text-slate-400 capitalize'>Left to repay</th>
              <th className='font-medium text-slate-400 capitalize'>Duration</th>
              <th className='font-medium text-slate-400 capitalize'>Intrest rate</th>
              <th className='font-medium text-slate-400 capitalize'>Installment</th>
              <th className='font-medium text-slate-400 capitalize'>Repay</th>
            </tr>
            <tr className='rounded-xl border h-14 w-full items-center'>
              <td className='pl-10 py-5 capitalize'>01.</td>
              <td className='pl-10 py-5 capitalize'>$10,000</td>
              <td className='pl-10 py-5 capitalize'>$40,500</td>
              <td className='pl-10 py-5 capitalize'>8 months</td>
              <td className='pl-10 py-5 capitalize'>12%</td>
              <td className='pl-10 py-5 capitalize'>$2000 / month</td>
              <td className='pl-10 py-5 capitalize'><div id="btn" className='rounded-3xl border  hover:text-white hover:bg-blue-700 cursor-pointer border-blue-700 text-blue-700 px-3 py-1 w-fit flex justify-center'>repay</div></td>
            </tr>
            <tr>
              <td className="pl-10 py-5 text-red-600 capitalize">total</td>
              <td className="pl-10 py-5 text-red-600 capitalize">$10,000</td>
              <td className="pl-10 py-5 text-red-600 capitalize">$40,500</td>
              <td className="pl-10 py-5 text-red-600 capitalize"></td>
              <td className="pl-10 py-5 text-red-600 capitalize"></td>
              <td className="pl-10 py-5 text-red-600 capitalize">$2000 / month</td>
              <td className="pl-10 py-5 text-red-600 capitalize"></td>
            </tr>
            
            
          </table>
        </div>
        </div>
      </div>
    
    </div>
  );
}

export default Loans;
