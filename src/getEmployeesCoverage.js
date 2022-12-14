const data = require('../data/zoo_data');
// Filtra as especies que o employee é responsável
const speciesOfEmployee = (person) => data.species
  .filter((specie) => person.responsibleFor.includes(specie.id));
// Cria objeto com todos os employees
const allEmployees = () => data.employees.map((person) => ({
  id: person.id,
  fullName: `${person.firstName} ${person.lastName}`,
  species: speciesOfEmployee(person).map((item) => item.name),
  locations: speciesOfEmployee(person).map((item) => item.location),
}));
// Validação do id
const idValidation = (idOfEmployee) => {
  const validId = data.employees.some((element) => element.id === idOfEmployee);

  if (validId) {
    return allEmployees().find((element) => element.id.includes(idOfEmployee));
  }
  if (!validId) {
    throw new Error('Informações inválidas');
  }
};
// Validação do name
const nameValidation = (nameOfEmployee) => {
  const validName = data.employees.some((element) =>
    nameOfEmployee === element.firstName || nameOfEmployee === element.lastName);

  if (validName) {
    return allEmployees().find((element) => element.fullName.includes(nameOfEmployee));
  }
  if (!validName) {
    throw new Error('Informações inválidas');
  }
};

const getEmployeesCoverage = (employee) => {
  if (!employee) return allEmployees();

  if (employee.name) return nameValidation(employee.name);

  if (employee.id) return idValidation(employee.id);
};

module.exports = getEmployeesCoverage;
