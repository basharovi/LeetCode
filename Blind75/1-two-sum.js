const twoSum = (nums, target) => {

    for (let i = 0; i < nums.length; i++) {

        for(let j = i+1; j <= nums.length; j++){
            const sum =  nums[i] + nums[j];
                if(sum == target){
                    return [i, j]
                }
        }
        
    }

}

const twoSum_ByMap = (nums, target) => {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        
        if(map.has(nums[i]))
            return [map.get(nums[i]), i]

        map.set(target - nums[i], i);

    }
}

const theArray = [2,5,5,11];
const target = 10;

console.log(twoSum_ByMap(theArray, target));
