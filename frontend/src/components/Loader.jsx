import { motion } from "framer-motion";
import { useCountUp } from "react-countup";

const Loader = () => {
  const { start } = useCountUp({
    ref: "counter",
    start: 0,
    end: 100,
    duration: 2,
    startOnMount: false,
  });

  const parent = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.25,
      },
    },
  };

  const children = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: [30, -8, 0],
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      variants={parent}
      initial="hidden"
      animate="show"
      exit={{
        y: "-100%",
        transition: { duration: 0.4, ease: [0.6, 0, 1, 0.3] },
      }}
      className="lg:p-[1em] fixed inset-0 z-[9999] bg-black text-white font-['Monument'] font-bold leading-[5em] flex flex-col xl:flex-row items-center xl:items-end justify-center lg:justify-end xl:justify-center gap-[.5em] xl:gap-[1em] uppercase text-[3.5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[clamp(20px,3vw,40px)] xl:text-[clamp(20px,3vw,40px)]"
    >
      <motion.h1
        variants={children}
        className="animate-pulse text-[4em] tracking-wider"
      >
        loading
      </motion.h1>
      <motion.div
        className="xl:w-[2.6em] text-[4em] text-gray-300 italic tracking-wider"
        variants={children}
        onAnimationComplete={start}
      >
        <span id="counter">00</span>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
