import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IUser {
  name: string;
  email: string;
  password: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

// 3. Create a Model.
const User = model<IUser>('User', userSchema);

export function connectMongoDB(dbUrl: string) {
  // 4. Connect to MongoDB
  connect(dbUrl).then( () => {
    console.log("Connected to MobgoDB!");
  }).catch((err) => {
    console.dir(err);
  });
}