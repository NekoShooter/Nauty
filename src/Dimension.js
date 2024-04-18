import Base from "./BASE_NAUTY.js";

export default class Dimension extends Base{
    tipo = 'Dimension'
    /**
     * @constructor *`Opcional`*
     * Creara el objeto `Dimension` a partir de la ancho **w** y la altura **h** **Dimension( w , h )** asignadas ó a partir de la dimensión de un objeto `HTML` **Dimension( document.querySelector( 'body' ) )**
     * @param {[number|HTMLElement number|boolean|undefined]} args
     * ##### Por coordenadas:
     * + **args_0 `(w : Number)`** = Ancho\
     * **args_1 `(h : Number | undefined)`** = Altura, _si la altura no es definida se tomara el valor de el ancho_
     * ##### Por elemento html:
     * + **`args_0 : HTMLElement`** = Del elemento HTML tomara la dimensión respectivamente
     */
    constructor(...args){
        const [w,h] = args.length ? args:[0,0];
        super(w,h);
        if(!super.esValido) {
            this.nuevo(w);}}
     /**
     * Inicia el objeto `Dimension` a partir de la ancho **w** y la altura **h** **Dimension( w , h )** asignadas ó a partir de la dimensión de un objeto `HTML` **Dimension( document.querySelector( 'body' ) )**
     * @param {[number|HTMLElement number|boolean|undefined]} args
     * ##### Por coordenadas:
     * + **args_0 `(w : Number)`** = Ancho\
     * **args_1 `(h : Number | undefined)`** = Altura, _si la altura no es definida se tomara el valor de el ancho_
     * ##### Por elemento html:
     * + **`args_0 : HTMLElement`** = Del elemento HTML tomara la dimensión respectivamente
     * @returns {this}
     */
    nuevo(...args){
        const [arg_1,arg_2] = args;
        if(globalThis.HTMLElement && arg_1 instanceof HTMLElement){
            this.bNuevo(arg_1.offsetWidth,arg_1.offsetHeight);}
        else {
            super.nuevo(arg_1,arg_2);
            if(super.esValido) 
                this.rectificar();}        
        return this;}
    /**
     * Si el `ancho` es negativo sera sustituido a **0**
     * @returns {Dimension}
     */
    rectificaW(){if(this.z0 <= 0) this.z0 = 0; return this;}
    /**
     * Si la `altura` es negativo sera sustituida a **0**
     * @returns {Dimension}
     */
    rectificaH(){if(this.z1 <= 0) this.z1 = 0; return this;}
    /**
     * Remplaza los **`parametros`** internos por la ***SUMA*** de estos **`parametros`** con la **`Dimension`** asignada
     * @param {Dimension} obj_dimension Objeto de tipo dimencion
     * @returns {Dimension}
     */
    suma(obj_dimension){
        if(obj_dimension instanceof Dimension){
            super.bSuma(obj_dimension); 
            return this.rectificar();}
        return this;}
    /**
     * Remplaza los **`parametros`** internos por la ***RESTA*** de estos **`parametros`** con la **`Dimension`** asignada
     * @param {Dimension} obj_dimension Objeto de tipo dimencion
     * @returns {Dimension}
     */
    resta(obj_dimencion){
        if(obj_dimencion instanceof Dimension){
            super.bResta(obj_dimencion); 
            return this.rectificar();}
        return this;}
    /**
     * Remplaza los **`parametros`** internos por la ***DIVICIÓN*** de estos **`parametros`** con el **`VALOR`** asignado
     * @param {number} num Valor por el cual va ha dividirse cada uno de los elementos internos
     * @return {Dimension}
     * */
    divide(num){
        if(typeof num != 'number') return this;
        super.divide(num); 
        return this.rectificar();}
    /**
     * Remplaza los **`parametros`** internos por la ***MULTIPLICACIÓN*** de estos **`parametros`** con el **`VALOR`** asignado
     * @param {number} num Valor por el cual va ha dividirse cada uno de los elementos internos
     * @return {Dimension}
     * */
    multiplica(num){
        if(typeof num != 'number') return this;
        super.multiplica(num); 
        return this.rectificar();}

    /**
     * El valor de una dimencion debe ser positivo **`[+]`** para que sea `true ✔` de lo contrario sera invalido `false ✖`
     * @return {boolean}
     */
    get esValido(){return this.w > 0 && this.h > 0;}
    get w(){return this.z0;}
    get h(){return this.z1;}
    /**
     * @param {number} num Valor positivo y mayor a **0**
     */
    set w(num){this.z0 = num; this.rectificaW();}
    /**
     * @param {number} num Valor positivo y mayor a **0**
     */
    set h(num){this.z1 = num; this.rectificaH();}}