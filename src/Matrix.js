import Desplazo from "./Desplazo.js";
import Punto from "./Punto.js";
/**
 * @class
 * La clase Matrix representa una matriz 2x2 utilizada para transformaciones geométricas en un plano bidimensional.
 */
export default class Matrix{
    #desplazo = new Desplazo;
    /**
     * Crea una nueva instancia de la matriz con los valores proporcionados. Por defecto, crea una matriz de identidad y sin desplazamiento.
     * @param {number} m11 Valor de la posición (1,1) de la matriz.
     * @param {number} m21 Valor de la posición (2,1) de la matriz.
     * @param {number} m12 Valor de la posición (1,2) de la matriz.
     * @param {number} m22 Valor de la posición (2,2) de la matriz.
     * @param {number} dx Desplazamiento en el eje x.
     * @param {number} dy Desplazamiento en el eje y.
     */
    constructor(m11 = 1,m21 = 0,m12= 0,m22= 1,dx= 0,dy = 0){
        this.nuevo(m11,m21,m12,m22,dx,dy);}
/**
 * Actualiza los valores de la matriz y del desplazamiento.
 * @param {number} m11 Valor de la posición (1,1) de la matriz.
 * @param {number} m21 Valor de la posición (2,1) de la matriz.
 * @param {number} m12 Valor de la posición (1,2) de la matriz.
 * @param {number} m22 Valor de la posición (2,2) de la matriz.
 * @param {number} dx Desplazamiento en el eje x.
 * @param {number} dy Desplazamiento en el eje y.
 * @returns {this}
 */
    nuevo(m11 = 1,m21 = 0,m12= 0,m22= 1,dx= 0,dy = 0){
        this.#desplazo.nuevo(dx,dy);
        return this.#editarM2x2(m11,m12,m21,m22);}

    #editarM2x2(m11,m12,m21,m22){
        this.m11 = m11; this.m21 = m21; this.m12 = m12; this.m22 = m22;}
/**
 * Restablece la matriz a una matriz de identidad y el desplazamiento a cero.
 * @returns {this}
 */
    resetear(){
        this.#editarM2x2(1,0,0,1);
        this.#desplazo.resetear();
        return this;}
/**
 * Combina la matriz actual con otra la matriz proporcionada.
 * @param {Matrix} matrix 
 * @returns {this}
 */
    fusionar(matrix){
        if(matrix instanceof Matrix){
            const m11 = this.m11 * matrix.m11 + this.m12 * matrix.m21;
            const m12 = this.m21 * matrix.m11 + this.m22 * matrix.m21;
            const m21 = this.m11 * matrix.m12 + this.m12 * matrix.m22;
            const m22 = this.m21 * matrix.m12 + this.m22 * matrix.m22;
            this.#editarM2x2(m11,m12,m21,m22);
            this.#desplazo.suma(matrix.desplazo);}
        return this;}
/**
 * Verifica si esta matriz es igual a la matriz proporcionada, se ser asi retornara `true`.
 * @param {Matrix} matrix 
 * @returns {boolean}
 */
    esIgual(matrix){
        if(!(matrix instanceof Matrix)) return false;
        return this.m11 == matrix.m11 && this.m12 == matrix.m12 && this.m21 == matrix.m21 && this.m22 == matrix.m22 && this.#desplazo.dx == matrix.dx && this.#desplazo.dx == matrix.dy;}
/**
 * Copia los valores de la matriz proporcionada en esta matriz.
 * @param {Matrix} matrix 
 * @returns {this}
 */
    copiar(matrix){
        if(matrix instanceof Matrix) this.nuevo(...matrix.data);
        return this;}
/**
 * Desplaza la matriz en los ejes **X** e **Y** a partir del desplazamiento **`(dx,dy)`** o por medio de un objeto **`Desplazo`**.
 * @param  {[number|Desplazo number]} args 
 * ##### Por desplazamiento:
 * + **args_0 `(dx : Number)`** = Desplazamiento en X\
 * **args_1 `(dy : Number)`** = Desplazamiento en Y.
 * ##### Por objeto Desplazo:
 * + **`args_0 : Desplazo`** = Objeto de desplazamiento
 * @returns {this}
 */
    desplazar(...args){
        const [dx,dy] = args;
        if(typeof dx == 'Number' && typeof dy == 'Number'){
            this.#desplazo.dx += dx; this.#desplazo.dy += dy;}
        else this.#desplazo.suma(dx);
        return this;}
/**
 * Aplica la transformación de la matriz a un punto en el plano.
 * @param {Punto} punto 
 * @returns {Punto}
 */
    mapea(punto){
        if(!punto) return punto;
        const px = (this.m11 * punto.x) + (this.m21 * punto.y) + this.#desplazo.dx;
        const py = (this.m12 * punto.x) + (this.m22 * punto.y) + this.#desplazo.dy;
        return new Punto(px,py);}
/**
 * Deshace la transformación de la matriz en un punto.
 * @param {Punto} punto 
 * @returns {Punto}
 */
    desMapea(punto){
        if(!punto || !this.m11 || !this.m22 || (this.m11 == this.m21 && this.m22 == this.m12)) return punto;
        const Rx = punto.x - this.#desplazo.dx;
        const Ry = punto.y - this.#desplazo.dy;

        const divisor = (this.m11 * this.m22) - (this.m21* this.m12);

        const x = divisor ? ((Rx * this.m22) - (this.m21 * Ry)) / divisor : 0;
        const y = (Ry - (this.m12 * x)) / this.m22;

        return new Punto(x,y);}
/**
 * Calcula la matriz inversa de esta matriz.
 * @returns {Matrix}
 */
    inverso(){return new Matrix(this.m22,-this.m12,-this.m21,this.m11,-this.#desplazo.dx,-this.#desplazo.dy);}
/**
 * Devuelve una copia de esta matriz.
 */
    get copia(){ return new Matrix(this.m11,this.m21,this.m12,this.m22,this.#desplazo.dx,this.#desplazo.dy);}
/**
 * Devuelve los valores de la matriz y el desplazamiento como un `Array`.
 * @returns {[m11:number m21:number m12:number m22:number dx:number dy:number]}
 */
    get data(){return [this.m11,this.m21,this.m12,this.m22,this.#desplazo.dx,this.#desplazo.dy];}
/**
 * Devuelve el objeto `Desplazo` asociado a esta matriz.
 * @returns {Desplazo}
 */
    get desplazo(){return this.#desplazo;}
    get dx(){return this.#desplazo.dx;}
    get dy(){return this.#desplazo.dy;}
    set dx(desplazarEnX) {this.#desplazo.dx = desplazarEnX;}
    set dy(desplazarEnY) {this.#desplazo.dy = desplazarEnY;}
/**
 * Devuelve una cadena de texto de la matriz: ***`matrix ( m11 , m21 , m12 , m22 , dx , dy )`***.
 * @returns {string}
 */
    get str(){return `matrix(${this.m11},${this.m21},${this.m12},${this.m22},${this.#desplazo.dx},${this.#desplazo.dy})`;}}