## What is the difference between var, let and const? Give an example of when each one behaves differently.
    let is block-scoped — only exists inside the {} it was declared in. var is function-scoped — exists throughout the entire function even if declared inside a nested block. Outside any function, var becomes a global variable. const prevents reassignment but allows mutation — the variable cannot point to a new value but object contents can change. var is hoisted and initialized as undefined. let and const are hoisted but not initialized — accessing before declaration throws ReferenceError.
## What is variable shadowing? Why does it matter in test frameworks?
    In test frameworks, shadowing causes silent bugs — a local variable accidentally named the same as a global config variable makes the function use the wrong value without throwing any error.
## What is the difference between a regular function and an arrow function? Why does it matter in test automation?
    Arrow functions and regular functions behave the same except for syntax and this binding. Regular functions have their own this context which changes based on how they're called. Arrow functions inherit this from the surrounding scope. In test frameworks, arrow functions are preferred inside callbacks because this binding in regular functions causes unpredictable behaviour.
## What is the difference between map() and forEach()? When would you use each one?
    forEach iterates over each item and performs an action — but always returns undefined. You cannot store or chain its result.
    map transforms each item and returns a new array of the same length as the original.
## When to use each 
    Use forEach when you just want to do something with each item — log it, send it, trigger an action. Use map when you want to transform data into a new array — like converting test names to uppercase or adding a prefix.
## What is the difference between filter() and find()? What does each return when nothing matches?
    filter() returns a new array of ALL items matching the condition — even if only one matches, it's still wrapped in an array. find() returns the first matching item directly — as a single object, not an array.
## what does find() return?
    returns the actual item or undefined
## Do map(), filter() and find() mutate the original array?
    map(), filter() and find() never mutate the original array — they always return new values. The original array stays completely untouched. This is called immutability and it's important in test frameworks because your test data source should never be accidentally modified between tests.
## What is destructuring? Why is it useful in test automation?
    Destructuring allows you to unpack values from objects or arrays into individual variables in a single line — instead of accessing each property separately with dot notation.
    In test automation, destructuring is used constantly when extracting data from API responses and config objects. Instead of writing const name = response.name; const status = response.status separately, you write const { name, status } = response — cleaner and faster.
## What does the spread operator do? What is a shallow copy and why does it matter?
    Spread creates a shallow copy — it only copies one level deep. The top level properties are copied as new values, but nested objects are not copied — they are still referenced from the original. So modifying a nested object in the copy also changes the original.
## What is the difference between dot notation and bracket notation? When would you use bracket notation?
    Dot notation obj.name is used when you know the property name at the time of writing code — it's fixed and readable.
    Bracket notation obj["name"] is used when the property name is dynamic — stored in a variable that changes at runtime.
    Use dot notation for known, fixed property names. Use bracket notation when the property name is stored in a variable or contains special characters.
## What is a Promise? What are its 3 states?
    A Promise is an object that represents the eventual result of an asynchronous operation. It's JS saying — "I don't have the result right now, but I promise to give it to you later."
    Pending — operation is still in progress
    Resolved/Fulfilled — operation succeeded, value is available
    Rejected — operation failed, error is available
    resolve() moves a Promise from pending → fulfilled
    reject() moves a Promise from pending → rejected
## What is the difference between .then()/.catch() and async/await?
    .then()/.catch() and async/await are the same behaving aspects in JS | Same behaviour, different syntax.
    async/await is called syntactic sugar on top of Promises — it doesn't add new functionality, it just makes the code easier to read and reason about, especially when multiple async operations happen in sequence.
    In Playwright — async/await is used exclusively because test code has many sequential steps and chaining .then() 10 times becomes unreadable.
    "-async/await is syntactic sugar over Promises. Same behaviour, cleaner syntax. async/await preferred for sequential operations. Playwright uses async/await exclusively."
##  What happens if you forget await in front of an async operation?
    Forgetting await is not a syntax error — the code runs silently. Instead of getting the resolved value, you get Promise { <pending> }. Any property access on it returns undefined. If the Promise rejects, there's nothing to catch it — causing an UnhandledPromiseRejection crash. In Playwright, forgetting await before page.click() or page.fill() means the action hasn't completed when the next line runs — causing flaky test failures with no obvious error.
##  What is the difference between named export and default export?
    Named export allows multiple things to be exported from one file. Import must use the exact same name in curly braces {}.
    Default export is for one main thing per file. Import uses no curly braces and can use any name you choose.
## Why do we split test code into modules? Give 3 reasons.
    Separation of concerns — each file has one specific job. Page objects, helpers, configs and tests stay separate. Easy to find and understand.
    Reusability — write a helper function once, import it in 50 test files. No duplication. Change it in one place, it updates everywhere.
    Maintainability — when a selector changes, you update one page object file instead of every test file that uses it. Without modules, one change means updating 50 files manually.
## What is the difference between require() and import? Which one does your Zoho framework likely use?
    require() is the CommonJS module system — the older Node.js way of importing files. import is the ES Modules system — the modern JavaScript standard.
## What does async do to a function?
    async does exactly two things:
    Marks a function as asynchronous — allowing await to be used inside it
    Makes the function automatically return a Promise — even if you just return a plain value
    