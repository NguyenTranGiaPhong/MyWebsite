function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    let fibPrev = 0;
    let fibCurrent = 1;
    let fibNext;
    for (let i = 2; i <= n; i++) {
        fibNext = fibPrev + fibCurrent;
        fibPrev = fibCurrent;
        fibCurrent = fibNext;
    }
    return fibCurrent;
}
console.log(fibonacci(5)); 
console.log(fibonacci(10)); 
console.log(fibonacci(20)); 
