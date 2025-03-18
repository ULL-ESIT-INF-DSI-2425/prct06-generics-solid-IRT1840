export declare abstract class Vehiculo {
    private matricula;
    private marca;
    private altura;
    private cilindrada;
    /**
     *
     * @param matricula La matricula del vehiculo
     * @param marca La marca del vehiculo
     * @param altura LA altura del vehiculo
     * @param cilindrada La cilindrada del vehiculo
     */
    constructor(matricula: string, marca: string, altura: number, cilindrada: number);
    /**
     *
     * @returns la matricula del vehiculo
     */
    getMatricula(): string;
    /**
     *
     * @returns La marca del vehiculo en una string
     */
    getMarca(): string;
    /**
     *
     * @returns La altura del vehiculo en un Number
     */
    getAltura(): number;
    /**
     *
     * @returns La cilindrada del vehiculo en un Number
     */
    getcilindrada(): number;
    setMatricula(nueva: string): void;
    setMarca(nueva: string): void;
    setAltura(nueva: number): void;
    /**
     * Función abstracta a implementar en clases hijas
     * @return Muestra toda la información del vehiculo.
     */
    abstract datos(): string;
}
export declare class Coche extends Vehiculo {
    private n_puertas;
    private espacioMaletero;
    /**
     * Constructor de la clase coche
     * @param matricula Matricula del vehiculo
     * @param marca Marca del coche
     * @param altura Altura del coche
     * @param cilindrada Cilindrada del coche
     * @param n_puertas Numero de puertas que tiene
     * @param espacioMaletero litros de espacio de maletero
     */
    constructor(matricula: string, marca: string, altura: number, cilindrada: number, n_puertas: number, espacioMaletero: number);
    /**
     *
     * @returns el numero de puertas que tiene el coche
     */
    getNPuertas(): number;
    /**
     *
     * @returns El numero de litros de espacio de maletero
     */
    getEspacioMaletero(): number;
    setNPuertas(nueva: number): void;
    setEspacioMaletero(nueva: number): void;
    /**
     *
     * @returns retorna un string con todos los datos del vehiculo
     */
    datos(): string;
}
export declare class Moto extends Vehiculo {
    private pataCabra;
    private colorChaqueta;
    /**
     * Constructor de la clase moto
     * @param matricula matricula del vehiculo
     * @param marca Marca de la moto
     * @param altura altura de la moto
     * @param cilindrada Cilindrada de la moto
     * @param pataCabra Si tiene o no pata de cabra
     * @param colorChaqueta Si viene o no con  chaqueta de cuero
     */
    constructor(matricula: string, marca: string, altura: number, cilindrada: number, pataCabra: boolean, colorChaqueta: string);
    /**
     *
     * @returns retorna true o false dependiendo si tiene pata de cabra
     */
    getPata(): boolean;
    /**
     *
     * @returns retorna del color de la chaqueta de cuero
     */
    getChaqueta(): string;
    setPata(nueva: boolean): void;
    setChaqueta(nueva: string): void;
    /**
     *
     * @returns Retorna un string con un resumen de los datos de la moto
     */
    datos(): string;
}
export declare class Parking {
    private _espaciosCoches;
    private _espaciosMotos;
    private _cochesEstacionados;
    private _motosEstacionadas;
    /**
     *
     * @param espaciosCoches
     * @param espaciosMotos
     */
    constructor(espaciosCoches: number, espaciosMotos: number);
    /**
     *
     * @returns
     */
    getEspaciosCoches(): number;
    /**
     *
     * @returns
     */
    getEspaciosMotos(): number;
    /**
     *
     * @param nuevo
     */
    setEspaciosCoches(nuevo: number): void;
    /**
     *
     * @param nuevo
     */
    setEspaciosMotos(nuevo: number): void;
    añadirCoche(nuevo: Coche, fecha: string): void;
    añadirMoto(nuevo: Moto): void;
    /**
     * Retorn
     */
    cochesDisponibles(): void;
}
