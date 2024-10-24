import { Product } from './Product';

export class DiscountedProduct extends Product {
    constructor(
        name: string,
        price: number,
        category: string,
        private _discountRate: number
    ) {
        super(name, price, category);
        if (this._discountRate < 0 || this._discountRate > 100) {
            throw new Error("Discount rate must be between 0 and 100");
        }
    }

    getProductInfo(): string {
        const discountedPrice = this.price * (1 - this._discountRate / 100);
        return `${super.getProductInfo()}, Discount: ${this._discountRate}%, Final Price: ${discountedPrice.toFixed(2)}`;
    }
}
