import axios from "../../api/axiosconfig";
import { toast } from "react-toastify";
import { loaduser, removeuser } from "../reducers/UserSlice";
import { useSelector } from "react-redux";


export const asyncCurrentUser = () => (dispatch, setState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loaduser(user));
    else console.log("User not logged in");
  } catch (error) {
    console.log(error);
  }
};

export const asyncLogoutUser = () => async (dispatch, setState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeuser());
    toast.success("You have logged out!!");
  } catch (error) {
    console.log(error);
  }
};

export const asyncLoginUser = (user) => async (dispatch, setState) => {
  try {
    const { data } = await axios.post("/api/auth/login", user);
    if (data.user === undefined) {
      toast.error("Failed to login!!");
      return false;
    } else {
      localStorage.setItem("user", JSON.stringify(data.user));
      dispatch(asyncCurrentUser());
      toast.success("Login Successfully!!🙂");
      return true;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const asyncRegisterUser = (user) => async (dispatch, setState) => {
  try {
    const {data} = await axios.post("/api/auth/register", user);
    if (data.user) {
      dispatch(asyncLoginUser(data.user));
      toast.success("Registered succefully!🙂");
    } else {
      toast.error(data.message || "Registration failed");
    }
  } catch (error) {
    toast.error(error.response?.data?.message || error.message || "Registration failed");
  }
};

export const asyncUpdateUser = (id, user) => async (dispatch, setState) => {
  try {
    const { data } = await axios.patch(`/api/auth/updateuser/${id}`, user);
    localStorage.setItem("user", JSON.stringify(data.user));
    dispatch(asyncCurrentUser());
  } catch (error) {
    toast.error(error.response?.data?.message || error.message || "Update failed");
  }
};

export const asyncDeleteUser = (id) => async (dispatch, setState) => {
  try {
    await axios.delete(`/api/auth/deleteuser/${id}`);
    localStorage.removeItem("user");
    dispatch(removeuser());
    toast.success("Account Deleted!🥲");
  } catch (error) {
    toast.error(error.response?.data?.message || error.message || "Delete failed");
  }
};
