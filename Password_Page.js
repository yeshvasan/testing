var pass_page = function(){

    this.getTitle = function(){
        return element(by.css('h1')).getText();
    }
    this.getProfileIdentifier = function(){
        return element(by.id('profileIdentifier')).getText();
    }
    
    this.enterFieldValue = function(value){
            element(by.xpath('//*[@id="password"]/div[1]/div/div[1]/input')).sendKeys(value);
    };

    this.clickNext = function(){
        element(by.xpath('//*[@id="passwordNext"]/span/span')).click();
    };
}

module.exports = new pass_page();