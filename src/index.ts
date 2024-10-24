import { Product } from './Product';
import { DiscountedProduct } from './DiscountedProduct';
import { Inventory } from './Inventory';
import { applyTax } from './PriceUtils';
import { displayProductData } from './ProductDataFetcher';

const inventory = new Inventory<Product>();

const product1 = new Product('Laptop', 1200, 'Electronics');
const product2 = new DiscountedProduct('Headphones', 200, 'Electronics', 20);

inventory.addItem(product1);
inventory.addItem(product2);

console.log('Product Inventory:', inventory.listItems());
console.log(`Price after tax for Laptop: $${applyTax(product1.price).toFixed(2)}`);

displayProductData();
