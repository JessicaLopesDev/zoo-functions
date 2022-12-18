const data = require('../data/zoo_data');

const locations = ['NE', 'NW', 'SE', 'SW'];

// Array com nomes das especies por localização
const speciesByLocationArray = (initial) => data.species.filter((specie) =>
  specie.location === initial).map((item) => item.name);

// Encontra o objeto da espécie
const findSpecie = (element) => data.species.find((item) => item.name === element);

// Array de residents da specie por sexo
const residentsArrayBySex = (specie, options) => {
  const filteredResidentsBySex = findSpecie(specie).residents.filter((resident) =>
    resident.sex === options.sex).map((item) => item.name);

  if (options.sorted) {
    return filteredResidentsBySex.sort();
  }
  return filteredResidentsBySex;
};

// Array com todos residents da specie
const allResidentsArray = (specie, options) => {
  const filteredResidents = findSpecie(specie).residents.map((resident) => resident.name);

  if (options.sorted) {
    return filteredResidents.sort();
  }
  return filteredResidents;
};

// Cria array com residentes por especie e por sexo(se for passado no parametro)
const createArrayWithResidents = (initial, options) =>
  speciesByLocationArray(initial).map((element) => ({
    [element]: options.sex ? residentsArrayBySex(element, options)
      : allResidentsArray(element, options),
  }));

// Função principal: Se não receber parametro ou se não existir o parametro includeNames retorna um objeto com nomes
// das especies por cada região. Se existir includeNames retorna um objeto com residentes das especies também.
const getAnimalMap = (options) => {
  const result = {};

  locations.forEach((location) => {
    if (!options || !options.includeNames) {
      result[location] = speciesByLocationArray(location);
    }
    if (options && options.includeNames) {
      result[location] = createArrayWithResidents(location, options);
    }
  });
  return result;
};

module.exports = getAnimalMap;
