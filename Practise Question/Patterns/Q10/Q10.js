for (i=1; i<=5; i++){
    a=""
    k=(i%2==0)?0:1;
    for (j=1; j<=i; j++){
        a=a+k;
        k=(k==0)?1:0;
    }
    console.log(a)
}
