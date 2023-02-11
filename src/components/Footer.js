import {
   MDBContainer,
   MDBCardBody,
   MDBCard,
   MDBCardTitle,
   MDBCardText,
   MDBTypography,
   MDBIcon,
} from "mdb-react-ui-kit";
import { Navigate } from "react-router-dom";
import BannerCollab from "./BannerCollab";

export default function Footer() {
   const date = new Date();
   const year = date.getFullYear();

   return (
      <>
         <div
            id="contact"
            className=" position-relative footer d-flex  align-items-center justify-content-center flex-column"
         >
            <BannerCollab />
            <MDBContainer className="  d-flex my-5 flex-column justify-content-center align-items-center h-100">
               <div data-aos="zoom-up" className="contactCard my-5">
                  <MDBCard>
                     <MDBCardBody>
                        <h5 className="contactCardtitle">Contact Details</h5>
                        <h5 className="weight800 contactCardName">
                           RENAN RODRIGUEZ
                        </h5>
                        <p className="p-0 m-0 contactCardDetails">
                           nanrodriguez04@gmail.com
                        </p>
                        <p className="p-0 m-0 contactCardDetails">
                           +639509343932
                        </p>
                     </MDBCardBody>
                  </MDBCard>
               </div>
               <MDBTypography data-aos="zoom-down" listInLine className="mb-0">
                  <li className="list-inline-item">
                     <a
                        target="_blank"
                        className="linkDecoration"
                        href="https://www.facebook.com/nan.rodrgz/"
                     >
                        <MDBIcon
                           className="mx-2"
                           fab
                           icon="facebook"
                           size="2x"
                        />
                     </a>
                  </li>
                  <li className="list-inline-item">
                     <a
                        target="_blank"
                        className="linkDecoration"
                        href="https://github.com/nanrodriguez-web"
                     >
                        <MDBIcon className="mx-2" fab icon="github" size="2x" />
                     </a>
                  </li>
                  <li className="list-inline-item">
                     <a
                        target="_blank"
                        className="linkDecoration"
                        href="https://www.linkedin.com/in/renan-rodriguez-89b58b16a/"
                     >
                        <MDBIcon
                           className="mx-2"
                           fab
                           icon="linkedin-in"
                           size="2x"
                        />
                     </a>
                  </li>
                  <li className="list-inline-item">
                     <a
                        target="_blank"
                        className="linkDecoration"
                        href="https://instagram.com/engr.nan?igshid=YmMyMTA2M2Y="
                     >
                        <MDBIcon
                           className="mx-2"
                           fab
                           icon="instagram"
                           size="2x"
                        />
                     </a>
                  </li>
                  <li className="list-inline-item">
                     <a
                        target="_blank"
                        className="linkDecoration"
                        href="mailto:nanrodriguez@gmail.com"
                     >
                        <MDBIcon
                           className="mx-2"
                           fas
                           icon="envelope"
                           size="2x"
                        />
                     </a>
                  </li>
               </MDBTypography>
               <div className="mt-3">
                  <span>Nan Rodriguez &copy; {year}</span>
               </div>
            </MDBContainer>
         </div>
      </>
   );
}
