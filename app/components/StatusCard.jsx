"use client"
import data from "@/data/bottomCardData.json";
import "../customCss/custom.css";
import { useState } from "react";

export default function StatusCard({cardId}){
    const currentCard = data.find(d => d.id == cardId);

    return (
        <div className="status-card mt-3 ">
            <div className="d-flex align-items-center justify-content-between">
                <p className="status-card-main-title">{currentCard.title}</p>
                {currentCard.id != 3 ? 
                    (<a href="#"><img src="./Dropdown.png" alt="" /></a>)
                    :   " "
                }
                
            </div>
            {currentCard?.values?.map( (value, index) => {
                const classValue = value.status === "Online" ? "online" : value.status === "Offline" ? "offline" : value.status === "Done" ? "done" : value.status === "Failed" ? "failed" : " ";

                return (
                    <div key={index} className="d-flex align-items-center justify-content-between gap-3 card-content">
                        <div className="d-flex align-items-center gap-2">
                            <img src={value.img} alt="ikon" />
                            <div className="d-block">
                                <p className="status-card-title">{value.title}</p>
                                <p className="status-card-sub">{value.sub}</p>
                            </div>
                        </div>
                        <div className="d-flex gap-1">
                            <p className={classValue}>{value.status}</p>
                            {currentCard.id == 1 ? 
                                (<img src="./rightArrow.png" alt="" />)
                                :   " "
                            }
                            {currentCard.id == 2 ? 
                                (<img src={value.statusImg} alt="" />)
                                :   " "
                            }
                            
                        </div>
                    </div>
                )
            } )}
        </div>
    )
}