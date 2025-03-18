import { describe, test, expect, beforeEach } from "vitest";
import {  
    ArithmeticableCollection,
    Complex,
   
} from "../src/aritmetica";
import { MoviesCollection } from "../src/dsiflix";

describe("Pruebas numero complejo", () => {
    let complejo1 : Complex;
    let Complejo2 : Complex
    let complejo3 : Complex

  beforeEach(() => {
    complejo1 = new Complex(1,1)
    Complejo2 = new Complex(1,1)
    complejo3 = new Complex(2,2)
  });

  test("debe poder acceder a los atributos de la parte real", () => {
    expect(complejo1.getReal()).toBe(1)

    expect(Complejo2.getReal()).toBe(1)

    expect(complejo3.getImaginary()).toBe(2)
  });
  
  test("debe poder acceder a los atributos de la parte imaginaria", () => {
    expect(complejo1.getImaginary()).toBe(1)

    expect(Complejo2.getImaginary()).toBe(1)
  });

  test("se deben sumar adecuadamente", () => {
    expect(complejo1.add(Complejo2).getReal()).toBe(2)

    expect(complejo1.add(Complejo2).getImaginary()).toBe(2)

    expect(complejo1.add(complejo3).getImaginary()).toBe(3)

  });

  test("se deben restar adecuadamente", () => {
    expect(complejo1.subtract(Complejo2).getReal()).toBe(0)

    expect(complejo1.subtract(Complejo2).getImaginary()).toBe(0)

    expect(complejo1.subtract(complejo3).getImaginary()).toBe(-1)
    
  });

  test("se deben multiplicar adecuadamente", () => {
    expect(complejo1.multiply(Complejo2).getReal()).toBe(0)

    expect(complejo1.multiply(Complejo2).getImaginary()).toBe(2)

    expect(complejo1.multiply(complejo3).getImaginary()).toBe(4)
    
  });

  test("se deben dividir adecuadamente", () => {
    expect(complejo1.divide(Complejo2).getReal()).toBe(1)

    expect(complejo1.divide(Complejo2).getImaginary()).toBe(0)

    expect(complejo1.divide(complejo3).getImaginary()).toBe(0)
    
  });

  test("se deben poder cambiar los atributos", () => {
    complejo1.setReal(2)
    Complejo2.setImaginary(4)
    complejo3.setImaginary(4)

    expect(complejo1.getReal()).toBe(2)

    expect(Complejo2.getImaginary()).toBe(4)

    expect(complejo3.getImaginary()).toBe(4)
    
  });


});







describe("Pruebas colleción de elementos (Numeros complejos)", () => {
  let coleccion : ArithmeticableCollection<Complex>;
  let complejo1 : Complex
  let complejo2 : Complex


  beforeEach(() => {
    complejo1 = new Complex(1,1)
    complejo2 = new Complex(1,1)
    coleccion = new ArithmeticableCollection([complejo1])
  });

  test("Debe identificar adecuadamente el numero de elementos", () => {

    expect(coleccion.getNumberArithmeticable()).toBe(1)

  });

  test("Debe añadir correctamente un elemento", () => {

    coleccion.addArithmeticable(complejo2)

    expect(coleccion.getNumberArithmeticable()).toBe(2)

  });

    test("Debe añadir correctamente dos elemento", () => {

    coleccion.addArithmeticable(complejo2)
    let complejo3 = new Complex(2,2)
    coleccion.addArithmeticable(complejo3)
    
    expect(coleccion.getNumberArithmeticable()).toBe(3)

  });

  test("Debe devolver el complejo adecuado", () => {

    expect(coleccion.getArithmeticable(0)).toStrictEqual(complejo1)

    coleccion.addArithmeticable(complejo2)

    expect(coleccion.getArithmeticable(1)).toStrictEqual(complejo2)


  });

  test("Debe identificar adecuadamente el numero de elementos", () => {

    expect(coleccion.getNumberArithmeticable()).toBe(1)

    coleccion.addArithmeticable(complejo2)

    expect(coleccion.getNumberArithmeticable()).toBe(2)

  });
  test("Debe devolver el complejo adecuado", () => {

    coleccion.addArithmeticable(complejo2)

    coleccion.removeArithmeticable(1)

    expect(coleccion.getNumberArithmeticable()).toBe(1)

  });




});
