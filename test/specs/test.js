const chai = require('chai');
const chaiHttp = require('chai-http');
const spellChecker = require('spellchecker');

chai.Should();
chai.use(chaiHttp);


//------- Image and Graphic Tests -------//

describe('images and graphics ', function() {
    it('should load images and graphics', function () {
        browser.url('https://internet.frontier.com/');

        const url = 'https://internet.frontier.com/';
        const imgID = browser.getCssProperty('#js-track-logo','background-image');

        const baseUrlLength = url.length + 5;
        const endPoint = imgID.value.length - 2;
        // pulls file location from response
        const imgUrl = imgID.value.slice(baseUrlLength, endPoint);
        //console.log(url + imgUrl)
        return chai.request(url)
            .get(imgUrl)
            .then(function(res){
               // console.log(res.status);
                res.type.should.equal('image/svg+xml');
                res.should.have.status(200);
            })
    });

    it('should load images and graphics', function () {
        browser.url('https://internet.frontier.com/');

        const url = 'https://internet.frontier.com/';
        const imgID = browser.getCssProperty('.graphic--phone-white','background-image');

        const baseUrlLength = url.length + 5;
        const endPoint = imgID.value.length - 2;
        // pulls file location from response
        const imgUrl = imgID.value.slice(baseUrlLength, endPoint);
        //console.log(url + imgUrl)
        return chai.request(url)
            .get(imgUrl)
            .then(function(res){
                //console.log(res.status);
                res.type.should.equal('image/svg+xml');
                res.should.have.status(200);
            })
    });

    it('should load images and graphics', function () {
        browser.url('https://internet.frontier.com/');

        const url = 'https://internet.frontier.com/';
        const imgID = browser.getCssProperty('.hero--home','background-image');

        const baseUrlLength = url.length + 5;
        const endPoint = imgID.value.length - 2;
        // pulls file location from response
        const imgUrl = imgID.value.slice(baseUrlLength, endPoint);
        //console.log(url + imgUrl)
        return chai.request(url)
            .get(imgUrl)
            .then(function(res){
                //console.log(res.status);
                res.type.should.equal('image/png');
                res.should.have.status(200);
            })
    });

    it('should load images and graphics', function () {
        browser.url('https://internet.frontier.com/');

        const url = 'https://internet.frontier.com/';
        const imgID = browser.getCssProperty('.graphic--laptop','background-image');

        const baseUrlLength = url.length + 5;
        const endPoint = imgID.value.length - 2;
        // pulls file location from response
        const imgUrl = imgID.value.slice(baseUrlLength, endPoint);
        //console.log(url + imgUrl)
        return chai.request(url)
            .get(imgUrl)
            .then(function(res){
                //console.log(res.status);
                res.type.should.equal('image/svg+xml');
                res.should.have.status(200);
            })
    });

    it('should load images and graphics', function () {
        browser.url('https://internet.frontier.com/');

        const url = 'https://internet.frontier.com/';
        const imgID = browser.getCssProperty('.graphic--tv','background-image');

        const baseUrlLength = url.length + 5;
        const endPoint = imgID.value.length - 2;
        // pulls file location from response
        const imgUrl = imgID.value.slice(baseUrlLength, endPoint);
        //console.log(url + imgUrl)
        return chai.request(url)
            .get(imgUrl)
            .then(function(res){
                //console.log(res.status);
                res.type.should.equal('image/svg+xml');
                res.should.have.status(200);
            })
    });

    it('should load images and graphics', function () {
        browser.url('https://internet.frontier.com/');

        const url = 'https://internet.frontier.com/';
        const imgID = browser.getCssProperty('.graphic--phone','background-image');

        const baseUrlLength = url.length + 5;
        const endPoint = imgID.value.length - 2;
        // pulls file location from response
        const imgUrl = imgID.value.slice(baseUrlLength, endPoint);
        //console.log(url + imgUrl)
        return chai.request(url)
            .get(imgUrl)
            .then(function(res){
                //console.log(res.status);
                res.type.should.equal('image/svg+xml');
                res.should.have.status(200);
            })
    });

    it('should load images and graphics', function () {
        browser.url('https://internet.frontier.com/');

        const url = 'https://internet.frontier.com/';
        const imgID = browser.getCssProperty('.graphic--bundles','background-image');

        const baseUrlLength = url.length + 5;
        const endPoint = imgID.value.length - 2;
        // pulls file location from response
        const imgUrl = imgID.value.slice(baseUrlLength, endPoint);
        //console.log(url + imgUrl)
        return chai.request(url)
            .get(imgUrl)
            .then(function(res){
                //console.log(res.status);
                res.type.should.equal('image/svg+xml');
                res.should.have.status(200);
            })
    });

    it('should load images and graphics', function () {
        browser.url('https://internet.frontier.com/');

        const url = 'https://internet.frontier.com/';
        const imgID = browser.getCssProperty('.section--address-check','background-image');

        const baseUrlLength = url.length + 5;
        const endPoint = imgID.value.length - 2;
        // pulls file location from response
        const imgUrl = imgID.value.slice(baseUrlLength, endPoint);
        //console.log(url + imgUrl)
        return chai.request(url)
            .get(imgUrl)
            .then(function(res){
                //console.log(res.status);
                res.type.should.equal('image/png');
                res.should.have.status(200);
            })
    });

    it('should load images and graphics', function () {
        browser.url('https://internet.frontier.com/');

        const url = 'https://internet.frontier.com/';
        const imgID = browser.getCssProperty('.section--shop-bundles','background-image');

        const baseUrlLength = url.length + 5;
        const endPoint = imgID.value.length - 2;
        // pulls file location from response
        const imgUrl = imgID.value.slice(baseUrlLength, endPoint);
        //console.log(url + imgUrl)
        return chai.request(url)
            .get(imgUrl)
            .then(function(res){
                //console.log(res.status);
                res.type.should.equal('image/png');
                res.should.have.status(200);
            })
    });

    it('should load images and graphics', function () {
        browser.url('https://internet.frontier.com/');

        const url = 'https://internet.frontier.com/';
        const imgID = browser.getAttribute('img', 'src');

        //console.log(imgID[1].length);
        const baseUrlLength = url.length;
        // separates image folder location from full url for chai request
        const imgUrl = imgID[1].slice(baseUrlLength);
        // console.log(url + imgUrl)
        return chai.request(url)
            .get(imgUrl)
            .then(function(res){
                //console.log(res.status);
                res.type.should.equal('image/gif');
                res.should.have.status(200);
            })
    });
});







//------- Format Tests -------//


describe('price, phone number', function(){
    it('should have the proper phone number format', function () {
        browser.url('https://internet.frontier.com/');

        const numberText = browser.getText('[href="tel:855-849-4050"]');
        let testNumber;
        //console.log(numberText[1],numberText[0])
        function validatePhoneNumber(phoneNumber) {
            const pattern = /^(?:\+?1[.]?)?\(?([0-9]{3})\)?[.]?([0-9]{3})[.]?([0-9]{4})$/;

            testNumber = pattern.test(phoneNumber);
            //console.log(testNumber);
        }
        //check both instances for match then test with REGEX
        if(numberText[0] === numberText[1]){
            validatePhoneNumber(numberText[0])

        } else {
            testNumber = false;
        }


        testNumber.should.equal(true);
    });

    it('should have the proper currency format', function () {
        browser.url('http://internet.frontier.com/');

        const textForTest = browser.getText('p.price__terms');

        const pattern = /(?:[$])\s*\d+(?:\.\d{2})?/;
        const textArray = textForTest.split(' ');
        //console.log(textArray);
        let filterResultArray = [];
        let testResult;

        for ( i = 0; i < textArray.length; i++ ){
            let check = pattern.test(textArray[i]);

            //console.log(check)
            if( check === true){
                filterResultArray.push(textArray[i]);
                // console.log(filterResultArray)

            }
            else {
                testResult = false;
            }
        }
        if(filterResultArray.length === 2){
            testResult = true;
        }

        testResult.should.equal(true);
        //console.log(filterResultArray);

    })
});







//------- Form Validation -------//


describe('form validation', function() {
    it('should submit with proper information', function () {
        browser.url('https://internet.frontier.com/');

        browser.setValue('.js-track-form-zip', '28173');
        browser.click('#form-address-check');
        browser.waitUntil(function () {
            return browser.getUrl() === 'https://internet.frontier.com/plans-pricing.html'
        }, 6000, 'expected new url');


    });


    it('should submit with no information', function () {
        browser.url('https://internet.frontier.com/');
        browser.click('#form-address-check');
        const errorText = browser.getText('div.section--address-check__form-wrap p.form__error');

        errorText.should.equal('Address is required.');

    });


    it('should submit with incorrect information', function() {
        browser.url('https://internet.frontier.com/');
        browser.setValue('.js-track-form-zip', 'abcdef');
        browser.click('#form-address-check');
        browser.waitUntil(function () {
                    return browser.getUrl() === 'https://internet.frontier.com/'
                }, 2000, 'expected same url');
    })
});







//------- Link URL direction -------//


describe('link direction', function() {

    let pageLinks = [];
    let n = 38;

    it('should populate array of links by href', function () {
        browser.url('https://internet.frontier.com/');

        //  get all <a> tags href value  //
        const list = browser.getAttribute('a' , 'href');

        // filter items remove tel and # links
        for( i=0; i < list.length-1; i++){
            if(list[i] !== null) {
                if(list[i].length > 32){
                    pageLinks.push(list[i])
                }
            }
        }
        // n = pageLinks.length;
        // console.log(pageLinks);
        pageLinks.length.should.be.greaterThan(0);

    });


    // it('should test a link', function () {
    //     return chai.request(pageLinks[3])
    //         .get('/')
    //         .then(function (res) {
    //             console.log(pageLinks[3])
    //         })
    // })


    for(let i=0; i < n; i++){
        it('should load and check a link', function(){

           return chai.request(pageLinks[i])
               .get('/')
               .then(function (res) {
                   //console.log(res.status);
                   expect(res, pageLinks[i]).to.have.status(200);
               })


            //------- have trouble dealing with 301 Permanently Moved tests on url https://www.frontier.com/BillPay/Login
            //------- redirects to https://frontier.com/login?target=2f6163636f756e74 with status 200 in Postman
            //------- curl -I https://www.frontier.com/BillPay/Login shows 301 Permanently Moved
        })
    }
});







//------- Check Spelling -------//



describe('link direction', function() {

let wordsArray = [];
const tagsArray = ['a', 'p', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'button', 'span'];
let misspelledWords = [];


// removes any non alphabetic characters //
const pattern = /^[A-z]+$/;

    function getWords() {
        //  get all text from tags in tagsArray  //
        for(i=0; i < tagsArray.length; i++) {
            const textList = browser.getText(tagsArray[i]);

            for (j = 0; j < textList.length; j++) {
                const wordParse = textList[j].split(' ');

                for (k = 0; k < wordParse.length; k++) {
                    let check = pattern.test(wordParse[k]);

                    //console.log(check)
                    // removed FiOS and Espanol from testing //
                    if (check === true && wordParse[k].length > 1 && wordParse[k] !== 'FiOS' && wordParse[k] !== 'Espanol') {
                        wordsArray.push(wordParse[k]);

                    }
                }
            }
        }
    }

    it('should populate array of words from site text', function () {
        browser.url('https://internet.frontier.com/');

        getWords();
        //console.log(wordsArray, wordsArray.length);
        expect(wordsArray.length).to.be.greaterThan(0)
    });


    it('should spell check each word in wordsArray for spelling mistakes', function () {
        for(let i=0; i < wordsArray.length; i++) {
            const spellingStatus = spellChecker.isMisspelled(wordsArray[i]);

            if(spellingStatus === true){
                misspelledWords.push(wordsArray[i]);
            }
        }

        //console.log(misspelledWords);
        expect(misspelledWords.length, 'These words were misspelled '+misspelledWords).to.equal(0);

    });





});






//------- Animations and Styles -------//


describe('style verification', function(){

    // -------Footer Links Section ------- //

    let footerLinks = [];


    it('should get list of links in footer', function () {
        browser.url('https://internet.frontier.com/');
        footerLinks = browser.getAttribute('.nav-footer__menu-item', 'id');
        //console.log(footerLinks[0])
    });

    it('should check for hover for nav footer links', function () {
        browser.url('https://internet.frontier.com/');

        browser.scroll('li#' + footerLinks[1]).moveToObject('li#' + footerLinks[1] + ' a').pause(1000);

        let colorCode = browser.getCssProperty(('li#' + footerLinks[1] + ' a'),'color');
        //console.log(colorCode.parsed.hex);

        expect(colorCode.parsed.hex, 'id '+footerLinks[1]).to.equal('#d62a33')
    });

    it('should check for hover for nav footer links', function () {
        browser.url('https://internet.frontier.com/');

        browser.scroll('li#' + footerLinks[2]).moveToObject('li#' + footerLinks[2] + ' a').pause(1000);

        let colorCode = browser.getCssProperty(('li#' + footerLinks[2] + ' a'),'color');
        //console.log(colorCode.parsed.hex);

        expect(colorCode.parsed.hex, 'id '+footerLinks[0]).to.equal('#d62a33')
    });

    it('should check for hover for nav footer links', function () {
        browser.url('https://internet.frontier.com/');

        browser.scroll('li#' + footerLinks[3]).moveToObject('li#' + footerLinks[3] + ' a').pause(1000);

        let colorCode = browser.getCssProperty(('li#' + footerLinks[3] + ' a'),'color');
        //console.log(colorCode.parsed.hex);

        expect(colorCode.parsed.hex, 'id '+footerLinks[3]).to.equal('#d62a33')
    });

    it('should check for hover for nav footer links', function () {
        browser.url('https://internet.frontier.com/');

        browser.scroll('li#' + footerLinks[4]).moveToObject('li#' + footerLinks[4] + ' a').pause(1000);

        let colorCode = browser.getCssProperty(('li#' + footerLinks[4] + ' a'),'color');
        //console.log(colorCode.parsed.hex);

        expect(colorCode.parsed.hex, 'id '+footerLinks[0]).to.equal('#d62a33')
    });

    it('should check for hover for nav footer links', function () {
        browser.url('https://internet.frontier.com/');

        browser.scroll('li#' + footerLinks[5]).moveToObject('li#' + footerLinks[5] + ' a').pause(1000);

        let colorCode = browser.getCssProperty(('li#' + footerLinks[5] + ' a'),'color');
        //console.log(colorCode.parsed.hex);

        expect(colorCode.parsed.hex, 'id '+footerLinks[5]).to.equal('#d62a33')
    });

    it('should check for hover for nav footer links', function () {
        browser.url('https://internet.frontier.com/');

        browser.scroll('li#' + footerLinks[6]).moveToObject('li#' + footerLinks[6] + ' a').pause(1000);

        let colorCode = browser.getCssProperty(('li#' + footerLinks[6] + ' a'),'color');
        //console.log(colorCode.parsed.hex);

        expect(colorCode.parsed.hex, 'id '+footerLinks[6]).to.equal('#d62a33')
    });

    it('should check for hover for nav footer links', function () {
        browser.url('https://internet.frontier.com/');

        browser.scroll('li#' + footerLinks[7]).moveToObject('li#' + footerLinks[7] + ' a').pause(1000);

        let colorCode = browser.getCssProperty(('li#' + footerLinks[7] + ' a'),'color');
        //console.log(colorCode.parsed.hex);

        expect(colorCode.parsed.hex, 'id '+footerLinks[7]).to.equal('#d62a33')
    });

    it('should check for hover for nav footer links', function () {
        browser.url('https://internet.frontier.com/');

        browser.scroll('li#' + footerLinks[8]).moveToObject('li#' + footerLinks[8] + ' a').pause(1000);

        let colorCode = browser.getCssProperty(('li#' + footerLinks[8] + ' a'),'color');
        //console.log(colorCode.parsed.hex);

        expect(colorCode.parsed.hex, 'id '+footerLinks[8]).to.equal('#d62a33')
    });

    it('should check for hover for nav footer links', function () {
        browser.url('https://internet.frontier.com/');

        browser.scroll('li#' + footerLinks[9]).moveToObject('li#' + footerLinks[9] + ' a').pause(1000);

        let colorCode = browser.getCssProperty(('li#' + footerLinks[9] + ' a'),'color');
        //console.log(colorCode.parsed.hex);

        expect(colorCode.parsed.hex, 'id '+footerLinks[9]).to.equal('#d62a33')
    });




});


