<h1 align="center">🧭 Nauty 📐<h1/>

<p align="center"><a href="#"><img src="https://i.ibb.co/zS2f3SD/nauty-sm.png" alt="imagen representativa de Nauty"></a><p/>


## ¿Qué es Nauty?
Es un conjunto de herramientas para trabajar con elementos geométricos en un plano cartesiano, permitiendo crear, manipular y transformar objetos de manera eficiente y precisa. Es especialmente útil para aplicaciones gráficas, juegos, visualizaciones de datos y cualquier otra tarea que involucre coordenadas y geometría en el plano.  
[ver demo](#demo)

###### instalacion:
``` bash
npm i nauty
```
---
### **Contenido**

#### Objetos:

+ [Punto](#punto)
+ [Dimension](#dimension)
+ [Desplazo](#desplazo)
+ [Rect](#rect)
+ [Matrix](#matrix)

#### Transformadores:
+ [rotar](#transformadores-1)
+ [escala](#transformadores-1)
+ [zoom](#transformadores-1)

#### Funciones Cartecianas:
+ [obtenerCuadrante](#funciones-cartecianas-1)
+ [obtenerPuntoMedio](#funciones-cartecianas-1)
+ [BezierLineal](#funciones-cartecianas-1)
+ [obtenerPendiente](#funciones-cartecianas-1)
+ [rectificarAngulo](#funciones-cartecianas-1)
+ [obtenerAngulo](#funciones-cartecianas-1)
+ [obtenerLongitud](#funciones-cartecianas-1)
+ [obtenerPuntoRotado](#funciones-cartecianas-1)
+ [aRadial](#funciones-cartecianas-1)
+ [aGrados](#funciones-cartecianas-1)
---

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
#### 🔸 rectificaW:
Todo valor negativo en el ancho sera sustituido por **0**.

``` JavaScript
const dimension_1 = new Dimension;
dimension_1.bNuevo(-25,25); // bNuevo = sin restricciones para mas info ver clase Base
console.log("original",dimension_1);

dimension_1.rectificaW();
console.log("rectificaW",dimension_1);
```
###### terminal:
```
original > Object { z0: -25, z1: 25, tipo: "Dimension" }

rectificaW > Object { z0: 0, z1: 25, tipo: "Dimension" }

```
---
#### 🔸 rectificaH:
Todo valor negativo en la altura sera sustituido por **0**.
``` JavaScript
const dimension_1 = new Dimension;
dimension_1.bNuevo(-25,-25); // bNuevo = sin restricciones para mas info ver clase Base
console.log("original",dimension_1);

dimension_1.rectificaH();
console.log("rectificaH",dimension_1);
```
###### terminal:
```
original > Object { z0: -25, z1: -25, tipo: "Dimension" }

rectificaH > Object { z0: -25, z1: 0, tipo: "Dimension" }

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
rect_1.desplazar(10,10);

const centro = rect_1.obtenerCentro();
console.log(centro);
```
###### terminal:
```
> Object { z0: 85 , z1: 85 , tipo: "Punto" }
    z0: 85
    z1: 85
    tipo: "Punto"
​   > <prototype>: Object { … }
```
---
#### 🔸 obtenerCentroLocal:
Devuelve la coordenada local ubicada en el centro del rectángulo.
``` JavaScript
const rect_1 = new Rect(50,50,50,50);
rect_1.desplazar(10,10);

const centro = rect_1.obtenerCentroLocal();
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
#### 🔸 obtenerCentroAbs:
Devuelve la coordenada absoluta ubicada en el centro del rectángulo.
``` JavaScript
const rect_1 = new Rect(50,50,50,50);
rect_1.desplazar(10,10);

const centro = rect_1.obtenerCentroAbs();
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

#### 🔹 supDer , supIzq , infDer , infIzq:
Devuelve las coordenadas de las esquinas del rectángulo.
``` JavaScript
const rect = new Rect(0,25,50,100);
console.log('supDer',rect.supDer);
console.log('supIzq',rect.supIzq);
console.log('infDer',rect.infDer);
console.log('infIzq',rect.infIzq);
```
###### terminal:
```
supDer > Object { z0: 50, z1: 25, tipo: "Punto" }

supIzq > Object { z0: 0, z1: 25, tipo: "Punto" }

infDer > Object { z0: 50, z1: 125, tipo: "Punto" }

infIzq > Object { z0: 0, z1: 125, tipo: "Punto" }
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
Desplaza la matriz en los ejes **X** e **Y** con los valores proporcionados.
``` JavaScript
const div_1 = document.querySelector('.div_1');
const div_2 = document.querySelector('.div_2');
const matrix_1 = new Matrix;

div_1.style.transform = matrix_1.str;

matrix_1.desplazar(200,200);
div_2.style.transform = matrix_1.str;
```
<p align="center"><a href="#"><img src="https://i.ibb.co/YkHk00L/m1.jpg" alt="imagen demo de matrix.desplazar"></a><p/>

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
<p align="center"><a href="#"><img src="https://i.ibb.co/YkHk00L/m1.jpg" alt="imagen demo de matrix.desplazar"></a><p/>

---
#### 🔸 inverso:
Calcula y devuelve una nueva matriz inversa de la matriz original.
``` JavaScript
const div_1 = document.querySelector('.div_1');
const div_2 = document.querySelector('.div_2');
const matrix_1 = new Matrix(0.7, -0.7, 0.7, 0.7, 200, 200);

div_1.style.transform = matrix_1.str;

const matrix_inversa = matrix_1.inverso();
div_2.style.transform = matrix_inversa.str;
```
<p align="center"><a href="#"><img src="https://i.ibb.co/hLP5XZP/m2.jpg" alt="imagen demo de matrix.inverso"></a><p/>

#### 🔸 fusionar:
Sustituye los valores de la `matriz A` por la combinacion de la `matriz A` con la `matriz B` de manera que aplica primero la transformación de la `matriz A` y luego la transformación de la `matriz B`.
``` JavaScript
const div_1 = document.querySelector('.div_1');
const div_2 = document.querySelector('.div_2');
const div_3 = document.querySelector('.div_3');
const matrix_1 = new Matrix(0.7, -0.7, 0.7, 0.7, 150, 150);
const matrix_2 = new Matrix(.5, 0, 0, .5, 50, 50);

div_1.style.transform = matrix_1.str;
div_2.style.transform = matrix_2.str;

div_3.style.transform = matrix_2.fusionar(matrix_1).str;
```
<p align="center"><a href="#"><img src="https://i.ibb.co/QvsgxDx/m3.jpg" alt="imagen demo de matrix.fusionar"></a><p/>

---
#### 🔸 resetear:
Restablece la matriz a una matriz de identidad y el desplazamiento a cero.
``` JavaScript
const div_1 = document.querySelector('.div_1');
const div_2 = document.querySelector('.div_2');

const matrix_1 = new Matrix(0.35, -0.35, 0.35, 0.35, 100, 0);
div_1.style.transform = matrix_1.str;

matrix_1.resetear()
div_2.style.transform = matrix_1.str;
```
<p align="center"><a href="#"><img src="https://i.ibb.co/fSgL193/m4.jpg" alt="imagen demo de matrix.resetear"></a><p/>

---
#### 🔸 copiar:
Copia los valores de otra matriz en la matriz original.
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
Crea y devuelve una copia de la matriz original.
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
console.log("punto original",punto_original.data);

const punto_mapeado = matrix_1.mapea(punto_original);
console.log("punto mapeado",punto_mapeado.data);
```
###### terminal:
```
punto original > Array [ 25 , 25 ]

punto mapeado > Array [ 50, -15 ]
```
---
#### 🔸 desMapea:
Aplica la transformación de la matriz a un punto en el plano.
``` JavaScript
const matrix_1 = new Matrix(0.7, -0.7, 0.7, 0.7, 50, -50);

const punto_mapeado = new Punto(50,-15);
console.log("punto mapeado" ,punto_mapeado.data);

const punto_original = matrix_1.desMapea(punto_mapeado);
console.log("punto original", punto_original.data);
```
###### terminal:
```
punto mapeado > Array [ 50, -15 ]

punto original > Array [ 25 , 25 ]
```

#### 🔸 esIgual:
Verifica si esta matriz es igual a otra matriz.
``` JavaScript
const matrix_1 = new Matrix(0.7, -0.7, 0.7, 0.7, 50, -50);
const matrix_2 = new Matrix(2, 0, 0, 2, 10, 10);
const matrix_3 = new Matrix(0.7, -0.7, 0.7, 0.7, 50, -50);

console.log("la matriz_1 es igual al a matriz_3 =" ,matrix_1.esIgual(matrix_3));

console.log("la matriz_1 es igual al a matriz_2 =" ,matrix_1.esIgual(matrix_2));
```
###### terminal:
```
la matriz_1 es igual al a matriz_3 = true

la matriz_1 es igual al a matriz_2 = false
```

#### 🔹 Propiedades:
``` JavaScript
const matrix_1 = new Matrix(0.7, -0.7, 0.7, 0.7, 50, -50);
matrix_1.m11 // 0.7: Valor de la posición (1,1) de la matriz.
matrix_1.m21 // -0.7: Valor de la posición (2,1) de la matriz.
matrix_1.m12 // 0.7: Valor de la posición (1,2) de la matriz.
matrix_1.m22 // 0.7: Valor de la posición (2,2) de la matriz.
matrix_1.dx // 50: Desplazamiento en el eje x.
matrix_1.dy // -50: Desplazamiento en el eje y.
```
<br/>
</details>

### Transformadores

Son un grupo de funciones que se utilizan para realizar transformaciones geométricas en un plano bidimensional, como rotaciones, escalas y zoom.
<details>
  <summary><em>Haz click para desplegar mas informacion...</em></summary> 

#### ⚙ rotar:

Realiza una rotación en el plano con el ángulo especificado alrededor del punto de pivote, manteniendo la precisión especificada.  
`rotar( grados , pivote , referencia , presicion = 3)`

- `grados`: El ángulo de rotación en grados.
- `pivote` _(opcional)_: El punto alrededor del cual se realiza la rotación.
- `referencia` _(opcional)_: Es el punto de referencia al cual el pivote afectara, puede usarse ` el centro del rect` al cual la matrix aplicara la transformacion.
- `presicion` _(opcional)_: La precisión decimal para redondear los resultados (por defecto es 3).

_Devuelve una instancia de `Matrix` que representa la transformación de rotación._
###### Ejemplo 1:

``` JavaScript
const div_1 = document.querySelector('.div_1');

let grados = 0;

window.addEventListener('wheel',e=>{
    grados += e.deltaY > 0 ? 1 : -1;
    const matrix = rotar(grados);
    div_1.style.transform = matrix.str;
});
```
<p align="center"><a href="#"><img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3NqczEzMjZkMmtzOW54MnZycWw1MXp1NWh0YndpOW82MW1ycDhzZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0GllHGGVWcF3C2njFB/source.gif" alt="demo 1 de Nauty-rotar"></a><p/>

###### Ejemplo 2:

``` JavaScript
const pos_global = new Punto(document.querySelector(".contenedor"),true);//solo para obtener la posicion global
const marcador = new Rect(document.querySelector(".marcador"),true);
const rect = new Rect(document.querySelector(".div_1"),true);

const pivote = new Punto(0,0);
marcador.posicionarPorElCentro(pivote);

let grados = 0;

window.addEventListener('wheel',e=>{
    grados += e.deltaY > 0 ? 1 : -1;
    const matrix = rotar(grados,pivote,rect.obtenerCentro());
    rect.nodo.style.transform = matrix.str;
});

window.addEventListener('click',e=>{
    console.info(e.clientX,e.clientY)
    pivote.x = e.clientX - pos_global.x;
    pivote.y = e.clientY - pos_global.y;
    marcador.posicionarPorElCentro(pivote);
});
```
<p align="center"><a href="#"><img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWE4cDZqazMzM3Z2ZmI1NmRuZ2locGtyMnJnM210ZTZndnN2bTdodCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cqcm4Ld6api3FmW6SB/source.gif" alt="demo 2 de Nauty-rotar"></a><p/>

---
#### ⚙ escala:

Realiza una escala en el plano bidimensional.  
`escala( escalaX , escalaY )`

- `escalaX`: El factor de escala en el eje x (por defecto es 1).
- `escalaY`: El factor de escala en el eje y (por defecto es 1).

_Devuelve una instancia de `Matrix` que representa la transformación de escala._
``` JavaScript
const div_1 = document.querySelector(".div_1");
const div_2 = document.querySelector(".div_2");
const div_3 = document.querySelector(".div_3");

const escala_1 = escala(1,1);
const escala_2 = escala(2,2);
const escala_3 = escala(3,3);

div_1.style.transform = escala_1.str;
div_2.style.transform = escala_2.str;
div_3.style.transform = escala_3.str;
```
<p align="center"><a href="#"><img src="https://i.ibb.co/ZVvJRXL/escala.jpg" alt="demo de Nauty-escala"></a><p/>

---

#### ⚙ zoom:

Realiza un zoom en el plano bidimensional.  
`zoom(distancia, foco = .01)`

- `distancia`: La distancia de zoom.
- `foco`: El factor de foco para el zoom (por defecto es 0.01).

> Aunque parezaca similar a `escala` la ventaja esta en que `zoom` aplica sus efectos de forma mas progresiva por  lo que es menos brusco que _escala_.

_Devuelve una instancia de `Matrix` que representa la transformación de zoom._
``` JavaScript
const div_1 = document.querySelector(".div_1");

let ampliacion = 0;

window.addEventListener('wheel',e=>{
    ampliacion += e.deltaY > 0 ? 1 : -1;
    const matrix = zoom(ampliacion);
    div_1.style.transform = matrix.str;
});
```
<p align="center"><a href="#"><img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWh6ZGh2YnByM2RndGo1MDY2cnNoNGducGk1czh4MWxoY3Y1bmZ1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9i9w1VIQ3tbmo5iO5K/source.gif" alt="demo de Nauty-zoom"></a><p/>


<br/>
</details>

### Funciones Cartecianas

Funciones para trabajar con puntos en un plano cartesiano, como la determinación de cuadrantes, cálculo de ángulos, longitudes y rotaciones.


<details>
  <summary><em>Haz click para desplegar mas informacion...</em></summary>

#### ▫ __cuadrante:
Constante que contiene valores numéricos para representar los cuadrantes de un plano cartesiano
``` JavaScript
__cuadrante.c1 // cuadrante 1 valor = 0x1
__cuadrante.c2 // cuadrante 2 valor = 0x2
__cuadrante.c3 // cuadrante 3 valor = 0x4
__cuadrante.c4 // cuadrante 4 valor = 0x8
__cuadrante.o  // centro/origen valor = 0
```
---
#### ⚙ obtenerCuadrante:

Encuentra el cuadrante cartográfico de un punto con respecto a un punto de referencia.  
`obtenerCuadrante(origen, punto)`

- `origen`: Punto de origen que actúa como el centro del plano cartesiano.
- `punto`: Punto a localizar en el cuadrante.

> Devuelve un valor numérico que representa el cuadrante del punto definido por la constante `__cuadrante`.
``` JavaScript
const origen = new Punto(0,0);
const punto  = new Punto(30,30);
const CUADRANTE = obtenerCuadrante(origen, punto)

if(__cuadrante.c1 == CUADRANTE){
    console.log('cuadrante 1 valor = 0x1');
}
else if(__cuadrante.c2 == CUADRANTE){
    console.log('cuadrante 2 valor = 0x2');
}
else if(__cuadrante.c3 == CUADRANTE){
    console.log('cuadrante 3 valor = 0x4');
}
else if(__cuadrante.c4 == CUADRANTE){
    console.log('cuadrante 4 valor = 0x8');
}
else{ //__cuadrante.o
    console.log('centro/origen valor = 0')
}
```
###### terminal:
```
cuadrante 4 valor = 0x8
```
<p align="center"><a href="#"><img src="https://www.geogebra.org/resource/FYATZx8k/kVD3PbXybQ7exuMj/material-FYATZx8k.png" alt="representacion de los cuadrantes de un plano carteciano"></a><p/>  

---

#### ⚙ obtenerPuntoMedio:

Obtiene el punto medio entre dos puntos dados.  
`obtenerPuntoMedio(puntoA, puntoB)`

- `puntoA`: Primer punto.
- `puntoB`: Segundo punto.

> Devuelve un [Punto](#punto) que representa el punto medio entre los dos puntos dados.
``` JavaScript
const puntoA = new Punto(100,100);
const puntoB = new Punto(200,200);
const puntoC  = obtenerPuntoMedio(puntoA,puntoB);

console.log("puntoA =",puntoA.data);
console.log("puntoB =",puntoB.data);
console.log("puntoC =",puntoC.data);
```
###### terminal:
```
puntoA = > Array [ 100, 100 ]

puntoB = > Array [ 200, 200 ]

puntoC = > Array [ 150, 150 ]
```
---
#### ⚙ obtenerPendiente

Obtiene la pendiente entre dos puntos dados.  
`obtenerPendiente(puntoA, puntoB)`

- `puntoA`: Primer punto.
- `puntoB`: Segundo punto.

> Devuelve el valor de la pendiente.
<p align="center"><a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgyXWDXnkgeQRUUzYwmXral32XMaFVEe0Ae-tIlZ3PNQ&s" alt="formula de la pendiente entre dos puntos"></a><p/>

#### ⚙ obtenerLongitud:

> Retorna la longitud que existe entre dos puntos.  
`obtenerLongitud(ancla, punto)`

- `ancla`: El punto de referencia.
- `punto`: El punto de destino.

> Devuelve la longitud entre los dos puntos.
``` JavaScript
const puntoA = new Punto(100,100);
const puntoB = new Punto(200,200);
const longitud  = obtenerLongitud(puntoA,puntoB);

console.log("la distancia entre A y B es: ",longitud);
```
###### terminal:
```
la distancia entre A y B es:  141.4213562373095
```
---
#### ⚙ obtenerAngulo:

Obtiene el ángulo entre dos puntos.  
`obtenerAngulo(origen, punto)`

- `origen`: El punto de referencia.
- `punto`: El punto de destino.

> Devuelve el ángulo entre los dos puntos.
``` JavaScript
const origen = new Punto(100,100);
const puntoA = new Punto(200,200);
const angulo  = obtenerAngulo(origen,puntoA);

console.log("el angulo del puntoA con respecto al origen es: ",angulo);
```
###### terminal:
```
el angulo del puntoA con respecto al origen es:  315
```
---
#### ⚙ BezierLineal:`

Obtiene el punto en la línea formada por los dos puntos dados a partir de una tolerancia.  
`BezierLineal(puntoA, puntoB, tolerancia)`

- `puntoA`: Primer punto.
- `puntoB`: Segundo punto.
- `tolerancia`: La tolerancia debe ser de **0** a **1**.

> Devuelve un [Punto](#punto) en la línea.

``` JavaScript
const rect = new Rect(document.querySelector(".div_1"),true);
const pin_1 = new Rect(document.querySelector(".pin_1"),true);
const pin_2 = new Rect(document.querySelector(".pin_2"),true);

const puntoA = new Punto(-50,-50);
const puntoB = new Punto(400,300);
pin_1.posicionarPorElCentro(puntoA);
pin_2.posicionarPorElCentro(puntoB);

const unidad = puntoB.y - puntoA.y;
let recorrido = 0;

rect.posicionarPorElCentro(puntoB);

window.addEventListener('wheel',e=>{
    recorrido += e.deltaY ? 1 : -1;
    let tolerancia = Math.abs((unidad - recorrido)/unidad);
    
    if(tolerancia > 1){
        recorrido = 0;
        tolerancia = 1};

    const p = BezierLineal(puntoA,puntoB,tolerancia);
    rect.posicionarPorElCentro(p);
});
```
<p align="center"><a href="#"><img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYngzcHduaHJkaml3cXN3cHNzYXMzcDk2aWNvMmR1eWxzZGR0MmR5aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTO7TBBmsqwrE2Kq0x/source.gif" alt="demo Nauty - BezierLineal"></a><p/>

---

#### ⚙ obtenerPuntoRotado:

Devuelve la posición del punto rotado a partir del punto ancla como referencia.  
`obtenerPuntoRotado(origen, punto, angulo)`

- `origen`: Punto de referencia.
- `punto`: Punto que será rotado a partir de la referencia.
- `angulo`: Ángulo de rotación en el rango de 0 a 360 grados.

> Devuelve el [Punto](#punto) rotado.
``` JavaScript
const rect = new Rect(document.querySelector(".div_1"),true);
const pin_1 = new Rect(document.querySelector(".pin_1"),true);
const pin_2 = new Rect(document.querySelector(".pin_2"),true);

const puntoA = new Punto(100,100);
const puntoB = new Punto(250,250);

pin_1.posicionarPorElCentro(puntoA);
pin_2.posicionarPorElCentro(puntoB);

rect.posicionarPorElCentro(puntoA);

let grados = 0;

window.addEventListener('wheel',e=>{
    grados += e.deltaY ? 1 : -1;

    const p = obtenerPuntoRotado(puntoB,puntoA,grados);
    rect.posicionarPorElCentro(p);
    pin_1.posicionarPorElCentro(p);
});
```
<p align="center"><a href="#"><img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjZrZGM2MHZ6bTk2ZmMzYTJmeDE1dmRxdmlmM2kwd21mb2dlZzBubiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RLvh0SRTWPoQn951Cv/source.gif" alt="demo Nauty - obtenerPuntoRotado"></a><p/>

---

#### ⚙ aRadial

Convierte los grados a radianes.  
`aRadial(grados)`

- `grados`: Ángulo en grados.

> Devuelve el valor en radianes.

#### ⚙ aGrados

Convierte los radianes a grados.  
`aGrados(radial)`

- `radial`: Valor en radianes.

> Devuelve el valor en grados.

#### ⚙ rectificarAngulo

Corrige el rango del ángulo si es mayor o menor a sus límites: 0 - 360.  
`rectificarAngulo(angulo)`

- `angulo`: Ángulo a rectificar.

> Devuelve el ángulo corregido.


<br/>
</details>

###### *Todos los personajes presentados en esta librería fueron diseñados y creados por mí ~ [Neko ★ Shooter.](https://github.com/NekoShooter)*