k=1
for (i=1; i<=5; i++){
    a=""
    for (j=1; j<=i; j++){
        a=a+k;
        k=(k==0)?1:0;
    }
    console.log(a)
}
