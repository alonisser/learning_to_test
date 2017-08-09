'use strict';
const expect = require('chai').expect;
const normalizePhoneNumber = require('../src/phoneNormalizer');
//Inspiration: https://github.com/googlei18n/libphonenumber/blob/master/FALSEHOODS.md
//https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers#United_States.2C_Canada.2C_and_other_NANP_countries

describe('phone normalizer functionality', ()=> {
    before(()=> {

    });
    after(()=> {

    });
    it('Should remove hyphens', ()=> {
        let num = '054-6734469';
        let normalizedResult = normalizePhoneNumber(num);
        expect(normalizedResult).to.be.eq('0546734469')
    });

    //Throw a PhoneValidationError on invalid phone

    // Oh no. we moved to mexico (01) 55 1234 5678

    //Support *3320 format

    //When international number drop unneeded zero +972-054-673-4469 => +972546734469

    // Some of international users add leading 00 to get inernational line before the number. should be removed

    // The germans are coming +49 (AAAA) BBBBBB



});