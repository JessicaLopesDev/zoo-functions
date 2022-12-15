const data = require('../data/zoo_data');
// Array com nomes das especies por localização
const findSpecieByLocation = (initial) => data.species.filter((specie) =>
  specie.location === initial).map((item) => item.name);

// Array com nomes dos residentes por especie
const findSpecie = (element) => data.species.find((item) =>
  item.name === element).residents.map((resident) => resident.name);

// Cria objeto
const createSpecieObj = (initial) => findSpecieByLocation(initial).map((element) => ({
  [element]: findSpecie(element),
}));

// .map((element) => data.species.find((specie) => element === specie.name).residents.name)

// const createObject = () => {
//   const objResult = {
//     NE: findSpecieByLocation('NE'),
//     NW: findSpecieByLocation('NW'),
//     SE: findSpecieByLocation('SE'),
//     SW: findSpecieByLocation('SW'),
//   };
//   return objResult;
// };

const createObjWithNames = () => {
  const result = {
    NE: createSpecieObj('NE'),
    NW: createSpecieObj('NW'),
    SE: createSpecieObj('SE'),
    SW: createSpecieObj('SW'),
  };
  return result;
};

const getAnimalMap = (options) => {
  // const { includeNames, sex, sorted } = options;

  if (options) return createObjWithNames();
};

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
