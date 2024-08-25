import "../customCss/custom.css";

export default function Btns({btnValue, btnClass}){
    return (
        <div>
            <button className={btnClass}>{btnValue}</button>
        </div>
    )
}