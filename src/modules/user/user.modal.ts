import { IAddress, IUserDocument, ROLE } from './user.interface';
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

const UserSchema: Schema<IUserDocument> = new Schema({
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

const UserModel = model('user', UserSchema);

export default UserModel;
