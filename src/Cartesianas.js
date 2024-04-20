import Punto from "./Punto.js";

const __centro = 0;
const __c1 = 0x1;
const __c2 = 0x2;
const __c3 = 0x4;
const __c4 = 0x8;

/**
 * Constante que representa los cuadrantes en un plano cartesiano.
 * @type {Object}
 * @property {number} c1 - Cuadrante 1 (superior derecho).
 * @property {number} c2 - Cuadrante 2 (superior izquierdo).
 * @property {number} c3 - Cuadrante 3 (inferior izquierdo).
 * @property {number} c4 - Cuadrante 4 (inferior derecho).
 * @property {number} o - Cuadrante central (centro del plano).
 */
export const __cuadrante = Object.freeze({c1:__c1,c2:__c2,c3:__c3,c4:__c4,o:__centro});

/**
 * Encuentra el cuadrante cartografico de un punto con respecto a un punto de referencia
 * @param {Punto} origen - Punto de origen que actuara como ***`centro del plano cartesiano`***
 * @param {Punto} punto - Punto a localizar en el cuadrante
 * @return {number} -
 *              CUADRANTE\
 *[-x, +y ]         90º        [+x ,+y ] \
 *   c2   +---------|---------+   c1    \
 *0100  +---------|---------+   1000\
 *  180º |------centro-------| 0º\
 *0010  +---------|---------+   0001\
 *  c3    +---------|---------+c4\
 *[-x, -y ]       270º        [+x, -y ]
 */

export function obtenerCuadrante(origen, punto){
    if(!(origen instanceof Punto && punto instanceof Punto)) return __centro;
    
    if(origen.esIgual(punto)) return __centro;

    else if(punto.x < origen.x && punto.y <= origen.y)
        return __c2;

    else if(punto.x <= origen.x && punto.y > origen.y)
        return __c3;

    else if(punto.x > origen.x && punto.y > origen.y)
        return __c4;

    return __c1;}

/**
 * Obtine el `Punto` medio entre los puntos otorgados si algo salio mal retornara `undefined`
 * @param {Punto} puntoA 
 * @param {Punto} puntoB 
 * @returns {Punto|undefined}
 */

export function obtenerPuntoMedio(puntoA,puntoB){
    return puntoA?.copia?.suma(puntoB).divide(2);}

/**
 * Obtiene el `Punto` en la linea formada por los 2 puntos dados a partir de la tolerancia\
 * P = ( 1 - t ) P° + ( t × P¹ )
 * @param {Punto} puntoA 
 * @param {Punto} puntoB 
 * @param {number} tolerancia - la tolerancía debe de ser mayor a 0 y menor a 1; 
 * @returns {Punto | undefined} si algo salio mal retornara undefined
 */
export function BezierLineal(puntoA,puntoB,tolerancia){// 
    if(typeof tolerancia == 'number' && puntoA instanceof Punto && puntoB instanceof Punto)
        return puntoA.copia.multiplica(1-tolerancia).bSuma(puntoB.copia.multiplica(tolerancia));}

/**
 * Obtiene La pendiente apartir de 2 `Puntos`\
 * m = (y¹ - y°) ÷­­ (x¹ - x°)
 * @param {Punto} puntoA 
 * @param {Punto} puntoB 
 * @returns {number}
 */
export function obtenerPendiente(puntoA,puntoB){
    if(puntoA instanceof Punto && puntoB instanceof Punto){
        const pFinal = puntoA.copia.resta(puntoB);
        return pFinal.x ? pFinal.y / pFinal.x : 0;}
    return 0;}

/**
 * Convierte los grados a radiales
 * @param {number} grados 
 * @returns {number} Radial
 */
export function aRadial(grados){return 0.017453292519943295 * grados;}
/**
 * Convierte los radiales a grados
 * @param {number} radial 
 * @returns {number} Grados
 */
export function aGrados(radial){return 57.29577951308232087 * radial;}

/**
 * Corrige el rango del ángulo si es mayor o menor a sus limites: 0 - 360
 * @param {number} angulo 
 * @returns {number} Ángulo
 */
export function rectificarAngulo(angulo){
    if (angulo >= 360) angulo =  angulo - 360;
    else if (angulo < 0) angulo = 360 + angulo;

    if (angulo > 360 || angulo < 0) return rectificarAngulo(angulo);
    return angulo;}
/**
 * Obtiene el Ángulo de 2 `Puntos`
 * @param {Punto} origen - el punto de referencia
 * @param {Punto} punto - el punto de destino
 * @returns {number} Ángulo
 */
export function obtenerAngulo(origen,punto){
    const m = obtenerPendiente(origen,punto);
    if(!m) return 0;
    const cuadrante = obtenerCuadrante(origen,punto);

    let grados = Math.abs(aGrados(Math.atan(m)));

    if(cuadrante == __c2) grados = (90 - grados ) + 90;
    else if(cuadrante == __c3) grados += 180;
    else if(cuadrante == __c4) grados = (90 - grados ) + 270;
    
    return grados;}
/**
 * Retorna la longitud que existe entre dos puntos
 * @param {Punto} origen 
 * @param {Punto} punto 
 * @returns {number}
 */
export function obtenerLongitud(origen,punto){
    if(origen instanceof Punto && punto instanceof Punto){
        const[x0,y0] = origen.data;
        const[x1,y1] = punto.data;
        return Math.sqrt(Math.pow((x1 - x0),2) + Math.pow((y1 - y0),2));}
    return 0;}

/**
 * Devuelve la posición del punto rotado a partir del punto ancla como referencia
 * @param {Punto} origen - punto de referencia
 * @param {Punto} punto - punto que será rotado a partir de la referencia
 * @param {number} angulo - ángulo de rotación en el rango de 0 a 360 grados
 * @returns {Punto} 
 */

export function obtenerPuntoRotado(origen,punto,angulo){
    const longitud = typeof angulo == 'number' ? obtenerLongitud(origen,punto) : undefined;
    if(!longitud) return punto;
        
    const ang = obtenerAngulo(origen,punto) + rectificarAngulo(angulo);
    const x = 90 - rectificarAngulo(ang);
    const y = 90 - Math.abs(x);

    const Rx = Math.sin(aRadial(x)) * longitud;
    const Ry = Math.sin(aRadial(y)) * longitud;
    return new Punto((ancla.x + Rx), (ancla.y - Ry));}