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
      <div
         id="works"
         className="workSection py-5 d-flex flex-column justify-content-center align-items-center"
      >
         <div className="d-flex flex-column align-items-center mt-4">
            <h1 data-aos="fade-down" className="weight900">
               Works
            </h1>
            <span
               data-aos="zoom-in"
               data-aos-duration="2500"
               className="underLineTitleLight text-center"
            ></span>
         </div>
         <MDBContainer>
            <MDBRow className="d-flex justify-content-center">
               <MDBCol
                  data-aos="zoom-in"
                  lg={6}
                  className="d-lg-flex justify-content-center my-5"
               >
                  <MyCarousel />
               </MDBCol>
               <MDBCol
                  data-aos="fade-in"
                  lg={6}
                  className="d-lg-flex justify-content-center"
               >
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
