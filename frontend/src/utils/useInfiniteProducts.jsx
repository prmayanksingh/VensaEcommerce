import { useEffect, useState } from "react";
import axios from "../api/axiosconfig";
import { loadlazyproduct } from "../store/reducers/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

const useInfiniteProducts = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  const [hasMore, sethasMore] = useState(true);

  const fetchMoreProducts = async () => {
    try {
      const { data } = await axios.get(
        `/api/products?_limit=8&_start=${products.length}`
      );
      if (data.length == 0) {
        sethasMore(false);
      } else {
        sethasMore(true);
        dispatch(loadlazyproduct(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMoreProducts();
  }, []);

  return { hasMore, products, fetchMoreProducts };
};

export default useInfiniteProducts;
