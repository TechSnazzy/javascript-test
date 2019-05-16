var engine = {
  type: 'Chevy',
  color: 'Red'
};

function runExpression() {
  var a = 10;

  function add() {
    var engine = 'String engine';
    console.log(engine);
  }

  add();
}

console.log(runExpression());
