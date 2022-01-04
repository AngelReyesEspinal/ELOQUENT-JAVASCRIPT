let arr = [1, 2, 3, 4, 5, 6, 7];

const arrayToList = (elements = []) => {
    let list = {};
    for (let i = (elements.length - 1); i >= 0; i--) {
        const currentValue = elements[i];
        if ('value' in list) {
            list = {
                value: currentValue,
                rest: list
            }
        } else {
            list = {
                value: currentValue,
                rest: {}
            }
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

const arr2lst = arrayToList(arr);
const lst2arr = listToArray(arr2lst);

//console.log(arr2lst)
//console.log(lst2arr)
//console.log(prepend(0, arr2lst))



