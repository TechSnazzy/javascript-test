let code = {
  noun: 'HTML',
  adjective: 'CSS',
  verb: function() {
    return 'JavaScript';
  },
  todo: function(days) {
    return days;
  }
};

// add a new key to the code object
code.hello = 'hello';

// add a new method to the code object
code.todont = function() {
  return 'I do not know!';
};

// delete the property
delete code.todont;

let fruit = [
  'Apple',
  'Orange',
  function() {
    return 'Banana';
  }
];

console.log(
  '#' + code.todo(100) + 'DaysOfCode:' + ' Continue learning ' + code.verb()
);

console.log(`I have an ${fruit[0]} and a ${fruit[1]} and a ${fruit[2]()}.`);
