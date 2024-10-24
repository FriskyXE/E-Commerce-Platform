import { Product } from './Product';

export class DiscountedProduct extends Product {
    constructor(
        name: string,
        price: number,
        category: string,
        private discountRate: number
    ) {
        super(name, price, category);
        if (this.discountRate < 0 || this.discountRate > 100) {
            console.error("Discount rate must be between 0 and 100");
        }
    }

    public getProductInfo(): string {
        const discountedPrice = this.price * (1 - this.discountRate / 100);
        return `${super.getProductInfo()}, Discount: ${this.discountRate}%, Final Price: $${discountedPrice.toFixed(2)}`;
    }
}
