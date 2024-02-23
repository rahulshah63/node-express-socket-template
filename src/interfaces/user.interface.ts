import { ValueOf } from '@/utils/util';

export const ROLE = {
  PRODUCER: 'producer',
  CONSUMER: 'consumer',
  ADMIN: 'admin',
} as const;

export interface IAddress {
  street: string;
  city: string;
  zipCode: number;
}

export interface IUser {
  userId: string;
  email: string;
  name: string;
  password: string;
  role: ValueOf<typeof ROLE>;
  phone: number;
  address: IAddress;
  provider?: string;
}
