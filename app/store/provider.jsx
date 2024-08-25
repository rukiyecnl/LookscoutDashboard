"use client"
import { useState } from "react";
import { ThemeData } from "./context";

export default function ThemeProvider({children}){
    const [theme, setTheme] = useState("light-mode");

    return <ThemeData.Provider value={{theme,setTheme}}>{children}</ThemeData.Provider>
}