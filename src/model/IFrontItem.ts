import {IImageData, ItemType, IVideoData, ThumbnailSize,} from './IItem';

// TODO: I just copied this stuff and it breaks because i need to copy more types to front end
type Thumbnail = {
  url: string;
  type: ThumbnailSize;
  isAnimated: boolean;
};

type AddUrl = {
  url: string;
};

// Keep in sync in frontend-backend !!   Make monorepo to share ts types?
export type IFrontItem = {
  id: number;
  account_uid: string;
  type: ItemType;
  private: boolean;
  created_at: string;
  processed: boolean;

  video?: IVideoData & AddUrl;
  image?: IImageData & AddUrl;

  thumbnails: Thumbnail[];
};