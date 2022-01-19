function every(array, test) {
    let isEvery = true;
    for (let i = 0; i < array.length; i++) {
        if (!test(array[i])) {
            isEvery = false;
            break;
        }
    }
    return isEvery;
}

const every2 = (array, test) => !array.some(x => !test(x));

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));
