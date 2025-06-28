A=[15 , 25 , 31 , 19 , 18 , 27];
loc = 3;
size = 6;
x = 20;
i = size-1;

while (i>=loc){
    A[i+1] = A[i];
    i--;
}


A[loc] = x;
size++;
for(i=0; i<size; i++){
    console.log(A[i])
}