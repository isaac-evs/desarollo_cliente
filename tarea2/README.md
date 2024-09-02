
# Tarea 2

Este es el repositorio de la Tarea 2,consiste en una aplicación de compilación con SASS, Typescript y JSON

# Link

[https://github.com/isaac-evs/desarollo_cliente](https://github.com/isaac-evs/desarollo_cliente/tree/main/tarea2)

# Contenido 

```bash
/desarrollo cliente
└── tarea2/
    ├── portfolio/
    │   ├── src/
    │   │   ├── assets/
    │   │   │   └── media/
    │   │   │       └── multiple pngs and jpgs
    │   │   ├─ data/  
    │   │   │  └── content.json
    │   │   │
    │   │   ├── sass/
    │   │   │   ├── _functions.scss
    │   │   │   ├── _mixin.scss
    │   │   │   ├── _variables.scss
    │   │   │   └── styles.scss
    │   │   │
    │   │   ├── scripts/
    │   │   │   ├── content.ts
    │   │   │   ├── form.ts
    │   │   │   └── main.ts
    │   │   │
    │   │   └── index.html
    │   │
    │   ├── .gitignore
    │   ├── gulpfile.js
    │   ├── package-lock.json
    │   └── package.json
    │
    ├── .gitignore 
    ├── package-lock.json
    └── package.json  
```


## Instalación

Importante: Requiere [Node.js](https://nodejs.org/) para ejecutar.

```bash
git clone https://github.com/isaac-evs/desarrollo_cliente
cd desarrollo_cliente
```

```bash
cd tarea2
npm install
```

```bash
cd portfolio
npm install
```

```bash
npm run build
```

Ahora, abre el archivo generado en `desarrollo_cliente/tarea2/porftolio/dist/index.html` con [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).


## Manipulación de datos mediante JSON

Abre el siguiente archivo en: `desarrollo_cliente/tarea2/porftolio/src/data/content.json`

Modifica el contenido que desees cambiar

Importante: Solamente modifica los valores, no las claves.

Por ejemplo para modificar el mail de contacto:

```bash
    "contactEmail": "escribe tu mail aqui"
```

Presiona `Cmd + S` o `Control + S` para guardar los cambios.

```bash
npm run build
```



## Autores

- [@isaac-evs](https://www.github.com/isaac-evs) - Isaac Ernesto Vazquez Sandoval
