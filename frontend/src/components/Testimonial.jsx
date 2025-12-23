import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { pexels } from "../utils/img";
import mayankImage from "../assets/mayankImage.webp";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, scale } from "framer-motion";

const Data = [
  {
    name: "Ayush Singh",
    text: "Vensa.co delivers premium quality fashion and essentials with a perfect mix of style and comfort. From trendy outfits to everyday must-haves, everything feels reliable and affordable. Truly my go-to destination for shopping!",
    img: "https://images.pexels.com/photos/20321952/pexels-photo-20321952.jpeg",
    rating: 5,
  },
  {
    name: "Mayank Pratap Singh",
    text: "Vensa.co never disappoints when it comes to variety and reliability. From essentials to stylish pieces, everything feels consistent in quality. The website is smooth to use and the shopping journey is modern and trustworthy.",
    img: mayankImage,
    rating: 5,
  },
  {
    name: "Shreya Singh",
    text: "Shopping at Vensa.co is seamless and reliable. From browsing to checkout, everything works effortlessly. The clothes feel durable, the packaging is neat, and the overall experience gives me full confidence to return again.",
    img: "https://images.pexels.com/photos/29090264/pexels-photo-29090264.jpeg",
    rating: 5,
  },
  {
    name: "yash Singh",
    text: "Vensa.co offers a great balance of affordability and quality. The items I ordered looked exactly like the pictures, which built instant trust. Delivery was on time and the whole shopping experience felt polished and professional.",
    img: "https://images.pexels.com/photos/20752942/pexels-photo-20752942.jpeg",
    rating: 4,
  },
];

const slide = {
  enter: (dir) => ({ x: dir > 0 ? 40 : -40, opacity: 0, scale: 0.9 }),
  center: { x: 0, opacity: 1, scale:1, transition: { duration: 0.35, ease: "easeOut" } },
  exit: (dir) => ({
    x: dir > 0 ? -40 : 40,
    opacity: 0,
    scale:.9,
    transition: { duration: 0.35, ease: "easeIn" },
  }),
};

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (step) => {
    setDir(step > 0 ? 1 : -1);
    setIndex((i) => (i + step + Data.length) % Data.length);
  };

  const t = Data[index];

  useEffect(() => {
    const id = setInterval(() => {
      go(1);
    }, 4000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="px-[1.5em] sm:px-[7em] md:px-[12em] lg:px-[27vw] xl:px-[33vw] py-[4em] flex flex-col items-center gap-[1.55em] lg:gap-[1.7em] xl:gap-[2em] text-[clamp(10px,3.5vw,16px)] sm:text-[clamp(14px,2.7vw,16px)] md:text-[clamp(14px,2vw,16px)] lg:text-[17px] xl:text-[clamp(14px,1.1vw,18px)]">
      <h1 className="text-[2em] xl:text-[2.2em] font-bold tracking-wider mb-[-.4em]">
        Testimonial
      </h1>
      <h3 className="text-center text-[1em]  leading-[1.3em] mb-[.4em] text-gray-400">
        Customer testimonials showcasing real experiences, building trust and
        confidence in our products.
      </h3>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-[3em] lg:gap-[4em]">
          <button onClick={() => go(-1)}>
            <FaArrowLeft className="text-[2.3em] p-[.22em] bg-[#F8F8F8]  rounded-full border border-[#E4E4E4]" />
          </button>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-[10em] lg:w-[12em] h-[10em] lg:h-[12em] rounded-full bg-gray-100"
            >
              <img
                className="h-full w-full rounded-full object-center object-cover"
                src={pexels(t.img, 200, 200, 2)}
                loading="lazy"
                decoding="async"
                alt="Profile photo of Ayush Singh"
              />
            </motion.div>
          </AnimatePresence>
          <button onClick={() => go(1)}>
            <FaArrowRight className="text-[2.3em] p-[.22em] bg-[#F8F8F8]  rounded-full border border-[#E4E4E4]" />
          </button>
        </div>
      </div>
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={`text-${index}`}
          custom={dir}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.35, ease: "easeOut" },
          }}
          exit={{
            opacity: 0,
            y: 10,
            transition: { duration: 0.35, ease: "easeIn" },
          }}
          className="flex flex-col items-center gap-[2em]"
        >
          {/* Stars */}
          <div className="text-[1.1em] flex text-[#00C500] gap-[.2em]">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={i < t.rating ? "opacity-100" : "opacity-30"}
              />
            ))}
          </div>
          <h2 className="text-center text-[1.1em] text-gray-500 leading-[1.2em]">
            {t.text}
          </h2>
          <h2 className="text-[1.2em] font-bold font-['Gilroy'] text-[#151515] tracking-wide">
            {t.name}
          </h2>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Testimonial;
