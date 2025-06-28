A=[10,20,70,40,50]
let largest=A[0]
size=A.length

for (i=1; i<size; i++){
    if(A[i]>largest){
        largest=A[i]
    }
}
    console.log(largest)