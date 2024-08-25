import { useState } from "react";

export default function ThemeBtn({theme, setTheme}){
    const [side, setSide] = useState("right");
    
    const toggleTheme = (e) => {
        
        if (theme === "light-mode") {
            setSide("left")
        }
        else {
            setSide("right");
        }
        const newTheme = theme === "light-mode" ? "dark-mode" : "light-mode";
        setTheme(newTheme);
        document.body.className = newTheme; 
        
    }
    return(
        <div>
            <button className="theme-btn " onClick={(e) => toggleTheme(e)}>
                <div className={`theme-btn-inside ${side}`}>
                    
                </div>
            </button>
        </div>
    )
}