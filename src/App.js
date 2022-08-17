import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/basic">
        <MDBBtn className="m-3">
          Basic
        </MDBBtn>
      </Link>
      <Link to="/order-details-2">
        <MDBBtn className="m-3">
          Order details 2
        </MDBBtn>
      </Link>
      <Link to="/order-details-3">
        <MDBBtn className="m-3">
          Order details 3
        </MDBBtn>
      </Link>
      <Link to="/order-details-4">
        <MDBBtn className="m-3">
          Order details 4
        </MDBBtn>
      </Link>
      <Link to="/order-details-5">
        <MDBBtn className="m-3">
          Order details 5
        </MDBBtn>
      </Link>
      <Link to="/order-details-6">
        <MDBBtn className="m-3">
          Order details 6
        </MDBBtn>
      </Link>
      <Link to="/order-details-7">
        <MDBBtn className="m-3">
          Order details 7
        </MDBBtn>
      </Link>
    </MDBContainer>
  );
}