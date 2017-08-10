'use strict';
class PhoneValidationError1 extends Error {

}

class PhoneValidationError2 extends Error {

}


const normalizePhoneNumber = (phoneNumber)=>{
    if (!phoneNumber){
        throw new PhoneValidationError1('zibi');
    }



    phoneNumber = phoneNumber
        .replace(/-/g, '')
        .replace(/\(/g,'')
        .replace(/\)/g,'')
        .replace(/\s/g,'')
        .replace('+9720', '972');

    if(phoneNumber.startsWith('00')) {
        phoneNumber = phoneNumber.substring(2);
    }

    return phoneNumber;
};

module.exports = {PhoneValidationError1, PhoneValidationError2, normalizePhoneNumber};