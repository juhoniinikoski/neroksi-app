import BaseModel from './BaseModel'
import knex from '../utils/knex'

class Question extends BaseModel {
  static get idColumn() {
    return 'id'
  }

  static get tableName() {
    return 'questions'
  }
}

export default Question.bindKnex(knex)
