import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GridItem = styled.div`
  width: ${100 * (1 / 3)}%;
  position: relative; // not usefull i think
  height: 200px;
`;

export const ItemContainer = styled(motion.article)`
  width: 100%;
  height: 100%;

  ${GridItem}.selected > & {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    z-index: 1200;
  }
`;

export const ThumbnailContainer = styled(motion.div)`
  position: relative;
`;

export const Thumbnail = styled(motion.img)`
  display: block;
  margin: auto;
  pointer-events: none;
`;
