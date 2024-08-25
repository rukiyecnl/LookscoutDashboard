"use client"
import { useEffect, useState } from "react";
import { ThemeData } from "./context";

export default function ThemeProvider({children}){
    const [theme, setTheme] = useState("light-mode");
    
    useEffect(() => {
        if (typeof document !== "undefined") {
            document.body.className = theme; 
        }
      }, [theme]);

    return <ThemeData.Provider value={{theme,setTheme}}>{children}</ThemeData.Provider>
}