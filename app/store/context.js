"use client"
import {  createContext, useContext } from "react";

export const ThemeData = createContext();

export function UseTheme(){
    return useContext(ThemeData);
}


