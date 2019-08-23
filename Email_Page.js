var email_page = function(){
    this.enterFieldValue = function(value){
        element(by.id('identifierId')).sendKeys(value);
        
    };
    this.clickNext = function(){
        element(by.xpath('//*[@id="identifierNext"]/span/span')).click();
    }
}

module.exports = new email_page();