// // Qs1.Write a JavaScript function that returns array elements larger than a number

// let arr=[1,2,9,10,3,5,6,7,8,4];
// let num=5;
// function getElements(arr,num){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }
// }
// getElements(arr,num);

// // Qs2.Write a JavaScript function to extract unique characters from a string.
// // Example:str=“abcdabcdefgggh”   ans="abcdefgh"
 
// let str="abcdabcdefgggh";
 
//  function getUnique(str){
//     let ans="";
//     for(let i=0; i<str.length; i++){
//         currChar= str[i];
//         if(ans.indexOf(currChar) == -1){
//          ans+=currChar;
//         }
//     }
//         return ans;
//  }
//     getUnique(str);

// //Write a JavaScript function that accepts a list of country names as input and returns the longest country name
// // as output. Example:country=["Australia","Germany","United States of America"] output:"United States of America"  

// let country=["Australia","Germany","United States of America"];
//  function longestName(country){
//     let ansIdx=0;
//     for(let i=0; i<country.length; i++){
//         let anslen= country[ansIdx].length;
//         let currlen=country[i].length;
//         if(currlen>anslen){
//             ansIdx=i;
//         }
//     }return country[ansIdx];
//  }
//     longestName(country);

//     //Qs4.Write a JavaScript function to count the number of vowels in a String argument
//     let str1="Apna College";
//      function vowelCount(str1){
//         let count=0;
//         for(let i =0; i<str.length; i++){
//             if(str1[i]=='a' || str1[i]=='e' ||str1[i]=='i' || str1[i]=='o' ||str1[i]=='u' ){
//                 count++;
//             }
//         }
//         return count;
//      }

     //Qs5.Write a JavaScript function to generate a random number within a range(start, end)
     let start=100;
     let end=200;
     function getRandom(start,end){
        diff=end-start;
       return Math.floor(Math.random() * diff)+ start;
     }