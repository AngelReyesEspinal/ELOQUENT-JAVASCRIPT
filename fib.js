const isPrimeNumber = (number) => {
    for(let i = 2; i < number; i++)
        if (number % i === 0) 
            return false;
    return true;
};

const getFibonacciNumber = (number) => {
    const arr = [0, 1];
    for (let i = 2; i < number + 1; i++)
        arr.push(arr[i - 2] + arr[i - 1])
    return arr[number];
};

const getNextPrimeFibonacciNumber = (number) => {
    let fibonacciSequenceNumber = 1;
    while (true) {
        const fibonacciNumber = getFibonacciNumber(fibonacciSequenceNumber);
        const isPrimeAndFibbonaciNumber = (fibonacciNumber > number && isPrimeNumber(fibonacciNumber));
        if (isPrimeAndFibbonaciNumber) 
            return fibonacciNumber;
        fibonacciSequenceNumber++;
    }
};

console.log(getNextPrimeFibonacciNumber(20));
