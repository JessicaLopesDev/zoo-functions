const data = require('../data/zoo_data');

const { hours } = data;
// Array com todos os dias
const allDays = Object.keys(hours);
// Array com todas as especies por nome
const allSpecies = data.species.map((item) => item.name);
// Retorna os dias que a especie passada por parametro está disponível
const specieParameter = (target) => data.species.find((specie) => specie.name === target);
// Retorna array com especies que estão disponíveis por dia
const getAnimalsByDay = (item) => data.species
  .filter((animal) => animal.availability.includes(item)).map((specieName) => specieName.name);
// Cria, dinamicamente, o cronograma de todos os dias
const createObj = () => {
  const obj = {};

  allDays.forEach((item) => {
    obj[item] = {
      officeHour: `Open from ${hours[item].open}am until ${hours[item].close}pm`,
      exhibition: getAnimalsByDay(item),
    };
  });
  obj.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return obj;
};
// Valida os parametros passados para chamar funçoes correspondentes
const getSchedule = (scheduleTarget) => {
  if (allSpecies.includes(scheduleTarget)) return specieParameter(scheduleTarget).availability;
  // Se o paramentro for um dia da semana retorna o cronograma somente daquele dia
  if (allDays.includes(scheduleTarget)) {
    const officeDays = createObj();
    return {
      [scheduleTarget]: officeDays[scheduleTarget],
    };
  }
  return createObj();
};

module.exports = getSchedule;
