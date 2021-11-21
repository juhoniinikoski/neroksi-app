const oneHour = 1000 * 60 * 60;

const createDateColumns = (date) => ({
  created_at: date,
  updated_at: date,
});

const createColumns = (ownerName, questionTitle) => ({
  id: `${ownerName}.${questionTitle}`,
  user_id: 'bbe42984-051b-4a01-b45d-b8d29c32200c',
  answers: JSON.stringify([
    {
      id: 0,
      answer: 'eka ratkaisu',
      correct: true,
    },
    {
      id: 1,
      answer: 'toka ratkaisu',
      correct: false,
    },
  ]),
  question_title: questionTitle,
  category_id: 'pekka.diffis2',
  collection_id: ['pekka.collection1', 'pekka.collection3'],
});

exports.seed = async (knex) => {
  await knex('questions').del();

  await knex('questions').insert([
    {
      ...createColumns('pekka', 'question1'),
      ...createDateColumns(new Date(Date.now() - oneHour)),
    },
    {
      ...createColumns('pekka', 'question2'),
      ...createDateColumns(new Date(Date.now() - 2 * oneHour)),
    },
    {
      ...createColumns('johndoe', 'question3'),
      ...createDateColumns(new Date(Date.now() - 3 * oneHour)),
    },
  ]);
};
