/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let i = 0;
    let j = S.length * 2;
    return Array.apply(null, Array(S.length)).map((val, index) => {
        return S[index] === "I" ? i++ : j--;
    }).map((val, index) => {
        return val > i ? val - (j - i) : val;
    }).concat(i);
};