# UyA - PE102 - PRÁCTICAS y SEMINARIOS
## Grupo 7: Jefry Izquierdo, Milton Daniel Rivas Quintero, Juan Carlos Vega Beltrán


## Práctica 5: [Introducción JavaScript](https://nitro1000.github.io/UyA/Practica5/)

**Ficheros del directorio**
  - [Arbol DOM UyA Practica 5.pdf](https://github.com/Nitro1000/UyA/blob/master/Practica5/Arbol%20DOM%20UyA%20Practica%205.pdf)
  - [Arbol DOM UyA Practica 5.png](https://github.com/Nitro1000/UyA/blob/master/Practica5/Arbol%20DOM%20UyA%20Practica%205.png)
  - [Practica5.md](https://github.com/Nitro1000/UyA/blob/master/Practica5/Practica5.md): Este fichero con el contenido de la Práctica 5

**Link página WEB**: https://nitro1000.github.io/UyA/Practica5/

**1. tabla describiendo el propósito de las funciones javascript**

|Funciones Javascript                      | Propósito    |                                   
|  :------:                                 | -----------  |                                
| document.getElementById(**id**)           | Devuelve una referencia al elemento por su **id**. Donde **id** es una cadena sensible a mayúsculas referida al ID único del elemento buscado. El valor retornado por la función es una referencia a un objeto Element, o null si un elemento con el ID especificado no se encuentra en el documento.|
| document.getElementsByTagName(**name**)   | Sirve para seleccionar elementos con un nombre de etiqueta determinado. Este método acepta un nombre de etiqueta (**name**) y devuelve un objeto  *HTMLCollection* (conjunto de elementos) con el nombre de etiqueta correspondiente en el orden en que aparecen en el documento.  |
| document.getElementsByClassName(**name**) | El método devuelve una colección de todos los elementos en el documento con el nombre de clase especificado (**name**), como un objeto *HTMLCollection*. El objeto *HTMLCollection* representa una colección de nodos. Se puede acceder a los nodos por números de índice. El índice comienza en 0. |
| element.innerHTML = new html content    | La propiedad *element.innerHTML* devuelve o establece la sintaxis HTML describiendo los descendientes del elemento. Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva. Cuando se establece el valor de *innerHTML*, se eliminan todos los descendientes de element, analiza la cadena htmString y asigna los nodos resultantes como descendientes de *element*.|
| element.attribute = new value           | La propiedad *element.attributes* retorna una colección "viva" cuyos nodos son todos los atributos registrados en el nodo especificado. Es un *NamedNodeMap*, no un Array, así que no tiene los métodos de Array y los índices de nodo Attr pueden diferir en cada navegador. Más concretamente attributes es un conjunto de pares de cadenas nombre/valor que representan la información relativa a cada atributo.    |
| element.style.property = new style      | La propiedad de estilo (*element.style*) devuelve un objeto CSSStyleDeclaration, que representa el atributo de estilo de un elemento. La propiedad de estilo se usa para obtener o establecer un estilo específico de un elemento usando diferentes propiedades CSS. *i.e.*: element.style.backgroundColor = "red";   (Define el color de fondo de un elemento a "rojo")   |
| element.setAttribute(**attribute**, **value**)  | Establece el valor (*value*) de un atributo (*atribute*) en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado. Para obtener el valor actual de un atributo, se utiliza *getAttribute()*; para eliminar un atributo, se llama a *removeAttribute()*.  Los parámetros de esta función son **name** y **value** ambos son *DOMString* e indican el nombre del atributo cuyo valor se va a cambiar y el el valor que asignar al atributo respectivamente|
| document.createElement(**element**)         | En el documento HTML, document.createElement () es un método utilizado para crear el elemento HTML. Se crea el elemento especificado usando elementName o se crea un elemento HTML desconocido si no se reconoce el elementName especificado. **Sintaxis**: var elemento = *document.createElement (**element**)*; donde, **element** se pasa como parámetro y especifica el tipo del elemento creado. El *nodeName* del elemento creado se inicializa con el valor **element**. *Document.createElement ()* devuelve el elemento recién creado. |
| document.removeChild(**element**)           | El método *removeChild()* en HTML DOM se usa para eliminar un nodo secundario especificado del elemento dado. Devuelve el nodo eliminado como un objeto de nodo o nulo si el nodo no existe. Este método acepta parámetros únicos secundarios que son obligatorios. Representa el nodo que debe eliminarse.|
| document.appendChild(**element**)           | Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado. Si el hijo (**element**) es una referencia (hace referencia) hacia un nodo existente en el documento actual, este es quitado del padre actual para ser puesto en el nodo padre nuevo. La clave está en si el **element** (Child) es una referencia a un nodo existente en el documento. |
| document.replaceChild(**new**, **old**)         | El método *replaceChild()* reemplaza un nodo secundario (**old**) con un nuevo nodo (**new**). El nuevo nodo podría ser un nodo existente en el documento, o puede crear un nuevo nodo. Se suele usar este método para eliminar un nodo hijo de un elemento.|
| document.write(**text**)                    | Este método escribe expresiones HTML o código JavaScript en un documento. El método *document.write()* se usa principalmente para las pruebas: si se usa después de que un documento HTML está completamente cargado, eliminará todo el HTML existente. Cuando este método no se usa para probar, a menudo se usa para escribir texto en una secuencia de salida abierta por el método *document.open()*.  |
| document.getElementById(**id**).onclick = function(){code}      | Con este método definimos la acción que se va a realizar  ("*function()*") al hacer click la referencia devuelta al elemento por su **id**  |




**2. Realiza un esquema del árbol DOM que genera el código [HTML en el fichero enlazado](https://campusvirtual.ull.es/1920/pluginfile.php/258285/mod_assign/intro/dom.html)**

![**ÁRBOl DOM**](https://github.com/Nitro1000/UyA/blob/master/Practica5/Arbol%20DOM%20UyA%20Practica%205.png)

3. Define una función en javascript en la que se pueda calcular el cambio entre diferentes monedas (al menos 3 diferentes).

4. Define una función javascript que calcule la edad de los usuarios, y su sueldo. Debes considerar un json de ejmplo con los datos, en el que se registra para cada usuario su dni, año de nacimiento, fecha de ingreso en la empresa, plus de productividad en %, plus de antigüedad bruto (0,1% por cada tres años trabajado) y el sueldo base. (El json debe estar en el propio código, inicializando una variable, explica por qué se te exige este requisito).

5. Crear un script que muestre un informe de la cantidad de párrafos, enlaces y encabezados en tu página de inicio.
