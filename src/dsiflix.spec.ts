import { describe, test, expect, beforeEach } from "vitest";
import {  
  SeriesCollection,  
  MoviesCollection,  
  DocumentariesCollection,  
   
} from "../src/dsiflix";

describe("Streamable Collections con Tuplas", () => {
  let seriesCollection: SeriesCollection;
  let moviesCollection: MoviesCollection;
  let documentariesCollection: DocumentariesCollection;

  beforeEach(() => {
    seriesCollection = new SeriesCollection([
      ["Breaking Bad", 2008],
      ["Stranger Things", 2016],
    ]);

    moviesCollection = new MoviesCollection([
      ["Inception", 2010],
      ["Interstellar", 2014],
    ]);

    documentariesCollection = new DocumentariesCollection([
      ["Planet Earth", 2006],
      ["Cosmos", 2014],
    ]);
  });

  test("debe buscar series por nombre", () => {
    const result = seriesCollection.searchByName("Breaking");
    expect(result).toHaveLength(1);
    expect(result[0][0]).toBe("Breaking Bad");
  });

  test("debe buscar series por año", () => {
    const result = seriesCollection.searchByYear(2016);
    expect(result).toHaveLength(1);
    expect(result[0][0]).toBe("Stranger Things");
  });

  test("debe buscar películas por nombre", () => {
    const result = moviesCollection.searchByName("Inception");
    expect(result).toHaveLength(1);
    expect(result[0][0]).toBe("Inception");
  });

  test("debe buscar películas por año", () => {
    const result = moviesCollection.searchByYear(2014);
    expect(result).toHaveLength(1);
    expect(result[0][0]).toBe("Interstellar");
  });

  test("debe buscar documentales por nombre", () => {
    const result = documentariesCollection.searchByName("Planet Earth");
    expect(result).toHaveLength(1);
    expect(result[0][0]).toBe("Planet Earth");
  });

  test("debe buscar documentales por año", () => {
    const result = documentariesCollection.searchByYear(2006);
    expect(result).toHaveLength(1);
    expect(result[0][0]).toBe("Planet Earth");
  });

  test("debe agregar un nuevo elemento a la colección de series", () => {
    seriesCollection.addItem(["Game of Thrones", 2011]);
    expect(seriesCollection.getAllItems()).toHaveLength(3);
    expect(seriesCollection.getAllItems()[2][0]).toBe("Game of Thrones");
  });

  test("debe retornar un array vacío si no encuentra coincidencias", () => {
    expect(seriesCollection.searchByName("The Witcher")).toHaveLength(0);
    expect(moviesCollection.searchByYear(1995)).toHaveLength(0);
    expect(documentariesCollection.searchByName("Unknown Doc")).toHaveLength(0);
  });
});
