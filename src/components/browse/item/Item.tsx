import React, { useEffect } from 'react';
import { GridItem, ItemContainer, Thumbnail, ThumbnailContainer } from './css';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { transitionSpring } from '../../../framer/transitions';

interface IProps {
  selected: boolean;
  thumbnailSrc: string;
  onClick: () => void;
}

const Item = ({ selected, thumbnailSrc, onClick }: IProps) => {
  const zIndex = useSpring(selected ? 3000 : 0, transitionSpring);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  useEffect(() => {
    zIndex.set(selected ? 3000 : 0);
  }, [selected]);

  return (
    <GridItem className={selected ? 'selected' : ''}>
      <ItemContainer
        onClick={onClick}
        style={{ zIndex, padding: 16, borderRadius: 12 }}
        layout
      >
        <ThumbnailContainer
          drag={selected ? undefined : 'x'}
          style={{
            x,
            opacity,
            overflow: 'hidden',
            height: '100%',
            width: '100%',
            borderRadius: 12,
          }}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          whileHover={{ scale: !selected ? 1.04 : 1 }}
          whileTap={{ scale: !selected ? 0.96 : 1 }}
          layout
        >
          <Thumbnail src={thumbnailSrc} layout />
        </ThumbnailContainer>
      </ItemContainer>
    </GridItem>
  );
};

export default Item;
