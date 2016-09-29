Desplegando un libro en Gitbook
-------------


>- #### primary:: Instalación y Despliegue de Gitbook

> 
```
npm init
npm install -g gitbook-cli --save
gitbook init
```

> En el directorio de gitbook se crearán los archivos: 
>- **README.md** que contiene la introducción al libro.
>- **SUMMARY.md** cuyo funcionamiento es de una tabla de contenido.

> Puede existir también un directorio */txt* o */docs*, por ejemplo, que puede contener otros archivos
markdown como capítulos de su libro.
>Estos archivos deben ser actualizados en la tabla de contenido del fichero SUMMARY.md.

> Ejemplo del archivo SUMMARY.md
>
```
# Indice
Este es el indice de nuestro gitbook.
* [Nodejs](section1/nodejs.md)
    * [Comando npm](section1/npm.md)
    * [Expressjs](section1/expressjs.md)
    * [Fichero package.json](section1/packagejson.md)
```


> A continuación se genera gitbook y también la wiki con el siguiente comando,
que invoca a los scripts ***"generate-gitbook"*** y ***"gerenate-wiki"***.
>
```
npm run build
# or
# npm run generate-gitbook && npm run generate-wiki
```

> Seguidamente se ejecutará el comando que invocará a los scripts ***"deploy-gitbook"*** 
y ***"deploy-wiki"*** encargados de la construcción del libro.
>
```
npm run deploy
# or
# npm run deploy-gitbook && npm run deploy-wiki
```

> **Nota:** Es importante crear primero la Wiki del repositorio en Github.


> Con el siguiente comando Gitbook le permite probar su libro antes de subirlo a la web:
>
```
$ gitbook serve 
```