function bubbleSort(array){
    
    for(let i=0;i<array.length;i++){
        let swap = true;
        for(let j=1;j<array.length-i;j++){
            if(array[j]>array[j-1]){
                let temp =array[j-1];
                array[j-1] =array[j];
                array[j] = temp;
                swap =false;
            }
        }
        if(swap){
            break;
        }
    }
    return array;
}

console.log(bubbleSort([5,4,3]))