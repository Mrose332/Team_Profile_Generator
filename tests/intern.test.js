const Intern = require('../lib/Intern');

test("set school using function", () => {
    const school = "Fsu";
    const employee = new Intern("Tony Stark");
    expect(employee.school).toBe(school);
  });
  
  test("getRole() return Intern as a role", () => {
    const role = "Intern";
    const employee = new Intern(Tony);
    expect(employee.getRole()).toBe(role);
  });