# 303. Range Sum Query - Immutable

题目地址：

leetcode: [https://leetcode.com/problems/range-sum-query-immutable/](https://leetcode.com/problems/range-sum-query-immutable/)

力扣：[https://leetcode-cn.com/problems/range-sum-query-immutable/](https://leetcode-cn.com/problems/range-sum-query-immutable/)

## 题目要求

Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
```js
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
```

Note:
1. You may assume that the array does not change.
2. There are many calls to sumRange function.

## 解析

这个题目算是难度比较小的一道题了，令我有点诧异的是，这道题居然是一道与动态规划有关的题目。

刚开始觉得很简单，不就是累加给定范围的数嘛，后来一验证，果然没错，很简单嘛。

但是后来看了一下 discussion 里面的 solution，发现还有更优的解法，就是先创建一个新的 array，array 每一个分量的值相当于是传入的 array 在对应位置累加以后的结果。

后来我觉得我开始找到用 JavaScript 刷题的技巧了，也就是追求简洁的用法，致力于用更少的代码解出通过所有的测试用例。