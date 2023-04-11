//Convert a number to a string!
function stringify(num){
    return num.toString()
}

// Write a function that accepts an integer n and a string sas parameters, and returns a string of s
//  repeated exactly ntimes.
function repeater(n, s){
    return s.repeat(n)
}

//Remove string spaces
function removeSpaces(str){
    return str.replace(/\s\g, "")
}

//Convert boolean values to strings 'Yes' or 'No'
function converter(bool){
    return bool ? 'Yes':'No'
}

//Counting Sheep
//find out how many sheep there are in an array
//each "true means there is a sheep"
function sheepCount(arrayOfSheep){
    if arrayOfSheep.filter(Boolean).length
}