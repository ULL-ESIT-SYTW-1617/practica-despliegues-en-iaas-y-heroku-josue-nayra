Git
-------------

Es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia y la confiabilidad del mantenimiento de versiones de aplicaciones cuando éstas tienen un gran número de archivos de código fuente.

Git es fácil de aprender con un rendimiento muy rápido, permitiendo múltiples flujos de trabajo en un mismo proyecto.


>- #### primary::Descarga e instalación

> Windows  

> Git para Windows se centra en ofrecer un conjunto nativo de herramientas que traen el conjunto completo de características de Git a Windows, 
> proporciona interfaces de usuario adecuadas para los usuarios Git. Proporciona una emulación BASH para ejecutar Git desde la línea de comandos, 
> aunque también proporciona una interfaz grafica de usuario como alternativa a la BASH.

> Linux
>
```
  $ apt-get install git
```

<hr />
  
>- #### primary::Flujo de trabajo

> El repositorio local esta compuesto por tres "árboles" administrados por git. El primero es tu Directorio de trabajo que contiene los archivos, el segundo es el Index que actua como una zona intermedia, y el último es el HEAD que apunta al último commit realizado. 

> ![Imagen](../images/trees.png)

<hr />

>- #### primary::Comandos más importantes

> **Crear un nuevo repositorio**
> 
```
git init
```
> **Clonar un repositorio existente**

>   Crea una copia local del repositorio ejecutando...
>   
   ```
   git clone /path/to/repository
   ```
>  Para un servidor remoto ejecutar...
> 
   ```
   git clone username@host:/path/to/repository
   ```
   
> **Add y Commit**
    
>   Registrar cambios añadiendolos al Index mediante el comando:
>
   ```
   git add <filename>   o    git add .
   ```
>
   Incluir el archivo en el Head haciendo commit a los cambios (aún no en el repositorio):
>
   ```
   git commit -m "Commit message"
   ```
 
> **Añadir los cambios**
    
>  Añadir los cambios al repositorio remoto:
>
   ```
   git push origin master
   ```   
>  Siendo master la rama en la cual queremos enviar los cambios.
    
   
   
    
> **Actualizar y fusionar los cambios**
    
>  Actualizar el repositorio local al commit más nuevo para bajar y fusionar los cambios remotos.
>
   ```
   git pull
   ```
     
>   Para fusionar otra rama a tu rama activa (master en este caso):
>   
   ```
   git merge <branch>
   ```


   

> Git permite practicar con sus comandos y aprender a la vez. 
> En el siguiente enlace: [https://try.github.io/levels/1/challenges/3](https://try.github.io/levels/1/challenges/3)