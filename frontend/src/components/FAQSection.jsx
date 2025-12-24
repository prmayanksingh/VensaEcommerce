import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const faq1 = [
  {
    num: "01",
    q: "What size should I order for clothing?",
    a: "Check our size chart and compare measurements. If in between, size up for relaxed or down for snug.",
  },
  {
    num: "02",
    q: "How can I track my order status?",
    a: "We send you a tracking link via email once shipped. You can also check in My Account → Orders.",
  },
  {
    num: "03",
    q: "Do you offer international shipping options?",
    a: "Yes, we ship to selected countries. Costs and timelines show at checkout.",
  },
  {
    num: "04",
    q: "What is your return and exchange policy?",
    a: "Returns accepted within 15–30 days on unworn items with tags. Final Sale items are non-returnable.",
  },
];

const faq2 = [
  {
    num: "05",
    q: "How can I cancel my order?",
    a: "Contact us immediately. We can cancel if it hasn't shipped yet (usually within 1 hour). If shipped, you can return after delivery.",
  },
  {
    num: "06",
    q: "Are the products on sale final sale?",
    a: "Items marked \"Final Sale\" cannot be returned or exchanged. Other discounted items follow our standard return window unless noted.",
  },
  {
    num: "07",
    q: "Do you offer gift cards for purchases?",
    a: "Yes, digital e-gift cards via email, various amounts. No expiry. Non-refundable. Usable with most promotions unless stated.",
  },
  {
    num: "08",
    q: "How do I care for my garments?",
    a: "Follow the care label. Generally: machine wash cold, gentle cycle, similar colors; no bleach; tumble dry low/air-dry; cool iron. Hand-wash delicates.",
  },
];

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggle = (num) => {
    setOpenFaq(openFaq === num ? null : num);
  };

  return (
    <section className="px-[1.6em] sm:px-[3em] md:px-[3.6em] lg:px-[2.6em] xl:px-[clamp(60px,5vw,100px)] py-[4em] xl:py-[6em] flex flex-col gap-[3em] text-[clamp(10px,3.7vw,15px)] sm:text-[clamp(14px,2.5vw,16px)] md:text-[clamp(15px,2vw,17px)] lg:text-[clamp(10px,1.5vw,17px)] xl:text-[clamp(14px,1.2vw,19px)] transform-gpu">
      <div className="flex flex-col gap-[.4em]">
        <h1 className="text-[1.7em] lg:text-[2em] font-bold tracking-wide">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-[1.3em]">
          <h3 className="lg:w-[30em] text-[1em] leading-[1.3em] text-gray-600">
            Find answers to common inquiries about products, shipping, returns
            and customer support
          </h3>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ backgroundColor: "#6A7282", color: "#fff" }}
            className="w-fit h-fit text-[1.1em] lg:text-[1em] px-[1em] lg:px-[1.2em] py-[.4em] lg:py-[.5em] shadow shadow-gray-400 rounded-lg "
          >
            Contact Us
          </motion.button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-[1.2em] lg:gap-[0em] transform-gpu">
        <div className="lg:w-[49%] flex flex-col gap-[1.2em] font-bold font-['Gilroy'] text-[#1F1F1F] transform-gpu">
          {faq1.map((elem, idx) => (
            <div
              key={idx}
              onClick={() => toggle(elem.num)}
              className="h-fit px-[1em] bg-[#F7F7F7] rounded-lg flex flex-col cursor-pointer transform-gpu"
            >
              <div className="w-full h-[3.5em] flex items-center justify-between rounded-lg">
                <div className="flex items-center gap-[.8em]">
                  <h2 className="text-[.95em] tracking-wider text-[#ABABAB]">
                    {elem.num}
                  </h2>
                  <h2 className="text-[.95em]">{elem.q}</h2>
                </div>
                {openFaq === elem.num ? (
                  <IoIosArrowUp className="text-[1.2em] text-[#A3A3A3]" />
                ) : (
                  <IoIosArrowDown className="text-[1.2em] text-[#A3A3A3]" />
                )}
              </div>

              <AnimatePresence initial={false}>
                {openFaq === elem.num && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: { 
                        height: { duration: 0.3, ease: [0.4, 0, 0.2, 1], type: "tween" },
                        opacity: { duration: 0.2, ease: "easeOut" }
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: { 
                        height: { duration: 0.25, ease: [0.4, 0, 0.2, 1], type: "tween" },
                        opacity: { duration: 0.15, ease: "easeIn" }
                      },
                    }}
                    className="overflow-hidden will-change-[height,opacity]"
                  >
                    <div className="flex items-center gap-[.8em] pb-[1em]">
                      <h2 className="opacity-0 text-[.95em] tracking-wider text-[#ABABAB]">
                        {elem.num}
                      </h2>
                      <h2 className="w-[90%] text-[.95em] text-gray-600">
                        {elem.a}
                      </h2>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="lg:w-[49%] flex flex-col gap-[1.2em] font-bold font-['Gilroy'] transform-gpu">
          {faq2.map((elem, idx) => (
            <div
              key={idx}
              onClick={() => toggle(elem.num)}
              className="h-fit px-[1em] bg-[#F7F7F7] rounded-lg flex flex-col cursor-pointer transform-gpu"
            >
              <div className="w-full h-[3.5em] flex items-center justify-between rounded-lg">
                <div className="flex items-center gap-[.8em]">
                  <h2 className="text-[.95em] tracking-wider text-[#ABABAB]">
                    {elem.num}
                  </h2>
                  <h2 className="text-[.95em]">{elem.q}</h2>
                </div>
                {openFaq === elem.num ? (
                  <IoIosArrowUp className="text-[1.2em] text-[#A3A3A3]" />
                ) : (
                  <IoIosArrowDown className="text-[1.2em] text-[#A3A3A3]" />
                )}
              </div>

              <AnimatePresence initial={false}>
                {openFaq === elem.num && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: { 
                        height: { duration: 0.3, ease: [0.4, 0, 0.2, 1], type: "tween" },
                        opacity: { duration: 0.2, ease: "easeOut" }
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: { 
                        height: { duration: 0.25, ease: [0.4, 0, 0.2, 1], type: "tween" },
                        opacity: { duration: 0.15, ease: "easeIn" }
                      },
                    }}
                    className="overflow-hidden will-change-[height,opacity]"
                  >
                    <div className="flex items-center gap-[.8em] pb-[1em]">
                      <h2 className="opacity-0 text-[.95em] tracking-wider text-[#ABABAB]">
                        {elem.num}
                      </h2>
                      <h2 className="w-[90%] text-[.95em] text-gray-600">
                        {elem.a}
                      </h2>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
