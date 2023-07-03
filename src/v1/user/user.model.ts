import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  role: String, //USER, ADMIN, MODERATOR
  address: String,
  createdAt: Date,
  updatedAt: Date,
});

const User = mongoose.model("User", userSchema);

User.createCollection().then(function () {
  console.log("Collection is created!");
});
export default User;
