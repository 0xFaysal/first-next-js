// This file exports various TypeScript types and interfaces used throughout the application, ensuring type safety.

export interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}