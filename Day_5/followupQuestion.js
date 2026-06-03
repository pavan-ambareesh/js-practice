const name = "login";
const duration = 1200;

// Old way — concatenation
console.log("[PASSED] " + name + " — " + duration + "ms");

// Template literal — cleaner
console.log(`[PASSED] ${name} — ${duration}ms`);

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

console.log(numbers); // original
console.log(doubled); // mapped