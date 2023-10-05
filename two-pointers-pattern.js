function countUniqueValues(numbers){
    if(!numbers.length) {
        return 0;
    }
    let i = 0;
    let j = i + 1;

    while (j <= numbers.length - 1) {
        if (numbers[i] == numbers[j]) {
            j++;
        }
        else {
            i++;
            numbers[i] = numbers[j];
            j++;
        }
    }

    return i + 1;
}

// time complexity is O(n) space complexity is O(1)
