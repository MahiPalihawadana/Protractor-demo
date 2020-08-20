var LoginModule = require("./LoginModule.js");
describe('COH RoUser Login', function () {

//     //Navigating to the URL
    var loginModule = new LoginModule();
//Invalid login Alert Message
// var alertMessage = element(by.xpath(''));
//forget password link alert message
// var forgotAlertMessage = element(by.xpath(''));       
    beforeEach(function() {
        loginModule.navigate();
        browser.driver.sleep(500);
		
      });
	


    //login with valid username and valid password
   it('valid login', function () {   
        console.log("==Start valid login");
        browser.driver.sleep(2000);
        loginModule.login("xxAdmin1", "xx@123");
        browser.driver.sleep(20000);
        //expect(alertMessage.isPresent()).toBe(true);
        console.log("==end valid login");
          
     });
    


// //login with valid username and invalid password
 it('invalid login Password', function () {       
        console.log("==Start invalid login Password");
        loginModule.login("xxAdmin1", "xx@23");   
        browser.driver.sleep(2000);
        // expect(alertMessage.isPresent()).toBe(true);
        browser.driver.sleep(20000);
        console.log("==end invalid login Password");
  });

 
 
// // //login with invalid username and valid password
 it('invalid login Username', function () {       
        console.log("==Start invalid login Username");
        loginModule.login("xx", "xx@123");
        browser.driver.sleep(5000);
        //expect(alertMessage.isPresent()).toBe(true);
        browser.driver.sleep(20000);
        console.log("==end invalid login Username");
  });


//   //login with empty password
 it('empty password filed', function () {       
        console.log("==Start login with empty password filed");
        loginModule.login("xx@1", ""); 
        browser.driver.sleep(2000);
        // expect(alertMessage.isPresent()).toBe(true);
        browser.driver.sleep(20000);
        console.log("==end login with empty password filed");
   });

 
//    //login with empty username
  it('empty username field', function () {       
        console.log("==Start empty username filed");
        loginModule.login("", "xx@123");
        browser.driver.sleep(2000);
        // expect(alertMessage.isPresent()).toBe(true);
        browser.driver.sleep(2000);
        console.log("==end empty username filed");
    });


// //login with both empty username and password
  it('both empty fields', function () {       
        console.log("==Start login with both empty fields");
        loginModule.login(" ", "");
        browser.driver.sleep(2000);
        // expect(alertMessage.isPresent()).toBe(true);
        browser.driver.sleep(2000);
        console.log("==end login with both empty fields");
  });


		
});