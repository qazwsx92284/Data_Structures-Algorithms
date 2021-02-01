//some : similar to every, but returns true if ANY of the array
// elements pass the test function

const exams = [100,90,85,96,77,66,50,43];

exams.some(score =>score >=75); //true, there is at least 1 element >= 75.

//every : tests whether ALL  elements  in the array pass the provided function.
//It returns a Boolean value. 

exams.every(score => score >= 75); // false, every elements is not >=75.