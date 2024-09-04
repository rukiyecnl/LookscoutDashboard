"use client"
// import SideBarIcons from "../components/sideBarIcons";

import dynamic from "next/dynamic";
import 'bootstrap/dist/css/bootstrap.min.css';
const SideBarIcons = dynamic(() => import("../components/sideBarIcons"), { ssr: false });
const Content = dynamic(() => import("../components/Content"), { ssr: false });

// JavaScript bileşenlerini (dropdowns, modals, tooltips, vb.) kullanma

// import Content from "../components/Content";
import SideBarContent from "../components/SideBarContent";
import { useEffect, useState } from "react";
import { UseTheme } from "../store/context";

export default function Home() {
  const {theme, setTheme} = UseTheme();
  const [displayStatus, setDisplayStatus] = useState("d-none");
  
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
}, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.className = theme;
    }
  }, [theme]);


  return (
    <div className="container-custom">
      <div className="d-flex">
        <div className="d-none d-lg-flex "  >
          <SideBarIcons displayStatus={displayStatus} setDisplayStatus={setDisplayStatus}/>
        </div>
        <div className="" style={{ height:"100vh", overflow:"auto", flexGrow: "1"}} >
          <Content />
        </div>
      </div>
    </div>
  );
}
