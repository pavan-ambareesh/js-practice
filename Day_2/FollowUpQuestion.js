const numbers = [1, 2, 3];

const result1 = numbers.map(n => n * 2);
const result2 = numbers.forEach(n => n * 2);

console.log(result1);
console.log(result2);

const results = [
    { name: "login", status: "failed" },
    { name: "signup", status: "failed" },
];

const a = results.filter(r => r.status === "failed");
const b = results.find(r => r.status === "failed");

console.log(Array.isArray(a));
console.log(Array.isArray(b));