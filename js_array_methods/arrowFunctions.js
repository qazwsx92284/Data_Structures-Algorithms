// const add = function(x,y) {
//     return x+y;
// }
// function add(x,y) {
//     return x+y;
// }


//arrow function version
const add = (x,y) => {
    return x+y;
}

const square = (x) => {
    return x*x;
}

//arrow function with no arguments
const rollDie = () => {
    return Math.floor(Math.random()*6) +1;
}

// If we have only 1 parameter, () is optional
const square2 = num => {
    return x*x;
}

//arrow functions implicit returns,
// we can eliminate return keyword in certain situation
//reaplace {} to (). Inside of () is going to be returned.

const rollDie2 = () => (
     Math.floor(Math.random()*6) +1
)

//Inside of (), there have to be single expression.
const rollDie2 = () => (
    let msg ='jsdfk'// causing an error 
    Math.floor(Math.random()*6) +1
) 

//() can be also eliminated. 
const sum =(a,b) => a+b

