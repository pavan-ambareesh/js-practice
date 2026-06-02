const name = "login";
const duration = 1200;

// Old way — concatenation
console.log("[PASSED] " + name + " — " + duration + "ms");

// Template literal — cleaner
console.log(`[PASSED] ${name} — ${duration}ms`);