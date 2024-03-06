function reverseString(text){
    
    let charArray=text.split("");

    let arrayReverse= charArray.reverse();

    
    let reverseText=arrayReverse.join('');
    return reverseText;
    

} 

// Do not edit below this line
module.exports = reverseString;