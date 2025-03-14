const isAnagram =  (str1, str2) =>{

    if(str1.lenght != str2.lenght) return false;
    let count = {};

    for(let i = 0; i<str1.lenght; i++){
        let char = str1[i]
;        count[char] ?   count[char] + 1 : count[char]  = 0
    }

    for(let i = 0; i<str2.lenght; i++){
        let char = str1[i]
;        if(!count[char]) return false;
        count[char] -=1;
    }

    return true;


}