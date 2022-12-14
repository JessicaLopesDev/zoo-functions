const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employee = data.employees.find((person) => person.id === id);

  const firstSpecieOfEmployee = data.species
    .find((specie) => specie.id === employee.responsibleFor[0]);

  const findOldest = firstSpecieOfEmployee.residents.reduce((acc, curr) =>
    (acc.age > curr.age ? acc : curr));

  return Object.values(findOldest);
};

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
