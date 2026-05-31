function fetchTestData(testId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (testId === "TC001"){
                resolve({id: "TC001", status: "passed"});
            }
            else {
                reject("Test case not found");
            }
        },2500);

    });
}

async function runTest(id) {
    console.log("testCase Started");

    try {
        const result = fetchTestData(id);
        console.log("Result :" , result);
        console.log("Status : ", result.status);
    }
    catch (error){
        console.log("Error : ", error);
    }

    console.log("Test Case Ended");
}

runTest("TC001");
console.log("TC is updated as TC999)");
runTest("TC999");