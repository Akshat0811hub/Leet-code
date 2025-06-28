A=[24,18,36,19,43,5]
largest=A[0]
slargest=-1

for (i=1; i<6; i++){
    if(A[i]>largest){
        slargest=largest;
        largest=A[i];
    }
    else if (A[i]<largest && A[i]>slargest){
        slargest=A[i];
    }
    console.log(A[i])
}
console.log("Largest no. is", largest)
console.log("Slargest no. is", slargest)
