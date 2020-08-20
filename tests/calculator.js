let homepage = require('../pages/homepage');

describe('demo calcualtor tests' , function(){
    
    it('addition test' , function(){

        homepage.get('http://localhost:4200/register');

        homepage.enterFirstNumber('Hiru@gmail.com');

        homepage.enterSecondNumber('123');

        homepage.enterThirdNumber('123');

        homepage.enterForthNumber('123');

        homepage.clickGo();

        //homepage.verifyResult('7');

        browser.sleep(2000)
    });

   
   /**  it('substraction test' , function(){

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('3');

        homepage.clickGo1();

        homepage.verifyResult('7');

        browser.sleep(2000)
    }) */
})