# Práctica 3. Sistemas y Tecnologías Web

## Despliegues en IAAS y Heroku


### Descripción


El objetivo de esta práctica es proporcionar un mecanismo de despliegue de un libro gitbook de manera que un deploy a github produzca la actualización automática de los otros sites de despliegue:
- **gitboook.com**
- **Heroku**
 


### Desplegando en el IAAS

Para desplegar en este servidor debemos realizar los siguientes pasos:

1.- Configurar una **pareja de claves** SSH privada-pública.

```bash
$ ssh-keygen -t rsa -f iaas 
```
2.- Copiamos la clave pública en la máquina del IAAS. De este modo, cuando intentemos actualizar nuestro gitbook en el IAAS, no se nos exigirá introducir un usuario y un password.

```bash
$ scp ~/.ssh/iaas <usuario>@<ip_maquina_iaas>:~/.ssh/
```

Además, podemos configurar en nuestra máquina local un alias de la IP del IAAS con la que queremos realizar la conexión:

```
Host sytw
HosName 10.6.128.176
User usuario
Port 22
IdentityFile ~/.ssh/id_rsa
```

De este modo, si ejecutamos el siguiente comando conectaremos directamente a través de ssh con nuestra máquina:

```
$ ssh sytw
```

3.- Una vez controlado el acceso a la máquina, nos conectamos y **clonamos el repositorio** dónde se encuentra nuestro gitbook:

```bash
    $ ssh sytw 'cd src/sytw/practica-despliegues-en-iaas-y-heroku-josue-nayra; git clone <url del repositorio>'
```

4.- Para actualizar nuestro gitbook en **iaas.ull.es**, se dispone de un script (archivo upload_iaas dentro del directorio scripts/), que utiliza ssh para actualizar los ficheros necesarios al repositorio del libro en la máquina virtual.

```bash
    $ ssh sytw 'cd src/sytw/practica-despliegues-en-iaas-y-heroku-josue-nayra; git pull origin master'
```

La ejecución de este script se ha automatizado en la tarea dispuesta en el gulpfile denominada "actualizando_iaas".

5.- Para poder visualizar correctamente nuestro gitbook alojado en la máquina IAAS a través de un navegador web, debemos configurar el puerto en el fichero app.js
Por defecto, se ha considerado el puerto 80.

```javascript
app.set('port', process.env.PORT || 80);
```


### Desplegando en Heroku

Para desplegar en este servidor debemos realizar los siguientes pasos:

1.- Nos autenticamos.

```bash
$ heroku login
```

2.- Creamos una nueva aplicación.

```bash
$ heroku create <nombre_app>
```

3.- Añadimos los cambios

```bash
$ git add .
$ git commit -m "Deploy to Heroku"
$ git push heroku master
```

También se ha configurado una tarea en el gulpfile para el despliegue en Heroku.

```javascript
gulp.task('deploy-heroku', function(){
   return gulp.src('').pipe(shell([
       'git add .'+
       ';'+
       'git commit -m "Deploy to Heroku"'+
       ';'+
       'git push heroku master'
       ])) 
});
```

5.- No obstante, si queremos que se produzca una actualización automática de Heroku cada vez que actualicemos el repositorio en Github, 
debemos sincronizar la aplicación con el mismo estableciendo un webhook en los settings.



### Despliegue

[Libro en gh-pages](https://ull-esit-sytw-1617.github.io/practica-despliegues-en-iaas-y-heroku-josue-nayra/)

[Libro en gitbook](https://josuetc94.gitbooks.io/practica3-sytw1617/content/)

[IAAS](10.6.128.176)

[Heroku](https://p3-josue-nayra.herokuapp.com/)



### Campus de la asignatura

[Enlace al campus virtual](https://campusvirtual.ull.es/1617/course/view.php?id=1175)

[Enlace a la descripción de la práctica](https://crguezl.github.io/ull-esit-1617/practicas/practicaiaas.html)



### Integrantes

> Josué Toledo Castro   
>[Github](https://github.com/JosueTC94)

> María Nayra Rodríguez Pérez   
>[Github](https://github.com/alu0100406122)
