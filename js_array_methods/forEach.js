const nums = [1,2,3,4,5];

// we can separate function
function print(element) {
    console.log(element);
}
nums.forEach(print);

console.log("********************")
// but define a function inline is more common
nums.forEach(function(el) {
    if(el%2==0){
        console.log(el);
    }
});
console.log("********************")
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

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
})
