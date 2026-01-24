import axios from "../../api/axiosconfig";
import { toast } from "react-toastify";
import { loaduser, removeuser } from "../reducers/UserSlice";
import { useSelector } from "react-redux";

// get the user from the /me api
export const asyncCurrentUser = () => async (dispatch, setState) => {
  try {
    const { data } = await axios.get("/api/auth/currentuser", {
      withCredentials: true,
    });
    if (data.user) dispatch(loaduser(data.user));
    else console.log("User not logged in");
  } catch (error) {
    if(error.response?.status === 401){
      return;
    }
    console.log(error);
  }
};

// use logout api and just navigate to the home page
export const asyncLogoutUser = () => async (dispatch, setState) => {
  try {
    await axios.post(
      "/api/auth/logout",
      {},
      {
        withCredentials: true,
      },
    );
    dispatch(removeuser());
    toast.success("You have logged out!!");
  } catch (error) {
    console.log(error);
  }
};

// just login user and and call the asyncCurrentUser
export const asyncLoginUser = (user) => async (dispatch, setState) => {
  try {
    const { data } = await axios.post("/api/auth/login", user, {
      withCredentials: true,
    });
    if (data.user === undefined) {
      toast.error("Failed to login!!");
      return false;
    } else {
      dispatch(asyncCurrentUser());
      toast.success("Login Successfully!!🙂");
      return true;
    }
  } catch (error) {
    toast.error("Invalid Credentials!!")
    return false;
  }
};

// just register and call asyncLoginUser
export const asyncRegisterUser = (user) => async (dispatch, setState) => {
  try {
    const { data } = await axios.post("/api/auth/register", user);
    if (data.user) {
      dispatch(asyncLoginUser(data.user));
      toast.success("Registered succefully!🙂");
    } else {
      toast.error(data.message || "Registration failed");
    }
  } catch (error) {
    toast.error(
      error.response?.data?.message || error.message || "Registration failed",
    );
  }
};

// just update the user and call the asyncCurrentUser no need for localStorage updated data will be in the database itself
export const asyncUpdateUser = (id, user) => async (dispatch, setState) => {
  try {
    await axios.patch(`/api/auth/updateuser/${id}`, user);
    dispatch(asyncCurrentUser());
  } catch (error) {
    toast.error(
      error.response?.data?.message || error.message || "Update failed",
    );
  }
};

// just call the delete api and then call the removeuser action
export const asyncDeleteUser = (id) => async (dispatch, setState) => {
  try {
    await axios.delete(`/api/auth/deleteuser/${id}`);
    dispatch(removeuser());
    toast.success("Account Deleted!🥲");
  } catch (error) {
    toast.error(
      error.response?.data?.message || error.message || "Delete failed",
    );
  }
};
