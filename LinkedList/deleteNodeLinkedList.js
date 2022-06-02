/* they will give only node value to remove
So -> just change node value to next node value and and chnage its next pointer */

var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};