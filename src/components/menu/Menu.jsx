import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PaymentsIcon from "@mui/icons-material/Payments";
import PersonIcon from "@mui/icons-material/Person";
import BarChartIcon from "@mui/icons-material/BarChart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import TungstenIcon from "@mui/icons-material/Tungsten";
import SettingsIcon from "@mui/icons-material/Settings";
import PaidIcon from "@mui/icons-material/Paid";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from '../../assets/img_header_logo.png'
import { Link } from "react-router-dom";

function Menu(props) {
  const [selected, setSelected] = useState(props.select);
  return (
    <>
      <div
        id="main-menu-container"
      >
      <div id="logo-sidemenu" className="inline-flex sm:block justify-between ">
      <div id="logo" className="w-32 sm:w-44">
          <img
            src={logo} alt=""
          />
        </div>
        <div
          id="sidemenu-options-container"
          className=" sm:px-3 sm:py-3 text-sm font-semibold sm:text-xl text-gray-500"
        >
          <div
            id="hamburger"
            className="w-10 h-10 sm:w-0 sm:h-0 block sm:hidden"
          >
            <div id="sidebar-icon" className="">
            <div id="menu-ham" className="block">
              <MenuIcon />
            </div>
            <div id="ham-menu" className="hidden">
              <CloseIcon />
            </div>
            </div>
          </div>
        </div>
      </div>

         <div id="options" className="sm:block sm:bg-transparent px-3 grid justify-end text-sm font-semibold sm:text-xl text-gray-500 z-10">
         <div id="optn" className="w-56 sm:w-fit sm:p-0 sm:bg-transparent p-5 bg-slate-300 rounded">
         <div id="opt-1" className="sm:py-3 py-2 ">
            <div id="icon-opt-container" className="">
              <Link to="/" className="flex align-middle gap-3">
              <HomeIcon />
              <span onClick={()=>{setSelected('dash')}} className={`hover:text-blue-700 cursor-pointer ${selected == 'dash'?'text-blue-900' : 'text-slate-500'}`}>
                Dashboard
              </span>
              </Link>
              
            </div>
          </div>
          <div id="opt-2" className="sm:py-3 py-2">
            <div id="icon-opt-container" className="flex align-middle gap-3">
              <Link to="/transaction" className="flex align-middle gap-3">
              <PaymentsIcon />
              <span onClick={()=>{setSelected('tran')}} className={`hover:text-blue-700 cursor-pointer ${selected == 'tran'?'text-blue-900' : 'text-slate-500'}`}>
                Transactions
              </span>
              </Link>
              
            </div>
          </div>
          <div id="opt-3" className="sm:py-3 py-2">
            <div id="icon-opt-container" className="flex align-middle gap-3">
              <Link to="/accounts" className="flex align-middle gap-3">
              <PersonIcon />
              <span onClick={()=>{setSelected('acc')}} className={`hover:text-blue-700 cursor-pointer ${selected == 'acc'?'text-blue-900' : 'text-slate-500'}`}>
                Accounts
              </span>
              </Link>
             
            </div>
          </div>
          <div id="opt-4" className="sm:py-3 py-2 ">
            <div id="icon-opt-container" className="flex align-middle gap-3">
              <Link to="/investments" className="flex align-middle gap-3">
              <BarChartIcon />
              <span onClick={()=>{setSelected('inv')}} className={`hover:text-blue-700 cursor-pointer ${selected == 'inv'?'text-blue-900' : 'text-slate-500'}`}>
                Investments
              </span>
              </Link>
              
            </div>
          </div>
          <div id="opt-5" className="sm:py-3 py-2">
            <div id="icon-opt-container" className="flex align-middle gap-3">
              <Link to="/credit-card" className="flex align-middle gap-3">
              <CreditCardIcon />
              <span onClick={()=>{setSelected('cc')}} className={`hover:text-blue-700 cursor-pointer ${selected == 'cc'?'text-blue-900' : 'text-slate-500'}`}>
                Credit Cards
              </span>
              </Link>
              
            </div>
          </div>
          <div id="opt-6" className="sm:py-3 py-2">
            <div id="icon-opt-container" className="flex align-middle gap-3">
              <Link to="/loans" className="flex align-middle gap-3">
              <PaidIcon />
              <span onClick={()=>{setSelected('loan')}} className={`hover:text-blue-800 cursor-pointer ${selected == 'loan' ? 'text-blue-900':'text-slate-500'}`}>Loans</span>
              </Link>
              </div>
          </div>
          <div id="opt-7" className="sm:py-3 py-2 ">
            <div id="icon-opt-container" className="flex align-middle gap-3">
              <Link to="/services" className="flex align-middle gap-3">
              <DesignServicesIcon />
              <span onClick={()=>{setSelected('serv')}} className={`hover:text-blue-700 cursor-pointer ${selected == 'serv'?'text-blue-900' : 'text-slate-500'}`}>
                Services
              </span>
              </Link>
              
            </div>
          </div>
          <div id="opt-8" className="sm:py-3 py-2  ">
            <div id="icon-opt-container" className="flex align-middle gap-3">
              <Link to="/priviliges" className="flex align-middle gap-3">
              <TungstenIcon />
              <span onClick={()=>{setSelected('priv')}} className={`hover:text-blue-700 cursor-pointer ${selected == 'priv'?'text-blue-900' : 'text-slate-500'}`}>
                My Priviliges
              </span>
              </Link>
              
            </div>
          </div>
          <div id="opt-9" className="sm:py-3 py-2  ">
            <div id="icon-opt-container" className="flex align-middle gap-3">
              <Link to="/settings" className={`flex align-middle gap-3`}>
              <SettingsIcon />
              <span onClick={()=>{setSelected('sett')}} className={`hover:text-blue-700 cursor-pointer ${selected == 'sett'?'text-blue-900' : 'text-slate-500'}`}>
                Settings
              </span>
              </Link>
              
            </div>
          </div>

         </div>
          </div>  
      </div>
    </>
  );
}

export default Menu;
