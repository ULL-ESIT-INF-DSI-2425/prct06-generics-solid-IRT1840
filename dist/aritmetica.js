/**
 * Clase ArithmeticableCollection, implementa los métodos para manejar una coleccion de elementos aritméticos
 */
export class ArithmeticableCollection {
    _items;
    constructor(_items) {
        this._items = _items;
    }
    /**
     *
     * @param item El nuevo item a ñadir
     * @returns El array
     */
    addArithmeticable(item) {
        this._items.push(item);
        return this._items;
    }
    /**
     *
     * @param indice El indice del objeto buscado
     * @returns El objeto en dicho indice
     */
    getArithmeticable(indice) {
        return this._items[indice];
    }
    /**
     *
     * @param indice Quita el elemento en dicho indice
     * @returns El elemento
     */
    removeArithmeticable(indice) {
        return this._items.splice(indice, 1);
    }
    /**
     *
     * @returns El numero de objetos en la coleccion
     */
    getNumberArithmeticable() {
        return this._items.length;
    }
}
/**
 * Clase complejo que implementa lso métodos de los numeros complejos
 */
export class Complex {
    real;
    imaginary;
    /**
     * Constructor clase Complex
     * @param real Parte real del número complejo.
     * @param imaginary Parte imaginaria del número complejo.
     */
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    /**
     *
     * @returns El valor de la parte real
     */
    getReal() {
        return this.real;
    }
    /**
     *
     * @returns El valor de imaginary
     */
    getImaginary() {
        return this.imaginary;
    }
    /**
     *
     * @param nuevo El nuevo valor de real
     */
    setReal(nuevo) {
        this.real = nuevo;
    }
    /**
     *
     * @param nuevo El nuevo valor de imaginary
     */
    setImaginary(nuevo) {
        this.imaginary = nuevo;
    }
    /**
     *
     * @param other Otro complejo
     * @returns Un complejoresultante de la suma
     */
    add(otro) {
        return new Complex(this.real + otro.real, this.imaginary + otro.imaginary);
    }
    /**
     *
     * @param other Otro complejo
     * @returns Un complejo resultante de la resta
     */
    subtract(otro) {
        return new Complex(this.real - otro.real, this.imaginary - otro.imaginary);
    }
    /**
     *
     * @param other Otro complejo
     * @returns Un complejo resultante de la multiplicacion
     */
    multiply(otro) {
        return new Complex(this.real * otro.real - this.imaginary * otro.imaginary, this.real * otro.imaginary + this.imaginary * otro.real);
    }
    /**
     *
     * @param otro Otro complejo
     * @returns Un complejo resultante de la división
     */
    divide(otro) {
        //  Función rara: (a+bi)/(c+di) = [(ac+bd)/(c^2+d^2)] + [(bc-ad)/(c^2+d^2)]i
        const denominator = otro.real ** 2 + otro.imaginary ** 2;
        return new Complex((this.real * otro.real + this.imaginary * otro.imaginary) / denominator, (this.imaginary * otro.real - this.real * otro.imaginary) / denominator);
    }
}
