"use client"
// import BarChart from "./BarCharts";
import Btns from "./Btns";
import Card from "./Card";
import dynamic from 'next/dynamic';
import StatusCard from "./StatusCard";
import Link from "next/link";
import { useState } from "react";
import ThemeBtn from "./ThemeBtn";
import HamburgerNavbar from "./HamburgerNavbar";

// Dinamik import
const BarChart = dynamic(() => import('./BarCharts'), { ssr: false });
const RevenueBarChart = dynamic(() => import('./RevenueBarChart'), { ssr: false });

export const metadata = {
    title: 'ApexCharts Example',
    description: 'ApexCharts example in Next.js',
  };

export default function Content(){
    const [theme, setTheme] = useState("light-mode");



    return(
        <div className="mx-3" style={{paddingBlock:"28px"}}>
            {/* <HamburgerNavbar/> */}
            <div className="content-head-top d-flex justify-content-between">
                <p className="d-sm-flex d-none">
                    <span>Home</span> {">"}
                    <span>Settings</span> {">"}
                    <span>Genreal</span>
                </p>
                <div className="d-flex d-sm-none align-items-center gap-3">
                    <img src="./leftArrow.png" alt="left" /> 
                    <span className="back">Back</span>
                </div>
                <ThemeBtn theme={theme} setTheme={setTheme}/>
            </div>
            <div className="d-sm-block d-md-flex align-items-start justify-content-between mt-3">
                <div>
                    <p className="hey-title">Hey there, Brian Ford!</p>
                    <p className="hey-title-desc">Welcome back, we are happy to have you here!!</p>
                </div>
                <div className="btns d-flex gap-3 mt-3 mt-md-0">
                    <Btns btnValue={"Edit section"} btnClass={"btn-normal"}/>
                    <Btns btnValue={"Add item"} btnClass={"btn-prim"}/>
                    <button className="d-block d-sm-none btn-normal ">
                        <img src="./points.png" alt="link"  />
                    </button>
                </div>
            </div>
            <div >
                <Card />
            </div>
            <div>
                <BarChart/>
                <RevenueBarChart/>
            </div>
            <div className="d-xs-block d-md-flex align-items-start justify-content-between mt-3 mt-lg-4 ">
                <p className="username">Brian Ford</p>
                <div className="btns d-flex gap-3 mt-3 mt-md-0">
                    <Btns btnValue={"Edit section"} btnClass={"btn-normal"}/>
                    <Btns btnValue={"Add item"} btnClass={"btn-prim"}/>
                    <button className="d-block d-sm-none btn-normal ">
                        <img src="./points.png" alt="link"  />
                    </button>
                </div>
            </div>
            <div className="row  align-items-start ">
                <div className="col-12 col-md-4 col-sm-6">
                    <StatusCard cardId={"1"} />
                    <div style={{backgroundColor: "var(--side-bar-bg)", paddingInline:"20px"}}>
                        <Btns btnValue={"View all"} btnClass={"btn-prim view-btn"} />
                    </div>
                </div>
                <div className="col-12 col-md-4 col-sm-6">
                    <StatusCard cardId={"2"} />
                    <div className="btns d-flex gap-3 w-100 card-btn-bar" style={{backgroundColor: "var(--side-bar-bg)", paddingInline:"20px", paddingBottom:"16px"}}>
                        <Btns btnValue={"Cancel"} btnClass={"btn-normal"}/>
                        <Btns btnValue={"Upload"} btnClass={"btn-prim"}/>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-sm-12">
                    <StatusCard cardId={"3"} />
                    <Link href={"/"} className='d-flex gap-1 align-items-center' style={{backgroundColor: "var(--side-bar-bg)", paddingInline:"20px", paddingBottom:"16px"}}>
                        <p>Open</p>
                        <img src="./externalLink.png" alt="link"  />
                    </Link>
                </div>

            </div>
        </div>
    )
}