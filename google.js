function google(num) {
    if( n % 3 == 0 && num % 5 == 0) {
        return "google"
    } else if(num % 3 ==0 ){
        return "goo"
    } else if(num % 5 == 0) {
        return "gle"
    } else {
        return num
    }

}

console.log('google(6) : ${google(6)}')
console.log('google(10) : ${google(10)}')
console.log('google(15) : ${google(15)}')
console.log('google(17) : ${google(17)}')