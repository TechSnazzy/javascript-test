function runExpression() {
  var a = 10;

  function add(b) {
    return a + b;
  }

  console.log(add(90), add(20));
}

console.log(runExpression());
