import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import css from "../images/logos/css.png";
import html from "../images/logos/html5.png";
import jscript from "../images/logos/jscript.png";
import nodeJS from "../images/logos/nodeJS.png";
import expressJs from "../images/logos/expressJs.png";
import mongoDB from "../images/logos/mongoDB.png";
import postman from "../images/logos/postman-icon.png";
import react from "../images/logos/react.png";
import git from "../images/logos/git.png";
import vscode from "../images/logos/visual-studio-code-icon.png";
import chromedev from "../images/logos/chromedev.png";
import figma from "../images/logos/figma.png";

export default function Skills() {
   return (
      <>
         <MDBContainer className="skillsSection">
            <MDBRow className="d-flex flex-column my-5">
               <h3 className="text-center p-0 weight800">
                  Things I am working with..
               </h3>
               <MDBCol className="">
                  <div className="my-4">
                     <h4 className="text-center">Front End</h4>
                     <div className="d-flex justify-content-center my-3">
                        <span className="d-flex skillSet flex-column align-items-center">
                           <img
                              className="skillsIcon img-fluid"
                              src={html}
                              alt=""
                           />
                           <span>HTML</span>
                        </span>
                        <span className="d-flex skillSet flex-column align-items-center">
                           <img
                              className="skillsIcon img-fluid"
                              src={css}
                              alt=""
                           />
                           <span>CSS</span>
                        </span>
                        <span className="d-flex skillSet flex-column align-items-center">
                           <img
                              className="skillsIcon img-fluid"
                              src={jscript}
                              alt=""
                           />
                           <span>Javascript</span>
                        </span>
                     </div>
                  </div>
                  <div className="my-4">
                     <h4 className="text-center">Back End</h4>
                     <div className="d-flex justify-content-center my-3">
                        <div className="d-md-flex">
                           <span className="d-flex skillSet flex-column align-items-center">
                              <img
                                 className="skillsIcon img-fluid"
                                 src={nodeJS}
                                 alt=""
                              />
                              <span>Node JS</span>
                           </span>
                           <span className="d-flex skillSet flex-column align-items-center">
                              <img
                                 className="skillsIcon img-fluid"
                                 src={expressJs}
                                 alt=""
                              />
                              <span>Express JS</span>
                           </span>
                        </div>
                        <div className="d-md-flex">
                           <span className="d-flex skillSet flex-column align-items-center">
                              <img
                                 className="skillsIcon img-fluid"
                                 src={mongoDB}
                                 alt=""
                              />
                              <span>MongoDB</span>
                           </span>
                           <span className="d-flex skillSet flex-column align-items-center">
                              <img
                                 className="skillsIcon img-fluid"
                                 src={postman}
                                 alt=""
                              />
                              <span>Postman</span>
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="my-4">
                     <h4 className="text-center">Full Stack</h4>
                     <div className="d-flex justify-content-center my-3">
                        <span className="d-flex skillSet flex-column align-items-center">
                           <img
                              className="skillsIcon img-fluid"
                              src={react}
                              alt=""
                           />
                           <span>React JS</span>
                        </span>
                     </div>
                  </div>
                  <div className="my-4">
                     <h4 className="text-center">Other tools</h4>
                     <div className="d-flex justify-content-center my-3">
                        <div className="d-md-flex">
                           <span className="d-flex skillSet flex-column align-items-center">
                              <img
                                 className="skillsIcon img-fluid"
                                 src={git}
                                 alt=""
                              />
                              <span>Git</span>
                           </span>
                           <span className="d-flex skillSet flex-column align-items-center">
                              <img
                                 className="skillsIcon img-fluid"
                                 src={vscode}
                                 alt=""
                              />
                              <span>VS Code</span>
                           </span>
                        </div>
                        <div className="d-md-flex">
                           <span className="d-flex skillSet flex-column align-items-center">
                              <img
                                 className="skillsIcon img-fluid"
                                 src={chromedev}
                                 alt=""
                              />
                              <span>Chrome DevTools</span>
                           </span>
                           <span className="d-flex skillSet flex-column align-items-center">
                              <img
                                 className="skillsIcon img-fluid"
                                 src={figma}
                                 alt=""
                              />
                              <span>Figma</span>
                           </span>
                        </div>
                     </div>
                  </div>
               </MDBCol>
            </MDBRow>
         </MDBContainer>
      </>
   );
}
