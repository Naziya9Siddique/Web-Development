//Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”).

let grade=78;
if(grade===10){
    console.log(" A ");
}
else if(grade>=80){
    console.log(" B ");
}
else if(grade >= 60){
    console.log(" C ");
}
else if(grade>=33){
    console.log(" D ");
}
else {
    console.log("Fail")
}