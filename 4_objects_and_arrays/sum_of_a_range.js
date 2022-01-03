const range = (start, end, increment = start < end ? 1 : -1) => {
    let arr = [];
    if (increment < 0) {
        for (let i = start; i >= end; i += increment) arr.push(i);
    } else {
        for (let i = start; i <= end; i += increment) arr.push(i);
    }
    return arr;
}

// SUM function
//const result = range(1,10).reduce((a, b) => a + b); 

console.log(range(1, 10, 3));