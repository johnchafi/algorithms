const{maxSum, longSubstring, countAnagram} = require("./sliding_window");

test('Maximum Sum Subarray of Size K', () => { 
    expect(maxSum([3, 5, 2, 1, 7], 2)).toBe(8);
    expect(countAnagram("gotxxotgxdogt", "got")).toBe(3);

 })

