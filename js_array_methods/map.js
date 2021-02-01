//map : creates a new array with the results of calling
//a callback on every element in the array

const nums = [1,2,3,4,5,6];

const doubles = nums.map(function(num) {
    return num *2;
})


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
    }
];

const titles = movies.map(function(movie) {
    return movie.title.toUpperCase();
})

const newMovies = movies.map(function(movie) {
    return `${movie.title} - ${movie.score/10}`
})

//rewrite 'newMovies' function as arrow function version
const newMovies2 = movies.map(movie =>(
    `${movie.title} - ${movie.score/10}`
)) 