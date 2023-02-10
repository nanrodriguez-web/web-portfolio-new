import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
   return (
      <>
         <Router>
            <Navbar />
            <Routes>
               <Route exact path="/" element={<Home />} />
            </Routes>
         </Router>
      </>
   );
}

export default App;
