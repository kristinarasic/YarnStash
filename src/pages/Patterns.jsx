import React from "react";
import MenuUpper from "/src/components/MenuUpper.jsx"
import Footer from '/src/components/Footer'
import { useNavigate } from "react-router-dom";
import PatternSource from "../components/AddPatternSelections/PatternSource";

function Patterns(){
    const navigate = useNavigate();
    return(
        <div className="bg-green-200 min-h-screen w-full">
            <MenuUpper>
            </MenuUpper>
            <div classNa me="">
                 <div className="fixed h-50 w-40 top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 border-3 border-blue-900 flex items-center justify-around">
                    <img  onClick={() => navigate("/addpattern")} src="src/assets/plus.png" alt="plus icon" className="w-30 h-30 center border-6 p-3 rounded-full transition-all duration-700 ease-out ease-in hover:scale-110 hover:shadow-xl cursor-pointer"></img>
                 </div>
                 
            </div>
            <Footer>
            </Footer>
        </div>
    )
}

export default Patterns;