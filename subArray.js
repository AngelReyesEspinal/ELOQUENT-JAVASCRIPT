//

function countNumberOfSubarrays(arr, k) {
    // Write your code here
    if (k < Math.pow(-10, 9)  || k > Math.pow(10, 9)) return;
    if (arr.length < 1 || arr.length > Math.pow(10, 5)) return;
    
    let aux = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if (arr[i] < Math.pow(-10, 9)  || arr[i] > Math.pow(10, 9)) return;
        
        let sum = 0;
        for(let j = i; j < arr.length; j++)
        {
            sum += arr[j];
            if (sum === k)
                aux++;
        }
    }
    return aux;
}
