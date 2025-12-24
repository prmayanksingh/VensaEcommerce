import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  const letters = children.split("");

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="w-fit relative block overflow-hidden whitespace-nowrap text-[1em] font-['Gilroy'] font-bold uppercase dark:text-white/90 transform-gpu"
      style={{ lineHeight: .87 }}
    >
      {/* Top row (original text) */}
      <div className="transform-gpu">
        {letters.map((letter, i) => (
          <motion.span
            key={`top-${i}`}
            className="inline-block text-black text-[.9em] will-change-transform transform-gpu"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-95%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
              type: "tween",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Bottom row (flipped text) */}
      <div className="absolute inset-0 transform-gpu">
        {letters.map((letter, i) => (
          <motion.span
            key={`bottom-${i}`}
            className="inline-block text-black text-[.9em] will-change-transform transform-gpu"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
              type: "tween",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default FlipLink;
