import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { lazy, Suspense, useEffect } from "react";
import useInfiniteProducts from "../utils/useInfiniteProducts";
import { motion } from "framer-motion";
const ProductCard = lazy(() => import("../components/ProductCard"));

const Products = () => {
  const { hasMore, products, fetchMoreProducts } = useInfiniteProducts();
  
  const { state } = useLocation();

  useEffect(() => {
    if (state?.scrollToTop)
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

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
            Our Products
          </h1>
        </div>
        <div className="w-[10%] "></div>
      </div>
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreProducts}
        hasMore={hasMore}
        loader={<h4 className="text-[1.3em] text-center my-10">Loading...</h4>}
        endMessage={
          <p className="text-[1.3em] text-center my-10">
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="xl:max-w-[90.6rem] mx-auto px-11 pt-7 pb-5 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center xl:justify-start gap-[1em] sm:gap-[1.2em] lg:gap-[1.7em]">
          {products.map((product) => (
            <Suspense
              key={product._id}
              fallback={
                <div className="w-full sm:w-[20em] h-[30em] rounded animate-pulse bg-gray-100"></div>
              }
            >
              <ProductCard product={product} />
            </Suspense>
          ))}
        </div>
      </InfiniteScroll>
    </motion.section>
  );
};

export default Products;
