import mongoose, { Schema, Document } from "mongoose";

interface IResponse extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  name: string;
  timestamp: Date;
}
const responseSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});
export default mongoose.models.Response ||
  mongoose.model<IResponse>("Response", responseSchema);
