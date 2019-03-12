/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.70%)
 * Total Accepted:    51.5K
 * Total Submissions: 140.4K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let bool = true;
    let arr = [];
    if (s.length > 0) {
        if (s.length % 2 === 1) {
            bool = false;
        } else {
            let splitArr = s.split("");

            while (splitArr.length > 0) {
                var s = splitArr.shift();
                if (s === "(" || s === "[" || s === "{") {
                    if ((s === "(" && splitArr[0] === ")") || (s === "[" && splitArr[0] === "]") || (s === "{" && splitArr[0] === "}")) {
                        splitArr.shift();
                    } else {
                        arr.push(s);
                    }
                } else {
                    if ((s === "]" && arr[arr.length - 1] === "[") || (s === ")" && arr[arr.length - 1] === "(") || (s === "}" && arr[arr.length - 1] === "{")) {
                        arr.pop();
                    }else{
                        bool = false;
                        break;
                    }
                }
            }
            
            if(bool && arr.length>0) bool = false;
        }
    }

    return bool;
};