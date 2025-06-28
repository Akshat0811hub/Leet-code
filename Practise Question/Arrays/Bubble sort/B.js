A=[24,18,36,19,43,5]
size=6
console.log("Before Sorting....")
for(i=0;i<size;i++)
    console.log(A[i])
//Sorting
for (i=0; i<size; i++){
    for (j=0; j<size-1; j++){
        if(A[j]>A[j+1]){
            T=A[j];
            A[j]=A[j+1];
            A[j+1]=T;
        }
    }
}
console.log("After Sorting....")
for(i=0;i<size;i++)
    console.log(A[i])