  //This module defines and implements Get Started Page objects and methods 

var GetStartedPage = function() {
	
	var userIcon = element(by.id('welcome-user'));
	
	this.userIconVisibility = function() {
		return userIcon.isPresent();
	};
	
};
module.exports = new GetStartedPage();