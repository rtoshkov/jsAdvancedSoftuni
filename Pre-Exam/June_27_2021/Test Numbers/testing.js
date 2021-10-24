const expect = require('chai').expect;
const testNumbers = require('./testNumbers');


describe('Test', () => {
    describe('testNumbers', () => {
        it('sumNumbers', () => {
            expect(testNumbers.sumNumbers('1', 2)).to.be.undefined;
            expect(testNumbers.sumNumbers(2, '2')).to.be.undefined;
            expect(testNumbers.sumNumbers(2, 2)).to.be.equal('4.00');
            expect(testNumbers.sumNumbers(3, 2)).to.be.equal('5.00');
            expect(testNumbers.sumNumbers(3.3, 2.2)).to.be.equal('5.50');
            expect(testNumbers.sumNumbers([3], 2)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, [3])).to.be.undefined;
        })
        it('numberChecker', () => {
            expect( () => {testNumbers.numberChecker('ab')}).to.throw('The input is not a number!');
            expect(() => {testNumbers.numberChecker(undefined)}).to.throw('The input is not a number!');
            expect(testNumbers.numberChecker(2)).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker('2')).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker(0)).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker(3)).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker(2.1)).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker('1')).to.be.equal('The number is odd!');
        })
        it('averageSumArray', () => {
            expect(testNumbers.averageSumArray([1,2,3])).to.be.equal(2);
            expect(testNumbers.averageSumArray([1,'2',3])).to.be.equal(41);
            expect(testNumbers.averageSumArray([0,0,0])).to.be.equal(0);
            expect(testNumbers.averageSumArray([NaN,0,0])).to.be.NaN;
        })
    })
})