import { API } from '../utils/axios';
import { FrontItem } from '@vanih/cerebro-contracts';

export const deleteItemReq = (itemId: FrontItem['id']) =>
  API.delete(`/items/item/${encodeURIComponent(itemId)}`);
