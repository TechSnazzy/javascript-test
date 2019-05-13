function name(fullname) {
  return fullname();
}

console.log(
  name(function() {
    return 'embed';
  })
);

/*
1. Invoke the function name which is a callable object.
2. This callable object receives argument and assigns it to fullname.
3. Then we return fullname.

So we are literally returning a callable object.
*/
