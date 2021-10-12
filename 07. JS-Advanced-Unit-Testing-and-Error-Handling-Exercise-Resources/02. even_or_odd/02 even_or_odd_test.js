const expect = require('chai').expect;
const {isOddOrEven} = require('./02 even_or_odd');

describe('Symmetry Checker', () =>{
    it('returns length for even strings', () => {
        expect(isOddOrEven('test')).to.equal('even');
        expect(isOddOrEven('222.')).to.equal('even');
    });
    it('returns odd for uneven strings', () => {
        expect(isOddOrEven('aaa')).to.be.equal('odd');
        expect(isOddOrEven('111')).to.be.equal('odd');
    });
    it('return undefined for non strings', ()=>{
        expect(isOddOrEven(1)).to.be.equal(undefined);
        expect(isOddOrEven(['test'])).to.be.equal(undefined);
        expect(isOddOrEven(undefined)).to.be.equal(undefined);
        expect(isOddOrEven({'test': 'test'})).to.be.equal(undefined);
    });
    }
)