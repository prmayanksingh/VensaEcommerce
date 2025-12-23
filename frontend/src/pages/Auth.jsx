import { AnimatePresence, motion } from "framer-motion";
import Login from "../components/Login";
import Register from "../components/Register";
import { useState } from "react";

const container = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.3, ease: "easeIn" } },
};

const Auth = () => {
  const [mode, setMode] = useState("login");
  return (
    <motion.section
      exit={{ opacity: 0,y:10, transition: { duration: 0.3, ease: "easeIn" } }}
      className="h-[93vh] flex justify-center overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {mode === "register" ? (
          <motion.div
            key="register"
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex items-center justify-center"
          >
            <Register onSwitch={() => setMode("login")} />
          </motion.div>
        ) : (
          <motion.div
            key="login"
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex items-center justify-center"
          >
            <Login onSwitch={() => setMode("register")} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Auth;
