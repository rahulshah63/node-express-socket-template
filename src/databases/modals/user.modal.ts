import { IAddress, IUser, ROLE } from '@/interfaces/user.interface';
import { Document, model, Schema } from 'mongoose';
const addressSchema: Schema<IAddress & Document> = new Schema({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
});

const userSchema: Schema<IUser & Document> = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  address: addressSchema,
  role: { type: String, enum: Object.values(ROLE), default: ROLE.CONSUMER },
  password: {
    type: String,
    required: true,
  },
  provider: { type: String },
});

const userModel = model<IUser & Document>('user', userSchema);

export default userModel;
