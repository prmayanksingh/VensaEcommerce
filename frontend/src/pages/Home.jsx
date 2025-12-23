import Hero from "../components/Hero";
import MarqueeEffect from "../components/MarqueeEffect";
import IntroSection from "../components/IntroSection";
import Testimonial from "../components/Testimonial";
import CategoryShowcase from "../components/CategoryShowcase";
import FAQSection from "../components/FAQSection";
import PromoSection from "../components/PromoSection";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Home = ({ startHero }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <Hero startHero={startHero} />
      <MarqueeEffect />
      <IntroSection />
      <div className="w-full h-[.4em] bg-gray-100"></div>
      <Testimonial />
      <CategoryShowcase />
      <FAQSection />
      <PromoSection />
      <Footer />
    </motion.section>
  );
};

export default Home;
