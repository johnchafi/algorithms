// This algorith retun maximum number of sublist
const{isAnagram} = require("./utils");
const maxSum = (list, k) =>{
    let maxValue = 0;
    let start = 0;
    let sum =0
    
    for(let i = 0; i<list.length; i++){
        sum += list[i];
        
        if( i-start + 1 == k){
           if(sum > maxValue) maxValue = sum;
           sum -= list[start]
            start += 1;
        }
    }
    
    return maxValue;
    
}

// longest subString without reapeating charcters

const longSubstring = (string) =>{
    let longSubString = "";
    let left = 0, right = 0;
    let map = {};
     // test
    for(let i = 0; i< string.length; i++){
        let char = string[i];
        // map[char] > left : verife si window
        if(char in map && map[char] > left){
            left = string[char[i]] + 1;

        }
        map[char]= string[right]
        let subString = string.slice(left, right+1);
        if(subString.length > longSubString.length) longSubString= subString;
        right += 1;
      
    }

    return longSubString; 
}
//Input: text = gotxxotgxdogt, word = got
const countAnagram = (text, word)=> {
    let numberAn = 0;
    let isAnag = ''
    let map = {}
    // Calculate the first anagram in given text
    for(let i = 0; i < word.length ; i++){
        isAnag +=text[i];
       
    }
    if(isAnagram(isAnag, word)){
        numberAn +=1
    }

    // Using window verify if we have anagram by incrementing by one letter
    for(let i = 1; i < text.length ; i++){
        isAnag =  isAnag.slice(1) + text[i + word.length -1];
        if(!isAnag[map] && isAnagram(isAnag, word)){
          
            numberAn +=1
            map[isAnag] = true
        }
        map[isAnag] = true
    }
    return numberAn;
}
module.exports = {maxSum, longSubstring, countAnagram};


