import {
   MDBBtn,
   MDBCol,
   MDBContainer,
   MDBRow,
   MDBModal,
   MDBModalDialog,
   MDBModalContent,
   MDBModalHeader,
   MDBModalTitle,
   MDBModalBody,
   MDBModalFooter,
   MDBTextArea,
   MDBInput,
   MDBCardBody,
   MDBCard,
} from "mdb-react-ui-kit";

import { useState } from "react";

export default function BannerCollab() {
   const [centredModal, setCentredModal] = useState(false);

   const [formValue, setFormValue] = useState({
      userName: "",
      email: "",
      message: "",
   });

   const toggleShow = () => {
      setCentredModal(!centredModal);
      setFormValue({
         userName: "",
         email: "",
         message: "",
      });
   };

   const [sent, setSent] = useState(false);

   const onChange = (e) => {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
   };

   function sendMessage(e) {
      e.preventDefault();
      fetch("https://api.apispreadsheets.com/data/76Lmq5AcCYGqy4n9/", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            data: {
               Name: formValue.userName,
               Email: formValue.email,
               Message: formValue.message,
            },
         }),
      }).then((res) => {
         if (res.status === 201) {
            setSent(true);
         } else {
            setSent(false);
         }
      });
   }

   function updateSent(e) {
      setSent(false);
      toggleShow();
   }

   return (
      <>
         <MDBContainer className="text-center d-flex justify-content-center w-100">
            <MDBRow data-aos="zoom-out" className="banner text-center p-3">
               <MDBCol className="d-lg-flex align-items-center justify-content-between mx-auto my-auto">
                  <h2 className="bannerTitle my-2 mx-auto">
                     Want some collaboration?
                  </h2>
                  <h6 className="bannerTitle my-2 mx-auto">
                     Maybe we can work together
                  </h6>
                  <MDBBtn
                     onClick={toggleShow}
                     color="light"
                     rounded
                     className="bannerButton mx-3 my-2"
                  >
                     Let's Go!
                  </MDBBtn>
               </MDBCol>
            </MDBRow>

            {/* Modal */}

            <MDBModal
               tabIndex="-1"
               show={centredModal}
               setShow={setCentredModal}
            >
               <MDBModalDialog centered>
                  <MDBModalContent>
                     <MDBModalHeader className="text-center">
                        <MDBModalTitle>Contact Me</MDBModalTitle>
                        <MDBBtn
                           className="btn-close"
                           color="none"
                           onClick={toggleShow}
                        ></MDBBtn>
                     </MDBModalHeader>
                     <MDBModalBody>
                        <MDBCard
                           className="text-black needs-validation"
                           style={{ borderRadius: "25px" }}
                        >
                           {!sent ? (
                              <MDBCardBody>
                                 <MDBRow
                                    tag="form"
                                    className="g-3 justify-content-center align-items-center"
                                    onSubmit={(e) => sendMessage(e)}
                                 >
                                    <MDBCol md="12">
                                       <MDBInput
                                          value={formValue.userName}
                                          name="userName"
                                          onChange={onChange}
                                          label="Name"
                                          id="userNameId"
                                          type="text"
                                          className="w-100"
                                          required
                                       />
                                    </MDBCol>

                                    <MDBCol md="12">
                                       <MDBInput
                                          value={formValue.email}
                                          name="email"
                                          onChange={onChange}
                                          label="Email"
                                          id="emailId"
                                          type="email"
                                          className="w-100"
                                          required
                                       />
                                    </MDBCol>
                                    <MDBCol md="12">
                                       <MDBTextArea
                                          value={formValue.message}
                                          name="message"
                                          onChange={onChange}
                                          label="Message"
                                          id="messageId"
                                          type="text"
                                          rows={8}
                                          className="w-100"
                                          required
                                       />
                                    </MDBCol>
                                    <MDBCol size="12" className="text-center">
                                       <MDBBtn
                                          rounded
                                          type="submit"
                                          className="darkButton"
                                       >
                                          Send
                                       </MDBBtn>
                                    </MDBCol>
                                 </MDBRow>
                              </MDBCardBody>
                           ) : (
                              <MDBCardBody>
                                 <h1 className="my-5  ">Message Sent!</h1>
                                 <h4 className="my-5  ">
                                    I'll get touch on you.
                                 </h4>
                                 <MDBBtn
                                    className="darkButton"
                                    onClick={updateSent}
                                 >
                                    Okay
                                 </MDBBtn>
                              </MDBCardBody>
                           )}
                        </MDBCard>
                     </MDBModalBody>
                  </MDBModalContent>
               </MDBModalDialog>
            </MDBModal>
         </MDBContainer>
      </>
   );
}
