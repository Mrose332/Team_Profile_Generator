const Engineer = require("../lib/Engineer");

test("Can make a github user account", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("dan", 1, "dan@gmail.com", testValue);
    expect(e.github).toBe(testValue);
  });