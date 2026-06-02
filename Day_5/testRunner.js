import testConfig from './config.js';
import {logResult, calculatePassRate, formatTestName } from './helpers.js';

const testCase = [
    {name : "login", status : "passed", duration : 1234, passed : 8, total : 10},
    {name : "signup", status : "failed", duration : 5678, passed : 15, total : 20},
    {name : "checkout", status : "Unknown", duration : 2468, passed : 22, total : 30}
]
async function runSuite(testSuite){
    console.log(`Browser : ${testConfig.browser}`);
    console.log(`Timeout : ${testConfig.timeout}ms`);
    try{
        for(const test of testSuite){
            logResult(test.name, test.status, test.duration);
            console.log(calculatePassRate(test.passed, test.total));
            await console.log(formatTestName(test.name));
        }
    }
    catch(error){
        console.log(error);
    }

}

runSuite(testCase);


//1. Logs the browser and timeout from config at the start
//2. Runs 3 fake tests using logResult — hardcode passed/failed and durations
//3. Calculates and prints the pass rate using calculatePassRate
//4. Formats and prints each test name using formatTestName