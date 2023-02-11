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
                  <a href="#">
                     <MDBIcon id="icon" fas icon="home" size="2x" />
                     <span className="tool-tip mx-3">Home</span>
                  </a>
               </li>
               <li className="my-3 navIcon">
                  <a href="#about">
                     <MDBIcon id="icon" fas icon="user-alt" size="2x" />
                     <span className="tool-tip mx-3">About</span>
                  </a>
               </li>
               <li className="my-3 navIcon">
                  <a href="#works">
                     <MDBIcon id="icon" fas icon="briefcase" size="2x" />
                     <span className="tool-tip mx-3">Works</span>
                  </a>
               </li>
               <li className="my-3 navIcon">
                  <a href="#contact">
                     <MDBIcon id="icon" far icon="address-card" size="2x" />
                     <span className="tool-tip mx-3">Contact</span>
                  </a>
               </li>
            </div>
         </div>
      </div>
   );
}
