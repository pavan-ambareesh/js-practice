//Task 1
import {formatTestName, calculatePassRate, MAX_TIMEOUT, logResult} from './helpers.js';

console.log(formatTestName("login"));
console.log(calculatePassRate(8,10));
console.log("MAX TIMEOUT:", MAX_TIMEOUT);
logResult("login","passed", 1200);
logResult("signup","failed",1500);


//Task 2
import testConfig from './config.js';
import {formatTestName, calculatePassRate} from './helpers.js';

console.log(`Browser : ${testConfig.browser} `);
console.log(`Timeout : ${testConfig.timeout}ms `);
console.log(formatTestName("checkout"));
console.log(calculatePassRate(9,10));