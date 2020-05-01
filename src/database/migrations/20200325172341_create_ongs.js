//aqui serve para criar uma entidade e a criação da tabela com todas as infos
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('nome').notNullable();
      table.string('IDCriada').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('insta').notNullable();
      table.string('picpay').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();

  })
};
//serve para deletar uma tabela
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
