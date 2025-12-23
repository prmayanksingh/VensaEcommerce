import { motion } from "framer-motion";
import { FiBox } from "react-icons/fi";

const MarqueeEffect = () => {
  const container = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="w-full h-[2.5em] py-[1.5em] my-[1em] text-[11px] sm:text-[12px] lg:text-[12px] xl:text-[13px] border-y-2 border-gray-500 font-['Gilroy'] text-black font-bold flex items-center overflow-hidden"
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="flex"
      >
        <div className="shrink-0 text-[1.5em] tracking-wide flex gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em] px-[1em] sm:px-[1.2em] lg:px-[1.4em]">
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em] tracking-wider">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
        </div>
        <div className="shrink-0 text-[1.5em] tracking-wide flex gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em] tracking-wider">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
          <h1 className="flex items-center gap-[1em] sm:gap-[1.2em] lg:gap-[1.4em]">
            <FiBox />
            Vensa.co
          </h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MarqueeEffect;
