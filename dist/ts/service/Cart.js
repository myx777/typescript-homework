"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this._items = [];
    }
    Cart.prototype.add = function (item) {
        this._items.push(item);
    };
    Object.defineProperty(Cart.prototype, "items", {
        get: function () {
            return __spreadArray([], this._items, true);
        },
        enumerable: false,
        configurable: true
    });
    // подсчет сумммы без скидки
    Cart.prototype.sum = function () {
        return this._items.reduce(function (acc, item) { return acc + item.price; }, 0);
    };
    // подсчет суммы со скидкой
    Cart.prototype.sumWithDiscount = function (value) {
        return this.sum() * value / 100;
    };
    // удаление из корзины по id
    Cart.prototype.remove = function (id) {
        var indexToRemove = this._items.findIndex(function (item) { return item.id === id; });
        if (indexToRemove !== -1) {
            // Используем splice для удаления элемента по индексу
            var deletedItem = this._items.splice(indexToRemove, 1)[0];
            return deletedItem;
        }
        return undefined; // Возвращаем undefined, если элемент не найден
    };
    return Cart;
}());
exports.default = Cart;
//# sourceMappingURL=Cart.js.map