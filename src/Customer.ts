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
    const totalOrders = customer.orders.length;
    console.log(`Customer: ${customer.name}, Email: ${customer.email}, Total Orders: ${totalOrders}`);
    customer.orders.forEach(order => {
        console.log(`Product: ${order.product.name}, Quantity: ${order.quantity}`);
    });
}
