var maxScore = function(cardPoints, k) {
    let left =0;
    let right = 0;
    
    for(let i=0;i<k;i++){
        left = left+cardPoints[i]
    }
    
    let maxsum = left;
    
    let dec = cardPoints.length-1;
    
    for(let i = k-1;i>=0;i--){
        left = left - cardPoints[i];
        
        right = right + cardPoints[dec] 
        
        maxsum = Math.max(maxsum , right+left);
        dec--;
    }
    
    return maxsum
};

console.log(maxScore([1,2,3,4,5,6,1],3))