function makeCoffee(sugar, milk) {
  var instructions = 'Boil water,... ';

  instructions += ' pour into cup,... ';

  instructions += ' add coffee,...';

  instructions += ' add ' + sugar + ' spoons of sugar,...';

  instructions += ' add ' + milk + ' spoons of milk,...';

  instructions += ' enjoy!';

  return instructions;
}

console.log(makeCoffee(4, 3));
