const Engineer = require("../lib/Engineer");

test("creates object Engineer", () => {
  const testEngineer = new Engineer("John", "1234", "john@test.com","johnsgithub");
  expect(testEngineer).toBeInstanceOf(Object);
});
 
test("Tests github property of an employee and getGithub", () => {
  const testEngineer = new Engineer("John", "1234", "john@test.com", "johnsgithub");
  var github = testEngineer.getGithub();
  expect(github).toBe(testEngineer.github);
  expect(github).toBe("johnsgithub");
});
