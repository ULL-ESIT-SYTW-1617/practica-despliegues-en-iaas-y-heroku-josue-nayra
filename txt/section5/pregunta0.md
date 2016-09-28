Gitbook Plugins!
===================

**Gitbook Plugins** representan una buena opción si queremos extender las funcionalidades de nuestro Gitbook.
Entre estas funcionalidades destacan: incorporar videos de Youtube, ejercicios, incorporar fórmulas matemáticas, campos para introducir comentarios, ...
Podemos encontrar los Gitbook plugins que nos interesen en [plugins.gitbook.com][1]

¿Cómo podemos instalar un plugin?
-------------
- Creamos fichero **book.json** siguiendo la estructura:
```
{
    "gitbook": "0.0.1",
    "title": "Gitbook para apuntes. Asignatura SYTW16-17",
    "plugins": [],
    "structure": {
        
    },
    "pluginsConfig": {

    }
}

```
- A continuación, debemos instalarlo con el comando **npm install**:
```
 npm install  "nombre del plugin" --save-dev

```
- Una vez que encontremos el plugin que necesitamos, debemos añadirlo a nuestro fichero book.json: 
```
{
	"plugins": ["plugin 1", "plugin 2"]
}
```

Los Gitbook Plugins son instalados automáticamente en [Gitbook.com][2]. Localmente, podemos ejecutar el siguiente comando para instalar y preparar todos los plugins para nuestros libros:
```
$ gitbook install

``` 

[1]:
    http://plugins.gitbook.com

[2]:
    http://www.Gitbook.com