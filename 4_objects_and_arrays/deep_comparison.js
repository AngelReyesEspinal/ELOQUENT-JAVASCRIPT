const obj = { here: { is: "an" }, object: 2 };

function deepEqual(obj1, obj2) {
    let isEqualObject = true;
    for (const key of Object.keys(obj1)) {
        const isInnerObject = ((obj1[key] && obj2[key]) && (typeof obj1[key] == "object" && typeof obj2[key] == "object"));
        isEqualObject = isInnerObject ? deepEqual(obj1[key], obj2[key]) : obj1[key] === obj2[key];
        if (!isEqualObject) return isEqualObject;
    }
    return isEqualObject;
}

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
