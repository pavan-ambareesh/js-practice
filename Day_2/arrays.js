//Day 2
//Task 1 - Arrays in JavaScript
//Defining Arrays
console.log(" ");
console.log(" Task 1");
console.log(" ");

const testCases = ["Login" , "Signup" , "Checkout" , "Payment" , "Logout"];

//for Each loop
testCases.forEach((testcase) => {
    console.log("Running test : " + testcase);
});

//Map function Transform each item into a new value
const upperCaseTests = testCases.map((test) => test.toUpperCase());
console.log(upperCaseTests);

const lowerCaseTests = testCases.map((variableForLowerCase) => variableForLowerCase.toLowerCase());
console.log(lowerCaseTests);

console.log("Length of the lowerCaseTests : " + lowerCaseTests.length);
console.log("Length of the upperCaseTests : " , upperCaseTests.length);

//Map function - Add a prefix to each test name
const prefixedTests = testCases.map((test) => "TC_" + test);
console.log(prefixedTests);

const suffixedTests = testCases.map((variableForSuffix) => variableForSuffix + "_TC");
console.log(suffixedTests);

//Map function - An empty space inside " " is prining a new line for each item in the array - need to get the answer
const prefixedTestsWithNewLine = testCases.map((test) => "TC_ " + test);
console.log(prefixedTestsWithNewLine);

const suffixedTestswithNewLine = testCases.map((variableForSuffix) => variableForSuffix + " _TC");
console.log(suffixedTestswithNewLine);

//Task 2 - Filter and find functions in JavaScript
//Filter and find functions

console.log(" ");
console.log(" Task 2");
console.log(" ");

const testResults = [
{name:"login", status:"passed", duration:1200},
{name:"signup",status:"failed",duration:3400},
{name:"checkout",status:"passed",duration:2100},
{name:"payment",status:"failed",duration:5600},
{name:"logout",status:"passed",duration:800}
];

//Filter function - Get all passed test cases
const passedTests=testResults.filter((variableForPassedTests)=>variableForPassedTests.status==="passed");
console.log("Passed Tests : " , passedTests);

const failedTests = testResults.filter((variableForFailedTests) => variableForFailedTests.status==="failed");
console.log("Failed Tests : " , failedTests);

// //if "=" is used, it will change the value of the item for the entire array irrespective of the index, so we need to use === for comparison in the filter function.
// const updateResultsToPassed=testResults.filter((variableForPassedTests)=>variableForPassedTests.status="passed");
// console.log("Entire status of array is passed" + updateResultsToPassed); //This line needs to be investiagted on why it prints object in the console when used with + operator.

// == is doing nothing to the array, it is just comparing the value and returning true or false, but = is changing the value of the item for the entire array irrespective of the index, so we need to use === for comparison in the filter function.
testResults.filter((variableForFailedTests) => {
    if(variableForFailedTests.status=="failed"){
        console.log("Failed test case is : " + variableForFailedTests.name);
    }
});

// //Filter - get tests that took more than 2000 ms

const slowTest = testResults.filter((variableForSlowTests) => variableForSlowTests.duration > 2000);
console.log(slowTest);


//Find function - Get the first failed test case

const firstFailedTest = testResults.find((variableForFirstFailedStaus) => variableForFirstFailedStaus.status === "failed");
console.log("First Failure : ", firstFailedTest);

const suiteResults = [
    { name: "TC001_login", status: "passed", duration: 1200 },
    { name: "TC002_signup", status: "failed", duration: 3400 },
    { name: "TC003_search", status: "passed", duration: 900 },
    { name: "TC004_cart", status: "failed", duration: 4500 },
    { name: "TC005_payment", status: "passed", duration: 2100 },
    { name: "TC006_logout", status: "passed", duration: 600 },
];

//Task 3 - Practice with map, filter, and find functions
console.log(" ");
console.log(" Task 3");
console.log(" ");

//1.Print all test names in UPPERCASE using map
const upperCaseSuiteResults = suiteResults.map((variableForUpperCaseSuiteResults) => variableForUpperCaseSuiteResults.name.toUpperCase());
console.log("Upper Case Suite Results test name : " , upperCaseSuiteResults); //when comma is used, it prints everything in a new line
console.log("Upper Case Suite Results test name : " + upperCaseSuiteResults); //when + is used, it prints everything in the same line with a comma in between

//2.Get all passed tests using filter
const allPassedTests = suiteResults.filter((variableForAllPassedTests) => variableForAllPassedTests.status === "passed");
console.log("All Passed Tests : ", allPassedTests);
//console.log("All Passed Tests : " + allPassedTests); //This doesnt work in mutlidimensional array.

//3.Get all tests slower than 2000ms using filter
const slowTests = suiteResults.filter((variableForSlowTests) => variableForSlowTests.duration >= 2000);
console.log("Slow Test Results : ", slowTests);

//4.Find the first passed test using find
const firstPassedTest = suiteResults.find((variableForFirstPassedTest) => variableForFirstPassedTest.status === "passed");
console.log("First Passed Test : " , firstPassedTest);

//Print a summary: "Total: 6 | Passed: X | Failed: X"
const total = suiteResults.length;
const passed = allPassedTests.length;
const failed = total - passed;
console.log("Total: "+total+" | Passed: "+passed+" | Failed: "+failed);