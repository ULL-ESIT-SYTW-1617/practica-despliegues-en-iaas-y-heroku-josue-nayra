Plugin Bootstrap!
===================

Este plugin permite introducir ventanas o llamadas que resaltan bloques de contenido siguiendo tres tonalidades(negro, sepia, noche).

¿Cómo podemos instalar este plugin?
-------------

- Debemos instalar el siguiente paquete  y añadirlo a nuestro package.json: 

```
$ npm install gitbook-plugin-bootstrap-callout --save-dev
```

- Una vez instalado, debemos incorporar el plugin en nuestro fichero book.json

``` 
{
    "plugins": ["bootstrap-callout"]
}
```

- Finalmente, ejecutamos el siguiente comando para instalar y preparar el plugin:

```

$ gitbook install

```

¿Cómo podemos usar este plugin?
-------------

- Definición y sintaxis

```
#### type:: Title

```

- Llamadas soportadas:

>- #### primary::Title
>- #### success::Title
>- #### danger::Title
>- #### warning::Title
>- #### info::Title


Ejemplos
-------------

- Codigo del plugin

```
#### primary::Title

```

> #### primary::Title
Esto es una prueba para usar el plugin bootstrap del Gitbook
> Content

- Video



