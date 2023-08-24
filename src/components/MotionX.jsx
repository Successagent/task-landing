import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const MotionX = ({ children }) => {
  const ref = useRef(null);
  const useView = useInView(ref, { once: true });
  const startAnimate = useAnimation();

  useEffect(() => {
    if (useView) {
      startAnimate.start("to");
    }
  }, [useView]);
  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={{
          from: { opacity: 0, x: -75 },
          to: { opacity: 1, x: 0 },
        }}
        initial="from"
        animate={startAnimate}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MotionX;
