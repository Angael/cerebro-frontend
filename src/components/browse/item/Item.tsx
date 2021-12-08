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

  function checkZIndex(latest: any) {
    console.log('update', latest, selected);
    // if (selected) {
    //   zIndex.set(1200);
    // } else if (!selected && latest.scaleX < 1.01) {
    //   zIndex.set(0);
    // }
  }

  useEffect(() => {
    zIndex.set(selected ? 3000 : 0);
  }, [selected]);

  return (
    <GridItem className={selected ? 'selected' : ''}>
      <ItemContainer
        onClick={onClick}
        style={{ zIndex }}
        onUpdate={checkZIndex}
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
        >
          <Thumbnail src={thumbnailSrc} layout />
        </ThumbnailContainer>
        {/*<div>*/}
        {/*  Lorem Ipsum is simply dummy text of the printing and typesetting*/}
        {/*  industry. Lorem Ipsum has been the industry's standard dummy text ever*/}
        {/*  since the 1500s, when an unknown printer took a galley of type and*/}
        {/*  scrambled it to make a type specimen book. It has survived not only*/}
        {/*  five centuries, but also the leap into electronic typesetting,*/}
        {/*  remaining essentially unchanged. It was popularised in the 1960s with*/}
        {/*  the release of Letraset sheets containing Lorem Ipsum passages, and*/}
        {/*  more recently with desktop publishing software like Aldus PageMaker*/}
        {/*  including versions of Lorem Ipsum.*/}
        {/*</div>*/}
      </ItemContainer>
    </GridItem>
  );
};

export default Item;
