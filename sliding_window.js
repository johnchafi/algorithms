// This algorith retun maximum number of sublist

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

const value = maxSum([2, 1, 5, 1, 3, 2], 3);
console.log("This is max "+ value);


// longest subString without reapeating charcters

const longSubstring = (string) =>{
    let longSubString = "";
    let left = 0, right = 0;
    let map = {};
     
    for(let i = 0; i< string.length; i++){
        let char = string[i];
        // map[char] > left : verife si window
        if(char in map && map[char] > left){
            left = string[char[i]] + 1;

        }
        map[char]= string[right]
        let subString = string.slice(left, right+1);
        right += 1;
      
    }

    return longSubString; 
}

const thisString= longSubstring("ababc");
console.log("This is long substring" + thisString);
