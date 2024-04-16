import Matrix from "./Matrix.js";
import { obtenerCuadrante, aRadial , __cuadrante } from "./Cartesianas.js";
import Punto from "./Punto.js";
import Rect from "./Rect.js";
/**
 * Realiza una rotación en el plano con el ángulo especificado alrededor del punto de pivote, manteniendo la precisión especificada.
 * Devuelve una instancia de **`Matrix`** que representa la transformación de **rotación**.
 * @param {number} grados El ángulo de rotación en grados.
 * @param {Punto|undefined} pivote _(opcinal)_ El punto alrededor del cual se realiza la rotación.
 * @param {Rect|undefined} rect _(opcinal)_ El rectángulo que define el límite de la rotación.
 * @param {number} presicion _(opcinal)_ La precisión decimal para redondear los resultados (por defecto es 3).
 * @returns {Matrix}
 */
export function rotar(grados,pivote,rect,presicion = 3){
    const cos = Math.cos(aRadial(grados));
    const sen = Math.sin(aRadial(grados));

    const rot = new Matrix(cos,-sen, sen,cos);

    if(pivote instanceof Punto && rect instanceof Rect){

        const centroRect = rect.obtenerCentro();
        if(centroRect.esIgual(pivote) || cos == 1) return rot;

        const pR = pivote.copia.resta(centroRect);
        const pT = rot.desMapea(pR);

        if(obtenerCuadrante(centroRect,pivote) & __cuadrante.c2|__cuadrante.c4)
            rot.desplazo.bCopiar(pR).bResta(pT);
        else 
            rot.desplazo.bCopiar(pT).bResta(pR);

        if(!(Math.abs(pT.x.toFixed(presicion)) - Math.abs(pR.y.toFixed(presicion)))){
            const valor = Math.abs(pT.x + pR.x);
            rot.dy = rot.dy > 0 ? valor : -valor;}}
    
    return rot;}
/**
 * Realiza una escala en el plano bidimensional.
 * Devuelve una instancia de **`Matrix`** que representa la transformación de escala.
 * @param {number} escalaX El factor de escala en el eje x (por defecto es 1).
 * @param {number} escalaY El factor de escala en el eje y (por defecto es 1).
 * @returns {Matrix}
 */
export function escala(escalaX=1,escalaY=1){
    return new Matrix(escalaX,0,0,escalaY,0,0);}
/**
 * Realiza un zoom en el plano bidimensional.
 * Devuelve una instancia de **`Matrix`** que representa la transformación de zoom.
 * @param {number} distancia La distancia de zoom.
 * @param {number} foco El factor de foco para el zoom (por defecto es 0.01).
 * @returns {Matrix}
 */

export function zoom(distancia, foco = .01){
    if(!distancia || foco <= 0) return new Matrix;
    const nDeX = Math.exp(distancia * foco);
    return escala(nDeX,nDeX)}