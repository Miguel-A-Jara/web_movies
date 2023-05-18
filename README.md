# Movies Web

Un proyecto de la clase 466 de la **Universidad Autónoma de Asunción**.
Gracias a este proyecto puedes buscar tus películas favoritas todo en un sólo lugar!
Puedes echarle un ojo a la página aquí [here](https://web-movies-wine.vercel.app/).

Si quieres levantar el proyecto localmente debes de:

1. Clonar el repositorio.
2. Ingresar a la carpeta del proyecto: ```cd web_movies```
3. Correr ```yarn install``` (_yarn 1.22.x_ recomendado)
4. Por último, corre ```yarn dev```

Nota: Para levantar el proyecto, necesitas de un API KEY de TheMovieDb. Puedes ver más información sobre como obtener tu propia API KEY [aquí](https://developers.themoviedb.org/3/getting-started/introduction)

Luego de haber obtenido tu API KEY, sigue estos pasos:

- Clona el archivo `.env.template`, y renombralo a `.env`
- Ingresa tu API KEY en el archivo de .env luego de `VITE_THE_MOVIEDB_API_KEY=`
- Reinicia tu servidor de desarrollo, y listo!
