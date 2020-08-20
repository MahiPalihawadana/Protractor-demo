

describe('register form tests', function(){


    //test case 1 - Valid inputs

    it('register user test valid inputs', function(){

        browser.get('http://localhost:4200/signup');

        element(by.id('inputEmail')).sendKeys('Dinithi@gmail.com');
        
        
        element(by.id('inputPassword')).sendKeys('123');



        var register_form = element(by.id('submit'));
        register_form.submit();
        
        browser.sleep(2000);

    });
 
    
    //test case 2 -  already registered email

     it('register user test with already registered email', function(){

        browser.get('http://localhost:4200/signup');

        element(by.id('inputEmail')).sendKeys('Hiru@gmail.com');
        
        
        element(by.id('inputPassword')).sendKeys('123');



        var register_form = element(by.id('submit'));
        register_form.submit();
        
        browser.sleep(2000);

    });

    

   // test case 3 - without email
   it('register user test without email', function(){

    browser.get('http://localhost:4200/signup');

    element(by.id('inputEmail')).sendKeys('');
    
    
    element(by.id('inputPassword')).sendKeys('123');



    var register_form = element(by.id('submit'));
    register_form.submit();
    
    browser.sleep(2000);

});


// test case 4 - without password
it('register user test without password', function(){

    browser.get('http://localhost:4200/signup');

    element(by.id('inputEmail')).sendKeys('Karu@gmail.com');
    
    
    element(by.id('inputPassword')).sendKeys('');



    var register_form = element(by.id('submit'));
    register_form.submit();
    
    browser.sleep(2000);

});


// test case 5- without inputs
it('register user test without inputs', function(){

    browser.get('http://localhost:4200/signup');

    element(by.id('inputEmail')).sendKeys('');
    
    
    element(by.id('inputPassword')).sendKeys('');



    var register_form = element(by.id('submit'));
    register_form.submit();
    
    browser.sleep(2000);

});



// test case 6 - password less than 3 characters

it('register user test without inputs', function(){

    browser.get('http://localhost:4200/signup');

    element(by.id('inputEmail')).sendKeys('Minoli@gmail.com');
    
    
    element(by.id('inputPassword')).sendKeys('12');



    var register_form = element(by.id('submit'));
    register_form.submit();
    
    browser.sleep(2000);

});



});