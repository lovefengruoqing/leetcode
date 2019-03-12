# cherry Pickup

题目地址：

leetcode: [https://leetcode.com/problems/cherry-pickup](https://leetcode.com/problems/cherry-pickup)

力扣：[https://leetcode-cn.com/problems/cherry-pickup/](https://leetcode-cn.com/problems/cherry-pickup/)

## 题目要求

In a N x N grid representing a field of cherries, each cell is one of three possible integers.

- 0 means the cell is empty, so you can pass through;
- 1 means the cell contains a cherry, that you can pick up and pass through;
- -1 means the cell contains a thorn that blocks your way.
 
Your task is to collect maximum number of cherries possible by following the rules below:

Starting at the position (0, 0) and reaching (N-1, N-1) by moving right or down through valid path cells (cells with value 0 or 1);
After reaching (N-1, N-1), returning to (0, 0) by moving left or up through valid path cells;
When passing through a path cell containing a cherry, you pick it up and the cell becomes an empty cell (0);
If there is no valid path between (0, 0) and (N-1, N-1), then no cherries can be collected.
 
Example 1:

```
Input: grid =
[[0, 1, -1],
 [1, 0, -1],
 [1, 1,  1]]

Output: 5
```

Explanation: 
The player started at (0, 0) and went down, down, right right to reach (2, 2).
4 cherries were picked up during this single trip, and the matrix becomes [[0,1,-1],[0,0,-1],[0,0,0]].
Then, the player went left, up, up, left to return home, picking up one more cherry.
The total number of cherries picked up is 5, and this is the maximum possible.
 
Note:

grid is an N by N 2D array, with 1 <= N <= 50.
Each grid[i][j] is an integer in the set {-1, 0, 1}.
It is guaranteed that grid[0][0] and grid[N-1][N-1] are not -1.

## 解析

刚开始看到这个题目，第一个感觉就是不简单。因为这个题目并不是我自己挑选的，而是随机选择的一道，哪知道一开始就中奖了。

刚开始，我感觉应该用类似于递归的方法来解决的，但是后来尝试了一下，毫无头绪，研究了一两个小时，还是未果。

果然还是太久没接触过算法题了，未果以后，只得看一看discussion，一看才发现，这题好难，而且没想象中那么简单。

我刚开始想的那个思路，其实是一个正确的方向，但是我菜就菜在，不知道该怎么进行下去，也就是经验不足吧。

要理解这个题目，首先必须得搞懂动态规划算法是什么，于是我又去复习了一遍动态规划算法。

如果仅仅能用常规的动态规划去解决也就罢了，但是这个题目变态就变态在，他不能用常规的动态规划去解决。

我看了 discussion 中大神的长篇大论，仍旧一脸懵逼，就是这个看的让人头疼的答案：[https://leetcode.com/problems/cherry-pickup/discuss/109903/Step-by-step-guidance-of-the-O(N3)-time-and-O(N2)-space-solution](https://leetcode.com/problems/cherry-pickup/discuss/109903/Step-by-step-guidance-of-the-O(N3)-time-and-O(N2)-space-solution)

后来，还是在 csdn 中看到一篇博文，才真正的理解了这道题解法的原理：[https://blog.csdn.net/luke2834/article/details/79365645](https://blog.csdn.net/luke2834/article/details/79365645)，如果有兴趣的同学可以前往拜读一番。

我感觉对于我来说，我明白了为什么要用动态规划，因为就是要找最优解，而且对于每一步来说，都可以分解成两个单步进行操作，即上一步的最优解加上当前的这一步中的值。

但是我一直不能理解，来回两趟的动态规划方案，怎么叠加在一趟之中进行解决了。

直到我看到那边博文，我才理解，你可以把来回两趟当成是两个人，同时从起点出发，同步的走到终点，然后就能理解怎么把本该是4维的问题，变成二维来解决了。

而且这个问题的解法，有个巧妙地地方的是，从起点走到终点，必须得走 2 * (n - 1) 步，并且对于任意某一个时刻的 step，只要 row 确定了，那么 col 就是确定的，因为 row + col = step。

## 疑问

虽然理解了原理，但是还是不太理解这个算法为什么要这样写，但是好歹照着大神的 cpp 版本撸出了一个 JavaScript 版本的。

以后有更深刻的理解再来补充吧。
