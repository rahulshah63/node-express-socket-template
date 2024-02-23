import { IItems, SUBTYPE, TYPE } from '@/interfaces/item.interface';
import { Document, model, Schema } from 'mongoose';

const itemSchema: Schema<IItems & Document> = new Schema({
  itemId: {
    type: Number,
    required: true,
    unique: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: { type: String, enum: Object.values(TYPE), required: true },
  subtype: { type: String, enum: Object.values(SUBTYPE), required: true },
  createdAt: { type: Date, default: Date.now },
});

const itemModel = model<IItems & Document>('items', itemSchema);

export default itemModel;
