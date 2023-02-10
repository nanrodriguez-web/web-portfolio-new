import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FloatingNavbar from "./components/FloatingNavbar";

function App() {
   return (
      <>
         <Router>
            <Navbar />
            <FloatingNavbar />
            <Routes>
               <Route exact path="/" element={<Home />} />
            </Routes>
         </Router>
      </>
   );
}

export default App;
