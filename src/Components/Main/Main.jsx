import React from "react";

import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";

function Main() {
  return (
    <div className="About w-full min-h-screen flex">
      <div className="about__left min-h-screen flex items-center flex-col pt-24   bg-brandGreen">
        <div className="flex items-center flex-col">
          <Button
            variant="contained"
            style={{
              marginBottom: "28px",
              maxHeight: "45px",
              maxWidth: "45px",
              minWidth: "45px",
              minHeight: "45px",
              borderRadius: 6,
              backgroundColor: "#3C00BB",
              padding: "0px 0px",
              fontSize: "18px",
            }}
          >
            <box-icon name="cart" color="white" size="sm"></box-icon>
          </Button>

          <Button
            className="mb-7"
            variant="contained"
            style={{
              marginBottom: "28px",
              maxHeight: "45px",
              maxWidth: "45px",
              minWidth: "45px",
              minHeight: "45px",
              borderRadius: 6,
              backgroundColor: "#3C00BB",
              padding: "0px 0px",
              fontSize: "18px",
            }}
          >
            <box-icon name="cart" color="white" size="sm"></box-icon>
          </Button>

          <Button
            className="mb-7"
            variant="contained"
            style={{
              marginBottom: "28px",
              maxHeight: "45px",
              maxWidth: "45px",
              minWidth: "45px",
              minHeight: "45px",
              borderRadius: 6,
              backgroundColor: "#3C00BB",
              padding: "0px 0px",
              fontSize: "18px",
            }}
          >
            <box-icon name="cart" color="white" size="sm"></box-icon>
          </Button>

          <Button
            variant="contained"
            style={{
              maxHeight: "45px",
              maxWidth: "45px",
              minWidth: "45px",
              minHeight: "45px",
              borderRadius: 6,
              backgroundColor: "#3C00BB",
              padding: "0px 0px",
              fontSize: "18px",
            }}
          >
            <box-icon name="cart" color="white" size="sm"></box-icon>
          </Button>
        </div>
      </div>

      <div className="about__main ">
        <div className="about__main_top  w-full h-16"></div>
        <div className="about__main_ p-4 flex">
          <div className="about__brands w-9/12 pr-4">
            <div className="search h-14 w-full rounded-lg"></div>
            <div className="about__brand w-full flex justify-between pt-4 pb-4">
              <div className="brands rounded-lg"></div>
              <div className="brands rounded-lg"></div>
              <div className="brands rounded-lg"></div>
            </div>

            <div className="about__brand_bottom w-full h-9"></div>

            <div className="about__brand w-full flex justify-between pt-4 pb-4">
              <div className="brands rounded-lg "></div>
              <div className="brands rounded-lg"></div>
              <div className="brands rounded-lg"></div>
            </div>
          </div>

          <div className="about__bils w-3/12 bg-totalBg h-full rounded-lg">wef</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
