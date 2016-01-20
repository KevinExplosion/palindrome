function palindrome(word) {
  if(typeof word === 'number') {
    word = word.toString();
  }
  var noSpace = word.replace(/[" "]/g,"");
  var reverse = noSpace.split("").reverse().join("");

  if (reverse === noSpace) {
    return true;
  }

  return false;
}
