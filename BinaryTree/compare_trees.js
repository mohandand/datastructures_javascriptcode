const isSameTree = (p, q) => {
    // if both are null then the y are equal
    if (!p && !q) return true
    // if one of them is null and the other not
    if (!p || !q) return false
    // if the values of the nodes are not the same
    if (p.val !== q.val) return false;
    
    // otherwise return recursively the right nodes & left nodes
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};