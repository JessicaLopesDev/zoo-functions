const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employee = data.employees.find((person) => person.id === id);

  const firstSpecieOfEmployee = data.species
    .find((specie) => specie.id === employee.responsibleFor[0]);

  const findOldest = firstSpecieOfEmployee.residents
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr));

  return Object.values(findOldest);
};

module.exports = getOldestFromFirstSpecies;
