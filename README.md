# WebServices - Exercícios
Exercícios da aula WebServices na pós de Apps da PUCPR

## API
API desenvolvida em NodeJS

### Libraries
* express - Create the API Rest rotes
* sequelize - Create Model to BD
* date-fns - Use to calc dates

### Para rodar:
```shell
    yarn && yarn start
```
### Exercícion 1:

```http request
POST http://localhost:3000/calcDates
Content-Type: application/json

{
  "startDate": "2001-01-01",
  "endDate": "2019-12-31"
}
```

### Exercícion 2:

```http request
POST http://localhost:3000/numbers
Content-Type: application/json


{
  "numbers": "1;2;3;4;56;23;21"
}
```

### Exercícion 3:

```http request
POST http://localhost:3000/mimimi
Content-Type: application/json

{
  "text": "Acima de tudo, é fundamental ressaltar que a contínua expansão de nossa atividade causa impacto indireto na reavaliação das condições inegavelmente apropriadas."
}
```

### Exercícion Model:
* Necessário subir o banco de dados com a database `mvc-web-services` e tabela `shops`, basta rodar o docker e importar a tabela no arquivo `script.sql` dentro da pasta MySql.
#### Create shop
```http request
POST http://localhost:3000/createShop
Content-Type: application/json

{
  "name": "Café",
  "brand": "3 Corações",
  "validity": "2022-05-05",
  "amount": 5
}
```

#### Update shop
* Para atualizar, chama-se o mesmo endpoint para criar passando o `id` junto no body.

```http request
POST http://localhost:3000/createShop
Content-Type: application/json

{
  "id": 1,
  "name": "Café",
  "brand": "3 Corações",
  "validity": "2022-05-05",
  "amount": 5
}
```

#### Listar tudo - shop

```http request
GET http://localhost:3000/getShops
Accept: application/json
```

#### Listar por id - shop

```http request
GET http://localhost:3000/getShops?id=1
Accept: application/json
```