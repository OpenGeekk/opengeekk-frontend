import React from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { useState } from "react";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
 const Dark =() =>{
  const {theme ,setTheme} = useTheme();
 
  const handeleThemeToggle = () =>{
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };
    
        return(
     <div className={`dark:bg-black dark:text-white transition duration-500 ease-in-out`}>
        <button 
        className="p-2 rounded"
        onClick = {handeleThemeToggle}>

{theme === 'light' ? <DarkModeOutlined/> : <LightModeOutlined/>}

</button>
</div>

        );

 };
 export default Dark;