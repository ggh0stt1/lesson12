var masArr = ["HTML", 11, "JavaScript", 2, "CSS", 23, 12];

masArr.push("-4");
console.log(masArr);

masArr.unshift("1000");
console.log(masArr);

masArr.push("Last array element");
console.log(masArr);

var arr2 = masArr.filter(function (el) {
  return el !== "JavaScript";
});
console.log(arr2);

var arr3  = arr2.filter(function(el) {
    return (typeof el === "number") && (el % 1 === 0);
});
console.log(arr3);

var arr4 = arr3.map(function(a) {
  return a * a;
});
console.log(arr4);

console.log(Math.max(...arr4));