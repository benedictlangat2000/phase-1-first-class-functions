// The receivesAFunction function
function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  // The returnsANamedFunction function
  function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
      console.log("This is a named function");
    }
  
    // Return the named function
    return namedFunction;
  }
  
  // The returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    // Return an anonymous function directly
    return function() {
      console.log("This is an anonymous function");
    };
  }
  