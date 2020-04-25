//aqui serve para criar uma entidade e a criação da tabela com todas as infos
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();
        
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
        //essa chave estrangeira faz a conexao da ong_id com a id da outra tabela(relacionamento de banco de dados)
    })
  };
  //serve para deletar uma tabela
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  };
  