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



});