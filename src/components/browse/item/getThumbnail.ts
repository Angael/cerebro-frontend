import { IFrontItem } from '../../../model/IFrontItem';
import { ThumbnailSize } from '../../../model/IItem';

export const getThumbnail = (
  thumbnails: IFrontItem['thumbnails'],
  size: ThumbnailSize,
): string | undefined => {
  const thumbSrc = thumbnails.find((t) => t.type === size)?.url;

  return thumbSrc;
};
