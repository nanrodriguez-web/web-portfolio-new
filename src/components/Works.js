import {
   MDBCol,
   MDBContainer,
   MDBRow,
   MDBCard,
   MDBCardHeader,
   MDBCardBody,
   MDBRipple,
   MDBCardImage,
   MDBCardText,
   MDBCardTitle,
   MDBBtn,
} from "mdb-react-ui-kit";

import MyCarousel from "../components/Card.js";
import responsive from "../images/responsive.png";

export default function Works() {
   return (
      <div className="workSection py-5 d-flex flex-column justify-content-center align-items-center">
         <h1 className="weight900">Works</h1>
         <MDBContainer>
            <MDBRow className="d-flex justify-content-center">
               <MDBCol md={6} className="d-lg-flex justify-content-center my-5">
                  <MyCarousel />
               </MDBCol>
               <MDBCol md={6} className="d-lg-flex justify-content-center">
                  <div className="d-flex flex-column align-items-center">
                     <img
                        className="responsiveBanner img-fluid"
                        src={responsive}
                        alt=""
                     />
                     <h4 className="lightText-WorkSection text-center">
                        Mobile Friendly Websites
                     </h4>
                     <p className="descriptionTag text-center">
                        My projects was developed to be responsive on different
                        devices
                     </p>
                  </div>
               </MDBCol>
            </MDBRow>
         </MDBContainer>
      </div>
   );
}
