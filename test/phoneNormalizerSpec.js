'use strict';
const expect = require('chai').expect;
const {PhoneValidationError1, PhoneValidationError2, normalizePhoneNumber} = require('../src/phoneNormalizer');
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

    it('Should remove ALL hyphens', ()=> {
        let num = '054-673-4469';
        let normalizedResult = normalizePhoneNumber(num);
        expect(normalizedResult).to.be.eq('0546734469')
    });

    it('Should not accept empty values', () => {
        let num = '';
        expect(() => {
            
            normalizePhoneNumber(num);
        
        }).to.throw(PhoneValidationError1);
    })

    it('Should remove ALL blanks ()', ()=> {
        let num = '(1) 54 673 4469';
        let normalizedResult = normalizePhoneNumber(num);
        expect(normalizedResult).to.be.eq('1546734469')
    });

    it('Should support special numbers', ()=> {
        let num = '*2330';
        let normalizedResult = normalizePhoneNumber(num);
        expect(normalizedResult).to.be.eq('*2330')
    });

    it('Should clean  international formatted number', ()=> {
        let num = '+972-054-673--------------4595';
        let normalizedResult = normalizePhoneNumber(num);
        expect(normalizedResult).to.be.eq('972546734595')
    });

    it('Should remove 00 prefix', ()=> {
        let num = '00972-54673-5034';
        let normalizedResult = normalizePhoneNumber(num);
        expect(normalizedResult).to.be.eq('972546735034')
    });

});