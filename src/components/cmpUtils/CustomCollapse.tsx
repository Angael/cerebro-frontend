import React, { ReactNode } from 'react';
import { TRANSITIONS, VARIANTS } from '../../framer/transitions';
import { motion } from 'framer-motion';

interface IProps {
  children: ReactNode;
  isOpen: boolean;
}

const CustomCollapse = ({ children, isOpen }: IProps) => {
  const current = isOpen ? 'open' : 'collapsed';
  return (
    <motion.div
      initial={current}
      animate={current}
      variants={VARIANTS.collapseParent}
      transition={TRANSITIONS.drawer}
    >
      {children}
    </motion.div>
  );
};

export default CustomCollapse;
