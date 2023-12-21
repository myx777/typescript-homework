import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';
import Buyable from '../domain/Buyable';

describe('test Cart', () => {
  test('new card should be empty', () => {
    const cart = new Cart();

    expect(cart.items.length).toBe(0);
  });

  test('new card should add products', () => {
    const cart = new Cart();

    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1900, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 'Action', 137, 1000));

    expect(cart.items).toContainEqual({
      id: 1001,
      name: 'War and Piece',
      author: 'Leo Tolstoy',
      price: 2000,
      pages: 1225,
    });
    
  });
  test('should add item to cart', () => {
    const cart = new Cart();
    const buyable: Buyable = { id: 1, name: 'Product', price: 100 };

    cart.add(buyable);

    expect(cart.items).toEqual([buyable]);
  });

  test('test method sum(), sumWithDiscount(), remove()', (done) => {
    const cart = new Cart();

    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 25, 250));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 25));
    cart.add(new Movie(1900, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 'Action', 137, 50));

    expect(cart.sum()).toEqual(100);
    expect(cart.sumWithDiscount(50)).toEqual(50);

    const newCart = cart.remove(1001);

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


