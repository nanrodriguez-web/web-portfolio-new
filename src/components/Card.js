import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import {
   MDBCard,
   MDBCardBody,
   MDBBtn,
   MDBCardTitle,
   MDBRipple,
   MDBCardText,
   MDBCardImage,
} from "mdb-react-ui-kit";

import image1 from "../images/code.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";

class MyCarousel extends Component {
   static get CONTAINER_STYLE() {
      return {
         position: "relative",
         minHeight: "40vh",
         width: "100%",
         zIndex: "0",
      };
   }

   static get CARD_STYLE() {
      return {
         textAlign: "center",
         background: "#52C0F5",
         color: "#FFF",
         fontFamily: "sans-serif",
         fontSize: "12px",
         borderRadius: "10px",
         boxSizing: "border-box",
      };
   }

   render() {
      return (
         <div className="d-flex py-2 my-5" style={MyCarousel.CONTAINER_STYLE}>
            <ReactCardCarousel
               spread={"wide"}
               autoplay={true}
               autoplay_speed={5500}
            >
               <div style={MyCarousel.CARD_STYLE}>
                  <MDBCard>
                     <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image hover-overlay"
                     >
                        <MDBCardImage src={image1} fluid alt="..." />
                        <a>
                           <div
                              className="mask"
                              style={{
                                 backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                           ></div>
                        </a>
                     </MDBRipple>
                     <MDBCardBody className="Card">
                        <MDBCardTitle>API Development</MDBCardTitle>
                        <MDBCardText className="cardText">
                           Developed and API for E-Commerce using{" "}
                           <strong>Node.JS</strong> and{" "}
                           <strong>Express.JS</strong> integrated in a database
                           using <strong>MongoDB</strong> and tested in{" "}
                           <strong>Postman</strong>
                        </MDBCardText>
                        <MDBBtn
                           target="_blank"
                           className="darkButton"
                           href="https://gitlab.com/rodriguez-batch229/capstone2-rodriguez/capstone2-rodriguez"
                        >
                           Visit this site
                        </MDBBtn>
                     </MDBCardBody>
                  </MDBCard>
               </div>
               <div style={MyCarousel.CARD_STYLE}>
                  <MDBCard>
                     <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image hover-overlay"
                     >
                        <MDBCardImage src={image2} fluid alt="..." />
                        <a>
                           <div
                              className="mask"
                              style={{
                                 backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                           ></div>
                        </a>
                     </MDBRipple>
                     <MDBCardBody className="Card">
                        <MDBCardTitle>Business PortFolio</MDBCardTitle>
                        <MDBCardText className="cardText">
                           Developed a static business portfolio for an Solar
                           Installation Business using{" "}
                           <strong>HTML, CSS</strong> and{" "}
                           <strong>Bootstrap</strong>
                        </MDBCardText>
                        <MDBBtn
                           target="_blank"
                           className="darkButton"
                           href="https://nanrodriguez-web.github.io/BZ-Power-Solution-new-Design/"
                        >
                           Visit this site
                        </MDBBtn>
                     </MDBCardBody>
                  </MDBCard>
               </div>
               <div style={MyCarousel.CARD_STYLE}>
                  <MDBCard>
                     <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image hover-overlay"
                     >
                        <MDBCardImage src={image4} fluid alt="..." />
                        <a>
                           <div
                              className="mask"
                              style={{
                                 backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                           ></div>
                        </a>
                     </MDBRipple>
                     <MDBCardBody className="Card">
                        <MDBCardTitle>Simple Calculator</MDBCardTitle>
                        <MDBCardText className="cardText">
                           Developed a Simple Calculator using{" "}
                           <strong>HTML,CSS, and JavaScript</strong>
                        </MDBCardText>
                        <MDBBtn
                           target="_blank"
                           className="darkButton"
                           href="https://nanrodriguez-web.github.io/simpleCalculator/"
                        >
                           Visit this site
                        </MDBBtn>
                     </MDBCardBody>
                  </MDBCard>
               </div>
               <div style={MyCarousel.CARD_STYLE}>
                  <MDBCard>
                     <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image hover-overlay"
                     >
                        <MDBCardImage src={image3} fluid alt="..." />
                        <a>
                           <div
                              className="mask"
                              style={{
                                 backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                           ></div>
                        </a>
                     </MDBRipple>
                     <MDBCardBody className="Card">
                        <MDBCardTitle>E-Commerce Website</MDBCardTitle>
                        <MDBCardText className="cardText">
                           Created a Mockup E-Commerce website using{" "}
                           <strong>MongoDB, Express.JS, React.JS</strong> and{" "}
                           <strong>Node.JS</strong>
                        </MDBCardText>
                        <MDBBtn
                           target="_blank"
                           className="darkButton"
                           href="https://capstone3-reupload-capstone3-reupload.vercel.app/"
                        >
                           Visit this site
                        </MDBBtn>
                     </MDBCardBody>
                  </MDBCard>
               </div>
               <div style={MyCarousel.CARD_STYLE}>
                  <MDBCard>
                     <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image hover-overlay"
                     >
                        <MDBCardImage src={image5} fluid alt="..." />
                        <a>
                           <div
                              className="mask"
                              style={{
                                 backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                           ></div>
                        </a>
                     </MDBRipple>
                     <MDBCardBody className="Card">
                        <MDBCardTitle>BlogAPI with OpenAPI 3.0.0</MDBCardTitle>
                        <MDBCardText className="cardText">
                           Created a simple API with documentation using{" "}
                           <strong>OpenAPI</strong>
                        </MDBCardText>
                        <MDBBtn
                           target="_blank"
                           className="darkButton"
                           href="https://blogapi-1pat.onrender.com/api-docs/"
                        >
                           Visit this site
                        </MDBBtn>
                     </MDBCardBody>
                  </MDBCard>
               </div>
               <div style={MyCarousel.CARD_STYLE}>
                  <MDBCard>
                     <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image hover-overlay"
                     >
                        <MDBCardImage src={image7} fluid alt="..." />
                        <a>
                           <div
                              className="mask"
                              style={{
                                 backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                           ></div>
                        </a>
                     </MDBRipple>
                     <MDBCardBody className="Card">
                        <MDBCardTitle>Landing Page</MDBCardTitle>
                        <MDBCardText className="cardText">
                           Converted a responsive landing page from{" "}
                           <strong>Photoshop</strong> using{" "}
                           <strong>ReactJS</strong>
                        </MDBCardText>
                        <MDBBtn
                           target="_blank"
                           className="darkButton"
                           href="https://flo-qast-xtendly.vercel.app/"
                        >
                           Visit this site
                        </MDBBtn>
                     </MDBCardBody>
                  </MDBCard>
               </div>
               <div style={MyCarousel.CARD_STYLE}>
                  <MDBCard>
                     <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image hover-overlay"
                     >
                        <MDBCardImage src={image6} fluid alt="..." />
                        <a>
                           <div
                              className="mask"
                              style={{
                                 backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                           ></div>
                        </a>
                     </MDBRipple>
                     <MDBCardBody className="Card">
                        <MDBCardTitle>Simple Digital Clock</MDBCardTitle>
                        <MDBCardText className="cardText">
                           Created a simple clock using <strong>ReactJS</strong>
                        </MDBCardText>
                        <MDBBtn
                           target="_blank"
                           className="darkButton"
                           href="https://digital-clock-5af.pages.dev/"
                        >
                           Visit this site
                        </MDBBtn>
                     </MDBCardBody>
                  </MDBCard>
               </div>
            </ReactCardCarousel>
         </div>
      );
   }
}

export default MyCarousel;
