
const Employee = require("../lib/Employee");

test("creates object Employee", () => {
  const testEmployee = new Employee("John", "1234", "john@test.com");
  expect(testEmployee).toBeInstanceOf(Object);
});

test("Tests setting name of an employee and getName", () => {
  const testEmployee = new Employee("John", "1234", "john@test.com");
  var employeeName = testEmployee.getName();
  expect(employeeName).toBe(testEmployee.name);
  expect(employeeName).toBe("John");
});

test("Tests setting id of an employee and getId", () => {
  const testEmployee = new Employee("John", "1234", "john@test.com");
  var employeeId = testEmployee.getId();
  expect(employeeId).toBe(testEmployee.id);
  expect(employeeId).toBe("1234");
});

test("Tests setting email of an employee and getEmail", () => {
  const testEmployee = new Employee("John", "1234", "john@test.com");
  var employeeEmail = testEmployee.getEmail();
  expect(employeeEmail).toBe(testEmployee.email);
  expect(employeeEmail).toBe("john@test.com");
});

test("Test get role method", () => {
  const testEmployee = new Employee("John", "1234", "john@test.com");
  expect(testEmployee.getRole()).toBe("Employee");
});
