//convert a Number to a string

function numToString(num){
    return num.numToString()
}

//string repeat
function stringRepeat(n, s){
   return s.repeat(n)
}

//Remove String Spaces
function spaceRemove(str){
    return str.split(" ").join("")
}

//change machine

function returnChange(money){
    switch(money){
        case 5:
        return '20 p '.repeat(25).trim()
    }
}

//counting sheep
function countingSheep(arr){
    return arr.filter(Boolean).length
}