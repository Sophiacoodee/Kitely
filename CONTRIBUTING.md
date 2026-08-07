Organización de ramas Kitely
 
Para trabajar de una forma más ordenada en el proyecto vamos a utilizar diferentes ramas dependiendo de lo que estemos haciendo.
 
 Ramas principales:
 
 `main`: aquí estará la versión estable del proyecto.
 `develop`: aquí vamos a unir y probar los cambios antes de pasarlos a `main`.
 
 Ramas para nuevas funciones:
 
Cuando alguien vaya a trabajar en una nueva función, creará una rama con este formato:
 
`feature/nombre-de-la-funcion`
 
Por ejemplo:
 
 `feature/crear-remesa`
 `feature/escaneo-qr`
 `feature/inicio-sesion`
 
 Ramas para corregir errores:
 
Si encontramos un error, podemos crear una rama:
 
`fix/nombre-del-error`
 
Por ejemplo:
 
`fix/error-login`
 
Si es un error urgente en la versión que ya está funcionando, se puede usar:
 
`hotfix/nombre-del-error`
 
Cómo vamos a trabajar:
 
No se harán cambios directamente en `main`.
 
El proceso será:
 
`feature → develop → main`
 
Primero se trabaja en la rama de la función, después se pasa a `develop` mediante un Pull Request para revisar los cambios y finalmente, cuando todo esté correcto, se pasa a `main`.
 
De esta manera todos podemos trabajar en el proyecto sin afectar directamente la versión estable.
 
