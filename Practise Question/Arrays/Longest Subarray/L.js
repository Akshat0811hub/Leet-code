A=[2,4,1,3,7]
size=5;
N=10;
len=0

for(i=0; i<size; i++){
    for (j=i; j<size; j++){
        s=0
        for (k=i; k<=j; k++){
            s=s+A[k]
        }
        if(s==N)
        len= Math.max(len,j-i+1)
    }
}
    console.log(len)