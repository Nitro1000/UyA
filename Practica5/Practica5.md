# UyA - PE102 - PRÁCTICAS y SEMINARIOS
## Grupo 7: Jefry Izquierdo, Milton Daniel Rivas Quintero, Juan Carlos Vega Beltrán


## Práctica 5: [Introducción JavaScript](https://nitro1000.github.io/UyA/Practica5/)

**Ficheros del directorio**
  - [index.html]( ): Índice de la página WEB
  - [CSS/]( ): Carpeta con los ficheros de **estilo**
  - [img/]( ): Carpeta con las **imágenes** de la página

**Link página WEB**: https://nitro1000.github.io/UyA/Practica5/
1. tabla describiendo el propósito de las funciones javascript

|Funciones Javascritp                       | Propósito    |                                   
|  :------:                                 | -----------  |                                
| document.getElementById(**id**)           | Devuelve una referencia al elemento por su **id**. Donde **id** es una cadena sensible a mayúsculas referida al ID único del elemento buscado. El valor retornado por la función es una referencia a un objeto Element, o null si un elemento con el ID especificado no se encuentra en el documento.|
| document.getElementsByTagName(**name**)   | Sirve para seleccionar elementos con un nombre de etiqueta determinado. Este método acepta un nombre de etiqueta (**name**) y devuelve un objeto  *HTMLCollection* (conjunto de elementos) con el nombre de etiqueta correspondiente en el orden en que aparecen en el documento.  |
| document.getElementsByClassName(**name**) | El método devuelve una colección de todos los elementos en el documento con el nombre de clase especificado (**name**), como un objeto *HTMLCollection*. El objeto *HTMLCollection* representa una colección de nodos. Se puede acceder a los nodos por números de índice. El índice comienza en 0. |


| element.innerHTML = new html content    | .........    |
| element.attribute = new value           | .........    |
| element.style.property = new style      | .........    |
| element.setAttribute(attribute, value)  | .........    |
| document.createElement(element)         | .........    |
| document.removeChild(element)           | .........    |
| document.appendChild(element)           | .........    |
| document.replaceChild(new, old)         | .........    |
| document.write(text)                    | .........    |
| document.getElementById(id).onclick = function(){code}      | .........    |


2. Realiza un esquema del árbol DOM que genera el código HTML en el fichero enlazado

3. Define una función en javascript en la que se pueda calcular el cambio entre diferentes monedas (al menos 3 diferentes).

4. Define una función javascript que calcule la edad de los usuarios, y su sueldo. Debes considerar un json de ejmplo con los datos, en el que se registra para cada usuario su dni, año de nacimiento, fecha de ingreso en la empresa, plus de productividad en %, plus de antigüedad bruto (0,1% por cada tres años trabajado) y el sueldo base. (El json debe estar en el propio código, inicializando una variable, explica por qué se te exige este requisito).

5. Crear un script que muestre un informe de la cantidad de párrafos, enlaces y encabezados en tu página de inicio.
