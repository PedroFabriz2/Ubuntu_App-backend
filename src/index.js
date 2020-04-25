const express = require('express');//importando o modulo express para dentro de uma variavel
const cors = require('cors');
const routes = require('./routes');

const app = express();//criando uma variavel para guardar nossa aplicação acessando a porta 3333

app.use(cors());

app.use(express.json());

app.use(routes);
/**
 * Rota / Recurso
 * 
 */

//"sqlite3": "^4.1.1"
/**
 * Metodos HTTP
 * 
 * GET: buscar/listar alguma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipo de parametros:
  * 
  * Query Params: Parametros nomeados enviados na rota após o simbolo de ?
  *    ->servem para filtros, paginação
  * 
  * Route Params: parametros utilizados para identificar recursos
  * 
  * Request body: corpo da requisição, utilizado para criar ou alterar os usuarios
  */

  /**
   * SQL: MySQL, SQLite, Microsoft SQL....
   * 
   * NoSQL: MongoDB, CouchDB.... 
   * 
   */

   /**
    * Driver: SELECT + FROM users
    * Query Builder: table['users'].select('*').where()
    */



app.listen(process.env.PORT || 3333);//o app escuta a porta 3333(localhost)

 