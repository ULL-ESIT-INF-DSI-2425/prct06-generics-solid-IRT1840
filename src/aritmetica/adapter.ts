import { Complex } from './complex.js';
import { Rational } from './rational.js';

/**
 * Clase adaptador que permite la interacción entre la clase complex y Rational
 */
export class Adapter extends Complex {
    /**
     * 
     * @param rational Un racional
     */
  constructor(private rational: Rational) {
    super(rational.getNumerator() / rational.getDenominator(), 0);
  }
}