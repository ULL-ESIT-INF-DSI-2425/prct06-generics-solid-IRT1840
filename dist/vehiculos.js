export class Vehiculo {
    matricula;
    marca;
    altura;
    cilindrada;
    /**
     *
     * @param matricula La matricula del vehiculo
     * @param marca La marca del vehiculo
     * @param altura LA altura del vehiculo
     * @param cilindrada La cilindrada del vehiculo
     */
    constructor(matricula, marca, altura, cilindrada) {
        this.matricula = matricula;
        this.marca = marca;
        this.altura = altura;
        this.cilindrada = cilindrada;
    }
    /**
     *
     * @returns la matricula del vehiculo
     */
    getMatricula() {
        return this.matricula;
    }
    /**
     *
     * @returns La marca del vehiculo en una string
     */
    getMarca() {
        return this.marca;
    }
    /**
     *
     * @returns La altura del vehiculo en un Number
     */
    getAltura() {
        return this.altura;
    }
    /**
     *
     * @returns La cilindrada del vehiculo en un Number
     */
    getcilindrada() {
        return this.cilindrada;
    }
    setMatricula(nueva) {
        this.matricula = nueva;
    }
    setMarca(nueva) {
        this.marca = nueva;
    }
    setAltura(nueva) {
        this.altura = nueva;
    }
}
export class Coche extends Vehiculo {
    n_puertas;
    espacioMaletero;
    /**
     * Constructor de la clase coche
     * @param matricula Matricula del vehiculo
     * @param marca Marca del coche
     * @param altura Altura del coche
     * @param cilindrada Cilindrada del coche
     * @param n_puertas Numero de puertas que tiene
     * @param espacioMaletero litros de espacio de maletero
     */
    constructor(matricula, marca, altura, cilindrada, n_puertas, espacioMaletero) {
        super(matricula, marca, altura, cilindrada);
        this.n_puertas = n_puertas;
        this.espacioMaletero = espacioMaletero;
    }
    /**
     *
     * @returns el numero de puertas que tiene el coche
     */
    getNPuertas() {
        return this.n_puertas;
    }
    /**
     *
     * @returns El numero de litros de espacio de maletero
     */
    getEspacioMaletero() {
        return this.espacioMaletero;
    }
    setNPuertas(nueva) {
        this.n_puertas = nueva;
    }
    setEspacioMaletero(nueva) {
        this.espacioMaletero = nueva;
    }
    /**
     *
     * @returns retorna un string con todos los datos del vehiculo
     */
    datos() {
        return "El coche con matricula " + this.getMatricula() + " de la marca " + this.getMarca() + " tiene una altura de " + this.getAltura() + " una cilindrada de " + this.getcilindrada() + " tiene " + this.n_puertas + " puertas y un maletero de " + this.espacioMaletero + " litros";
    }
}
export class Moto extends Vehiculo {
    pataCabra;
    colorChaqueta;
    /**
     * Constructor de la clase moto
     * @param matricula matricula del vehiculo
     * @param marca Marca de la moto
     * @param altura altura de la moto
     * @param cilindrada Cilindrada de la moto
     * @param pataCabra Si tiene o no pata de cabra
     * @param colorChaqueta Si viene o no con  chaqueta de cuero
     */
    constructor(matricula, marca, altura, cilindrada, pataCabra, colorChaqueta) {
        super(matricula, marca, altura, cilindrada);
        this.pataCabra = pataCabra;
        this.colorChaqueta = colorChaqueta;
    }
    /**
     *
     * @returns retorna true o false dependiendo si tiene pata de cabra
     */
    getPata() {
        return this.pataCabra;
    }
    /**
     *
     * @returns retorna del color de la chaqueta de cuero
     */
    getChaqueta() {
        return this.colorChaqueta;
    }
    setPata(nueva) {
        this.pataCabra = nueva;
    }
    setChaqueta(nueva) {
        this.colorChaqueta = nueva;
    }
    /**
     *
     * @returns Retorna un string con un resumen de los datos de la moto
     */
    datos() {
        return "La moto con matricula " + this.getMatricula() + " de la marca " + this.getMarca() + " tiene una altura de " + this.getAltura() + " una cilindrada de " + this.getcilindrada() + " y una chaqueta de cuero de color " + this.colorChaqueta;
    }
}
export class Parking {
    _espaciosCoches;
    _espaciosMotos;
    _cochesEstacionados = [];
    _motosEstacionadas = [];
    /**
     *
     * @param espaciosCoches
     * @param espaciosMotos
     */
    constructor(espaciosCoches, espaciosMotos) {
        this._espaciosCoches = espaciosCoches;
        this._espaciosMotos = espaciosMotos;
    }
    /**
     *
     * @returns
     */
    getEspaciosCoches() {
        return this._espaciosCoches;
    }
    /**
     *
     * @returns
     */
    getEspaciosMotos() {
        return this._espaciosCoches;
    }
    /**
     *
     * @param nuevo
     */
    setEspaciosCoches(nuevo) {
        this._espaciosCoches = nuevo;
    }
    /**
     *
     * @param nuevo
     */
    setEspaciosMotos(nuevo) {
        this._espaciosMotos = nuevo;
    }
    añadirCoche(nuevo, fecha) {
        this._cochesEstacionados.push(nuevo);
    }
    añadirMoto(nuevo) {
        this._motosEstacionadas.push(nuevo);
    }
    /**
     * Retorn
     */
    cochesDisponibles() {
        console.log("Los coches disponibles son: ");
        this._cochesEstacionados.forEach(coche => {
            console.log(coche.getMatricula());
        });
    }
}
//if (pepe instanceof Profesor)
// this.vehiculos.splice(this.vehiculos.findIndex((vehiculo) => {
// vehiculo.getMatricula() === matricula
// }), 1)
