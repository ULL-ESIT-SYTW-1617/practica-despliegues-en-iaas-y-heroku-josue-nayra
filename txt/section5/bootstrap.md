Plugin Bootstrap!
===================

Este plugin permite introducir ventanas o llamadas que resaltan bloques de contenido siguiendo tres tonalidades(negro, sepia, noche).

>- #### primary::¿Cómo podemos instalar este plugin?

> - Debemos instalar el siguiente paquete  y añadirlo a nuestro package.json: 
>
```
$ npm install gitbook-plugin-bootstrap-callout --save-dev
```
> - Una vez instalado, debemos incorporar el plugin en nuestro fichero book.json
>
``` 
{
    "plugins": ["bootstrap-callout"]
}
```
> - Finalmente, ejecutamos el siguiente comando para instalar y preparar el plugin:
>
```
$ gitbook install
```

<hr />

¿Cómo podemos usar este plugin?
-------------

- Definición y sintaxis

```
#### [type]::Title

```

- Llamadas soportadas:

```
### default:: Titulo bloque
```

>- #### default::Estilo por defecto
>
>Esto es un ejemplo de uso del plugin "Boostrap" para gitbook. Estilo por defecto.  

<hr />

``` 
#### primary::Estilo "Primary"
```

>- #### primary::Estilo "Primary"  
>
> Esto es un ejemplo de uso del plugin "Boostrap" para gitbook. Estilo "Primary".  

<hr />

``` 
#### success::Estilo "Success"
```

>- #### success::Estilo "Success"  
>
>Esto es un ejemplo de uso del plugin "Boostrap" para gitbook. Estilo "Success".  

<hr />

``` 
#### danger::Estilo "Danger"
```
>- #### danger::Estilo "Danger"
>
>Esto es un ejemplo de uso del plugin "Boostrap" para gitbook. Estilo "Danger".  

<hr />

``` 
#### warning::Estilo "Warning"
```
>- #### warning::Estilo "Warning"
>
>Esto es un ejemplo de uso del plugin "Boostrap" para gitbook. Estilo "Warning".  
    
<hr />

``` 
#### info::Estilo "Info"
```
>- #### info::Estilo "Info"
>
>Esto es un ejemplo de uso del plugin "Boostrap" para gitbook. Estilo "Info".  






