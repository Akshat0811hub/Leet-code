function lengthOfLastWord(s) {
  // Trim the string to remove extra spaces, then split by spaces
  const words = s.trim().split(" ");
  return words[words.length - 1].length;
}