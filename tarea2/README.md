
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
git clone https://github.com/isaac-evs/desarrollo_cliente.git
```

```bash
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

Ahora, abre tu navegador con la direccion de `http://localhost:3000/`


## Testing


Abre el siguiente archivo en: `desarrollo_servidor/tarea1/src/middlewares/roles.ts`

Modifica el rol del usuario harcodeado, los validos son admin y gerente, cualquier otro rol es invalido 

```typescript

export function roles(allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const hardcodedUser: User = {
      id: "1",
      name: "John Doe",
      role: "gerente",
    };

    if (allowedRoles.includes(hardcodedUser.role!)) {
      req.user = hardcodedUser;
      return next();
    } else {
      return res.status(403).send("Acceso prohibido");
    }
  };
}

```


Presiona `Cmd + S` o `Control + S` para guardar los cambios.


Abra su navegador con la direccion de `http://localhost:3000/usuarios` para checar los cambios


No importa que rol uses, ya que aparecera "Unauthorized", debido a que se necesita la contrasena: [12345
](http://localhost:3000/usuarios?key=12345)


Ahora, si no eres admin ni gerente te aparecera "acceso prohibido", pero si lo eres te debera aparecer: "lista de usuarios"



## Autores

- [@isaac-evs](https://www.github.com/isaac-evs) - Isaac Ernesto Vazquez Sandoval
