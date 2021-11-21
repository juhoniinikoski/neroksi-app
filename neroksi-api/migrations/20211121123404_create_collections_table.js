exports.up = function (knex) {
  return knex.schema.createTable('collections', (table) => {
    table.text('id').primary();
    table.text('user_id').references('users.id').onDelete('cascade');
    table.text('collection_title');
    table.timestamp('created_at');
    table.timestamp('updated_at');
    table.integer('total_questions');
    table.index('user_id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('collections');
};
