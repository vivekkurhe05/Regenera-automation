var Page = require('./page');

class SignUp extends Page {

    get signUpPageTitle () { return $('span=Create an account'); }
    get signInLink () { return $('p span a[href="/login"] span'); }
    get userType () { return $('#userType'); }
    get userTypeOptions () { return $$('#userType option:nth-of-type(n+2)'); }
    get email () { return $('#email'); }
    get firstName () { return $('#fname'); }
    get lastName () { return $('#lname'); }
    get password () { return $('#password'); }
    get signUpBtn () { return $('button[type=submit]'); }
    get passwordError () { return $('input#password + div.ValidationError_root__3g8Va'); }

    open (payload) {
        return super.open(payload);
    }

    verifySignUpPage () {
        this.signUpPageTitle.toBeDisplayed();
    }

    click (elem) {
        elem.click();
    }

    getError (elem) {
        return elem.getText();
    }
}

module.exports = new SignUp();