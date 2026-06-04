## Day 1

- Difference between var, const and let
    all the above mentioned are to define a variable to hold data with some unique properties, 
        let is block scoped which means it is not available outside the created block {}
        var is function scoped which means it is available throughout the function even if it is created inside {}
        const prevents reassignment but not mutations,when a const is used to store obj, array its value can be reassigned. But the variable itself cannot point to a new value
    example :
        const person = { name: "Pavan" };
        person.name = "Kumar";  // ✅ allowed — mutation
        person = { name: "Kumar" };  // ❌ not allowed — reassignment   

- What is Variable shadowing
    Variable shadowing occurs when a local variable inside a function has the same name as a global variable. Inside a function, JS will use the local variable and ignores the global one while the global variable remains completely untouched.

- What is the difference between regular function and arrow function
    Both are same except for the syntax and this binding, Arrow functions have shorter syntax and can be written in a one line for a single expressions. Regular functions have their own this context while the arrow functions will inherit this context from surrounding scope. Arrow functions are prefered in test callbacks because of this behaviour.

## Day 2

- forEach vs map
    map will use the items inside an array and will return an array which is having modified items inside it
    forEach can used to access the items inside an array and do not have an rerturn to it. We can use that particluar item then and there.

- filter vs find
    filter can be used to find out the required item inside an array and it will return an array of all matching items
    find can be used to find a single item inside a array and it wont be returning an array, find will always return the first matched parameter.

- '+ and , in' console.log
    + converts everything to a string first — objects become [object Object], arrays become comma-separated strings.
    , prints each item separated, keeping each item in its original type — objects print as expandable objects, arrays print as arrays.

- = and === in filter
    = is assignment — it sets a value.
    === is strict equality check — it compares both value AND type and returns true or false.

## Day 3
- Summary :
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

- Bugs Encountered - 
    A config object had headless: "false" as a string instead of boolean false. The code ran fine but the string "false" is truthy in JavaScript, so headless mode never actually turned off. No error, wrong behaviour — a silent bug.

    | Value | Type | Truthy/Falsy|
    |---------|-------------|----------|
    | false | boolean | Falsy|
    |"false"| string | Truthy|
    |0|number|Falsy|
    |"0"|string|Falsy|
    |""|empty string|Falsy|

## Day 4_Part 1
- JS is single threaded — handles async via Event Loop
- setTimeout minimum wait, not guaranteed — runs when Call Stack is empty
- Promise 3 states: pending, resolved, rejected
- resolve() → .then() / try block
- reject() → .catch() / catch block
- async marks the function, await pauses at that line
- Without await → get Promise {pending} not the actual value
- Without await → try/catch breaks → UnhandledPromiseRejection crash

## Day - 4_Part 2
- What is async
    async will mark the function as asyncronous, which means it will always returns a Promise automatically. Async will return promise.
    async without await is an syntax error, so async allows await to be used inside it.
- What is await 
    await pauses execution at that particular line until the promsie resolves or rejects. The lines below await wont run until the results come back.
    without await the below lines will run immediately with a pending promise instead of actual value
- what happens if we dont use await
    Without await, you get Promise { <pending> } — the Promise is still running in the background, but your code doesn't wait for it. If it rejects, there's nothing to catch it → UnhandledPromiseRejection crash.
- JS Event Loop: Call Stack → Web APIs → Callback Queue
- forEach ignores await — use for...of for sequential async
- try/catch per test = one failure doesn't stop the suite

## Day 5 - Modules 
- ## Template Literals
- Use backticks instead of quotes
- Embed variables with ${}
- Cleaner than string concatenation with +
- Example: `Hello ${name}, you are ${age} years old`

- Named export → export function/const, import with {}
- Default export → export default, import without {}, any name works
- One default export per file, multiple named exports allowed
- Template literals → backticks + ${} for string interpolation
- SCREAMING_SNAKE_CASE → for constants that never change
- "type":"module" in package.json → enables import/export in Node.js
- require() → CommonJS (old) | import → ES Modules (modern)

## Day 6 — Classes and OOP
    - Class is a blueprint, object is an instance
    - constructor sets initial data, runs automatically on new
    - this refers to the current instance
    - extends — child inherits parent methods
    - super() — calls parent constructor, must come before this
    - Method overriding — child replaces parent method
    - super.method() — calls parent version from child
    - Encapsulation — selectors stay inside class, hidden from tests
    - Instance isolation — each object has independent data