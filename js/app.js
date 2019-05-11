let arr = ['Sean', 'Stephanie', 'Macy', 'Milo'];

// Remove Sean
arr.shift();

// Remove Milo
arr.pop();

// Add Sean back
arr.unshift('Sean');

// Add Milo back
arr.push('Milo');

// Insert Baby Morrison in the middle
// (position, how many to delete, item to add)
arr.splice(2, 0, 'Baby Morrison');

console.log(arr);
