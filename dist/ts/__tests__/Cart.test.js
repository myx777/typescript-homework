"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = __importDefault(require("../service/Cart"));
var Book_1 = __importDefault(require("../domain/Book"));
var MusicAlbum_1 = __importDefault(require("../domain/MusicAlbum"));
var Movie_1 = __importDefault(require("../domain/Movie"));
describe('test Cart', function () {
    test('new card should be empty', function () {
        var cart = new Cart_1.default();
        expect(cart.items.length).toBe(0);
    });
    test('new card should add products', function () {
        var cart = new Cart_1.default();
        cart.add(new Book_1.default(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
        cart.add(new MusicAlbum_1.default(1008, 'Meteora', 'Linkin Park', 900));
        cart.add(new Movie_1.default(1900, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 'Action', 137, 1000));
        expect(cart.items).toContainEqual({
            id: 1001,
            name: 'War and Piece',
            author: 'Leo Tolstoy',
            price: 2000,
            pages: 1225,
        });
    });
    test('should add item to cart', function () {
        var cart = new Cart_1.default();
        var buyable = { id: 1, name: 'Product', price: 100 };
        cart.add(buyable);
        expect(cart.items).toEqual([buyable]);
    });
    test('new card should add products', function (done) {
        var cart = new Cart_1.default();
        cart.add(new Book_1.default(1001, 'War and Piece', 'Leo Tolstoy', 25, 250));
        cart.add(new MusicAlbum_1.default(1008, 'Meteora', 'Linkin Park', 25));
        cart.add(new Movie_1.default(1900, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 'Action', 137, 50));
        // expect.assertions(3);
        expect(cart.sum()).toEqual(100);
        expect(cart.sumWithDiscount(50)).toEqual(50);
        var newCart = cart.remove(1001);
        console.log(newCart);
        expect(cart.items).not.toContainEqual({
            id: 1001,
            name: 'War and Piece',
            author: 'Leo Tolstoy',
            price: 2000,
            pages: 1225,
        });
        expect(cart.remove(10)).toBeUndefined();
        done();
    });
});
//# sourceMappingURL=Cart.test.js.map