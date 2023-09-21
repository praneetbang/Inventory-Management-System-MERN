import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    city: String,
    state: String,
    country: String,
    phoneNumber: String,
    rawMaterial: String,
    transactions: Array,
    status: String,
  },
  { timestamps: true }
);

const Supplier = mongoose.model("Supplier", SupplierSchema);
export default Supplier;