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
                     <p className="text-justify my-3">
                        My experience in park maintenance has given me a solid
                        understanding of the importance of maintaining and
                        updating facilities and equipment. This experience can
                        be applied to web development by ensuring that I am
                        proactive in maintaining and updating web applications
                        to ensure their continued performance and security
                     </p>
                  </div>
                  <div data-aos="fade-up" className="my-3">
                     <h5>Irrigation Engineer & Designer</h5>
                     <h6>
                        <em>November 2018 - February 2022</em>
                     </h6>
                     <p className="text-justify my-3">
                        As an Irrigation Engineer and Designer, I was
                        responsible for the planning, design, and implementation
                        of irrigation systems for a variety of landscapes and
                        golf courses. I managed projects from start to finish,
                        which involved working closely with clients to
                        understand their requirements, conducting site
                        assessments, developing designs and cost estimates, and
                        overseeing the construction and installation of the
                        systems. I also bring to web development my experience
                        in problem-solving and critical thinking.
                     </p>
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
                     <p className="text-justify my-3">
                        I completed a Full Stack Development Course using the
                        MERN Stack at Zuitt, where I gained hands-on experience
                        in developing modern web applications. One of the
                        highlights of my course was my capstone project, where I
                        developed an e-commerce API for the backend. This
                        project challenged me to apply all the skills and
                        knowledge I had acquired during the course and showcase
                        my ability to create a complex and scalable system. My
                        project was recognized by my instructors and peers as
                        the best capstone for the backend, and I received praise
                        for my technical skills and attention to detail.
                     </p>
                  </div>
                  <div data-aos="fade-up" className="my-5">
                     <h5>
                        Bachelor of Science in Agricultural and Biosystems
                        Engineering
                     </h5>
                     <h6>
                        <em>June 2013 - April 2018</em>
                     </h6>
                     <p className="text-justify my-3">
                        I earned my Bachelor of Science in Agricultural and
                        Biosystems Engineering from a growing university, where
                        I gained a solid foundation in the principles and
                        practices of both agriculture and engineering. This
                        background has given me a unique perspective on the
                        interplay between technology and the natural world, and
                        has equipped me with valuable skills that I can apply to
                        software engineering
                     </p>
                  </div>
               </MDBCol>
            </MDBRow>
         </MDBContainer>
      </>
   );
}
