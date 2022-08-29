
import isWeekDay from '../isWeekDay.js'
import assert from 'assert';

describe('IS it a weekday', function () {
    

    it('isWeekDay function', function () {

        assert.equal(false, isWeekDay('Saturday'));
        assert.equal(false, isWeekDay('Sunday'));

    });

    


});