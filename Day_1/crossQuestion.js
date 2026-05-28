var var2 = "Global Variable";
function testing() {
    var var2 = "Local Variable";
    console.log("Inside:", var2);
}
testing();
console.log("Outside:", var2);