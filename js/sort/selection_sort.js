function swap(arr, num1, num2) {
    let temp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = temp;
    return arr;
}

function selectionSort(arr) {
    for(let i=0; i<arr.length; i++) {
        //each iteration set min to be first element
        let min = arr[i];
        for(let j=i+1; j<arr.length; j++) {
            // compare arr[i] with arr[j] and find min
            if(arr[i]>arr[j]) {
                min = arr[j];
            }
        }
        // once nested loop is done, swap min to arr[i]. 
        swap(arr, arr[i], min);
    }
}

selectionSort([2,3,5,1,7]);