
import { Arithmeticable } from "./arithmeticablecollection.js";

export class Rational implements Arithmeticable<Rational> {
  constructor(private numerator: number, private denominator: number) {
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero");
    }
  }

  getNumerator() {
    return this.numerator;
  }

  getDenominator() {
    return this.denominator;
  }

  setNumerator(n: number) {
    this.numerator = n;
  }

  setDenominator(d: number) {
    if (d === 0) {
      throw new Error("Denominator cannot be zero");
    }
    this.denominator = d;
  }

  add(other: Rational): Rational {
    return new Rational(
      this.numerator * other.denominator + other.numerator * this.denominator,
      this.denominator * other.denominator
    );
  }

  subtract(other: Rational): Rational {
    return new Rational(
      this.numerator * other.denominator - other.numerator * this.denominator,
      this.denominator * other.denominator
    );
  }

  multiply(other: Rational): Rational {
    return new Rational(
      this.numerator * other.numerator,
      this.denominator * other.denominator
    );
  }

  divide(other: Rational): Rational {
    return new Rational(
      this.numerator * other.denominator,
      this.denominator * other.numerator
    );
  }
}