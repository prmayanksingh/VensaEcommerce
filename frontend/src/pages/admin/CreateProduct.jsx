// import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { asyncCreateProduct } from "../../store/actions/ProductAction";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submiteHandler = (product) => {
    // product.id = nanoid();
    dispatch(asyncCreateProduct(product));
    navigate("/products");
    reset();
  };

  const container = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const formAnime = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const textGroup = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
    exit: { opacity: 1, y: 0 },
  };

  const textItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="text-[clamp(11px,3.7vw,15px)] sm:text-[clamp(13px,2.6vw,16px)] md:text-[clamp(13px,2vw,17px)] lg:text-[1.3vw] xl:text-[16px] bg-[#F5F6F8]"
    >
      <div className="min-h-[calc(100vh-3.2rem)] p-4 px-[1.6em] md:px-[3em] lg:px-[3em] pt-[3.2em] md:pt-[5em] lg:py-[3em] xl:px-[9em] bg-[#F5F6F8] flex flex-col lg:flex-row lg:items-center gap-[3.5em] md:gap-[4em] xl:gap-[9em]">
        <motion.div
          variants={textGroup}
          className="w-full lg:w-[45%] flex flex-col gap-[1.5em] lg:gap-[2em] xl:gap-[2.3em]"
        >
          <motion.h1
            variants={textItem}
            className="text-[3.2em] lg:text-[3.7em] xl:text-[4.3em] leading-[1.2em]"
          >
            <span className="font-bold">Create</span> &{" "}
            <span className="font-bold">Launch</span> <br /> Your Product
          </motion.h1>
          <motion.h3
            variants={textItem}
            className="text-[1em] xl:text-[1.2em] leading-[1.2em] text-gray-500"
          >
            Fill in the product information to add new items to your catalog.
            Make them available instantly to your customers.
          </motion.h3>
        </motion.div>
        <motion.div
          variants={formAnime}
          className="lg:w-[45%] xl:w-[40%] bg-white p-[1.7em] md:p-[2.5em]  lg:p-9 xl:p-11 rounded-3xl shadow-2xl"
        >
          <form
            onSubmit={handleSubmit(submiteHandler)}
            className="flex flex-col gap-[1.3em] md:gap-[1.5em] lg:gap-[1.5em] xl:gap-[2em]"
          >
            <div className="flex flex-col gap-[0.2em]">
              <label className="text-[1.1em] text-gray-500" htmlFor="image">
                Image
              </label>
              <input
                required
                {...register("image", { required: "image is required" })}
                className="px-[.9em] py-[.3em] text-[1em] rounded-md outline-none bg-gray-100 text-gray-500"
                id="image"
                type="url"
                placeholder="Enter image URL"
              />
            </div>
            <div className="flex flex-col gap-[0.2em]">
              <label className="text-[1.1em] text-gray-500" htmlFor="name">
                Name
              </label>
              <input
                required
                {...register("name", { required: "name is required" })}
                className="px-[.9em] py-[.3em] text-[1em] rounded-md outline-none bg-gray-100 text-gray-500"
                id="name"
                type="text"
                placeholder="Enter product Name"
              />
            </div>
            <div className="flex justify-between">
              <div className="w-[50%] flex flex-col gap-[0.2em]">
                <label
                  className="text-[1.1em] text-gray-500"
                  htmlFor="category"
                >
                  Category
                </label>
                <select
                  required
                  {...register("category", {
                    required: "category is required",
                  })}
                  className="px-[.9em] py-[.5em] text-[1em] rounded-md outline-none bg-gray-100 text-gray-500"
                  id="category"
                >
                  <option value="">Select Category</option>
                  <option value="men-clothing">Men's Clothing</option>
                  <option value="women-clothing">Women's Clothing</option>
                  <option value="wallets">Wallets</option>
                  <option value="watches">Watches</option>
                  <option value="bags">Bags & Backpacks</option>
                  <option value="footwear">Footwear</option>
                  <option value="accessories">Accessories</option>
                  <option value="eyewear">Eyewear</option>
                  <option value="skincare">Skincare</option>
                  <option value="electronics">Electronics</option>
                  <option value="mobiles">Mobiles & Accessories</option>
                  <option value="headphones">Headphones & Audio</option>
                  <option value="home-decor">Home Decor</option>
                  <option value="kitchen">Kitchen Appliances</option>
                  <option value="furniture">Furniture</option>
                  <option value="fitness">Fitness & Gym</option>
                  <option value="stationery">Stationery</option>
                  <option value="toys">Toys & Games</option>
                  <option value="books">Books</option>
                </select>
              </div>
              <div className="w-[45%] flex flex-col gap-[0.2em]">
                <label className="text-[1.1em] text-gray-500" htmlFor="price">
                  Price
                </label>
                <input
                  required
                  {...register("price", { required: "price is required" })}
                  className="px-[.9em] py-[.3em] text-[1em] rounded-md outline-none bg-gray-100 text-gray-500"
                  id="price"
                  type="number"
                  placeholder="Enter price"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[0.2em]">
              <label
                className="text-[1.1em] text-gray-500"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                required
                {...register("description", {
                  required: "description is required",
                })}
                rows={3}
                className="px-[.9em] py-[.3em] text-[.9em] rounded-md outline-none bg-gray-100 text-gray-500"
                id="description"
                type="text"
                placeholder="Enter product description"
              />
            </div>
            <div className="flex gap-[.9em]">
              <Link
                to={-1}
                className="flex items-center justify-center w-[50%] text-[1.1em] outline text-black active:scale-[95%] py-[.4em] rounded-lg"
              >
                Cancle
              </Link>
              <button className="w-[50%] text-[1.1em] bg-black text-white active:scale-[95%] py-[.5em] rounded-lg">
                Create
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CreateProduct;