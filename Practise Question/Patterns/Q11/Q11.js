m=5
// loop for row
for(i=1; i<=5; i++)
{
    a = "";
    // loop for space
    for(k=1;k<=m;k++)
        a+=" ";
        // loop for column
    for (j=1; j<=i*2-1; j++)
    {
        a+="*";
    }
    console.log(a)
    m--;
}