import React from "react";
import { Button } from "react-bootstrap";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Figure from "react-bootstrap/Figure";
export default function CertifiedComponent() {
  return (
    <div style={{ backgroundColor: "#F8EDFF" }}>
      <div className="container">
        <div className="row d-flex justify-content-around ">
          <div
            className="col-12 col-md-5 mt-5 mb-5"
            style={{
              display: "flex",
              justifyContent: "left",
              backgroundColor: "#EADDF5",
            }}
          >
            <Figure>
              <Figure.Image
                src={"./Images/B corp 1.png"}
                width={120}
                height={160}
                className=" mt-5"
                alt=""
              />
              <Figure.Caption>
                Roini respects high social and environmental standards and is
                part of a progress approach.
              </Figure.Caption>
              <Button
                variant="dark"
                className="mt-3"
                style={{ borderRadius: "50px" }}
              >
                Open my account
                <MdKeyboardDoubleArrowRight size={"20px"} />
              </Button>
            </Figure>
          </div>
          <div
            className="col-12 col-md-5 mt-5 mb-5"
            style={{
              display: "flex",
              justifyContent: "left",
              backgroundColor: "#EADDF5",
            }}
          >
            <Figure>
              <Figure.Image
                src={"./Images/1� for the planet 1.png"}
                width={120}
                height={160}
                className=" mt-5"
                alt=""
              />
              <Figure.Caption>
                Roini respects high social and environmental standards and is
                part of a progress approach.
              </Figure.Caption>
              <Button
                variant="dark"
                className="mt-3"
                style={{ borderRadius: "50px" }}
              >
                Open my account
                <MdKeyboardDoubleArrowRight size={"20px"} />
              </Button>
            </Figure>
          </div>
        </div>
      </div>
    </div>
  );
}
