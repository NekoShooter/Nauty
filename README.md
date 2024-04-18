<h1 align="center">🧭 Nauty 📐<h1/>

<p align="center"><a href="#"><img src="https://i.ibb.co/M2q680C/Taimy-sm.png" alt="imagen representativa de Taimy"></a><p/>

## ¿Qué es Nauty?
Es un conjunto de herramientas para trabajar con elementos geométricos en un plano cartesiano, permitiendo crear, manipular y transformar objetos de manera eficiente y precisa. Es especialmente útil para aplicaciones gráficas, juegos, visualizaciones de datos y cualquier otra tarea que involucre coordenadas y geometría en el plano.  
[ver demo](#demo)

###### instalacion:
``` bash
npm i nauty
```


### **Contenido**

#### Objetos:

+ [Punto](#punto)
+ [Dimension](#dimension)
+ [Desplazo](#desplazo)
+ [Rect](#rect)
+ [Matrix](#matrix)

#### Transformadores:
+ [rotar](#rotar)
+ [escala](#escala)
+ [zoom](#zoom)

#### Funciones Cartecianas:
+ [obtenerCuadrante]()
+ [obtenerPuntoMedio]()
+ [BezierLineal]()
+ [obtenerPendiente]()
+ [rectificarAngulo]()
+ [obtenerAngulo]()
+ [obtenerLongitud]()
+ [obtenerPuntoRotado]()
+ [aRadial]()
+ [aGrados]()

#### Constantes:

+ [__cuadrante]()


### La Base:  

`Base` es el cimiento de los objetos `Punto` , `Dimension` y `Desplazo` por lo que heredan sus funcionalidades mas basicas de esta clase:
<details>
  <summary><em>Haz click para desplegar mas informacion...</em></summary>  

#### Constructor y nuevo:

Si el segundo paramero no esta definido se tomara el valor del primer parametro para los dos.

``` JavaScript
super(a,b);
super.nuevo(a,b); // retorna this
```
+ `a:number` 
+ `b:number|undefined`
---
#### 🔸 bNuevo:

Modifica directamente los parameros internos.

``` JavaScript
super.bNuevo(a:number,b:number); // retorna this
```
> **`⚠ SIN RESTRICIONES`** Sin comprobación de ***tipos***, perfecto para ***iteraciones*** pero si los datos no son correctos puede provocar fallos ❌.

#### 🔸 resetear:
Resetea el valor de los elementos internos a **0**
``` JavaScript
super(20,20);
console.log(super);

super.resetear();
cosole.log(super);
```
###### terminal:
```
> Object { z0: 20 , z1: 20 }
    z0: 20
    z1: 20
​   > <prototype>: Object { … }

> Object { z0: 0 , z1: 0 }
    z0: 0
    z1: 0
​   > <prototype>: Object { … }
```
---
#### 🔸 rectificar:
Cualquier valor negativo sera sustituido a **0**
``` JavaScript
super(20,-20);
console.log(super);

super.rectificar(); // return this
cosole.log(super);
```
###### terminal:
```
> Object { z0: -20 , z1: 20 }
    z0: -20
    z1: 20
​   > <prototype>: Object { … }

> Object { z0: 0 , z1: 0 }
    z0: 0
    z1: 20
​   > <prototype>: Object { … }
```
---
#### 🔸 intercambia:
Los valores internos del objeto se intercambian.
``` JavaScript
super(10,20);
console.log(super);

super.intercambia(); // return this
console.log(super);
```
###### terminal:
```
> Object { z0: 10 , z1: 20 }
    z0: 10
    z1: 20
​   > <prototype>: Object { … }

> Object { z0: 20 , z1: 10 }
    z0: 20
    z1: 10
​   > <prototype>: Object { … }
```
---
#### 🔹 data:
Retorna los valores almacenados en un `Array`.

``` JavaScript
const arr = super.data; // return [number,number]
```
---
#### 🔹 esValido:
Si los el valores introducidos son de tipo **Number** retornara `true ✔`  de lo contrario sera `false ✖`.
``` JavaScript
const instanciaPunto = new Punto(0,0);
console.log(instanciaPunto.esValido); // true

instancia.bNuevo('0',undefined);
console.log(instanciaPunto.esValido); // false
```
 ---
#### 🔸 copiar:
Valida que el objeto resibido sea del mismo tipo que la instancia y `copia` cada uno de los elementos internos de este.
``` JavaScript
instanciaPunto.copiar( Punto ); // return this
instanciaDimension.copiar( Dimension ); // return this
instanciaDesplazo.copiar( Desplazo ); // return this
```
---
#### 🔸 bCopiar:
Si el objeto hereda de `Base` copiara cada uno de los elementos internos de los objetos `Punto | Desplazo | Dimension`
``` JavaScript
super.bCopiar( Punto ); // return this
super.bCopiar( Dimension ); // return this
super.bCopiar( Desplazo ); // return this
```
---
#### 🔹 copia:
Devuelve una copia del objeto.
``` JavaScript
const objetoCopia = super.copia; // return objeto hijo
```
---
#### 🔸 esIgual:
Valida que el `tipo` y contenido interno de los objetos sean igual.
``` JavaScript
const instanciaPunto = new Punto(0,0);
const otraInstancia = new Punto(0,0);
instanciaPunto.esIgual(otraInstancia); // return true
instanciaPunto.esIgual(0,0); //return true

const instanciaDimension = new Dimension(0,0);
instanciaPunto.esIgual(instanciaDimension); // return false
```
---
#### 🔸 bEsIgual:
Si el objeto hereda de `Base` valida que el contenido interno de los objetos sea igual.
``` JavaScript
const instanciaPunto = new Punto(0,0);
instanciaPunto.bEsIgual(0,0); // return true

const instanciaDimension = new Dimension(0,0);
instanciaPunto.bEsIgual(instanciaDimension); //return true

const instanciaDesplazo = new Desplazo(0,0);
instanciaPunto.bEsIgual(instanciaDesplazo); // return true

const obj = {x:0,y:0}
instanciaPunto.bEsIgual(obj); // false
```
---
#### 🔸 coincide:
Si el objeto es del mismo `tipo` valida que almenos un elemento del contenido interno sea igual.
``` JavaScript
const instanciaPunto = new Punto(0,0);
instanciaPunto.coincide(500,0); //return true

const otraInstancia = new Punto(0,10);
instanciaPunto.coincide(otraInstancia); // return true

const instanciaDimension = new Dimension(0,10);
instanciaPunto.coincide(instanciaDimension); // return false
```
---
#### 🔸 bCoincide:
Si el objeto hereda de `Base` valida que almenos un elemento del contenido interno sea igual.
``` JavaScript
const instanciaPunto = new Punto(0,0);
instanciaPunto.bCoincide(500,0); //return true

const instanciaDimension = new Dimension(0,10);
instanciaPunto.bCoincide(instanciaDimension); // return true

const instanciaDimension = new Dimension(0,10);
instanciaPunto.bCoincide(instanciaDimension); // return true
```
---
#### 🔸 multiplica:
Remplaza los **`parametros`** internos por la ***MULTIPLICACIÓN*** de estos **`parametros`** con la del **`VALOR`** asignado
``` JavaScript
super(2,2)
console.log(super);

super.multiplica(2); //return this
console.log(super);
```
###### terminal:
```
> Object { z0: 2 , z1: 2 }
    z0: 2
    z1: 2
​   > <prototype>: Object { … }

> Object { z0: 4 , z1: 4 }
    z0: 4
    z1: 4
​   > <prototype>: Object { … }
```

> **`⚠ SIN RESTRICIONES`** Sin comprobación de ***tipos***  , perfecto para ***iteraciones*** pero si los datos no son correctos puede provocar fallos ❌.
---
#### 🔸 divide:
Remplaza los **`parametros`** internos por la ***DIVICIÓN*** de estos **`parametros`** con la del **`VALOR`** asignado.
``` JavaScript
super(2,2)
console.log(super);

super.divide(2); //return this
console.log(super);
```
###### terminal:
```
> Object { z0: 2 , z1: 2 }
    z0: 2
    z1: 2
​   > <prototype>: Object { … }

> Object { z0: 1 , z1: 1 }
    z0: 1
    z1: 1
​   > <prototype>: Object { … }
```


> **`⚠ SIN RESTRICIONES`** Sin comprobación de ***tipos***, perfecto para ***iteraciones*** pero si los datos no son correctos puede provocar fallos ❌.
---
#### 🔸 bSuma:
Remplaza los **`parametros`** internos por la ***SUMA*** de estos **`parametros`** con la del **`objeto`** asignado.
``` JavaScript
const instanciaPunto = new Punto(-1,2);
console.log(instanciaPunto);

const instanciaDimension = new Dimension(100,100);
instanciaPunto.bSuma(instanciDimension); // return this

console.log(instanciaPunto);
```
###### terminal:
```
> Object { z0: -1 , z1: 2 , tipo: "Punto" }
    z0: -1
    z1: 2
    tipo: "Punto"
​   > <prototype>: Object { … }

> Object { z0: 99 , z1: 102 , tipo: "Punto" }
    z0: 99
    z1: 102
    tipo: "Punto"
​   > <prototype>: Object { … }
```
 > **`⚠ SIN RESTRICIONES`** Sin comprobación de ***tipos***, perfecto para ***iteraciones*** pero si los datos no son correctos puede provocar fallos ❌.
 ---
 #### 🔸 bResta:
 Remplaza los **`parametros`** internos por la ***RESTA*** de estos **`parametros`** con la del **`objeto`** asignado.
``` JavaScript
const instanciaPunto = new Punto(-1,2);
console.log(instanciaPunto);

const instanciaDimension = new Dimension(100,100);
instanciaPunto.bResta(instanciDimension); // return this

console.log(instanciaPunto);
```
###### terminal:
```
> Object { z0: -1 , z1: 2 , tipo: "Punto" }
    z0: -1
    z1: 2
    tipo: "Punto"
​   > <prototype>: Object { … }

> Object { z0: -101 , z1: -98 , tipo: "Punto" }
    z0: -101
    z1: -98
    tipo: "Punto"
​   > <prototype>: Object { … }
```
 > **`⚠ SIN RESTRICIONES`** Sin comprobación de ***tipos***, perfecto para ***iteraciones*** pero si los datos no son correctos puede provocar fallos ❌.  
  <br/>
</details>  

### Punto:
La clase `Punto` representa un punto en un plano bidimensional _(hereda de `Base`)_.
<details>
  <summary><em>Haz click para desplegar mas informacion...</em></summary>  

#### Constructor:
> -- *(opcional)* --
``` JavaScript
const div = document.querySelector('div');
const punto_1 = new Punto;
const punto_2 = new Punto(1,1);
const punto_3 = new Punto(div);
const punto_4 = new Punto(div,true); // coordenadas globales
const punto_5 = new Punto(...punto_4.data);
```
+ **args_0 `(X : Number)`** = Posicion en X\
**args_1 `(Y : Number | undefined)`** = Posicion en Y, _si Y no es definida Y tomara el valor de X_
+  **args_0 `(nodo : HTMLElement)`** = Del elemento HTML tomara la posicion en **`X`** y **`Y`** respectivamente\
**args_1 `(global : boolean | undefined)`** = Si es ***false*** | ***undefined*** solo tomara las coordenadas locales, ***true*** tomara las coordenadas globales.
+ **args_0 `args : data[]`** Toma los datos necesario del Array de datos del objeto en cuestion.
---
#### 🔸 nuevo:
Inicializa un nuevo `Punto` según los datos proporcionados.  
Exactamente igual al constructor
``` JavaScript
const punto_1 = new Punto;
punto_1.nuevo(1,1);

const div = document.querySelector('div');
punto_1.nuevo(div);
punto_1.nuevo(div,true) // coordenadas globales

const punto_2 = new Punto(100,100);
punto_1.nuevo(...punto_2.data)
```
---
#### 🔸 suma:
Remplaza los **`parametros`** internos por la ***SUMA*** de estos **`parametros`** con el **`objeto`** asignado.
``` JavaScript
const punto_1 = new Punto(1,1);
const desplazo = new Desplazo(5,5);
const punto_2 = new Punto(3,3);

console.log(punto_2);

punto_2.suma(punto_1).suma(desplazo);

console.log(punto_2);
```
###### terminal:
```
> Object { z0: 3 , z1: 3 , tipo: "Punto" }
    z0: 3
    z1: 3
    tipo: "Punto"
​   > <prototype>: Object { … }

> Object { z0: 9 , z1: 9 , tipo: "Punto" }
    z0: 9
    z1: 9
    tipo: "Punto"
​   > <prototype>: Object { … }
```
>  Objetos admitidos `Punto` y [`Desplazo`](#desplazo) si desea mas libertad y velocidad para sumar use [bSuma](#bsuma)
---
#### 🔸 resta:
Remplaza los **`parametros`** internos por la ***RESTA*** de estos **`parametros`** con el **`objeto`** asignado.
``` JavaScript
const punto_1 = new Punto(1,1);
const desplazo = new Desplazo(5,5);
const punto_2 = new Punto(3,3);

console.log(punto_2);

punto_2.resta(punto_1).resta(desplazo);

console.log(punto_2);
```
###### terminal:
```
> Object { z0: 3 , z1: 3 , tipo: "Punto" }
    z0: 3
    z1: 3
    tipo: "Punto"
​   > <prototype>: Object { … }

> Object { z0: -3 , z1: -3 , tipo: "Punto" }
    z0: -3
    z1: -3
    tipo: "Punto"
​   > <prototype>: Object { … }
```
>  Objetos admitidos `Punto` y [`Desplazo`](#desplazo) si desea mas libertad y velocidad para restar use [bResta](#bresta)
---
#### 🔹 getters y setters:
``` JavaScript
const punto_1 = new Punto(1,1);
console.log(punto_1);

punto_1.x; // coordenada en x
punto_1.y; // coordenada en y

punto_1.x = 2;
punto_1.y = 2;

console.log(punto_1);
```
###### terminal:
```
> Object { z0: 1 , z1: 1 , tipo: "Punto" }
    z0: 1
    z1: 1
    tipo: "Punto"
​   > <prototype>: Object { … }

> Object { z0: 2 , z1: 2 , tipo: "Punto" }
    z0: 2
    z1: 2
    tipo: "Punto"
​   > <prototype>: Object { … }
```
> Esta clase hereda de [`Base`](#la-base) por lo que el resto de sus funciones provienen de ahi.

<br/>
</details>

### Desplazo:

La clase `Desplazo` representa un desplazamiento en los ejes X , Y de un plano bidimensional.

<details>
  <summary><em>Haz click para desplegar mas informacion...</em></summary>  

#### Constructor:
> -- *(opcional)* --
``` JavaScript
const desplazo_1 = new Desplazo;
const desplazo_2 = new Desplazo(50,50);
const desplazo_3 = new Desplazo(...desplazo_2.data);
```
+ **args_0 `(dx : Number)`** = Desplazamiento en el eje X\
**args_1 `(dy : Number | undefined)`** = Desplazamiento en el eje Y, _si dy no es definida dy tomara el valor de dx_
+ **args_0 `args : data[]`** Toma los datos necesario del Array de datos del objeto en cuestion.
---
#### 🔸 nuevo:
Inicializa un nuevo `Desplazo` según los datos proporcionados.  
Exactamente igual al constructor.
``` JavaScript
cconst desplazo_1 = new Desplazo;
desplazo_1.nuevo(50,50);

const desplazo_2 = new Desplazo(100,100);
desplazo_1.nuevo(...desplazo_2.data);
```
---
#### 🔸 suma:
Remplaza los **`parametros`** internos por la ***SUMA*** de estos **`parametros`** con el **`Desplazo`** asignado.
``` JavaScript
const desplazo_1 = new Desplazo(1,1);
const desplazo_2 = new Desplazo(5,5);
const desplazo_3 = new Desplazo(3,3);

console.log(desplazo_3);

desplazo_3.suma(desplazo_1).suma(desplazo_2);

console.log(desplazo_3);
```
###### terminal:
```
> Object { z0: 3 , z1: 3 , tipo: "Desplazo" }
    z0: 3
    z1: 3
    tipo: "Desplazo"
​   > <prototype>: Object { … }

> Object { z0: 9 , z1: 9 , tipo: "Desplazo" }
    z0: 9
    z1: 9
    tipo: "Desplazo"
​   > <prototype>: Object { … }
```
>  Solo admite `desplazo` si desea mas libertad y velocidad para sumar use [bSuma](#bsuma)
---
#### 🔸 resta:
Remplaza los **`parametros`** internos por la ***RESTA*** de estos **`parametros`** con el **`Desplazo`** asignado.
``` JavaScript
const desplazo_1 = new Desplazo(1,1);
const desplazo_2 = new Desplazo(5,5);
const desplazo_3 = new Desplazo(3,3);

console.log(desplazo_3);

desplazo_3.suma(desplazo_1).suma(desplazo_2);

console.log(desplazo_3);
```
###### terminal:
```
> Object { z0: 3 , z1: 3 , tipo: "Desplazo" }
    z0: 3
    z1: 3
    tipo: "Desplazo"
​   > <prototype>: Object { … }

> Object { z0: -3 , z1: -3 , tipo: "Desplazo" }
    z0: -3
    z1: -3
    tipo: "Desplazo"
​   > <prototype>: Object { … }
```
>  Solo admite `desplazo` si desea mas libertad y velocidad para restar use [bResta](#bresta)
---
#### 🔹 getters y setters:
``` JavaScript
const desplazo_1 = new Desplazo(1,1);
console.log(desplazo_1);

desplazo_1.dx; // desplazamiento en el eje x
desplazo_1.dy; // desplazamiento en el eje y

desplazo_1.dx = 2;
desplazo_1.dy = 2;

console.log(desplazo_1);
```
###### terminal:
```
> Object { z0: 1 , z1: 1 , tipo: "Desplazo" }
    z0: 1
    z1: 1
    tipo: "Desplazo"
​   > <prototype>: Object { … }

> Object { z0: 2 , z1: 2 , tipo: "Desplazo" }
    z0: 2
    z1: 2
    tipo: "Desplazo"
​   > <prototype>: Object { … }
```
> Esta clase hereda de [`Base`](#la-base) por lo que el resto de sus funciones provienen de ahi.

<br/>
</details>

### Dimension:

La clase `Dimension` representa las dimensiones de un objeto en un plano bidimensional, como el ancho y la altura.

<details>
  <summary><em>Haz click para desplegar mas informacion...</em></summary> 

#### Constructor:
> -- *(opcional)* --
``` JavaScript
const div = document.querySelector('div');
const dimension_1 = new Dimension;
const dimension_2 = new Dimension(1,1);
const dimension_3 = new Dimension(div);
const dimension_4 = new Dimension(...dimension_2.data);
```
+ **args_0 `(w : Number)`** = Ancho\
**args_1 `(h : Number | undefined)`** = Altura, _si la altura no es definida Y tomara el valor del ancho_
+  **args_0 `(nodo : HTMLElement)`** = Del elemento HTML tomara el tamaño respectivamente
+ **args_0 `args : data[]`** Toma los datos necesario del Array de datos del objeto en cuestion.
---
#### 🔸 nuevo:
Inicializa una nueva `Dimension` según los datos proporcionados.  
Exactamente igual al constructor.
``` JavaScript
const dimension_1 = new Dimension;
dimension_1.nuevo(1,1);

const div = document.querySelector('div');
dimension_1.nuevo(div);

const dimension_2 = new Dimension(100,100);
dimension_1.nuevo(...dimension_2.data)
```
---
#### 🔸 suma:
Remplaza los **`parametros`** internos por la ***SUMA*** de estos **`parametros`** con la **`Dimension`** asignada.
``` JavaScript
const dimension_1 = new Dimension(1,1);
const dimension_2 = new Dimension(5,5);
const dimension_3 = new Dimension(3,3);

console.log(dimension_1);

dimension_1.suma(dimension_2).suma(dimension_3);

console.log(dimension_1);
```
###### terminal:
```
> Object { z0: 1 , z1: 1 , tipo: "Dimension" }
    z0: 1
    z1: 1
    tipo: "Dimension"
​   > <prototype>: Object { … }

> Object { z0: 9 , z1: 9 , tipo: "Dimension" }
    z0: 9
    z1: 9
    tipo: "Dimension"
​   > <prototype>: Object { … }
```
> Solo admite `Dimension` si desea mas libertad y velocidad para sumar use [bSuma](#bsuma)
---
#### 🔸 resta:
Remplaza los **`parametros`** internos por la ***RESTA*** de estos **`parametros`** con la **`Dimension`** asignada.
``` JavaScript
const dimension_1 = new Dimension(1,1);
const dimension_2 = new Dimension(5,5);
const dimension_3 = new Dimension(3,3);

console.log(dimension_1);

dimension_1.resta(dimension_2).resta(dimension_3);

console.log(dimension_1);
```
###### terminal:
```
> Object { z0: 1 , z1: 1 , tipo: "Dimension" }
    z0: 1
    z1: 1
    tipo: "Dimension"
​   > <prototype>: Object { … }

> Object { z0: 0 , z1: 0 , tipo: "Dimension" }
    z0: 0
    z1: 0
    tipo: "Dimension"
​   > <prototype>: Object { … }
```

> Solo admite `Dimension` ademas de que no existen dimensiones nagativas por lo que seran sustituidas por **0** en caso de pasar, si desea mas libertad y velocidad para restar use [bResta](#bresta).
---
#### 🔸 multiplica:
Remplaza los **`parametros`** internos por la ***MULTIPLICACIÓN*** de estos **`parametros`** con el **`VALOR`** asignado.
``` JavaScript
const dimension_1 = new Dimension(3,2);

console.log(dimension_1);

dimension_1.multiplica(2);

console.log(dimension_1);
```
###### terminal:
```
> Object { z0: 3 , z1: 2 , tipo: "Dimension" }
    z0: 3
    z1: 2
    tipo: "Dimension"
​   > <prototype>: Object { … }

> Object { z0: 6 , z1: 4 , tipo: "Dimension" }
    z0: 6
    z1: 4
    tipo: "Dimension"
​   > <prototype>: Object { … }
```
---
#### 🔸 divide:
Remplaza los **`parametros`** internos por la ***DIVICIÓN*** de estos **`parametros`** con el **`VALOR`** asignado.
``` JavaScript
const dimension_1 = new Dimension(3,2);

console.log(dimension_1);

dimension_1.divide(2);

console.log(dimension_1);
```
###### terminal:
```
> Object { z0: 3 , z1: 2 , tipo: "Dimension" }
    z0: 3
    z1: 2
    tipo: "Dimension"
​   > <prototype>: Object { … }

> Object { z0: 1.5 , z1: 1 , tipo: "Dimension" }
    z0: 1.5
    z1: 1
    tipo: "Dimension"
​   > <prototype>: Object { … }
```
---
#### 🔹 esValido:
El valor de una dimencion debe ser mayor a **0** para que sea `true ✔` de lo contrario sera invalido `false ✖`

``` JavaScript
const dimension_1 = new Dimension(20,20);

if(dimension_1.esValido){
    console.log(dimension_1);
    }

dimension_1.w = 0;

if(!dimension_1.esValido){
    console.log("la dimension solo es valida si sus parametros son mayores a 0");
    }
```
###### terminal:
```
> Object { z0: 20 , z1: 20 , tipo: "Dimension" }
    z0: 20
    z1: 20
    tipo: "Dimension"
​   > <prototype>: Object { … }

"la dimension solo es valida si sus parametros son mayores a 0"
```
---
#### 🔹 getters y setters:
``` JavaScript
const dimension_1 = new Dimension(1,1);
console.log(dimension_1);

dimension_1.w; // ancho
dimension_1.h; // alto

dimension_1.w = 2;
dimension_1.h = 2;

console.log(dimension_1);
```
###### terminal:
```
> Object { z0: 1 , z1: 1 , tipo: "Dimension" }
    z0: 1
    z1: 1
    tipo: "Dimension"
​   > <prototype>: Object { … }

> Object { z0: 2 , z1: 2 , tipo: "Dimension" }
    z0: 2
    z1: 2
    tipo: "Dimension"
​   > <prototype>: Object { … }
```
> Esta clase hereda de [`Base`](#la-base) por lo que el resto de sus funciones provienen de ahi.

<br/>
</details>

### Rect:
La clase `Rect` representa un rectángulo en un plano bidimensional, definido por su posición y dimensión ademas de la capacidad para interactuar con otros objetos geométricos.

<details>
  <summary><em>Haz click para desplegar mas informacion...</em></summary> 

#### Constructor:
> -- *(opcional)* --   

Creara un nuevo rectángulo según los datos proporcionados.
``` JavaScript
const div = document.querySelector('div');
const punto_1 = new Punto;
const punto_2 = new Punto(-10,10);
const dimension = new Dimencion(100,100);

const rect_1 = new Rect;
const rect_2 = new Rect(0,0,50,50);
const rect_3 = new Rect(punto_1,dimencion);
const rect_4 = new Rect(punto_1,punto_2);
const rect_5 = new Rect(div);
const rect_6 = new Rect(div,true);// cualquier modificacion a rect afectara a div
const rect_7 = new Rect(...rect_4.data);
```

+ *args_0 =* `[x : number]`, *args_1 =* `[y : number]`,  
*args_2 =* `[w : number]`, *args_3 =* `[h : number]`  
+ *args_0 =* `[punto : Punto]`, *args_1 =* `[dimension : Dimension]`
+ *args_0 =* `[puntoA : Punto]`, *args_1 =* `[puntoB : Punto]`
+ *args_0 = `(nodo : HTMLElement)`* = Del elemento HTML tomara el tamaño y la posicion respectivamente
+ *args = `(...args : data[])`* Toma los datos necesario del Array de datos del objeto en cuestion.
---
#### 🔸 nuevo:
Inicializa un nuevo rectángulo según los datos proporcionados.  
Exactamente igual al constructor.
``` JavaScript
const div = document.querySelector('div');
const punto_1 = new Punto;
const punto_2 = new Punto(-10,10);
const dimension = new Dimencion(100,100);

const rect_1 = new Rect;
rect_1.nuevo(0,0,50,50);
rect_1.nuevo(punto_1,dimencion);
rect_1.nuevo(punto_1,punto_2);
rect_1.nuevo(div);
rect_1.nuevo(div,true);// cualquier modificacion a rect afectara a div
const rect_2 = new Rect(50,50,50,50)
rect_1.nuevo(...rect_2.data);
```
---
#### 🔹 data:
Devuelve los valores almacenados en un array.
``` JavaScript
const rect_1 = new Rect(50,50,50,50);
console.log(rect_1.data);
```
###### terminal:
```
> Array(4) [ 50 , 50 , 50 , 50 ]
```
---
#### 🔸 copiar:
Copia cada uno de los elementos internos del objeto resibido.
``` JavaScript
const rect_1 = new Rect(100,100,100,100);
const rect_2 = new Rect;
console.log(rect_2.data);

rect_2.copiar(rect_1);
console.log(rect_2.data);
```
###### terminal:
```
> Array(4) [ 0 , 0 , 0 , 0 ]

> Array(4) [ 100 , 100 , 100 , 100 ]
```
---
#### 🔹 copia:
Crea y devuelve una copia del objeto
``` JavaScript
const rect_1 = new Rect(0,0,50,50);
const rect_copia = rect_1.copia;
```
---
#### 🔸 editar:
Modifica los parámetros internos  
`editar(x:number, y:number, w:number, h:number)`
* x - Posición en X 
* y - Podición en Y
* w - Ancho
* h - Altura  
``` JavaScript
const rect_1 = new Rect(100,100,100,100);
console.log(rect_1.data);

rect_1.editar(50,50,50,50);

console.log(rect_1.data);
```
###### terminal:
```
> Array(4) [ 100 , 100 , 100 , 100 ]

> Array(4) [ 50 , 50 , 50 , 50 ]
```
---
#### 🔸 cambiarPosicion:
Edita los parámetros de posición del rectángulo.
``` JavaScript
const rect_1 = new Rect(100,100,100,100);
console.log(rect_1.data);

rect_1.cambiarPosicion(50,50);
console.log(rect_1.data);

const nuevoPunto = new Punto(20,20);
rect_1.cambiarPosicion(nuevoPunto)
console.log(rect_1.data);
```
###### terminal:
```
> Array(4) [ 100 , 100 , 100 , 100 ]

> Array(4) [ 50 , 50 , 100 , 100 ]

> Array(4) [ 20 , 20 , 100 , 100 ]
```
---
#### 🔹 posicion:
Devuelve la el objeto [`Punto`](#punto) de la posición del rectángulo
``` JavaScript
const rect_1 = new Rect(1,2,30,40);
console.log(rect_1.posicion);
```
###### terminal:
```
> Object { z0: 1 , z1: 2 , tipo: "Punto" }
    z0: 1
    z1: 2
    tipo: "Punto"
​   > <prototype>: Object { … }
```
---
#### 🔸 cambiarDimension:
Edita los parámetros de dimensiones del rectángulo.
``` JavaScript
const rect_1 = new Rect(100,100,100,100);
console.log(rect_1.data);

rect_1.cambiarDimension(50,50);
console.log(rect_1.data);

const nuevaDimension = new Dimension(20,20);
rect_1.cambiarPosicion(nuevaDimension)
console.log(rect_1.data);
```
###### terminal:
```
> Array(4) [ 100 , 100 , 100 , 100 ]

> Array(4) [ 100 , 100 , 50 , 50 ]

> Array(4) [ 100 , 100 , 20 , 20 ]
```
---
#### 🔹 dimension:
Devuelve la el objeto [`Dimension`](#punto) del rectángulo
``` JavaScript
const rect_1 = new Rect(1,2,30,40);
console.log(rect_1.dimension);
```
###### terminal:
```
> Object { z0: 30 , z1: 40 , tipo: "Dimension" }
    z0: 30
    z1: 40
    tipo: "Dimension"
​   > <prototype>: Object { … }
```
---
#### 🔸 desplazar:
Edita el desplazamiento en el eje **X** y **Y**
``` JavaScript
const rect_1 = new Rect(100,100,100,100);
console.log(rect_1.data);

rect_1.desplazar(50,50);
console.log(rect_1.data);

const nuevaDesplazo = new Desplazo(20,20);
rect_1.desplazar(nuevaDesplazo)
console.log(rect_1.data);
```
###### terminal:
```
> Array(4) [ 100 , 100 , 100 , 100 ]

> Array(4) [ 150 , 150 , 100 , 100 ]

> Array(4) [ 120 , 120 , 100 , 100 ]
```
---
#### 🔹 desplazo:
Devuelve el objeto [`Desplazo`](#desplazo) que contiene el desplazamiento del rectángulo
``` JavaScript
const rect_1 = new Rect(100,100,100,100);
rect_1.cambiarDesplazo(50,50);
console.log(rect_1.desplazo);
```
###### terminal:
```
> Object { z0: 50 , z1: 50 , tipo: "Desplazo" }
    z0: 50
    z1: 50
    tipo: "Desplazo"
​   > <prototype>: Object { … }
```
---
#### 🔸 posicionarPorElCentro:
Posiciona el objeto `Rect` desde el centro usando las coordenadas proporcionadas.
``` JavaScript
const rect_1 = new Rect(0,0,100,100);
console.log(rect_1.data);

rect_1.posicionarPorElCentro(0,0);
console.log(rect_1.data);
```
###### terminal:
```
> Array(4) [ 0 , 0 , 100 , 100 ]

> Array(4) [ -50 , -50 , 100 , 100 ]

```
---
#### 🔸 expandir:
Expande el objeto `Rect` asta los limites del rectángulo dado
``` JavaScript
const rect_1 = new Rect(0,0,50,50);
console.log(rect_1.data);

const rect_2 = new Rect(50,50,50,50);
rect_1.expandir(rect_2)
console.log(rect_1.data);
```
###### terminal:
```
> Array(4) [ 0 , 0 , 50 , 50 ]

> Array(4) [ 0 , 0 , 100 , 100 ]

```
---
#### 🔸 contiene:
Verifica si un punto se encuentra dentro de los límites del rectángulo.
``` JavaScript
const rect_1 = new Rect(0,0,50,50);
const punto_1  = new Punto(25,25);

if(rect_1.contiente(punto_1)){
    console.log('El punto esta dentro de rectangulo');
}
else{
    console.log('El punto esta fuera')
}

```
###### terminal:
```
El punto esta dentro de rectangulo
```
---
#### 🔹 esValido:
Verifica si los datos del rectángulo son válidos.
``` JavaScript
const rect_1 = new Rect(0,0,50,50);

if(rect_1.esValido){    
    console.log(rect_1.data);
}

rect_1.w = 0;    

if(!rect_1.esValido){
    console.log("el rectangulo NO ES VALIDO");
}
```
###### terminal:
```
> Array(4) [ 0 , 0 , 50 , 50 ]

"el rectangulo NO ES VALIDO"
```
---
#### 🔸 resetear:
Formatea completamente el objeto..
``` JavaScript
const rect_1 = new Rect(50,50,50,50);
console.log(rect_1.data);

rect_1.resetear();
console.log(rect_1.data);
```
###### terminal:
```
> Array(4) [ 50 , 50 , 50 , 50 ]

> Array(4) [ 0 , 0 , 0 , 0 ]
```
---
#### 🔸 obtenerCentro:
Devuelve la coordenada global ubicada en el centro del rectángulo.
``` JavaScript
const rect_1 = new Rect(50,50,50,50);

const centro = rect_1.obtenerCentro();
console.log(centro);
```
###### terminal:
```
> Object { z0: 75 , z1: 75 , tipo: "Punto" }
    z0: 75
    z1: 75
    tipo: "Punto"
​   > <prototype>: Object { … }
```
---
#### 🔸 obtenerCentroLocal:
Devuelve la coordenada local ubicada en el centro del rectángulo.
``` JavaScript
const rect_1 = new Rect(50,50,50,50);

const centro = rect_1.obtenerCentroLocal();
console.log(centro);
```
###### terminal:
```
> Object { z0: 25 , z1: 25 , tipo: "Punto" }
    z0: 25
    z1: 25
    tipo: "Punto"
​   > <prototype>: Object { … }
```
---
#### 🔸 raiz:
Ancla el rectángulo a un objeto HTML para que las modificaciones hechas en el Rect se vean reflejadas en el objeto HTML.
``` JavaScript
const div = document.querySelector('div');
const rect_1 = new Rect;
rect_1.raiz(div);

```
---
#### 🔸 raiz:
Ancla el rectángulo a un objeto HTML para que las modificaciones hechas en el Rect se vean reflejadas en el objeto HTML.
``` JavaScript
const div = document.querySelector('div');
const rect_1 = new Rect;
rect_1.raiz(div);

```
---
#### 🔹 area:
Devuelve el área total del rectángulo.
``` JavaScript
const rect_1 = new Rect(50,50,50,50);
console.log(rect_1.area);
```
###### terminal:
```
2500
```

### 🔹 getters y setters:

``` JavaScript
const rect_1 = new Rect(0,0,50,50);
console.log(rect_1.data);

rect_1.w; // ancho
rect_1.h; // alto
rect_1.x; // coordenada x
rect_1.y; // coordenada y

rect_1.gx; // Devuelve la posicion X global si está enlazado al DOM, de lo contrario, devuelve la posicion X local.
rect_1.gy; // Devuelve la posicion Y global si está enlazado al DOM, de lo contrario, devuelve la posicion Y local.

rect_1.x = 10;
rect_1.y = 10;
rect_1.w = 20;
rect_1.h = 20;

console.log(rect_1.data);
```
###### terminal:
```
> Array(4) [ 0 , 0 , 50 , 50 ]

> Array(4) [ 10 , 10 , 20 , 20 ]
```

<br/>
</details>

### Matrix
La clase Matrix representa una matriz 2x2 utilizada para transformaciones geométricas en un plano bidimensional.
<details>
  <summary><em>Haz click para desplegar mas informacion...</em></summary>

#### Constructor
> -- *(opcional)* --  

Crea una nueva instancia de la matriz con los valores proporcionados. Por defecto, crea una matriz de identidad y sin desplazamiento.
+ m11 (number): Valor de la posición (1,1) de la matriz.
+ m21 (number): Valor de la posición (2,1) de la matriz.
+ m12 (number): Valor de la posición (1,2) de la matriz.
+ m22 (number): Valor de la posición (2,2) de la matriz.
+ dx (number): Desplazamiento en el eje x.
+ dy (number): Desplazamiento en el eje y.
``` JavaScript
const matrix_1 = new Matrix;
const matrix_2 = new Matrix(1,0,0,1,0,0);
const matrix_3 = new Matrix(...matrix_2.data);
```
---
#### 🔸 nuevo:
Inicializa una nueva matriz según los datos proporcionados.  
Exactamente igual al constructor.
``` JavaScript
const matrix_1 = new Matrix;
matrix_1.nuevo(2,0,0,2,10,10);

const matrix_2 = new Matrix(0.7, -0.7, 0.7, 0.7, 0, 0);
matrix_1.nuevo(...matrix_2.data);
```
---
#### 🔹 data:
Devuelve los valores de la matriz y el desplazamiento como un arreglo.  
`[m11:number, m21:number, m12:number, m22:number, dx:number dy:number]`
``` JavaScript
const matrix_1 = new Matrix(2,0,0,2,0,0);
console.log(matrix_1.data);
```
###### terminal:
```
> Array(6) [ 2 , 0 , 0 , 2 , 0 , 0 ]
```
---
#### 🔹 str:
Devuelve una representación en cadena de texto de la matriz en el formato `matrix(m11, m21, m12, m22, dx, dy)` perfecto para usarlo en los metodos ***DOM.style.transform***.
``` JavaScript
const matrix_1 = new Matrix(2,0,0,2,0,0);
console.log(matrix_1.str);
```
###### terminal:
```
"matrix(2, 0, 0, 2, 0, 0)"
```
#### 🔸 desplazar:
Desplaza la matriz en los ejes **X** e **Y** por los valores proporcionados.
``` JavaScript
const div_1 = document.querySelector('.div_1');
const div_2 = document.querySelector('.div_2');
const matrix_1 = new Matrix;

div_1.style.transform = matrix_1.str;

matrix_1.desplazar(200,200);
div_2.style.transform = matrix_1.str;
```
<p align="center"><a href="#"><img src="https://i.ibb.co/wLdZQTd/m1-1.jpg" alt="imagen demo de matrix.desplazar"></a><p/>

---
#### 🔹 desplazo:
Devuelve el objeto [`Desplazo`](#desplazo) asociado a la matriz.
``` JavaScript
const div_1 = document.querySelector('.div_1');
const div_2 = document.querySelector('.div_2');
const matrix_1 = new Matrix;

div_1.style.transform = matrix_1.str;

const desplazo = matrix_1.desplazo;
desplazo.dx = 200;
desplazo.dy = 200;
div_2.style.transform = matrix_1.str;
```
<p align="center"><a href="#"><img src="https://i.ibb.co/wLdZQTd/m1-1.jpg" alt="imagen demo de matrix.desplazar"></a><p/>

---
#### 🔸 inverso:
Calcula la matriz inversa de esta matriz.
``` JavaScript
const div_1 = document.querySelector('.div_1');
const div_2 = document.querySelector('.div_2');
const matrix_1 = new Matrix(0.7, -0.7, 0.7, 0.7, 200, 200);

div_1.style.transform = matrix_1.str;

const matrix_inversa = matrix_1.inverso();
div_2.style.transform = matrix_inversa.str;
```
<p align="center"><a href="#"><img src="https://i.ibb.co/0cXXJfb/m2.jpg" alt="imagen demo de matrix.inverso"></a><p/>

#### 🔸 fusionar:
Sustituye los valores de la `matriz A` por la combinacion de la `matriz A` con la `matriz B` de manera que aplica primero la transformación de la `matriz A` y luego la transformación de la `matriz B`.
``` JavaScript
const div_1 = document.querySelector('.div_1');
const div_2 = document.querySelector('.div_2');
const div_3 = document.querySelector('.div_3');
const matrix_1 = new Matrix(0.7, -0.7, 0.7, 0.7, 50, -50);
const matrix_2 = new Matrix(.5, 0, 0, .5, 50, 50);

div_1.style.transform = matrix_1.str;
div_2.style.transform = matrix_2.str;

div_3.style.transform = matrix_2.fusionar(matrix_1).str;
```
<p align="center"><a href="#"><img src="https://i.ibb.co/8Kgj0hD/m3.png" alt="imagen demo de matrix.inverso"></a><p/>

#### 🔸 copiar:
Copia los valores de otra matriz en esta matriz.
``` JavaScript
const matrix_1 = new Matrix(0.7, -0.7, 0.7, 0.7, 50, -50);
console.log(matrix_1.data);

const matrix_2 = new Matrix(.5, 0, 0, .5, 50, 50);
matrix_1.copiar(matrix_2)

console.log(matrix_1.data);
```
###### terminal:
```
> Array(6) [ 0.7 , -0.7 , 0.7 , 0.7 , 50 , -50 ]

> Array(6) [ 0.5 , 0 , 0 , 0.5 , 50 , 50 ]
```
---
#### 🔹 copia:
Devuelve una copia de esta matriz.
``` JavaScript
const matrix_1 = new Matrix(0.7, -0.7, 0.7, 0.7, 50, -50);
console.log(matrix_1.data);

const matrix_2 = matrix_1.copia;
console.log(matrix_2.data);
```
###### terminal:
```
> Array(6) [ 0.7 , -0.7 , 0.7 , 0.7 , 50 , -50 ]

> Array(6) [ 0.7 , -0.7 , 0.7 , 0.7 , 50 , -50 ]
```
---
#### 🔸 mapea:
Aplica la transformación de la matriz a un punto en el plano.
``` JavaScript
const matrix_1 = new Matrix(0.7, -0.7, 0.7, 0.7, 50, -50);

const punto_original = new Punto(25,25);
console.log(punto_original.data);

const punto_mapeado = matrix_1.mapea(punto_original);
console.log(punto_mapeado.data);
```
###### terminal:
```
> Array [ 25 , 25 ]

> Array [ 50, -15 ]
```
<br/>
</details>
<br/>
</details>


<details>
  <summary><em>Haz click para desplegar mas informacion...</em></summary> 
<br/>
</details>

###### *Todos los personajes presentados en esta librería fueron diseñados y creados por mí ~ [Neko ★ Shooter.](https://github.com/NekoShooter)*