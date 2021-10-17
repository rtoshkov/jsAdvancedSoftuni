const expect = require('chai').expect;
const PaymentPackage = require('./12. Payment_Package');

describe('PaymentPackage', ()=> {
    describe('create instances with 2 params', ()=> {
        it('creates object with 2 params ', () => {
            let obj = new PaymentPackage('Gas', 100);
            expect(obj.name).to.be.equal('Gas');
            expect(obj.value).to.be.equal(100);
            expect(obj.VAT).to.be.equal(20);
            expect(obj.active).to.be.equal(true);
            let exp = 'Package: Gas\n' +
                '- Value (excl. VAT): 100\n' +
                '- Value (VAT 20%): 120'
            expect(obj.toString()).to.be.equal(exp);
        })
    })
    describe('name', ()=> {
        it('sets value when non empty string', ()=>{
            let obj = new PaymentPackage('Testemonial', 100);
            expect(obj.name).to.be.equal('Testemonial');
            let obj2 = new PaymentPackage('2', 100);
            expect(obj2.name).to.be.equal('2');
            obj2.name = 'Rosen';
            expect(obj2.name).to.be.equal('Rosen');
            obj2.name = '1';
            expect(obj2.name).to.be.equal('1');
        })
        it('throws error when not a string', ()=> {

            expect(() => {let obj = new PaymentPackage(2, 100);})
                .to.throw('Name must be a non-empty string');
            expect(() => {let obj = new PaymentPackage(['test'], 100);})
                .to.throw('Name must be a non-empty string');
            expect(() => {let obj = new PaymentPackage({}, 100);})
                .to.throw('Name must be a non-empty string');
        })
        it('throws error when empty string', ()=> {

            expect(() => {let obj = new PaymentPackage('', 100);})
                .to.throw('Name must be a non-empty string');
        })
    })
    describe('value', ()=>{
        it('sets value when valid number',()=>{
            let obj = new PaymentPackage('Gas', 0);
            expect(obj.value).to.be.equal(0);
            let obj2 = new PaymentPackage('Gas', 2000);
            expect(obj2.value).to.be.equal(2000);
            obj2.value = 100;
            expect(obj2.value).to.be.equal(100);
            obj2.value = 0;
            expect(obj2.value).to.be.equal(0);
        })
        it('thows error when below zero', ()=> {
            expect(() => {let obj = new PaymentPackage('Testing', -1);})
                .to.throw('Value must be a non-negative number');
            expect(() => {let obj2 = new PaymentPackage('Testing', -111);})
                .to.throw('Value must be a non-negative number');
        })
        it('thows error when not a number', ()=> {
            expect(() => {let obj = new PaymentPackage('Testing', '2');})
                .to.throw('Value must be a non-negative number');
            expect(() => {let obj2 = new PaymentPackage('Testing', ['2']);})
                .to.throw('Value must be a non-negative number');
        })
    })
    describe('VAT', ()=>{
        it('sets VAT when valid number',()=>{
            let obj = new PaymentPackage('Gas', 111);
            obj.VAT = 0;
            expect(obj.VAT).to.be.equal(0);
            obj.VAT = 100;
            expect(obj.VAT).to.be.equal(100);
        })
        it('throws error when non valid imput', ()=> {
            let obj = new PaymentPackage('Gas', 111);
            expect(() => {obj.VAT = -1})
                .to.throw('VAT must be a non-negative number');
            expect(() => {obj.VAT = '2'})
                .to.throw('VAT must be a non-negative number');
            expect(() => {obj.VAT = [1]})
                .to.throw('VAT must be a non-negative number');
        })
    })
    describe('active', ()=>{
        it('sets status when boolean', ()=>{
            let obj = new PaymentPackage('Gas', 111);
            obj.active = false;
            expect(obj.active).to.be.false;
            obj.active = true;
            expect(obj.active).to.be.true;
        })
        it('throws error when ivalid', ()=> {
            let obj = new PaymentPackage('Gas', 111);
            expect(() => {obj.active = 'true'})
                .to.throw('Active status must be a boolean');
            expect(() => {obj.active = ''})
                .to.throw('Active status must be a boolean');
            expect(() => {obj.active = 0})
                .to.throw('Active status must be a boolean');
        })
        it('test string', ()=> {
            let obj = new PaymentPackage('Gas', 100);
            obj.active = false;
            let exp = 'Package: Gas (inactive)\n' +
                '- Value (excl. VAT): 100\n' +
                '- Value (VAT 20%): 120';
            expect(obj.toString()).to.be.equal(exp);
        })
    })
})