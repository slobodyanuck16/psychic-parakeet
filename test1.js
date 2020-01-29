var arr = [40, 20, 42, 100, 67];
function getMin(arr) {
    var min;
    min = Math.min.apply(null, arr);
    return min;
}
console.log(getMin(arr));