const Page = require('./page');

class LoginPage extends Page {

    get loginPageTitle () { return $('div.AuthenticationPage_content__2CSCA h2 span'); }
    get email() { return $('#email'); }
    get password() { return $('#password'); }
    get loginBtn() { return $('button[type="submit"]'); }
    get createAccountLink () { return $('p span a[href="/signup"]'); }
    get resetPassword () { return $('p span a[href="/recover-password"]'); }

    open(payload) {
        return super.open(payload);
    }

    with(email, password) {
        this.email.addValue(email);
        this.password.addValue(password);
        this.loginBtn.scrollIntoView();
        this.loginBtn.click();
    }

    navigateToSignUpPage () {
        this.createAccountLink.click();
        return require('../pageobjects/signup.page');
    }

    click (elem) {
        elem.click();
    }

}

module.exports = new LoginPage();
