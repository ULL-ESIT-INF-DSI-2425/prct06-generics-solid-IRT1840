import { Arithmeticable } from './arithmeticablecollection.js'

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
