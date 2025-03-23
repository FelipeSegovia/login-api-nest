
## Description

Login en NestJS

## Librerías utilizadas

## Migraciones

### Crear migración
- npx sequelize-cli migration:generate --name NAME_MIGRATION
### Ejecutar migraciones
- npx sequelize-cli db:migrate
### Revertir migraciones
- npx sequelize-cli db:migrate:undo


## Seeders

### Crear seed
- npx sequelize-cli seed:generate --name NAME_SEED
### Ejecutar todos los seed
- npx sequelize-cli db:seed:all
### Ejecutar un seed especifico
- npx sequelize-cli db:seed --seed NAME_SEED.js
### Revertir un seed
- npx sequelize-cli db:seed:undo --seed NAME_SEED.js
### Revertir todos los seed
- npx sequelize-cli db:seed:undo:all

### Passport

Es la base de autenticación radica en la librería Passport.js est una librería de
autenticación para Node.js que permite manejar múltiples estrategias de 
autenticación (como local, JWT, OAuth, etc.) de manera modular.


### Passport-local

Es una librería que utiliza una estrategia de autenticación para Passport.js que permite autenticar usuarios utilizando 
un nombre de usuario y una contraseña (autenticación tradicional).



### JWT
Librería de Json Web Token para encriptar información
```bash
    npm install @nestjs/passport passport passport-local @nestjs/jwt passport-jwt
    npm install @types/passport-local @types/passport-jwt --save-dev
```

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

