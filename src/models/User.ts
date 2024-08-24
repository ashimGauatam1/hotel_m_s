import mongoose, { mongo, Schema } from "mongoose";

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  isVeified:boolean,
  Code:string
}

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "Email must be unique"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  isVeified:{
    type:Boolean,
    default:false,
  },
  code:{
    type:Number,
  }
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
