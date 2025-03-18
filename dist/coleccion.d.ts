export interface Collectable<T> {
    addItem(item: T): T[];
    getItem(indexOfItem: number): T | undefined;
    removeItem(indexOfItem: number): T[];
    getNumberOfItems(): number;
}
export interface Searchable<T> {
    search(term: T): T[];
}
export declare abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
    private _items;
    constructor(_items: T[]);
    addItem(item: T): T[];
    getItem(indexOfItem: number): T | undefined;
    removeItem(indexOfItem: number): T[];
    getNumberOfItems(): number;
    abstract search(term: T): T[];
}
export declare class NumericSearchableCollection extends SearchableCollection<number> {
    private _numberCollection;
    constructor(_numberCollection: number[]);
    search(term: number): number[];
}
export declare class StringSearchableCollection extends SearchableCollection<string> {
    private _stringCollection;
    constructor(_stringCollection: string[]);
    search(term: string): string[];
}
