import React from "react";
import MenuUpper from "/src/components/MenuUpper.jsx"
import Footer from '/src/components/Footer'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
function Knitting() {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state;
    const [pojectName, setProjectName] = useState("");
    const [projectSize, setProjectSize] = useState("");
    const [rows, setRows] = useState([]);
    //and here for the progress...



    return (
        <div className="bg-green-200 min-h-screen w-full">
            <MenuUpper>
            </MenuUpper>
            <div className="fixed h-auto w-auto p-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-3 border-blue-900">
                <h1>Project: {data?.name}</h1>
                <h1>What are you making? </h1>
                <input onChange={(e) => setProjectName = e.target.value} type="text" className="border" placeholder="eg. sweater, scarf, hat"></input>
                <h1>What size is your project?</h1>
                <input onchange={(e) => setProjectSize = e.this.value} type="text" className="border" placeholder="eg. M, L, XL, baby, adult, large...."></input>
                <h1>Add your pattern here:</h1>
                <form>
                    <h1>Instrucions for the row</h1>
                    <input type="text" placeholder="eg. cast on 88;2 knit, 2 perl" className="border"></input>
                    <h1>Number of rows:</h1>
                    <input type="number" placeholder="1" className="border"></input>
                    <br></br>
                    <button className="ransition-all duration-700 ease-out  hover:scale-110 hover:shadow-xl border px-2 mt-5 bg-blue-400 text=white rounded hover:bg-blue-600"><img className="w-6 h-6" src="./src/assets/plus.png"></img></button>
                </form>
                <p>Update progress if checked in progres</p>
                <span>total rows: </span>
                <br></br>
                <button className="ransition-all duration-700 ease-out  hover:scale-110 hover:shadow-xl border px-2 mt-5 bg-violet-400 text=white rounded hover:bg-violet-600">Done</button>
            </div>
            <Footer>
            </Footer>
        </div>
    )
}

export default Knitting;