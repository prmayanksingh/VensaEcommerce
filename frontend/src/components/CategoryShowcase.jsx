import { motion } from "framer-motion";
import { pexels } from "../utils/img";

const Data = [
  {
    img: "https://images.pexels.com/photos/12225310/pexels-photo-12225310.jpeg",
    heading: "Women’s Trendy Styles",
    text: "Explore the latest fashion trends for women. From chic to casual,find styles for every occasion.",
    alt: "Fashion model in black blazer dress and sunglasses, representing women’s trendy styles",
  },
  {
    img: "https://images.pexels.com/photos/9604303/pexels-photo-9604303.jpeg",
    heading: "Men’s Fashion Essentials",
    text: "Shop a curated collection of men’s styles, from timeless classics to modern fashion essentials.",
    alt: "Male model in casual white t-shirt with olive jacket, representing men’s fashion essentials",
  },
  {
    img: "https://images.pexels.com/photos/16768686/pexels-photo-16768686.jpeg",
    heading: "Accessories to Complete",
    text: "Find stylish accessories to elevate any outfit, from chic bags to jewelry adding the perfect finishing touch.",
    alt: "Woman in black top sitting on a stool, representing fashion accessories collection",
  },
  {
    img: "https://images.pexels.com/photos/28570315/pexels-photo-28570315.jpeg",
    heading: "Everyday Tech Essentials",
    text: "Discover modern gadgets and smart devices that simplify life while keeping you connected effortlessly daily.",
    alt: "Young woman with glasses, headphones, and tablet, representing everyday tech essentials",
  },
  {
    img: "https://images.pexels.com/photos/16485635/pexels-photo-16485635.jpeg",
    heading: "Stylish Backpacks",
    text: "From work to travel, discover durable backpacks blending comfort with stylish design for every occasion.",
    alt: "Male model carrying a brown designer backpack, representing stylish backpacks collection",
  },
];

const container = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.3, ease: "easeIn" } },
};

const CategoryShowcase = () => {
  return (
    <motion.section
      variants={container}
      className="bg-[#F7F7F7] py-[.5em] text-[clamp(10px,3.8vw,16px)] overflow-x-hidden sm:text-[2.7vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[clamp(14px,1.2vw,24px)]"
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
        className="w-fit flex flex-nowrap scroll-smooth"
      >
        {Data.map((elem, index) => (
          <div
            key={index}
            className="relative mx-[.3em] h-[35em] lg:h-[40em] xl:h-[38em] w-[24em] lg:w-[29em] overflow-hidden shrink-0"
          >
            <img
              className="h-full w-full object-cover object-center scale-[120%]"
              src={pexels(elem.img, 600, 800, 2)}
              srcSet={[
                `${pexels(elem.img, 400, 540, 2)} 400w`,
                `${pexels(elem.img, 500, 670, 2)} 500w`,
                `${pexels(elem.img, 600, 800, 2)} 600w`,
                `${pexels(elem.img, 750, 1000, 2)} 750w`,
              ].join(", ")}
              sizes="(min-width: 1024px) 29em, 24em"
              alt={elem.alt}
              width="600"
              height="800"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute h-[60%] w-[24em] lg:w-[29em] py-[.5em] pt-[10em] px-[1em] xl:px-[2.7em] flex flex-col items-center justify-center gap-[.5em] bottom-[0%] text-white bg-gradient-to-t from-black/50 via-black/40 to-transparent">
              <h1 className="text-[1.1em] tracking-wider font-bold font-['Gilroy']">
                {elem.heading}
              </h1>
              <h2 className="text-center text-[.9em] font-['Gilroy'] leading-[1.3em] text-gray-200">
                {elem.text}
              </h2>
            </div>
          </div>
        ))}
        {Data.map((elem, index) => (
          <div
            key={index}
            className="relative mx-[.3em] h-[35em] lg:h-[40em] xl:h-[38em] w-[24em] lg:w-[29em] overflow-hidden shrink-0"
          >
            <img
              className="h-full w-full object-cover object-center scale-[120%]"
              src={pexels(elem.img, 600, 800, 2)}
              srcSet={[
                `${pexels(elem.img, 400, 540, 2)} 400w`,
                `${pexels(elem.img, 500, 670, 2)} 500w`,
                `${pexels(elem.img, 600, 800, 2)} 600w`,
                `${pexels(elem.img, 750, 1000, 2)} 750w`,
              ].join(", ")}
              sizes="(min-width: 1024px) 29em, 24em"
              alt={elem.alt}
              width="600"
              height="800"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute h-[60%] w-[24em] lg:w-[29em] py-[.5em] pt-[10em] px-[1em] xl:px-[2.7em] flex flex-col items-center justify-center gap-[.5em] bottom-[0%] text-white bg-gradient-to-t from-black/50 via-black/40 to-transparent">
              <h1 className="text-[1.1em] tracking-wider font-bold font-['Gilroy']">
                {elem.heading}
              </h1>
              <h2 className="text-center text-[.9em] font-['Gilroy'] leading-[1.3em] text-gray-200">
                {elem.text}
              </h2>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CategoryShowcase;
