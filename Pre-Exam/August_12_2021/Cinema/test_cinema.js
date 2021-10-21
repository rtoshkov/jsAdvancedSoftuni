const expect = require('chai').expect;
const cinema = require('./cinema');


describe('Cinema', () => {
    describe('showMovies',() =>{
        it('MovieArr = 0', ()=>{
            expect(cinema.showMovies('')).to.be.equal('There are currently no movies to show.');
            expect(cinema.showMovies((['King Kong', 'The Tomorrow War', 'Joker']))).to.be.equal('King Kong, The Tomorrow War, Joker');

        })
    })
    describe('ticketPrice',() => {
        it('ticketPrice', () => {
            expect(() => {cinema.ticketPrice('Alabala')}).to.throw('Invalid projection type.');
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);
        })
    })
    describe('swapSeatsInHall', ()=> {
        it('swapSeatsInHall', () => {
            expect(cinema.swapSeatsInHall(1.23,14)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0,14)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-1,14)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21,14)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(13,12.2)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10,-1)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10,0)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5,22)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10,10)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10,20)).to.be.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('10',10)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10,'10')).to.be.equal('Unsuccessful change of seats in the hall.');

        })
    })
})