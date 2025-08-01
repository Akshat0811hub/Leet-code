function longestPalindrome(s) {
  if (s.length < 2) return s;

  let start = 0, end = 0;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return [left + 1, right - 1];
  };

  for (let i = 0; i < s.length; i++) {
    let [left1, right1] = expandAroundCenter(i, i);       // odd length
    let [left2, right2] = expandAroundCenter(i, i + 1);   // even length

    if (right1 - left1 > end - start) {
      start = left1;
      end = right1;
    }

    if (right2 - left2 > end - start) {
      start = left2;
      end = right2;
    }
  }

  return s.slice(start, end + 1);
}

