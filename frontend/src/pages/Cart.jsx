import { FaArrowLeftLong } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../store/actions/UserAction";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Cart = () => {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const increamentHandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    copyuser.cart[index] = {
      product,
      quantity: copyuser.cart[index].quantity + 1,
    };
    dispatch(asyncUpdateUser(copyuser._id, copyuser));
  };

  const decreamentHandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    if (users.cart[index].quantity > 1) {
      copyuser.cart[index] = {
        product,
        quantity: copyuser.cart[index].quantity - 1,
      };
    } else {
      copyuser.cart.splice(index, 1);
    }
    dispatch(asyncUpdateUser(copyuser._id, copyuser));
  };

  let totalPrice = 0;
  users?.cart.forEach((elem) => {
    totalPrice += parseInt(elem.product.price) * parseInt(elem.quantity);
  });
  
  const checkoutHandler = () => {
    if (confirm("Confirm the order!!")) {
      toast.success("Order Placed!!😁");
      const copyuser = { ...users, cart: [] };
      dispatch(asyncUpdateUser(copyuser._id, copyuser));
    }
  };

  const container = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const cardContainer = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
    exit: { opacity: 0, y: 10 },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: 20, tansition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="flex py-[1.2em] px-[1.5em] md:px-[1.5em]">
        <div className="w-[10%]  flex items-center justify-center">
          <Link
            to={-1}
            className="text-[1.1em] px-[1.2em] py-[.25em] rounded text-white bg-gray-500"
          >
            <FaArrowLeftLong />
          </Link>
        </div>
        <div className="w-[80%]  flex justify-center">
          <h1 className="text-[1.4em] sm:text-[1.7em] font-bold uppercase">
            Your Cart
          </h1>
        </div>
        <div className="w-[10%] "></div>
      </div>
      {users?.cart[0] != undefined ? (
        <motion.div
          variants={cardContainer}
          className="px-[1.7em] md:px-[1.4em] py-[1.5em] mb-[1em] flex flex-col items-center gap-[2.3em] md:gap-[1.1em] text-[3.7vw] sm:text-[20px]"
        >
          {users?.cart.map((elem, index) => (
            <motion.div
              variants={cardItem}
              key={elem.product._id || index}
              className="md:w-[36.5em] lg:w-[45em] md:h-[5em] lg:h-[5.5em] md:bg-gray-200 md:px-[.9em] lg:px-[1.1em] md:py-[.9em]  md:rounded-lg flex flex-col md:flex-row items-center md:justify-between gap-[.4em] md:gap-[.9em] lg:gap-[1.3em]"
            >
              <div className="w-full md:h-full md:w-[6em]">
                <img
                  className="w-full h-full object-cover object-center mb-[.6em] rounded"
                  src={elem.product.image}
                  alt="Product Image"
                />
              </div>
              <h1 className="text-[1.2em] md:text-[.9em] font-bold text-center text-gray-600">
                {elem.product.name.slice(0, 30)}...
              </h1>
              <h1 className="text-[.9em] font-bold text-gray-500">
                {elem.product.category}
              </h1>
              <h1 className=" text-[.9em] font-bold flex items-center justify-center">
                <MdCurrencyRupee className="text-[1.1em] mt-[.15em]" />
                {elem.product.price}
              </h1>
              <div className="w-fit px-2 py-1 my-[0.3em] lg:my-[0.6em] text-[1em] md:text-[.8em] rounded flex items-center gap-[0.5em] outline translate-x-[3%]">
                <FiMinus
                  onClick={() => decreamentHandler(index, elem.product)}
                  className="active:scale-[85%]"
                />
                <input
                  readOnly
                  value={elem.quantity}
                  className="w-[2em] text-center"
                  type="text"
                />
                <FiPlus
                  onClick={() => increamentHandler(index, elem.product)}
                  className="active:scale-[85%]"
                />
              </div>
            </motion.div>
          ))}
          <motion.div
            variants={cardContainer}
            className="w-full md:w-[20em] p-[1.7em] md:p-[1.2em] mt-[.7em] text-center flex flex-col items-center gap-[.1em] outline rounded-lg bg-gray-100"
          >
            <h1 className="text-[1.2em] md:text-[.9em]">
              You have {users?.cart.length} items in cart.
            </h1>
            <h1 className="flex text-[1.2em] md:text-[.9em]">
              Total Price:{" "}
              <span className="flex">
                <MdCurrencyRupee className="text-[1.1em] mt-[.15em]" />
                {totalPrice}
              </span>
            </h1>
            <button
              onClick={checkoutHandler}
              className="px-[1.5em] py-[.4em] text-[1.2em] md:text-[.8em] mt-[.6em] rounded bg-black text-white hover:bg-gray-700 "
            >
              Proceed to checkout
            </button>
          </motion.div>
        </motion.div>
      ) : (
        <h1 className="text-[1.3em] text-gray-500 text-center mt-[1.5em]">
          Your Cart is empty!!🥲
        </h1>
      )}
    </motion.section>
  );
};

export default Cart;
