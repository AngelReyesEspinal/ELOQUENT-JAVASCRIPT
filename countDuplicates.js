function countDuplicate(numbers) {
    // Write your code here
    let duplicateValues = new Set();
    numbers.forEach((item, i, ar) => {
        if (ar.filter(x => x === item).length > 1) duplicateValues.add(item);
    });
    return duplicateValues.size;
}
