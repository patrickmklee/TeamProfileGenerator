const Engineer = require("../lib/Engineer")

const Employee = jest.mock('../lib/Employee'); // SoundPlayer is now a mock constructor

test('Creates an instance of the Engineer class', () => {
  let testName = 'klaus physics';
  let testId = 101;
  let testEmail = 'ilovemath@hotmail.com'
  let testGithub = 'santaklaus2'
  const engNorm = new Engineer(testName,testId,testEmail,testGithub);
  expect(engNorm.getName()).toEqual(expect.any(String));
  expect(engNorm.getName()).toMatch(testName)

  expect(engNorm.getId()).toEqual(expect.any(Number));
  expect(engNorm.getId()).toEqual(testId);
  expect(engNorm.getEmail()).toEqual(expect.any(String));
  expect(engNorm.getEmail()).toEqual(testEmail);
  expect(engNorm.getGithub()).toEqual(expect.any(String));
  expect(engNorm.getGithub()).toEqual(testGithub);

  expect(engNorm.getRole()).toMatch(/Engineer/);
  

});