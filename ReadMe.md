# Home Admin - Back End

En este ReadMe solo se encontraran los cambios realizados en la parte BackEnd mas adelante encontrara el link a el FrontEnd


Importante los archivos .GitKeep son simplemente archivos que sirven para rastrear carpetas que por el momento se encuentran vacias

## Como hacer un pull request o Push

Primero debes hacer comentarios de cada uno de los archivos creados por separado 

NO HACER `Git add .` seguido de un `Git commit -m "Cambios"` a menos de que los archivos mantegan una relacion muy similar

!Esto hacerlo por cada archivo creado y/o modificado

- Ejecuta el comando `Git add <Archivo con cambios>`
- Ejecuta el comando `Git commit -m "<Descripcion de los cambios hechos>"`

## Organización y reglas de proyecto

Durante todo el proyecto usaremos la estructura CamelCase.

El proyecto se divide en dos carpetas:
- [FrontEnd](/FrontEnd/): Contiene la interfaz visual del proyecto, lo que significa que NO habrá conexión directa con la base de datos.

- [BackEnd](/BackEnd/): Contiene toda la lógica de la empresa, junto con la conexión a la base de datos del proyecto.

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
3. Ejecuta en la terminal el comando `git checkout BackEnd`
2. Ve al directorio del proyecto.
3. Crea la base de datos utilizando el código [Home Admin](HomeAdmin.sql).
4. Navega hasta el directorio [BackEnd](/BackEnd/).
5. Ejecuta el comando `npm install` para instalar las dependencias del BackEnd.

## ¿Se realizaron cambios y no cuentas con ellos?

Ejecuta en la terminal el comando `git pull <La rama la cual deseas descargar los cambios>`