import { describe, it, expect } from 'vitest';
import { NumericSearchableCollection, StringSearchableCollection } from "../src/coleccion";

// Tests para NumericSearchableCollection
describe('NumericSearchableCollection', () => {
  it('should add an item', () => {
    const collection = new NumericSearchableCollection([1, 2, 3]);
    expect(collection.addItem(4)).toEqual([1, 2, 3, 4]);
  });

  it('should get an item by index', () => {
    const collection = new NumericSearchableCollection([10, 20, 30]);
    expect(collection.getItem(1)).toBe(20);
    expect(collection.getItem(5)).toBeUndefined();
  });

  it('should remove an item by index', () => {
    const collection = new NumericSearchableCollection([5, 10, 15]);
    expect(collection.removeItem(1)).toEqual([10]);
    expect(collection.getNumberOfItems()).toBe(2);
  });

  it('should return the number of items', () => {
    const collection = new NumericSearchableCollection([1, 2, 3]);
    expect(collection.getNumberOfItems()).toBe(3);
  });

  it('should search for a number and return indexes', () => {
    const collection = new NumericSearchableCollection([1, 2, 3, 2]);
    expect(collection.search(2)).toEqual([1, 3]);
    expect(collection.search(5)).toEqual([]);
  });
});

// Tests para StringSearchableCollection
describe('StringSearchableCollection', () => {
  it('should add an item', () => {
    const collection = new StringSearchableCollection(['a', 'b', 'c']);
    expect(collection.addItem('d')).toEqual(['a', 'b', 'c', 'd']);
  });

  it('should get an item by index', () => {
    const collection = new StringSearchableCollection(['apple', 'banana', 'cherry']);
    expect(collection.getItem(1)).toBe('banana');
    expect(collection.getItem(5)).toBeUndefined();
  });

  it('should remove an item by index', () => {
    const collection = new StringSearchableCollection(['x', 'y', 'z']);
    expect(collection.removeItem(0)).toEqual(['x']);
    expect(collection.getNumberOfItems()).toBe(2);
  });

  it('should return the number of items', () => {
    const collection = new StringSearchableCollection(['one', 'two', 'three']);
    expect(collection.getNumberOfItems()).toBe(3);
  });

  it('should search for a string and return matching terms', () => {
    const collection = new StringSearchableCollection(['hello', 'world', 'hello']);
    expect(collection.search('hello')).toEqual(['hello', 'hello']);
    expect(collection.search('test')).toEqual([]);
  });
});
