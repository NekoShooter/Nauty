import Base from "./BASE_NAUTY.js";

export default class Dimension extends Base{
    tipo = 'Dimension'
    /**
     * Si el segundo paramero no esta definido se tomara el valor del primer parametro para los dos
     * @param {number} w - Ancho
     * @param {number|undefined} h - Altura, si no esta definida tomara el valor del Ancho
     */
    constructor(...args){
        const [w,h] = args.length ? args:[0,0];
        super(w,h);
        if(!super.esValido) {
            this.nuevo(w);}}
    /**
    * @param {number} w - Ancho
    * @param {number|undefined} h - Altura
    * @returns {Dimension}
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
        if(typeof num != 'Number') return this;
        super.divide(num); 
        return this.rectificar();}
    /**
     * Remplaza los **`parametros`** internos por la ***MULTIPLICACIÓN*** de estos **`parametros`** con el **`VALOR`** asignado
     * @param {number} num Valor por el cual va ha dividirse cada uno de los elementos internos
     * @return {Dimension}
     * */
    multiplica(num){
        if(typeof num != 'Number') return this;
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