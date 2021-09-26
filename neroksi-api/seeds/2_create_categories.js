const oneHour = 1000 * 60 * 60;

const createDateColumns = date => ({
  created_at: date,
  updated_at: date,
});

const createColumns = (ownerName, categoryTitle) => ({
  id: `${ownerName}.${categoryTitle}`,
  user_id: 'bbe42984-051b-4a01-b45d-b8d29c32200c',
  category_title: categoryTitle,
});

exports.seed = async knex => {
  await knex('categories').del();

  await knex('categories').insert([
    {
      ...createColumns('pekka', 'diffis2'),
      ...createDateColumns(new Date(Date.now() - oneHour)),
    },
    {
      ...createColumns('pekka', 'lääkikseen'),
      ...createDateColumns(new Date(Date.now() - 2 * oneHour)),
    },
    {
      ...createColumns('johndoe', 'yofysiikka'),
      ...createDateColumns(new Date(Date.now() - 3 * oneHour)),
    },
  ]);
};
