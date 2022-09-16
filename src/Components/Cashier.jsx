import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import { useState } from "react";
import accImg from "../Assests/img/acc.png";
// import { Button } from "@mui/material";

function Cashiers() {
  let [buyModal, setBuyModal] = useState(false);

  const [alignment, setAlignment] = React.useState(null);
  // console.log(alignment);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log(alignment);
  };

  return (
    <div className="cashier">
      <div className="cashier__main">
        <div className="cashier__container ">
          <div className="cashier__main-top">
            <div className="relative">
              <button className="cashier__main-top-hamburger">
                <i className="bx bx-menu bx-md"></i>
              </button>
              <input type="text" required />
              <button className="cashier__main-top-search">
                <i className="bx bx-search"></i>
              </button>
            </div>
            <div className="cashier__main-top-acc">
              Jacob Jones
              <img src={accImg} alt="" width="52" height="52" />
            </div>
          </div>

          <div className="cashier__main-hero">
            <Button
              style={{
                backgroundColor: "#2D2D2D",
                color: "#ffffff",
                padding: "15px 35px",
              }}
            >
              Packet
            </Button>
            <Button
              style={{
                backgroundColor: "#2D2D2D",
                color: "#ffffff",
                padding: "15px 35px",
              }}
            >
              Packet
            </Button>
            <Button
              style={{
                backgroundColor: "#2D2D2D",
                color: "#ffffff",
                padding: "15px 35px",
              }}
            >
              Packet
            </Button>
            <Button
              style={{
                backgroundColor: "#2D2D2D",
                color: "#ffffff",
                padding: "15px 35px",
              }}
            >
              Packet
            </Button>
            <Button
              style={{
                backgroundColor: "#2D2D2D",
                color: "#ffffff",
                padding: "15px 35px",
              }}
            >
              Packet
            </Button>
            <Button
              style={{
                backgroundColor: "#2D2D2D",
                color: "#ffffff",
                padding: "15px 35px",
              }}
            >
              Packet
            </Button>
            <Button
              style={{
                backgroundColor: "#2D2D2D",
                color: "#ffffff",
                padding: "15px 35px",
              }}
            >
              Packet
            </Button>
            <Button
              style={{
                backgroundColor: "#2D2D2D",
                color: "#ffffff",
                padding: "15px 35px",
              }}
            >
              Packet
            </Button>
            {/* <Button
              style={{
                backgroundColor: "#2D2D2D",
                color: "#ffffff",
                padding: "15px 35px",
              }}
            >
              Packet
            </Button>
            <Button
              style={{
                backgroundColor: "#2D2D2D",
                color: "#ffffff",
                padding: "15px 35px",
              }}
            >
              Packet
            </Button> */}
          </div>

          <div className="cashier__main-list">
            <div className="cashier__main-list-item">
              <p>Uchimsya schitat i pishem sifri - D. Karabayeva</p>
              <div>
                <i className="bx bxs-barcode"></i>
                <p> 2129817321932389012</p>
              </div>
            </div>

            <div className="cashier__main-list-item">
              <p>Uchimsya schitat i pishem sifri - D. Karabayeva</p>
              <div>
                <i className="bx bxs-barcode"></i>
                <p> 2129817321932389012</p>
              </div>
            </div>

            <div className="cashier__main-list-item">
              <p>Uchimsya schitat i pishem sifri - D. Karabayeva</p>
              <div>
                <i className="bx bxs-barcode"></i>
                <p> 2129817321932389012</p>
              </div>
            </div>

            <div className="cashier__main-list-item">
              <p>Uchimsya schitat i pishem sifri - D. Karabayeva</p>
              <div>
                <i className="bx bxs-barcode"></i>
                <p> 2129817321932389012</p>
              </div>
            </div>

            <div className="cashier__main-list-item">
              <p>Uchimsya schitat i pishem sifri - D. Karabayeva</p>
              <div>
                <i className="bx bxs-barcode"></i>
                <p> 2129817321932389012</p>
              </div>
            </div>

            <div className="cashier__main-list-item">
              <p>Uchimsya schitat i pishem sifri - D. Karabayeva</p>
              <div>
                <i className="bx bxs-barcode"></i>
                <p> 2129817321932389012</p>
              </div>
            </div>

            <div className="cashier__main-list-item">
              <p>Uchimsya schitat i pishem sifri - D. Karabayeva</p>
              <div>
                <i className="bx bxs-barcode"></i>
                <p> 2129817321932389012</p>
              </div>
            </div>

            <div className="cashier__main-list-item">
              <p>Uchimsya schitat i pishem sifri - D. Karabayeva</p>
              <div>
                <i className="bx bxs-barcode"></i>
                <p> 2129817321932389012</p>
              </div>
            </div>

            <div className="cashier__main-list-item">
              <p>Uchimsya schitat i pishem sifri - D. Karabayeva</p>
              <div>
                <i className="bx bxs-barcode"></i>
                <p> 2129817321932389012</p>
              </div>
            </div>

            <div className="cashier__main-list-item">
              <p>Uchimsya schitat i pishem sifri - D. Karabayeva</p>
              <div>
                <i className="bx bxs-barcode"></i>
                <p> 2129817321932389012</p>
              </div>
            </div>

            <div className="cashier__main-list-item">
              <p>Uchimsya schitat i pishem sifri - D. Karabayeva</p>
              <div>
                <i className="bx bxs-barcode"></i>
                <p> 2129817321932389012</p>
              </div>
            </div>

            <div className="cashier__main-list-item">
              <p>Uchimsya schitat i pishem sifri - D. Karabayeva</p>
              <div>
                <i className="bx bxs-barcode"></i>
                <p> 2129817321932389012</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cashier__right">
        <div className="cashier__buylist">
          <div className="cashier__buylist-item">
            <p>Quarter Pounder With Cheese</p>
            <div>
              <div className="cashier__buylist-item-counter">
                <Button
                  style={{
                    backgroundColor: "#404040",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "5px",
                    maxWidth: "34px",
                    minWidth: "34px",
                  }}
                >
                  <i className="bx bx-minus"></i>
                </Button>
                <span>100</span>
                <Button
                  style={{
                    backgroundColor: "#404040",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "5px",
                    maxWidth: "34px",
                    minWidth: "34px",
                  }}
                >
                  <i className="bx bx-plus"></i>
                </Button>
              </div>

              <Button
                style={{
                  backgroundColor: "#404040",
                  color: "#fff",
                  borderRadius: "10px",
                  padding: "5px",
                  maxWidth: "34px",
                  minWidth: "34px",
                }}
              >
                <i className="bx bx-trash"></i>
              </Button>
            </div>
          </div>

          <div className="cashier__buylist-item">
            <p>Quarter Pounder With Cheese</p>
            <div>
              <div className="cashier__buylist-item-counter">
                <Button
                  style={{
                    backgroundColor: "#404040",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "5px",
                    maxWidth: "34px",
                    minWidth: "34px",
                  }}
                >
                  <i className="bx bx-minus"></i>
                </Button>
                <span>100</span>
                <Button
                  style={{
                    backgroundColor: "#404040",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "5px",
                    maxWidth: "34px",
                    minWidth: "34px",
                  }}
                >
                  <i className="bx bx-plus"></i>
                </Button>
              </div>

              <Button
                style={{
                  backgroundColor: "#404040",
                  color: "#fff",
                  borderRadius: "10px",
                  padding: "5px",
                  maxWidth: "34px",
                  minWidth: "34px",
                }}
              >
                <i className="bx bx-trash"></i>
              </Button>
            </div>
          </div>

          <div className="cashier__buylist-item">
            <p>Quarter Pounder With Cheese</p>
            <div>
              <div className="cashier__buylist-item-counter">
                <Button
                  style={{
                    backgroundColor: "#404040",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "5px",
                    maxWidth: "34px",
                    minWidth: "34px",
                  }}
                >
                  <i className="bx bx-minus"></i>
                </Button>
                <span>100</span>
                <Button
                  style={{
                    backgroundColor: "#404040",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "5px",
                    maxWidth: "34px",
                    minWidth: "34px",
                  }}
                >
                  <i className="bx bx-plus"></i>
                </Button>
              </div>

              <Button
                style={{
                  backgroundColor: "#404040",
                  color: "#fff",
                  borderRadius: "10px",
                  padding: "5px",
                  maxWidth: "34px",
                  minWidth: "34px",
                }}
              >
                <i className="bx bx-trash"></i>
              </Button>
            </div>
          </div>

          <div className="cashier__buylist-item">
            <p>Quarter Pounder With Cheese</p>
            <div>
              <div className="cashier__buylist-item-counter">
                <Button
                  style={{
                    backgroundColor: "#404040",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "5px",
                    maxWidth: "34px",
                    minWidth: "34px",
                  }}
                >
                  <i className="bx bx-minus"></i>
                </Button>
                <span>100</span>
                <Button
                  style={{
                    backgroundColor: "#404040",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "5px",
                    maxWidth: "34px",
                    minWidth: "34px",
                  }}
                >
                  <i className="bx bx-plus"></i>
                </Button>
              </div>

              <Button
                style={{
                  backgroundColor: "#404040",
                  color: "#fff",
                  borderRadius: "10px",
                  padding: "5px",
                  maxWidth: "34px",
                  minWidth: "34px",
                }}
              >
                <i className="bx bx-trash"></i>
              </Button>
            </div>
          </div>
        </div>

        <div className="cashier__buy">
          <p className="">
            Subtotal <span>$62.40</span>
          </p>
          <p className="cashier__buy-subtotal">
            Tax <span>$6.24</span>
          </p>

          <h4>
            Total <span>$68.64</span>
          </h4>

          <Button
            className="cashier__buy-btn"
            style={{
              backgroundColor: "#8bc34a",
              padding: "15px",
            }}
            onClick={() => {
              setBuyModal(true);
            }}
          >
            Pay
          </Button>
        </div>
      </div>
      {buyModal ? (
        <div className="cashier__buymodal">
          <div className="cashier__buymodal-main">
            <ToggleButtonGroup
              className="flex justify-between"
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton className="mr-2" value="card" aria-label="card">
                <div className="flex flex-col items-center ">
                  {/* <box-icon name="credit-card"></box-icon> */}
                  <i className="bx bxs-credit-card"></i>
                  <p>Cash</p>
                </div>
              </ToggleButton>
              <ToggleButton className="mr-2" value="Cash" aria-label="centered">
                <div className="flex flex-col items-center ">
                  {/* <box-icon name="money-withdraw"></box-icon> */}
                  <i className="bx bx-money-withdraw"></i>
                  <p>Cash</p>
                </div>
              </ToggleButton>
              <ToggleButton value="qr" aria-label="right aligned">
                <div className="flex flex-col items-center">
                  {/* <box-icon name="qr-scan"></box-icon> */}
                  <i className="bx bx-qr-scan"></i>
                  <p>Qr code</p>
                </div>
              </ToggleButton>
            </ToggleButtonGroup>
            <div className="buy-btns">
              <Button
                style={{
                  textTransform: "capitalize",
                  backgroundColor: "#FF4806",
                  color: "#fff",
                  padding: "15px 50px",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "24px",
                }}
                onClick={(evt) => {
                  setBuyModal(false);
                }}
              >
                Cancel
              </Button>
              {alignment ? (
                <Button
                  style={{
                    textTransform: "capitalize",
                    padding: "15px 50px",
                    backgroundColor: "#8BC34A",
                    color: "#fff",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "24px",
                  }}
                  onClick={(evt) => {
                    setBuyModal(false);
                  }}
                >
                  Print order
                </Button>
              ) : (
                <Button
                  style={{
                    textTransform: "capitalize",
                    padding: "15px 50px",
                    backgroundColor: "#CCCCCC",
                    color: "#fff",
                    fontWeight: "500",
                    fontSize: "20px",
                    lineHeight: "24px",
                  }}
                >
                  Print order
                </Button>
              )}
            </div>
          </div>
          <div
            className="overflow"
            onClick={(evt) => {
              setBuyModal(false);
            }}
          ></div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Cashiers;
