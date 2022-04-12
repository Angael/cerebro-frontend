import React from 'react';
import {
  ItemContainer,
  Thumbnail,
  ThumbnailContainer,
  TitleContainer,
} from './css';
import { IFrontItem } from '../../../model/IFrontItem';
import { Typography } from '@mui/material';

interface IProps {
  item: IFrontItem;
  onClick: () => void;
}

const Item = ({ item, onClick }: IProps) => {
  const thumbnailSrc = item.thumbnails[0]?.url ?? item.fileData?.url ?? '';

  return (
    <ItemContainer onClick={onClick}>
      <ThumbnailContainer>
        <Thumbnail src={thumbnailSrc} />
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
