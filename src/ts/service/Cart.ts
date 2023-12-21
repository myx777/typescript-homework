import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
    // подсчет сумммы без скидки
    sum(): number {
        return this._items.reduce((acc, item) => acc + item.price, 0)
    }
    // подсчет суммы со скидкой
    sumWithDiscount(value: number): number {
        return this.sum() * value / 100;
    }

    // удаление из корзины по id
    remove(id: number): Buyable | undefined {
        const indexToRemove = this._items.findIndex(item => item.id === id);

        if (indexToRemove !== -1) {
            // Используем splice для удаления элемента по индексу
            const [deletedItem] = this._items.splice(indexToRemove, 1);
            return deletedItem;
        }

        return undefined; // Возвращаем undefined, если элемент не найден
    }
}

