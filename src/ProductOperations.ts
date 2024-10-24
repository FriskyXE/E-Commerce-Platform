import { Product } from './Product';

export function filterProductsByPrice(products: Product[], minPrice: number): Product[] {
    return products.filter(product => product.price > minPrice);
}

export function getProductNames(products: Product[]): string[] {
    return products.map(product => product.name);
}

export function getTotalCost(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}
