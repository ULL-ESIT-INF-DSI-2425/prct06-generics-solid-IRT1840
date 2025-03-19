import { describe, it, expect } from "vitest";
import { Complex } from "../src/aritmetica/complex.js";
import { Rational } from "../src/aritmetica/rational.js";
import { Adapter } from "../src/aritmetica/adapter.js";
import { ArithmeticableCollection } from "../src/aritmetica/arithmeticablecollection.js";

// Tests para la clase Complex
describe("Complex", () => {
  it("Debería sumar dos números complejos correctamente", () => {
    const c1 = new Complex(3, 2);
    const c2 = new Complex(1, 7);
    const result = c1.add(c2);
    expect(result.getReal()).toBe(4);
    expect(result.getImaginary()).toBe(9);
  });

  it("Debería restar dos números complejos correctamente", () => {
    const c1 = new Complex(5, 3);
    const c2 = new Complex(2, 1);
    const result = c1.subtract(c2);
    expect(result.getReal()).toBe(3);
    expect(result.getImaginary()).toBe(2);
  });

  it("Debería multiplicar dos números complejos correctamente", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(3, 4);
    const result = c1.multiply(c2);
    expect(result.getReal()).toBe(-5);
    expect(result.getImaginary()).toBe(10);
  });

  it("Debería dividir dos números complejos correctamente", () => {
    const c1 = new Complex(3, 2);
    const c2 = new Complex(1, -1);
    const result = c1.divide(c2);
    expect(result.getReal()).toBeCloseTo(0.5);
    expect(result.getImaginary()).toBeCloseTo(2.5);
  });
});

// Tests para la clase Rational
describe("Rational", () => {
  it("Debería sumar dos números racionales correctamente", () => {
    const r1 = new Rational(1, 2);
    const r2 = new Rational(1, 3);
    const result = r1.add(r2);
    expect(result.getNumerator()).toBe(5);
    expect(result.getDenominator()).toBe(6);
  });

  it("Debería restar dos números racionales correctamente", () => {
    const r1 = new Rational(3, 4);
    const r2 = new Rational(1, 2);
    const result = r1.subtract(r2);
    expect(result.getNumerator()).toBe(2);
    expect(result.getDenominator()).toBe(8);
  });

  it("Debería multiplicar dos números racionales correctamente", () => {
    const r1 = new Rational(2, 3);
    const r2 = new Rational(3, 4);
    const result = r1.multiply(r2);
    expect(result.getNumerator()).toBe(6);
    expect(result.getDenominator()).toBe(12);
  });

  it("Debería dividir dos números racionales correctamente", () => {
    const r1 = new Rational(3, 5);
    const r2 = new Rational(2, 7);
    const result = r1.divide(r2);
    expect(result.getNumerator()).toBe(21);
    expect(result.getDenominator()).toBe(10);
  });
});

// Tests para la clase Adapter
describe("Adapter", () => {
  it("Debería convertir un número racional a un número complejo", () => {
    const r = new Rational(5, 2);
    const adapter = new Adapter(r);
    expect(adapter.getReal()).toBe(2.5);
    expect(adapter.getImaginary()).toBe(0);
  });

  it("Debería sumar un racional convertido con un número complejo", () => {
    const r = new Rational(3, 2);
    const adapter = new Adapter(r);
    const complex = new Complex(1, 2);
    const result = adapter.add(complex);
    expect(result.getReal()).toBe(2.5);
    expect(result.getImaginary()).toBe(2);
  });
});

// Tests para la clase ArithmeticableCollection
describe("ArithmeticableCollection", () => {
  it("Debería agregar un elemento a la colección", () => {
    const collection = new ArithmeticableCollection<Complex>([]);
    const complex = new Complex(1, 1);
    collection.addArithmeticable(complex);
    expect(collection.getNumberArithmeticable()).toBe(1);
  });

  it("Debería obtener un elemento por su índice", () => {
    const complex = new Complex(2, 3);
    const collection = new ArithmeticableCollection<Complex>([complex]);
    expect(collection.getArithmeticable(0)).toBe(complex);
  });

  it("Debería eliminar un elemento por su índice", () => {
    const complex = new Complex(4, 5);
    const collection = new ArithmeticableCollection<Complex>([complex]);
    collection.removeArithmeticable(0);
    expect(collection.getNumberArithmeticable()).toBe(0);
  });
});

