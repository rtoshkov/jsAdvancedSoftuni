const expect = require('chai').expect;
const {lookupChar} = require('./03. char_lookup');
const {isOddOrEven} = require("../02. even_or_odd/02 even_or_odd");

describe('Char Lookup', () => {
    it('returns undefined when the first parameter is not a string or second is not a number', () => {
        expect(lookupChar(1, 1)).to.be.equal(undefined);
        expect(lookupChar({'test': 'test'}, 1)).to.be.equal(undefined);
        expect(lookupChar(['string', 2], 1)).to.be.equal(undefined);
        expect(lookupChar('test', '2')).to.be.equal(undefined);
        expect(lookupChar('test', 2.2)).to.be.equal(undefined);
        expect(lookupChar('test', [1])).to.be.equal(undefined);
        expect(lookupChar('test', [1])).to.be.equal(undefined);
    });
    it('returns Incorrect index if out of range', () => {
        expect(lookupChar('test', 4)).to.be.equal('Incorrect index');
        expect(lookupChar('test', -1)).to.be.equal('Incorrect index');
        expect(lookupChar('t', 1)).to.be.equal('Incorrect index');
        expect(lookupChar('test', 14)).to.be.equal('Incorrect index');
    });
    it('returns char if everything is correct', () => {
        expect(lookupChar('test',1)).to.be.equal('e');
        expect(lookupChar('r',0)).to.be.equal('r');
        expect(lookupChar('regret',5)).to.be.equal('t');
    });
});