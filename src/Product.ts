export class Product {
    private static productCount: number = 0;

    constructor(
        private _name: string,
        private _price: number,
        private _category: string
    ) {
        Product.productCount++;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

    get category(): string {
        return this._category;
    }

    updatePrice(newPrice: number): void {
        if (newPrice < 0) {
            throw new Error("Price cannot be negative");
        }
        this._price = newPrice;
    }

    getProductInfo(): string {
        return `Product: ${this._name}, Price: ${this._price.toFixed(2)}, Category: ${this._category}`;
    }

    static totalProducts(): number {
        return Product.productCount;
    }
}
