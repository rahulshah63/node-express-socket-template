import { ValueOf } from '@/utils/util';
import { IItems } from './item.interface';

export const AVAILABILITY = {
  IN_STOCK: 'in_stock',
  OUT_STOCK: 'out_stock',
  UNAVAILABLE: 'unavailable',
  AVAILABLE: 'available',
  SOON_AVAILABLE: 'soon_available',
} as const;

export interface IInventory {
  item: IItems;
  image: string;
  price: number;
  quantity: number;
  stock: ValueOf<typeof AVAILABILITY>;
  addedBy: string;
}
