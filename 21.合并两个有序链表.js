/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (52.93%)
 * Total Accepted:    48.6K
 * Total Submissions: 91.7K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let p = null,
        q = null;
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            if (p === null) {
                p = l1;
            }else{
                q.next = l1;
            }
            q = l1;
            l1 = l1.next;
            
        } else {
            if (p === null) {
                p = l2;
            }else{
                q.next = l2;
            }
            q = l2;
            l2 = l2.next;
        }
    }
    if (l2 !== null) {
        if(q===null){
            p = l2;
        }else{
            q.next = l2;
        }
    }
    if (l1 !== null) {
        if(q===null){
            p = l1;
        }else{
            q.next = l1;
        }
    }
    return p;

};