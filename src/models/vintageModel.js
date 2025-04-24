import mongoose from 'mongoose';

const { Schema } = mongoose;

import bottleSchema from './bottle.js';

const VintageSchema = new Schema({
  bottles: [bottleSchema],
  createdAt: { default: Date.now, type: Date },
  isDeleted: { default: false, type: Boolean },
  modifiedAt: Date,
  name: String,
});

export default mongoose.model('Vintage', VintageSchema);