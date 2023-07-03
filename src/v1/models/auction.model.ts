import mongoose from "mongoose";
import User from "@user/user.model";
import Plot from "./plot.model";

const auctionSchema = new mongoose.Schema({
  title: String,
  description: String,
  startDate: Date,
  endDate: Date,
  minimumBid: Number,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: User },
  plotId: { type: mongoose.Schema.Types.ObjectId, ref: Plot },
  createdAt: Date,
  updatedAt: Date,
});

const Auction = mongoose.model("Auction", auctionSchema);



export default Auction;
