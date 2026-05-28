// Regular function creation in JS

function greet(name) {
    return "Hello , "+name+"!";
}

//Arrow Function
const greenArrow = (name) => {
    return "Hello , "+name+"!";
}

//Short Arrow function

const greetShort = name => "Hello , " + name + "!";

console.log(greet("Pavan"));
console.log(greenArrow("Pavan Ambareesh"));
console.log(greetShort("Pavan Ambareesh"));

//tried the below code to check the parameters in the function but it is not working as expected. It is only taking the first parameter and ignoring the second one.
console.log(greet("Pavan","Ambareesh"));
console.log(greenArrow("Pavan" , "Ambareesh"));
console.log(greetShort("Pavan" , "Ambareesh"));

var var2 = "Global Variable";
function testing (param1, param2){
    let var1 = param1;
    var var2 = param2;
    console.log(var1, var2);
}
console.log(testing("Parameter 1", "Parameter 2"));
// console.log(var1); //This will throw an error because var1 is declared with let and it is not accessible outside the function.
console.log(var2);//This will not throw an error because var2 is declared with var and it is accessible outside the function. However, it will be undefined because it is not assigned any value outside the function.