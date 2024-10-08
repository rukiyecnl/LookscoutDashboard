import data from "@/data/data.json"; // JSON dosyasını import edin
import "../customCss/custom.css";

export default function SideBarContent({ iconId, displayStatus, setDisplayStatus, handleContentBtn}) {
    // iconId ile eşleşen veriyi bulun
    const contentData = data.find(d => d.id == iconId);
    // console.log(contentData);
    
    if (!contentData) {
        return " ";
    }



    return (
        <div className={`${displayStatus} flex-column justify-content-between side-bar-content side-bar-special`} style={{width:"272px", overflow:"auto"}} id="v-pills-tabContent" >
            <div>
                <div className="d-flex align-items-center gap-2 px-4" onClick={handleContentBtn}>
                    <img style={{"width": "11px", "height": "10px"}} src="./arrow.png"  alt="arrow" />
                    <p className="lookscoutTitle">Lookscout Dashboard</p>
                </div>
                <div>
                    <form className="w-100 px-4">
                        <input className="w-100" type="text" placeholder="Search here..." style={{marginBlock:"32px", padding:"10px 12px 10px 12px", borderRadius:"5px", border: "2px solid var(--border-color)", backgroundColor:"var(--btn-color-bg)"}}/>
                    </form>
                </div>
                <div>
                    
                    {
                        contentData.values.map((value, index) => (
                            <div key={index} className="d-flex gap-2 show active sidebar-left px-4" style={{paddingBlock:"12px"}}>
                                <img src={value.img} alt="" />
                                <div className="side-bar-content-title">{value.val}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="px-4">
                <div className="d-flex gap-3 align-items-center my-4">
                    <img src="./Avatar.png" alt="" />
                    <p style={{flex: "1", marginBottom:"0px", color:"var(--title-color)"}}>Brian Ford</p>
                    <img src="./points.png" alt="" />
                </div>
                <div className="card" style={{width: "100%", marginTop:"32px"}}>
                    <div className="card-body">
                        <img src="./close.png" alt="close" style={{float:"right"}} />
                        <div className="card-title"> <img src="./ProgressCircle.png" alt="circle" /> </div>
                        <h5 className="sub-plan">Subscription Plan</h5>
                        <p className="card-text">Your Subscription plan will expire soon please upgrade!</p>
                        <a href="#" className="upgrade-btn">Upgrade</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
