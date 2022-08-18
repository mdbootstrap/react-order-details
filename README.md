Responsive React Order Details page built with the latest Bootstrap 5. eCommerce examples of shop pages with order summary, receipts, invoices, purchase lists & more.

Check out [React Order Details Component](https://mdbootstrap.com/docs/react/extended/order-details/) for detailed instructions & even more examples.

## Basic examples

![React Order Details Component](/assets/basic.png)

```js
import React, { useState } from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Basic() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#35558a" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100 text-center">
            <MDBCol>
              <MDBBtn color="light" size="lg" onClick={toggleShow}>
                <MDBIcon fas icon="info me-2" /> Get information
              </MDBBtn>
              <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalHeader className="border-bottom-0">
                      <MDBBtn
                        className="btn-close"
                        color="none"
                        onClick={toggleShow}
                      ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody className="text-start text-black p-4">
                      <MDBTypography
                        tag="h5"
                        className="modal-title text-uppercase mb-5"
                        id="exampleModalLabel"
                      >
                        Johnatan Miller
                      </MDBTypography>
                      <MDBTypography
                        tag="h4"
                        className="mb-5"
                        style={{ color: "#35558a" }}
                      >
                        Thanks for your order
                      </MDBTypography>
                      <p className="mb-0" style={{ color: "#35558a" }}>
                        Payment summary
                      </p>
                      <hr
                        className="mt-2 mb-4"
                        style={{
                          height: "0",
                          backgroundColor: "transparent",
                          opacity: ".75",
                          borderTop: "2px dashed #9e9e9e",
                        }}
                      />

                      <div className="d-flex justify-content-between">
                        <p className="fw-bold mb-0">Ether Chair(Qty:1)</p>
                        <p className="text-muted mb-0">$1750.00</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p className="small mb-0">Shipping</p>
                        <p className="small mb-0">$175.00</p>
                      </div>

                      <div className="d-flex justify-content-between pb-1">
                        <p className="small">Tax</p>
                        <p className="small">$200.00</p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p className="fw-bold">Total</p>
                        <p className="fw-bold" style={{ color: "#35558a" }}>
                          $2125.00
                        </p>
                      </div>
                    </MDBModalBody>

                    <MDBModalFooter className="d-flex justify-content-center border-top-0 py-4">
                      <MDBBtn
                        size="lg"
                        style={{ backgroundColor: "#35558a" }}
                        className="mb-1"
                      >
                        Track your order
                      </MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
```

## How to use?

1. Download MDB React - free UI KIT

2. Choose your favourite customized component and click on the image

3. Copy & paste the code into your MDB project

[▶️ Subscribe to YouTube channel for web development tutorials & resources](https://www.youtube.com/MDBootstrap?sub_confirmation=1)

## More React documentation

<ul>
<li><a href="https://mdbootstrap.com/docs/react/extended/bootstrap-address-form/">React address form</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/credit-card/">React credit card</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/shopping-carts/">React shopping carts</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/product-cards/">React product cards</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/order-details/">React order details</a></li>
<li><a href="https://mdbootstrap.com/docs/react/plugins/ecommerce-gallery/">React ecommerce gallery</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/gallery/">React gallery</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/modal/">React modal</a></li>
<li><a href="https://mdbootstrap.com/docs/react/utilities/borders/">React borders</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/progress/">React progress</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/stepper/">React stepper</a></li>
<li><a href="https://mdbootstrap.com/docs/react/content-styles/icons/">React icons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/buttons/">React buttons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/layout/grid/">React grid</a></li>
</ul>
