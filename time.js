//let time=13.05;
let currentTime = new Date();
let time = currentTime.getHours();
if(time>12){
    console.log("Good Afternoon !");
}
else if(time>18){
    console.log("Good Evening !");
}
else{
    console.log("Good Morning !")
}