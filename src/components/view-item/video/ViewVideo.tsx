import React, { FunctionComponent } from 'react';
import { ViewItemProps } from '../ViewitemProps';
import { Box } from '@mui/material';

import { getThumbnail } from '../../browse/item/getThumbnail';
import { ThumbnailSize } from '../../../model/IItem';

const ViewVideo: FunctionComponent<ViewItemProps> = ({ item }) => {
  if (!item.video) {
    return <div>Corrupted file</div>;
  }

  const { width, height, url, bitrate, duration } = item.video;

  const placeholder = getThumbnail(item.thumbnails, ThumbnailSize.md);

  console.log({ placeholder });

  return (
    <Box p={2}>
      <video
        controls
        poster={placeholder}
        style={{ width: `min(${width}px, 100%)` }}
      >
        <source src={url} />
      </video>
    </Box>
  );
};

export default React.memo(ViewVideo);
