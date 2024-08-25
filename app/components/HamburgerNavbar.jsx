import { UseTheme } from "../store/context"

export default function HamburgerNavbar(){
    const {theme} = UseTheme();
    return(
        <div className="mb-3 d-lg-none d-flex align-items-center justify-content-between hamburger-nav" >
            <img src={theme == "light-mode" ? "./cLogo.svg" : "./cLogoWhite.svg"}  alt="logo" />
            <button style={{backgroundColor:"transparent", border:"none"}}>
                <img src={theme == "light-mode" ? "./hamburger.png"  : "./hamburgerWhite.svg" }alt="" />
            </button>
        </div>
    )
}