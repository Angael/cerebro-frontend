import React from 'react';
import { Box } from '@mui/material';
import { VideoItem } from '@vanih/cerebro-contracts';

type Props = {
  item: VideoItem;
};

const ViewVideo = ({ item }: Props) => {
  if (!item.video) {
    return <div>Corrupted file</div>;
  }

  const { width, height, src, bitrateKb, durationMs } = item.video;

  const placeholder = item.thumbnail;
  console.log({ placeholder });

  return (
    <Box p={2}>
      <video
        controls
        poster={item.thumbnail || ''}
        style={{ width: `min(${width}px, 100%)` }}
        autoPlay
        loop
      >
        <source src={src} />
      </video>
    </Box>
  );
};

export default React.memo(ViewVideo);
