const Manager = require("../lib/Manager");

test("creates object Manager", () => {
  const testManager = new Manager("John", "1234", "john@test.com","101A");
  expect(testManager).toBeInstanceOf(Object);
});

test("testing officeNumber property and getOfficeNumber method", () => {
  const testManager = new Manager("John", "1234", "john@test.com", "101A");
  var testOfficeNumber = testManager.getOfficeNumber();
  expect(testOfficeNumber).toBe(testManager.officeNumber);
  expect(testOfficeNumber).toBe("101A");
});