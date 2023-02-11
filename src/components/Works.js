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
import Carousel from "react-bootstrap/Carousel";

export default function Works() {
   return (
      <div className="workSection py-5 d-flex flex-column align-items-center">
         <h1 className="weight900 my-5">Works</h1>
         <MDBContainer>
            <MDBRow className="d-flex justify-content-center">
               <MDBCol md={9} className="d-lg-flex justify-content-center">
                  <Carousel>
                     <Carousel.Item>
                        <MDBCard className="Card">
                           <MDBRipple
                              rippleColor="light"
                              rippleTag="div"
                              className="bg-image hover-overlay"
                           >
                              <MDBCardImage
                                 src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                                 fluid
                                 alt="..."
                              />
                              <a>
                                 <div
                                    className="mask"
                                    style={{
                                       backgroundColor:
                                          "rgba(251, 251, 251, 0.15)",
                                    }}
                                 ></div>
                              </a>
                           </MDBRipple>
                           <MDBCardBody>
                              <MDBCardTitle>Card title</MDBCardTitle>
                              <MDBCardText>
                                 Some quick example text to build on the card
                                 title and make up the bulk of the card's
                                 content.
                              </MDBCardText>
                              <MDBBtn href="#">Button</MDBBtn>
                           </MDBCardBody>
                        </MDBCard>
                     </Carousel.Item>
                     <Carousel.Item>
                        <MDBCard className="Card">
                           <MDBRipple
                              rippleColor="light"
                              rippleTag="div"
                              className="bg-image hover-overlay"
                           >
                              <MDBCardImage
                                 src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                                 fluid
                                 alt="..."
                              />
                              <a>
                                 <div
                                    className="mask"
                                    style={{
                                       backgroundColor:
                                          "rgba(251, 251, 251, 0.15)",
                                    }}
                                 ></div>
                              </a>
                           </MDBRipple>
                           <MDBCardBody>
                              <MDBCardTitle>Card title</MDBCardTitle>
                              <MDBCardText>
                                 Some quick example text to build on the card
                                 title and make up the bulk of the card's
                                 content.
                              </MDBCardText>
                              <MDBBtn href="#">Button</MDBBtn>
                           </MDBCardBody>
                        </MDBCard>
                     </Carousel.Item>
                  </Carousel>
               </MDBCol>
            </MDBRow>
         </MDBContainer>
      </div>
   );
}
