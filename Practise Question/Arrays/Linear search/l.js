A=[24,18,36,19,43,5]
x=19
loc=-1

for(i=0; i<6; i++){
    if(A[i]==x)
        loc=i
}

if(loc>=0)
    console.log("Element found at",loc)
else
    console.log("Element is not in the list")