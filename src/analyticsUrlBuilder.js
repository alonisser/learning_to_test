'use strict';
const Promise = require('bluebird');
const Bitly = require('bitly');

class AnalyticsUrlBuilder {
    constructor(theUrl, campaign){
        this.url = theUrl;
        this.campaign = campaign;
    }
    build(){
        return `${this.url}?utm_campaign=${this.campaign}`
    }
}

class AnalyticsAwareShortenUrlBuilder {
    constructor(theUrl, campaign){
        this.url = theUrl;
        this.campaign = campaign;
        this.client = new Bitly('1111', {format: 'text'});
    }
    
    build(){
        let analyticsBuilder = new AnalyticsUrlBuilder(this.url, this.campaign);
        let analyticsUrl = analyticsBuilder.build();
        return this._shorten(analyticsUrl)
            .then((result)=>{
                return result.url
            })
    }
    
    _shorten(aUrl){
        return this.client.shorten(aUrl)
    }
}

module.exports = {AnalyticsAwareShortenUrlBuilder, AnalyticsUrlBuilder}