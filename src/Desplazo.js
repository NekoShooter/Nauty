import Base from "./BASE_NAUTY.js";

export default class Desplazo extends Base{
   tipo = 'Desplazo'
    /**
     * @constructor `Opcional`
     * Inicia el objeto `Desplazo` a partir de dx dy **Desplazo( dx , dy )** asignadas
     * @param {number} dx Desplazamiento en el eje X
     * @param {number|undefined} dy Desplazamiento en el eje Y, si dy no esta definida tomara el valor de dx
     */
    constructor(dx = 0 ,dy = undefined){super(dx,dy);}
    /**
     * Remplaza los **`parametros`** internos por la ***SUMA*** de estos **`parametros`** con el **`Desplazo`** asignado
     * @param {Desplazo} obj_deplazo Objeto de tipo desplazamiento
     * @returns {this}
     */
    suma(obj_deplazo){
      if(obj_deplazo instanceof Desplazo) this.bSuma(obj_deplazo); return this;}
    /**
     * Remplaza los **`parametros`** internos por la ***RESTA*** de estos **`parametros`** con el **`Desplazo`** asignado
     * @param {Desplazo} obj_deplazo Objeto de tipo desplazamiento
     * @returns {this}
     */
    resta(obj_deplazo){
      if(obj_deplazo instanceof Desplazo) this.bResta(obj_deplazo); return this;}
    /**
     * @returns {number}
     */
    get dx(){return this.z0;}
    /**
     * @returns {number}
     */
    get dy(){return this.z1;}
    /**
     * @param {number} num - Desplazo en dy
     */
    set dx(num){this.z0 = num;}
    /**
     * @param {number} num - Desplazo en dx
     */
    set dy(num){this.z1 = num;}}
