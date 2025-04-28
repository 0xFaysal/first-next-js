import { Request, Response } from 'express';
import { Product } from '../models/product';

class ProductController {
    private products: Product[] = [];

    public getAllProducts = (req: Request, res: Response): void => {
        res.status(200).json(this.products);
    };

    public getProductById = (req: Request, res: Response): void => {
        const productId = parseInt(req.params.id);
        const product = this.products.find(p => p.id === productId);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    };

    public createProduct = (req: Request, res: Response): void => {
        const newProduct: Product = req.body;
        this.products.push(newProduct);
        res.status(201).json(newProduct);
    };

    public updateProduct = (req: Request, res: Response): void => {
        const productId = parseInt(req.params.id);
        const index = this.products.findIndex(p => p.id === productId);
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...req.body };
            res.status(200).json(this.products[index]);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    };

    public deleteProduct = (req: Request, res: Response): void => {
        const productId = parseInt(req.params.id);
        const index = this.products.findIndex(p => p.id === productId);
        if (index !== -1) {
            this.products.splice(index, 1);
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    };
}

export default new ProductController();