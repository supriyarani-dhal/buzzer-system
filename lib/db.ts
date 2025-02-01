import mongoose from "mongoose";

const cached: {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Connection> | null;
} = (global as typeof globalThis & { mongoose: typeof cached }).mongoose || {
  conn: null,
  promise: null,
};

export async function connectToDB(): Promise<mongoose.Connection> {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGODB_URI as string)
      .then((mongoose) => mongoose.connection);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
