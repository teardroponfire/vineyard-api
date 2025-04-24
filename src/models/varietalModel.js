import mongoose from 'mongoose';

const { Schema } = mongoose;

const VarietalSchema = new Schema({
  bottles: [Bottle],
  createdAt: { default: Date.now, type: Date },
  isDeleted: { default: false, type: Boolean },
  modifiedAt: Date,
  name: String,
});

export default mongoose.model('Varietal', VarietalSchema);