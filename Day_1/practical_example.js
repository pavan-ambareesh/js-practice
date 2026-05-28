function calculateBonus (salary, percentage) {
    return salary*percentage/100;
}

function printEmployeeInfo(name, salary, bonusPercentage) {
    return name + " earns " + salary + ". Bonus " + calculateBonus(salary, bonusPercentage);
}

console.log(printEmployeeInfo("Pavan", 50000, 10));

//Trying different ways to declare and use functions in JS, so we need to use function keyword to declare a function in JS. We can also use arrow functions to declare functions in JS. 
// Arrow functions are a shorter syntax for declaring functions in JS. We can also use short arrow functions to declare functions in JS. Short arrow functions are a shorter syntax for declaring functions in JS when the function body is a single expression.

// calculateBonus  (salary, percentage) {
//     return salary*percentage/100;
// }
// printEmployeeInfo(name, salary, bonusPercentage) {
//     return name + " earns " + salary + ". Bonus " + calculateBonus(salary, bonusPercentage);
// }

// console.log(printEmployeeInfo("Pavan", 50000, 10));

calculateBonus = (salary, percentage) => salary*percentage/100;

printEmployeeInfo = (name, salary, bonusPercentage) => {
    return name + " earns " + salary + ". Bonus " + calculateBonus(salary, bonusPercentage);
}

console.log(printEmployeeInfo("Pavan", 100000, 20));