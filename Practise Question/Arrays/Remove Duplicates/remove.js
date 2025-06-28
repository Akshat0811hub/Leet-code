function removeDuplicates(arr){
    let temp=[];
    let i=0;
    for(j=0; j<arr.length; j++)
    {
        if(arr[j]!=arr[j+1])
        {
            temp[i]=arr[j];
            i++;
        }
    }
    return temp;
}

A=[1,1,2,2,3,4]
b=removeDuplicates(A)
for(i=0; i<b.length; i++){
    console.log(b[i])
}