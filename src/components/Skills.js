import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import BannerCollab from "./BannerCollab";
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
      <MDBContainer className="skillsSection position-relative">
         <MDBRow className="d-flex flex-column my-4">
            <h2 data-aos="zoom-in" className="text-center p-0 weight800">
               Tools I am working with..
            </h2>
            <MDBCol className="">
               <div data-aos="fade-up" className="my-4">
                  <h4 className="text-center">Front End Development</h4>
                  <div className="d-flex justify-content-center my-3">
                     <span className="d-flex skillSet flex-column align-items-center">
                        <img
                           className="skillsIcon img-fluid"
                           src={html}
                           alt=""
                        />
                        <div className="d-flex flex-column align-items-center">
                           <span>HTML</span>
                           <span className="underLine text-center"></span>
                        </div>
                     </span>
                     <span className="d-flex skillSet flex-column align-items-center">
                        <img
                           className="skillsIcon img-fluid"
                           src={css}
                           alt=""
                        />
                        <div className="d-flex flex-column align-items-center">
                           <span>CSS</span>
                           <span className="underLine text-center"></span>
                        </div>
                     </span>
                     <span className="d-flex skillSet flex-column align-items-center">
                        <img
                           className="skillsIcon img-fluid"
                           src={figma}
                           alt=""
                        />
                        <div className="d-flex flex-column align-items-center">
                           <span>Figma</span>
                           <span className="underLine text-center"></span>
                        </div>
                     </span>
                  </div>
               </div>
               <div data-aos="fade-down" className="my-4">
                  <h4 className="text-center">Back End Development</h4>
                  <div className="d-flex justify-content-center my-3">
                     <div className="d-md-flex">
                        <span className="d-flex skillSet flex-column align-items-center">
                           <img
                              className="skillsIcon img-fluid"
                              src={jscript}
                              alt=""
                           />
                           <div className="d-flex flex-column align-items-center">
                              <span>Javascript</span>
                              <span className="underLine text-center"></span>
                           </div>
                        </span>
                        <span className="d-flex skillSet flex-column align-items-center">
                           <img
                              className="skillsIcon img-fluid"
                              src={nodeJS}
                              alt=""
                           />
                           <div className="d-flex flex-column align-items-center">
                              <span>Node JS</span>
                              <span className="underLine text-center"></span>
                           </div>
                        </span>
                     </div>
                     <div className="d-md-flex">
                        <span className="d-flex skillSet flex-column align-items-center">
                           <img
                              className="skillsIcon img-fluid"
                              src={mongoDB}
                              alt=""
                           />
                           <div className="d-flex flex-column align-items-center">
                              <span>MongoDB</span>
                              <span className="underLine text-center"></span>
                           </div>
                        </span>
                        <span className="d-flex skillSet flex-column align-items-center">
                           <img
                              className="skillsIcon img-fluid"
                              src={expressJs}
                              alt=""
                           />
                           <div className="d-flex flex-column align-items-center">
                              <span>Express JS</span>
                              <span className="underLine text-center"></span>
                           </div>
                        </span>
                     </div>
                  </div>
               </div>
               <div data-aos="zoom-in" className="my-4">
                  <h4 className="text-center">Full Stack Development</h4>
                  <div className="d-flex justify-content-center my-3">
                     <div className="d-md-flex">
                        <span className="d-flex skillSet flex-column align-items-center">
                           <img
                              className="skillsIcon img-fluid"
                              src={mongoDB}
                              alt=""
                           />
                           <div className="d-flex flex-column align-items-center">
                              <span>MongoDB</span>
                              <span className="underLine text-center"></span>
                           </div>
                        </span>
                        <span className="d-flex skillSet flex-column align-items-center">
                           <img
                              className="skillsIcon img-fluid"
                              src={expressJs}
                              alt=""
                           />
                           <div className="d-flex flex-column align-items-center">
                              <span>Express JS</span>
                              <span className="underLine text-center"></span>
                           </div>
                        </span>
                     </div>
                     <div className="d-md-flex">
                        <span className="d-flex skillSet flex-column align-items-center">
                           <img
                              className="skillsIcon img-fluid"
                              src={react}
                              alt=""
                           />
                           <div className="d-flex flex-column align-items-center">
                              <span>React JS</span>
                              <span className="underLine text-center"></span>
                           </div>
                        </span>
                        <span className="d-flex skillSet flex-column align-items-center">
                           <img
                              className="skillsIcon img-fluid"
                              src={nodeJS}
                              alt=""
                           />
                           <div className="d-flex flex-column align-items-center">
                              <span>Node JS</span>
                              <span className="underLine text-center"></span>
                           </div>
                        </span>
                     </div>
                  </div>
               </div>
               <div data-aos="fade-up" className="my-4">
                  <h4 className="text-center">Other tools</h4>
                  <div className="d-flex justify-content-center my-3">
                     <div className="d-md-flex">
                        <span className="d-flex skillSet flex-column align-items-center">
                           <img
                              className="skillsIcon img-fluid"
                              src={git}
                              alt=""
                           />
                           <div className="d-flex flex-column align-items-center">
                              <span>Git</span>
                              <span className="underLine text-center"></span>
                           </div>
                        </span>
                        <span className="d-flex skillSet flex-column align-items-center">
                           <img
                              className="skillsIcon img-fluid"
                              src={vscode}
                              alt=""
                           />
                           <div className="d-flex flex-column align-items-center">
                              <span>VS Code</span>
                              <span className="underLine text-center"></span>
                           </div>
                        </span>
                     </div>
                     <div className="d-md-flex">
                        <span className="d-flex skillSet flex-column align-items-center">
                           <img
                              className="skillsIcon img-fluid"
                              src={chromedev}
                              alt=""
                           />
                           <div className="d-flex flex-column align-items-center">
                              <span>Chrome Dev Tools</span>
                              <span className="underLine text-center"></span>
                           </div>
                        </span>
                        <span className="d-flex skillSet flex-column align-items-center">
                           <img
                              className="skillsIcon img-fluid"
                              src={postman}
                              alt=""
                           />
                           <div className="d-flex flex-column align-items-center">
                              <span>Postman</span>
                              <span className="underLine text-center"></span>
                           </div>
                        </span>
                     </div>
                  </div>
               </div>
            </MDBCol>
         </MDBRow>
      </MDBContainer>
   );
}
