import itemModel from '@/databases/modals/inventory.modal';
import { HttpException } from '@/exceptions/HttpException';
import { AVAILABILITY } from '@/interfaces/inventory.interface';
import { SUBTYPE, TYPE } from '@/interfaces/item.interface';
import { ValueOf, isEmpty } from '@/utils/util';
import httpStatus from 'http-status';

export const addItem = async (name: string, image: string, type: ValueOf<typeof TYPE>, subtype: ValueOf<typeof SUBTYPE>) => {
  const hasMissingData = [name, image, type, subtype].some(_value => isEmpty(_value));

  if (hasMissingData) throw new HttpException(httpStatus.BAD_REQUEST, 'item data is empty');
  const item = await itemModel.findOne({ name, type, subtype });
  if (item) throw new HttpException(httpStatus.CONFLICT, `item with provided details already exist`);
  //@TODO: impelement the add item logic
};

export const addInventory = async (itemId: number, addedBy: number, price: number, quantity: number, stock: ValueOf<typeof AVAILABILITY>) => {
  const hasMissingData = [itemId, addedBy, price, quantity, stock].some(_value => isEmpty(_value));

  if (hasMissingData) throw new HttpException(httpStatus.BAD_REQUEST, 'item data is empty');
  const itemExist = await itemModel.findOne({ itemId });
  const userExist = await itemModel.findOne({ addedBy });
  //@TODO: check if the user has Producer Role
  if (!itemExist || !userExist) throw new HttpException(httpStatus.CONFLICT, `Not found !!!`);
  //@TODO: impelement the add inventory logic
};
