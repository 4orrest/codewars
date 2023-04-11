// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//MY SOLUTION
function XO(str) {
    let xCount = 0
    let oCount = 0
    
    for(let i = 0; i < str.length; i++){
      if(str[i].toLowerCase() === 'x'){
        xCount++
      } else if (str[i].toLowerCase() === 'o'){
        oCount++
      }
    }
  
  if(xCount === oCount){
    return true
  } else {
    return false
  }
}

//top rated solution
function XO(str) {
    let a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}