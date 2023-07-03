import mongoose from "mongoose";

const plotSchema = new mongoose.Schema({
    title: String,
    description: String,
    area: Number,
    location: String,
    price: Number,
    status: String, //'Available'|'Sold'
    createdAt: Date,
    updatedAt: Date
});

const Plot = mongoose.model("Plot", plotSchema);

export default Plot
