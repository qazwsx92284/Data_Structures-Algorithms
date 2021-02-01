//setTimeout()
setTimeout(function greeting (){
    console.log("hi how are you")
},2000);
console.log("hello.....")
setTimeout(() => {
    console.log("hello, are you still there")
}, 3000)
console.log("good bye")

//setInterval()
const id = setInterval(() => {
    console.log(Math.random())
}, 1000)

// to stop interval, clearInterval(id)
const id = setInterval(() => {
    console.log(Math.random())
}, 1000);

clearInterval(id);