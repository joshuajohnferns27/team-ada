import React, { useEffect, useState } from "react";

import "./Dashboard.css";
import Cards from "./Cards";
import AddUserTab from "./AddUserTab";
import SideOffCanvas from "./SideOffCanvas";
import TopNavBar from "./TopNavBar";
function Dashboard() {
  return (
    <>
      <TopNavBar />
      <SideOffCanvas />
      <div className="container ">
        <div className="row box">
          <div className="centrebox ">
            <div className="main_box  panel border ">
              <div className="panel-heading">
                <h3 className="p-3 font-weight-bold">Dashboard</h3>

                <Cards />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddUserTab />
    </>
  );
}

export default Dashboard;
