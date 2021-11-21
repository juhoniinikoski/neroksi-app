const oneHour = 1000 * 60 * 60;

const createDateColumns = (date) => ({
  created_at: date,
  updated_at: date,
});

const createColumns = (ownerName, collectionTitle) => ({
  id: `${ownerName}.${collectionTitle}`,
  user_id: 'bbe42984-051b-4a01-b45d-b8d29c32200c',
  collection_title: collectionTitle,
});

exports.seed = async (knex) => {
  await knex('collections').del();

  await knex('collections').insert([
    {
      ...createColumns('pekka', 'collection1'),
      ...createDateColumns(new Date(Date.now() - oneHour)),
      total_questions: 3,
    },
    {
      ...createColumns('pekka', 'collection2'),
      ...createDateColumns(new Date(Date.now() - 2 * oneHour)),
      total_questions: 0,
    },
    {
      ...createColumns('johndoe', 'collection3'),
      ...createDateColumns(new Date(Date.now() - 3 * oneHour)),
      total_questions: 3,
    },
  ]);
};
