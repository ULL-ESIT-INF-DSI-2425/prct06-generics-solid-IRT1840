class CustomArray {
    items;
    constructor(initialItems = []) {
        this.items = [...initialItems];
    }
    length() {
        return this.items.length;
    }
    push(item) {
        this.items[this.items.length] = item;
        return this.items.length;
    }
    pop() {
        if (this.items.length === 0)
            return undefined;
        const lastItem = this.items[this.items.length - 1];
        this.items.length -= 1;
        return lastItem;
    }
    shift() {
        if (this.items.length === 0)
            return undefined;
        const firstItem = this.items[0];
        for (let i = 1; i < this.items.length; i++) {
            this.items[i - 1] = this.items[i];
        }
        this.items.length -= 1;
        return firstItem;
    }
    unshift(item) {
        for (let i = this.items.length; i > 0; i--) {
            this.items[i] = this.items[i - 1];
        }
        this.items[0] = item;
        return this.items.length;
    }
    map(callback) {
        const result = new CustomArray();
        for (let i = 0; i < this.items.length; i++) {
            result.push(callback(this.items[i], i, this.items));
        }
        return result;
    }
    filter(callback) {
        const result = new CustomArray();
        for (let i = 0; i < this.items.length; i++) {
            if (callback(this.items[i], i, this.items)) {
                result.push(this.items[i]);
            }
        }
        return result;
    }
    reduce(callback, initialValue) {
        let accumulator = initialValue;
        for (let i = 0; i < this.items.length; i++) {
            accumulator = callback(accumulator, this.items[i], i, this.items);
        }
        return accumulator;
    }
    forEach(callback) {
        for (let i = 0; i < this.items.length; i++) {
            callback(this.items[i], i, this.items);
        }
    }
    find(callback) {
        for (let i = 0; i < this.items.length; i++) {
            if (callback(this.items[i], i, this.items)) {
                return this.items[i];
            }
        }
        return undefined;
    }
    includes(value) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === value) {
                return true;
            }
        }
        return false;
    }
    indexOf(value) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === value) {
                return i;
            }
        }
        return -1;
    }
    toArray() {
        return [...this.items];
    }
}
// Ejemplo de uso:
const myArray = new CustomArray([1, 2, 3]);
myArray.push(4);
console.log(myArray.toArray()); // [1, 2, 3, 4]
export {};
