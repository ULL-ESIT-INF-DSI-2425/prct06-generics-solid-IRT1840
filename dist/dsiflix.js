// Clase abstracta
export class BasicStreamableCollection {
    items;
    constructor(items = []) {
        this.items = items;
    }
    addItem(item) {
        this.items.push(item);
    }
    getAllItems() {
        return this.items;
    }
}
// Implementaciones para cada tipo de contenido
export class SeriesCollection extends BasicStreamableCollection {
    searchByName(name) {
        return this.items.filter(item => item[0].toLowerCase().includes(name.toLowerCase()));
    }
    searchByYear(year) {
        return this.items.filter(item => item[1] === year);
    }
}
export class MoviesCollection extends BasicStreamableCollection {
    searchByName(name) {
        return this.items.filter(item => item[0].toLowerCase().includes(name.toLowerCase()));
    }
    searchByYear(year) {
        return this.items.filter(item => item[1] === year);
    }
}
export class DocumentariesCollection extends BasicStreamableCollection {
    searchByName(name) {
        return this.items.filter(item => item[0].toLowerCase().includes(name.toLowerCase()));
    }
    searchByYear(year) {
        return this.items.filter(item => item[1] === year);
    }
}
