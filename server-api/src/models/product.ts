import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for a Product
export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

// Create the schema
const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String },
    category: { type: String, required: true }
  },
  {
    timestamps: true // Automatically add createdAt and updatedAt fields
  }
);

// Create and export the model
export default mongoose.model<IProduct>('Product', ProductSchema);