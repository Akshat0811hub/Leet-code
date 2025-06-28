A=[24,18,36,19,43,5]
smallest=A[0]
ssmallest=-1

for (i=1; i<6; i++){
    if(A[i]<smallest){
        ssmallest=smallest;
        smallest=A[i];
    }
    else if (A[i]!=smallest && A[i]<smallest){
        ssmallest=A[i];
    }
    console.log(A[i])
}
console.log("Smallest no. is", smallest)
console.log("Ssmallest no. is", ssmallest)