import React, { ReactNode } from 'react';
import { TRANSITIONS, VARIANTS } from '../../framer/transitions';
import { motion, MotionProps } from 'framer-motion';

interface IProps extends MotionProps {
  children: ReactNode;
  isOpen: boolean;
}

const CustomCollapse = ({ children, isOpen, ...props }: IProps) => {
  const current = isOpen ? 'open' : 'collapsed';
  return (
    <motion.div
      initial={current}
      animate={current}
      variants={VARIANTS.collapseParent}
      transition={TRANSITIONS.drawer}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default CustomCollapse;
