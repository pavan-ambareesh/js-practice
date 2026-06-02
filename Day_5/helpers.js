//helper.js - utility function for tests

//Named exports - export multiple things from one file

//TASK1
export function formatTestName(name){
    return "TC_"+name.toUpperCase();
}

export function calculatePassRate(passed, total){
    return ((passed/total)*100).toFixed(2)+"%";
}

export const MAX_TIMEOUT = 30000;

export function logResult(testName, status, duration){
    console.log(`[${status.toUpperCase()}] ${testName} - ${duration}ms`);
}