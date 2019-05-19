function Apple(x, y, color, score) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.score = score;
}

let apple1 = new Apple(10, 20, 'Red', 200);
let apple2 = new Apple(100, 200, 'Green', 50);
let apple3 = new Apple(20, 200, 'Pink', 10);

console.log(apple1);
console.log(apple2);
console.log(apple3);
