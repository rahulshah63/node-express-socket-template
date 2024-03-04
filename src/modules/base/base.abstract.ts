/* eslint-disable prettier/prettier */
import { Types } from 'mongoose';

export abstract class BaseServiceAbstract {
  public abstract create(doc: Partial<any>): Promise<any>;
  public abstract findById(id: string | Types.ObjectId): Promise<any>;
  public abstract findOne(filter: object): Promise<any>;
  public abstract find(filter: object): Promise<any[]>;
  public abstract updateById(id: string | Types.ObjectId, update: object): Promise<any>;
  public abstract updateOne(filter: object, update: object): Promise<any>;
  public abstract updateMany(filter: object, update: object): Promise<any>;
  public abstract deleteById(id: string | Types.ObjectId): Promise<any>;
  public abstract deleteOne(filter: object): Promise<any>;
  public abstract deleteMany(filter: object): Promise<any>;
}
