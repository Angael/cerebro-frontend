import { IFrontItem } from '../../../model/IFrontItem';
import { MD_CELL_SIZE } from '../../../utils/consts';

export const getGridSpan = (item: IFrontItem): '' | 'tall' | 'wide' => {
  let w = item.image?.width ?? item.video?.width;
  let h = item.image?.height ?? item.video?.height;

  if (!h || !w) {
    return '';
  }
  const howWide = w / h;

  if (howWide >= 1.35 && w >= 2 * MD_CELL_SIZE && h >= MD_CELL_SIZE) {
    return 'wide';
  } else if (howWide <= 0.75 && w >= MD_CELL_SIZE && h >= 2 * MD_CELL_SIZE) {
    return 'tall';
  } else {
    return '';
  }
};
