# Práctica 1. Sistemas y Tecnologías Web

## Tareas Iniciales. JavaScript. NodeJS. Gulpfile. Gitbook


### Integrantes

> Josué Toledo Castro   
>[Github](https://github.com/JosueTC94)

> María Nayra Rodríguez Pérez   
>[Github](https://github.com/alu0100406122)


### Libro en Gitbook

[Despliege del libro en gh-pages](https://ull-esit-sytw-1617.github.io/tareas-iniciales-josue-nayra/)
[Despliegue del libro en gitbook](https://josuetc94.gitbooks.io/practica1_sytw1617_tareasiniciales/content/)


### Campus de la asignatura

[Enlace al campus virtual](https://campusvirtual.ull.es/1617/course/view.php?id=1175)



### Requisitos

> 1.- Deberá de desplegar su libro en gh-pages

> 2.- Deberá de desplegar su libro en GitBook

> 3.- Añada un Gulpfile con tareas que automaticen la construcción y despliegue del libro en los diferentes sites

> 4.- Utilizar los issues de GitHub para indicar las incidencias, problemas y progresos del proyecto

> 5.- Use algun GitBook Plugin en sus apuntes 



### GitBook Boilerplate 


#### Installation

```shell
cd ~/code

git clone https://github.com/enten/gitbook-boilerplate.git awesome-project

cd awesome-project

rm -fr .git

vi package.json
# edit repository.url and repository.wiki

git remote add origin <url>

npm run build
# or
# npm run generate-gitbook && npm run generate-wiki

npm run deploy
# or
# npm run deploy-gitbook && npm run deploy-wiki
```
__Important__: Wiki must be created on Github
