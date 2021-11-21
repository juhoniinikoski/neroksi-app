import BaseModel from './BaseModel';
import knex from '../utils/knex';

class Collection extends BaseModel {
  static get idColumn() {
    return 'id';
  }

  static get tableName() {
    return 'collections';
  }
}

export default Collection.bindKnex(knex);
