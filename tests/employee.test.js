const Employee = require("../lib/Employee");

test("Given an employee name returns the name on the object", () => {
  const employee = new Employee('mike');
  expect(employee.name).toBe('mike');
});

test("Can set id ", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email ", () => {
  const testValue = "mike@gmail.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can retreive name by getName()", () => {
  const testValue = "mike";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can retrieve Id by getId()", () => {
  const testValue = 200;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can retrieve email by getEmail()", () => {
  const testValue = "mike@gmail.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("mike", 1, "mike@gmail.com");
  expect(e.getRole()).toBe(testValue);
});