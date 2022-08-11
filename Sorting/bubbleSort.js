function bubbleSort(array){
    console.log("length"+array.length);
    for(let i=0;i<array.length-1;i++){
        let swap = true;
        console.log(i);
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

console.log(bubbleSort([3,4,5]))