// Write a function that accepts an integer n,
// a string s as parameters, and returns a string of s repeated exactly n times.

//my solution
function repeatStr (n, s) {
    let result = ""  
    for (i = 0; i < n; i++){
      result += s
    }
    return result
  }

  //top rate solution
  function repeatStr (n, s) {
    return s.repeat(n);
  }