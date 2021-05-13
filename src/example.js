"use strict";
var concat = function (first, last) {
    return first + last;
};
console.log(concat('Hello ', 'World')); // -> Hello World;
var myHomeTask = {
    howIDoIt: "I Do It Wel",
    someArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", someArray: ["string one", 23] }],
};
var arr = [1, 2, 3, 4, 5];
var sum = arr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});
console.log(sum);
//# sourceMappingURL=example.js.map