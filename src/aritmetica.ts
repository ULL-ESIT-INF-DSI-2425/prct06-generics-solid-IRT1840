/**
 * Interfaz genérica `Arithmeticable` para operaciones aritméticas básicas.
 * Define los métodos para sumar, restar, multiplicar y dividir.
 * @template T Tipo genérico que especifica el tipo de los operandos y el resultado.
 * @method add Suma de dos números.
 * @method subtract Resta de dos números.
 * @method multiply Multiplicación de dos números.
 * @method divide División de dos números.
 * @returns El resultado de la operación aritmética.
 */
export interface Arithmeticable<T> {
  /**
   * Añade dos elementos
   * @param a Un numero
   * @param b Otro numero
   */
  add(a: T): T;
  /**
   * Resta dos elementos
   * @param a Un numero
   * @param b Otro numero
   */
  subtract(a: T): T;

  /**
   * Multiplica dos elementos
   * @param a Un numero
   * @param b Otro numero
   */
  multiply(a: T): T;
  /**
   * Divide dos elementos
   * @param a Un numero
   * @param b Otro numero
   */
  divide(a: T): T;
}

/**
 * Interfaz Coleccionable para listas de objetos
 * Define los métodos para añadir objetos, obtenerlos segun un indice, quitarlos y obtener el numero
 * @template T Tipo genérico 
 * @method addObject Suma de dos números.
 * @method getObjeto Resta de dos números.
 * @method removeItem Multiplicación de dos números.
 * @method getNItems Numero de objetos
 * @returns El resultado de la operación aritmética.
 */
export interface Coleccionable<T> {
  /**
   * 
   * @param item  Objeto a añadir
   */
  addArithmeticable(item: T): T[];
  /**
   * 
   * @param indice Indice del item
   */
  getArithmeticable(indice: number): T | undefined;
  /**
   * 
   * @param indice Indice del objeto
   */
  removeArithmeticable(indice: number): T[];
  /**
   * Retorna el tamaño de la colección
   */
  getNumberArithmeticable(): number;
}

/**
 * Clase ArithmeticableCollection, implementa los métodos para manejar una coleccion de elementos aritméticos
 */
export  class ArithmeticableCollection< T extends Arithmeticable<T>>  implements Coleccionable<T>{
    constructor(private _items: T[]) {
    }
    /**
     * 
     * @param item El nuevo item a ñadir
     * @returns El array
     */
    addArithmeticable(item: T): T[] {
        this._items.push(item)
        return this._items
    }
    /**
     * 
     * @param indice El indice del objeto buscado
     * @returns El objeto en dicho indice
     */
    getArithmeticable(indice: number): T | undefined {
        return this._items[indice]
        
    }
    /**
     * 
     * @param indice Quita el elemento en dicho indice
     * @returns El elemento
     */
    removeArithmeticable(indice: number): T[] {
        return this._items.splice(indice, 1);
    }

    /**
     * 
     * @returns El numero de objetos en la coleccion
     */
    getNumberArithmeticable(): number {
        return this._items.length
    }

}

/**
 * Clase complejo que implementa lso métodos de los numeros complejos
 */
export class Complex implements Arithmeticable<Complex> {
  /**
   * Constructor clase Complex
   * @param real Parte real del número complejo.
   * @param imaginary Parte imaginaria del número complejo.
   */
  constructor(public real: number, public imaginary: number,) {}

  /**
   * 
   * @returns El valor de la parte real
   */
  getReal() {
    return this.real
  }
  /**
   * 
   * @returns El valor de imaginary
   */
  getImaginary() {
    return this.imaginary
  }
  /**
   * 
   * @param nuevo El nuevo valor de real
   */
  setReal(nuevo : number) {
    this.real = nuevo
  }
  /**
   * 
   * @param nuevo El nuevo valor de imaginary
   */
  setImaginary(nuevo : number) {
    this.imaginary = nuevo
  }
  /**
   * 
   * @param other Otro complejo
   * @returns Un complejoresultante de la suma
   */
  add(otro: Complex): Complex {
    return new Complex(
      this.real + otro.real,
      this.imaginary + otro.imaginary,
    )
  }
  /**
   * 
   * @param other Otro complejo
   * @returns Un complejo resultante de la resta
   */
  subtract(otro: Complex): Complex {
    return new Complex(
      this.real - otro.real,
      this.imaginary - otro.imaginary,
    )
  }
  /**
   * 
   * @param other Otro complejo
   * @returns Un complejo resultante de la multiplicacion
   */
  multiply(otro: Complex): Complex {
    return new Complex(
      this.real * otro.real - this.imaginary * otro.imaginary,
      this.real * otro.imaginary + this.imaginary * otro.real,
    )
  }
  /**
   * 
   * @param otro Otro complejo
   * @returns Un complejo resultante de la división
   */

  divide(otro: Complex): Complex {
    //  Función rara: (a+bi)/(c+di) = [(ac+bd)/(c^2+d^2)] + [(bc-ad)/(c^2+d^2)]i
    const denominator = otro.real ** 2 + otro.imaginary ** 2;
    return new Complex(
      (this.real * otro.real + this.imaginary * otro.imaginary) / denominator,
      (this.imaginary * otro.real - this.real * otro.imaginary) / denominator,
    )
  }




}
