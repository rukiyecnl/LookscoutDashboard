export default function HamburgerNavbar(){
    return(
        <div className="d-lg-none d-flex align-items-center justify-content-between">
            <img src="./companyLogo.png" alt="logo" />
            <button>
                <img src="./hamburger.png" alt="" />
            </button>
        </div>
    )
}