/*
 * @lc app=leetcode.cn id=94 lang=cpp
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (64.43%)
 * Total Accepted:    22K
 * Total Submissions: 34.1K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 * 
 * 输出: [1,3,2]
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
 */
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution
{
  public:
    // 递归版本
    vector<int> inorderTraversal1(TreeNode *root)
    {
        vector<int> arr;
        if (root != nullptr)
        {
            if (root->left != nullptr)
            {
                vector<int> temp1 = inorderTraversal(root->left);
                arr.insert(arr.end(), temp1.begin(), temp1.end());
            }
            arr.push_back(root->val);
            if (root->right != nullptr)
            {
                vector<int> temp2 = inorderTraversal(root->right);
                arr.insert(arr.end(), temp2.begin(), temp2.end());
            }
        }
        return arr;
    }
    // 迭代版本
    vector<int> inorderTraversal(TreeNode *root)
    {
        vector<int> arr;
        TreeNode *p = root;
        vector<TreeNode*> stack;

        while(p != nullptr || !stack.empty()){
            if(p != nullptr) {
                stack.push_back(p);
                p = p->left;
            }else{
                p = stack.back();
                stack.erase(stack.end()-1);
                arr.push_back(p->val);
                p = p -> right;
            }
        }

        return arr;
    }
};
