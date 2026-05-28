Day 1

Difference between var, const and let
all the above mentioned are to define a variable to hold data with some unique properties, 
    let is block scoped which means it is not available outside the created block {}
    var is function scoped which means it is available throughout the function even if it is created inside {}
    const prevents reassignment but not mutations,when a const is used to store obj, array its value can be reassigned. But the variable itself cannot point to a new value
        example :
        const person = { name: "Pavan" };
        person.name = "Kumar";  // ✅ allowed — mutation
        person = { name: "Kumar" };  // ❌ not allowed — reassignment   

What is Variable shadowing
    Variable shadowing occurs when a local variable inside a function has the same name as a global variable. Inside a function, JS will use the local variable and ignores the global one while the global variable remains completely untouched.

What is the difference between regular function and arrow function
    Both are same except for the syntax and this binding, Arrow functions have shorter syntax and can be written in a one line for a single expressions. Regular functions have their own this context while the arrow functions will inherit this context from surrounding scope. Arrow functions are prefered in test callbacks because of this behaviour.