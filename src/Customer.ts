import { Product } from './Product';

interface Order {
    product: Product;
    quantity: number;
}

export interface Customer {
    name: string;
    email: string;
    orders: Order[];
}

export function getCustomerInfo(customer: Customer): void {
    console.log(`Customer Name: ${customer.name}`);
    console.log(`Customer Email: ${customer.email}`);
    console.log(`Total Orders: ${customer.orders.length}`);

    customer.orders.forEach((order, index) => {
        console.log(`${index + 1}. ${order.product.name}, Quantity: ${order.quantity}`);
    });
}
