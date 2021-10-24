const expect = require('chai').expect;
const library = require('./library');


describe('Testing', () => {
    describe('testNumbers', () => {
        it('calcPriceOfBook', () => {
            expect(() => {library.calcPriceOfBook(12,20012)}).to.throw('Invalid input');
            expect(() => {library.calcPriceOfBook('Test','2012')}).to.throw('Invalid input');
            expect(() => {library.calcPriceOfBook('Test',[2012])}).to.throw('Invalid input');
            expect(() => {library.calcPriceOfBook(['Test'],2012)}).to.throw('Invalid input');
            expect(library.calcPriceOfBook('Test',2012)).to.equal('Price of Test is 20.00');
            expect(library.calcPriceOfBook('Ali Baba',1980)).to.equal('Price of Ali Baba is 10.00');
            expect(library.calcPriceOfBook('Testing Yes',1979)).to.equal('Price of Testing Yes is 10.00');
        })
        it('findBook', () => {
            expect(() => {library.findBook([], 'Test')}).to.throw('No books currently available');
            expect(() => {library.findBook('', 'Test')}).to.throw('No books currently available');
            expect(library.findBook(['Test', 'AliBaba', 'Zamunda'], 'Test')).to.equal('We found the book you want.');
            expect(library.findBook(['Test', 'AliBaba','Paris', 'Zamunda'], 'AliBaba')).to.equal('We found the book you want.');
            expect(library.findBook(['Test', 'AliBaba', 'Zamunda'], 'Testy')).to.equal('The book you are looking for is not here!');
            expect(library.findBook(['Test', 'AliBaba', 'Zamunda'], 'aliBaba')).to.equal('The book you are looking for is not here!');
            expect(library.findBook(['Test'], 'aliBaba')).to.equal('The book you are looking for is not here!');
            expect(library.findBook(['Test'], 'Test')).to.equal('We found the book you want.');
        })
        it('arrangeTheBooks', () => {
            expect(() => {library.arrangeTheBooks('0')}).to.throw(`Invalid input`);
            expect(() => {library.arrangeTheBooks(-1)}).to.throw(`Invalid input`);
            expect(() => {library.arrangeTheBooks('')}).to.throw(`Invalid input`);
            expect(() => {library.arrangeTheBooks(12.33)}).to.throw(`Invalid input`);
            expect(library.arrangeTheBooks(0)).to.equal(`Great job, the books are arranged.`);
            expect(library.arrangeTheBooks(30)).to.equal(`Great job, the books are arranged.`);
            expect(library.arrangeTheBooks(40)).to.equal(`Great job, the books are arranged.`);
            expect(library.arrangeTheBooks(41)).to.equal(`Insufficient space, more shelves need to be purchased.`);
            expect(library.arrangeTheBooks(50)).to.equal(`Insufficient space, more shelves need to be purchased.`);
        })
    })
})