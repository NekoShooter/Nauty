import Punto from "./Punto.js";
import Dimension from "./Dimension.js";
import Matrix from "./Matrix.js";
import Desplazo from "./Desplazo.js";

export default class Rect{
    #pfinal; #pder; #pizq; #area; #p = new Punto; #d = new Dimension; #t = new Desplazo;
    #HTML;
    /**
     * @Constructor _`Opcional`_ Creara un nuevo rectángulo según los datos proporcionados.
     * ### Datos:
     * 1. + *args_0 =* `[x : number]`, *args_1 =* `[y : number]`, *args_2 =* `[w : number]`, *args_3 =* `[h : number]`
     * 2. + *args_0 =* `[punto : Punto]`, *args_1 =* `[dimension : Dimension]`
     * 3. + *args_0 =* `[puntoA : Punto]`, *args_1 =* `[puntoB : Punto]`
     * @param {[number|Punto|HTMLElement number|Dimension|Punto|boolean number|undefined number|undefined]} args
     * + (**`x`** : posición X, **`y`** :posición Y, **`w`** : ancho, **`h`**: altura)
     * + (**`punto`** : coordenada, **`dimensión`** : dimension del rectángulo)
     * + (**`puntoA`** : punto de referencia, **`puntoB`** : punto de referencia)
     */
    constructor(...args) {this.nuevo(...args);}
    /**
     * Inicializa un nuevo rectángulo según los datos proporcionados.
     * ### Datos:
     * 1. + *args_0 =* `[x : number]`, *args_1 =* `[y : number]`, *args_2 =* `[w : number]`, *args_3 =* `[h : number]`
     * 2. + *args_0 =* `[punto : Punto]`, *args_1 =* `[dimension : Dimension]`
     * 3. + *args_0 =* `[puntoA : Punto]`, *args_1 =* `[puntoB : Punto]`
     * @param {[number|Punto|HTMLElement number|Dimension|Punto|boolean number|undefined number|undefined]} args
     * + (**`x`** : posición X, **`y`** :posición Y, **`w`** : ancho, **`h`**: altura)
     * + (**`punto`** : coordenada, **`dimensión`** : dimension del rectángulo)
     * + (**`puntoA`** : punto de referencia, **`puntoB`** : punto de referencia)
     * @returns {this}
     */
    nuevo(...args){
        if(args.length == 2){
            const[punto,dimencion] = args;
            if(punto instanceof Punto && dimencion instanceof Dimension){
                this.resetear();
                this.#p.copiar(punto);
                this.#d.copiar(dimencion);}

            else if(punto instanceof Punto && dimencion instanceof Punto){
                const minx = punto.x < dimencion.x ? punto.x : dimencion.x;
                const miny = punto.y < dimencion.y ? punto.y : dimencion.y;
                const maxx = punto.x > dimencion.x ? punto.x : dimencion.x;
                const maxy = punto.y > dimencion.y ? punto.y : dimencion.y;
                const w = Math.abs(maxx - minx);
                const h = Math.abs(maxy - miny);
                this.editar(minx,miny,w,h);}
            else this.#html(punto,dimencion);}

        else if(args.length == 4){
            const[x,y,w,h] = args;
            this.editar(x,y,w,h);}
        else if(args.length == 1) this.#html(args[0]);
        return this;}
    /**
     * Modifica los parámetros internos
     * @param {number} x - Posición en X 
     * @param {number} y - Podición en Y
     * @param {number} w - Ancho
     * @param {number} h - Altura
     * @returns {this}
     */
    editar(x,y,w,h){
        this.#eliminarVar();
        this.#p.nuevo(x,y);
        this.#d.nuevo(w,h);
        if(this.#HTML) {
            this.#HTML.style.left = `${this.#p.x}px`;
            this.#HTML.style.top = `${this.#p.y}px`;
            this.#HTML.style.width = `${this.#d.w}px`;
            this.#HTML.style.height = `${this.#d.h}px`;}
        return this;}
    /**
     * Posiciona el objeto **`Rect`** desde el centro usando las coordenadas proporcionadas.
     * @param {number} x Posicion en el eje X.
     * @param {number} y Posicion en el eje Y.
     * @returns {this}
     */
    posicionarPorElCentro(x,y){
        return this.editarPosicion(x - (this.#d.w/2),y - (this.#d.h/2));}
    /**
     * Edita el desplazamiento en el eje **X** y **Y**
     * @param {number|Desplazo} dx Desplazamiento **dx** o un objeto **`Desplazo`**
     * @param {number|undefined} dy Desplazamiento **dy**
     * @returns {this}
     */
    cambiarDesplazar(dx,dy){
        if(dx instanceof Desplazo) this.#t.nuevo(...dx.data);
        else this.#t.nuevo(dx,dy);
        if(this.#HTML)
            this.#HTML.style.transform = `translate(${this.#t.dx}px,${this.#t.dy}px)`;
        return this;}
    /**
     * Edita los parámetros del `Punto` principal
     * @param {number|Punto} x Coordenada **X** o un objeto **`Punto`**
     * @param {number|undefined} y Coordenada Y, si Y no es definida Y tomara el valor de X
     * @returns {this}
     */
    cambiarPosicion(x,y = undefined){
        this.#eliminarVar();
        if(x instanceof Punto) this.#p.bNuevo(...x.data);
        else this.#p.nuevo(x,y);
        if(this.#HTML) {
            this.#HTML.style.left = `${this.#p.x}px`;
            this.#HTML.style.top = `${this.#p.y}px`;}
        return this;}

    /**
     * Edita los parametros de la `Dimension` principal
     * @param {number|Dimension} w - Ancho o un objeto **`Dimension`**
     * @param {number|undefined} h - Altura, si no esta definida tomara el valor del Ancho
     * @returns {this}
     */
    cambiarDimension(w,h = undefined){
        this.#eliminarVar();
        if(w instanceof Dimension) this.#d.bNuevo(...w.data);
        else this.#d.nuevo(w,h);
        if(this.#HTML){
            this.#HTML.style.width = `${this.#d.w}px`;
            this.#HTML.style.height = `${this.#d.h}px`;}
        return this;}
    /**
     * Formatea el objeto completamente
     * @returns {this}
     */
    resetear(){
        this.#p.resetear();
        this.#d.resetear();
        this.#eliminarVar();
        return this;}
    
    #eliminarVar(){
        this.#pfinal = undefined;
        this.#pder = undefined;
        this.#pizq = undefined;
        this.#area = undefined;}
    /**
     * Expande el objeto `Rect` asta los limites del rectángulo dado
     * @param {Rect} rectangulo
     * @returns {this}
     */
    expande(rectangulo){
        if(rectangulo instanceof Rect){
            const x = this.#p.x < rectangulo.x ? this.#p.x : rectangulo.x;
            const y = this.#p.y < rectangulo.y ? this.#p.y : rectangulo.y;
            const w = this.#d.w > rectangulo.w ? this.#d.w : rectangulo.w;
            const h = this.#d.h > rectangulo.h ? this.#d.h : rectangulo.h;
            this.editar(x,y,w,h);}
        return this;}

    /**
     * Si el punto se encuentra dentro de los limites del rectángulo retorna `true`
     * @param {Punto} punto 
     * @param {Matrix|undefined} matrix Si el rectangulo se ve afectado por un objeto `Matrix` debe de otorgarse `Matrix` para dar un resultado mas sertero
     * @returns {boolean}
     */
    contiene(punto,matrix = undefined){
        if(!(punto instanceof Punto) || !this.esValido) return false;
        const p = matrix instanceof Matrix ? matrix.localizarPunto(punto):punto
        const x = p.x >= this.#p.x && p.x <= this.infDer.x;
        const y = p.y >= this.#p.y && p.y <= this.infDer.y;
        return x && y;}
    /**
     * Si el parte del rectangulo otorgado cruza por los limites del Rect retorna `true`
     * @param {Rect} rectangulo 
     * @returns {boolean}
     */
    intersecta(rectangulo){
        if(rectangulo instanceof Rect)return false;
        return this.contiene(rectangulo.supIzq) ||
               this.contiene(rectangulo.supDer) ||
               this.contiene(rectangulo.infIzq) ||
               this.contiene(rectangulo.infDer);}
    /**
     * Valida que los datos del `Rect` seam validos
     * @readonly
     * @returns {boolean}
     */
    get esValido(){return this.#d.esValido && this.#p.esValido;}

    /**
     * Crea y devuelve una copia del objeto
     */
    get copia(){return new Rect(this.#p, this.#d);}

    /**
     * Devuelve la coordenada global ubicada en el centro del rectángulo
     * @returns {Punto}
     */
    obtenerCentro(){
        return new Punto(this.#p.x + this.#t.dx + this.#d.w/2,this.#p.y + this.#t.dy + this.#d.h/2);}
    /**
     * Devuelve la coordenada local ubicada en el centro del rectángulo
     * @returns {Punto}
     */
    obtenerCentroLocal(){return new Punto(this.#d.w/2, this.#d.h/2);}
    /**
     * Devuelve la posición del rectángulo
     */
    get posicion(){return this.#p;}
    /**
     * Devuelve la dimensión del rectángulo
     */
    get dimencion(){return this.#d;}
    /**
     * Devuelve la esquina superior izquierda
     */
    get supIzq(){return this.#p;}
    /**
     * Devuelve la esquina superior derecha
     * @returns {Punto}
     */
    get supDer(){
        if(!this.#pder)this.#pder = new Punto(this.infDer.x,this.#p.y);
        return this.#pder;}
    /**
     * Devuelve la esquina inferior izquierda
     * @returns {Punto}
     */
    get infIzq(){
        if(!this.#pizq)this.#pizq = new Punto(this.#p.x,this.infDer.y);
        return this.#pizq;}
    /**
     * Devuelve la esquina inferior derecha
     * @returns {Punto}
     */  
    get infDer(){
        if(!this.#pfinal) this.#pfinal = this.#p.copia.bSuma(this.#d);
        return this.#pfinal;}
    /**
     * Devuelve el area total
     * @returns {number}
     */  
    get area(){
        if(!this.#area) this.#area = this.#d.w * this.#d.h;
        return this.#area;}


    get x(){return this.#p.x;}
    get y(){return this.#p.y;}
    /**
     * La posicion global en el eje **X**
     * @returns {number}
     */
    get gx(){return this.#HTML ? this.#HTML.getBoundingClientRect().left : this.#p.x;}
    /**
     * La posicion global en el eje **Y**
     * @returns {number}
     */
    get gy(){return this.#HTML ? this.#HTML.getBoundingClientRect().top :this.#p.y;}
    get w(){return this.#d.w;}
    get h(){return this.#d.h;}

    set x(num){
        if(this.#HTML) num = (this.#HTML.style.left = `${num}px`); this.#p.x = num;}
    /**
     * @param {number} num Posicion en Y
     */
    set y(num){
        if(this.#HTML) num = (this.#HTML.style.top = `${num}px`);this.#p.y = num;}
    /**
     * @param {number} num Valor positivo y mayor a **0**
     */
    set w(num){ if(this.#HTML) num = (this.#HTML.style.width = `${num}px`);this.#d.w = num;}
    /**
     * @param {number} num Valor positivo y mayor a **0**
     */
    set h(num){ if(this.#HTML) num = (this.#HTML.style.height = `${num}px`);this.#d.h = num;}
    /**
     * retorna los valores almacenados en un `Array`
     * @returns {[x:number y:number w:number h:number]}
     */
    get data(){return[this.#p.x,this.#p.y,this.#d.w,this.#d.h];}
    /**
     * Se ancla a un objeto **`HTML`** para que las modificaciones hechas en el rect se vean reflejadas en el objeto _HTML_
     * @param {HTMLElement} elementoHTML 
     */

    raiz(elementoHTML){this.#html(elementoHTML,true);}

    #html(nodo,enlazar = false){
        if(globalThis.HTMLElement && nodo instanceof HTMLElement){            
            if(enlazar){
                this.#HTML = nodo;
                console.log(nodo.tagName)}
                
            this.#d.nuevo(nodo.offsetWidth,nodo.offsetHeight);
            this.#p.nuevo(nodo.offsetLeft,nodo.offsetTop);} }}