
Package.json
-------------

Archivo para gestionar los paquetes npm instalados localmente. 

> - Sirve como documentación para los paquetes de los cuales depende nuestro proyecto.
> - Permite especificar las versiones de un determinado paquete.
> - Manera más fácil para compartir con otros desarrolladores.


>- #### primary::Creación de un **package.json**

> Crear el archivo package.json mediante un cuestionario desde línea de comandos que concluirá con la creación del archivo en el directorio en el cual se haya iniciado el comando.

> 
```bash
$ npm init 
```

> Los campos que se incluirán en el archivo son los siguientes:


> - **name:** Por defecto a menos que el nombre del autor en un gitdirectorio, en cuyo caso será el nombre del repositorio
> - **version:** siempre 1.0.0
> - **main:** siempre el index.js
> - **scripts:** Por defecto se crea vacío, pueden incluirse scripts que pueden ejecutarse con el comando npm.
> - **keywords:** Palabras claves.
> - **author:** Lo que nos ha facilitado la CLI
> - **license:** ISC
> - **repository:** Se tire en la información del directorio actual, si está presente
> - **bugs:** Se tire en la información del directorio actual, si está presente
> - **homepage:** Se tire en la información del directorio actual, si está presente

<hr />

>- #### primary::Especificación de paquetes 

> Es necesario listar los paquetes que se desean utilizar en el proyecto en el archivo.
> Hay dos tipos de paquetes que se pueden listar:

> - "dependencies": Paquetes necesarios para la ejecución de la aplicación.
> - "devDependencies": Paquetes necesarios para el desarrollo del proyecto y para las pruebas del mismo.

<hr />

>- #### primary::Ejemplo de archivo "package.json"
>
```json
{
  "name": "gitbook-boilerplate",
  "version": "0.0.1",
  "description": "GitBook Boilerplate",
  "main": "index.js",
  "scripts": {
    "generate-gitbook": "./scripts/losh generate-gitbook",
    "generate-wiki": "./scripts/losh generate-wiki",
    "build": "npm install && npm i gitbook-cli && npm run generate-gitbook && npm run generate-wiki",
    "deploy-gitbook": "./scripts/losh deploy-gitbook",
    "deploy-wiki": "./scripts/losh deploy-wiki",
    "deploy": "npm run build && npm run deploy-gitbook && npm run deploy-wiki",
    "version": "./scripts/losh version",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/ULL-ESIT-SYTW-1617/tareas-iniciales-josue-nayra.git",
    "wiki": "https://github.com/ULL-ESIT-SYTW-1617/tareas-iniciales-josue-nayra.wiki.git"
  },
  "keywords": [
    "gitbook",
    "boilerplate",
    "starter"
  ],
  "author": "Nayra Rodriguez-Josue Toledo",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/ULL-ESIT-SYTW-1617/tareas-iniciales-josue-nayra/issues"
  },
  "homepage": "https://github.com/ULL-ESIT-SYTW-1617/tareas-iniciales-josue-nayra#readme",
  "devDependencies": {
    "async": "^1.4.0",
    "fs-extra": "^0.22.1",
    "gh-pages": "^0.3.1",
    "gitbook-cli": "^0.3.4",
    "gitbook": "^2.1.0"
  }
}
```