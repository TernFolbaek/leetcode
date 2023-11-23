/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let current
    let sum = 0
    for(let i = 0; i < nums.length; i++){
        current = nums[i]
        sum = 0
        for(let j = 0; j < nums.length; j++){
            if(current == nums[j]){
            sum += 1
            }
        }
        if(sum <= 1){
            break;
        }
    }
    return current;
};