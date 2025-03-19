
import { Arithmeticable } from "./arithmeticablecollection.js";


/**
 * Clase racional que implementa métodos para operar con racionales
 */

export class Rational implements Arithmeticable<Rational> {

  /**
   * 
   * @param numerator el numerador
   * @param denominator El denominador
   */
  constructor(private numerator: number, private denominator: number) {
    if (denominator === 0) {
      throw new Error("Denominador no puede ser 0");
    }
  }
  /**
   * 
   * @returns Retorna el numerador
   */
  getNumerator() {
    return this.numerator;
  }
  /**
   * 
   * @returns El denominador
   */
  getDenominator() {
    return this.denominator;
  }

  /**
   * 
   * @param n El nuevo numerador
   */
  setNumerator(n: number) {
    this.numerator = n;
  }

  /**
   * 
   * @param d El nuevo denominador
   */
  setDenominator(d: number) {
    if (d === 0) {
      throw new Error("El denominador no puede ser 0");
    }
    this.denominator = d;
  }

  /**
   * 
   * @param other Otro numero racional
   * @returns EL racional resultado de la suma
   */
  add(other: Rational): Rational {
    return new Rational(
      this.numerator * other.denominator + other.numerator * this.denominator,
      this.denominator * other.denominator)
  }

  /**
   * 
   * @param other otro numero racional
   * @returns El racional resultado de la resta
   */
  subtract(other: Rational): Rational {
    return new Rational(
      this.numerator * other.denominator - other.numerator * this.denominator,
      this.denominator * other.denominator)
  }

  /**
   * 
   * @param other Otro numero racional
   * @returns El resultado de la multiplicación
   */
  multiply(other: Rational): Rational {
    return new Rational(
      this.numerator * other.numerator,
      this.denominator * other.denominator
    );
  }

  /**
   * 
   * @param other Otro racional
   * @returns Un racional resultado de la división
   */
  divide(other: Rational): Rational {
    return new Rational(
      this.numerator * other.denominator,
      this.denominator * other.numerator
    );
  }
}