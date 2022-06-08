import React from "react";
import Button from "@mui/material/Button";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function Main() {
  const [alignment, setAlignment] = React.useState(null);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log(alignment);
  };

  //   const hendelSubmit = (e) => {
  //       e.
  //     // e.prevevtDefault
  //   }

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

          <div className="about__bils w-3/12 bg-totalBg h-full pt-7 px-3.5 rounded-lg">
            <div className="line_box">
              <h2 className="about__bils_title font-normal text-lg">Bills</h2>
            </div>
            <div className="line_box">
              <div className="bils__item mb-5">
                <h3 className="bils__item_title ">Qovun</h3>
                <div className="flex justify-between ">
                  <p className="bils__item_desc">x100</p>
                  <p className="bils__item_desc">1 200 000 so’m</p>
                </div>
              </div>

              <div className="bils__item mb-5">
                <h3 className="bils__item_title ">Qovun</h3>
                <div className="flex justify-between ">
                  <p className="bils__item_desc">x100</p>
                  <p className="bils__item_desc">1 200 000 so’m</p>
                </div>
              </div>

              <div className="bils__item mb-5">
                <h3 className="bils__item_title ">Qovun</h3>
                <div className="flex justify-between ">
                  <p className="bils__item_desc">x100</p>
                  <p className="bils__item_desc">1 200 000 so’m</p>
                </div>
              </div>
            </div>

            <div className="line__box_dashed mb-3.5">
              <div className="total__item flex justify-between mb-3.5">
                <h3 className="bils__item_title ">Subtotal</h3>
                <p className="bils__item_desc">3 600 000 so’m</p>
              </div>
              <div className="total__item flex justify-between mb-3.5">
                <h3 className="bils__item_title ">Tax</h3>
                <p className="bils__item_desc">360 000 so’m</p>
              </div>
            </div>

            <div className="total flex justify-between items-center mb-3.5">
              <h3 className="bils__item_title ">Total</h3>
              <h3 className="bils__item_title1 ">3 960 000 so’m</h3>
            </div>

            <div className="blis_bottom">
              <h3 className="blis_bottom_title">Payment Method</h3>

              <div className="blis_buttons">
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  <ToggleButton className="mr-2" value="card" aria-label="card">
                    <div className="flex flex-col items-center ">
                      <box-icon name="credit-card"></box-icon>
                      <p>Cash</p>
                    </div>
                  </ToggleButton>
                  <ToggleButton value="Cash" aria-label="centered">
                    <div className="flex flex-col items-center ">
                      <box-icon name="money-withdraw"></box-icon>
                      <p>Cash</p>
                    </div>
                  </ToggleButton>
                  <ToggleButton value="qr" aria-label="right aligned">
                    <div className="flex flex-col items-center">
                      <box-icon name="qr-scan"></box-icon>
                      <p>Qr code</p>
                    </div>
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
