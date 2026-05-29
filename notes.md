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

Day 2

forEach vs map
    map will use the items inside an array and will return an array which is having modified items inside it
    forEach will can used to access the items inside an array and do not have an rerturn to it. We can use that particluar item then and there.

filter vs find
    filter can be used to find out the required item inside an array and it will return an array of all matching items
    find can be used to find a single item inside a array and it wont be returning an array, find will always return the first matched parameter.

+ and , in console.log
    + will use the concat all the available content into a single string and print it. It cannot be used for object and arrays
    , will print each content in a single line

= and === in filter
    = will assign the a value to the variable no matter where it is used
    === will actually check the left and right side and will return true or false
