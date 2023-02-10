import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import image from "../images/IMG_3425.JPG";

export default function About() {
   return (
      <div>
         <div className="backgroundImage-2 d-flex">
            <MDBContainer>
               <MDBRow className="h-100">
                  <MDBCol
                     md={6}
                     className="d-flex my-4 justify-content-center align-items-center"
                  >
                     <img className="imgNan" src={image} alt="" />
                  </MDBCol>
                  <MDBCol
                     md={6}
                     className="d-flex align-items-center  align-items-md-start flex-column justify-content-center my-4"
                  >
                     <h4 className="weight800 my-0 ">Renan D. Rodriguez</h4>
                     <h6 className="mb-3">
                        <em>Full-Stack Web Developer</em>
                     </h6>
                     <p className="text-justify">
                        A motivated career shifter with experience in project
                        management and a passion for web development. Skilled in{" "}
                        <strong>HTML</strong>, <strong>CSS</strong>,{" "}
                        <strong>Javascript</strong> used on a static mobile
                        responsive website and personal portfolio, as well as
                        experience in <strong>MongoDB</strong>,{" "}
                        <strong>Express JS</strong>,<strong>Node JS</strong>,
                        and <strong>React JS</strong>. Proven ability to learn
                        quickly and eager to take the first steps as a web
                        developer.
                     </p>
                  </MDBCol>
               </MDBRow>
            </MDBContainer>
         </div>
      </div>
   );
}
