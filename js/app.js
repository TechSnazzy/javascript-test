/*
What is happening here?
1. Create a new Apple constructor object.
2. Create a new Apple prototype object.
3. Create new apple1, apple2, apple3 objects.
4. Print results to the console.
*/

function Apple(color, weight) {
  this.color = color;
  this.weight = weight;
}

Apple.prototype = {
  eat: function() {
    return 'eat the apple';
  },
  throw: function() {
    return 'throw the apple';
  }
};

let apple1 = new Apple('red', 99);
let apple2 = new Apple('green', 109);
let apple3 = new Apple('yellow', 299);

console.log(
  'My apple is ' +
    apple1.color +
    ' and weighs ' +
    apple1.weight +
    ' ounces and I will ' +
    apple1.eat() +
    '.'
);
