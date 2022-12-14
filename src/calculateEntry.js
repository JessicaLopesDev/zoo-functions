const data = require('../data/zoo_data');

const { prices } = data;

const countEntrants = (entrants) => {
  let child = 0;
  let adult = 0;
  let senior = 0;

  entrants.forEach((person) => {
    if (person.age < 18) child += 1;
    if (person.age >= 18 && person.age < 50) adult += 1;
    if (person.age >= 50) senior += 1;
  });

  return { child, adult, senior };
};

const calculateEntry = (entrants) => {
  if (!entrants || !Array.isArray(entrants)) return 0;

  const quantityByAge = countEntrants(entrants);

  const total = (quantityByAge.child * prices.child)
    + (quantityByAge.adult * prices.adult) + (quantityByAge.senior * prices.senior);

  return total;
};

module.exports = { calculateEntry, countEntrants };
