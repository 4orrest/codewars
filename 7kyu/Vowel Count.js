//DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


//my solution
function getCount(str) {
    let count = 0;
 
   for (let i = 0; i < str.length; i++) {
     switch (str[i]) {
       case "a":
       case "e":
       case "i":
       case "o":
       case "u":
         count++;
         break;
       default:
         break;
     }
   }
 
   return count;
 }

 //top rated solution
 function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }