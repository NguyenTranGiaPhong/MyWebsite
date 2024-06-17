function kiemTraNguyenTo(n) {
    if (n <= 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
function demSoNguyenTo(n) {
    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (kiemTraNguyenTo(i)) {
            count++;
        }
    }
    return count;
}
console.log(demSoNguyenTo(10)); 
console.log(demSoNguyenTo(20));
console.log(demSoNguyenTo(1));
console.log(demSoNguyenTo(2)); 
