let mergeTrees = function(t1, t2) {
    if (t1 && t2) {
        const node = new TreeNode(t1.val + t2.val);
        node.right = mergeTrees(t1.right, t2.right);
        node.left = mergeTrees(t1.left, t2.left);
        return node;
    }
    return t1 || t2;
}
