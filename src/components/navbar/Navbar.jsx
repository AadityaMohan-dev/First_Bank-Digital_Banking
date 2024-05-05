import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
function Navbar(props) {
  return (
    <nav>
      <div
        id="main-nav"
        className=" flex items-center justify-between px-10 w-full"
      >
        <div id="left-title" className="text-3xl font-semibold">
          {props.title}
        </div>
        <div id="right-box" className="h-10  w-96 flex justify-around">
          <div id="srch" className="flex items-center justify-start h-full">            
                <div id="srch-icon" className="absolute px-3 "><SearchIcon /></div>
                <input type="text"  placeholder="search..." className="h-full px-10 w-48 rounded-md bg-slate-200"/>
          </div>
          <div id="stng" className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center"><SettingsIcon className="text-gray-600 "/></div>
          <div id="notify" className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center"><NotificationsNoneIcon className="text-red-600 "/></div>
          <div id="profile" className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center"><PersonIcon className="text-gray-600 "/></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
