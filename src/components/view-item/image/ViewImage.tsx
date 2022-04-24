import React, { FunctionComponent } from 'react';
import { ViewItemProps } from '../ViewitemProps';
import { Box } from '@mui/material';
import ProgressiveImage from 'react-progressive-graceful-image';

import { getThumbnail } from '../../browse/item/getThumbnail';
import { ThumbnailSize } from '../../../model/IItem';

const ViewImage: FunctionComponent<ViewItemProps> = ({ item }) => {
  if (!item.fileData || !item.image) {
    return <div>Corrupted file</div>;
  }

  const { width, height } = item.image;

  const placeholder = getThumbnail(item.thumbnails, ThumbnailSize.md);

  return (
    <Box p={2}>
      <ProgressiveImage src={item.fileData.url} placeholder={placeholder ?? ''}>
        {(src: string, loading: boolean) => (
          <img
            style={{ opacity: loading ? 0.5 : 1, objectFit: 'none' }}
            src={src}
            width={width}
            height={height}
          />
        )}
      </ProgressiveImage>
    </Box>
  );
};

export default React.memo(ViewImage);
