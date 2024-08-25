"use client"
import SideBarIcons from "../components/sideBarIcons";
import 'bootstrap/dist/css/bootstrap.min.css';

// JavaScript bileşenlerini (dropdowns, modals, tooltips, vb.) kullanma

import Content from "../components/Content";
import SideBarContent from "../components/SideBarContent";
import { useState } from "react";

export default function Home() {
  const [displayStatus, setDisplayStatus] = useState("d-none");


  return (
    <div className="container-custom">
      <div className="d-flex justify-content-center">
        <div className="d-none d-lg-flex "  >
          <SideBarIcons displayStatus={displayStatus} setDisplayStatus={setDisplayStatus}/>
        </div>
        <div className="" style={{width: `${displayStatus=="d-none" ? "100%" : "93%"}`}} >
          <Content />
        </div>
      </div>
    </div>
  );
}
