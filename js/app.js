var me = {
  name: 'Sean',
  age: 46
};

var them = [
  this,
  'Macy',
  'Milo',
  function() {
    return this;
  }
];

function global() {
  return this;
}

console.log(global.call(them[3]()));
