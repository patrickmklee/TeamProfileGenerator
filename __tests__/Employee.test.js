const Employee = require('../lib/Employee');
test('creates a employee object', () => {
    let answers = {'name': 'Generic Guy',id:124,email: 'worker@drone.com'}
  const employeeDef = new Employee(answers.name,answers.id,answers.email);
  expect(employeeDef.getEmail()).toEqual(answers.email)
  expect(employeeDef.getName()).toEqual(expect.any(String));
  expect(employeeDef.getId()).toEqual(answers.id)
  expect(employeeDef.getRole()).toMatch(/Employee/);
  employeeDef.id = 1
  expect(employeeDef.getId()).not.toEqual(answers.id);  //expect()
});