import mongoose from "mongoose";
import Auction from "../v1/models/auction.model";
import Plot from "../v1/models/plot.model";
import Bid from "../v1/models/bid.model";
import Payment from "../v1/models/payment.model";
import Notification from "../v1/models/notification.model";

export async function MongoConnection() {
  const config: any = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    await mongoose.connect(process.env.CONNECTION_STRING as string, config);
    console.log("db connected");

    Auction.createCollection().then(function () {
      console.log("Collection is created!");
    });

    Plot.createCollection().then(function () {
      console.log("Collection is created!");
    });

    Bid.createCollection().then(function () {
      console.log("Collection is created!");
    });

    Notification.createCollection().then(function () {
      console.log("Collection is created!");
    });

    Payment.createCollection().then(function () {
      console.log("Collection is created!");
    });
  } catch (error) {
    mongoose.connection.close();
    // eslint-disable-next-line no-console
    console.error("Unable to connect to the database:", error);
  }
}

export default MongoConnection;
