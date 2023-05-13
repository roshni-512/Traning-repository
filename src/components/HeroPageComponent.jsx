import React from "react";
import { Button } from "react-bootstrap";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function HeroPageComponent() {
  return (
    <div style={{ backgroundColor: "#F8EDFF" }}>
      <div className="container">
        <div className="row d-flex justify-content-around sm-d-none">
          <div className="col-6   mt-5 ">
            <p
              style={{
                fontFamily: "Fraunces",
                fontSize: "60px",
                fontWeight: "600",
              }}
            >
              The Pro Account
            </p>
            <p
              style={{
                fontFamily: "Fraunces",
                fontStyle: "italic",
                fontSize: "40px",
              }}
            >
              {" "}
              Who Does More
            </p>
            <p>Invoice. Cash in. Spend. Manage. Centralize. And much more.</p>
            <Button variant="dark" style={{ borderRadius: "50px" }}>
              Open my account
              <MdKeyboardDoubleArrowRight size={"20px"} />
            </Button>
            <Button
              className="mx-3  "
              variant="dark"
              style={{ borderRadius: "50px" }}
            >
              Compare Our Offers
              <MdKeyboardDoubleArrowRight size={"20px"} />
            </Button>
            <img
              src={"./Images/Group 237798 (1).png"}
              style={{ width: "100%", float: "left" }}
              className=" w-sm-100 mt-5 mb-5"
              alt=""
            />
          </div>
          <div className="col-6 mt-5">
            <img
              src={"./Images/Frame 480869.png"}
              style={{ width: "100%", float: "left" }}
              className=" w-sm-100 mt-5 mb-5"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
