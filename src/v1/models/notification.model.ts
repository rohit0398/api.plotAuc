import mongoose from "mongoose";
import User from "@user/user.model";
import Auction from "./auction.model";

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: User },
  auctionId: { type: mongoose.Schema.Types.ObjectId, ref: Auction },
  type: String, // (Outbid, Highest Bid, Won, Lost, etc.)
  message: String,
  isRead: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

const Notification = mongoose.model("Notification", notificationSchema);

Notification.createCollection().then(function () {
  console.log("Collection is created!");
});

export default Notification
