import totalPhoneBill from '../totalPhoneBill.js'
import assert from 'assert';

describe('Total phone bill', function () {
    
    it('totalPhoneBill function', function () {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

    });
   

