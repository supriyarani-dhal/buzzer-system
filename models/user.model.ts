import mongoose, { Schema, Document } from "mongoose";
interface IUser extends Document {
  name: string;
  phone: string;
  createdAt: Date;
}
const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.models.User ||
  mongoose.model<IUser>("User", userSchema);
