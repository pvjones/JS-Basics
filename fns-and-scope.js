//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  function isTyler(name) {
    if (name === "Tyler") {
      return true;
    } else {
      return false;
    }
  };

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  function getName() {
    return prompt();
  }

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  function welcome() {
    alert("Welcome, " + getName())
  }

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
  //A parameter is like a temporary variable that will be used in a function. A parameter is the actual value that will be passed into the function using that parameter.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  // [false, 0, "", NaN, undefined, null]
  // You can check if a value is truthy or falsy using a comparison operator or an if statement.


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  function myName() {
    return "Paul Jones";
  }


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName


//Now alert the result of invoking newMyName

alert(newMyName())

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  function outerFn() {
    return function anonymous() {
      return "Paul Jones";
    }
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn()

//Now invoke innerFn.

  anonymous()
