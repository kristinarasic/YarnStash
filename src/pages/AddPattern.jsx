import MenuUpper from "../components/MenuUpper";
import Footer from "../components/footer";
import PatternSource from "../components/AddPatternSelections/PatternSource";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddPattern() {
    const navigate = useNavigate();
    const [projectname, setProjectname] = useState("");
const [projecttype, setProjecttype] = useState("");    
const handleRedirect = (projecttype) => {
        if (projecttype === 'Knitting') {
            navigate('/knitting', {state:{name: projectname}});
            console.log("knitting")
          
        } else if (projecttype === 'Crochet') {
            navigate('/pageinprogress');
            console.log("crochet")
        } else if (projecttype === 'Emrboidory') {
            navigate('/pageinprogress');
            console.log("emrboidory")
        } else if (projecttype === 'CrossStich') {
            navigate('/pageinprogress');
            console.log("crossstich")
        } else if (projecttype === "Felting") {
            navigate('./pageinprogress');
            console.log("felting")
        } else {
            console.log("err");
        }
    };


return (
    <div onSubmit={(e)=>{
        e.preventDefault();
        handleRedirect(projecttype);

    }} className="bg-green-200 min-h-screen w-full">
        <MenuUpper></MenuUpper>
        <form className="fixed h-auto w-auto p-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-3 border-blue-900">
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="craft-select"
                    className="text-sm font-medium text-blue-950"
                >
                    What are you making?
                </label>

                <select onChange={(e)=>setProjecttype(e.target.value)}required id="craft-select" name="craft" className=" w-full rounded-xl border-2 border-blue-900/30 bg-white/60 px-4 py-3 text-blue-950 shadow-sm outline-none cursor-pointer transition focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20">
                    <option value="">-- Please choose an option --</option>
                    <option value="Knitting">Knitting</option>
                    <option value="Crochet">Crochet</option>
                    <option value="CrosSitch">Cross stitch</option>
                    <option value="Embroidery">Embroidery</option>
                    <option value="Felting">Felting</option>
                </select>
            </div>
            <h1>What is the name of your project?</h1>
            <input required type="text" onChange={(e)=>setProjectname(e.target.value)} name="Name" className="border my-2" ></input>
            <PatternSource></PatternSource>
            <h1>Do you have an image of the made item?</h1>
            <img></img>
            <h1>Status of this project?</h1>
            <p><input  type="radio" option="want to make" name="status" className="mr-20"></input>Want to make</p>
            <p><input  type="radio" option="in progress" name="status" className="mr-20"></input>In progress</p>
            <p><input  type="radio" option="finished" name="status" className="mr-20"></input>Finished</p>
            <p><input  type="radio" option="abandoned" name="status" className="mr-20"></input>Abandoned</p>
            <button type="submit" onClick={() => handleRedirect(projecttype)} className="ransition-all duration-700 ease-out  hover:scale-110 hover:shadow-xl border px-2 mt-5 bg-violet-400 text=white rounded hover:bg-violet-600">Next</button>
        </form>
        <Footer></Footer>
    </div>
)
}
export default AddPattern;