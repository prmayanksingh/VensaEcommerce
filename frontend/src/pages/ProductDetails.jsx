import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncDeleteProduct } from "../store/actions/ProductAction";
import { toast } from "react-toastify";
import { asyncUpdateUser } from "../store/actions/UserAction";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const [quantity, setquantity] = useState(1);
  const { id } = useParams();
  const { products } = useSelector((state) => state.productReducer);
  const { users } = useSelector((state) => state.userReducer);
  const product = products?.find((product) => product._id === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartHandler = (id) => {
    const copyuser = { ...users, cart: [...users.cart] };
    const x = copyuser.cart.findIndex((c) => c.product._id == id);

    if (x == -1) {
      copyuser.cart.push({ product, quantity: quantity });
    } else {
      copyuser.cart[x] = {
        product,
        quantity: copyuser.cart[x].quantity + quantity,
      };
    }
    setquantity(1);
    dispatch(asyncUpdateUser(copyuser._id, copyuser));
    toast.success("Added to Cart!!");
  };

  const incrementHandler = () => {
    setquantity(quantity + 1);
  };

  const decrementHandler = () => {
    if (quantity > 1) setquantity(quantity - 1);
  };

  const deleteHandler = () => {
    if (confirm("Are you sure want to delete the product?!")) {
      dispatch(asyncDeleteProduct(id));
      navigate("/products");
      toast.success("Product deleted!!");
    }
  };

  const buynowHandler = () => {
    if (confirm("Confirm the order!!")) {
      toast.success("Order Placed!!😁");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      }}
      exit={{
        opacity: 0,
        y: 10,
        transition: { duration: 0.3, ease: "easeIn" },
      }}
    >
      <div className="flex py-[1.4em] px-[1.5em] md:px-[1.5em]">
        <div className="w-[10%] flex items-center justify-center">
          <Link
            to={-1}
            className="text-[1em] px-[1.2em] py-[.25em] rounded text-white bg-gray-500"
          >
            <FaArrowLeftLong />
          </Link>
        </div>
      </div>
      {products ? (
        <div className="lg:min-h-[calc(100vh-3.2rem)] flex flex-col lg:flex-row lg:justify-center p-[2em] sm:p-[3em] md:p-[3.5em] lg:px-[6em] lg:p-[2.2em] pt-[1em] sm:pt-[1.5em] md:pt-[1.5em] lg:pt-[.8em] text-[clamp(10px,3.7vw,15px] sm:text-[clamp(10px,2.2vw,16px)] md:text-[clamp(10px,1.9vw,17px)] lg:text-[16px] gap-[0.7em] lg:gap-[4em]">
          <div className="w-full h-[20em] rounded sm:h-[36em] md:h-[40em] lg:h-[38vw] lg:w-[40%]">
            <img
              className="h-full w-full object-cover object-center rounded"
              src={product?.image}
              alt={product?.title || "Product image"}
              width="640"
              height="640"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="lg:w-[50%] p-2 flex flex-col gap-[.4em] lg:gap-[.4em]">
            <h1 className="text-[1.3em] md:text-[1.5em] lg:text-[2.2em] font-bold">
              {product?.name}
            </h1>
            <div className="w-full flex lg:flex-col-reverse justify-between lg:gap-[.4em]">
              <h2 className="text-[1.1em]">{product?.category}</h2>
              <h3 className="text-[1.2em] ml-[-.3em]">⭐⭐⭐⭐⭐</h3>
            </div>
            <h2 className="self-start flex items-center text-[1em] lg:text-[1.4em] ml-[-.2em]">
              <MdCurrencyRupee />
              {product?.price}
            </h2>
            <div className="self-start w-fit px-2 py-1 my-[0.3em] lg:my-[0.6em] text-[1em] rounded flex items-center gap-[0.5em] outline">
              <FiMinus
                className="active:scale-[85%]"
                onClick={decrementHandler}
              />
              <input
                readOnly
                value={quantity}
                className="w-[2em] text-center"
                type="text"
              />
              <FiPlus
                className="active:scale-[85%]"
                onClick={incrementHandler}
              />
            </div>
            {/* w-[21.9em] */}
            {users?.isAdmin ? (
              <div className="flex flex-col sm:flex-row items-center gap-[1.1em] mt-[.4em]">
                <Link
                  to={`/admin/update-product/${product?._id}`}
                  className="h-[3em] w-full flex items-center justify-center rounded outline active:scale-[98%] hover:bg-gray-100"
                >
                  Update
                </Link>
                <button
                  onClick={deleteHandler}
                  className="h-[3em] w-full rounded bg-black text-white active:scale-[98%] hover:bg-gray-700"
                >
                  Delete
                </button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center gap-[1.1em] mt-[.4em]">
                <button
                  onClick={() => cartHandler(product._id)}
                  className="h-[3em] w-full flex items-center justify-center rounded outline active:scale-[98%] hover:bg-gray-100"
                >
                  Add to cart
                </button>
                <button
                  onClick={buynowHandler}
                  className="h-[3em] w-full rounded bg-black text-white active:scale-[98%] hover:bg-gray-700"
                >
                  Buy Now
                </button>
              </div>
            )}

            <div className="flex flex-col gap-[0.2em] lg:gap-[0.3em] mt-[1.2em] lg:mt-[1.5em]">
              <h2 className="text-[1.2em] lg:text-[1.4em] font-bold">
                Discription
              </h2>
              <h3 className="text-[1em] lg:text-[1.1em] lg:leading-[1.3em]">
                {product?.description}
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-[1.5em] my-[2em]">Loading...</h1>
      )}
    </motion.section>
  );
};

export default ProductDetails;
