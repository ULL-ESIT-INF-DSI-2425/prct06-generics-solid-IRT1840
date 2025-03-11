
export interface Collectable<T> {
  addItem(item: T): T[];
  getItem(indexOfItem: number): T | undefined;
  removeItem(indexOfItem: number): T[];
  getNumberOfItems(): number;
}

export interface Searchable<T> {
  search(term: T): T[];
}

export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
  constructor(private _items: T[]) {
  }

  addItem(item: T): T[] {
    this._items.push(item);
    return this._items;
  }

  getItem(indexOfItem: number): T | undefined {
    if (indexOfItem >= 0 && indexOfItem < this._items.length) {
      return this._items[indexOfItem];
    } else {
      return undefined;
    }
  }

  removeItem(indexOfItem: number): T[] {
    return this._items.splice(indexOfItem, 1);
  }

  getNumberOfItems() {
    return this._items.length;
  }

  // Método de la interfaz genérica Searchable
  abstract search(term: T): T[]
}


export class NumericSearchableCollection extends SearchableCollection<number> {
  constructor(private _numberCollection: number[]) {
    super(_numberCollection);
  }

  search(term: number): number[] {
    const numberCoincidences: number[] = [];
    for (let i = 0; i < this._numberCollection.length; i++) {
      if (this._numberCollection[i] === term) {
        numberCoincidences.push(i);
      }
    }
    return numberCoincidences;
  }
}


export class StringSearchableCollection extends SearchableCollection<string> {
  constructor(private _stringCollection: string[]) {
    super(_stringCollection);
  }


  search(term: string): string[] {
    const stringCoincidences: string[] = [];
    for (let i = 0; i < this._stringCollection.length; i++) {
      if (this._stringCollection[i] === term) {
        stringCoincidences.push(term)
      }
    }
    return stringCoincidences;
  }
}