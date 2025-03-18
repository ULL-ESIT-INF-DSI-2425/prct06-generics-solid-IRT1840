export interface Searchable<T> {
    searchByName(name: string): T[];
    searchByYear(year: number): T[];
}
export interface Streamable<T> extends Searchable<T> {
    addItem(item: T): void;
    getAllItems(): T[];
}
type Media = [string, number];
export declare abstract class BasicStreamableCollection<T> implements Streamable<T> {
    protected items: T[];
    constructor(items?: T[]);
    addItem(item: T): void;
    getAllItems(): T[];
    abstract searchByName(name: string): T[];
    abstract searchByYear(year: number): T[];
}
export declare class SeriesCollection extends BasicStreamableCollection<Media> {
    searchByName(name: string): Media[];
    searchByYear(year: number): Media[];
}
export declare class MoviesCollection extends BasicStreamableCollection<Media> {
    searchByName(name: string): Media[];
    searchByYear(year: number): Media[];
}
export declare class DocumentariesCollection extends BasicStreamableCollection<Media> {
    searchByName(name: string): Media[];
    searchByYear(year: number): Media[];
}
export {};
