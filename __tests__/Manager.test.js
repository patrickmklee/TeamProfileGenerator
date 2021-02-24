
//const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager')
const Employee = jest.mock('../lib/Employee'); // SoundPlayer is now a mock constructor
// import Employee from '../lib/Employee'

// test('We can check if the consumer called the class constructor', () => {
//     let answers = {name: 'Jerry LeManager',id:124,email: 'worker@drone.com', officeNumber: 1333};
//     const Man = new Manager(answers.name,answers.id,answers.email,answers, answers.officeNumber);
    

//   });



test('creates an instance of the Manager class', () => {
  let answers = {name: 'Jerry LeManager',id:124,email: 'worker@drone.com', officeNumber: 1333};
  // create a new character with a name, strength, and hitpoints values
  const boss = new Manager("Ronald McDonald", 1, 'email@website.com', 4201);

  expect(boss.getName()).toEqual(expect.any(String));
  expect(boss.getId()).toEqual(expect.any(Number));

  expect(boss.getEmail()).toMatch(/^(\w+)@\w+\.[(\w+)$]/);
  boss.email = "abcd@.a"
  expect(boss.getEmail()).not.toMatch(/^(\w+)@\w+\.[(com)|(net)$]/);
  expect(boss.getRole()).toMatch(/Manager/);

  expect(boss.getOfficeNumber()).toEqual(expect.any(Number));
  expect(boss.getOfficeNumber()).toEqual(4201);

  // teamMap.set(boss.getRole(),[
  //     boss.getName(),boss.getId(),boss.getEmail(),boss.getOfficeNumber()
  // ] 
  //   );
  //expect(boss.getName())
  boss2 = new Manager('Forrest Gump', 199422, 'forrest@bubbagump.com', 24);
  // console.log(teamMap.entries())
  // expect(teamMap.get('Manager')).toEqual(expect.any(Array));
  //other_boss = new Manager()
  // console.log(teamMap.forEach())
  // expect(teamMap.set(teamMap.get(boss.getRole).unshift(boss))
  // console.log(teamMap.entries())


});