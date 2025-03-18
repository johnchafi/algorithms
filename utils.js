const isAnagram =  (str1, str2) =>{
    if(str1.lenght != str2.lenght) return false;
    let count = {};

    for(let i = 0; i<str1.length; i++){
        let char = str1[i];        
        count[char] ?   count[char] + 1 : count[char]  = 1
    }
    for(let i = 0; i<str2.length; i++){
        let char = str2[i];
        if(!count[char]) {
           return false; 
        }
        count[char] -=1;
    }
    return true;
}

const reverseString = (str) =>{
    let reversed = ""
    for(char of str){
        reversed = char + reversed;
    }
    return reversed;
}

const reverseInt = (intvalue)=>{
    const reverserd = reverseString(intvalue.toString())
    return parseInt(reverserd) * Math.sign(intvalue);
}

const isPalendrom = (str) =>{
    const reversedStr = reverseString(str);
    return str === reversedStr
    
}

const maxChar = (str) =>{
    const charmap = {};
    let max = 0;
    let result = "";
    for(let i = 0; i<str.length; i++){
        let char = str[i];  
        charmap[char] ? charmap[char] += 1 : charmap[char]  = 1
    }
    for(char in charmap){
        if(charmap[char] > max){
             max = charmap[char];
            result=char
        }
    }
    return result;
}
// chunk([1,2,3, 4], 2) return [[1,2], [3,4]]
const chunk = (arr, k) =>{
    let results = []
    let start = 0;
    
    while(start < arr.length){
        let sub = arr.slice(start, start+k);
        results.push(sub);
        start += k;
    }
    return results;
}

//money yola john => Money Yola John
const capitalizeWords = (words)=>{
    let tableWord = words.split(" ");
    for (let i=0; i< tableWord.length; i++){
        let word = tableWord[i];
        tableWord[i] = word[0].toUpperCase() + word.slice(1);
        
    }
    return tableWord.join(" ");
}

const numberVowels = (str) =>{
    const vowels = {'a':1, 'i':2, 'o':3, 'u':4, 'e':5};
    let numV = 0;
    for(char of str){
        if(vowels[char]) numV += 1;
    }
    return numV;  
}

const fizzBuzz = (n) =>{
    for(let i = 1; i<=n; i++){
        if(i % 3 == 0 || i % 5 == 0){
            if(i % 3 == 0 && i % 5 != 0) console.log("fizz")
            if(i % 5== 0 && i % 3 != 0) console.log("buzz")
            if(i % 3 == 0 && i % 5 == 0) console.log("fizzbuzz")
        }
         else console.log(i)
    }
}

const steps = (n) =>{
    if(n < 1) return;
    let results = ''
    for(let i = 1; i <= n; i++){
        
        for(let j = 1; j <= i; j++){
            results += '#'
        }
        results += '\n';
        
    }
   
    return results;
}

function printPyramid(height) {
    for (let i = 1; i <= height; i++) {
        // Construct the line with spaces and stars
        const spaces = "A".repeat(height - i); // Create spaces
        const stars = "*".repeat(2 * i - 1);   // Create stars
        console.log(spaces + stars);           // Print the line
    }
}

   
module.exports = {isAnagram, reverseInt, isPalendrom,maxChar, chunk, capitalizeWords, numberVowels, fizzBuzz, steps}

