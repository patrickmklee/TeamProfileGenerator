const Intern = require("../lib/Intern");

test('creates a character object', () => {
  const internNorm = new Intern("jimbo", 124, 'intern@hotmail.com','UCLA');
  expect(internNorm.name).toEqual(expect.any(String));
  expect(internNorm.getRole()).toMatch(/Intern/);

});