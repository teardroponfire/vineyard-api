import mongoose from 'mongoose';

const { Schema } = mongoose;

const LocationSchema = new Schema({
  createdAt: { default: Date.now, type: Date },
  isDeleted: { default: false, type: Boolean },
  modifiedAt: Date,
  name: String,
});

export default mongoose.model('Location', LocationSchema);