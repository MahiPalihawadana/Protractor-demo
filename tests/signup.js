

describe('register form tests', function(){

 
    //test case 1 - Valid inputs

    it('register user test valid inputs', function(){

        browser.get('http://localhost:4200/register');

        element(by.id('first_name')).sendKeys('Sathsarani'); 
        element(by.id('last_name')).sendKeys('Perera');
        element(by.id('email')).sendKeys('Sath@gmail.com');
        element(by.id('password')).sendKeys('123');



        var register_form = element(by.id('submit'));
        register_form.submit();
        
        browser.sleep(2000);

    });
 
    
    //test case 2 -  already registered user

         it('register user test valid inputs', function(){

        browser.get('http://localhost:4200/register');

        element(by.id('first_name')).sendKeys('Lahiru'); 
        element(by.id('last_name')).sendKeys('Dilshan');
        element(by.id('email')).sendKeys('Hiru@gmail.com');
        element(by.id('password')).sendKeys('123');



        var register_form = element(by.id('submit'));
        register_form.submit();
        
        browser.sleep(2000);

    });

    

   // test case 3 - without email
       it('register user test valid inputs', function(){

        browser.get('http://localhost:4200/register');

        element(by.id('first_name')).sendKeys('Vimasha'); 
        element(by.id('last_name')).sendKeys('Anuraji');
        element(by.id('email')).sendKeys(' ');
        element(by.id('password')).sendKeys('123');



        var register_form = element(by.id('submit'));
        register_form.submit();
        
        browser.sleep(2000);

    });

    


// test case 4 - without password
it('register user test valid inputs', function(){

    browser.get('http://localhost:4200/register');

    element(by.id('first_name')).sendKeys('Nilmini'); 
    element(by.id('last_name')).sendKeys('Rathnayaka');
    element(by.id('email')).sendKeys('Nilmini@gmail.com');
    element(by.id('password')).sendKeys('');



    var register_form = element(by.id('submit'));
    register_form.submit();
    
    browser.sleep(2000);

});


// test case 5- without inputs
it('register user test valid inputs', function(){

    browser.get('http://localhost:4200/register');

    element(by.id('first_name')).sendKeys(''); 
    element(by.id('last_name')).sendKeys('');
    element(by.id('email')).sendKeys('');
    element(by.id('password')).sendKeys('');



    var register_form = element(by.id('submit'));
    register_form.submit();
    
    browser.sleep(2000);

});


// test case 6 - Invalid email

it('register user test valid inputs', function(){

    browser.get('http://localhost:4200/register');

    element(by.id('first_name')).sendKeys('Thisari'); 
    element(by.id('last_name')).sendKeys('Dilshani');
    element(by.id('email')).sendKeys('Thisari');
    element(by.id('password')).sendKeys('123');



    var register_form = element(by.id('submit'));
    register_form.submit();
    
    browser.sleep(2000);

});


});