function isPrime(num){
    if (num <= 0) return false;

    for (let i = 2; i < num; i++){
        while(num% i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(2)) // true
console.log(isPrime(4)) // false
