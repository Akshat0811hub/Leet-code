function isPalindrome(x) {
    
    let str = x.toString();
    
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
let x = 121;
console.log(isPalindrome(x)); 
