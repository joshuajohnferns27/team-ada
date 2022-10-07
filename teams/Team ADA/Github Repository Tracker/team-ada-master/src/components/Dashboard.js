import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Cards from "./Cards";
import AddUserTab from "./AddUserTab";
import SideOffCanvas from "./SideOffCanvas";
import TopNavBar from "./TopNavBar";
import Graph from "./Graph";
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
                <div
                  className="pb-5 pt-5 graph"
                  style={{ height: "700px", width: "700px" }}
                >
                  <Graph />
                </div>
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
