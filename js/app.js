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
