// 第三个版本的代码
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = Array.apply(this, Array(nums.length)).map((value, index) => {
        return nums.reduce((total, num, currentIndex) => currentIndex > index ? total : (total + num));
    })
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.nums[j] - ((i - 1) >= 0 ? this.nums[i - 1] : 0);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */

// 第二个版本的代码
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = Array.apply(this, Array(nums.length)).map((value, index) => {
        return nums.slice(0, index + 1).reduce((total, num) => total + num);
    })
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.nums[j] - ((i - 1) >= 0 ? this.nums[i - 1] : 0);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */


// 第一个版本的代码
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    let sum = 0;
    this.nums.forEach((value, index) => {
        if (index >= i && index <= j) {
            sum += value;
        }
    })
    return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */