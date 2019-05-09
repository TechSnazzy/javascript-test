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

console.log(
  '#' + code.todo(100) + 'DaysOfCode:' + ' Continue learning ' + code.verb()
);
