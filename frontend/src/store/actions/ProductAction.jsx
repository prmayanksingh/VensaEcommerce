import axios from "../../api/axiosconfig";
import { toast } from "react-toastify";
import { removeProduct, updateProduct, loadlazyproduct } from "../reducers/ProductSlice";

export const asyncCreateProduct = (product) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/api/products", product);
    if (data.product) {
      dispatch(loadlazyproduct([data.product]));
    }
    toast.success("product created successfully!!🙂");
  } catch (error) {
    console.log(error);
  }
};

export const asyncUpdateProduct = (id, product) => async (dispatch, getState) => {
  try {
    const { data } = await axios.patch(`/api/products/${id}`, product);
    dispatch(updateProduct(data))
    toast.success("Product Updated Successfully!!🙂");
  } catch (error) {
    console.log(error);
  }
};

export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
  try {
    await axios.delete(`/api/products/${id}`);
    dispatch(removeProduct(id))
  } catch (error) {
    console.log(error);
  }
};

