function Cat(color, gender) {
  this.color = color;
  this.gender = gender;
}

Cat.prototype = {
  sleep: function() {
    return 'sleeping';
  },
  dream: function() {
    return 'dreaming';
  }
};

let macy = new Cat('gray and white', 'female');
let milo = new Cat('black and white', 'male');

console.log(
  'I am a ' + macy.color + ', ' + macy.gender + ' and I am ' + macy.sleep()
);

console.log(
  'I am a ' + milo.color + ', ' + milo.gender + ' and I am ' + milo.dream()
);
