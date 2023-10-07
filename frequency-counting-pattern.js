function validAnagram(input1, input2) {
    if(input2.length != input1.length) {
        return false
    }

    let freqCheck1 = {};
    let freqCheck2 = {};
    
    for (let char of input1) {
        freqCheck1[char] = (freqCheck1[char] || 0) + 1;
    }
    
    for (let char of input2) {
        freqCheck2[char] = (freqCheck2[char] || 0) + 1;
    }
    
    for(let key in freqCheck1) {
        if(!(key in freqCheck2)){
           return false;
        }
        if(freqCheck1[key] != freqCheck2[key]) {
            return false;
        }
    }
    
    return true;
}

function sameFrequency(num1, num2){
    num1 = num1.toString();
    num2 = num2.toString();

    if(num1.length != num2.length) {
        return false;
    }

    let lookup = {}
    
    for (let i = 0; i <= num1.length - 1; i++  ) {
        let letter = num1[i];
        lookup[letter] = 
            lookup[letter] ? lookup[letter] + 1 : 1;
    }
    
    for (let key of num2) {
        if(lookup[key]) {
            lookup[key]--;
        } else {
            return false
        }
    }
    
    return true;
}

// by time complexity O(n)
