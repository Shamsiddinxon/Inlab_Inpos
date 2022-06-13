import { useEffect, useState } from "react";
// import axios from "../../axios";
// import router from "next/router";
const SelectRole = ({userRoleChangeHandler}) => {
  // const [roles, setRoles] = useState([]);
  const [isPageOpened, setIsPageOpened] = useState(false);
  // setElRole("admin")
  // console.log(elRole);

  // useEffect(() => {
  //   axios
  //     .get("/api/users/profile", {
  //       headers: {
  //         Authorization: `Bearer ${props.token}`,
  //       },
  //     })
  //     .then((res) => {
  //       setRoles(res.data.data.user.user_roles);
  //       console.log(res.data.data.user.user_roles);
  //       setIsPageOpened(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [props]);
  // console.log(roles);
  // const Select = (e, el) => {
  // console.log(el);
  // window.localStorage.setItem("userInfo", JSON.stringify(el.role));
  // window.localStorage.setItem("token", props.token);
  // router.push("/").finally(() => {
  //   router.reload();
  // });
  // };
  return (
    <>
      {isPageOpened ? (
        <div className="intro-loader__wrapper">
          <div className="intro-loader">{/* <div className='b'></div> */}</div>
        </div>
      ) : (
        <form className="select-role">
          <h1 className="select-role__title">Rolni tanlang</h1>
          <div className="select-role__inputs-wrapper">
            <label
              className="select-role__label"
              // key={index}
              onClick={(e) => {
                // Select(e, el);
                userRoleChangeHandler("admin")
              }}
            >
              <input
                className="select-role__input"
                type="radio"
                name="role"
                value="admin"
              />
              <span className="select-role__custom-radio">Admin</span>
              <div className="select-role__loader"></div>
            </label>

            <label
              className="select-role__label"
              // key={index}
              onClick={(e) => {
                // Select(e, el);
              }}
            >
              <input
                className="select-role__input"
                type="radio"
                name="role"
                value={"superAdmin"}
              />
              <span className="select-role__custom-radio">Super admin</span>
              <div className="select-role__loader"></div>
            </label>

            <label
              className="select-role__label"
              // key={index}
              onClick={(e) => {
                // Select(e, el);
              }}
            >
              <input
                className="select-role__input"
                type="radio"
                name="role"
                value={"sotuvchi"}
              />
              <span className="select-role__custom-radio">Sotuvchi</span>
              <div className="select-role__loader"></div>
            </label>

            {/* {roles.map((el, index)=>
           <label className="select-role__label" key={index} onClick={(e)=>{Select(e,el)}}>
            <input className="select-role__input" type="radio" name="role" value={el.role.name}/>
            <span className="select-role__custom-radio">{el.role.name}</span>
            <div className='select-role__loader'></div>
          </label>
            )} */}
          </div>
        </form>
      )}
    </>
  );
};

export default SelectRole;
