class SummerCamp{
    constructor(organizer,location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {'child': 150, 'student': 300, 'collegian': 500};
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money){
        //TODO maybe parse money

        if(this.priceForTheCamp[condition] === undefined){
            throw new Error(`"Unsuccessful registration at the camp."`);
        }

        let searchName = this.listOfParticipants.some((e) => e.name === name);
        if(searchName){
            return `The ${name} is already registered at the camp.`
        }

        if(money < this.priceForTheCamp[condition]){
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            name: name,
            condition: condition,
            power: 100,
            wins: 0,
        })


        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name){
        let searchName = this.listOfParticipants.some((e) => e.name === name);
        if(searchName === false){
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants = this.listOfParticipants.filter((e) => {return e.name !== name});
        return `The ${name} removed successfully.`
    }


    timeToPlay (typeOfGame, participant1, participant2){
        let player1search = this.listOfParticipants.filter((e) => {return e.name === participant1});
        let player2search = this.listOfParticipants.filter((e) => {return e.name === participant2});
        let idxPlayer1 = this.listOfParticipants.indexOf(player1search[0]);
        let idxPlayer2 = this.listOfParticipants.indexOf(player2search[0]);

        // BATTLESHIP
        if(typeOfGame === 'Battleship'){
            if(player1search.length === 0){
                throw new Error(`Invalid entered name/s.`);
            }

            this.listOfParticipants[idxPlayer1].power += 20;
            return `The ${this.listOfParticipants[idxPlayer1].name} successfully completed the game ${typeOfGame}.`

        }

        // WATER BALLOON
        if(typeOfGame === 'WaterBalloonFights'){
            if(player1search.length === 0 || player2search.length === 0){
                throw new Error(`Invalid entered name/s.`);
            }

            if (this.listOfParticipants[idxPlayer1].condition !== this.listOfParticipants[idxPlayer2].condition){
                throw new Error(`Choose players with equal condition.`);
            }

            let winnerIDX = -1;

            if (this.listOfParticipants[idxPlayer1].power > this.listOfParticipants[idxPlayer2].power){
                winnerIDX = idxPlayer1;
            }else if(this.listOfParticipants[idxPlayer1].power < this.listOfParticipants[idxPlayer2].power){
                winnerIDX = idxPlayer2;
            }else{
                return `There is no winner.`;
            }

            this.listOfParticipants[winnerIDX].wins += 1;
            return `The ${this.listOfParticipants[winnerIDX].name} is winner in the game ${typeOfGame}.`;

        }

    }

    toString(){
        let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        this.listOfParticipants.sort((a,b) => b.wins - a.wins);
        this.listOfParticipants.forEach((e) => {
            result.push(`${e.name} - ${e.condition} - ${e.power} - ${e.wins}`);
        })

        return result.join('\n');
    }


}


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

