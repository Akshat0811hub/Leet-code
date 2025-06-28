A=[10,20,30,40,50,60,70,80,90,100]
beg=0
size=10
end=size-1
loc=-1
found=0
x=50


for (i=0; i<size; i++){
    mid=Math.floor((beg+end)/2)
    if (A[mid]==x){
        found=1
        loc=mid
        break;
    }
    else if (A[mid]>x){
        end=mid-1
    }
    else{
        beg=mid+1
    }
}

if(found=1){
    console.log("Element found at",loc)
}
else{
    console.log("Element not found")
}