# 942. DI String Match

leetcode: [https://leetcode.com/problems/di-string-match/](https://leetcode.com/problems/di-string-match/)

力扣: [https://leetcode-cn.com/problems/di-string-match/](https://leetcode-cn.com/problems/di-string-match/)

## 题目

Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

- If S[i] == "I", then A[i] < A[i+1]
- If S[i] == "D", then A[i] > A[i+1]


Example 1:
```js
Input: "IDID"
Output: [0,4,1,3,2]
```

Example 2:
```js
Input: "III"
Output: [0,1,2,3]
```

Example 3:
```js
Input: "DDI"
Output: [3,2,0,1]
```

Note:

1. 1 <= S.length <= 10000
2. S only contains characters "I" or "D".

## 分析

这道题还是挺有意思的，分析一下提点，不难发现，I 和 D 对应的位置从左到右依次是递增、递减的，因此可以用两个数依次迭代。