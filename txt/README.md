# Práctica 3. Sistemas y Tecnologías Web

## Despliegues en IASS y Heroku


### Descripción


El objetivo de esta práctica es proporcionar un mecanismo de despliegue de un libro gitbook de manera que un deploy a github produzca la actualización automática de los otros sites de despliegue:
- **gitboook.com**
- **Heroku**
 
Para sincronizar con **iaas.ull.es** se dispone de un script que utiliza ssh para actualizar los ficheros necesarios al repositorio del libro en la máquina virtual.

Ejemplo de ssh:

```bash
    $ ssh sytw 'cd src/express-start; git ls-files'
```

En este ejemplo nos conectamos a la máquina "sytw" y ejecutamos en la misma un comando que nos posiciona en el directorio adecuado y llama al comando git.
Previamente se ha realizado un alias de la IP a "sytw" configurando el archivo **~/.ssh/config**

Si se tiene establecida una pareja de claves SSH privada-pública entre la máquina de desarrollo (que se supone en la red de la ULL) y la máquina virtual, es posible usar ssh para conectarse a la máquina virtual y hacer un git pull en el directorio adecuado.

Esta tarea se ha automatizado en el **gulpfile.js** mediante la task: **"actualizando_iaas"**



### Despliegue

[Libro en gh-pages](https://ull-esit-sytw-1617.github.io/practica-despliegues-en-iaas-y-heroku-josue-nayra/)

[Libro en gitbook](https://josuetc94.gitbooks.io/practica3-sytw1617/content/)

[IASS](10.6.128.176)

[Heroku](https://p3-josue-nayra.herokuapp.com/)



### Campus de la asignatura

[Enlace al campus virtual](https://campusvirtual.ull.es/1617/course/view.php?id=1175)

[Enlace a la descripción de la práctica](https://crguezl.github.io/ull-esit-1617/practicas/practicaiaas.html)



### Integrantes

> Josué Toledo Castro   
>[Github](https://github.com/JosueTC94)

> María Nayra Rodríguez Pérez   
>[Github](https://github.com/alu0100406122)




