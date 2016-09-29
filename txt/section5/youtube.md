Plugin Youtube!
==============  

Este plugin permite introducir contenidos del sitio web [Youtube](http://www.youtube.com), como por ejemplo, videos.

>- #### primary::¿Cómo podemos instalar este plugin?

> - Debemos instalar el siguiente paquete  y añadirlo a nuestro package.json: 
>
```
$ npm install gitbook-plugin-youtube --save-dev
```
> - Una vez instalado, debemos incorporar el plugin en nuestro fichero book.json
>
``` 
{
    "plugins": ["youtube"] 
}
```
> - Finalmente, ejecutamos el siguiente comando para instalar y preparar el plugin:
>


<hr />

<<<<<<< HEAD
>- #### primary::¿Cómo podemos usar este plugin?

> - Definición y sintaxis
=======
>- #### danger::¿Cómo podemos usar este plugin?
> Definición y sintaxis
>>>>>>> 8e836a90786e938d7490371486a2f3f1708e9f71
>
``` 
{% youtube %}"Enlace de Youtube"{% endyoutube %}
```

<hr />
<<<<<<< HEAD

>- #### primary::Ejemplo
=======
 
>- #### danger::Ejemplo
{% youtube %} http://www.youtube.com/watch?v=kdpfRLpu0FQ {% endyoutube %}
>>>>>>> 8e836a90786e938d7490371486a2f3f1708e9f71



