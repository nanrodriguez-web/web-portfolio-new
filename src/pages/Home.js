import {
   MDBCol,
   MDBContainer,
   MDBIcon,
   MDBRow,
   MDBTypography,
} from "mdb-react-ui-kit";

import { Navigate } from "react-router-dom";

export default function Home() {
   return (
      <div className="backgroundImage">
         <MDBContainer>
            <MDBRow className="ms-4 d-flex justify-content-center align-items-center min-height-100vh">
               <MDBCol md="9" className="font-white">
                  <h3>Hey!</h3>
                  <h1 className="lightWeight d-lg-block d-flex flex-column ">
                     <span className="p-0">I'm a </span>
                     <span className="weight600">Full-Stack Developer</span>
                  </h1>

                  <MDBTypography listInLine className="mb-0">
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
                           <MDBIcon
                              className="mx-2"
                              fab
                              icon="github"
                              size="2x"
                           />
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
                              onClick={<Navigate to="" />}
                           />
                        </a>
                     </li>
                  </MDBTypography>
               </MDBCol>
            </MDBRow>
         </MDBContainer>
      </div>
   );
}