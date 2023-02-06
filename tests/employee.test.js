const Employee = require("../lib/Employee");

test("Given an employee name returns the name on the object", () => {
  const employee = new Employee('Dan');
  expect(employee.name).toBe('Dan');
});