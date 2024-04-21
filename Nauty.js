import Matrix from "./src/Matrix.js";
import Punto from "./src/Punto.js";
import Dimension from "./src/Dimension.js";
import Desplazo from "./src/Desplazo.js";
import Rect from "./src/Rect.js";
import {rotar,zoom,escala} from "./src/Transformadores.js";
import {__cuadrante,obtenerAngulo,obtenerCuadrante,obtenerPendiente,obtenerPuntoMedio,BezierLineal,aGrados,aRadial,rectificarAngulo,obtenerLongitud,obtenerPuntoRotado} from "./src/Cartesianas.js";
const{c1,c2,c3,c4,o} = __cuadrante;
const nauty = {Punto,Matrix,Dimension,Desplazo,Rect,rotar,zoom,escala,obtenerAngulo,obtenerPendiente,obtenerPuntoMedio,BezierLineal,aGrados,aRadial,rectificarAngulo,obtenerLongitud,obtenerPuntoRotado,obtenerCuadrante,c1,c2,c3,c4,o};
export {Punto,Matrix,Dimension,Desplazo,Rect,rotar,zoom,escala,obtenerAngulo,obtenerPendiente,obtenerPuntoMedio,BezierLineal,aGrados,aRadial,rectificarAngulo,obtenerLongitud,obtenerPuntoRotado,obtenerCuadrante,__cuadrante}
export default nauty;