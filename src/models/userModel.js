import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  createdAt: { default: Date.now, type: Date },
  emailAddress: String,
  givenName: String,
  isDeleted: { default: false, type: Boolean },
  modifiedAt: Date,
  oid: String,
  surname: String
});

export default mongoose.model('User', UserSchema);