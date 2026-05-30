//Craeting an Object in JS
//Task1
console.log("");
console.log("Task 1");
console.log("");
const testCase = {
    id : "TC_001",
    name : "login",
    status : "passed",
    duration : 1200,
    browser : "chrome"
};

//Accessing properites of an Object
console.log(testCase.id);
console.log(testCase["status"]);
//console.log(testCase[status]);//This will give an error because status is not defined as a variable

//Adding a new property to an Object
testCase.environment = "QA";
testCase.priority = "high";
console.log("Added environment and priority property to testCase object : ", testCase);

//Updating the value of an existing property
testCase.browser = "firefox";
testCase.status = "failed";
console.log("Updated browser and status property of testCase object : ", testCase);

//Deleting a property from an Object
delete testCase.browser;
delete testCase.environment;
console.log("Deleted browser and environment properties from testCase object : ", testCase);

//Check if a property exists in an Object
// console.log(priority in testCase); //this will give an error because priority is not defined as a variable
console.log("priority" in testCase);
console.log("Checking if browser exists in testCase:", "browser" in testCase); //in keyword is used to check if a property exists in an object or not. 


//Task 2
console.log("");
console.log("Task 2");
console.log("");

const testResult = {
    id : "TC_002",
    name : "signup",
    status : "failed",
    duration : "3400",
    error : "Element Not Found"
}

console.log("Without destructuring start");
//Without destructuring
const id1 = testResult.id;
const name1 = testResult.name;
const status1 = testResult.status;
const duration1 = testResult.duration;
const error1 = testResult.error;

console.log("Without destructuring output: ", id1, name1, status1, duration1, error1);

//With destructuring
console.log("With destructuring start");
const { id, name, status } = testResult;
console.log("With destructuring output");
console.log(id, name, status);
console.log(" ID : ", id);


//With destructuring - the below code will work only of we have a JSON with variables matching the property names of the object.

const testResult2 = {
    id2 : "TC_002",
    name2 : "signup",
    status2 : "failed",
    duration2 : "3400",
    error2 : "Element Not Found"
}
// const { id2, name2, status2 } = testResult2;
// console.log(id2);//undefined is printed when i tiried for first time - because I have not created an array with variables matching the property names of the object.
// console.log(id2, name2, status2);
//no need to create separate variables for each property of the object, we can directly destructure the object and get the values in a single line. 
// This is a more concise and cleaner way to access the properties of an object.

//Renaming variables while destructuring
console.log("Renaming variables while destructuring");
const { id: testId, name: testName, status: testStatus } = testResult;
console.log(testId, testName, testStatus);

//Default Value if property does not exist in the object
console.log("Default Value if property does not exist in the object");
const {priority  = "medium"} = testResult;
console.log(priority);

//Array Destructuring
const browsers = ["chrome","firefox","safari"];
const [first, second] = browsers;
console.log(first, second);
// const [third] = browsers.values(2); // need to check how we can get the value of the third element in the array using destructuring.
// console.log(third);
const [third] = browsers.slice(2, 3);
console.log(third);

//Task 3
console.log("");
console.log("Task 3");
console.log("");

const baseConfig = {
    browser : "chrome",
    headless : false,
    timeout : 3000
}

console.log("");
console.log("Copy Object using Spread Operator");
const newConfig = {...baseConfig};
console.log("New Config Object: ", newConfig);

//Spread Mergeing two objects
const extraConfig ={screenshot : true, video : false};//we are adding more properties to the object here.
extraConfig.duration = 5000;//we are adding a new property to the extraConfig object here.
console.log("Extra Config Object: ", extraConfig);
const fullConfig = {...baseConfig, ...extraConfig};
console.log("Full Config Object: ", fullConfig);


//Spread Override a property while copying an object
const headlessConfig = {...baseConfig, headless : true};
console.log("Headless Config Object: ", headlessConfig);

//Object.keys
//Object.values
//Object.entries
console.log("###################################################");
console.log(Object.keys(baseConfig));
console.log("####################################################");
console.log(Object.values(baseConfig));
console.log("#####################################################  ");
console.log(Object.entries(baseConfig));


//Task 4 — Write it yourself, no hints
console.log("");
console.log("Task 4");
console.log("");

//Question :
const defaultConfig = {
    browser: "chrome",
    headless: false,
    timeout: 30000,
    retries: 1,
    screenshot: false
};

//1. Creates a mobileConfig by spreading defaultConfig and overriding browser to "safari" and adding viewport: "mobile"
const mobileConfig = {...defaultConfig, browser : "safari" , viewport : "mobile" };
console.log(mobileConfig);

//2. Creates a ciConfig by spreading defaultConfig and setting headless to true, retries to 3, screenshot to true
const ciConfig = {...defaultConfig, headless : true, retries : 3, screenshot : true};
console.log(ciConfig);

//3. Destructure browser, timeout and retries from ciConfig and print them
const {browser, timeout, retries} = ciConfig;
console.log("Browser :", browser, "Timeout :" , timeout,"Retries :" , retries);

//4. Print all keys of mobileConfig
console.log("Mobile Config Keys : ",Object.keys(mobileConfig));

//5. Check if viewport exists in defaultConfig and in mobileConfig
console.log("viewport" in defaultConfig);
console.log("viewport" in mobileConfig);
