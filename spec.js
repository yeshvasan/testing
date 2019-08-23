describe('google signin',()=>{
    
        browser.ignoreSynchronization = true;
        browser.get('https://accounts.google.com/signin')
   

    var email_page = require('./Email_Page');

it('should enter the mail id',()=>{
    email_page.enterFieldValue("prakashvasan41@gmail.com");
    email_page.clickNext();
    browser.sleep('3000');
});

var pass_page = require('./Password_Page');
it('should enter the password',()=>{
    expect(pass_page.getTitle()).toBe('Welcome');
    expect(pass_page.getProfileIdentifier()).toEqual('prakashvasan41@gmail.com');
    pass_page.enterFieldValue("prakashvasanprakash8608663937");
    pass_page.clickNext();
    browser.sleep('3000');

});

})