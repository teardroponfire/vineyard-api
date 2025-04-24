import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const { Schema } = mongoose;

export const BottleSchema = new Schema({
  createdAt: { default: Date.now, type: Date },
  isDeleted: { default: false, type: Boolean },
  modifiedAt: Date,
  name: String,
});

const VintageSchema = new Schema({
  bottles: [BottleSchema],
  createdAt: { default: Date.now, type: Date },
  isDeleted: { default: false, type: Boolean },
  modifiedAt: Date,
  name: String,
});

const WineSchema = new Schema({
  createdAt: { default: Date.now, type: Date },
  isDeleted: { default: false, type: Boolean },
  modifiedAt: Date,
  name: String,
  vintages: [VintageSchema],
  winery: {
    type: mongoose.ObjectId,
    ref: 'parent'
  }
});

const WinerySchema = new Schema({
  createdAt: { default: Date.now, type: Date },
  isDeleted: { default: false, type: Boolean },
  modifiedAt: Date,
  name: String,
  wines: [WineSchema]
});

const LocationSchema = new Schema({
  createdAt: { default: Date.now, type: Date },
  isDeleted: { default: false, type: Boolean },
  modifiedAt: Date,
  name: String,
});

const CollectionSchema = new Schema({
  createdAt: { default: Date.now, type: Date },
  isDeleted: { default: false, type: Boolean },
  oid: { type: String, default: nanoid() },
  locations: [LocationSchema],
  modifiedAt: Date,
  name: String,
  wines: [WineSchema],
  wineries: [WinerySchema],
  owner: { type: mongoose.ObjectId, ref: 'parent' },
  users: [{ type: mongoose.ObjectId, ref: 'parent' }]
});

export default mongoose.model('Collection', CollectionSchema);