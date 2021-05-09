const { home, signUp } = require('../pageobjects/navbar.page');
// const NavigationBar = require('../pageobjects/navbar.page');
const SignupPage = require('../pageobjects/signup.page');
const LoginPage = require('../pageobjects/login.page');

describe('Sign up page tests', function (){

    beforeEach ( function () {
        SignupPage.open('signup');
    })

    // it.skip('should redirect to sign up page', function () {
    //     NavigationBar.click(signUp);
    //     expect(signUpPageTitle).toHaveText('Create an account')
    // });

    it('should verify the interactive elements on sign up page', function () {
        expect(SignupPage.userType).toBeDisplayed();
        expect(SignupPage.email).toBeDisplayed();
        expect(SignupPage.firstName).toBeDisplayed();
        expect(SignupPage.lastName).toBeDisplayed();
        expect(SignupPage.password).toBeDisplayed();
        expect(SignupPage.signUpBtn).toBeDisplayed();
    });

    it('should redirect to login page', function () {
        SignupPage.click(SignupPage.signInLink);
        expect(LoginPage.loginPageTitle).toBeDisplayed();
    });

    it('should show error message when password is less than 8 chars long', function () {
        SignupPage.password.setValue('Pass123');
        SignupPage.signUpBtn.click();
        expect(SignupPage.passwordError).toHaveText('The password should be at least 8 characters.');
    });
})