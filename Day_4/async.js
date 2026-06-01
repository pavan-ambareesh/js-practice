// //Day 4
// // Task 1
// console.log("Stage 1");

// console.log("1. Test started");
// setTimeout(() => {
//     console.log("2. Login Page Loaded");
// },2000);

// console.log("3. Moving to next step");

// // Task 2
// //Promise
// console.log("Stage 2");


// function fetchTestData(testId) {
//     return  new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if (testId === "TC001") {
//                 resolve({id : "TC001" , status : "passed"});
//             } else {
//                 reject("Test case not found");
//             }
//         }, 2500);
//     });
// }

// fetchTestData("TC001").then((result) =>{
//     console.log("Success :", result);
// })
// .catch(error => {
//     console.log("Error :", error);
// });

// console.log("This Line runs before the promise is resoved or rejected");

// fetchTestData("TC999").then((result) =>{
//     console.log("Success :", result);
// })
// .catch(error => {
//     console.log("Error :", error);
// });


// //Task 3
// console.log("Stage 3");

// function fetchData(testId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (testId === "TC001"){
//                 resolve({id: "TC001", status: "passed"});
//             }
//             else {
//                 reject("Test case not found");
//             }
//         },2500);

//     });
// }

// async function runTest(id) {
//     console.log("testCase Started");

//     try {
//         const result = await fetchData(id);
//         console.log("Result :" , result);
//         console.log("Status : ", result.status);
//     }
//     catch (error){
//         console.log("Error : ", error);
//     }

//     console.log("Test Case Ended");
// }

// runTest("TC001");
// console.log("TC is updated as TC999)");
// runTest("TC999");


//Task 4
console.log("Stage 4");

function executeTest(testName){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const passed = Math.random() > 0.3;
            if (passed) {
                resolve({name:testName, status:"passed",duration: Math.floor(Math.random()*3000)});
            } else {
                reject({name:testName, status:"failed", error:"Assertion Failed"});
            }
        },1000);
    });
}

//async function to run executeTestCase
// Write an async function runTestSuite that:
// 1. Runs executeTest for "login", "signup" and "checkout" one by one
// 2. Prints the result of each test after it completes
// 3. Handles failures with try/catch — a failed test should NOT stop the suite
// 4. Prints "Suite completed" at the end

async function runTestSuite(testCases) {
    try{
        console.log("Running test case : " + testCases);
        const result = await executeTest(testCases);
        console.log("Test Case Result for :", testCases);
        console.log(result.name, result.status, result.duration);
    }
    catch(error){
        console.log("Test Case crashed", error);
    }
}

const testCases = ["login", "signup", "checkout"];

// testCases.forEach((testCase) => {
//     runTestSuite(testCase);
// });

//the same function calling with for of loop


async function main() {
    for(const testCase of testCases) {
        await runTestSuite(testCase);
    }
    console.log("Suite Completed");
}
//async and await is required for main in order for the for to wait till the promise is resolved or rejected before moving to the next test case in the array - need to get the answer.

main();