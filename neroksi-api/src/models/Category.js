import BaseModel from './BaseModel';
import knex from '../utils/knex';

class Category extends BaseModel {
  static get idColumn() {
    return 'id';
  }

  static get tableName() {
    return 'categories';
  }
}

export default Category.bindKnex(knex);
