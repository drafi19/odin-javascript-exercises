const reverseString = (string) => {
    let word = string.split("");
    let wordReversed = [];
    for(let i=word.length-1; i>=0; i--){
        wordReversed.push(word[i]);
    }
    return wordReversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
