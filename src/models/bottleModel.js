import mongoose from 'mongoose';

const { Schema } = mongoose;

export const BottleSchema = new Schema({
  createdAt: { default: Date.now, type: Date },
  isDeleted: { default: false, type: Boolean },
  modifiedAt: Date,
  name: String,
});

export default mongoose.model('Bottle', BottleSchema); 