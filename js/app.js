function runExpression() {
  var a = 10;

  function add(b) {
    return a + b;
  }

  console.log(add(90), add(20));
}

console.log(runExpression());

/*
1. Functions are callable objects.
2. Callable objects have scope.
*/