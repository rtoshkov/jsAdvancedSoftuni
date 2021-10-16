function ticketManager(array, sortCriterion) {
    const container = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
        compareTo(other, condition) {
            if(condition === 'price'){
                return this.price - other.price;
            }else if(condition === 'destination'){
                return this.destination.localeCompare(other.destination);
            }else{
                return this.status.localeCompare(other.status);
            }
        }
    }

    array.forEach((e) => {
        [iCity,iPrice,iStatus] = e.split('|');
        container.push(new Ticket(iCity,iPrice,iStatus));
    })

    container.sort((a,b) => a.compareTo(b,sortCriterion))


    return container;
}


console.log(ticketManager(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
))


console.log('-------------------------------');

console.log(ticketManager(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'

))