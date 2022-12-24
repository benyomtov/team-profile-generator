const Intern = require("../lib/Intern");

test("creates object Intern", () => {
  const testIntern = new Intern("John", "1234", "john@test.com","Yale");
  expect(testIntern).toBeInstanceOf(Object);
});

test("testing school property and getSchool method", () => {
  const testIntern = new Intern("John", "1234", "john@test.com", "Yale");
  var school = testIntern.getSchool();
  expect(school).toBe(testIntern.school);
  expect(school).toBe("Yale");
});