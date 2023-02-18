import React from 'react';
import { Box } from '@mui/material';
import ProgressiveImage from 'react-progressive-graceful-image';
import { ImageItem } from '@vanih/cerebro-contracts';

type Props = {
  item: ImageItem;
};

const ViewImage = ({ item }: Props) => {
  if (!item.image) {
    return <div>Corrupted file</div>;
  }

  const { width, height } = item.image;

  const placeholder = item.thumbnail;

  return (
    <Box p={2}>
      <ProgressiveImage src={item.image.src} placeholder={placeholder ?? ''}>
        {(src: string, loading: boolean) => (
          <img
            style={{
              objectFit: 'contain',
              width: `min(${width}px, 100vw)`,
              height: `min(${height}px, 100vh)`,
            }}
            src={src}
          />
        )}
      </ProgressiveImage>
    </Box>
  );
};

export default React.memo(ViewImage);
