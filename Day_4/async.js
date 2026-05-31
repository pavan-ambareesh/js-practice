//Day 4
// Task 1


console.log("1. Test started");
setTimeout(() => {
    console.log("2. Login Page Loaded");
} , );

console.log("3. Moving to next step");

// Task 2
//Promise

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

// fetchTestData("TC001").then((result) =>{
//     console.log("Success :", result);
// })
// .catch(error => {
//     console.log("Error :", error);
// });

console.log("This Line runs before the promise is resoved or rejected");

fetchTestData("TC999").then((result) =>{
    console.log("Success :", result);
})
.catch(error => {
    console.log("Error :", error);
});