// reduce() method

const movie = [
    {
        name: 'Kick',
        ticketPrice: 150
    },
    {
        name: 'Sultan',
        ticketPrice: 200
    },
    {
        name: 'Barhmashtra',
        ticketPrice: 350
    }
]


// let total = 0;

// movie.forEach((movies) => {
//     total += movies.ticketPrice;
// })

const total = movie.reduce((acc, movies) => {
    acc += movies.ticketPrice;
    return acc;
}, 0);

console.log(total);