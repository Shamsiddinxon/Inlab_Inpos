import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import accImg from "../Assests/img/acc.png";
// import { Button } from "@mui/material";

function Cashiers() {
  let [buyModal, setBuyModal] = useState(false);
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
                <button>
                  <i className="bx bx-minus"></i>
                </button>
                <span>100</span>
                <button>
                  <i className="bx bx-plus"></i>
                </button>
              </div>

              <button>
                <i className="bx bx-trash"></i>
              </button>
            </div>
          </div>

          <div className="cashier__buylist-item">
            <p>Quarter Pounder With Cheese</p>
            <div>
              <div className="cashier__buylist-item-counter">
                <button>
                  <i className="bx bx-minus"></i>
                </button>
                <span>100</span>
                <button>
                  <i className="bx bx-plus"></i>
                </button>
              </div>

              <button>
                <i className="bx bx-trash"></i>
              </button>
            </div>
          </div>

          <div className="cashier__buylist-item">
            <p>Quarter Pounder With Cheese</p>
            <div>
              <div className="cashier__buylist-item-counter">
                <button>
                  <i className="bx bx-minus"></i>
                </button>
                <span>100</span>
                <button>
                  <i className="bx bx-plus"></i>
                </button>
              </div>

              <button>
                <i className="bx bx-trash"></i>
              </button>
            </div>
          </div>

          <div className="cashier__buylist-item">
            <p>Quarter Pounder With Cheese</p>
            <div>
              <div className="cashier__buylist-item-counter">
                <button>
                  <i className="bx bx-minus"></i>
                </button>
                <span>100</span>
                <button>
                  <i className="bx bx-plus"></i>
                </button>
              </div>

              <button>
                <i className="bx bx-trash"></i>
              </button>
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
            <Button
              style={{
                backgroundColor: "#FF4806",
                color: "#fff",
                padding: "15px 50px",
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "24px",
              }}
              onClick={(evt) => {
                setBuyModal(false);
              }}
            >
              Cancel
            </Button>
            <Button
              style={{
                padding: "15px 50px",
                backgroundColor: "#CCCCCC",
                color: "#fff",
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "24px",
              }}
              onClick={(evt) => {
                setBuyModal(false);
              }}
            >
              Print order
            </Button>
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
