import React, { useState } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';

import {
  CenterContainer,
  ItemContainer,
  Thumbnail,
  ThumbnailContainer,
  TitleContainer,
} from './css';
import { Typography } from '@mui/material';
import { getGridSpan } from './getGridSpan';
import { mdiAlertCircleOutline, mdiClockOutline } from '@mdi/js';
import Icon from '@mdi/react';
import palette from '../../../theme/palette';
import { FrontItem } from '@vanih/cerebro-contracts';

interface IProps {
  item: FrontItem;
  onClick: () => void;
}

const Item = ({ item, onClick }: IProps) => {
  const [err1, setErr] = useState(false);

  const iconSrc = item.icon || '';
  const thumbnailSrc = item.thumbnail ?? '';

  const gridSpanClass = getGridSpan(item);

  const onError = () => {
    setErr(true);
  };

  return (
    <ItemContainer onClick={onClick} className={gridSpanClass}>
      <ThumbnailContainer>
        {!thumbnailSrc && !iconSrc ? (
          <CenterContainer style={{ backgroundColor: palette.grey['50024'] }}>
            <Icon
              path={mdiClockOutline}
              size={2}
              color={palette.grey['50080']}
            />
            <Typography>Thumbnail not ready...</Typography>
          </CenterContainer>
        ) : (
          <ProgressiveImage
            src={thumbnailSrc}
            placeholder={iconSrc}
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
                    color={palette.error.main}
                  />
                  <Typography>Thumbnail Error</Typography>
                </CenterContainer>
              ) : (
                <Thumbnail src={src} className={loading ? 'loading' : ''} />
              )
            }
          </ProgressiveImage>
        )}
      </ThumbnailContainer>
      <TitleContainer>
        <Typography variant='body2' m={1}>
          filename{/*item.fileData?.filename*/}
        </Typography>
      </TitleContainer>
    </ItemContainer>
  );
};

export default Item;
