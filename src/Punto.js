import Base from "./BASE_NAUTY.js";
import Desplazo from "./Desplazo.js";

export default class Punto extends Base {
    tipo = 'Punto'
    /**
     * @constructor *`Opcional`*
     * Inicia el objeto `Punto` a partir de las coordenadas XY **Punto( x , y )** asignadas ó a partir de la posición de un objeto `HTML` **Punto( document.querySelector( 'body' ) )**
     * @param {[number|HTMLElement number|boolean|undefined]} args
     * ##### Por coordenadas:
     * + **args_0 `(X : Number)`** = Posicion en X\
     * **args_1 `(Y : Number | undefined)`** = Posicion en Y, _si Y no es definida Y tomara el valor de X_
     * ##### Por elemento html:
     * + **`args_0 : HTMLElement`** = Del elemento HTML tomara la posicion en **`X`** y **`Y`** respectivamente\
     * **args_1 `(global : boolean | undefined)`** = Si es ***false*** | ***undefined*** solo tomara las coordenadas locales, ***true*** tomara las coordenadas globales
     */
    constructor(...args){
        const [x,y] = args.length ? args:[0,0];
        super(x,y);
        if(!this.esValido) {
            this.nuevo(x,y);}}
    /**
     * Inicia el objeto `Punto` a partir de las coordenadas XY **Punto( x , y )** ó a partir de la posición de un objeto `HTML` **Punto( document.querySelector( 'body' ) )**
     * @param {[number|HTMLElement number|boolean|undefined]} args
     * ##### Por coordenadas:
     * + **args_0 `(X : Number)`** = Posicion en X\
     * **args_1 `(Y : Number | undefined)`** = Posicion en Y, _si Y no es definida, Y tomara el valor de X_
     * ##### Por elemento html:
     * + **`args_0 : HTMLElement`** = Del elemento HTML tomara la posicion en **`X`** y **`Y`** respectivamente\
     * **args_1 `(global : boolean | undefined)`** = Si es ***false*** | ***undefined*** solo tomara las coordenadas locales, ***true*** tomara las coordenadas globales
     * @returns {this}
     */
    nuevo(...args){
        const [arg_1,arg_2] = args;
        if(globalThis.HTMLElement && arg_1 instanceof HTMLElement){
            if(arg_2)this.bNuevo(arg_1.getBoundingClientRect().left,arg_1.getBoundingClientRect().top);
            else this.bNuevo(arg_1.offsetLeft,arg_1.offsetTop);}
        else super.nuevo(arg_1,arg_2);        
        return this;}
    /**
     * Remplaza los **`parametros`** internos por la ***SUMA*** de estos **`parametros`** con el **`objeto`** asignado
     * @param {Punto|Desplazo} obj Puede sumarse objetos hermanos
     * @returns {this}
     */
    suma(obj){
        if(obj instanceof Punto || obj instanceof Desplazo) this.bSuma(obj);
        return this;}
    /**
     * Remplaza los **`parametros`** internos por la ***RESTA*** de estos **`parametros`** con el **`objeto`** asignado
     * @param {Punto|Desplazo} obj Puede restarse objetos hermanos
     * @returns {this}
     */
    resta(obj){
        if(obj instanceof Punto || obj instanceof Desplazo) return this.bResta(obj);
        return this;}
    /**
     * Posicion en X
     * @returns {number}
     */
    get x(){return this.z0;}
    /**
     * Posicion en Y
     * @returns {number}
     */
    get y(){return this.z1;}
    /**
     * @param {number} num Posicion en X
     */
    set x(num){this.z0 = num;}
    /**
     * @param {number} num Posicion en Y
     */
    set y(num){this.z1 = num;}}