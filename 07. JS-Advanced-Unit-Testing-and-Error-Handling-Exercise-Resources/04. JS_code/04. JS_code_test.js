const expect = require('chai').expect;
const {mathEnforcer} = require('./04. JS_code');

describe('Math Enforcer', () => {
    describe('addFive function:', () => {
        it('returns the num + 5', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(5.5)).to.be.closeTo(10.5, 0.01);
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
            expect(mathEnforcer.addFive(0)).to.be.equal(5);

        });
        it('returns undefined if not number', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
            expect(mathEnforcer.addFive([5])).to.be.undefined;
            expect(mathEnforcer.addFive({5: 5})).to.be.undefined;
            expect(mathEnforcer.addFive('5', 5)).to.be.undefined;
        });
    });
    describe('subtractTen function:', () => {
        it('returns -10 from the number if all good', () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
            expect(mathEnforcer.subtractTen(11.11)).to.be.closeTo(1.11, 0.01);
        });
        it('returns undefined if not a number', () => {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
            expect(mathEnforcer.subtractTen([5])).to.be.undefined;
            expect(mathEnforcer.subtractTen({5: 5})).to.be.undefined;
            expect(mathEnforcer.subtractTen('5', 5)).to.be.undefined;
        });
    });
    describe('sum function:', () => {
       it('returns sum of 2 numbers', () => {
           expect(mathEnforcer.sum(10,5)).to.be.equal(15);
           expect(mathEnforcer.sum(-5,5)).to.be.equal(0);
           expect(mathEnforcer.sum(1.11,2.11)).to.be.closeTo(3.22, 0.01);
       });
       it('returns undefined if first argument is not a number', () => {
           expect(mathEnforcer.sum('5',5)).to.be.undefined;
           expect(mathEnforcer.sum([5],5)).to.be.undefined;
           expect(mathEnforcer.sum({5:5},5)).to.be.undefined;
       });
        it('returns undefined if second  argument is not a number', () => {
            expect(mathEnforcer.sum(5,'5')).to.be.undefined;
            expect(mathEnforcer.sum(5,[5])).to.be.undefined;
            expect(mathEnforcer.sum(5,{5:5})).to.be.undefined;

        });
    });
});