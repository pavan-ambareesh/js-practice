const testResult = { name: "login", status: "passed" };
const { status, name } = testResult;
console.log(name, status);

const browsers = ["chrome", "firefox", "safari"];
const [, second] = browsers;
console.log(second);