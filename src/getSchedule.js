const data = require('../data/zoo_data');

const { hours } = data;

const hoursData = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

console.log('AQUI', hoursData[0]);

const specieParameter = (target) => data.species.find((specie) => specie.name === target);

const allSpecies = data.species.map((item) => item.name);
const allDays = Object.keys(hours);
// const allHours = Object.values(hours);

const invalidParameter = (target) => {
  if (!target || !allSpecies.includes(target) || !allDays.includes(target)) {
    return hoursData;
  }
};

const getSchedule = (scheduleTarget) => {

  if (allSpecies.includes(scheduleTarget)) return specieParameter(scheduleTarget).availability;

  // if (allDays.includes(scheduleTarget)) {
    
  // }

  return invalidParameter(scheduleTarget);
};

console.log(getSchedule('Wednesday'));

module.exports = getSchedule;
