function missingNo(Arr, size) {
    let sum = (size * (size + 1)) / 2;
    let S = 0;
    for (let i = 0; i < Arr.length; i++) {
        S = S + Arr[i];
    }
    return (sum - S);
}

let A = [1, 3, 4, 5];
let size = 5;
let Mno = missingNo(A, size);
console.log(Mno);
