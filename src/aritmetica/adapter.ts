import { Complex } from './complex.js';
import { Rational } from './rational.js';

export class Adapter extends Complex {
  constructor(private rational: Rational) {
    super(rational.getNumerator() / rational.getDenominator(), 0);
  }
}