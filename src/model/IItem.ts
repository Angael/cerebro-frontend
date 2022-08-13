export enum ItemType {
  file = 'file',
  image = 'image',
  video = 'video',
  website = 'website',
  text = 'text',
}

export enum ThumbnailSize {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
}

export interface IItem {
  id: number;
  account_uid: string;

  type: ItemType;
  private: boolean;
  processed: boolean;
  created_at: string; // ISO
}

export interface IFileData {
  filename: string;
  path: string;
  size: number;
}

export interface IVideoData {
  duration: number;
  bitrate: number;
  width: number;
  height: number;
}

export interface IVideo extends IVideoData, IFileData {
  id: number;
  file_id: number;
}

export interface IImageData {
  width: number;
  height: number;
  isAnimated: boolean;
  hash: string;
}

export interface IImage extends IImageData, IFileData {
  id: number;
  file_id: number;
}
