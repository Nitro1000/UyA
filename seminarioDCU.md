# UyA - PE102
## Grupo 7: Milton Daniel Rivas Quintero, Juan Carlos Vega Beltrán
## Seminario DCU:  


1. **Tareas que se llevarán a cabo en la fase de investigación** 
  -  Analizar a qué tipos de usuarios va dirigido el proyecto.
  -  Descubrir características comunes entre los usuarios.
  -  ¿Qué tareas realizan los usuarios para encontrar la información que necesitan?
  -  Definir las personas y escenarios donde los usuarios utilizarán la aplicación.


2. **Diseño conceptual de la aplicación "Banco de Tiempo"**



3. **Personajes y perfiles de usuario.**

  - **Usuario adulto**: Será el usuario más común. Es el que sostiene la comunidad mediante  mediante la realización de tareas o solicitud de servicios
  - **Usuario tutelado**: Los usuarios menores de edad podrán realizar tareas en la comunidad siempre que alguno de sus tutores (cada usuario menor tendrá uno o dos tutores con perfil de usuario adulto, generalmente los padres) les autorice a realizar dichas tareas. Este tipo de usuario tendrá limitado el número de horas semanales dedicado a realizar tareas.
  - **Administrador**: El administrador llevará a cabo las tareas típicas de mantenimiento, actualizaciones, resolución de problemas técnicos, etc
  - **Gestor**: Usuarios  con privilegios, está autorizados para banear a otros usuarios que realicen actividades no autorizadas o ilícitas dentro de la aplicación (pornografía, fraude, etc), resolución de disputas entre usuarios, etc

  

4. **Especificación de requisitos**

  - Requisitos Funcionales:
    1. **Registro**: La APP dispondrá de un sistema de registro que solicitará: nombre de usuario, email, edad y número de teléfono (obligatorio para los usuario mayores de edad).
    2. **Verificación de Usuario**:se necesita saber los datos del usuario y así mostrar información relevante dependiendo del tipo de usuario que sea. Por ejemplo si fuera un usuario tutelado sólo se mostrarán trabajos que puedan realizar menores de edad o que sus tutores están de acuerdo que ellos realicen.
    3. **Cuenta de timecoins**: al registrarse el usuario se le asignará una cuenta en el Banco de Tiempo donde podrá ver y gestionar el  tiempo que ha ganado.
    4. **Catálogo de servicios**: Existirá un catálogo de servicios que se pueden prestar a la comunidad, agrupados por secciones de afinidad.
    5. **Pasarela de pago interna**: Se emulará una pasarela de pago para gestionar la contratación de servicios y “pagar” con cargo a la cuenta correspondiente del Banco de tiempo.
    6. **Gestor de trámites**: Habrá una serie de formularios online “adhoc” para gestionar los diversos trámites inherentes a este tipo de plataformas: reclamaciones, solicitudes, cancelación de cuenta, tutela de menores no parentales, etc
    7. **Buscador**: la aplicación debe contar con un buscador para que al momento de buscar algún tipo de trabajo se pueda filtrar entre los distintos tipos que hay.
  - Requisitos no Funcionales:
    1. **Rendimiento**: a la hora de buscar en la aplicación esta debe ser lo suficientemente rápida para mostrar los resultados a los usuarios en un tiempo reducido.
    2. **Fiabilidad**: los datos de los usuarios deben estar correctos y seguros en todo momento para que asi la busqueda de trabajos o la solicitud de servicios sea fiable y no se produzcan posibles errores.
    3. **Interfaz de usuario**: Cuadro de mandos intuitivo. Para que cualquier persona sea capaz de usar la aplicación sin necesidad de conocimientos previos. Mínimo de pantalla de 5 pulgadas. A partir de este tamaño la app será escalable.
