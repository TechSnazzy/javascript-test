function name() {
  let firstName = 'Sean';
  let space = ' ';
  let lastName = 'Morrison';

  function isAwesome(word) {
    return word;
  }

  return isAwesome(firstName + space + lastName + ' is awesome!');
}

console.log(name());
