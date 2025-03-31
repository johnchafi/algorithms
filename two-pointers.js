const twoSum = (listNum, target) =>{
    if(listNum.length < 2 ) return []

    let i = 0;
    let j = listNum.length-1;
    while(i<j){
        let sum = listNum[i] + listNum[j];
        if(sum == target) return [listNum[i], listNum[j]];
        else if (sum > target) j--;
        else i++

    }
    return [];

}

console.log(twoSum([2,7,11,15]), 9);

const isPalindrome = (s)=>{
    let filteredS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if(s.filteredS <= 1 ) return true
    let i = 0;
    let j = filteredS.length-1;
    while(i<j){
        if(filteredS[i] != filteredS[j]){
            console.log(s[i] , s[j])
            return false;
        } 
        else i++, j--;
    }
    return true;

}

console.log(isPalindrome("A man, a plan, a canal: Panama"))

const maxArea = (listN)=> {
    let max = -1000;
    let i = 0, j=listN.length-1;
    while(i<j){
        //console.log(listN[j])
        let volume = (j-i) * Math.min(listN[i] , listN[j])
        if(volume > max){
            max = volume;
        } 
        if(listN[i] < listN[j]) i++;
        else j--;
    }
    return max;
}

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let k = 1; // Pointer for unique elements
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

const minimumSubArray = (listNum, target)=> {
    let min = +10000;
    let back = 0
    let sum = 0
    for(let start = 0; start<listNum.length; start++){
       sum += listNum[start];
       while(sum >= target){
           min = Math.min(min, start - back + 1);
           sum -= listNum[back]
           back++;
       }
       }
    return min === 10000 ? 0 : min;
}