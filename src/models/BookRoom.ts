import mongoose, { Schema } from "mongoose";

export interface BookRoom extends Document {
  name: string;
  address: string;
  phone: string;
  checkin: Date;
  checkout: Date;
  paid: boolean;
  requests: string;
  numberofguests: string;
  roomnum: string;
  status: string;
  roomtype: string;
  amount:string
}

const BookSchema = new Schema({
  name: {
    type: String,
    requied: [true, "Name is required"],
  },
  address: {
    type: String,
    requied: [true, "Address is required"],
  },
  phone: {
    type: String,
    requied: [true, "Phone is required"],
  },
  checkin: {
    type: Date,
    requied: [true, "Check in date is required"],
  },
  checkout: {
    type: Date,
  },
  paid: {
    type: Boolean,
    default: false,
  },
  requests: {
    type: String,
  },
  numberofguests: {
    type: String,
    requied: [true, "numberofguests is required"],
  },
  roomnum: {
    type: String,
  },
  status: {
    type: String,
  },
  roomtype: {
    type: String,
    requied: [true, "roomtype is required"],
  },
  amount:{
    type:String,
    required:[true,"amount is required"]
  }
});

const BookRoom =
  (mongoose.models.BookRoom as mongoose.Model<BookRoom>) ||
  mongoose.model<BookRoom>("BookRoom", BookSchema);

export default BookRoom

// // i have rooms like delexue ,superior,executive,family,penthhouse,oceanview,honeymoon standard
