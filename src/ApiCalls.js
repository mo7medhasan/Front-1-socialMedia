
import axios from "axios";

const API =process.env.REACT_APP_APIS_SOCIAL;
export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
 
    const res = await axios.post(API+"/auth/login", userCredential);
    
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};