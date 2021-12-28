const getMinimunNumber = (n1, n2) => {
    if (n1 < n2) 
        return n1;
    return n2;
}

const minimunNumber = getMinimunNumber(3, 2);
console.log(minimunNumber);