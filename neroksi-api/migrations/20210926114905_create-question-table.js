exports.up = function (knex) {
  return knex.schema.createTable('questions', (table) => {
    table.text('id').primary();
    table.text('user_id').references('users.id').onDelete('cascade');
    table.text('category_id').references('categories.id').onDelete('cascade');
    table
      .specificType('collection_id', 'text[]')
      .references('collections.id')
      .onDelete('cascade');
    table.boolean('private');
    table.text('question_title');
    table.json('answers');
    table.timestamp('created_at');
    table.timestamp('updated_at');

    table.index(['user_id', 'category_id', 'collection_id']);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('questions');
};
