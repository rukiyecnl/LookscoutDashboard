// "use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "@/data/cardData.json";

export default function Card(){
    console.log(data);
    
    
    return (
        <div className='row align-items-center gap-md-0 gap-sx-2' style={{marginBlock: "32px"}}>
            {data.map( (data,index) => {
                const classValue = data.type.toLowerCase() === "new" ? "online" : data.type.toLowerCase() === "global" ? "failed" : data.type.toLowerCase() === "intuitive" ? "done" : " ";
                return (
                    <div key={index} className="col" >
                        <div className='price-card mt-3'>
                            <div className="d-flex align-items-center justify-content-between">
                                <p style={{marginBottom:"0px"}} className='price-card-title'>{data.name}</p>
                                <a href="#"><img src="./Dropdown.png" alt="" /></a>
                            </div>
                            <div className='d-flex align-items-center justify-content-between' >
                                <div>
                                    <p className='price-card-price'>${data.price}</p>
                                    <div className='d-flex gap-2 align-items-center' style={{marginTop: "12px"}}>
                                        <p className={classValue} style={{fontSize:"13px"}}>{data.type}</p>
                                        <p className='price-card-text'>{data.text}</p>
                                    </div>
                                </div>
                                <img src={data.img} alt="img" />
                            </div>
                        </div>
                    </div>
                )
            } )}
        </div>
    )
}