import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SelectionSort {
    public static void main(String[] args) {
        int[] testArr = {55,22,1,3,2,444,915,20}; 
        System.out.println("main result " + Arrays.toString(selectionSort(testArr)));
    }

    public static int[] selectionSort(int[] arr) {
        for(int i=0; i<arr.length-1; i++) {
            int highestNum = arr[i]; //compare this with j
            for(int j=i+1; j<arr.length; j++) {
                if(highestNum < arr[j]){
                    highestNum = arr[j];
                    int temp = arr[i];
                arr[i]= arr[j];
                arr[j] = temp;
                }
                
            }
        }
        return arr;
    }

    public static void selectionSort2(int[] arr){  
        for (int i = 0; i < arr.length - 1; i++)  
        {  
            int index = i;  
            for (int j = i + 1; j < arr.length; j++){  
                if (arr[j] < arr[index]){  
                    index = j;
                }  
            }  
            int smallerNumber = arr[index];   
            arr[index] = arr[i];  
            arr[i] = smallerNumber;  
        }  
    }


}