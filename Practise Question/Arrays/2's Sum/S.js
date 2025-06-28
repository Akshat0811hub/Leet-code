let A = [1, 2, 6, 9];
let target = 8;
let size = 4;
let found = 0;

for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
        if ((A[i] + A[j]) == target) {
            console.log(A[i], A[j]);
            found = true;
            break;
        }
    }
    if (found) {
        break;
    }
}
