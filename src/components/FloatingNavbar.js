import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useEffect, useState, useContext } from "react";

export default function FloatingNavbar() {
   const [isChecked, setIsChecked] = useState(false);
   const [opacity, setOpacity] = useState(0);
   const [left, setLeft] = useState(-300);

   const menuStyle = {
      opacit: opacity,
      left: `${left}px`,
   };

   function onChange(e) {
      setIsChecked(!isChecked);
      setOpacity(isChecked ? 0 : 1);
      setLeft(isChecked ? -300 : 0);
   }

   return (
      <div className="nav-bar-mobile d-lg-none d-block">
         <input
            type="checkbox"
            id="check"
            checked={isChecked}
            onChange={onChange}
         />
         <label htmlFor="check">
            <MDBIcon className="arrowNav" fas icon="angle-right" size="3x" />
         </label>

         <div className="menus d-flex" style={menuStyle}>
            <li className="my-3 mx-3 mobileIconMenu">
               <a href="#">
                  <MDBIcon fas icon="home" size="2x" />
               </a>
            </li>
            <li className="my-3 mx-3 mobileIconMenu">
               <a href="#about">
                  <MDBIcon fas icon="user-alt" size="2x" />
               </a>
            </li>
            <li className="my-3 mx-3 mobileIconMenu">
               <a href="#works">
                  <MDBIcon fas icon="briefcase" size="2x" />
               </a>
            </li>
            <li className="my-3 mx-3 mobileIconMenu">
               <a href="#contact">
                  <MDBIcon far icon="address-card" size="2x" />
               </a>
            </li>
         </div>
      </div>
   );
}
