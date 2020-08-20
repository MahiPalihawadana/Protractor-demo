var LoginModule = function () {
    //selecting login button
    var gobtn = element(by.xpath('//*[@id="content-wrapper"]/div/div/div/div[2]/form/div[3]/button'));
    //selecting username space
    var username1 = element(by.xpath('//*[@id="content-wrapper"]/div/div/div/div[2]/form/div[1]/input'));
    //selecting user psassword
    var pwd = element(by.xpath('//*[@id="inputPassword"]'));
    //forget username link
    var forgetlink1 = element(by.xpath('//*[@id="content-wrapper"]/div/div/div/div[3]/div/a[1]'));
    //forget password link
    var forgetlink2 = element(by.xpath('//*[@id="content-wrapper"]/div/div/div/div[3]/div/a[2]'));

    //select the project
   // var selectProject = element(by.css('body > app-root > app-landing > div > div:nth-child(2) > div > div > div.px-2.pt-0.pb-2 > div > ag-grid-angular > div > div.ag-root-wrapper-body.ag-layout-normal > div > div.ag-body.ag-layout-normal.ag-row-no-animation > div.ag-body-viewport-wrapper > div > div'));
   // var selectProject = element(by.xpath('/html/body/app-root/app-landing/div/div[2]/div/div/div[2]/div/ag-grid-angular/div/div[2]/div[1]/div[3]/div[2]/div/div/div[1]/div[2]'));


   
   
    //Locating the profile button to logout
    // var profileButton = element( by.xpath('//*[@id="navbarSupportedContent"]/div/button[2]') );
    
	//Locating the logout button
	// var logoutButton = element( by.xpath('/html/body/app-root/app-header/header/nav/ul/li/div/div[2]/a') );
    //Creating another function to navigate to the browser URL
    this.navigate = function () {
        console.log("==Start LoginModule navigate");
        browser.driver.sleep(2000);
         //browser get login UI
        browser.get(LoginModule.homeUrl);
        console.log("==End LoginModule navigate");
       
    };

     this.login = function (username, password) {

        console.log("==Start LoginModule login");
        //browser.driver.sleep(10000);
		console.log("==Enter username");
        //Here we are entering the user name and password
        username1.sendKeys(username);
        pwd.sendKeys(password);
       // browser.driver.sleep(5000);
        //Clicking on login button
        gobtn.click();
        //select the project
      //  selectProject.click();
		console.log("==End LoginModule login");
    };

    // //Clicking on Forgot username button
	// this.username = function(username) {
    //     console.log("==Start LoginModule forgotusername");
    //     pwd.sendKeys(password);
    //     forgetlink1.click();
	// 	console.log("==End LoginModule forgotusername");
    // };
    // // //Clicking on Forgot password button
	// this.forgotPassword = function(password) {
    //     console.log("==Start LoginModule forgotPassword");
    //     username1.sendKeys(username);
    //     forgetlink2.click();
	// 	console.log("==End LoginModule forgotPassword");
    // };
    //   // loging out from the app
	// this.logout = function() {
	// 	console.log("==Start LoginModule logout");
    //     //Here we are clicking on profile button to logout
    //     browser.driver.sleep(10000);
    //     profileButton.click();
    //     browser.driver.sleep(2000);
	// 	//Clicking on log out button
	// 	logoutButton.click();
    //     console.log("==End LoginModule logout");
        
    // }; 
};

LoginModule.homeUrl = "http://cohportalclient.us-east-2.elasticbeanstalk.com/login/admin";
// LoginModule.loginUrl = "http://cohportalclient.us-east-2.elasticbeanstalk.com/login/admin"

module.exports = LoginModule;