const Engineer = require("../lib/Engineer");

test("Can make a github user account", () => {
    const testValue = "Githubuser";
    const e = new Engineer("dan", 1, "dan@gmail.com", testValue);
    expect(e.github).toBe(testValue);
  });

  
test("getRole() return Engineer as a role", () => {
  const role = "Engineer";
  const employee = new Engineer(dan);
  expect(employee.getRole()).toBe(role);
});