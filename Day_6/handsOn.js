//Task 4
//Create a BasePage class with:
//— constructor takes browser and url
//— navigate() method
//— getTitle() method that prints "Page title: [url]"

//Create a SignupPage class that extends BasePage:
//— constructor takes only browser, sets url to "https://example.com/signup"
//— has fields: nameField, emailField, submitButton
//— signup(name, email) method that prints filling each field and clicking submit
//— overrides getTitle() to print "Signup Page — ready for testing"

//Create a CheckoutPage class that extends BasePage:
//— constructor takes browser, sets url to "https://example.com/checkout"
//— placeOrder(item, quantity) method

//Create instances of all 3 and call all methods.

class BasePage {
    constructor(browser, url) {
        this.browser=browser;
        this.url=url;
    }
    
    navigate(){
        console.log(`Navigaiting to ${this.url} using ${this.browser}`);
    }

    getTitle(){
        console.log(`Page title: [${this.url}]`);
    }
}

class SignupPage extends BasePage {
    constructor(browser){
        super(browser, "https://example.com/signup");
        this.nameField="#name";
        this.emailField="#email";
        this.submitButton="#submitBtn";
    }

    signup(name,email){
        console.log(`Filling nameField with ${name}`);
        console.log(`Filling emailField with ${email}`);
        console.log(`Clicking submit Button`);
    }
    getTitle(){
        console.log(`Signup Page — ready for testing`);
    }
    getTitleOverridden(){
        console.log(`Signup Page of ${this.url} is available— ready for testing`);//url from BasePage class.
    }
}

class CheckoutPage extends BasePage {
    constructor(browser){
        super(browser, "https://example.com/checkout");
    }

    placeOrder(item,quantity){
        console.log(`Order placed for ${item} with quantity ${quantity}`);
    }
}

const base = new BasePage("chrome","https://github.com/pavan-ambareesh/js-practice");
const sign = new SignupPage("chrome");//we should send url as the 
const check = new CheckoutPage("chrome");

//calling BasePage methods
base.navigate();
base.getTitle();

//calling SignupPage methods
sign.signup();//undefiend as we are not passing any values to the method
sign.signup("Pavan Ambareesh","pavan.iv@zohomail.in");
sign.getTitle();
sign.getTitleOverridden();
//calling Basepage method from SignupPage instance
sign.navigate();

//calling CheckoutPage method
check.placeOrder("Laptop", 10);
//calling BasePage method from checkoutPage instance
check.navigate();