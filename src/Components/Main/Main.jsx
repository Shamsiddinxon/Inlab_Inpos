import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import SinglItem from "../../Hooks/singlItemHook";

function Main() {
  const [, setSinglItem] = SinglItem();
  let [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  useEffect(() => {
    axios
      .get("https://fortniteapi.io/v2/shop?lang=en", {
        headers: {
          Authorization: "0c13c2aa-0a2cec03-b5455c56-766ae857",
        },
      })
      .then((res) => {
        setList(res.data.shop);
        window.localStorage.setItem("list", JSON.stringify(res.data.shop));
      });
  }, []);

  return (
    <div className="main w-11/12 mx-auto">
      <div className="">
        {list ? (
          <div className="main_list flex justify-around">
            {list.map((item) => (
              <div className="main_item pb-4" key={item.offerId}>
                <img
                  className="main_item_img"
                  src={item.displayAssets[0].full_background}
                  alt=""
                />
                <h3 className="main_item_title mt-3 ml-4">
                  {item.displayName}
                </h3>
                <p className="main_item_price mb-1 ml-4">
                  $ {item.price.finalPrice} USD
                </p>
                <p className="main_item_desc mb-1 ml-4">
                  {item.displayDescription}
                </p>
                <p className="main_item_data mb-1 ml-4">
                  {item.firstReleaseDate}
                </p>
                <Button
                  onClick={(e) => {}}
                  variant="outlined"
                  className="p-0 mb-1 ml-4"
                >
                  <NavLink to="/about" className="p-2">
                    Open
                  </NavLink>
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}

        {/* <div className="main_item pb-4">
          <img className="main_item_img" src={img} alt="" />
          <h3 className="main_item_title mt-3 ml-4">GALAXIAN</h3>
          <p className="main_item_price mb-1 ml-4">$ 300 USD</p>
          <p className="main_item_desc mb-1 ml-4">MISSION: DESTROY ALIENS.</p>
          <p className="main_item_data mb-1 ml-4">2022-06-30</p>
          <Button variant="outlined" className="p-0 mb-1 ml-4">
            <NavLink to="/login" className="p-2">
              Open
            </NavLink>
          </Button>
        </div>

        <div className="main_item pb-4">
          <img className="main_item_img" src={img} alt="" />
          <h3 className="main_item_title mt-3 ml-4">GALAXIAN</h3>
          <p className="main_item_price mb-1 ml-4">$ 300 USD</p>
          <p className="main_item_desc mb-1 ml-4">MISSION: DESTROY ALIENS.</p>
          <p className="main_item_data mb-1 ml-4">2022-06-30</p>
          <Button variant="outlined" className="p-0 mb-1 ml-4">
            <NavLink to="/login" className="p-2">
              Open
            </NavLink>
          </Button>
        </div>

        <div className="main_item pb-4">
          <img className="main_item_img" src={img} alt="" />
          <h3 className="main_item_title mt-3 ml-4">GALAXIAN</h3>
          <p className="main_item_price mb-1 ml-4">$ 300 USD</p>
          <p className="main_item_desc mb-1 ml-4">MISSION: DESTROY ALIENS.</p>
          <p className="main_item_data mb-1 ml-4">2022-06-30</p>
          <Button variant="outlined" className="p-0 mb-1 ml-4">
            <NavLink to="/login" className="p-2">
              Open
            </NavLink>
          </Button>
        </div>

        <div className="main_item pb-4">
          <img className="main_item_img" src={img} alt="" />
          <h3 className="main_item_title mt-3 ml-4">GALAXIAN</h3>
          <p className="main_item_price mb-1 ml-4">$ 300 USD</p>
          <p className="main_item_desc mb-1 ml-4">MISSION: DESTROY ALIENS.</p>
          <p className="main_item_data mb-1 ml-4">2022-06-30</p>
          <Button variant="outlined" className="p-0 mb-1 ml-4">
            <NavLink to="/login" className="p-2">
              Open
            </NavLink>
          </Button>
        </div>

        <div className="main_item pb-4">
          <img className="main_item_img" src={img} alt="" />
          <h3 className="main_item_title mt-3 ml-4">GALAXIAN</h3>
          <p className="main_item_price mb-1 ml-4">$ 300 USD</p>
          <p className="main_item_desc mb-1 ml-4">MISSION: DESTROY ALIENS.</p>
          <p className="main_item_data mb-1 ml-4">2022-06-30</p>
          <Button variant="outlined" className="p-0 mb-1 ml-4">
            <NavLink to="/login" className="p-2">
              Open
            </NavLink>
          </Button>
        </div> */}
      </div>
    </div>
  );
}

export default Main;
