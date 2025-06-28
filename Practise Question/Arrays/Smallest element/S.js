A=[10,20,70,40,50]
let smallest=A[0]
size=A.length

for (i=1; i<size; i++){
    if(A[i]<smallest){
        smallest=A[i]
    }
}
    console.log(smallest)