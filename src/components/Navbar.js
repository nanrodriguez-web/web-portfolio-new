import { MDBIcon } from "mdb-react-ui-kit";
import { useState } from "react";
export default function Navbar() {
   const [isChecked, setIsChecked] = useState(false);
   const [left, setLeft] = useState(0);

   const handleCheckbox = () => {
      setIsChecked(!isChecked);
      setLeft(isChecked ? -50 : 0);
   };

   return (
      <div className="nav-bar">
         <div className="nav">
            <div
               id="navBarFloat"
               className="navBar-float d-lg-flex flex-column justify-content-center align-items-center mx-5 d-none "
            >
               <li className="my-3 navIcon">
                  <MDBIcon fas icon="home" size="2x" />
                  <span className="tool-tip mx-3">Home</span>
               </li>
               <li className="my-3 navIcon">
                  <MDBIcon fas icon="user-alt" size="2x" />
                  <span className="tool-tip mx-3">About</span>
               </li>
               <li className="my-3 navIcon">
                  <MDBIcon fas icon="briefcase" size="2x" />
                  <span className="tool-tip mx-3">Works</span>
               </li>
               <li className="my-3 navIcon">
                  <MDBIcon far icon="address-card" size="2x" />
                  <span className="tool-tip mx-3">Contact</span>
               </li>
            </div>
         </div>
         <div
            id="mobile-nav"
            style={{ left: `${left}%` }}
            className="d-lg-none flex-column justify-content-center px-3 d-flex"
         >
            <li className="my-3 ms-2 navIcon">
               <MDBIcon fas icon="home" size="2x" />
               <span className="tool-tip-mobile mx-3">Home</span>
            </li>
            <li className="my-3 ms-2 navIcon">
               <MDBIcon fas icon="user-alt" size="2x" />
               <span className="tool-tip-mobile mx-3">About</span>
            </li>
            <li className="my-3 ms-2 navIcon">
               <MDBIcon fas icon="briefcase" size="2x" />
               <span className="tool-tip-mobile mx-3">Works</span>
            </li>
            <li className="my-3 ms-2 navIcon">
               <MDBIcon far icon="address-card" size="2x" />
               <span className="tool-tip-mobile mx-3">Contact</span>
            </li>
         </div>
         <div
            className="navArrow d-lg-none d-block"
            style={{ left: `${left + 50}%` }}
         >
            <input
               type="checkbox"
               id="arrowNav"
               name="arrowNav"
               value="ArrowNav"
               checked={isChecked}
               onChange={handleCheckbox}
            />
            <label className="arrow" htmlFor="arrowNav">
               <MDBIcon fas icon="angle-right" size="3x" />
            </label>
         </div>
      </div>
   );
}
