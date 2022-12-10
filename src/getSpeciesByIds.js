const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => ids
  .map((item) => data.species.find((animal) => animal.id === item));

module.exports = getSpeciesByIds;
