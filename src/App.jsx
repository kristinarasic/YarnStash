import './App.css'
import Patterns from "./pages/Patterns.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPattern from './pages/AddPattern';
import PageInProgress from './pages/PageInProgress';
import Knitting from './pages/addingPattern/Knitting';
import LandingPage
 from './pages/LandingPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/patterns" element={<Patterns />} />
        <Route path="/addpattern" element={<AddPattern />} />
        <Route path="/knitting" element={<Knitting></Knitting>}></Route>
        <Route path="/pageinprogress" element={<PageInProgress></PageInProgress>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
