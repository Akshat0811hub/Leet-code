A=[50,40,30,20,10]
asc=0
des=0
size=5

for (i=0; i<size-1; i++){
    if(A[i]<A[i+1]){
        asc++
    }
    else if(A[i]>A[i+1]){
        des++
    }
}
if(asc==size-1){
    console.log("Array is in ascending order")
}

else if(des==size-1){
    console.log("Array is in descending order")
}

else{
    console.log("Array is not sorted")
}