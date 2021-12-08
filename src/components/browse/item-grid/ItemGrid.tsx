// @ts-nocheck

import React, { useState } from 'react';

import test_imgs from '../test_imgs.json';
import { Box } from '@mui/material';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { GridContainer } from './css';
import Item from '../item/Item';

const Container = styled.div`
  .selected > & {
    position: fixed;
    top: 16px;
    left: 32px;
  }
`;

interface IProps {}

const styleNormal = {
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'block',
  // pointerEvents: 'none',
};

const styleSelected = {
  top: 0,
  left: 0,
  right: 0,
  position: 'absolute',
  zIndex: 1,
  overflow: 'hidden',
  padding: '40px 0',
};

const ItemGrid = (props: IProps) => {
  const imgs = test_imgs.imgs;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (i: number) => {
    if (i === selectedIndex) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(i);
    }
  };

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  return (
    <GridContainer>
      {imgs.map((src, i) => (
        <Item
          key={i}
          selected={selectedIndex === i}
          thumbnailSrc={imgs[i]}
          onClick={() => handleClick(i)}
        />
        // <Box
        //   sx={{ width: 1 / 3, height: 200, p: 1 }}
        //   onClick={() => handleClick(i)}
        //   className={selectedIndex === i && 'selected'}
        // >
        //   <Container as={motion.div} layout>
        //     <motion.div
        //       drag="x"
        //       style={{
        //         x,
        //         opacity,
        //         overflow: 'hidden',
        //         height: '100%',
        //         width: '100%',
        //       }}
        //       dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        //       whileHover={{ scale: 1.05 }}
        //       whileTap={{ scale: 0.95 }}
        //     >
        //       <motion.img
        //         src={src}
        //         style={{
        //           display: 'block',
        //           width: '100%',
        //           height: '100%',
        //           pointerEvents: 'none',
        //         }}
        //       />
        //     </motion.div>
        //   </Container>
        // </Box>
      ))}
    </GridContainer>
  );
};

export default ItemGrid;
