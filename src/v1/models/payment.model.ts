import mongoose from "mongoose";
import User from "@user/user.model";
import Auction from "./auction.model";

const paymentSchema = new mongoose.Schema({
  auctionId: { type: mongoose.Schema.Types.ObjectId, ref: Auction },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: User },
  amount: Number,
  paymentMethod: String,
  paymentStatus: String, //(Pending, Success, Failed)
  createdAt: Date,
  updatedAt: Date,
});

const Payment = mongoose.model("Payment", paymentSchema);



export default Payment
