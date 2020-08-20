describe('login form tests', function(){

 
    //test case 1 - Valid inputs

    it('login user test valid inputs', function(){

        browser.get('http://localhost:4200/login');

      
        
        element(by.id('email')).sendKeys('Hiru@gmail.com');
        element(by.id('password')).sendKeys('123');



        var register_form = element(by.id('submit'));
        register_form.submit();
        
        browser.sleep(2000);

    });

    //test case 2 - Not registered user

    it('login user test not registered user', function(){

        browser.get('http://localhost:4200/login');

      
        
        element(by.id('email')).sendKeys('Piyumi@gmail.com');
        element(by.id('password')).sendKeys('444');



        var register_form = element(by.id('submit'));
        register_form.submit();
        
        browser.sleep(2000);

    });

        //test case 3 - Incorrect password

        it('login user test incorrect password', function(){

            browser.get('http://localhost:4200/login');
    
          
            
            element(by.id('email')).sendKeys('Hiru@gmail.com');
            element(by.id('password')).sendKeys('555');
    
    
    
            var register_form = element(by.id('submit'));
            register_form.submit();
            
            browser.sleep(2000);
    
        });

            //test case 4 - Incorrect email

    it('login user test incorrect email', function(){

        browser.get('http://localhost:4200/login');

      
        
        element(by.id('email')).sendKeys('Hir@gmail.com');
        element(by.id('password')).sendKeys('123');



        var register_form = element(by.id('submit'));
        register_form.submit();
        
        browser.sleep(2000);

    });
        //test case 1 - without inputs

        it('login user test without inputs', function(){

            browser.get('http://localhost:4200/login');
    
          
            
            element(by.id('email')).sendKeys('');
            element(by.id('password')).sendKeys('');
    
    
    
            var register_form = element(by.id('submit'));
            register_form.submit();
            
            browser.sleep(2000);
    
        });
});