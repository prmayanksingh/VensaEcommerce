import { CgProfile } from "react-icons/cg";
import { IoMdLogIn } from "react-icons/io";
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { LuShoppingCart } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const { users } = useSelector((state) => state.userReducer);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuAnime = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <nav className="h-[3.2rem] bg-gray-200 px-5 sm:px-7 xl:px-17 flex items-center justify-between text-[clamp(10px,4vw,16px)] sm:text-[17px]">
      <Link to={"/"} className="font-['Monument'] text-[1.5em] font-bold">
        vensa.co
      </Link>

      <div className="md:hidden flex items-center">
        <button
          onClick={menuOpenHandler}
          className={`${isMenuOpen ? "hidden" : ""} p-1 rounded`}
        >
          <HiOutlineBars3 className="text-[1.7em]" />
        </button>
        <button
          onClick={menuOpenHandler}
          className={`${!isMenuOpen ? "hidden" : ""} p-1 rounded`}
        >
          <RxCross2 className="text-[1.7em]" />
        </button>
      </div>

      <motion.div
        variants={menuAnime}
        initial="hidden"
        animate={isMenuOpen ? "show" : "hidden"}
        exit="exit"
        className={`${
          isMenuOpen ? "" : "hidden"
        } mt-[3.2rem] md:hidden w-[45%] absolute z-[60] top-0 right-0 text-right`}
      >
        <div className="bg-gray-100 rounded-b px-[.6em] py-[.8em] flex flex-col gap-[.3em] text-[1em] sm:text-[.85em] shadow-lg">
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              `flex gap-2 items-center px-[.8em] py-[.2em] rounded ${
                isActive ? "bg-gray-200" : ""
              }`
            }
          >
            <BsBoxSeam className="text-[1.1em]" />
            <span>Products</span>
          </NavLink>

          <div className="h-[.1rem] w-[100%] flex self-center bg-gray-200"></div>

          {users?.isAdmin ? (
            <>
              <NavLink
                to={"/admin/create-product"}
                className={({ isActive }) =>
                  `flex gap-2 items-center px-[.8em] py-[.2em] rounded ${
                    isActive ? "bg-gray-200" : ""
                  }`
                }
              >
                <FaPlus className="text-[1.1em]" />
                <span>Create Product</span>
              </NavLink>
              <div className="h-[.1rem] w-[100%] flex self-center bg-gray-200"></div>
            </>
          ) : (
            <></>
          )}

          {users?.isAdmin == false ? (
            <>
              <NavLink
                to={"/cart"}
                className={({ isActive }) =>
                  `flex gap-2 items-center px-[.8em] py-[.2em] rounded ${
                    isActive ? "bg-gray-200" : ""
                  }`
                }
              >
                <LuShoppingCart className="text-[1.1em]" />
                <span>Cart</span>
              </NavLink>
              <div className="h-[.1rem] w-[100%] flex self-center bg-gray-200"></div>
            </>
          ) : (
            <></>
          )}

          {users ? (
            <>
              <NavLink
                to={"/profile"}
                className={({ isActive }) =>
                  `flex gap-2 items-center px-[.8em] py-[.2em] rounded ${
                    isActive ? "bg-gray-200" : ""
                  }`
                }
              >
                <CgProfile className="text-[1.1em]" />
                <span>Profile</span>
              </NavLink>
            </>
          ) : (
            <NavLink
              to={"/auth"}
              className={({ isActive }) =>
                `flex gap-2 items-center px-[.8em] py-[.2em] rounded ${
                  isActive ? "bg-gray-200" : ""
                }`
              }
            >
              <IoMdLogIn className="text-[1.1em]" />
              <span>Login</span>
            </NavLink>
          )}
        </div>
      </motion.div>

      <div className="hidden text-[1em] text-[#515151] font-semibold md:flex gap-5 sm:gap-7 xl:gap-10">
        <NavLink to={"/products"} className="flex gap-1.5 items-center">
          <BsBoxSeam className="text-[1.1em]" />
          <span>Products</span>
        </NavLink>
        {users?.isAdmin ? (
          <NavLink
            to={"/admin/create-product"}
            className="flex gap-1 items-center"
          >
            <FaPlus className="text-[1.1em]" />
            <span>Create Product</span>
          </NavLink>
        ) : (
          <></>
        )}
        {users?.isAdmin == false ? (
          <NavLink to={"/cart"} className="flex gap-1.5 items-center">
            <LuShoppingCart className="text-[1.1em]" />
            <span>Cart</span>
          </NavLink>
        ) : (
          <></>
        )}
        {users ? (
          <NavLink to={"/profile"} className="flex gap-1.5 items-center">
            <CgProfile className="text-[1.1em]" />
            <span>Profile</span>
          </NavLink>
        ) : (
          <NavLink to={"/auth"} className="flex gap-1.5 items-center">
            <IoMdLogIn className="text-[1.1em]" />
            <span>Login</span>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Nav;
