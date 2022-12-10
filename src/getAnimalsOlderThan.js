const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const getSpecie = data.species.find((item) => item.name === animal);

  return getSpecie.residents.every((resident) => resident.age >= age);
};

module.exports = getAnimalsOlderThan;
