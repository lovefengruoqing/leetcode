/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.24%)
 * Total Accepted:    56.9K
 * Total Submissions: 176.6K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let temp = "";
    while(strs[0] && (temp.length < strs[0].length)){
        temp = strs[0].slice(0, temp.length + 1);
        for (let i = 1, len = strs.length; i < len; i++) {
            if(strs[i].length<temp.length || strs[i].slice(0, temp.length) !== temp){
                return temp.slice(0,temp.length - 1);
            };
        }
    }
    // console.log(temp)
    return temp;
};