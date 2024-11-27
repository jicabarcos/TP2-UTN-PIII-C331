TP 2 - Programación III

Juan Ignacio Cabarcos

-----------------------

La API permite insertar, obtener, modificar y eliminar registros para las entidades Películas y Directores, que tienen una relación de 1:N, pudiendo un mismo director estar vinculado a múltiples películas.

Para poder correr el proyecto localmente es necesario estar ubicado en la carpeta src y ejectuar el comando "npm i" para instalar las dependencias necesarias y posteriormente el comando "npm start" para que la API inicie (puerto 3030).

Para generar la DB se deberá correr el script "db_creation.sql", para realizar la primera carga de datos que permitan probar todos los endpoints, se deberá correr el script "db_seed.sql".

Para realizar las pruebas utilizando ThunderClient, importar el archivo "thunderclient-collection.json", que es la colección de requests a cada uno de los endpoints con ejemplos.