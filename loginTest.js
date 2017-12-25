
var loginPage = require('./loginPage.js');	
var getStartedPage = require('./getStartedPage.js');	
describe('Basic Login testing ', function() {

    function loginWrongUserName() {
		loginPage.clearUserName();
		loginPage.clearPwd();
		loginPage.enterWrongUserName();
	    loginPage.enterPassword();
		loginPage.clickLoginButton();
		expect(loginPage.wrongPasswordNotificationStatus()).toBe(true);
  };
  
      function loginEmptyUserName() {
		loginPage.clearUserName();
		loginPage.clearPwd();		
	    loginPage.enterPassword();
		loginPage.clickLoginButton();
		expect(loginPage.wrongPasswordNotificationStatus()).toBe(true);
  };
  
  function loginWrongPassword() {
		loginPage.clearUserName();
		loginPage.clearPwd();
		loginPage.enterUserName();
	    loginPage.enterWrongPassword();
		loginPage.clickLoginButton();
		expect(loginPage.wrongPasswordNotificationStatus()).toBe(true);
  };
  
  function loginEmptyPassword() {
		loginPage.clearUserName();
		loginPage.clearPwd();
		loginPage.enterUserName();
		loginPage.clickLoginButton();
		expect(loginPage.wrongPasswordNotificationStatus()).toBe(true);
  };
  
    function loginCorrect() {
		loginPage.clearUserName();
		loginPage.clearPwd();
		loginPage.enterUserName();
	    loginPage.enterPassword();
		loginPage.clickLoginButton();
		expect(getStartedPage.userIconVisibility()).toBe(true);
  };
  
  
  beforeEach(function() {
	  browser.ignoreSynchronization = true;
	  window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
    });


  
   it('run Login tests', function() {
	   loginPage.get();
	   loginWrongUserName();
	   loginEmptyUserName();
	   loginWrongPassword();
	   loginEmptyPassword();
	   loginCorrect();
	});
  });