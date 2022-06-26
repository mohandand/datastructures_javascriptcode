function subTree(s,t){
    if(s==null){
        return false
    }else if(isSameTree(s,t)){
        return true;
    }else{
        return subTree(s.left,t) || subTree(s.right,t);
    }
}

function isSameeTree(s,t){
    if(s===null || t===null){
        return s==null&&t==null
    }
    else if(s.val==t.val){
        return isSameTree(s.left,t.left)&&isSameTree(s.right,t.right);
   }else{
    return false;
   }
}