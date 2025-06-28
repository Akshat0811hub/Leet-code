A = [10 , 20 , 30 , 40 , 50]
size = 5
temp = A[0]

for (i=0; i<size; i++){
    A[i] = A[i+1]
}
A[size-1] = temp;

for (i=0; i<size; i++){
    console.log(A[i])
}