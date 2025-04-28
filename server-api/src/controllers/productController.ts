import { Request, Response } from 'express';
import Product, { IProduct } from '../models/product';

class ProductController {
  // Get all products
  getAllProducts = async (req: Request, res: Response) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  // Get a single product by ID
  getProductById = async (req: Request, res: Response) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  // Create a new product
  createProduct = async (req: Request, res: Response) => {
    try {
      const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        category: req.body.category
      });

      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  // Update a product
  updateProduct = async (req: Request, res: Response) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } // Return the updated document
      );

      res.status(200).json(updatedProduct);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  // Delete a product
  deleteProduct = async (req: Request, res: Response) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
}

export default new ProductController();