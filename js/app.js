function name() {
  let firstName = 'Sean';
  let space = ' ';
  let lastName = 'Morrison';

  function isCool(word) {
    return word;
  }

  return isCool(firstName + space + lastName + ' is cool');
}

console.log(name());
