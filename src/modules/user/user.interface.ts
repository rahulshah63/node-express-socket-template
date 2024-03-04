import { Document } from 'mongoose';

export enum ROLE {
  PRODUCER = 'producer',
  CONSUMER = 'consumer',
  ADMIN = 'admin',
}

export interface IAddress {
  street: string;
  city: string;
  zipCode: number;
}

export interface IUserDocument extends Document {
  userId: string;
  email: string;
  name: string;
  password: string;
  role: ROLE;
  phone: number;
  address: IAddress;
  provider?: string;
}
