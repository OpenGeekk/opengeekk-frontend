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

{theme === 'light' ? < DarkModeOutlined /> : <LightModeOutlined/>}

</button>
</div>

        );

 };
//             <div className=" mt-2">
//               {/* <div><span className="flex flex-row justify-between md:item-center ml-4">{theme}</span></div> */}
//               <div className=" flex  dark:bg-slate-200  rounded-full">
//           <button onClick={toggleLightMode} className="light  w-4 h-4  text-sm ml-1  text-sky-600 ">
//               <LightModeOutlinedIcon />
//               </button> 
              
//               <button onClick={toggleDarkMode}
//               className="dark  w-8 h-4 mb-4 ml-4 text-sky-600 ">
          
//               <DarkModeOutlinedIcon />
          
//           </button>

//               </div>
           
// </div>
        // {/*            ********************8             for makin dark theme using single icon*********************                                                                            */}

{/* <div><span className="flex flex-row justify-between md:item-center ml-4">{theme}</span></div> */}
 export default Dark;