"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../customCss/custom.css"
import { useEffect, useState } from 'react';
import SideBarContent from './SideBarContent';
import { UseTheme } from '../store/context';


export default function SideBarIcons({displayStatus, setDisplayStatus}) {
    const {theme} = UseTheme();
    const [iconId, setIconId] = useState("1");
  useEffect(() => {
    // Dynamically import Bootstrap's JS to ensure it's loaded
    // import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
    //   const triggerTabList = document.querySelectorAll('#myTab button');
    //   triggerTabList.forEach((triggerEl) => {
    //     if (window.bootstrap) {
    //       const tabTrigger = new window.bootstrap.Tab(triggerEl);

    //       triggerEl.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         tabTrigger.show();
    //       });
    //     }
    //   });
    // });
  }, []);
  let count = 0;
  const [IsActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setIconId(e.target.id);
    
    const val = [1,2,3,4,5].find(n => n == parseInt(iconId));
    if (val) {
        count++;
        setIsActive(true);   
    }
    if (count > 1) {
        setIsActive(false);
    }
    setDisplayStatus("d-flex");

  }

  const handleContentBtn = () => {
    //   const status = displayStatus == "d-flex" ?  "d-none" : "d-flex";
      setDisplayStatus("d-none");
  }


  return (
<div className="d-flex flex-column h-100 " style={{maxWidth:"100%"}}>
    <div className="d-flex h-100 " >
        <div className='d-flex align-items-center flex-column justify-content-between side-bar-content px-3' style={{paddingBlock:"18px"}}>
            <div className="nav flex-column nav-pills  " style={{"gap":"16px"}} id="" role="tablist" aria-orientation="vertical">
                <button className={IsActive ? `nav-link active` : `nav-link`} id="1" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={(e) => handleClick(e)} >
                    <img id='1' src={theme == "light-mode" ? "./logo.png" : "./logoWhite.png"} className='iconImage' alt="logo"  />
                </button>
                <button className="nav-link" id="" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                    <img id='2' src="./search.png" className='iconImage' alt="logo" onClick={(e) => handleClick(e)} />
                </button>
                <button className="nav-link" id="" data-bs-toggle="pill" data-bs-target="#v-pills-profile2" type="button" role="tab" aria-controls="v-pills-profile2" aria-selected="false">
                    <img id='3' src="./horizontal.png" className='iconImage' alt="logo" onClick={(e) => handleClick(e)} />
                </button>
                <button className="nav-link" id="" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                    <img id='4' src="./calendar.png" className='iconImage' alt="logo" onClick={(e) => handleClick(e)}/>
                </button>
                <button className="nav-link" id="" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                    <img id='5' src="./alt.png" className='iconImage' alt="logo" onClick={(e) => handleClick(e)} />
                </button>
            </div>
            <div className='d-flex flex-column' style={{"gap":"16px"}}>
                <img src="./settings.png" alt="settings"  className='iconImage'/>
                <img src="./exit.png" alt="exit"  className='iconImage'/>

            </div>

        </div>
        <SideBarContent iconId = {iconId} displayStatus={displayStatus} handleContentBtn={handleContentBtn} />

    </div>

</div>
  );
}
