import { IFrontItem } from '../model/IFrontItem';
import { API } from '../utils/axios';

export const deleteItemReq = (itemId: IFrontItem['id']) =>
  API.delete(`/items/item/${encodeURIComponent(itemId)}`);
