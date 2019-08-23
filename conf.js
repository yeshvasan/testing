var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    directConnect: true,
    capabilities:{
        'browserName':'chrome'
    },
    
    framework: 'jasmine2',
    specs:['spec.js'],
    
    onPrepare:function(){
        
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath:'desktop/automation'
            })
        );
    }
};