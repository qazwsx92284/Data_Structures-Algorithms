// filter : creates a new array with all elements that pass the 
// thest implemented by the provided function.
const nums = [1,2,3,4,5,6,7];

const n = nums.filter(n => {
    return n===4; 
}) //output : [4], only the case when element 4 is true.

const n2 = nums.filter(function (num) {
    return num%2===0;
})

const n3 = nums.filter(x => x>3);

const n4 = nums.filter(num => (num%2===1));


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

const goodMovies = movies.filter(movie => {
    return movie.score>=90;
})
//combine filter and map 
const goodTitles = goodMovies.map(m=> m.title);

//one line,
movies.filter(m=>m.score>80).map(m=>m.title);
const badMovies = movies.filter(movie => movie.score<70)



