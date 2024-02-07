// Print all odd numbers (1 to 15)
console.log("Odd number 1 to 15")
for(let i=1; i<=15; i++){
    if(i%2===1){
    console.log(i)
}
}

// even numbers(1 t0 20) in reverse
console.log("Even number in reverse"); 
for(let i=20; i>=1; i--){
    if(i%2==0){
        console.log(i);
    }
 }

 console.log("Multiplication of 5");
 for (let i=5; i<=50; i=i+5){
    console.log("5 X 1 =",i);
 }

 console.log("Multiplication of number given by user");
 let n=prompt("Enter any number for table");
 n=parseInt(n);
 for (let i=n; i<=n*10; i=i+n){
    console.log(i);
 }