const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((person) => person.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return data.employees.filter((item) => item.managers.includes(managerId))
      .map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
