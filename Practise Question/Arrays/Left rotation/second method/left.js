A = [10 , 20 , 30 , 40 , 50]
size=5
B = A.shift()
A.push(B)

for (i=0; i<size; i++){
    console.log(A[i])
}