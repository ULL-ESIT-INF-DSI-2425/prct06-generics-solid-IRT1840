import { describe, expect, test } from "vitest"
import {Vehiculo, Coche, Moto, Parking} from "../src/vehiculos.ts"

describe('Coche', () => {
    test('Debe crear una persona con los atributos correctos', () => {
        const coche1 = new Coche("FNF", "Volkswagen", 25,200, 4, 3);

        expect(coche1.getMatricula()).toBe('FNF');
        expect(coche1.getMarca()).toBe('Volkswagen');
        expect(coche1.getAltura()).toBe(25);
        expect(coche1.getcilindrada()).toBe(200);
        expect(coche1.getNPuertas()).toBe(4);
        expect(coche1.getEspacioMaletero()).toBe(3);
        coche1.setAltura(3)
        expect(coche1.getAltura()).toBe(3)

        

    });
    
    test('Debe mostrar adecuadamente su resumen', () => {
        const coche1 = new Coche("FNF", "Volkswagen", 25,200, 4, 3);
        expect(coche1.datos()).toBe("El coche con matricula FNF de la marca Volkswagen tiene una altura de 25 una cilindrada de 200 tiene 4 puertas y un maletero de 3 litros");
    });
});

describe('Moto', () => {
    test('Debe crear una persona con los atributos correctos', () => {
        const moto1 = new Moto("FNF", "Volkswagen", 25,200, true, "Marron");

        expect(moto1.getMatricula()).toBe('FNF');
        expect(moto1.getMarca()).toBe('Volkswagen');
        expect(moto1.getAltura()).toBe(25);
        expect(moto1.getcilindrada()).toBe(200);
        expect(moto1.getPata()).toBe(true);
        expect(moto1.getChaqueta()).toBe("Marron");

        moto1.setChaqueta("Negra")
        expect(moto1.getChaqueta()).toBe("Negra")

    });
    
    test('Debe mostrar adecuadamente su resumen', () => {
        const moto1 = new Moto("FNF", "Volkswagen", 25,200, true, "Marron");
        expect(moto1.datos()).toBe("La moto con matricula FNF de la marca Volkswagen tiene una altura de 25 una cilindrada de 200 y una chaqueta de cuero de color Marron");
    });

});


describe('Parking', () => {
    test('Debe crear un Parking con los valores adecuados', () => {
        const parking1 = new Parking(10, 10);
        expect(parking1.getEspaciosCoches()).toBe(10);
        expect(parking1.getEspaciosMotos()).toBe(10);
        parking1.setEspaciosCoches(5)
        expect(parking1.getEspaciosCoches()).toBe(5)



    });

        

});
/**
 * 
 * 
 
describe('Asignatura', () => {
    it('Debe crear una asignatura con los atributos correctos', () => {
        const pepe = new Profesor("Pepe", "García", 25, "2", 2);
        const carlitos = new Estudiante("Carlitos", "García", 25, "2", "MP");
        const mates = new Asignatura("Matemáticas", [pepe], [carlitos])
        expect(mates.getnombre()).toBe('Matemáticas');
        expect(mates.getprofesorado()).toStrictEqual([pepe]);
        expect(mates.getestudiantado()).toStrictEqual([carlitos]);

    });
    
    it('Debe mostrar adecuadamente su resumen', () => {
        const pepe = new Profesor("Pepe", "García", 25, "2", 2);

        const consoleSpy = vi.spyOn(console, 'log');
        pepe.recitarDatos();
        expect(consoleSpy).toHaveBeenCalledWith("Mi nombre es Pepe y soy profesor, mis tutorías son a las 2 y mi correo es 2");
    });
});
*/