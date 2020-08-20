let homepage = function(){

    let firstNumber_input =  element(by.id('first_name'));
    let secondNumber_input = element(by.id('last_name'));
    let secondNumber_input = element(by.id('email'));
    let secondNumber_input = element(by.id('password'));

    let goButton = element(by.css('[submit]'));

    this.get =  function(url){
        browser.get(url);

    }

    this.enterFirstNumber = function(firstNo){
        firstNumber_input.sendKeys(firstNo);
    };

    this.enterSecondNumber = function(secondNo){
        secondNumber_input.sendKeys(secondNo);
    };

    this.clickGo = function(){
        goButton.click();
    };

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding' , result));
        expect(output.getText()).toEqual(result);
    }
};

module.exports = new homepage();