import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
          <h4>
            My contact info here.
          </h4>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;