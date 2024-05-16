import React, { useState } from "react";
import Menu from "../menu/Menu";
import Navbar from "../navbar/Navbar";

import Edit_profile from "./Settings/Edit_profile";
import Prefrence from "./Settings/Prefrence";
import Security from "./Settings/Security";

function Settings() {
  const [selectedoptn, SetSelectedOptn] = useState("edit");
  const [component, setComponent] = useState(<Edit_profile />);
  return (
    <>
      <div id="main-settings" className="w-screen  h-full bg-blue-100 ">
        <div id="nav-container" className="flex ">
          <div
            id="sidebar"
            className="p-5 w-64   h-screen drop-shadow  bg-white"
          >
            <Menu select="sett" />
          </div>
          <div id="right-side" className="w-full  ">
            <div
              id="navbar"
              className="w-full border  grid items-center h-20  bg-white drop-shadow "
            >
              <Navbar title="Settings" />
            </div>
            <div id="row-1-settings" className=" p-10">
              <div
                id="content-container"
                className="w-full bg-white rounded-xl px-10 py-5"
              >
                {/* customize radio button */}
                <div id="options" className="w-full  border-b flex gap-10 ">
                  <div
                    id="opt-edit"
                    onClick={() => {
                      SetSelectedOptn("edit"), setComponent(<Edit_profile />);
                    }}
                    className={`p-5 cursor-pointer hover:text-blue-500 font-semibold text-lg ${
                      selectedoptn == "edit"
                        ? "text-blue-900"
                        : "text-slate-400"
                    }`}
                  >
                    Edit Profile
                  </div>
                  <div
                    id="opt-pref"
                    onClick={() => {
                      SetSelectedOptn("pref"), setComponent(<Prefrence />);
                    }}
                    className={`p-5 cursor-pointer hover:text-blue-500 font-semibold text-lg  ${
                      selectedoptn == "pref"
                        ? "text-blue-900"
                        : "text-slate-400"
                    }`}
                  >
                    Prefence
                  </div>
                  <div
                    id="opt-secure"
                    onClick={() => {
                      SetSelectedOptn("secure"), setComponent(<Security/>);
                    }}
                    className={`p-5 cursor-pointer hover:text-blue-500 font-semibold text-lg ${
                      selectedoptn == "secure"
                        ? "text-blue-900"
                        : "text-slate-400"
                    }`}
                  >
                    Security
                  </div>
                </div>
                <div id="screen-outlet-settings">{component}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
