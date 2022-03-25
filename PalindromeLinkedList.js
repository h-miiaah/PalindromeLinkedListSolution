/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let valuesFound = [];
    while (head) {
        valuesFound.push(head.val);
        head = head.next;
    }

    let left = 0;
    let right = valuesFound.length - 1;
    while (left <= right) {
        if (valuesFound[left] !== valuesFound[right]) {
            return false;
        }
        left++, right--;
    }
    return true;
};

/**
 * Create an array to hold the values of the linked list.
 * Iterate through the linked list and push each value into the array.
 * Then iterate through the array and compare the values at the beginning and end of the array.
 * If the values are not equal, we return false.
 * If we make it to the end of the array without returning false, we return true.
 */