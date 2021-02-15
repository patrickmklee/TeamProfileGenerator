const Manager = require("../lib/Manager");

test('creates an instance of the Manager class', () => {
  // create a new character with a name, strength, and hitpoints values
  const boss = new Manager("MrManager", 20, 'manage@email.com', 1);

  expect(boss.name).toEqual(expect.any(String));
  expect(boss.id).toEqual(expect.any(Number));

  expect(boss.email).toMatch(/^(\w+)@\w+\.[(com)|(net)$]/);
  boss.email = "abcd@g.com"
  expect(boss.email).toMatch(/^(\w+)@\w+\.[(com)|(net)$]/);
  expect(boss.getRole()).toMatch(/Manager/);

  expect(boss.officeNumber).toEqual(expect.any(Number));
});