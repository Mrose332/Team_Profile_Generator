const Employee = require("../lib/Employee");

test("Given an employee name returns the name on the object", () => {
  const employee = new Employee('mike');
  expect(employee.name).toBe('mike');
});


test("Can retreive name by getName()", () => {
  const testValue = "mike";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});


test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("mike", 1, "mike@gmail.com");
  expect(e.getRole()).toBe(testValue);
});