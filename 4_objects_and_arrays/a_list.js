const arrayToList = (elements = []) => {
    let list = {};
    for (let i = (elements.length - 1); i >= 0; i--) {
        list = {
            value: elements[i],
            rest: list
        }
    }
    return list;
}

const listToArray = (list) => {
    let arr = [];
    const getValueRecursive = (rest) => {
        arr.push(rest.value);
        if ('value' in rest.rest) {
            getValueRecursive(rest.rest);
        }
    }
    getValueRecursive(list);
    return arr;
}

const prepend = (element, list) => {
    return { value: element, rest: list };
};

const nth = (list, position) => {
    return listToArray(list)[position];
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

