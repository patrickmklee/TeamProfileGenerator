const Team = require('../lib/Team');
test('creates an instance of the Manager class', () => {
  // create a new character with a name, strength, and hitpoints values
  const teamProfile = new Team();

  var answers1 = {
    role: "engineer",
    employeeName: "thomas",
    id: 2,
    email: "thomas@email.com",
    github: "thomasthetank"
  }
  teamProfile.newTeamMember(answers1);
  expect(teamProfile.getTeamList()).toContain(/thomas/);


  var answers2= {
    role: "intern",
    employeeName: "jerry",
    id: 3,
    email: "jerry@email.com",
    school: "Devry"
  }
  teamProfile.newTeamMember(answers2);
  expect(teamProfile.getTeamList()).toContain(/jerry/);

//   teamProfile.add(boss);
});