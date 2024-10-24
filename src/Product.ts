export class Product {
    private static productCount: number = 0;

    constructor(
        private name: string,
        private price: number,
        private category: string
    ) {
        Product.productCount++;
    }

    public updatePrice(newPrice: number): void {
        if (newPrice <= 0) {
            console.error("Price must be greater than 0");
            return;
        }
        this.price = newPrice;
    }

    public getProductInfo(): string {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Category: ${this.category}`;
    }

    public static totalProducts(): number {
        return Product.productCount;
    }
}
