import { useContext } from "react";
import { Context } from "../Context/AuthContex";

const useToken = () => {
    const {token, setToken} = useContext(Context);
  return [token, setToken];
};

export default useToken;
