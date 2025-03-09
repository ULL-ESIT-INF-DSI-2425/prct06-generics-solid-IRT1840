// Interfaz para búsqueda
export interface Searchable<T> {
  searchByName(name: string): T[];
  searchByYear(year: number): T[];
}

// Interfaz Streamable
export interface Streamable<T> extends Searchable<T> {
  addItem(item: T): void;
  getAllItems(): T[];
}

// Ahora Media es una tupla [title, year]
type Media = [string, number];

// Clase abstracta
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  protected items: T[];

  constructor(items: T[] = []) {
    this.items = items;
  }

  addItem(item: T): void {
    this.items.push(item);
  }

  getAllItems(): T[] {
    return this.items;
  }

  abstract searchByName(name: string): T[];
  abstract searchByYear(year: number): T[];
}

// Implementaciones para cada tipo de contenido
export class SeriesCollection extends BasicStreamableCollection<Media> {
  searchByName(name: string): Media[] {
    return this.items.filter(item => item[0].toLowerCase().includes(name.toLowerCase()));
  }

  searchByYear(year: number): Media[] {
    return this.items.filter(item => item[1] === year);
  }
}

export class MoviesCollection extends BasicStreamableCollection<Media> {
  searchByName(name: string): Media[] {
    return this.items.filter(item => item[0].toLowerCase().includes(name.toLowerCase()));
  }

  searchByYear(year: number): Media[] {
    return this.items.filter(item => item[1] === year);
  }
}

export class DocumentariesCollection extends BasicStreamableCollection<Media> {
  searchByName(name: string): Media[] {
    return this.items.filter(item => item[0].toLowerCase().includes(name.toLowerCase()));
  }

  searchByYear(year: number): Media[] {
    return this.items.filter(item => item[1] === year);
  }
}
