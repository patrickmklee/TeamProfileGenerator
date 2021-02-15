const Engineer = require("../lib/Engineer");

test('Creates an instance of the Engineer class', () => {
  const engNorm = new Engineer("klaus", 101, '@hotmail.com','www.github.com/klaus2');
  expect(engNorm.name).toEqual(expect.any(String));
  expect(engNorm.id).toEqual(expect.any(Number));
  expect(engNorm.getRole()).toMatch(/Engineer/);
  

});