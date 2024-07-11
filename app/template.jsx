"use client"

import { motion } from "framer-motion";
import { fadeIn } from "./motion";

export default function Template({ children }) {
  return (
    <motion.div 
    variants={fadeIn('up', 40, 0.5)}
    initial="hidden"
    whileInView="show"
    className=''
  >   
      {children}
    </motion.div>
  );
}