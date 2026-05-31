//Day 4
// Task 1
console.log("Stage 1");

console.log("1. Test started");
setTimeout(() => {
    console.log("2. Login Page Loaded");
},2000);

console.log("3. Moving to next step");

// Task 2
//Promise
console.log("Stage 2");


function fetchTestData(testId) {
    return  new Promise((resolve,reject) => {
        setTimeout(() => {
            if (testId === "TC001") {
                resolve({id : "TC001" , staus : "passed"});
            } else {
                reject("Test case not found");
            }
        }, 2500);
    });
}

fetchTestData("TC001").then((result) =>{
    console.log("Success :", result);
})
.catch(error => {
    console.log("Error :", error);
});

console.log("This Line runs before the promise is resoved or rejected");

fetchTestData("TC999").then((result) =>{
    console.log("Success :", result);
})
.catch(error => {
    console.log("Error :", error);
});


//Task 3
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

runTest("TC001");
console.log("TC is updated as TC999)");
runTest("TC999");

const result = await fetchTestData("TC001");
console.log(result);