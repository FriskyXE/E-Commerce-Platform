import { Product } from './Product';

export class Inventory<T extends Product> {
    private items: T[] = [];

    public addItem(item: T): void {
        this.items.push(item);
    }

    public listItems(): T[] {
        return this.items;
    }

    public getItemCount(): number {
        return this.items.length;
    }
}
