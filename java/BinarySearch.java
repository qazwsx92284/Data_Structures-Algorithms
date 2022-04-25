public class BinarySearch {
    public static void main(String[] args) {
        int[] testArr = {1,2,3,4,5};
        System.out.println(binarySearch(testArr, 2));
    }

    public static int binarySearch (int[] arr, int targetNum) {
        int low = 0; 
        int high = arr.length-1;
        int mid = (low+high)/2;
        while(low<=high) {
            mid = (low+high)/2;
            if(arr[mid] == targetNum)
                return mid;
            else {
                if(arr[mid]<targetNum)
                    low=mid+1;
                else{
                    high=mid-1;
                }
            }
        }
        return -1;
    }
}
////zzzz