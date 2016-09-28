Plugin Youtube!
===================

Este plugin permite introducir contenidos del sitio web [Youtube](http://www.youtube.com), como por ejemplo, videos.

¿Cómo podemos instalar este plugin?
-------------

- Debemos instalar el siguiente paquete  y añadirlo a nuestro package.json: 

```
$ npm install gitbook-plugin-youtube --save-dev
```

- Una vez instalado, debemos incorporar el plugin en nuestro fichero book.json

``` 
{
    "plugins": ["youtube"]
}
```


¿Cómo podemos usar este plugin?
-------------

- Definición y sintaxis

```
{% youtube %}

"Enlace de Youtube"

{% endyoutube %}

```

Ejemplo
-------------

- Codigo

```
{% youtube %}
https://www.youtube.com/watch?v=kdpfRLpu0FQ
{% endyoutube %}

```
{% youtube %}
https://www.youtube.com/watch?v=kdpfRLpu0FQ
{% endyoutube %}


