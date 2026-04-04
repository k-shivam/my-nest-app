let n = 200

let output = 221

let x = 0

while(n>0){
    x = x * 10 + n%10;
    n = Math.floor(n/10)
}

console.log(x)