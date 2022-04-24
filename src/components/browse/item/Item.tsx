import React, { useState } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';

import {
  CenterContainer,
  ItemContainer,
  Thumbnail,
  ThumbnailContainer,
  TitleContainer,
} from './css';
import { IFrontItem } from '../../../model/IFrontItem';
import { Typography } from '@mui/material';
import { getThumbnail } from './getThumbnail';
import { ThumbnailSize } from '../../../model/IItem';
import { getGridSpan } from './getGridSpan';
import IconPlaceholder from './IconPlaceholder';
import { mdiAlert, mdiAlertCircleOutline, mdiLoading } from '@mdi/js';
import Icon from '@mdi/react';
import palette from '../../../theme/palette';

interface IProps {
  item: IFrontItem;
  onClick: () => void;
}

const Item = ({ item, onClick }: IProps) => {
  const [err1, setErr] = useState(false);

  const thumbnailSrcXS = getThumbnail(item.thumbnails, ThumbnailSize.xs) || '';
  const thumbnailSrc = getThumbnail(item.thumbnails, ThumbnailSize.md) || '';

  const gridSpanClass = getGridSpan(item);

  const onError = () => {
    setErr(true);
  };

  return (
    <ItemContainer onClick={onClick} className={gridSpanClass}>
      <ThumbnailContainer>
        <ProgressiveImage
          src={thumbnailSrc}
          placeholder={thumbnailSrcXS}
          rootMargin='0%'
          threshold={[0.3]}
          onError={onError}
        >
          {(src: string, loading: boolean) =>
            err1 ? (
              <CenterContainer>
                <Icon
                  path={mdiAlertCircleOutline}
                  size={2}
                  color={palette.grey['50080']}
                />
                <Typography>Thumbnail not ready</Typography>
              </CenterContainer>
            ) : (
              <Thumbnail src={src} className={loading ? 'loading' : ''} />
            )
          }
        </ProgressiveImage>
      </ThumbnailContainer>
      <TitleContainer>
        <Typography variant='body2' m={1}>
          {item.fileData?.filename}
        </Typography>
      </TitleContainer>
    </ItemContainer>
  );
};

export default Item;
