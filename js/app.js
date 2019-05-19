/*
This is how 'this' keyword works.
1. Create a person object.
2. Add a firstName and lastName property.
3. Add a getFullName method which returns the person first and last name.
4. Now call the person's full name and assign it to a variable.
5. Print the fullName variable to the console.
6. Create a new person2 variable and assign it to person. Notice how it returns undefined to the console.
8. Change person.firstName to this.firstName so that the object symbol no longer matters.
*/

let person = {
  firstName: 'Sean',
  lastName: 'Morrison',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

let fullName = person.getFullName();

let person2 = person;
person = {};

console.log(fullName);
