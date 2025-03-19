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