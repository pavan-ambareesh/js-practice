// A class is a blueprint - like a template
console.log("File is running");

class TestCase { //we can use capital letters for class names to distinguish them from variables
    // constructor run when we create an instance of the class
    constructor(id,name,status){
        this.id=id;
        this.name=name;
        this.status=status;
        this.duration=0;
    }
    //methods - a function that belongs to this class
    printResult(){
        console.log(`[${this.status.toUpperCase()}] ${this.id} : ${this.name} - ${this.duration}ms`);
    }
    setDuration(ms){
        this.duration=ms;
    }
    isPassed(){
        return this.status==="passed"; //this will return true or false
    }  
}

//creating instance of the class in to different objects
const tc1 = new TestCase("TC_001","login","passed");
const tc2 = new TestCase("TC_002","signup","failed");

tc1.setDuration(120);
tc2.setDuration(3400);

tc1.printResult();
tc2.printResult();

console.log(tc1.isPassed());
console.log(tc2.isPassed());


//Task 2
console.log("Task 2");

class BasePage{
    constructor (browser, url){
        this.browser=browser;
        this.url=url;
        this.timeout=30000;
    }
    navigate(){
        console.log(`Navigating to ${this.url} using ${this.browser}`);
    }
    waitForLoad(){
        console.log(`Waiting for page to load - timeout : ${this.timeout}ms`);
    }
}

//Login page extends BasePage - it inherits all the properties and methods of BasePage
class LoginPage extends BasePage{
    constructor(browser){
        super(browser, "https://example.com/login"); //super is used to call the constructor of the parent class
        this.usernameField="#username";
        this.passwordField="#password";
        this.loginButton="#loginBtn";
    }

    //Login page own methods
    login(username,password){
        console.log(`Filling ${this.usernameField} with ${username}`);
        console.log(`Filling ${this.passwordField} with ${password}`);
        console.log(`Clicking ${this.loginButton}`);
    }
}

const loginPage = new LoginPage("chrome");
loginPage.navigate();
loginPage.waitForLoad();
loginPage.login("test@test.com", "password123");

//Task 3
console.log("Task 3");

//will be using the same BasePage class from Task 2

class DashboardPage extends BasePage{

    constructor(browser){
        super(browser,"https://example.com/dashboard");
    }
    navigate() {
        console.log(`Checking authentication first...`);
        super.navigate();
        console.log(`Dashboard page loaded`);
    }
}

const dashBoard = new DashboardPage ("chrome");
dashBoard.navigate();