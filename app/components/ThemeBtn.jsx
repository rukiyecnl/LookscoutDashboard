import { useState, useEffect } from "react";
import { UseTheme } from "../store/context";

export default function ThemeBtn({theme, setTheme}){
    const [side, setSide] = useState("right");

    useEffect(() => {
        if (typeof document !== "undefined") {
            document.body.className = theme; 
        }
      }, [theme]);
    
    const toggleTheme = (e) => {
        
        if (theme === "light-mode") {
            setSide("left")
        }
        else {
            setSide("right");
        }
        const newTheme = theme === "light-mode" ? "dark-mode" : "light-mode";
        setTheme(newTheme);
        
        
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