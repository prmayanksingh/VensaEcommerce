import FlipLink from "./ui/FlipLink";
import { BsPuzzleFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full px-[1.4em] sm:px-[1.8em] lg:px-[2.7em] xl:px-[3.8em] py-[3.5em] pb-[2.5em] flex flex-col gap-[2.5em] text-[clamp(10px,3.8vw,16px)] sm:text-[clamp(17px,2.5vw,17px)] md:text-[clamp(18px,2vw,18px)] lg:text-[clamp(16px,1.8vw,19px)] xl:text-[clamp(16px,1.3vw,20px)] transform-gpu">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-[2.5em]">
        <div className="lg:w-[50%] flex flex-col gap-[.7em]">
          <h1 className="text-[1.5em] font-bold tracking-wide flex items-center gap-[.3em]">
            <BsPuzzleFill />
            Vensa.co
          </h1>
          <h3 className="lg:w-[90%] text-[1em] lg:text-[.95em] leading-[1.3em] lg:leading-[1.4em] text-gray-600">
            YourStore brings together fashion, gadgets, and lifestyle
            essentials. Explore curated collections of clothing, accessories,
            electronics, and backpacks—delivering style, innovation, and
            convenience in one place.
          </h3>
        </div>
        <div className="lg:w-[47%] w-full flex justify-between">
          <div className="w-[30%] lg:w-[33%] flex flex-col gap-[.7em]">
            <h2 className="text-[1em] lg:text-[1em] font-bold font-['Gilroy']">
              Categories
            </h2>
            <div className="text-[1em] lg:text-[.9em] flex flex-col gap-[.2em] lg:gap-[.3em] text-gray-600">
              <h3>Men’s Wear</h3>
              <h3>Women’s Wear</h3>
              <h3>Accessories</h3>
              <h3>Backpacks</h3>
              <h3>Electronics & Gadgets</h3>
            </div>
          </div>
          <div className="w-[33%] lg:w-[33%] flex flex-col gap-[.7em] ">
            <h2 className="text-[1em] lg:text-[1em] font-bold font-['Gilroy']">
              Customer Care
            </h2>
            <div className="text-[1em] lg:text-[.9em] flex flex-col gap-[.2em] lg:gap-[.3em] text-gray-600">
              <h3>FAQ</h3>
              <h3>Shipping</h3>
              <h3>Order Tracking</h3>
              <h3>Returns & Exchange</h3>
            </div>
          </div>
          <div className="w-[27%] lg:w-[30%] flex flex-col gap-[.7em]">
            <h2 className="text-[1em] lg:text-[1em] font-bold font-['Gilroy']">
              Company
            </h2>
            <div className="text-[1em] lg:text-[.9em] flex flex-col gap-[.2em] lg:gap-[.3em] text-gray-600">
              <h3>Privacy Policy</h3>
              <h3>Guides</h3>
              <h3>Terms & Conditions</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[.1em] w-full bg-gray-100"></div>

      <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-[2em] sm:gap-[2.3em] lg:gap-[0]">
        <div className="w-full lg:w-[50%] xl:w-[53%] flex flex-col gap-[.85em]">
          <h2 className="text-[1em] font-bold">
            Vensa.co - All Rights Reserved
          </h2>
          <h2 className="text-[1em] text-gray-600">
            The Seen Mastercard is issued by coastal community Bank,Member
            FDIC,under a license from Mastercard international incorporated.
          </h2>
          <div className="flex flex-col gap-[.3em]">
            <h2 className="text-[1em] text-gray-600">
              1. All payment acrivities,whether positive or negative,are
              reported to the three major credit bureaus.
            </h2>
            <h2 className="text-[1em] text-gray-600">
              2. The effect on your credit score may vary,and some users may no
              see an improvement.For more details,refer to the Rate and Fee
              information.
            </h2>
            <h2 className="text-[1em] text-gray-600">
              3. Your account is subject to automatic reviews for potential
              credit line adjustments. Based on your payment history and
              eligibility,your credit line may increase,decrease,or remain
              unchanged.
            </h2>
            <h2 className="text-[1em] text-gray-600">
              4. Responsible use and timely monthly payments are required.
            </h2>
          </div>
          <h2 className="text-[1em] text-gray-600">
            NMLS #2477008. Visit the NMLS Consumer Access Database here
          </h2>
        </div>
        <div className="w-full lg:w-[50%] xl:w-[40%] text-[3.7em] sm:text-[.9em] xl:text-[.8em] flex flex-col items-end justify-center gap-[.25em] sm:gap-[1.1em] lg:gap-[1.4em] xl:gap-[1.7em]">
          <div className="group flex items-center gap-[.2em] sm:text-[4.3em] xl:text-[5.3em]">
            <div className="w-[1.7em] h-[1.7em] text-[.5em] bg-gray-300 flex items-center justify-center rounded-lg group-hover:text-white group-hover:bg-orange-600">
              <FaLinkedinIn />
            </div>
            <FlipLink href="https://www.linkedin.com/in/mayank-pratap-singh-1a2b3c/">Linkdin</FlipLink>
          </div>
          <div className="group flex items-center gap-[.2em] sm:text-[4.3em] xl:text-[5.3em]">
            <FlipLink href="https://github.com/prmayanksingh">Github</FlipLink>
            <div className="w-[1.7em] h-[1.7em] text-[.5em] bg-gray-300 flex items-center justify-center rounded-lg group-hover:text-white group-hover:bg-orange-600">
              <TbBrandGithubFilled />
            </div>
          </div>
          <div className="group flex items-center gap-[.2em] sm:text-[4.3em] xl:text-[5.3em]">
            <div className="w-[1.7em] h-[1.7em] text-[.5em] bg-gray-300 flex items-center justify-center rounded-lg group-hover:text-white group-hover:bg-orange-600">
              <FaInstagram />
            </div>
            <FlipLink href="https://www.instagram.com/tnt_mayank/">Instagram</FlipLink>
          </div>
          <div className="group flex items-center gap-[.2em] sm:text-[4.3em] xl:text-[5.3em]">
            <FlipLink href="https://x.com/prmayanksingh">Twitter</FlipLink>
            <div className="w-[1.7em] h-[1.7em] text-[.5em] bg-gray-300 flex items-center justify-center rounded-lg group-hover:text-white group-hover:bg-orange-600">
              <BsTwitterX />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[.1em] bg-gray-100"></div>

      <div className="relative w-full h-[13vw] overflow-hidden flex justify-center items-center transform-gpu">
        <h1 className="text-[14vw] font-[monument] font-bold text-center text-[#E5E5E5] will-change-transform transform-gpu">
          Vensa.co
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
