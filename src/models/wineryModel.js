import mongoose from 'mongoose';

const { Schema } = mongoose;

import Wine from './wine.js';

const WinerySchema = new Schema({
  createdAt: { default: Date.now, type: Date },
  isDeleted: { default: false, type: Boolean },
  modifiedAt: Date,
  name: String,
  wines: [Wine]
});

export default mongoose.model('Winery', WinerySchema);