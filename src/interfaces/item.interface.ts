import { ValueOf } from '@/utils/util';

export const TYPE = {
  FRUIT: 'fruit',
  VEGETABLE: 'vegetable',
} as const;

export const SUBTYPE = {
  FRUIT: 'fruit',
  VEGETABLE: 'vegetable',
} as const;

export interface IItems {
  itemId: number;
  name: string;
  image: string;
  type: ValueOf<typeof TYPE>;
  subtype: ValueOf<typeof SUBTYPE>;
  createdAt: Date;
}
