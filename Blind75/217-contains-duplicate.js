/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        
        if(map.has(nums[i]))
            return true;

        map.set(nums[i], i);
    }

    return false;
    
}

const theArray = [1,2,3,4];
const isAny = containsDuplicate(theArray);

console.log(isAny);

