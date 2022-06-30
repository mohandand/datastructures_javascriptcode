var isSubtree = function(root, subRoot) {
    if(root==null){
       return false
   }else if(isSameeTree(root,subRoot)){
       return true;
   }else{
       return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot);
   }
};
var isSameeTree = function(s,t){
   if(s===null || t===null){
       return s==null&&t==null
   }
   else if(s.val==t.val){
       return isSameeTree(s.left,t.left) && isSameeTree(s.right,t.right);
  }else{
   return false;
  }
}