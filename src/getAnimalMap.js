const data = require('../data/zoo_data');
// Array com nomes das especies por localização
const findSpecieByLocation = (initial) => data.species.filter((specie) =>
  specie.location === initial).map((item) => item.name);

// Array com nomes dos residentes por especie
const findSpecie = (element) => data.species.find((item) => item.name === element);

const createResidentsArrayBySex = (element, sex) =>
  findSpecie(element).residents.filter((resident) => resident.sex === sex).map((item) => item.name);

// Cria objeto da especie com residentes por sexo em ordem ou sem ordem
const createObjectBySex = (initial, sex, sorted) => {
  if (sorted) {
    return findSpecieByLocation(initial).map((element) => ({
      [element]: createResidentsArrayBySex(element, sex).sort(),
    }));
  }
  return findSpecieByLocation(initial).map((element) => ({
    [element]: createResidentsArrayBySex(element, sex),
  }));
};

const createAllResidentsArray = (specie) =>
  findSpecie(specie).residents.map((resident) => resident.name);

// Cria objeto da especie com nomes dos residentes
const createObjectBySpecie = (initial, sorted) => {
  if (sorted) {
    return findSpecieByLocation(initial).map((element) => ({
      [element]: createAllResidentsArray(element).sort(),
    }));
  }
  return findSpecieByLocation(initial).map((element) => ({
    [element]: createAllResidentsArray(element),
  }));
};

const createObject = () => {
  const objResult = {
    NE: findSpecieByLocation('NE'),
    NW: findSpecieByLocation('NW'),
    SE: findSpecieByLocation('SE'),
    SW: findSpecieByLocation('SW'),
  };
  return objResult;
};

// Cria objeto final
const createObjWithNames = (sex, sorted) => {
  let result = {};
  if (sex) {
    result = {
      NE: createObjectBySex('NE', sex, sorted),
      NW: createObjectBySex('NW', sex, sorted),
      SE: createObjectBySex('SE', sex, sorted),
      SW: createObjectBySex('SW', sex, sorted),
    };
  }
  if (!sex) {
    result = {
      NE: createObjectBySpecie('NE', sorted),
      NW: createObjectBySpecie('NW', sorted),
      SE: createObjectBySpecie('SE', sorted),
      SW: createObjectBySpecie('SW', sorted),
    };
  }
  return result;
};

// Função principal, valida se recebe parametro e se recebe, quais são.
const getAnimalMap = (options) => {
  if (!options) return createObject();

  const { includeNames, sex, sorted } = options;

  if (includeNames) return createObjWithNames(sex, sorted);

  if (!includeNames) return createObject();
};

console.log(getAnimalMap());

module.exports = getAnimalMap;
