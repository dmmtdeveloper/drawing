'use client'
import type { ReactNode } from "react"
import {motion} from "framer-motion"

type BlockAnimationProps = {
  children: ReactNode;   
};

export const BlockAnimation = ({ children }: BlockAnimationProps) => {
    return (
        <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ type:"tween", duration: 0.6 }}
        className="block-animation"
        >
        {children}
        </motion.section>
    );
};