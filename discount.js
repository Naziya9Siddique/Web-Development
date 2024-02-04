//Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 
//discount have a discount of 20.Prices equal or over 50 have a discount of 10. Otherwise discount is 0

let price=40;
if(price>=100){
    console.log("Got discount of 20.");
}else if(price>=50)
{
    console.log("Got discount of 10.");
}
else{
    console.log("No discount!")
}