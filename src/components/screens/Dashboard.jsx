import React from "react";
import Card from "./Card/Card";
import { BarChart } from "@mui/icons-material";
import Navbar from "../navbar/Navbar";
import Menu from "../menu/Menu";


function Dashboard() {
  return (
    <>
     
      <div id="main-dashboarde" className="w-screen  bg-blue-100 ">
        <div id="nav-container" className="flex ">
        <div id="sidebar" className='p-5 w-64  h-screen drop-shadow  bg-white'><Menu/></div>
        <div id="right-side" className="w-full">
        <div id="navbar" className='w-full border  grid items-center h-20  bg-white drop-shadow '><Navbar title='Overview'/></div>
        <div id="row-1-dash" className="w-full border flex justify-between p-10 bg-blue-100">
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
                    <a href="">See all</a>
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

                <div id="barcart">
                  <div id="weekly-activity">
                    <div
                      id="head-r-t"
                      className="text-xl text-blue-950 font-semibold capitalize"
                    >
                      Weekly Activity
                    </div>
                    <div
                      id="t-card-container"
                      className="h-52 w-full mt-5 pt-10 bg-white rounded-2xl "
                    ></div>
                  </div>
                </div>
              </div>
              <div id="col-1">
                <div id="transaction" className="pl-5">
                  <div
                    id="head-r-t"
                    className="text-xl text-blue-950 font-semibold capitalize"
                  >
                    Recent transaction
                  </div>
                  <div
                    id="t-card-container"
                    className="h-52 w-80 mt-5 pt-10 bg-white rounded-2xl "
                  >
                    <div
                      id="row"
                      className="border boreder-blak w-full h-12 bg-red-400"
                    ></div>
                    <div
                      id="row"
                      className="border boreder-blak w-full h-12 bg-blue-400"
                    ></div>
                    <div
                      id="row"
                      className="border boreder-blak w-full h-12 bg-green-400"
                    ></div>
                  </div>
                </div>
                <div id="expense" className="p-5">
                  <div
                    id="head-r-t"
                    className="text-xl text-blue-950 font-semibold capitalize"
                  >
                    Expense Statistics
                  </div>
                  <div
                    id="t-card-container"
                    className="h-52 w-80 mt-5 pt-10 bg-white rounded-2xl "
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        </div>
        
      </div>
    </>
  );
}

export default Dashboard;
