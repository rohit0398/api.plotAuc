import mongoose from "mongoose";
import User from "@user/user.model";
import Auction from "./auction.model";

const bidSchema = new mongoose.Schema({
  auctionId: { type: mongoose.Schema.Types.ObjectId, ref: Auction },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: User },
  bidAmount: Number,
  createdAt: Date,
  updatedAt: Date,
});

const Bid = mongoose.model("Bid", bidSchema);

export default Bid;
