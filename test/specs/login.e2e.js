const LoginPage = require('../pageobjects/login.page');
const SignUpPage = require('../pageobjects/signup.page');
const HomePage = require('../pageobjects/home.page');

describe('Test login functionality', function () {

    beforeEach (function () {
        LoginPage.open('login');
    });

    it('should verify the interactive elements on login page', function () {
        expect(LoginPage.email).toBeDisplayed();
        expect(LoginPage.password).toBeDisplayed();
        expect(LoginPage.loginBtn).toBeDisplayed();
        expect(LoginPage.createAccountLink).toBeDisplayed();
        expect(LoginPage.resetPassword).toBeDisplayed();
    });

    it('should have valid placeholders', function () {
        expect(LoginPage.email).toHaveAttribute('placeholder', 'john.doe@example.com');
        expect(LoginPage.password).toHaveAttribute('placeholder', 'Enter your password…');
    });

    it('should redirect to sign up page by click on create an account link', function () {
        LoginPage.click(LoginPage.createAccountLink);
        expect(SignUpPage.signUpPageTitle).toHaveText('Create an account');
    })

    it('should mask password when enter', function () {
        expect(LoginPage.password).toHaveAttribute('type', 'password');
    });

    it('should login and logout successfully', function () {
        LoginPage.with('vivek.kurhe@theredpandas.com', 'Vivek@123');
        expect(HomePage.homePageTitle).toBeDisplayed();
        HomePage.logout();
        expect(HomePage.homePageTitle).toBeDisplayed();
    });

    it('should not take user to logged in mode by clicking browser back button after successful logout', function () {
        LoginPage.with('vivek.kurhe@theredpandas.com', 'Vivek@123');
        HomePage.logout();
        browser.back();
        expect(HomePage.homePageTitle).toBeDisplayed();
    });

    it('should not take user to logged out mode by clicking browser back button after successful login', function () {
        LoginPage.with('vivek.kurhe@theredpandas.com', 'Vivek@123');
        browser.back();
        expect(HomePage.homePageTitle).toBeDisplayed();
    });

});