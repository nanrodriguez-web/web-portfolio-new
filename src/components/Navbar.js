import { MDBIcon } from "mdb-react-ui-kit";
import { useState } from "react";
export default function Navbar() {
   return (
      <div className="nav-bar">
         <div className="nav">
            <div
               id="navBarFloat"
               className="navBar-float d-lg-flex flex-column justify-content-center align-items-center mx-5 d-none "
            >
               <li className="my-3 navIcon">
                  <MDBIcon id="icon" fas icon="home" size="2x" />
                  <span className="tool-tip mx-3">Home</span>
               </li>
               <li className="my-3 navIcon">
                  <MDBIcon id="icon" fas icon="user-alt" size="2x" />
                  <span className="tool-tip mx-3">About</span>
               </li>
               <li className="my-3 navIcon">
                  <MDBIcon id="icon" fas icon="briefcase" size="2x" />
                  <span className="tool-tip mx-3">Works</span>
               </li>
               <li className="my-3 navIcon">
                  <MDBIcon id="icon" far icon="address-card" size="2x" />
                  <span className="tool-tip mx-3">Contact</span>
               </li>
            </div>
         </div>
      </div>
   );
}
