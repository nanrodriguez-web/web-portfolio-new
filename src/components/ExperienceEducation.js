import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

export default function ExperienceEducation() {
   return (
      <>
         <MDBContainer>
            <MDBRow className="experienceSection my-3 px-md-5">
               <MDBCol lg={6} className="px-xl-5">
                  <h4
                     data-aos="fade-down"
                     className="text-center my-2 weight800 "
                  >
                     Experience
                  </h4>
                  <div data-aos="fade-up" className="my-3">
                     <h5>Park Maintenance Supervisor</h5>
                     <h6>
                        <em>February 2022 - November 2022</em>
                     </h6>

                     <ul className="text-justify my-3">
                        <li>
                           Maintained and updated park facilities and equipment
                        </li>
                        <li>
                           Ensured the park was safe and clean for visitors
                        </li>
                        <li>Managed a team of maintenance staff</li>
                        <li>
                           Coordinated with other departments to ensure
                           efficient operations
                        </li>
                        <em>Transferable skill to web development:</em>
                        <ul>
                           <li>
                              Proactive maintenance and updates of web
                              applications
                           </li>
                           <li>
                              Understanding the importance of continued
                              performance and security
                           </li>
                        </ul>
                     </ul>
                  </div>
                  <div data-aos="fade-up" className="my-3">
                     <h5>Irrigation Engineer & Designer</h5>
                     <h6>
                        <em>November 2018 - February 2022</em>
                     </h6>

                     <ul className="text-justify my-3">
                        <li>
                           Planned, designed, and implemented irrigation systems
                           for various landscapes and golf courses
                        </li>
                        <li>
                           Managed projects from start to finish, including
                           client communication, site assessments, design
                           development, cost estimating, and overseeing
                           installation
                        </li>
                        <li>
                           Collaborated with cross-functional teams including
                           architects, contractors, and landscapers
                        </li>
                        <li>
                           Utilized problem-solving and critical thinking skills
                           to troubleshoot issues during project execution
                        </li>
                        <em>Transferable skill to web development:</em>
                        <ul>
                           <li>
                              Problem-solving and critical thinking skills for
                              troubleshooting and debugging web applications
                           </li>
                        </ul>
                     </ul>
                  </div>
               </MDBCol>
               <MDBCol lg={6} className="px-xl-5">
                  <h4
                     data-aos="fade-down"
                     className="text-center my-2 weight800 "
                  >
                     Education
                  </h4>
                  <div data-aos="fade-up" className="my-3">
                     <h5>Full Stack Development</h5>
                     <h6>
                        <em>December 2022 - February 2023</em>
                     </h6>

                     <ul className="text-justify my-3">
                        <li>
                           Completed a Full Stack Development Course, gaining
                           hands-on experience in developing modern web
                           applications
                        </li>
                        <li>
                           Developed an e-commerce API for the backend as a
                           capstone project, showcasing complex and scalable
                           system creation abilities
                        </li>
                        <li>
                           Recognized by instructors and peers as the best
                           capstone for the backend and praised for technical
                           skills and attention to detail.
                        </li>
                     </ul>
                  </div>
                  <div data-aos="fade-up" className="my-5">
                     <h5>
                        Bachelor of Science in Agricultural and Biosystems
                        Engineering
                     </h5>
                     <h6>
                        <em>June 2013 - April 2018</em>
                     </h6>

                     <ul className="text-justify my-3">
                        <li>
                           Solid foundation in the principles and practices of
                           both agriculture and engineering
                        </li>
                        <li>
                           Unique perspective on the interplay between
                           technology and the natural world
                        </li>
                        <li>
                           Valuable skills that can be applied to software
                           engineering
                        </li>
                     </ul>
                  </div>
               </MDBCol>
            </MDBRow>
         </MDBContainer>
      </>
   );
}
