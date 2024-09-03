import { useEffect } from "react";
import { UseTheme } from "../store/context";
import ThemeBtn from "./ThemeBtn";
import contentData from "@/data/data.json";

export default function HamburgerNavbar() {
    const {theme} = UseTheme();

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <div className="mb-3 px-3 d-lg-none d-flex align-items-center justify-content-between hamburger-nav">
            <img src={theme === "light-mode" ? "./cLogo.svg" : "./cLogoWhite.svg"} alt="logo" />
            <div className="d-flex flex-row gap-2">
                <ThemeBtn />
                <button style={{backgroundColor:"transparent", border:"none"}} 
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                >
                    <img src={theme === "light-mode" ? "./hamburger.png"  : "./hamburgerWhite.svg"} alt="" />
                </button>
                <div>
                    <div
                        className="offcanvas offcanvas-end side-right"
                        tabIndex="-1"
                        id="offcanvasRight"
                        aria-labelledby="offcanvasRightLabel"
                        data-bs-backdrop="false"
                    >
                        <div className="offcanvas-header hamburger-side-head">
                            <div className="offcanvas-title d-flex gap-3 align-items-center" id="offcanvasRightLabel">
                                <img src="./Avatar.png" alt="" />
                                <p style={{flex: "1", marginBottom:"0px"}}>Brian Ford</p>
                            </div>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <div id="accordionExample" className="d-flex flex-column gap-1">
                                {contentData.map((data, index) => {
                                    if (data.id > 2) {
                                        return (
                                            <div key={`item-${index}`}>
                                                <a className="btn btn-toggle" href="#" role="button" 
                                                    data-bs-toggle="collapse" 
                                                    aria-expanded="false" 
                                                    data-bs-target={`#item2-${index}`}
                                                    aria-controls={`item2-${index}`}
                                                    style={{width:"100%"}}>       
                                                    <div className="d-flex justify-content-between alt-drop-title">
                                                        <div className="d-flex gap-3 p-3" >
                                                            <img src={data.thumbnailImg} alt="" />
                                                            <p>{data.name}</p>
                                                        </div>
                                                        <img src="./downArrow.svg" alt="arrow" />
                                                    </div>
                                                </a>
                                                <div id={`item2-${index}`} className="collapse ps-5 alt-drop gap-3" data-bs-parent="#accordionExample">
                                                    {data.values.map((value, index) => (
                                                        <div key={index} className="dropdown-item d-flex flex-row gap-2 py-2">
                                                            <img src={value.img} alt="" />
                                                            {value.val}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
