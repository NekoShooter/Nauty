/**
 * @typedef {import("./Punto")} Punto
 * @typedef {import("./Desplazo")} Desplazo
 * @typedef {import("./Dimension")} Dimension
*/

export default class Base{
    constructor(a = 0,b = undefined){
        this.resetear();
        this.nuevo(a,b);}
    /**
     * Si el segundo paramero no esta definido se tomara el valor del primer parametro para los dos
     * @param {number} a - primer parametro
     * @param {number|undefined} b - segundo parametro
     * @returns {this}
     */
    nuevo(a,b){
        if(a != undefined && b == undefined) b = a;
        if(typeof(a) == 'number' && typeof(b) == 'number') 
            this.z0 = a; this.z1 = b;
        return this;}
     /**
     * Modifica los parameros internos 
     * > **`⚠ SIN RESTRICIONES`** : Sin comprobación de ***tipos***, perfecto para ***iteraciones***  
     * > *❌ Si los datos no son correctos pueden provocar fallos*
     * @returns {this}
     */
    bNuevo(a,b){
        this.z0 = a; this.z1 = b;
        return this;}

    /**
     * Remplaza los **`parametros`** internos por la ***MULTIPLICACIÓN*** de estos **`parametros`** con la del **`VALOR`** asignado
     * > **`⚠ SIN RESTRICIONES`** : Sin comprobación de ***tipos***, perfecto para ***iteraciones***
     * @param {number} num
     * + Valor por el cual multiplicarse cada uno de los elementos internos
     * + *❌ Si el Parametro no es `Number` puede provocar fallos*
     * @returns {this}
     */

    multiplica(num){
        this.z0 *= num;
        this.z1 *= num;
        return this;}

    /**
     * Remplaza los **`parametros`** internos por la ***DIVICIÓN*** de estos **`parametros`** con la del **`VALOR`** asignado
     * > **`⚠ SIN RESTRICIONES`** : Sin comprobación de ***tipos***, perfecto para ***iteraciones***
     * @param {number} num
     * + Valor por el cual va ha dividirse cada uno de los elementos internos
     * + *❌ Si el Parametro no es `Number` puede provocar fallos*
     * @returns {this}
     */

    divide(num){
        if(num){
            this.z0 /= num;
            this.z1 /= num;}
        return this;}

    /**
     * Copia cada uno de los elementos internos del objeto resibido
     * @param {this} obj objeto al cual se le copiaran el valor de sus elementos
     * @returns {this}
     */
    copiar(obj){
        if(obj?.constructor === this.constructor){
            this.z0 = obj.z0;
            this.z1 = obj.z1;}
        return this;}
    /**
     * Copia cada uno de los elementos `Punto | Desplazo | Dimension` internos del objeto resibido
     * @param {Punto|Desplazo|Dimension} obj objeto al cual se le copiaran el valor de sus elementos
     * @returns {this}
     */        
    bCopiar(obj){
        if(obj instanceof Base){
            this.z0 = obj.z0;
            this.z1 = obj.z1;}
        return this;}
    /**
    * Devuelve una copia del objeto
    * @returns {this}
    */
    get copia(){ return new this.constructor(this.z0,this.z1);}
    /**
     * resetea el valor de los elementos internos a **0**
     */
    resetear(){
        this.z0 = 0;
        this.z1 = 0;}
    /**
     * Valida que el contenido interno de los objetos sea igual
     * @param {[this|number number]} args - Objeto a comparar
     * @returns {boolean} Si el contenido es igual retorna `true`
     */
    esIgual(...args){
        if(args.length == 2){
            const [a,b] = args;
            return this.z0 == a && this.z1 == b;}
        const [o] = args;
        return o?.constructor === this.constructor && this.z0 == o.z0 && this.z1 == o.z1;}

    /**
     * Valida que almenos un elemento del contenido interno sea igual
     * @param {this} obj - Objeto a comparar
     * @returns {boolean} Si alguno de los elemento es igual retorna `true`
     */

    coincide(obj){
        return obj?.constructor === this.constructor && (this.z0 == obj.z0 || this.z1 == obj.z1);}
    /**
     * Intercambia los valores internos del objeto
     * @returns {this}
     */
    intercambia(){
        const tmp =  this.z0;
        this.z0 = this.z1;
        this.z1 = tmp;
        return this;}

    /**
     * Cualquier valor negativo es sustituida a **0**
     * @returns {this}
     */
    rectificar(){
        if(this.z0 < 0) this.z0 = 0;
        if(this.z1 < 0) this.z1 = 0;
        return this}
    /**
     * Remplaza los **`parametros`** internos por la ***SUMA*** de estos **`parametros`** con la del **`objeto`** asignado
     * > **`⚠ SIN RESTRICIONES`** : Sin comprobación de ***tipos***, perfecto para ***iteraciones***
     * @param {Punto|Desplazo|Dimension} obj 
     * + Puede sumarse objetos hermanos `Punto | Desplazo | Dimension`
     * + *❌ Si el Objeto no es una instancia de `Punto | Desplazo | Dimension` pueden provocar fallos*
     * @returns {this}
     */
    bSuma(obj){
        this.z0 += obj.z0;
        this.z1 += obj.z1;
        return this;}
    /**
     * Remplaza los **`parametros`** internos por la ***RESTA*** de estos **`parametros`** con la del **`objeto`** asignado
     * > **`⚠ SIN RESTRICIONES`** : Sin comprobación de ***tipos***, perfecto para ***iteraciones***
     * @param {Punto|Desplazo|Dimension} obj 
     * + Puede restarse objetos hermanos `Punto | Desplazo | Dimension`
     * + *❌ Si el Objeto no es una instancia de `Punto | Desplazo | Dimension` pueden provocar fallos*
     * @returns {this}
     */
    bResta(obj){
        this.z0 -= obj.z0;
        this.z1 -= obj.z1;
        return this;}
    /**
     * Valida que el contenido interno de los objetos sea igual
     * @param {Punto|Desplazo|Dimension} obj - Objeto a comparar
     * @returns {boolean} Si el contenido es igual retorna `true`
     */
    bEsIgual(...args){
        if(args.length == 2){
            const [a,b] = args;
            return this.z0 == a && this.z1 == b;}
        const [o] = args;
        return o instanceof Base && (this.z0 == o.z0 && this.z1 == o.z1);}
    /**
     * Valida que almenos un elemento del contenido interno sea igual
     * @param {Punto|Desplazo|Dimension} obj - Objeto a comparar
     * @returns {boolean} Si alguno de los elemento es igual retorna `true`
     */
    bCoincide(obj){return obj instanceof Base &&(this.z0 == obj.z0 || this.z1 == obj.z1);}
    /**
     * retorna los valores almacenados en un `Array`
     * @returns {[number number]}
     */
    get data(){return [this.z0,this.z1]}
    /**
     * Si los el valores introducidos son de tipo **Number** `true ✔`  de lo contrario sera `false ✖`
     */
    get esValido(){return typeof this.z0 == 'number' && typeof this.z1 == 'number';}}