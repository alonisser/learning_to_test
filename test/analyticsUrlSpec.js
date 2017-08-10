'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const Promise = require('bluebird');
const  {AnalyticsAwareShortenUrlBuilder, AnalyticsUrlBuilder} = require('../src/analyticsUrlBuilder');

describe('urlBuilder', ()=>{
    it('adds utm_campaign to query', ()=>{
        let aUrl = 'https://amitRahavRules.com'
        let builder = new AnalyticsUrlBuilder(aUrl, 'winning')
        let result = builder.build();
        expect(result).to.be.eq('https://amitRahavRules.com?utm_campaign=winning')
    })

    it('Shorten Url', (done)=>{

        let aUrl = 'https://amitRahavRules.com';
        let analyticsAwareShortner = new AnalyticsAwareShortenUrlBuilder(aUrl, 'winning');
        var stub = sinon.stub(analyticsAwareShortner, '_shorten').callsFake( ()=>{
            return Promise.resolve({url:'https://bitly/shortUrl'})
        })
        analyticsAwareShortner.build()
            .then((result)=>{
                expect(result).to.be.eq('https://bitly/shortUrl')
                expect(stub.callCount).to.be.eq(1)
                done()
            })
            .catch(done)
    })

});
//1.Rules: Add Optional utm_campaign utm_medium utm_source to the query of the url, do not add if not needed (From outside)
// example.com?utm_campaign=alon&utm_medium=sharon

// 2. Do we handle existing query part?

// Testing a valid equal query

// 3. Oh now they want us to use bitly to shorten {url:newUrl}



// 4. Bitly stops respecting our shortening requests since we abuse the free limits, all for the same url
