import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Motion = ({ children }) => {
  const ref = useRef(null);
  const active = useInView(ref, { once: true });
  const startAnimate = useAnimation();

  useEffect(() => {
    if (active) {
      startAnimate.start("to");
    }
    console.log(active);
  }, [active]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "fit-content",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      <motion.div
        variants={{
          from: { opacity: 0, y: 75 },
          to: { opacity: 1, y: 0 },
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

export default Motion;
