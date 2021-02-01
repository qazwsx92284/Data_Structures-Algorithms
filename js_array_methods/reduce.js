// reduce : executes a reducer function on each
// element of the array,
// resulting in a single value

[3,4,5,7,11].reduce((accumulator, currentValue) => {
    // accumulator : a thing that reducing down,
    //(also can be called total, sum.. whatever)
    return accumulator + currentValue;
}); 

// total price using for loop
let total = 0;
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
for(let price of prices) {
    total += price;
}
console.log(total);

//total price using reduce
const total2 = prices.reduce((total, price) => {
    return total + price;
});

// one line
const total3 = prices.reduce((total, price) => total + price);

// find min price
const findMin = prices.reduce((min, curPrice) => {
    return Math.min(min, curPrice);
});

//using if/else statement
const findMin2 = prices.reduce((min, price) => {
    if(price<min) {
        return price;
    }
    return min;
});


const movies = [
    {
    title: 'Parasite',
    score: 90
    },{
        title: 'Abs',
        score: 60
    }, {
        title: 'sdnfkl',
        score: 99
    }, {
        title: 'computer mouse',
        score: 78
    }
];

//find highest score
const highestRated = movies.reduce((bestMovie, currMovie) => {
    if(currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
});

// we can specify the starting point
const evens = [2,4,6,8];
evens.reduce((sum, num) => sum +num, 100); 
//start with 100. Initial value is 100

evens.reduce((sum, num) => sum +num, 40); //Initial value for sum 40
