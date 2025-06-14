// Example callback function
function callback() {
  // Callback logic here
}

receivesAFunction(callback);

function receivesAFunction(callback) {
  callback();
  return callback;
}

function receivesANamedFunction() {
  return returnsANamedFunction();
}

receivesANamedFunction();

function returnsANamedFunction() {
  return function namedFunction() {
    // This function has a name
  };
}

returnsAnAnonymousFunction();

function returnsAnAnonymousFunction() {
  return function() {
    // This function is anonymous
  };
}

