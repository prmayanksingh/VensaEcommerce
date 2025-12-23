import { IoIosArrowForward } from "react-icons/io";
import hero from "../assets/hero.webp";
import { color, motion, scale } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Hero = ({ startHero }) => {
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 1, y: 0 },
    show: {
      transition: { staggerChildren: 0.4, delayChildren: 0.1 },
    },
    exit: {
      transition: { staggerChildren: 0.1, when: "afterChildren" },
    },
  };

  const imgAnime = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const textGroup = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
    exit: { opacity: 0, y: 10 },
  };

  const textItem = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.4, ease: "easeIn" } },
  };
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={startHero && isImageLoaded ? "show" : "hidden"}
      exit="exit"
      className="relative z-1 w-full h-[83vh] lg:h-[calc(100vh-3.2rem)] xl:h-[calc(100vh-3.2rem)] text-[clamp(10px,3.7vw,16px)] sm:text-[16px] flex items-end overflow-hidden bg-[#0a0a0a]"
    >
      <motion.img
        variants={imgAnime}
        className="absolute object-no-repeat object-[30%] xl:object-[center_40%] -z-1 h-full w-full object-cover"
        src={hero}
        alt="Man in black outfit wearing sunglasses in a stylish pose, Vensa.co fashion hero banner"
        width="1600"
        height="900"
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        initial={{ opacity: 0 }}
        animate={{ opacity: isImageLoaded ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onLoad={() => setIsImageLoaded(true)}
        onError={() => setIsImageLoaded(true)}
      />
      <motion.div
        variants={textGroup}
        className="text-white px-3 pb-8 sm:pl-8 sm:pb-10 lg:pl-14 lg:pb-14 xl:pl-18 xl:pb-15 flex flex-col gap-[.4em]"
      >
        <motion.h1
          variants={textItem}
          className="text-[3.94em] sm:text-[3.7em] lg:text-[4em] xl:text-[4.5em] 2xl:text-[5.6vw] font-bold font-['Monument']"
        >
          Vensa.co
        </motion.h1>
        <motion.p
          variants={textItem}
          className="sm:w-[70%] text-[1.1em] xl:text-[clamp(14px,1.2vw,18px)] font-semibold text-[#9f9f9f] -mt-2 sm:-mt-1 leading-[1.4em]"
        >
          Vensa.co offers trendy, high-quality products at affordable prices
          perfect for every lifestyle and need.
        </motion.p>
        <motion.div
          variants={textItem}
          className="flex mt-[1.8em] sm:mt-[2.2em] xl:mt-[2.6em] gap-6"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ backgroundColor: "#6A7282", color: "#fff" }}
            onClick={() => navigate("/products")}
            className="px-[1.2em] py-[.4em] bg-white text-black text-[1.1em] xl:text-[clamp(14px,1.2vw,20px)] font-semibold rounded-xl"
          >
            Shop Now
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="text-[1.1em] xl:text-[clamp(14px,1.2vw,20px)] flex gap-1 items-center"
          >
            Learn More <IoIosArrowForward className="text-[1.2em]" />{" "}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
