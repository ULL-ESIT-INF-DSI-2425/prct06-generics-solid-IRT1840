export class SearchableCollection {
    _items;
    constructor(_items) {
        this._items = _items;
    }
    addItem(item) {
        this._items.push(item);
        return this._items;
    }
    getItem(indexOfItem) {
        if (indexOfItem >= 0 && indexOfItem < this._items.length) {
            return this._items[indexOfItem];
        }
        else {
            return undefined;
        }
    }
    removeItem(indexOfItem) {
        return this._items.splice(indexOfItem, 1);
    }
    getNumberOfItems() {
        return this._items.length;
    }
}
export class NumericSearchableCollection extends SearchableCollection {
    _numberCollection;
    constructor(_numberCollection) {
        super(_numberCollection);
        this._numberCollection = _numberCollection;
    }
    search(term) {
        const numberCoincidences = [];
        for (let i = 0; i < this._numberCollection.length; i++) {
            if (this._numberCollection[i] === term) {
                numberCoincidences.push(i);
            }
        }
        return numberCoincidences;
    }
}
export class StringSearchableCollection extends SearchableCollection {
    _stringCollection;
    constructor(_stringCollection) {
        super(_stringCollection);
        this._stringCollection = _stringCollection;
    }
    search(term) {
        const stringCoincidences = [];
        for (let i = 0; i < this._stringCollection.length; i++) {
            if (this._stringCollection[i] === term) {
                stringCoincidences.push(term);
            }
        }
        return stringCoincidences;
    }
}
