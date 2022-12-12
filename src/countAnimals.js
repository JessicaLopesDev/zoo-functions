const data = require('../data/zoo_data');

const getAllSpecies = () => {
  const result = {};
  data.species.forEach((element) => {
    result[element.name] = element.residents.length;
  });
  return result;
};

const countAnimals = (animal) => {
  const getBySpecie = data.species.find((item) => item.name === animal.species);
  const getBySex = getBySpecie.residents.filter((resident) => resident.sex === animal.sex);

  if (!animal) getAllSpecies();

  if (!animal.sex) {
    return getBySpecie.residents.length;
  }

  return getBySex.length;
};

module.exports = countAnimals;
