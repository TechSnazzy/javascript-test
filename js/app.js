let classRegister = ['Lawrence', 'John', 'Jeff'];

// Increment

for (let i = 0; i < classRegister.length; i++) {
  console.log(classRegister[i]);
}

// Decrement

for (let i = classRegister.length - 1; i >= 0; i--) {
  console.log(classRegister[i]);
}

// The for...in loop

for (var index in classRegister) {
  console.log(classRegister[index]);
}
