import mongoose from 'mongoose';

const { Schema } = mongoose;

import Vintage from './vintage.js';

const WineSchema = new Schema({
  createdAt: { default: Date.now, type: Date },
  isDeleted: { default: false, type: Boolean },
  modifiedAt: Date,
  name: String,
  vintages: [Vintage],
  winery: {
    type: mongoose.ObjectId,
    ref: 'parent'
  }
});

export default mongoose.model('Wine', WineSchema);