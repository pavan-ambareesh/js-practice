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
    forEach can used to access the items inside an array and do not have an rerturn to it. We can use that particluar item then and there.

filter vs find
    filter can be used to find out the required item inside an array and it will return an array of all matching items
    find can be used to find a single item inside a array and it wont be returning an array, find will always return the first matched parameter.

+ and , in console.log
    + converts everything to a string first — objects become [object Object], arrays become comma-separated strings.
    , prints each item separated, keeping each item in its original type — objects print as expandable objects, arrays print as arrays.

= and === in filter
    = is assignment — it sets a value.
    === is strict equality check — it compares both value AND type and returns true or false.

Day 3
    Summary :
    - Object destructuring uses {} — pull by key name, order doesn't matter
    - Array destructuring uses [] — pull by position, order matters
        In destructuring, you can set a default value using =. The default is only used when the property doesn't exist in the object or is undefined. If the property exists, the actual value is used regardless of the default.
        In array destructuring, you can skip items by leaving empty commas. Each comma represents one skipped position.
    - Spread operator copies object properties into a new object
    - const protects variable binding, not contents — mutation is allowed
         const protects the variable binding — meaning you cannot make the variable point to a new value. But the contents inside the object can still be changed freely. This is called mutation. So const prevents reassignment, not mutation.
    - Booleans and numbers never use quotes — "false" ≠ false
    - Object.keys / Object.values / Object.entries
            Object.keys(obj) — returns array of all key names
            Object.values(obj) — returns array of all values
            Object.entries(obj) — returns array of [key, value] pairs — each index holds both together
    - JSON.parse() → text to object | JSON.stringify() → object to text

    Bugs Encountered - 
    A config object had headless: "false" as a string instead of boolean false. The code ran fine but the string "false" is truthy in JavaScript, so headless mode never actually turned off. No error, wrong behaviour — a silent bug.

    | Value | Type | Truthy/Falsy|
    |---------|-------------|----------|
    | false | boolean | Falsy|
    |"false"| string | Truthy|
    |0|number|Falsy|
    |"0"|string|Falsy|
    |""|empty string|Falsy|
