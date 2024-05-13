const sumAll = function(first, last) {
    if(first < 0 || last < 0) return 'ERROR';
    if(typeof first != 'number' || typeof last != 'number') return 'ERROR';
    let result = 0;
    if(first < last){
        for(let i = first; i<=last; i++){
            result += i;
        }
    } else if(first > last){
        for (let i = last; i <= first; i++) {
            result += i;            
        }
    } else {
        return first;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
