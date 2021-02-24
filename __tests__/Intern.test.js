const Intern = require("../lib/Intern");
const Employee = require('../lib/Employee');

test('creates a character object', () => {
  let testAnswers = {name: 'Jimmy John', id: 124, email: 'intern@hotmail.com',school:'UCLA' }
  // const calledIntern = new Intern(testAnswers)
  const internNorm = new Intern("Jimmy John", 124, 'intern@hotmail.com','UCLA');
  expect(internNorm.getEmail()).toEqual(testAnswers.email)
  expect(internNorm.getName()).toEqual(expect.any(String));
  expect(internNorm.getName()).toEqual(testAnswers.name);

  expect(internNorm.getId()).toEqual(testAnswers.id)
  expect(internNorm.getRole()).not.toMatch(/Employee/);
  expect(internNorm.getRole()).toMatch(/Intern/);
  // expect(calledIntern.getEmail()).toEqual(testAnswers.email)
  // expect(calledIntern.getName()).toEqual(expect.any(String));
  // expect(calledIntern.getId()).toEqual(testAnswers.id)
  // expect(calledIntern.getRole()).not.toMatch(/Employee/);
  // expect(calledIntern.getRole()).toMatch(/Intern/);
  internNorm.id = 1
  expect(internNorm.getId()).not.toEqual(testAnswers.id);  //expect()
  expect(internNorm.getSchool()).not.toEqual(testAnswers.id);  //expect()

});