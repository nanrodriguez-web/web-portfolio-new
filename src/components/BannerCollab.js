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
   const toggleShow = () => setCentredModal(!centredModal);

   const [formValue, setFormValue] = useState({
      userName: "",
      email: "",
      message: "",
   });
   const onChange = (e) => {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
   };
   function addProduct(e) {
      e.preventDefault();

      const retrieveToken = localStorage.getItem("token");

      fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
         headers: {
            Authorization: `Bearer ${retrieveToken}`,
         },
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);

            if (data.isAdmin) {
               fetch(`${process.env.REACT_APP_API_URL}/products/addProduct`, {
                  method: "POST",
                  headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${retrieveToken}`,
                  },
                  body: JSON.stringify({
                     name: formValue.productName,
                     description: formValue.description,
                     price: formValue.price,
                     image: formValue.image,
                  }),
               })
                  .then((res) => res.json())
                  .then((data) => {
                     console.log(data);
                     if (data) {
                        // Swal.fire({
                        //    title: "Successfully added product!",
                        //    icon: "success",
                        // });
                        setFormValue({
                           productName: "",
                           price: "",
                           description: "",
                           image: "",
                        });
                     } else {
                        // Swal.fire({
                        //    title: "Failed to add product!",
                        //    text: "Product already exists",
                        //    icon: "error",
                        // });
                     }
                  });
            } else {
               // Swal.fire({
               //    title: "You are not allowed to access this!",
               //    icon: "error",
               // });
            }
         });
   }

   return (
      <>
         <MDBContainer className="position-relative text-center d-flex justify-content-center w-100">
            <MDBRow className="banner text-center p-3">
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

            <MDBBtn onClick={toggleShow}>Vertically centered modal</MDBBtn>
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
                           <MDBCardBody>
                              <MDBRow
                                 tag="form"
                                 className="g-3 justify-content-center align-items-center"
                                 onSubmit={(e) => addProduct(e)}
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
                        </MDBCard>
                     </MDBModalBody>
                  </MDBModalContent>
               </MDBModalDialog>
            </MDBModal>
         </MDBContainer>
      </>
   );
}
