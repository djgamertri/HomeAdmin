# Home Admin

Proyecto para un Conjunto Residencial

Importante los archivos .GitKeep son simplemente archivos que sirven para rastrear carpetas que por el momento se encuentran vacias

## Como hacer un pull request o Push

Primero debes hacer comentarios de cada uno de los archivos creados por separado 

NO HACER `Git add .` seguido de un `Git commit -m "Cambios"` a menos de que los archivos mantegan una relacion muy similar

Asegurate de estar haciendo los cambios en la rama correcta, para cambiar de rama 

- Ejecuta el comando `Git checkout <Rama>`

Si deseas crear una nueva (Solo si esta aprobado por los demas miembros) 

- Ejecuta el comando `Git Checkout -b <Rama>`

Si deseas sabes cuales son los archivos modificados 

- Ejecuta el comando `Git status`

!Esto hacerlo por cada archivo creado y/o modificado

- Ejecuta el comando `Git add <Archivo con cambios>`
- Ejecuta el comando `Git commit -m "<Descripcion de los cambios hechos>"`

Una vez hecho esto por cada archivo creado y/o modificado

- Ejecuta el comando `Git push -u origin <rama>`

## Organización y reglas de proyecto

Durante todo el proyecto usaremos la estructura CamelCase.

El proyecto se divide en dos carpetas:
- [FrontEnd](/FrontEnd/): Contiene la interfaz visual del proyecto, lo que significa que NO habrá conexión directa con la base de datos.

- [BackEnd](/BackEnd/): Contiene toda la lógica de la empresa, junto con la conexión a la base de datos del proyecto.

## Front End

- View - Archivos Finales que seran mostrados al usuario

- Css - Archivos de Estilos

- Assets - Todas las partes de codigo reusables

- Index - Iniciador del proyecto

## Back End

- db - Archivos de configuracion para la conexion con la base de datos
- Node_Modules - Dependencias necesarias para el proyecto
- src - Recursos de la API
    - Controllers - Archivos donde se econtraran las funciones de alguna tarea
    - Routes - Todos los puntos de acceso o EndPoints para hacer uso de la API
    - index.js - Inicializacion de la API

## Herramientas necesarias

Asegúrate de tener las siguientes herramientas instaladas antes de comenzar:

1. [Node.js](https://nodejs.org/en): Es necesario para ejecutar el BackEnd.
2. [XAMPP](https://www.apachefriends.org/es/index.html): Es necesario para ejecutar los archivos .php.
3. [MySQL Workbench/Shell](https://www.mysql.com/downloads/): Es necesario para hacer uso de la base de datos.

## Instalación del proyecto

Sigue estos pasos para instalar el proyecto:

1. Clona este repositorio: `git clone https://github.com/djgamertri/HomeAdmin.git`.
3. Ejecuta en la terminal el comando `git checkout <Rama>`
2. Ve al directorio del proyecto.
3. Crea la base de datos utilizando el código [Home Admin](HomeAdmin.sql).
4. Navega hasta el directorio [BackEnd](/BackEnd/).
5. Ejecuta el comando `npm install` para instalar las dependencias del BackEnd.

## ¿Se realizaron cambios y no cuentas con ellos?

Ejecuta en la terminal el comando `git pull <La rama la cual deseas descargar los cambios>`
