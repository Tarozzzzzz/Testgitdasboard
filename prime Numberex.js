function isPrime(num){
  let i = num - 1;
  while (i < n ) {
    if(n % i == 0)
        return false

    i++;
  }
return true
}

let counter = 3
while(counter <=20){
    if(isPrime(counter)){
        console.log(counter)
    }
    counter++
}