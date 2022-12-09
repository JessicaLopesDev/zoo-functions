const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids === undefined) return [];

  return ids.map((item) => data.species.filter((animal) => animal.id === item));
};

module.exports = getSpeciesByIds;
