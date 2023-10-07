function averagePair(array, target){
    let start = 0;
    let end = array.length-1;
    
    while (start < end) {
        let average = (array[end]+array[start])/2;

        if(average == target) {
            return true;
        }
        
        if(average > target) {
            end--;
        } else {
            start++;
        }
    }
    return false;
}

Write a function called averagePair. Given a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([],4) // false
