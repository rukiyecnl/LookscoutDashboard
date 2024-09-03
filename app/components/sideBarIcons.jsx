"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../customCss/custom.css"
import { useState } from 'react';
import SideBarContent from './SideBarContent';
import { UseTheme } from '../store/context';
import ThemeBtn from './ThemeBtn';

export default function SideBarIcons({ displayStatus, setDisplayStatus }) {
    const {theme ,setTheme} = UseTheme();
    const [activeIconId, setActiveIconId] = useState(null); 

    const handleClick = (e) => {
        const id = e.target.id;
        setActiveIconId(id); 
        setDisplayStatus("d-flex");
    }
    const handleClickLogo = (e) => {
        
        const id = e.target.id;
        setActiveIconId(id); 
        setDisplayStatus(prevState  => {
            
            const deneme2 = prevState  === "d-none" ? "d-flex" : "d-none";
            return deneme2;
        });
    }

    const handleContentBtn = () => {
        setDisplayStatus("d-none");
    }

    return (
        <div className="d-none d-lg-flex flex-column" style={{ maxWidth: "100%", height: "100vh" }}>
            <div className="d-flex h-100 ">
                <div className='d-flex align-items-center flex-column justify-content-between side-bar-content px-3' style={{ paddingBlock: "18px" }}>
                    <div className="nav flex-column nav-pills" style={{ "gap": "16px" }} id="" role="tablist" aria-orientation="vertical">
                        <button
                            className={activeIconId === "1" ? `nav-link active2` : `nav-link`} 
                            id="1"
                            onClick={(e) => handleClickLogo(e)}
                        >
                            <img id='1' src={theme === "light-mode" ? "./logo.png" : "./logoWhite.png"} className='iconImage' alt="logo" />
                        </button>
                        <button
                            className={activeIconId === "2" ? `nav-link active2` : `nav-link`}
                            id="2"
                            onClick={(e) => handleClick(e)}
                        >
                            <img id='2' src="./search.png" className='iconImage' alt="logo" />
                        </button>
                        <button
                            className={activeIconId === "3" ? `nav-link active2` : `nav-link`}
                            id="3"
                            onClick={(e) => handleClick(e)}
                        >
                            <img id='3' src="./horizontal.png" className='iconImage' alt="logo" />
                        </button>
                        <button
                            className={activeIconId === "4" ? `nav-link active2` : `nav-link`}
                            id="4"
                            onClick={(e) => handleClick(e)}
                        >
                            <img id='4' src="./calendar.png" className='iconImage' alt="logo" />
                        </button>
                        <button
                            className={activeIconId === "5" ? `nav-link active2` : `nav-link`}
                            id="5"
                            onClick={(e) => handleClick(e)}
                        >
                            <img id='5' src="./alt.png" className='iconImage' alt="logo" />
                        </button>
                    </div>
                    <div className=' nav nav-pills d-flex flex-column' style={{ "gap": "16px" }}>
                        <ThemeBtn />
                        <button
                            className={activeIconId === "6" ? `nav-link active2` : `nav-link`}
                            id="6"
                            onClick={(e) => handleClick(e)}>
                            <img id="6" src="./settings.png" alt="settings" className='iconImage' />
                        </button>
                        <button className='nav-link' onClick={(e) => handleClick(e)}>
                            <img src="./exit.png" alt="exit" className='iconImage' />
                        </button>
                    </div>
                </div>
                <SideBarContent iconId={activeIconId} displayStatus={displayStatus} setDisplayStatus={setDisplayStatus} handleContentBtn={handleContentBtn} />
            </div>
        </div>
    );
}
