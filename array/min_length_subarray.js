//Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.




function min_Length(nums, target) {
    let left = 0;
    let right = 0;
    let min_length = Infinity;
    let sum = 0;

    while (right <= nums.length) {
        if (sum < target) {
            sum += nums[right];
            right++
        } else {
            let length = right - left  ;
            min_length = Math.min(min_length, length);
            sum -= nums[left]; 
            left++;
        }
    }

    return min_length === Infinity ? 0 : min_length; // Handle case when there is no subarray
}

console.log(min_Length([2, 3, 1, 2, 4, 3], 1)); // Output: 2