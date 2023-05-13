import React from "react";
import { Button, Card } from "react-bootstrap";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const PortolioComponent = () => {
  return (
    <div style={{ background: "#EADDF5" }}>
      <div className="py-5">
        <div className="container ">
          <div className="row pb-1">
            <div className="col-12 text-center">
              <p
                style={{
                  fontFamily: "Fraunces",
                  fontWeight: "600",
                  fontStyle: "italic",
                  fontSize: "45px",
                }}
              >
                And those that are{" "}
                <span style={{ fontFamily: "serif", fontWeight: "100" }}>
                  still
                </span>{" "}
                only an{" "}
                <span style={{ fontFamily: "serif", fontWeight: "100" }}>
                  idea
                </span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 py-3 py-md-0">
              <Card
                className="border-0 py-3 text-center h-100"
                style={{ backgroundColor: "rgb(252 245 255)" }}
              >
                <img
                  src="./Images/creation.png"
                  height={"150px"}
                  width={"150px"}
                  className="ms-auto me-auto"
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontFamily: "Fraunces",
                      fontWeight: "400",
                      fontSize: "27px",
                    }}
                  >
                    Business creation
                  </Card.Title>
                  <Card.Text>
                    SAS, SARL, EL or micro? Shine start helps you get started in
                    the best conditions.
                  </Card.Text>
                </Card.Body>
                <Card.Footer
                  className="border-0"
                  style={{ backgroundColor: "rgb(252 245 255)" }}
                >
                  <Button
                    variant="dark"
                    style={{ borderRadius: "50px" }}
                    className="p-2"
                  >
                    Deposit my capital
                    <MdKeyboardDoubleArrowRight size={"20px"} />
                  </Button>
                </Card.Footer>
              </Card>
            </div>
            <div className="col-12 col-md-4 py-3 py-md-0">
              <Card
                className="border-0 py-3 text-center h-100"
                style={{ backgroundColor: "rgb(252 245 255)" }}
              >
                <img
                  src="./Images/deposit.png"
                  height={"150px"}
                  width={"150px"}
                  className="ms-auto me-auto"
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontFamily: "Fraunces",
                      fontWeight: "400",
                      fontSize: "27px",
                    }}
                  >
                    Capital deposit
                  </Card.Title>
                  <Card.Text>
                    Deposit your capital and receive your certificate within 72
                    hours without even moving. 1005 online 100% secure.
                  </Card.Text>
                </Card.Body>
                <Card.Footer
                  className="border-0"
                  style={{ backgroundColor: "rgb(252 245 255)" }}
                >
                  <Button
                    variant="dark"
                    style={{ borderRadius: "50px" }}
                    className="p-2"
                  >
                    Deposit my capital
                    <MdKeyboardDoubleArrowRight size={"20px"} />
                  </Button>
                </Card.Footer>
              </Card>
            </div>
            <div className="col-12 col-md-4 py-3 py-md-0">
              <Card
                className="border-0 py-3 text-center h-100"
                style={{ backgroundColor: "rgb(252 245 255)" }}
              >
                <img
                  src="./Images/Resources.png"
                  height={"150px"}
                  width={"150px"}
                  className="ms-auto me-auto"
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontFamily: "Fraunces",
                      fontWeight: "400",
                      fontSize: "27px",
                    }}
                  >
                    Free practical resources
                  </Card.Title>
                  <Card.Text>
                    Discover our articles tips, comparators, contract tamplates
                    and other useful tools on a daily basis.
                  </Card.Text>
                </Card.Body>
                <Card.Footer
                  className="border-0"
                  style={{ backgroundColor: "rgb(252 245 255)" }}
                >
                  <Button
                    variant="dark"
                    style={{ borderRadius: "50px" }}
                    className="p-2"
                  >
                    Deposit my capital
                    <MdKeyboardDoubleArrowRight size={"20px"} />
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortolioComponent;
