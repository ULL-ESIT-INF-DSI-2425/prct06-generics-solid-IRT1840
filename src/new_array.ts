class CustomArray<T> {
    private items: T[];

    constructor(initialItems: T[] = []) {
        this.items = [...initialItems];
    }

    length(): number {
        return this.items.length;
    }

    push(item: T): number {
        this.items[this.items.length] = item;
        return this.items.length;
    }

    pop(): T | undefined {
        if (this.items.length === 0) return undefined;
        const lastItem = this.items[this.items.length - 1];
        this.items.length -= 1;
        return lastItem;
    }

    shift(): T | undefined {
        if (this.items.length === 0) return undefined;
        const firstItem = this.items[0];
        for (let i = 1; i < this.items.length; i++) {
            this.items[i - 1] = this.items[i];
        }
        this.items.length -= 1;
        return firstItem;
    }

    unshift(item: T): number {
        for (let i = this.items.length; i > 0; i--) {
            this.items[i] = this.items[i - 1];
        }
        this.items[0] = item;
        return this.items.length;
    }

    map<U>(callback: (item: T, index: number, arr: T[]) => U): CustomArray<U> {
        const result = new CustomArray<U>();
        for (let i = 0; i < this.items.length; i++) {
            result.push(callback(this.items[i], i, this.items));
        }
        return result;
    }

    filter(callback: (item: T, index: number, arr: T[]) => boolean): CustomArray<T> {
        const result = new CustomArray<T>();
        for (let i = 0; i < this.items.length; i++) {
            if (callback(this.items[i], i, this.items)) {
                result.push(this.items[i]);
            }
        }
        return result;
    }

    reduce<U>(callback: (acc: U, item: T, index: number, arr: T[]) => U, initialValue: U): U {
        let accumulator = initialValue;
        for (let i = 0; i < this.items.length; i++) {
            accumulator = callback(accumulator, this.items[i], i, this.items);
        }
        return accumulator;
    }

    forEach(callback: (item: T, index: number, arr: T[]) => void): void {
        for (let i = 0; i < this.items.length; i++) {
            callback(this.items[i], i, this.items);
        }
    }

    find(callback: (item: T, index: number, arr: T[]) => boolean): T | undefined {
        for (let i = 0; i < this.items.length; i++) {
            if (callback(this.items[i], i, this.items)) {
                return this.items[i];
            }
        }
        return undefined;
    }

    includes(value: T): boolean {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === value) {
                return true;
            }
        }
        return false;
    }

    indexOf(value: T): number {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === value) {
                return i;
            }
        }
        return -1;
    }

    toArray(): T[] {
        return [...this.items];
    }
}

// Ejemplo de uso:
const myArray = new CustomArray<number>([1, 2, 3]);
myArray.push(4);
console.log(myArray.toArray()); // [1, 2, 3, 4]
