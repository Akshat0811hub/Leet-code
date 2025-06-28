A=[1,2,3,4,5,6,7,8,9,10]
B=[2,3,4,4,5,11,12]
c=[]
let i=0;
let j=0;

while (i<A.length && j<B.length){
    if(A[i]<=B[j]){
        if(c.length==0||c[c.length-1]!=A[i])
        c.push(A[i])
        i++
    }
    else{
        if(c.length==0||c[c.length-1]!=B[j])
        c.push(B[j])
        j++
    }
}
    while(i<A.length){
        if(c[c.length-1]!=A[i])
        c.push(A[i])
        i++;
    }
        while(j<B.length){
        if(c[c.length-1]!=B[j])
        c.push(B[j])
        j++;
    }
    for(i=0; i<c.length; i++)
    console.log(c[i])
