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
console.log(kiemTraNguyenTo(7)); 
console.log(kiemTraNguyenTo(23));
console.log(kiemTraNguyenTo(12));
console.log(kiemTraNguyenTo(1)); 
