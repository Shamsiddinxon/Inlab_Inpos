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
    <div className="About w-full h-screen flex">
      <div className="about__left  flex items-center flex-col pt-24   bg-brandGreen">
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

      <div className="about__main h-full">
        <div className="about__main_  flex ">
          <div className="main__top w-9/12 flex flex-col ">
            <div className="about__brands h-3/6">
              <div className=" h-14 w-full rounded-lg px-4">
                <div className="search ">ytftyu</div>
              </div>
              <div className="about__brand w-full flex flex-wrap justify-between p-2 ">
                <div className="brands rounded-lg m-2"></div>
                <div className="brands rounded-lg m-2"></div>
                <div className="brands rounded-lg m-2"></div>
                <div className="brands rounded-lg m-2"></div>
                <div className="brands rounded-lg m-2"></div>
                <div className="brands rounded-lg m-2"></div>
              </div>
            </div>

            <div className="main__bottom w-full h-3/6 ">
            <div className="about__brand1 w-full flex flex-wrap justify-between p-3.5 ">
                <div className="brands1 rounded-lg m-0.5"></div>
                <div className="brands1 rounded-lg m-0.5"></div>
                <div className="brands1 rounded-lg m-0.5"></div>

                <div className="brands1 rounded-lg m-0.5"></div>
                <div className="brands1 rounded-lg m-0.5"></div>
                <div className="brands1 rounded-lg m-0.5"></div>
              </div>
            </div>
          </div>
          <div className="w-3/12 py-4 pr-4">
            <div className="about__bils w-full bg-totalBg h-full relative pt-7 pb-230px px-3.5  rounded-lg">
              <div className=" overflow-y-auto h-full">
                <div className="line_box">
                  <h2 className="about__bils_title font-normal text-lg">
                    Bills
                  </h2>
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

                <div className="total flex justify-between items-center mb-4">
                  <h3 className="bils__item_title ">Total</h3>
                  <h3 className="bils__item_title1 ">3 960 000 so’m</h3>
                </div>

                <div className="absolute left-0 bottom-4 w-full px-3.5">
                  <div className="blis_bottom">
                    <h3 className="blis_bottom_title mb-3.5">Payment Method</h3>

                    <div className="blis_buttons flex flex-col justify-center mb-4">
                      <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                      >
                        <ToggleButton
                          className="mr-2"
                          value="card"
                          aria-label="card"
                        >
                          <div className="flex flex-col items-center ">
                            <box-icon name="credit-card"></box-icon>
                            <p>Cash</p>
                          </div>
                        </ToggleButton>
                        <ToggleButton
                          className="mr-2"
                          value="Cash"
                          aria-label="centered"
                        >
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
                      <Button
                        className="normal-case mt-4 font-medium"
                        style={{
                          backgroundColor: "#3C00BB",
                          color: "#fff",
                          padding: "15px 0px",
                          fontWeight: 600,
                          fontSize: "15px",
                        }}
                      >
                        Print order
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
