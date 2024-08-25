"use client"
import SideBarIcons from "../components/sideBarIcons";
import 'bootstrap/dist/css/bootstrap.min.css';

// JavaScript bileşenlerini (dropdowns, modals, tooltips, vb.) kullanma

import Content from "../components/Content";
import SideBarContent from "../components/SideBarContent";
import { useEffect, useState } from "react";

export default function Home() {
  const [displayStatus, setDisplayStatus] = useState("d-none");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 990) {
        setDisplayStatus("d-none");
      } else {
        setDisplayStatus(""); // Eğer d-none yerine başka bir değer kullanmak istiyorsanız burayı ayarlayın
      }
    };

    // Component ilk yüklendiğinde boyutu kontrol et
    handleResize();

    // Tarayıcı boyutu değiştikçe kontrol etmeye devam et
    window.addEventListener("resize", handleResize);

    // Cleanup event listener'ı kaldırır
    return () => window.removeEventListener("resize", handleResize);

  }, []);


  return (
    <div className="container-custom">
      <div className="d-flex justify-content-center">
        <div className="d-none d-lg-flex "  >
          <SideBarIcons displayStatus={displayStatus} setDisplayStatus={setDisplayStatus}/>
        </div>
        <div className="" style={{width: `${displayStatus=="d-none" ? "100%" : "72%"}`}} >
          <Content />
        </div>
      </div>
    </div>
  );
}
