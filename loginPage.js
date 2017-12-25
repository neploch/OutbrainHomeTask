 //This module defines and implements Login Page objects and methods 
var LoginPage = function() {
	
	var loginPageUrl = 'https://my.outbrain.com/';
	var userName = 'neploch@gmail.com';
	var pwd = 'Mylove12';  
	var wrongPwd = 'kukureku';
	var wrongUserName = 'yaya@kuku.com';	
    var userNameFiled = element(by.name('loginUsername'));
    var passwordFiled = element(by.name('loginPassword'));
    var loginButton = element(by.id('loginButton'));
	var wrongPassNotification = element(by.className('wrong-pass'));
	
	this.get = function() {
    browser.get(loginPageUrl);
    };
    this.wrongPasswordNotificationStatus = function() {
		return wrongPassNotification.isPresent();
	};
    
	this.clearUserName = function() {
        userNameFiled.clear();
    };
	
	this.clearPwd = function() {
        passwordFiled.clear();
    };
	
    this.enterUserName = function() {
        userNameFiled.sendKeys(userName);
    };
     
	this.enterWrongUserName = function() {
        userNameFiled.sendKeys(wrongUserName);
    };
	
	this.enterPassword = function() {
        passwordFiled.sendKeys(pwd);
    };
	
	this.enterWrongPassword = function() {
        passwordFiled.sendKeys(wrongPwd);
    }; 
     
    this.clickLoginButton = function() {
        loginButton.click();
    };
};
module.exports = new LoginPage();