## 🚀 ejecutar el servidor con el siguiente comando:

```sh
denon run -A server.tsx
```

- la consola del servidor le informará en que puerto se está ejecutando (esto es personalizable desde la constante "PORT")

luego ingresar en un navegador e ir a url: "https://localhost:8080/" (8080 es el puerto configurado por defecto)

se verá la aplicación con un formulario que hará un POST al endpoint "/colors, este utiliza una función que añade un color nuevo a un arreglo ("array") de string que almacena los colores ingresados en memoria. 
