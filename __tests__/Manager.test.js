
//const Employee = require('../lib/Employee');
//const { Employee }  = require('../lib/Employee')
import Employee from '../lib/Employee'
const Manager = require('../lib/Manager')
test('We can check if the consumer called the class constructor', () => {
    let answers = {name: 'Generic Guy',id:124,email: 'worker@drone.com', officeNumber: 1333};
    
    const Man = new Manager(answers.name,answers.id,answers.email,answers, answers.officeNumber);
    expect(Employee).toHaveBeenCalledTimes(1);

  });



// test('creates an instance of the Manager class', () => {
//   // create a new character with a name, strength, and hitpoints values
//   const boss = new Manager("MrManager", 111221220, 'manage@email.com', 4201);
  
  
//   const teamMap = new Map();
//   teamMap.forEach(function(value,key,map) {
    
//     console.log(`map.get('${key}') = ${value}`)

//   })

//   expect(boss.name).toEqual(expect.any(String));
//   expect(boss.id).toEqual(expect.any(Number));

//   expect(boss.email).toMatch(/^(\w+)@\w+\.[(com)|(net)$]/);
//   boss.email = "abcd@g.com"
//   expect(boss.email).toMatch(/^(\w+)@\w+\.[(com)|(net)$]/);
//   expect(boss.getRole()).toMatch(/Manager/);

//   expect(boss.officeNumber).toEqual(expect.any(Number));
//   teamMap.set(boss.getRole(),[
//       boss.getName(),boss.getId(),boss.getEmail(),boss.getOfficeNumber()
//   ] 
//     );
//   //expect(boss.getName())
//   boss2 = new Manager('Forrest Gump', 199422, 'forrest@bubbagump.com', 24);
//   console.log(teamMap.entries())
//   expect(teamMap.get('Manager')).toEqual(expect.any(Array));
//   //other_boss = new Manager()
//   console.log(teamMap.forEach())
//   expect(teamMap.set(teamMap.get(boss.getRole).unshift(boss))
//   console.log(teamMap.entries())


// });