import DataLoader from 'dataloader'
import { camelCase, isArray, find, zipObject } from 'lodash'
import Category from '../../models/Category'
import User from '../../models/User'

const jsonCacheKeyFn = value => JSON.stringify(value);

const createModelLoader = Model =>
  new DataLoader(
    async ids => {
      const idColumns = isArray(Model.idColumn)
        ? Model.idColumn
        : [Model.idColumn];

      const camelCasedIdColumns = idColumns.map(id => camelCase(id));

      const results = await Model.query().findByIds(ids);

      return ids.map(
        id =>
          find(
            results,
            zipObject(camelCasedIdColumns, isArray(id) ? id : [id]),
          ) || null,
      );
    },
    {
      cacheKeyFn: jsonCacheKeyFn,
    },
  );

export const createDataLoaders = () => {
  return {
    categoryLoader: createModelLoader(Category),
    userLoader: createModelLoader(User),
  };
};

export default createDataLoaders;
