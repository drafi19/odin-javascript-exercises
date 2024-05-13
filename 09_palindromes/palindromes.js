const palindromes = function (string) {
    let str = string.toLowerCase().split('').filter((char) => /^[a-zA-Z0-9]+$/.test(char));
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - i - 1]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
