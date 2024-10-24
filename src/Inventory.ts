import { Product } from './Product';

export class Inventory<T extends Product> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    listItems(): T[] {
        return [...this.items];
    }

    getItemCount(): number {
        return this.items.length;
    }
}
