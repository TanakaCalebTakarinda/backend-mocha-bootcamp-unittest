import assert from 'assert';
import fromWhere from '../fromWhere.js'
describe('The from where fuction', function(){

    
    it('Should give the correct city', function () {

        assert.equal('Bellville', fromWhere('CY'));
        assert.equal('Paarl', fromWhere('CJ'));
    });

});